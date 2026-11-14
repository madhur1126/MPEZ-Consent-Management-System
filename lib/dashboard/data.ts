import type { Lang } from '@/lib/login/i18n';

export type ConsentAnswer = 'yes' | 'no';
export type DashboardIconName =
  | 'user'
  | 'hash'
  | 'phone'
  | 'shield'
  | 'file'
  | 'mail'
  | 'location'
  | 'message'
  | 'card'
  | 'landmark'
  | 'wrench'
  | 'zap'
  | 'headset'
  | 'bell'
  | 'check'
  | 'lock'
  | 'logout';

export type ConsentQuestion = {
  id: number;
  category: { en: string; hi: string };
  question: { en: string; hi: string };
  icon: DashboardIconName;
};

type ConsumerDetail = {
  label: { en: string; hi: string };
  value: string;
  icon: DashboardIconName;
  verified?: boolean;
};

const consumerProfiles: Record<string, { name: string; number: string; ivrs: string; aadhaarSuffix: string; panPrefix: string; email: string; address: string }> = {
  '9876543210': {
    name: 'Rahul Sharma',
    number: '1234567890',
    ivrs: '9876500001',
    aadhaarSuffix: '1234',
    panPrefix: 'ABCDE',
    email: 'rahul****@gmail.com',
    address: 'Jabalpur, Madhya Pradesh',
  },
  '9123456780': {
    name: 'Ananya Verma',
    number: '1234567891',
    ivrs: '9123400001',
    aadhaarSuffix: '5678',
    panPrefix: 'FGHIJ',
    email: 'ananya****@gmail.com',
    address: 'Indore, Madhya Pradesh',
  },
};

export function getConsumerDetails(mobile: string) {
  const profile = consumerProfiles[mobile] ?? {
    name: 'Consumer',
    number: `MPEZ${mobile.slice(-6)}`,
    ivrs: `IVRS${mobile.slice(-6)}`,
    aadhaarSuffix: '0000',
    panPrefix: 'XXXXX',
    email: 'consumer****@example.com',
    address: 'Madhya Pradesh',
  };
  const maskedMobile = `${mobile.slice(0, 5)}XXXXX`;

  return [
    { label: { en: 'Consumer Name', hi: 'उपभोक्ता का नाम' }, value: profile.name, icon: 'user' },
    { label: { en: 'Consumer Number', hi: 'उपभोक्ता संख्या' }, value: profile.number, icon: 'hash' },
    { label: { en: 'IVRS Number', hi: 'IVRS नंबर' }, value: profile.ivrs, icon: 'phone', verified: true },
    { label: { en: 'Mobile Number', hi: 'मोबाइल नंबर' }, value: maskedMobile, icon: 'phone', verified: true },
    { label: { en: 'Aadhaar Number', hi: 'आधार नंबर' }, value: `XXXX-XXXX-${profile.aadhaarSuffix}`, icon: 'shield' },
    { label: { en: 'PAN Number', hi: 'पैन नंबर' }, value: `${profile.panPrefix}XXXXF`, icon: 'file' },
    { label: { en: 'Email Address', hi: 'ईमेल पता' }, value: profile.email, icon: 'mail', verified: true },
    { label: { en: 'Service Address', hi: 'सेवा का पता' }, value: profile.address, icon: 'location' },
  ] satisfies readonly ConsumerDetail[];
}

