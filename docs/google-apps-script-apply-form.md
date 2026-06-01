# Google Apps Script setup for SUSEC apply forms

All **8 React apply forms** under the Apply menu submit to Google Sheets through one Apps Script URL configured in `.env`:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Each submission includes `"Application Type"` (the form title) so the script can route to the correct sheet tab.

## Apply forms covered

| Form | React route |
|------|-------------|
| Apply Coworking space for startup | `/apply/coworking-space` |
| Apply For SSIP PoC Support (Upto 2.5lacs) | `/apply/ssip-poc-support` |
| Apply for Patent | `/apply/patent` |
| Apply for Trademark | `/apply/trademark` |
| Apply for Copyright | `/apply/copyright` |
| Apply for Design | `/apply/design` |
| Startup Interested for Angel Investment and VC Funding | `/apply/angel-investment-vc-funding` |
| IP facilitator Registration Form | `/apply/ip-facilitator-registration` |

**Note:** *Apply for Startup Support (Upto 40 lacs)* links to the external Gujarat Startup portal and is not a React form.

---

## Option A — One spreadsheet, multiple tabs (recommended)

Use `docs/google-apps-script-all-apply-forms.gs` when you want **one** web app URL for all forms.

1. Create (or open) one Google Spreadsheet.
2. Add a tab for each form (e.g. `Coworking`, `SSIP PoC`, `Patent`, …).
3. Copy row 1 headers from each Google Form response sheet into the matching tab.
4. Go to **Extensions → Apps Script**, paste `google-apps-script-all-apply-forms.gs`.
5. Update `FORM_SHEET_TABS` if your tab names differ.
6. **Deploy → New deployment → Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
7. Copy the `/exec` URL into `.env` as `VITE_GOOGLE_APPS_SCRIPT_URL`.
8. Restart the dev server (`npm run dev`).

---

## Option B — One script per Google Form response sheet

Use this when each form already has its own Google Form response spreadsheet.

1. Open a form's **response Google Sheet**.
2. Go to **Extensions → Apps Script**.
3. Paste the single-sheet script below into `Code.gs`.
4. Deploy as Web app (**Anyone** access) and copy the URL.
5. Set that URL on the matching entry in `src/config/applyForms.js`:

```js
{
  slug: 'patent',
  title: 'Apply for Patent',
  scriptUrl: 'https://script.google.com/macros/s/PATENT_DEPLOYMENT_ID/exec',
  // ...
}
```

Repeat for each form. If `scriptUrl` is omitted, the form uses `VITE_GOOGLE_APPS_SCRIPT_URL`.

---

## Single-sheet Apps Script (Option B)

Update `SHEET_NAME` only if your response tab is not named `Form Responses 1`.

```js
const SHEET_NAME = 'Form Responses 1';

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error(`Sheet tab "${SHEET_NAME}" was not found.`);
    }

    const payload = JSON.parse(event.postData.contents || '{}');
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Preserve existing Google Form response sheet column order.
    const nextRow = headers.map((header) => {
      if (header === 'Timestamp') {
        return new Date();
      }

      return payload[header] || payload[getAlias(header)] || payload[toCamelCase(header)] || '';
    });

    sheet.appendRow(nextRow);

    return createJsonResponse({
      success: true,
      message: 'Application submitted successfully.',
    });
  } catch (error) {
    return createJsonResponse({
      success: false,
      message: error.message,
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return createJsonResponse({
    success: true,
    message: 'SUSEC apply form API is running.',
  });
}

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getAlias(header) {
  const aliases = {
    'Name of Applicant': 'Applicant Name',
    'Applicant Name': 'Name of Applicant',
    'Email Id': 'Email Address',
    'E Mail Address': 'Email Address',
    'Email Address': 'Email Id',
    Email: 'Email Id',
    'Contact No.': 'Mobile Number',
    'Mobile Number': 'Contact No.',
  };

  return aliases[header] || header;
}

function toCamelCase(value) {
  return String(value)
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+(.)/g, (_, character) => character.toUpperCase())
    .replace(/^(.)/, (_, character) => character.toLowerCase());
}
```

## 2. Deploy the Apps Script API

1. Click **Deploy → New deployment**.
2. Select **Web app**.
3. Set **Execute as** to **Me**.
4. Set **Who has access** to **Anyone**.
5. Click **Deploy** and authorize the script.
6. Copy the Web app URL ending with `/exec`.

## 3. Configure React environment variable

Create `.env` in the Vite app root:

```env
VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Restart the dev server after changing `.env`.

## 4. Match Sheet column names

The frontend now sends keys that match the Google Form labels shown in your screenshots:

- `Timestamp` is filled by Apps Script.
- `Name of Applicant`
- `Email Id`
- `Contact No.`
- `College / Organization`
- `Department / Designation`
- `Startup / Project Name`
- `Application Summary`
- `Application Type`
- `Applicant Name`
- `Email Address`
- `Mobile Number`
- `Source`
- `SubmittedAt`

The first group is the exact Google Form-style field naming. The second group (`Applicant Name`, `Email Address`, `Mobile Number`) is sent as a compatibility alias in case an older response tab uses those column names. The Apps Script always maps values in the current Sheet header order, so row order stays aligned with the existing response tab.

## 5. Example fetch request

```js
await fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL, {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'text/plain;charset=utf-8',
  },
  body: JSON.stringify({
    'Application Type': 'Apply for Patent',
    'Name of Applicant': 'Demo Applicant',
    'Email Id': 'demo@example.com',
    'Contact No.': '9876543210',
    'College / Organization': 'Saurashtra University',
    'Department / Designation': 'Founder',
    'Startup / Project Name': 'Demo Innovation',
    'Application Summary': 'A short summary of the application requirement.',
    Source: 'SUSEC React Website',
    SubmittedAt: new Date().toISOString(),
  }),
});
```
