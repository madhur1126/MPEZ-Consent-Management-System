export type Lang = 'en' | 'hi';

export interface Messages {
  system: string;
  desc: string;
  login: string;
  loginSub: string;
  mobile: string;
  mobilePlaceholder: string;
  sendOtp: string;
  verifyTitle: string;
  otpLead: (formattedNumber: string) => string;
  otpLabel: string;
  changeNumber: string;
  invalidMobile: string;
  requestFailed: string;
  otpSent: string;
  invalidOtp: string;
  demoOtp: string;
  resendOtp: string;
  resendIn: string;
  sendingOtp: string;
  verifyingOtp: string;
  resendFailed: string;
  portalName: string;
  tagline: string;
  officialPortal: string;
  loading: string;
  language: string;
  theme: string;
  light: string;
  dark: string;
  hotline: string;
  contactEmail: string;
  textSize: string;
  decreaseText: string;
  resetText: string;
  increaseText: string;
  navHome: string;
  navAbout: string;
  navNotices: string;
  navHelp: string;
  primaryNavigation: string;
  notifications: string;
  search: string;
  menu: string;
  noticeLabel: string;
  noticeLive: string;
  noticeManage: string;
  noticeControl: string;
  consumerLogin: string;
  featureSecure: string;
  featureNotifications: string;
  featureControl: string;
  featureQuick: string;
  benefitControlTitle: string;
  benefitControlDescription: string;
  benefitTransparencyTitle: string;
  benefitTransparencyDescription: string;
  benefitServicesTitle: string;
  benefitServicesDescription: string;
}

