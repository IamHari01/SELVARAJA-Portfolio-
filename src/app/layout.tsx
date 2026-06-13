
import type { Metadata } from 'next';
import { Inter, Inter_Tight, Source_Code_Pro } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-code',
});

export const metadata: Metadata = {
  title: 'Selvaraja | AI Engineer & Autonomous Architect',
  description: 'Top 0.1% AI Engineer specializing in distributed intelligence and autonomous agent orchestration.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${interTight.variable} ${sourceCodePro.variable}`}>
      <body className="font-body antialiased bg-[#000000] text-white">
        {children}
      </body>
    </html>
  );
}
