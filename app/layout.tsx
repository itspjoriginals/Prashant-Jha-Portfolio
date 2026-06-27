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
        <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-white">
          Skip to content
        </a>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}

