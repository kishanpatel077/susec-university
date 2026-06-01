/**
 * SUSEC — All Apply forms → Google Sheets (single deployment)
 *
 * Paste into Apps Script on ONE spreadsheet, then create a tab per form
 * (copy row-1 headers from each linked Google Form response sheet).
 *
 * Deploy: Web app · Execute as Me · Who has access: Anyone
 */

const FORM_SHEET_TABS = {
  'Apply Coworking space for startup': 'Coworking',
  'Apply For SSIP PoC Support (Upto 2.5lacs)': 'SSIP PoC',
  'Apply for Patent': 'Patent',
  'Apply for Trademark': 'Trademark',
  'Apply for Copyright': 'Copyright',
  'Apply for Design': 'Design',
  'Startup Interested for Angel Investment and VC Funding': 'Angel VC',
  'IP facilitator Registration Form': 'IP Facilitator',
};

const DEFAULT_SHEET_TAB = 'Form Responses 1';

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    const payload = JSON.parse(event.postData.contents || '{}');
    const applicationType = payload['Application Type'] || '';
    const sheetName = FORM_SHEET_TABS[applicationType] || DEFAULT_SHEET_TAB;
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);

    if (!sheet) {
      throw new Error(
        'Sheet tab "' + sheetName + '" was not found for "' + applicationType + '".',
      );
    }

    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = headers.map(function (header) {
      if (header === 'Timestamp') {
        return new Date();
      }

      return payload[header] || payload[getAlias(header)] || payload[toCamelCase(header)] || '';
    });

    sheet.appendRow(nextRow);

    return createJsonResponse({
      success: true,
      message: 'Application submitted successfully.',
      sheet: sheetName,
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
    message: 'SUSEC apply forms API is running.',
    forms: Object.keys(FORM_SHEET_TABS),
  });
}

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function getAlias(header) {
  var aliases = {
    'Name of Applicant': 'Applicant Name',
    'Applicant Name': 'Name of Applicant',
    'Email Id': 'Email Address',
    'Email id': 'Email Address',
    'E Mail Address': 'Email Address',
    'Email Address': 'Email Id',
    Email: 'Email Id',
    'Contact No.': 'Mobile Number',
    'Mobile Number': 'Contact No.',
    'Mail Id of Team Leader': 'Email Address',
    'Contact Number of Team Leader': 'Mobile Number',
    'Name of Team Leader': 'Applicant Name',
  };

  return aliases[header] || header;
}

function toCamelCase(value) {
  return String(value)
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+(.)/g, function (_, character) {
      return character.toUpperCase();
    })
    .replace(/^(.)/, function (_, character) {
      return character.toLowerCase();
    });
}