export const consentQuestions: ConsentQuestion[] = [
  {
    id: 1,
    category: { en: 'SMS Gateway', hi: 'SMS गेटवे' },
    question: {
      en: 'Do you agree to share your IVRS Number and Mobile Number with our authorized SMS Gateway to receive monthly electricity bills, payment receipts, and power outage alerts?',
      hi: 'क्या आप मासिक बिजली बिल, भुगतान रसीदें और बिजली कटौती अलर्ट प्राप्त करने के लिए अपना IVRS नंबर और मोबाइल नंबर हमारे अधिकृत SMS गेटवे के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'message',
  },
  {
    id: 2,
    category: { en: 'Payment Gateway', hi: 'भुगतान गेटवे' },
    question: {
      en: 'Do you agree to share your IVRS Number, Name, Mobile Number, and Masked PAN (only where legally required) with our authorized Payment Gateway to process online bill payments?',
      hi: 'क्या आप ऑनलाइन बिल भुगतान के लिए अपना IVRS नंबर, नाम, मोबाइल नंबर और मास्क किया हुआ PAN (केवल जहाँ कानूनन आवश्यक हो) हमारे अधिकृत भुगतान गेटवे के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'card',
  },
  {
    id: 3,
    category: { en: 'Government Schemes', hi: 'सरकारी योजनाएँ' },
    question: {
      en: 'Do you agree to share the minimum required information with authorized government scheme administrators for electricity subsidy and solar scheme eligibility verification?',
      hi: 'क्या आप बिजली सब्सिडी और सौर योजना की पात्रता सत्यापन के लिए न्यूनतम आवश्यक जानकारी अधिकृत सरकारी योजना प्रशासकों के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'landmark',
  },
  {
    id: 4,
    category: { en: 'Field Technicians', hi: 'फील्ड तकनीशियन' },
    question: {
      en: 'Do you agree to share your Name, Mobile Number, and Premises Address with authorized field technicians for smart meter installation, maintenance, and fault repair?',
      hi: 'क्या आप स्मार्ट मीटर स्थापना, रखरखाव और खराबी की मरम्मत के लिए अपना नाम, मोबाइल नंबर और परिसर का पता अधिकृत फील्ड तकनीशियनों के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'wrench',
  },
  {
    id: 5,
    category: { en: 'Connection Services', hi: 'कनेक्शन सेवाएँ' },
    question: {
      en: 'Do you agree to share your Consumer Number and contact details with authorized personnel to process electricity connection requests, name corrections, and load changes?',
      hi: 'क्या आप बिजली कनेक्शन अनुरोध, नाम सुधार और लोड परिवर्तन के लिए अपनी उपभोक्ता संख्या और संपर्क विवरण अधिकृत कर्मचारियों के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'zap',
  },
  {
    id: 6,
    category: { en: 'Grievance Management', hi: 'शिकायत निवारण' },
    question: {
      en: 'Do you agree to share your Name, IVRS Number, Mobile Number, and Complaint Details with authorized grievance-handling personnel to resolve electricity-related complaints?',
      hi: 'क्या आप बिजली संबंधी शिकायतों के समाधान के लिए अपना नाम, IVRS नंबर, मोबाइल नंबर और शिकायत का विवरण अधिकृत शिकायत निवारण कर्मचारियों के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'headset',
  },
  {
    id: 7,
    category: { en: 'Email Notifications', hi: 'ईमेल सूचनाएँ' },
    question: {
      en: 'Do you agree to share your registered Email Address and Consumer Number with our authorized email service provider to receive digital bills, payment receipts, and service notifications?',
      hi: 'क्या आप डिजिटल बिल, भुगतान रसीदें और सेवा सूचनाएँ प्राप्त करने के लिए अपना पंजीकृत ईमेल पता और उपभोक्ता संख्या हमारे अधिकृत ईमेल सेवा प्रदाता के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'mail',
  },
  {
    id: 8,
    category: { en: 'Payment Alerts', hi: 'भुगतान अलर्ट' },
    question: {
      en: 'Do you agree to share your Consumer Number, Mobile Number, and payment status with our authorized notification service to receive bill due-date reminders and payment alerts?',
      hi: 'क्या आप बिल की नियत तारीख के रिमाइंडर और भुगतान अलर्ट प्राप्त करने के लिए अपनी उपभोक्ता संख्या, मोबाइल नंबर और भुगतान स्थिति हमारी अधिकृत सूचना सेवा के साथ साझा करने की सहमति देते हैं?',
    },
    icon: 'bell',
  },
];

export type DashboardCopy = {
  greeting: string;
  welcomeTitle: string;
  welcomeDescription: string;
  privacy: string;
  consumerInfo: string;
  personalDetails: string;
  secureInfo: string;
  verified: string;
  consentTitle: string;
  consentDescription: string;
  agree: string;
  decline: string;
  summary: string;
  total: string;
  answered: string;
  pending: string;
  confirmation: string;
  submit: string;
  logout: string;
  loginRequired: string;
  checkAll: string;
  modalTitle: string;
  modalDescription: string;
  goBack: string;
  confirmSubmit: string;
  successTitle: string;
  successMessage: string;
  consumerName: string;
  consumerNumber: string;
  submittedAt: string;
  submissionStatus: string;
  submitted: string;
  viewSubmitted: string;
  close: string;
  yes: string;
  no: string;
  storageError: string;
};

export const dashboardCopy: Record<Lang, DashboardCopy> = {
  en: {
    greeting: 'Welcome, Consumer!',
    welcomeTitle: 'Welcome to Your Consent Dashboard',
    welcomeDescription: 'Manage your personal information and control how your consumer data is shared with authorized departments and service providers.',
    privacy: 'Your privacy matters. You have full control of your consent preferences.',
    consumerInfo: 'Consumer Information',
    personalDetails: 'Personal Details',
    secureInfo: 'Protected consumer data',
    verified: 'Verified',
    consentTitle: 'Your Consent Preferences',
    consentDescription: 'Please carefully review the following consent requests and choose whether you agree to share your information with the authorized service providers.',
    agree: 'Yes, I agree',
    decline: 'No, do not share',
    summary: 'Consent Summary',
    total: 'Total Questions',
    answered: 'Answered',
    pending: 'Pending',
    confirmation: 'I have read and understood all the above consent statements and confirm that my selections are voluntary.',
    submit: 'Submit My Consent',
    logout: 'Logout',
    loginRequired: 'Please log in to view your consumer dashboard.',
    checkAll: 'Please answer all eight questions and confirm before submitting.',
    modalTitle: 'Review your consent selections',
    modalDescription: 'Please review your responses. You can go back and edit them before confirming.',
    goBack: 'Go Back & Edit',
    confirmSubmit: 'Confirm & Submit',
    successTitle: 'Consent submitted',
    successMessage: 'Your consent preferences have been submitted successfully!',
    consumerName: 'Consumer Name',
    consumerNumber: 'Consumer Number',
    submittedAt: 'Submission Date and Time',
    submissionStatus: 'Consent Submission Status',
    submitted: 'Submitted',
    viewSubmitted: 'View Submitted Consent',
    close: 'Close',
    yes: 'Yes',
    no: 'No',
    storageError: 'Your response could not be saved in this browser. Please check your browser storage settings and try again.',
  },
  hi: {
    greeting: 'स्वागत है, उपभोक्ता!',
    welcomeTitle: 'आपके सहमति डैशबोर्ड में आपका स्वागत है',
    welcomeDescription: 'अपनी व्यक्तिगत जानकारी प्रबंधित करें और नियंत्रित करें कि आपका उपभोक्ता डेटा अधिकृत विभागों और सेवा प्रदाताओं के साथ कैसे साझा किया जाए।',
    privacy: 'आपकी गोपनीयता महत्वपूर्ण है। अपनी सहमति प्राथमिकताओं पर आपका पूरा नियंत्रण है।',
    consumerInfo: 'उपभोक्ता जानकारी',
    personalDetails: 'व्यक्तिगत विवरण',
    secureInfo: 'सुरक्षित उपभोक्ता डेटा',
    verified: 'सत्यापित',
    consentTitle: 'आपकी सहमति प्राथमिकताएँ',
    consentDescription: 'कृपया निम्नलिखित सहमति अनुरोधों को ध्यान से पढ़ें और चुनें कि आप अधिकृत सेवा प्रदाताओं के साथ अपनी जानकारी साझा करने की सहमति देते हैं या नहीं।',
    agree: 'हाँ, मैं सहमत हूँ',
    decline: 'नहीं, साझा न करें',
    summary: 'सहमति सारांश',
    total: 'कुल प्रश्न',
    answered: 'उत्तर दिए गए',
    pending: 'शेष',
    confirmation: 'मैंने ऊपर दिए गए सभी सहमति कथनों को पढ़ और समझ लिया है और पुष्टि करता/करती हूँ कि मेरे चयन स्वैच्छिक हैं।',
    submit: 'मेरी सहमति जमा करें',
    logout: 'लॉग आउट',
    loginRequired: 'उपभोक्ता डैशबोर्ड देखने के लिए कृपया लॉगिन करें।',
    checkAll: 'जमा करने से पहले सभी आठ प्रश्नों का उत्तर दें और पुष्टि करें।',
    modalTitle: 'अपनी सहमति के विकल्प जाँचें',
    modalDescription: 'अपने उत्तरों की समीक्षा करें। पुष्टि करने से पहले आप वापस जाकर उन्हें बदल सकते हैं।',
    goBack: 'वापस जाएँ और बदलें',
    confirmSubmit: 'पुष्टि करें और जमा करें',
    successTitle: 'सहमति जमा हो गई',
    successMessage: 'आपकी सहमति प्राथमिकताएँ सफलतापूर्वक जमा हो गई हैं!',
    consumerName: 'उपभोक्ता का नाम',
    consumerNumber: 'उपभोक्ता संख्या',
    submittedAt: 'जमा करने की तारीख और समय',
    submissionStatus: 'सहमति जमा करने की स्थिति',
    submitted: 'जमा किया गया',
    viewSubmitted: 'जमा की गई सहमति देखें',
    close: 'बंद करें',
    yes: 'हाँ',
    no: 'नहीं',
    storageError: 'आपकी प्रतिक्रिया इस ब्राउज़र में सहेजी नहीं जा सकी। ब्राउज़र स्टोरेज सेटिंग जाँचकर फिर से प्रयास करें।',
  },
};

export function getText<T extends string | { en: string; hi: string }>(text: T, lang: Lang) {
  return typeof text === 'string' ? text : text[lang];
}
