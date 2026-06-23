import SectionHeading from './SectionHeading';
import { about } from '@/lib/portfolio-data';

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="About" title="About me" description="A concise, product-focused summary of how I build modern web experiences." />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.75fr] lg:items-start">
          <div className="space-y-6 rounded-[28px] border border-brand-muted/70 bg-brand-muted/10 p-8 shadow-soft">
            <p className="text-base leading-8 text-black/85">{about.summary}</p>
            <div className="space-y-3">
              {about.points.map((point) => (
                <p key={point} className="text-sm leading-7 text-brand-charcoal/90">
                  • {point}
                </p>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-[28px] border border-brand-muted/70 bg-white p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">Strengths</p>
            <ul className="space-y-4 text-sm leading-7 text-black/85">
              <li>Frontend architecture and scalable UI systems.</li>
              <li>Performance-first build patterns and accessible interactions.</li>
              <li>Component-driven implementation for production-ready products.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
