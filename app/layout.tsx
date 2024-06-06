
import { montserrat } from './ui/fonts';
import '@/app/ui/global.css';

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
