'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export default function SiteNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-muted/60 bg-white/95 backdrop-blur-md">
      <div className="container flex items-center justify-between py-4">
        <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-charcoal">Prashant Jha</a>
        <nav className="hidden items-center gap-5 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`text-sm transition hover:text-brand-accent ${active === section.id ? 'text-brand-accent font-semibold' : 'text-brand-charcoal/70'}`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
