import type { Metadata } from 'next';
import './journey.css';

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : 'http://localhost:3000');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Happy Birthday, Emilia — from Reza',
  description: 'A warm midnight birthday surprise for Emilia, made with love by Reza.',
  openGraph: { title: 'Happy Birthday, Emilia', description: 'A warm midnight birthday surprise, made with love by Reza.', images: ['/og.jpg'] },
  twitter: { card: 'summary_large_image', title: 'Happy Birthday, Emilia', description: 'A warm midnight birthday surprise, made with love by Reza.', images: ['/og.jpg'] },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body>{children}</body></html>; }
