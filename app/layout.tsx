import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Cradle Protocol — The Cradle of Innovation',
  description: 'A neon-glow cyberpunk landing for a blockchain protocol forging the next era of decentralized innovation.',
  themeColor: '#00FFC6',
  icons: {
    icon: '/favicon.ico'
  },
  openGraph: {
    title: 'Cradle Protocol',
    description: 'Cradle of innovation for decentralized systems.',
    type: 'website',
    images: []
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src="https://unpkg.com/@splinetool/viewer@1.9.51/build/spline-viewer.js"
          type="module"
          strategy="beforeInteractive"
        />
      </head>
      <body className="min-h-screen bg-black">
        {children}
      </body>
    </html>
  );
}
