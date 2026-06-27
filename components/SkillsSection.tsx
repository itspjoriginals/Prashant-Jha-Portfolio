import SectionHeading from './SectionHeading';
import { skills } from '@/lib/portfolio-data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Skills & tech stack" description="A structured skill map that highlights frontend strength and full-stack capability." />

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <div key={group.title} className="rounded-[30px] border border-brand-muted/70 bg-white/90 p-7 shadow-soft sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.32em] text-brand-accent">{group.title}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((skill) => (
                  <span key={skill} className="inline-flex rounded-full border border-brand-charcoal/10 bg-[#fcfbf8] px-3.5 py-2 text-sm text-black/80">
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
