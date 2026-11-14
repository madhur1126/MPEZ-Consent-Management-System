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
  language: string;
  theme: string;
  light: string;
  dark: string;
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
    language: 'Language',
    theme: 'Theme',
    light: 'Light theme',
    dark: 'Dark theme',
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
    language: 'भाषा',
    theme: 'थीम',
    light: 'लाइट थीम',
    dark: 'डार्क थीम',
  },
};
