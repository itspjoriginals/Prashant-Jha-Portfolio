"use client";

import { motion } from 'framer-motion';
import { proofHighlights } from '@/lib/portfolio-data';
import { stagger, reveal } from './motion/variants';

export default function HeroSection() {
  return (
    <section id="hero" className="overflow-hidden px-0 py-20 sm:py-28 lg:py-32">
      <div className="container grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div initial="hidden" animate="show" variants={stagger} className="max-w-3xl">
            <motion.p variants={reveal} className="inline-flex items-center rounded-full border border-brand-muted/70 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent shadow-sm">
              Frontend-Heavy Full Stack Developer
            </motion.p>
            <motion.h1 variants={reveal} className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              I build fast, polished digital products with strong frontend craftsmanship.
            </motion.h1>
            <motion.p variants={reveal} className="mt-6 max-w-2xl text-base leading-8 text-black/75 sm:text-lg">
              Focused on responsive React and Next.js experiences, reusable UI systems, and performance-minded interfaces that communicate credibility instantly.
            </motion.p>

            <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#projects" className="inline-flex items-center justify-center rounded-2xl bg-brand-charcoal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl border border-brand-charcoal/20 bg-white/80 px-6 py-3 text-sm font-semibold text-brand-charcoal transition hover:-translate-y-0.5 hover:border-brand-accent hover:text-brand-accent focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                Contact Me
              </a>
            </motion.div>

            <motion.div variants={reveal} className="mt-10 grid gap-3 sm:grid-cols-3">
              {proofHighlights.map((item) => (
                <div key={item.label} className="rounded-2xl border border-brand-muted/70 bg-white/90 p-4 shadow-soft">
                  <p className="text-2xl font-semibold text-black">{item.label}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative isolate overflow-hidden rounded-[32px] border border-brand-muted/70 bg-white/85 p-6 shadow-strong sm:p-8"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,26,0.16),transparent_45%)]" />
          <div className="relative z-10 space-y-5">
            <div className="flex items-center justify-between rounded-2xl border border-brand-charcoal/10 bg-brand-charcoal/5 px-4 py-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-brand-charcoal/70">Currently building</p>
                <p className="mt-1 text-sm font-semibold text-black">Product UI systems and conversion-first interfaces</p>
              </div>
              <span className="rounded-full bg-brand-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">Available</span>
            </div>

            <div className="rounded-[24px] border border-brand-muted/70 bg-[#fdfbf7] p-5 shadow-sm">
              <p className="text-[11px] uppercase tracking-[0.32em] text-brand-accent">Focus areas</p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-black/75">
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />Responsive React and Next.js interfaces with thoughtful interaction design.</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />Reusable component systems and polished product experiences.</li>
                <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-accent" />Accessible, performance-minded implementation that feels effortless.</li>
              </ul>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[20px] border border-brand-muted/70 bg-white p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.3em] text-brand-charcoal/70">Primary stack</p>
                <p className="mt-2 text-base font-semibold text-black">React · Next.js · Tailwind</p>
              </div>
              <div className="rounded-[20px] border border-brand-muted/70 bg-white p-4 shadow-sm">
                <p className="text-[11px] uppercase tracking-[0.3em] text-brand-charcoal/70">Delivery focus</p>
                <p className="mt-2 text-base font-semibold text-black">Performance · Accessibility · polish</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
