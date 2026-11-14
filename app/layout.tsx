import type { Metadata } from 'next';
import Script from 'next/script';
import '../styles/login-theme.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Consent Management System',
  description: 'Manage your consent for communication, service updates and important notifications.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="mpez-theme-init" strategy="beforeInteractive">
          {`try {
            const savedTheme = localStorage.getItem('login-theme');
            const darkTheme = savedTheme === 'dark' || (savedTheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
            document.documentElement.classList.toggle('dark', darkTheme);
          } catch {
            document.documentElement.classList.toggle('dark', window.matchMedia('(prefers-color-scheme: dark)').matches);
          }`}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
