import type { Metadata } from 'next';
import '../styles/login-theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Consent Management System',
  description: 'Manage your consent for communication, service updates and important notifications.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
