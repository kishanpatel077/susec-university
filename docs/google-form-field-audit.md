# Google Form field audit

Checked against the supplied SUSEC Google Form URLs on May 30, 2026.

## Access result

The following forms redirect to Google sign-in before their form metadata is visible, so their full field list cannot be extracted without an authorized Google session or screenshots/export from the form owner:

- Apply Coworking space for startup
- Apply For SSIP PoC Support (Upto 2.5lacs)
- Apply for Patent
- Apply for Trademark
- Apply for Copyright
- Apply for Design
- Startup Interested for Angel Investment and VC Funding

The visible screenshot for these protected forms confirms these labels:

- `Name of Applicant`
- `Email Id`
- `Contact No.`

These labels are now used exactly in `src/config/applyForms.js` for forms 1-6 and the angel investment form.

## Fully extracted form

`IP facilitator Registration Form` was publicly accessible and its exact labels were extracted from Google Forms metadata:

- `You are Working as `
- `Name `
- `Patent Agent Registration Number`
- `Education Qualification`
- `Area of Specialization for IP Support`
- `Total Experience in the Field of IP (Years & Month)`
- `How many provisional/complete patent applications have been filed through you as an Authorized Patent Agent till date? `
- `How many Design applications have been filed through you as an Authorized Patent Agent till date? `
- `How many Copyright applications have been filed through you as an Authorized Patent Agent till date? `
- `How many Trademark applications have been filed through you as an Authorized Patent Agent till date?`
- `Do You have access for Paid Patent Database?`
- `E Mail Address`
- `Postal Address`
- `City of Business`
- `Mobile Number`
- `LinkedIn Profile`
- `Any Achievements / Awards / Other Details`
- `I agree all the Terms and Conditions of Saurashtra University for Empanelment of IP Facilitator at Saurashtra University`

## To complete exact matching for protected forms

Open each protected Google Form using an authorized Google account, then provide either:

1. screenshots of all questions, or
2. temporary public access, or
3. the first row headers from the connected response sheet.

Then update each `fields` array in `src/config/applyForms.js` so every `name` exactly equals the corresponding Google Form question/Sheet header.
