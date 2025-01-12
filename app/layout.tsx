import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import Footer  from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KJSIT Transcript Portal',
  description: 'Request and manage your academic transcripts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
