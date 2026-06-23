import SectionHeading from './SectionHeading';
import { experienceItems } from '@/lib/portfolio-data';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Experience" title="Professional timeline" description="A modern timeline of frontend and full-stack engineering roles." />

        <div className="space-y-6">
          {experienceItems.map((item) => (
            <article key={item.company} className="overflow-hidden rounded-[28px] border border-brand-muted/70 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-strong">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-black">{item.role}</p>
                  <p className="mt-1 text-sm text-brand-charcoal/80">{item.company} · {item.location}</p>
                </div>
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-brand-accent">{item.duration}</p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-black/80">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="list-disc pl-5">{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
