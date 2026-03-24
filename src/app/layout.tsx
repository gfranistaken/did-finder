import type { Metadata, Viewport } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://didfinder.com'),
  title: 'DIDfinder — Open Source Data Item Descriptions',
  description: 'A community-maintained, machine-readable repository of DoD Data Item Descriptions. Search, browse, and export defense DIDs.',
  openGraph: {
    title: 'DIDfinder — Open Source Data Item Descriptions',
    description: 'Search, browse, and export DoD Data Item Descriptions.',
    url: 'https://didfinder.com',
    siteName: 'DIDfinder',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
