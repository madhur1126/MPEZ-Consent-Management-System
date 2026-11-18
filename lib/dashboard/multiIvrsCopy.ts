import type { Lang } from '@/lib/login/i18n';

export interface MultiIvrsCopy {
  title: string;
  subtitle: string;
  demoNotice: string;
  profileTitle: string;
  consumerName: string;
  mobile: string;
  aadhaar: string;
  pan: string;
  verified: string;
  notVerified: string;
  totalConnections: string;
  completedCount: string;
  pendingCount: string;
  notStartedCount: string;
  connectionTitle: string;
  searchLabel: string;
  searchPlaceholder: string;
  clearSearch: string;
  noResults: string;
  viewAllServices: string;
  showLess: string;
  allFilter: string;
  notConsentedFilter: string;
  consentedFilter: string;
  reConsentedFilter: string;
  completedStatus: string;
  pendingStatus: string;
  notStartedStatus: string;
  ivrsNumber: string;
  address: string;
  connection: string;
  lastConsent: string;
  actions: string;
  viewDetails: string;
  giveConsent: string;
  viewConsent: string;
  history: string;
  reConsent: string;
  noConnections: string;
  detailsTitle: string;
  connectionDetails: string;
  consumerNumber: string;
  connectionType: string;
  tariff: string;
  sanctionedLoad: string;
  meterNumber: string;
  phase: string;
  connectionDate: string;
  editDetails: string;
  saveDetails: string;
  cancel: string;
  editName: string;
  editAddress: string;
  nameRequired: string;
  addressRequired: string;
  storageError: string;
  storageUnavailable: string;
  invalidSavedData: string;
  consentFormTitle: string;
  consentFormDescription: string;
  answered: string;
  pendingQuestions: string;
  confirmation: string;
  completeAll: string;
  submit: string;
  confirmationTitle: string;
  confirmationDescription: string;
  goBack: string;
  confirmSubmit: string;
  successTitle: string;
  successMessage: string;
  historyTitle: string;
  historyEmpty: string;
  submissionId: string;
  version: string;
  submittedAt: string;
  nameSnapshot: string;
  addressSnapshot: string;
  currentSubmission: string;
  supersededSubmission: string;
  submittedStatus: string;
  openSubmission: string;
  close: string;
}

