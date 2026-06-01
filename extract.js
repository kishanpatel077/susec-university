import fs from 'fs';

const urls = [
  ['coworking-space', 'https://docs.google.com/forms/d/e/1FAIpQLSdL4OdbyPud0UMV07Le058a4qUgQXpA2gV9BjkahHpPZZjzbg/viewform'],
  ['ssip-poc-support', 'https://docs.google.com/forms/d/e/1FAIpQLSdl3Qdhm2EukNSRy-Oxvr6tsOZP6R-wkWzniXUfZ6zlRA5lXA/viewform'],
  ['patent', 'https://docs.google.com/forms/d/e/1FAIpQLSc_4r-rTz_8Wct00sN2qpP9AD11lME8_kwaNJNz1POiUcE0IQ/viewform'],
  ['trademark', 'https://docs.google.com/forms/d/e/1FAIpQLScD3_9Gr6PpZzaBXndAdbi6LjrCAzjS-rVS-HXiCR4EsAwI0Q/viewform'],
  ['copyright', 'https://docs.google.com/forms/d/e/1FAIpQLScLr2icZ1zhyEr4EnSnOyBjLh45FTx0MAWgkilN2ryyoQDVgw/viewform'],
  ['design', 'https://docs.google.com/forms/d/e/1FAIpQLSdVjFNU2y2nC-VaR-ameHNbcswcOPCDttM2tL9Z351j2xWsrg/viewform'],
  ['ip-facilitator-registration', 'https://docs.google.com/forms/d/e/1FAIpQLSdo29wxz1IZDBCgvFwSihB2OHSYvo2ImBxf0g7SH4A6cJnq0g/viewform'],
];

function parsePublicLoadData(html) {
  const marker = 'FB_PUBLIC_LOAD_DATA_ =';
  const startIndex = html.indexOf(marker);
  if (startIndex === -1) {
    return null;
  }

  const rest = html.substring(startIndex + marker.length);
  const endScriptIndex = rest.indexOf('</script>');
  let jsCode = rest.substring(0, endScriptIndex).trim();
  if (jsCode.endsWith(';')) {
    jsCode = jsCode.slice(0, -1);
  }

  let bracketCount = 0;
  let endJsonIndex = -1;
  for (let i = 0; i < jsCode.length; i += 1) {
    if (jsCode[i] === '[') {
      bracketCount += 1;
    } else if (jsCode[i] === ']') {
      bracketCount -= 1;
      if (bracketCount === 0) {
        endJsonIndex = i + 1;
        break;
      }
    }
  }

  if (endJsonIndex === -1) {
    return null;
  }

  return JSON.parse(jsCode.substring(0, endJsonIndex));
}

function mapGoogleFieldType(typeCode, options = []) {
  if (typeCode === 1) {
    return 'textarea';
  }

  if (typeCode === 2 && options.length === 1 && options[0] === 'Yes') {
    return 'checkbox';
  }

  if ([2, 3, 5].includes(typeCode)) {
    return 'select';
  }

  if (typeCode === 4) {
    return 'select';
  }

  return 'text';
}

function extractFields(data) {
  const title = data[1][8] || data[1][0];
  const items = data[1][1] || [];
  const fields = [];

  for (const item of items) {
    const label = item[1];
    const typeCode = item[3];
    if (!label) {
      continue;
    }

    let required = false;
    let options = [];
    const inputMeta = item[4] ? item[4][0] : null;

    if (inputMeta) {
      required = Boolean(inputMeta[2]);
      if (inputMeta[1]) {
        options = inputMeta[1].map((option) => option[0]).filter(Boolean);
      }
    }

    const type = mapGoogleFieldType(typeCode, options);
    fields.push({
      name: label,
      label,
      type,
      required,
      options: options.length > 0 ? options : undefined,
      submitValue: type === 'checkbox' ? 'Yes' : undefined,
    });
  }

  return { title, fields };
}

async function extractForm(slug, url) {
  console.log(`Fetching ${slug}`);
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  });
  const html = await response.text();
  const data = parsePublicLoadData(html);

  if (!data) {
    console.log(`  No metadata found (${response.status})`);
    return null;
  }

  return {
    slug,
    url,
    ...extractFields(data),
  };
}

async function run() {
  const results = {};

  for (const [slug, url] of urls) {
    try {
      const result = await extractForm(slug, url);
      if (result) {
        results[slug] = result;
      }
    } catch (error) {
      console.error(`  Error: ${error.message}`);
    }
  }

  fs.writeFileSync('extracted_forms.json', JSON.stringify(results, null, 2));
  console.log('Saved extracted_forms.json');
}

run();
