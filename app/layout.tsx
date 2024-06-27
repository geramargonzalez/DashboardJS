
import { montserrat } from './ui/fonts';
import '@/app/ui/global.css';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Acme Dashboard',
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialised`}>{children}</body>
      <footer className='py-120 flex justify-center items-center'>This made with love</footer>
    </html>
  );
}
