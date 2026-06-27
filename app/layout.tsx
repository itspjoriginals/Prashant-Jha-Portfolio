import type { Metadata } from 'next';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'Prashant Jha | Frontend-Heavy Full Stack Developer',
  description: 'Modern portfolio for Prashant Jha with frontend craftsmanship, projects, skills and contact details.',
  metadataBase: new URL('https://jignesh-raheja-portfolio.vercel.app'),
  openGraph: {
    title: 'Prashant Jha | Frontend-Heavy Full Stack Developer',
    description: 'Portfolio for Prashant Jha, a frontend-heavy full-stack developer focused on React, Next.js, TypeScript and polished product experiences.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