export const multiIvrsCopy: Record<Lang, MultiIvrsCopy> = {
  en: {
    title: 'Consent Management System Dashboard',
    subtitle: 'Manage consent independently for each electricity connection.',
    demoNotice: 'Demonstration data only — names, addresses, identifiers and consent records are fictional.',
    profileTitle: 'Consumer profile',
    consumerName: 'Consumer name',
    mobile: 'Mobile number',
    aadhaar: 'Aadhaar',
    pan: 'PAN',
    verified: 'Verified demo profile',
    notVerified: 'Not verified',
    totalConnections: 'Total connections',
    completedCount: 'Completed',
    pendingCount: 'Pending',
    notStartedCount: 'Not started',
    connectionTitle: 'Your IVRS connections',
    searchLabel: 'Search IVRS connections',
    searchPlaceholder: 'Search number, name or address',
    clearSearch: 'Clear connection search',
    noResults: 'No matching IVRS connections found',
    viewAllServices: 'View All Services',
    showLess: 'Show Less',
    allFilter: 'All',
    notConsentedFilter: 'Not Consented',
    consentedFilter: 'Consented',
    reConsentedFilter: 'Re-consented',
    completedStatus: 'Completed',
    pendingStatus: 'Pending',
    notStartedStatus: 'Not started',
    ivrsNumber: 'IVRS number',
    address: 'Address',
    connection: 'Connection',
    lastConsent: 'Last consent',
    actions: 'Actions',
    viewDetails: 'View details',
    giveConsent: 'Give consent',
    viewConsent: 'View consent',
    history: 'Consent history',
    reConsent: 'Re-consent',
    noConnections: 'No connections match these filters.',
    detailsTitle: 'IVRS connection details',
    connectionDetails: 'Connection information',
    consumerNumber: 'Consumer number',
    connectionType: 'Connection type',
    tariff: 'Tariff category',
    sanctionedLoad: 'Sanctioned load',
    meterNumber: 'Meter number',
    phase: 'Phase',
    connectionDate: 'Connection date',
    editDetails: 'Edit connection details',
    saveDetails: 'Save details',
    cancel: 'Cancel',
    editName: 'Consumer name',
    editAddress: 'Service address',
    nameRequired: 'Enter a consumer name.',
    addressRequired: 'Enter an address.',
    storageError: 'Changes could not be saved in this browser. Check local storage settings and try again.',
    storageUnavailable: 'Browser storage is unavailable. Changes will not persist after closing this page.',
    invalidSavedData: 'Saved demo data was invalid, so the original demonstration data has been loaded.',
    consentFormTitle: 'Review consent requests',
    consentFormDescription: 'Answer every question for this IVRS connection. Your other connections will not be changed.',
    answered: 'Answered',
    pendingQuestions: 'Pending questions',
    confirmation: 'I have read and understood these statements and confirm that my choices are voluntary.',
    completeAll: 'Answer every question and confirm before submitting.',
    submit: 'Review and submit',
    confirmationTitle: 'Confirm this IVRS consent',
    confirmationDescription: 'Review the answers and the connection details snapshot before submitting.',
    goBack: 'Go back and edit',
    confirmSubmit: 'Confirm and submit',
    successTitle: 'Consent submitted',
    successMessage: 'A new consent version was saved for this IVRS connection.',
    historyTitle: 'Consent history',
    historyEmpty: 'No consent submissions have been recorded for this connection.',
    submissionId: 'Submission ID',
    version: 'Consent version',
    submittedAt: 'Submitted',
    nameSnapshot: 'Consumer name at submission',
    addressSnapshot: 'Address at submission',
    currentSubmission: 'Current',
    supersededSubmission: 'Superseded',
    submittedStatus: 'Submitted',
    openSubmission: 'View submission',
    close: 'Close',
  },
  hi: {
    title: 'मल्टी-IVRS सहमति डैशबोर्ड',
    subtitle: 'हर बिजली कनेक्शन की सहमति अलग-अलग प्रबंधित करें।',
    demoNotice: 'केवल प्रदर्शन डेटा — नाम, पते, पहचान और सहमति रिकॉर्ड काल्पनिक हैं।',
    profileTitle: 'उपभोक्ता प्रोफ़ाइल',
    consumerName: 'उपभोक्ता का नाम',
    mobile: 'मोबाइल नंबर',
    aadhaar: 'आधार',
    pan: 'PAN',
    verified: 'सत्यापित डेमो प्रोफ़ाइल',
    notVerified: 'सत्यापित नहीं',
    totalConnections: 'कुल कनेक्शन',
    completedCount: 'पूर्ण',
    pendingCount: 'लंबित',
    notStartedCount: 'शुरू नहीं हुआ',
    connectionTitle: 'आपके IVRS कनेक्शन',
    searchLabel: 'IVRS कनेक्शन खोजें',
    searchPlaceholder: 'नंबर, नाम या पता खोजें',
    clearSearch: 'कनेक्शन खोज साफ़ करें',
    noResults: 'कोई IVRS कनेक्शन नहीं मिला',
    viewAllServices: 'सभी सेवाएँ देखें',
    showLess: 'कम दिखाएँ',
    allFilter: 'सभी',
    notConsentedFilter: 'सहमति नहीं दी',
    consentedFilter: 'सहमति दी',
    reConsentedFilter: 'फिर से सहमति',
    completedStatus: 'पूर्ण',
    pendingStatus: 'लंबित',
    notStartedStatus: 'शुरू नहीं हुआ',
    ivrsNumber: 'IVRS नंबर',
    address: 'पता',
    connection: 'कनेक्शन',
    lastConsent: 'अंतिम सहमति',
    actions: 'कार्रवाई',
    viewDetails: 'विवरण देखें',
    giveConsent: 'सहमति दें',
    viewConsent: 'सहमति देखें',
    history: 'सहमति इतिहास',
    reConsent: 'फिर से सहमति दें',
    noConnections: 'इन फ़िल्टर से कोई कनेक्शन नहीं मिला।',
    detailsTitle: 'IVRS कनेक्शन विवरण',
    connectionDetails: 'कनेक्शन जानकारी',
    consumerNumber: 'उपभोक्ता नंबर',
    connectionType: 'कनेक्शन प्रकार',
    tariff: 'टैरिफ श्रेणी',
    sanctionedLoad: 'स्वीकृत लोड',
    meterNumber: 'मीटर नंबर',
    phase: 'फेज़',
    connectionDate: 'कनेक्शन की तारीख',
    editDetails: 'कनेक्शन विवरण संपादित करें',
    saveDetails: 'विवरण सहेजें',
    cancel: 'रद्द करें',
    editName: 'उपभोक्ता का नाम',
    editAddress: 'सेवा का पता',
    nameRequired: 'उपभोक्ता का नाम दर्ज करें।',
    addressRequired: 'पता दर्ज करें।',
    storageError: 'इस ब्राउज़र में बदलाव सहेजे नहीं जा सके। स्थानीय संग्रहण सेटिंग जाँचें और फिर प्रयास करें।',
    storageUnavailable: 'ब्राउज़र संग्रहण उपलब्ध नहीं है। पेज बंद करने के बाद बदलाव सहेजे नहीं रहेंगे।',
    invalidSavedData: 'सहेजा गया डेमो डेटा अमान्य था, इसलिए मूल प्रदर्शन डेटा लोड किया गया है।',
    consentFormTitle: 'सहमति अनुरोधों की समीक्षा करें',
    consentFormDescription: 'इस IVRS कनेक्शन के लिए हर प्रश्न का उत्तर दें। आपके अन्य कनेक्शन नहीं बदलेंगे।',
    answered: 'उत्तर दिए गए',
    pendingQuestions: 'शेष प्रश्न',
    confirmation: 'मैंने ये कथन पढ़ और समझ लिए हैं और पुष्टि करता/करती हूँ कि मेरे विकल्प स्वैच्छिक हैं।',
    completeAll: 'जमा करने से पहले सभी प्रश्नों का उत्तर दें और पुष्टि करें।',
    submit: 'समीक्षा करें और जमा करें',
    confirmationTitle: 'इस IVRS की सहमति की पुष्टि करें',
    confirmationDescription: 'जमा करने से पहले उत्तर और कनेक्शन विवरण के स्नैपशॉट की समीक्षा करें।',
    goBack: 'वापस जाएँ और संपादित करें',
    confirmSubmit: 'पुष्टि करें और जमा करें',
    successTitle: 'सहमति जमा हो गई',
    successMessage: 'इस IVRS कनेक्शन के लिए नया सहमति संस्करण सहेजा गया।',
    historyTitle: 'सहमति इतिहास',
    historyEmpty: 'इस कनेक्शन के लिए कोई सहमति जमा नहीं की गई है।',
    submissionId: 'सबमिशन ID',
    version: 'सहमति संस्करण',
    submittedAt: 'जमा किया गया',
    nameSnapshot: 'जमा करते समय उपभोक्ता का नाम',
    addressSnapshot: 'जमा करते समय का पता',
    currentSubmission: 'वर्तमान',
    supersededSubmission: 'पिछला',
    submittedStatus: 'जमा किया गया',
    openSubmission: 'सबमिशन देखें',
    close: 'बंद करें',
  },
};
