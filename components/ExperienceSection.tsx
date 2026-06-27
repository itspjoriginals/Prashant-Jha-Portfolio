import SectionHeading from './SectionHeading';
import { experienceItems } from '@/lib/portfolio-data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Professional timeline" description="A modern timeline of frontend and full-stack engineering roles." />

        <div className="relative space-y-5 before:absolute before:left-[11px] before:top-0 before:h-full before:w-px before:bg-brand-muted/80">
          {experienceItems.map((item) => (
            <article key={item.company} className="relative pl-8">
              <span className="absolute left-0 top-6 h-5 w-5 rounded-full border-2 border-brand-charcoal bg-white" />
              <div className="rounded-[28px] border border-brand-muted/70 bg-white/90 p-6 shadow-soft sm:p-7">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-black">{item.role}</p>
                    <p className="mt-1 text-sm text-brand-charcoal/80">{item.company} · {item.location}</p>
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand-accent">{item.duration}</p>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-black/75">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