export const messages: Record<Lang, Messages> = {
  en: {
    system: 'Consent Management System',
    desc: 'A secure platform to manage your consent for communication, service updates and important notifications.',
    login: 'Login',
    loginSub: 'Login using your registered mobile number to proceed.',
    mobile: 'Mobile Number',
    mobilePlaceholder: 'Enter 10-digit mobile number',
    sendOtp: 'Send OTP',
    verifyTitle: 'Verify OTP',
    otpLead: (n) => `Enter the 6-digit code sent to +91 ${n}.`,
    otpLabel: 'Enter OTP',
    changeNumber: 'Change number',
    invalidMobile: 'Enter a valid 10-digit mobile number.',
    requestFailed: 'Could not send the OTP. Please try again.',
    otpSent: 'OTP sent successfully!',
    invalidOtp: 'Invalid OTP. Please try again.',
    demoOtp: 'Demo OTP (Testing Only):',
    resendOtp: 'Resend OTP',
    resendIn: 'Resend OTP in',
    sendingOtp: 'Sending...',
    verifyingOtp: 'Verifying...',
    resendFailed: 'Could not resend the OTP. Please try again.',
    portalName: 'Consent Portal',
    tagline: 'Empowering Consumers. Ensuring Transparency.',
    officialPortal: 'Official DISCOM Consumer Portal',
    loading: 'Loading',
    language: 'Language',
    theme: 'Theme',
    light: 'Light theme',
    dark: 'Dark theme',
    hotline: '1800-233-1266 / 1912 (Toll Free)',
    contactEmail: 'mpez.consent@mpez.gov.in',
    textSize: 'Text size',
    decreaseText: 'Decrease text size',
    resetText: 'Reset text size',
    increaseText: 'Increase text size',
    navHome: 'Home',
    navAbout: 'About CMS',
    navNotices: 'Notices',
    navHelp: 'Help & Support',
    primaryNavigation: 'Main navigation',
    notifications: 'Notifications',
    search: 'Search',
    menu: 'Open navigation menu',
    noticeLabel: 'NOTICES',
    noticeLive: 'Consent Management System is now live.',
    noticeManage: 'Manage your consent, service updates and notifications securely.',
    noticeControl: 'Your data, your control.',
    consumerLogin: 'Consumer Login',
    featureSecure: 'Secure & Trusted',
    featureNotifications: 'Service Notifications',
    featureControl: 'Your Data, Your Control',
    featureQuick: 'Quick & Easy Access',
    benefitControlTitle: 'Greater Control',
    benefitControlDescription: 'Manage your consent anytime',
    benefitTransparencyTitle: 'Complete Transparency',
    benefitTransparencyDescription: 'Know how your data is used',
    benefitServicesTitle: 'Better Services',
    benefitServicesDescription: 'Get important updates securely',
  },
  hi: {
    system: 'सहमति प्रबंधन प्रणाली',
    desc: 'संचार, सेवा अपडेट और महत्वपूर्ण सूचनाओं के लिए अपनी सहमति प्रबंधित करने का एक सुरक्षित मंच।',
    login: 'लॉगिन',
    loginSub: 'आगे बढ़ने के लिए अपने पंजीकृत मोबाइल नंबर से लॉगिन करें।',
    mobile: 'मोबाइल नंबर',
    mobilePlaceholder: '10 अंकों का मोबाइल नंबर दर्ज करें',
    sendOtp: 'OTP भेजें',
    verifyTitle: 'OTP सत्यापित करें',
    otpLead: (n) => `+91 ${n} पर भेजा गया 6 अंकों का कोड दर्ज करें।`,
    otpLabel: 'OTP दर्ज करें',
    changeNumber: 'नंबर बदलें',
    invalidMobile: 'कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें।',
    requestFailed: 'OTP नहीं भेजा जा सका। कृपया फिर से प्रयास करें।',
    otpSent: 'OTP सफलतापूर्वक भेजा गया!',
    invalidOtp: 'OTP गलत है। कृपया फिर से प्रयास करें।',
    demoOtp: 'डेमो OTP (केवल परीक्षण):',
    resendOtp: 'OTP फिर से भेजें',
    resendIn: 'OTP फिर से भेजें',
    sendingOtp: 'भेजा जा रहा है...',
    verifyingOtp: 'सत्यापित किया जा रहा है...',
    resendFailed: 'OTP फिर से नहीं भेजा जा सका। कृपया फिर से प्रयास करें।',
    portalName: 'सहमति पोर्टल',
    tagline: 'उपभोक्ताओं को सशक्त बनाना। पारदर्शिता सुनिश्चित करना।',
    officialPortal: 'आधिकारिक DISCOM उपभोक्ता पोर्टल',
    loading: 'लोड हो रहा है',
    language: 'भाषा',
    theme: 'थीम',
    light: 'लाइट थीम',
    dark: 'डार्क थीम',
    hotline: '1800-233-1266 / 1912 (टोल फ्री)',
    contactEmail: 'mpez.consent@mpez.gov.in',
    textSize: 'अक्षर आकार',
    decreaseText: 'अक्षर छोटे करें',
    resetText: 'अक्षर आकार रीसेट करें',
    increaseText: 'अक्षर बड़े करें',
    navHome: 'होम',
    navAbout: 'CMS के बारे में',
    navNotices: 'सूचनाएँ',
    navHelp: 'सहायता',
    primaryNavigation: 'मुख्य नेविगेशन',
    notifications: 'सूचनाएँ',
    search: 'खोजें',
    menu: 'नेविगेशन मेनू खोलें',
    noticeLabel: 'सूचनाएँ',
    noticeLive: 'सहमति प्रबंधन प्रणाली अब शुरू हो गई है।',
    noticeManage: 'अपनी सहमति, सेवा अपडेट और सूचनाएँ सुरक्षित रूप से प्रबंधित करें।',
    noticeControl: 'आपका डेटा, आपका नियंत्रण।',
    consumerLogin: 'उपभोक्ता लॉगिन',
    featureSecure: 'सुरक्षित और विश्वसनीय',
    featureNotifications: 'सेवा सूचनाएँ',
    featureControl: 'आपका डेटा, आपका नियंत्रण',
    featureQuick: 'आसान और तेज़ पहुँच',
    benefitControlTitle: 'अधिक नियंत्रण',
    benefitControlDescription: 'अपनी सहमति कभी भी प्रबंधित करें',
    benefitTransparencyTitle: 'पूरी पारदर्शिता',
    benefitTransparencyDescription: 'जानें कि आपका डेटा कैसे उपयोग होता है',
    benefitServicesTitle: 'बेहतर सेवाएँ',
    benefitServicesDescription: 'महत्वपूर्ण अपडेट सुरक्षित रूप से पाएँ',
  },
};
