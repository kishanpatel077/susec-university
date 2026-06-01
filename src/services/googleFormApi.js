export const DEFAULT_APPLY_SCRIPT_URL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '';

export const submitToGoogleSheet = async (payload, scriptUrl = DEFAULT_APPLY_SCRIPT_URL) => {
  if (!scriptUrl) {
    throw new Error('Google Apps Script URL is missing. Set VITE_GOOGLE_APPS_SCRIPT_URL in your .env file.');
  }

  const response = await fetch(scriptUrl, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  let result;
  try {
    result = await response.json();
  } catch {
    throw new Error(
      'Unable to reach Google Sheets. Confirm the Apps Script web app is deployed with "Anyone" access.',
    );
  }

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to submit your application right now.');
  }

  return result;
};

export const submitApplyForm = submitToGoogleSheet;
