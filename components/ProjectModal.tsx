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
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} details`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <motion.div
        ref={contentRef}
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 18, opacity: 0 }}
        transition={{ duration: 0.24 }}
        className="relative z-10 max-w-3xl overflow-hidden rounded-2xl bg-white p-8 shadow-strong"
      >
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-brand-accent">{project.type}</p>
            <h3 className="mt-3 text-2xl font-semibold text-black">{project.name}</h3>
            <p className="mt-4 text-sm text-black/85">{project.description}</p>
          </div>
          <div>
            <button onClick={onClose} aria-label="Close" className="inline-flex h-10 w-10 items-center justify-center rounded-md border">
              ✕
            </button>
          </div>
        </div>

        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((src, index) => (
              <img
                key={`${project.name}-${index}`}
                src={src}
                alt={`${project.name} screenshot ${index + 1}`}
                className="h-48 w-full rounded-3xl object-cover"
              />
            ))}
          </div>
        ) : null}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold text-black">Tech</p>
            <p className="mt-2 text-sm text-black/85">{project.tech.join(', ')}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-black">Highlights</p>
            <ul className="mt-2 list-disc pl-5 text-sm text-black/85">
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-brand-charcoal px-4 py-2 text-sm font-semibold text-white">
              Open live site
            </a>
          ) : null}
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-xl border border-brand-charcoal px-4 py-2 text-sm font-semibold text-brand-charcoal">
              View code
            </a>
          ) : null}
          <button onClick={onClose} className="rounded-xl border px-4 py-2 text-sm font-semibold">
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
