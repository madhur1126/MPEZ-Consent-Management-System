import type { Metadata } from 'next';
import { LoginScreen } from '@/components/login/LoginScreen';

export const metadata: Metadata = {
  title: 'Login | MPEZ Consent Management System',
};

export default function LoginPage() {
  return <LoginScreen />;
}
// okay