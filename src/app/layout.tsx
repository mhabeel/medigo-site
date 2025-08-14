// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MediGo — Medical Transport',
  description:
    'Quick, safe medical transport for medications and sensitive supplies.',
  icons: [{ rel: 'icon', url: '/logo.png' }],
  openGraph: {
    title: 'MediGo',
    description:
      'Quick, safe medical transport for medications and sensitive supplies.',
    url: 'https://your-domain.com',
    siteName: 'MediGo',
    images: [{ url: '/og.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-800">{children}</body>
    </html>
  );
}
