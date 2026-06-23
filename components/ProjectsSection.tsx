import SectionHeading from './SectionHeading';
import { projectItems } from '@/lib/portfolio-data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Featured" title="Selected projects" description="Premium project previews with strong hierarchy and technical clarity." />

        <div className="grid gap-6 md:grid-cols-2">
          {projectItems.map((project) => (
            <article key={project.name} className="group overflow-hidden rounded-[32px] border border-brand-muted/70 bg-white p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-strong">
              <div className="space-y-4">
                <div className="inline-flex rounded-full bg-brand-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent">
                  {project.type}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-black">{project.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/80">{project.description}</p>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-3xl bg-brand-muted/10 p-4 text-sm text-black/85">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-charcoal/70">Tech</p>
                    <p className="mt-3 leading-7">{project.tech.join(' · ')}</p>
                  </div>
                  <div className="rounded-3xl bg-brand-muted/10 p-4 text-sm text-black/85">
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-charcoal/70">Impact</p>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="list-disc pl-4">{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="rounded-xl border border-brand-charcoal px-5 py-3 text-sm font-semibold text-brand-charcoal transition hover:border-brand-accent hover:text-brand-accent focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  View details
                </button>
                <button className="rounded-xl bg-brand-charcoal px-5 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Explore repo
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
