import SectionHeading from './SectionHeading';
import { skills } from '@/lib/portfolio-data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Skills & tech stack" description="A structured skill map that highlights frontend strength and full-stack capability." />

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="rounded-[28px] border border-brand-muted/70 bg-brand-muted/10 p-8 shadow-soft transition hover:-translate-y-0.5 hover:shadow-strong">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-accent">{group.title}</p>
              <div className="mt-6 grid gap-3 text-sm">
                {group.items.map((skill) => (
                  <span key={skill} className="inline-flex rounded-full border border-brand-charcoal/10 bg-white px-4 py-2 text-black/85">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
