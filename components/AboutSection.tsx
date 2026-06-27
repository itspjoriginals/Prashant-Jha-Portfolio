import SectionHeading from './SectionHeading';
import { about } from '@/lib/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="About" title="About me" description="A concise, product-focused summary of how I build modern web experiences." />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[30px] border border-brand-muted/70 bg-white/90 p-7 shadow-soft sm:p-8">
            <p className="text-base leading-8 text-black/80">{about.summary}</p>
            <div className="mt-6 space-y-3">
              {about.points.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-brand-muted/60 bg-[#fcfbf8] px-4 py-3 text-sm leading-7 text-brand-charcoal/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-brand-muted/70 bg-brand-charcoal p-7 text-white shadow-soft sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-brand-accent">Recruiter snapshot</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.02em]">A product-minded engineer who ships with clarity.</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/80">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />Frontend architecture and scalable UI systems.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />Performance-first build patterns and accessible interactions.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />Component-driven implementation for production-ready products.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
