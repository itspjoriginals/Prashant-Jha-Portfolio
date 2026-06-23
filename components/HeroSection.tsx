'use client';

import { motion } from 'framer-motion';
import { proofHighlights } from '@/lib/portfolio-data';

export default function HeroSection() {
  return (
    <section id="hero" className="overflow-hidden py-20 sm:py-28">
      <div className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-[0.4em] text-brand-accent"
          >
            Frontend-Heavy Full Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-black sm:text-6xl"
          >
            I build fast, polished digital products with strong frontend craftsmanship.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-7 text-black/80"
          >
            Focused on responsive React and Next.js interfaces, reusable UI systems, and performance-minded web experiences that communicate credibility instantly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-brand-charcoal px-6 py-3 text-sm font-semibold text-brand-charcoal transition hover:border-brand-accent hover:text-brand-accent focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid gap-4 sm:grid-cols-3"
          >
            {proofHighlights.map((item) => (
              <div key={item.label} className="rounded-xl border border-brand-muted/50 bg-white p-5 shadow-soft">
                <p className="text-3xl font-semibold text-black">{item.label}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.25em] text-brand-charcoal/75">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="group relative isolate overflow-hidden rounded-[32px] border border-brand-muted/70 bg-brand-muted/10 p-8 shadow-accent"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,26,0.12),transparent_45%)]" />
          <div className="relative z-10 space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-accent">Featured work</p>
            <div className="rounded-3xl border border-brand-charcoal/10 bg-white p-6 shadow-soft">
              <p className="text-base font-semibold text-black">Product UI systems</p>
              <p className="mt-4 text-sm leading-7 text-black/75">Reusable component structure, landing page polish, and accessible interaction patterns for modern product experiences.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-brand-charcoal/10 bg-brand-charcoal/5 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-charcoal/70">Primary stack</p>
                <p className="mt-3 text-lg font-semibold text-black">React · Next.js · Tailwind</p>
              </div>
              <div className="rounded-3xl border border-brand-charcoal/10 bg-brand-charcoal/5 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-brand-charcoal/70">Delivery focus</p>
                <p className="mt-3 text-lg font-semibold text-black">Performance · Accessibility · polished UI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
