'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

type Project = {
  name: string;
  type: string;
  description: string;
  tech: string[];
  highlights: string[];
  repo?: string;
  liveUrl?: string;
  screenshots?: string[];
};

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const focusable = Array.from(
      container.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    );

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }

      if (event.key !== 'Tab') return;
      if (!first || !last) return;

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center px-3 py-4 sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div className="absolute inset-0 bg-black/45" onClick={onClose} />
      <motion.div
        ref={contentRef}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 18, opacity: 0 }}
        transition={{ duration: 0.24 }}
        className="relative z-10 max-h-[90dvh] w-full max-w-3xl overflow-y-auto rounded-[30px] border border-brand-muted/70 bg-white p-5 shadow-strong sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-brand-accent">{project.type}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-black">{project.name}</h3>
            <p className="mt-3 text-sm leading-7 text-black/75">{project.description}</p>
          </div>
          <button onClick={onClose} aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-muted/70 bg-white text-brand-charcoal shadow-sm">
            ✕
          </button>
        </div>

        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((src, index) => (
              <img
                key={`${project.name}-${index}`}
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                className="h-44 w-full rounded-[22px] object-cover"
              />
            ))}
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[22px] bg-[#fcfbf8] p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">Tech</p>
            <p className="mt-2 text-sm leading-7 text-black/80">{project.tech.join(', ')}</p>
          </div>
          <div className="rounded-[22px] bg-[#fcfbf8] p-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">Highlights</p>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-black/80">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-brand-charcoal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black">
              Open live site
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-2xl border border-brand-charcoal/20 px-4 py-2.5 text-sm font-semibold text-brand-charcoal transition hover:border-brand-accent hover:text-brand-accent">
              View code
            </a>
          ) : null}
          <button onClick={onClose} className="rounded-2xl border border-brand-muted/70 px-4 py-2.5 text-sm font-semibold text-brand-charcoal">
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
