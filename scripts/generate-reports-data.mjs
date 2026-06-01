import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PUBLIC_LATEST_DIR = path.join(
  ROOT,
  "public",
  "susec-assets",
  "img",
  "latest",
);
const OUTPUT_JSON = path.join(ROOT, "src", "data", "reports.all.generated.json");

const SITE_BASE = "https://www.susec.ac.in/";
const REPORTALL_URL = new URL("reportall.php", SITE_BASE);

function decodeMaybe(s) {
  try {
    // reportall.php uses percent-encoding in places
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

function normalizeWhitespace(s) {
  return s.replace(/\s+/g, " ").trim();
}

function htmlDecodeBasic(s) {
  // Minimal entity decoding seen on the page.
  return s
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ")
    .replaceAll("&ndash;", "–")
    .replaceAll("&mdash;", "—");
}

async function fetchText(url) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: {
      // Some hosts behave better with an explicit UA.
      "User-Agent": "susec-university-local/1.0",
      Accept: "text/html,*/*",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return await res.text();
}

function parseReportAllTable(html) {
  // Extract rows like:
  // <tr> <td>1</td> <td><a href="img/latest/...pdf"><b>Title</b></a></td> <td><sup>09-12-2025</sup></td> </tr>
  const rows = [];
  const trRegex = /<tr\b[\s\S]*?>[\s\S]*?<\/tr>/gi;
  const trs = html.match(trRegex) ?? [];

  for (const tr of trs) {
    const srMatch = tr.match(/<td[^>]*>\s*(\d+)\s*<\/td>/i);
    const hrefMatch = tr.match(/href\s*=\s*["']([^"']+?\.pdf)["']/i);
    const titleMatch = tr.match(/<b>\s*([\s\S]*?)\s*<\/b>/i);
    const dateMatch = tr.match(/<sup>\s*([\d-\/]+)\s*<\/sup>/i);
    if (!srMatch || !hrefMatch || !titleMatch || !dateMatch) continue;

    const srNo = Number(srMatch[1]);
    const href = hrefMatch[1];
    const title = normalizeWhitespace(htmlDecodeBasic(titleMatch[1]));
    const date = normalizeWhitespace(htmlDecodeBasic(dateMatch[1]));
    rows.push({ srNo, title, date, href });
  }

  return rows;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function getLocalPdfUrlIfExists(href, availableNames) {
  // href is like img/latest/Foo%20Bar.pdf
  const hrefPath = href.replaceAll("\\", "/");
  const leaf = hrefPath.split("/").pop() || "";
  const decodedLeaf = decodeMaybe(leaf);

  if (availableNames.has(decodedLeaf)) {
    return `/susec-assets/img/latest/${encodeURI(decodedLeaf)}`;
  }
  // If the filename in folder is percent-encoded (rare), try raw leaf too.
  if (availableNames.has(leaf)) {
    return `/susec-assets/img/latest/${encodeURI(leaf)}`;
  }
  return null;
}

async function main() {
  const availableNames = new Set(
    fs.existsSync(PUBLIC_LATEST_DIR)
      ? fs.readdirSync(PUBLIC_LATEST_DIR).filter((n) => n.toLowerCase().endsWith(".pdf"))
      : [],
  );

  const all = new Map(); // srNo -> row
  for (let page = 1; page <= 20; page++) {
    const url = new URL(REPORTALL_URL);
    url.searchParams.set("page", String(page));
    const html = await fetchText(url);
    const rows = parseReportAllTable(html);
    if (rows.length === 0) break;

    for (const row of rows) {
      const sourceUrl = new URL(row.href, SITE_BASE).toString();
      const local = getLocalPdfUrlIfExists(row.href, availableNames);
      all.set(row.srNo, {
        srNo: row.srNo,
        title: row.title,
        date: row.date,
        pdfUrl: local ?? sourceUrl,
        sourceUrl,
      });
    }
  }

  const out = Array.from(all.values()).sort((a, b) => a.srNo - b.srNo);
  ensureDir(path.dirname(OUTPUT_JSON));
  fs.writeFileSync(OUTPUT_JSON, JSON.stringify(out, null, 2), "utf8");

  console.log(`Generated ${out.length} reports -> ${path.relative(ROOT, OUTPUT_JSON)}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

