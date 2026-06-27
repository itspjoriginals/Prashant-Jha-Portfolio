'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [open, setOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-muted/60 bg-[#fcfbf8]/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-4">
        <a href="#hero" className="inline-flex items-center gap-3 rounded-full border border-brand-muted/70 bg-white/80 px-3 py-2 shadow-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-charcoal text-sm font-semibold text-white">PJ</span>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-charcoal">Prashant Jha</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${active === section.id ? 'bg-brand-charcoal text-white shadow-sm' : 'text-brand-charcoal/70 hover:bg-brand-muted/50 hover:text-brand-charcoal'}`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-muted/70 bg-white text-brand-charcoal shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-brand-muted/60 bg-white/95 md:hidden"
          >
            <div className="container py-4">
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-3 py-2.5 text-sm font-medium ${active === section.id ? 'bg-brand-charcoal text-white' : 'text-brand-charcoal/80 hover:bg-brand-muted/50'}`}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
