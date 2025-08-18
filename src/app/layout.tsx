// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MediGo — Medizinischer Transport',
  description:
    'Schneller und sicherer medizinischer Transport von Medikamenten und sensiblen Materialien.',
  icons: {
    icon: '/logo.svg',               // Haupt-Favicon
    shortcut: '/favicon.ico',        // Fallback für ältere Browser
    apple: '/apple-touch-icon.png',  // iOS Homescreen-Icon (optional)
  },
  openGraph: {
    title: 'MediGo',
    description:
      'Schneller und sicherer medizinischer Transport von Medikamenten und sensiblen Materialien.',
    url: 'https://medigo-transport.com',
    siteName: 'MediGo',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="antialiased text-slate-800">{children}</body>
    </html>
  );
}
