"use client";

import SectionHeading from './SectionHeading';
import { projectItems } from '@/lib/portfolio-data';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cardHover } from './motion/variants';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selected, setSelected] = useState<(typeof projectItems)[number] | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Featured" title="Selected projects" description="Premium project previews with strong hierarchy and technical clarity." />

        <div className="grid gap-6 lg:grid-cols-2">
          {projectItems.map((project) => (
            <motion.article
              key={project.name}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardHover}
              className="group overflow-hidden rounded-[30px] border border-brand-muted/70 bg-white/90 p-6 shadow-soft sm:p-7"
            >
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-brand-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-accent">
                  {project.type}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-black">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/75">{project.description}</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] bg-[#fcfbf8] p-4 text-sm text-black/80">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">Tech</p>
                    <p className="mt-3 leading-7">{project.tech.join(' · ')}</p>
                  </div>
                  <div className="rounded-[22px] bg-[#fcfbf8] p-4 text-sm text-black/80">
                    <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">Impact</p>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => setSelected(project)} className="rounded-2xl border border-brand-charcoal/20 bg-white px-5 py-3 text-sm font-semibold text-brand-charcoal transition hover:border-brand-accent hover:text-brand-accent focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  View details
                </button>
                <a href={project.liveUrl ?? '#'} target="_blank" rel="noreferrer" className="rounded-2xl bg-brand-charcoal px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  View live
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <AnimatePresence>
          {selected ? <ProjectModal project={selected} onClose={() => setSelected(null)} /> : null}
        </AnimatePresence>
      </div>
    </section>
  );
}
