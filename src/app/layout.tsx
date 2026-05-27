import type {Metadata} from 'next';
import './globals.css';

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
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100..900&family=Inter:wght@100..900&family=Source+Code+Pro:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-[#000000] text-white">
        {children}
      </body>
    </html>
  );
}
