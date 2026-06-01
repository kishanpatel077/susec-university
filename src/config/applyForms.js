const applyScriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || '';

const googleField = (label, config = {}) => ({
  name: label,
  label,
  placeholder: 'Your answer',
  ...config,
});

// Page 1 fields from Google Form screenshot (Apply Coworking space for startup).
const coworkingSpaceFields = () => [
  googleField('Name of Applicant', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Email id', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  googleField('Contact No.', {
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  googleField('Date of Birth', {
    type: 'date',
    required: true,
  }),
  googleField('Gender', {
    type: 'radio',
    required: true,
    options: ['Male', 'Female'],
  }),
  googleField('Current Address', {
    type: 'text',
    required: true,
    autoComplete: 'street-address',
  }),
  googleField('Permanent Address', {
    type: 'text',
    required: true,
  }),
  googleField('Qualification', {
    type: 'text',
    required: true,
  }),
  googleField('Institute Name', {
    type: 'text',
    required: true,
  }),
  googleField('Name of University', {
    type: 'text',
    required: true,
  }),
  googleField('City', {
    type: 'text',
    required: true,
    autoComplete: 'address-level2',
  }),
  googleField('Pincode', {
    type: 'text',
    required: true,
    pattern: '^\\d{6}$',
    errorMessage: 'Enter a valid 6 digit pincode.',
  }),
  googleField('Name of Startup/venture/project', {
    type: 'text',
    required: true,
  }),
  googleField('Current stage of startup/company', {
    type: 'radio',
    required: true,
    options: ['Pre- Incubation', 'Incubation', 'Product Development', 'Scaling'],
  }),
];

// Page 1 fields from Google Form screenshot (Apply For SSIP PoC Support).
const ssipPocSupportFields = () => [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('Name of Team Leader', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Mail Id of Team Leader', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  googleField('Student Category', {
    type: 'radio',
    required: true,
    allowOther: true,
    options: [
      'Existing student of Saurashtra University',
      'Passed out from Saurashtra University with age under 35',
      'Students from other University with age under 35',
      'Any individual up to age 35',
    ],
  }),
  googleField('Contact Number of Team Leader', {
    type: 'tel',
    required: true,
    helpText: 'Preferably WhatsApp Number',
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  googleField('Gender', {
    type: 'radio',
    required: true,
    options: ['Female', 'Male'],
  }),
  googleField('Category', {
    type: 'radio',
    required: true,
    options: ['SC', 'ST', 'OBC', 'EWS', 'General'],
  }),
  googleField('Institute / Organization / Department Name', {
    type: 'text',
    required: true,
  }),
  googleField('Enrollment Number', {
    type: 'text',
    required: true,
    helpText:
      'For School Student / Other University Student, mention your Unique ID number. For passed out, kindly enter your last institute enrollment number',
  }),
  googleField('Aadhaar Number of Team Leader', {
    type: 'text',
    required: true,
    pattern: '^\\d{12}$',
    errorMessage: 'Enter a valid 12 digit Aadhaar number.',
  }),
  googleField('Title of Innovation / Startup', {
    type: 'text',
    required: true,
    helpText:
      'It should not be title of Project but it should be name of venture i.e. powerboost, MIT-monsters, PurpleDolphin etc',
  }),
  googleField('Field of Innovation', {
    type: 'text',
    required: true,
    helpText:
      'It can be Engineering Innovation, Pharmaceutical, Agriculture, Information Tech, Chemical, Biological or any other related to your innovation',
  }),
  googleField('Existing Problem', {
    type: 'text',
    required: true,
    helpText: 'What exactly the problem you are solving / What is the current problem faced',
  }),
  googleField('Your Innovation', {
    type: 'textarea',
    required: true,
    rows: 5,
    helpText:
      'Exactly what you are providing / What new are you providing (within 250 Words) (It need not to be your abstract)',
  }),
  googleField('Exact Point of Innovation', {
    type: 'text',
    required: true,
    helpText: 'Explain Innovation in 1 or 2 sentences',
  }),
];

// Fields from Google Form screenshot (Apply for Patent).
const patentFields = () => [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('Full Name', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Mail Id', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  googleField('Contact No.', {
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  googleField('Guide Name', {
    type: 'text',
    required: true,
  }),
  googleField('Guide Contact No.', {
    type: 'tel',
    required: true,
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  googleField('Guide Email Id', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  googleField('You are a', {
    type: 'radio',
    required: true,
    allowOther: true,
    options: [
      'Student of SU',
      'Passed out Student of SU',
      'Faculty / Staff of SU',
      'Startup',
      'Students of Other University/Institute',
      'Passed out Student of Other University/Institute',
    ],
  }),
  googleField('Institute Name / Venture Name', {
    type: 'text',
    required: true,
  }),
  googleField('Department', {
    type: 'text',
    required: true,
  }),
  googleField('Field of Innovation', {
    type: 'text',
    required: true,
    helpText: 'Field can be Automobile, Agriculture, Pharmacy, Engineering etc',
  }),
  googleField('Title of Your Project / Patent / Innovation', {
    type: 'text',
    required: true,
    helpText: 'It should be less than 10 words',
  }),
  googleField('Abstract', {
    type: 'textarea',
    required: true,
    rows: 4,
  }),
  googleField('What problem is solved by your innovation/ brief description of your innovation', {
    type: 'textarea',
    required: true,
    rows: 4,
    helpText: 'In the point 2-3 lines about the problem and innovation',
  }),
  googleField('How many Team Members in your Team?', {
    type: 'text',
    required: true,
    helpText: 'If you are only 1 person, write 1',
    pattern: '^\\d+$',
    errorMessage: 'Enter a valid number.',
  }),
  googleField('Name Of your Team Members', {
    type: 'text',
    required: true,
    helpText:
      'Write Full Name of All Team Members with comma. i.e. Drkesh Shah, Viraj Jain, Jigar Joshi',
  }),
  googleField('Email Id of Other Team Members', {
    type: 'text',
    required: true,
    helpText:
      'Write Mail Id with comma i.e. drkesh.shah@gmail.com, viraj.jain@yahoo.com, teamjigar@gmail.com',
  }),
  googleField('Contact Number of Team Members', {
    type: 'text',
    required: true,
    helpText: 'Write Contact comma i.e. 0912312312, 7878787878, 1212212222',
  }),
  googleField('Presentation', {
    type: 'file',
    required: false,
    helpText: 'Upload 7 slides as per the organization standards.',
    accept: '.ppt,.pptx,.pdf',
  }),
];

const guYouAreAField = () =>
  googleField('You are a', {
    type: 'radio',
    required: true,
    allowOther: true,
    options: [
      'Student of GU',
      'Passed out Student of GU',
      'Faculty / Staff of GU',
      'Startup',
      'Students of Other University/Institute',
      'Passed out Student of Other University/Institute',
    ],
  });

const suYouAreAField = () =>
  googleField('You are a', {
    type: 'radio',
    required: true,
    allowOther: true,
    options: [
      'Student of SU',
      'Passed out Student of SU',
      'Faculty / Staff of SU',
      'Startup',
      'Students of Other University/Institute',
      'Passed out Student of Other University/Institute',
    ],
  });

const createTeamMemberFields = ({
  nameHelpText,
  emailHelpText,
  contactHelpText,
}) => [
  googleField('How many Team Members in your Team?', {
    type: 'text',
    required: true,
    helpText: 'If you are only 1 person, write 1',
    pattern: '^\\d+$',
    errorMessage: 'Enter a valid number.',
  }),
  googleField('Name Of your Team Members', {
    type: 'text',
    required: true,
    helpText: nameHelpText,
  }),
  googleField('Email Id of Other Team Members', {
    type: 'text',
    required: true,
    helpText: emailHelpText,
  }),
  googleField('Contact Number of Team Members', {
    type: 'text',
    required: true,
    helpText: contactHelpText,
  }),
];

// Fields from Google Form screenshot (Apply for Trademark).
const trademarkFields = () => [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('Full Name', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Mail id', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  guYouAreAField(),
  googleField('Institute Name / Venture Name', {
    type: 'text',
    required: true,
  }),
  googleField('Department', {
    type: 'text',
    required: true,
  }),
  googleField('Name of Mark to be filled', {
    type: 'text',
    required: true,
    helpText: 'Field can be Automobile, Agriculture, Pharmacy, Engineering etc',
  }),
  googleField('Logo of Mark to be filled', {
    type: 'file',
    required: false,
    helpText: 'Upload 1 supported file: PDF or Image. Max 10 MB.',
    accept: '.pdf,.jpg,.jpeg,.png,.gif,.webp',
  }),
  googleField('Address of Business', {
    type: 'text',
    required: true,
  }),
  googleField('Details of Goods / Services to be carried out with the Trademark', {
    type: 'textarea',
    required: true,
    rows: 4,
  }),
  ...createTeamMemberFields({
    nameHelpText:
      'Write Full Name of All Team Members with comma. i.e. Pritesh Shah, Nirav Jain, Jigar Joshi',
    emailHelpText:
      'Write Mail Ids with comma i.e. pritesh.shah@gmail.com, niraj@yahoo.com, joshi@jigar@gmail.com',
    contactHelpText: 'Write Contact comma i.e. 9999999999, 7878787878, 9898989898',
  }),
];

// Fields from Google Form screenshot (Apply for Copyright).
const copyrightFields = () => [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('Full Name', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Mail Id', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  guYouAreAField(),
  googleField('Institute Name / Venture Name', {
    type: 'text',
    required: true,
  }),
  googleField('Department', {
    type: 'text',
    required: true,
  }),
  googleField('Title of Literature Work / Work to be filled for Copyright', {
    type: 'text',
    required: true,
    helpText: 'Field can be Automobile, Agriculture, Pharmacy, Engineering etc',
  }),
  googleField('Description of your work', {
    type: 'text',
    required: true,
  }),
  googleField('Details of Work to be Copyrighted', {
    type: 'file',
    required: true,
    helpText: 'Upload 1 suggested file: PDF, audio, document, drawing, image, or video. Max 10 MB.',
    accept: '.pdf,.mp3,.wav,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.webp,.mp4,.mov,.avi',
  }),
  googleField('Address of Applicant', {
    type: 'text',
    required: true,
  }),
  ...createTeamMemberFields({
    nameHelpText:
      'Write Full Name of All Team Members with comma. i.e. Pritesh Shah, Nirav Jain, Jigar Joshi',
    emailHelpText:
      'Write Mail Ids with comma i.e. pritesh.shah@gmail.com, niraj@yahoo.com, joshijigar@gmail.com',
    contactHelpText: 'Write Contact comma i.e. 9999999999, 7878787878, 9595959595',
  }),
];

// Fields from Google Form screenshot (Apply for Design).
const designFields = () => [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('Full Name', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Mob No', {
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  suYouAreAField(),
  googleField('Institute Name / Venture Name', {
    type: 'text',
    required: true,
  }),
  googleField('Department', {
    type: 'text',
    required: true,
  }),
  googleField('Title of Design / Product', {
    type: 'text',
    required: true,
    helpText: 'Field can be Automobile, Agriculture, Pharmacy, Engineering etc',
  }),
  googleField('Drawings / Views', {
    type: 'file',
    required: true,
    helpText:
      'Kindly upload the PDF containing the views as shown below. Views can be in form of clear images/ line drawings. Each view need to be clear and exactly from Front, Side, top, perspective etc. Upload 1 single file for all views.',
    referenceImage: '/susec-assets/img/apply/design-drawings-views-reference.png',
    referenceImageAlt: 'Example design views showing top, front, bottom, left side, right side, and rear views',
    accept: '.pdf',
  }),
  ...createTeamMemberFields({
    nameHelpText:
      'Write Full Name of All Team Members with comma. i.e. Pritesh Shah, Nirav Jain, Jigar Joshi',
    emailHelpText:
      'Write Mail Id with comma i.e. pritesh.shah@gmail.com, nirav@yahoo.com, jigarjigar@gmail.com',
    contactHelpText: 'Write Contact comma i.e. 9879787878, 7878787878, 9898989898',
  }),
];

// Fields from Google Form screenshots (Startup Interested for Angel Investment and VC Funding).
const angelInvestmentVcFundingFields = () => [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('Startup registered Company Name', {
    type: 'text',
    required: true,
  }),
  googleField('Startup Brand Name', {
    type: 'text',
    required: true,
  }),
  googleField('Website of Startup (if developed)', {
    type: 'url',
    required: false,
  }),
  googleField('Registered Company Address', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Full Name of the Founder of Startup', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Gender', {
    type: 'text',
    required: true,
  }),
  googleField('Category', {
    type: 'radio',
    required: true,
    options: ['General', 'OBC', 'SC', 'ST'],
  }),
  googleField('Contact Number of Founder / Managing Director', {
    type: 'tel',
    required: true,
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  googleField('Address of Founder / Managing Director', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Details of the co-founder and team members', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Describe your innovation', {
    type: 'textarea',
    required: true,
    rows: 4,
  }),
  googleField('Field/Sector of the Startup', {
    type: 'text',
    required: true,
    helpText: 'Pharmaceutical/Engineering/Chemistry/AgriTech/Food/Etc/etc.',
  }),
  googleField('Startup Company Incorporation Date', {
    type: 'text',
    required: true,
  }),
  googleField('Estimated project cost for Startup in Product Development?', {
    type: 'text',
    required: true,
  }),
  googleField('Estimated project cost for Startup in Marketing?', {
    type: 'text',
    required: true,
  }),
  googleField('Amount invested by founders in the startup till date?', {
    type: 'text',
    required: true,
  }),
  googleField('What kind of facilities do you need/expect from investors?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What was the inspiration behind this idea?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField(
    'Describe the innovative elements of the idea along with comparisons of prior products available?',
    {
      type: 'textarea',
      required: true,
      rows: 4,
    },
  ),
  googleField('Who are the current or future players in the market?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What is your USP?', {
    type: 'textarea',
    required: true,
    rows: 3,
    helpText: 'Unique Selling Point',
  }),
  googleField('What is your business model?', {
    type: 'textarea',
    required: true,
    rows: 3,
    helpText: 'Launch of Product, taking it to bigger market etc.',
  }),
  googleField('What are the different revenue streams for your Product/Service?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What is the cost structure of your Product/Service?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What is the expected gross margin?', {
    type: 'text',
    required: true,
  }),
  googleField('Who all will be affected by your solution and what benefits do they derive?', {
    type: 'textarea',
    required: true,
    rows: 3,
    helpText: 'Time saving, convenience, quality of life, etc.',
  }),
  googleField('What is targeted customer segment?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Can you quantify the benefits? How much can you charge for the product?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What is the current stage of the product/service and what is Roadmap?', {
    type: 'textarea',
    required: true,
    rows: 4,
  }),
  googleField('Future Plans', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Exit Strategy', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What are the key resources anticipated?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('What if you are not able to get this support?', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Any other remarks / achievements', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('Upload your Pitch Deck', {
    type: 'file',
    required: true,
    helpText: 'Upload if suggested file PDF or presentation, max 10 MB',
    accept: '.pdf,.ppt,.pptx',
  }),
];

// Verified from Google Form screenshots (legacy placeholder — no longer used by active forms).
const verifiedProtectedFormFields = () => [
  googleField('Name of Applicant', {
    type: 'text',
    required: true,
    autoComplete: 'name',
  }),
  googleField('Email Id', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  googleField('Contact No.', {
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
];

// Extracted from public Google Form metadata on 2026-05-30.
const ipFacilitatorFields = [
  googleField('Email', {
    type: 'email',
    required: true,
    placeholder: 'Your email',
    autoComplete: 'email',
  }),
  googleField('You are Working as', {
    type: 'radio',
    required: true,
    allowOther: true,
    options: [
      'Individual IP Practitioner',
      'Practicing Law Firm',
      'Registered Government Department / Organization',
    ],
  }),
  googleField('Name', {
    type: 'text',
    required: true,
    helpText:
      "For Government departments/organizations/agencies and practicing law firms are required to give their name, along with their full-time patent agent's details. For Example 'XYZ Govt. Dept/XYZ Law Firm - Patent Agent Name'. In case if law firm or Govt. dept wants to register for many of their available patent agents, they require to repeat registration process for each agent separately.",
  }),
  googleField('Patent Agent Registration Number', {
    type: 'text',
    required: true,
    placeholder: 'IN/PA/XXXX (Enter only Number)',
    pattern: '^\\d+$',
    errorMessage: 'Enter only the registration number.',
  }),
  googleField('Education Qualification', {
    type: 'text',
    required: true,
  }),
  googleField('Area of Specialization for IP Support', {
    type: 'text',
    required: true,
  }),
  googleField('Total Experience in the Field of IP (Years & Month)', {
    type: 'text',
    required: true,
  }),
  googleField(
    'How many provisional/complete patent applications have been filed through you as an Authorized Patent Agent till date? ',
    {
      type: 'text',
      required: true,
      pattern: '^\\d+$',
      errorMessage: 'Enter a valid number.',
    },
  ),
  googleField(
    'How many Design applications have been filed through you as an Authorized Patent Agent till date? ',
    {
      type: 'text',
      required: true,
      pattern: '^\\d+$',
      errorMessage: 'Enter a valid number.',
    },
  ),
  googleField(
    'How many Copyright applications have been filed through you as an Authorized Patent Agent till date? ',
    {
      type: 'text',
      required: true,
      pattern: '^\\d+$',
      errorMessage: 'Enter a valid number.',
    },
  ),
  googleField(
    'How many Trademark applications have been filed through you as an Authorized Patent Agent till date?',
    {
      type: 'text',
      required: true,
      pattern: '^\\d+$',
      errorMessage: 'Enter a valid number.',
    },
  ),
  googleField('Do You have access to Paid Patent Database?', {
    type: 'radio',
    required: true,
    options: ['Yes', 'No'],
  }),
  googleField('E-Mail Address', {
    type: 'email',
    required: true,
    autoComplete: 'email',
  }),
  googleField('Postal Address', {
    type: 'textarea',
    required: true,
    rows: 3,
  }),
  googleField('City of Business', {
    type: 'text',
    required: true,
  }),
  googleField('Mobile Number', {
    type: 'tel',
    required: true,
    autoComplete: 'tel',
    pattern: '^[6-9]\\d{9}$',
    errorMessage: 'Enter a valid 10 digit Indian mobile number.',
  }),
  googleField('LinkedIn Profile', {
    type: 'url',
    required: true,
  }),
  googleField('Any Achievements / Awards / Other Details', {
    type: 'textarea',
    required: false,
    rows: 3,
  }),
  googleField(
    'I agree all the Terms and Conditions of Saurashtra University for Empanelment of IP Facilitator at Saurashtra University',
    {
      type: 'checkbox',
      required: true,
      submitValue: 'Yes',
    },
  ),
];

export const applyFormOptions = [
  {
    slug: 'coworking-space',
    title: 'Apply Coworking space for startup',
    description: 'Request access to SUSEC coworking support for startup teams.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdL4OdbyPud0UMV07Le058a4qUgQXpA2gV9BjkahHpPZZjzbg/viewform',
    scriptUrl: applyScriptUrl,
    fields: coworkingSpaceFields(),
  },
  {
    slug: 'ssip-poc-support',
    title: 'Apply For SSIP PoC Support (Upto 2.5lacs)',
    description: 'Submit your innovation or proof-of-concept details for SSIP PoC support.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdl3Qdhm2EukNSRy-Oxvr6tsOZP6R-wkWzniXUfZ6zlRA5lXA/viewform',
    scriptUrl: applyScriptUrl,
    fields: ssipPocSupportFields(),
  },
  {
    slug: 'patent',
    title: 'Apply for Patent',
    description: 'Share invention details for patent filing assistance.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc_4r-rTz_8Wct00sN2qpP9AD11lME8_kwaNJNz1POiUcE0IQ/viewform',
    scriptUrl: applyScriptUrl,
    fields: patentFields(),
  },
  {
    slug: 'trademark',
    title: 'Apply for Trademark',
    description: 'Apply for brand, logo, or mark registration support.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScD3_9Gr6PpZzaBXndAdbi6LjrCAzjS-rVS-HXiCR4EsAwI0Q/viewform',
    scriptUrl: applyScriptUrl,
    fields: trademarkFields(),
  },
  {
    slug: 'copyright',
    title: 'Apply for Copyright',
    description: 'Apply for copyright filing support for creative or software work.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScLr2icZ1zhyEr4EnSnOyBjLh45FTx0MAWgkilN2ryyoQDVgw/viewform',
    scriptUrl: applyScriptUrl,
    fields: copyrightFields(),
  },
  {
    slug: 'design',
    title: 'Apply for Design',
    description: 'Apply for industrial design filing support.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdVjFNU2y2nC-VaR-ameHNbcswcOPCDttM2tL9Z351j2xWsrg/viewform',
    scriptUrl: applyScriptUrl,
    fields: designFields(),
  },
  {
    slug: 'angel-investment-vc-funding',
    title: 'Startup Interested for Angel Investment and VC Funding',
    description: 'Share your startup fundraising interest with SUSEC.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfrQWNjTjDMauWxqEVCFYq65e7Z_wq6GhjMp-w4AJOiS3ttQA/viewform',
    scriptUrl: applyScriptUrl,
    fields: angelInvestmentVcFundingFields(),
  },
  {
    slug: 'ip-facilitator-registration',
    title: 'IP facilitator Registration Form',
    description: 'Register as an IP facilitator with SUSEC.',
    googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdo29wxz1IZDBCgvFwSihB2OHSYvo2ImBxf0g7SH4A6cJnq0g/viewform',
    scriptUrl: applyScriptUrl,
    fields: ipFacilitatorFields,
  },
];

export const externalApplyLinks = [
  {
    title: 'Apply for Startup Support (Upto 40 lacs)',
    url: 'https://startup.gujarat.gov.in/account/email-login/Register',
  },
];

export const defaultApplySlug = applyFormOptions[0].slug;

export const applyFormFields = coworkingSpaceFields();
