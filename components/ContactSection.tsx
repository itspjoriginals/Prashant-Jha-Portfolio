import { meta } from '@/lib/portfolio-data';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-28">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let’s build something together" description="A clean conversion section with direct contact details and strong closing copy." />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[30px] border border-brand-muted/70 bg-white/90 p-7 shadow-soft sm:p-8">
            <p className="text-base leading-8 text-black/80">I’m available for frontend-led web development work, product interface projects, and modern UI system builds. Reach out to discuss a role, project, or collaboration.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-brand-muted/60 bg-[#fcfbf8] p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">Email</p>
                <a href={`mailto:${meta.email}`} className="mt-2 block text-sm font-semibold text-brand-accent hover:text-black">{meta.email}</a>
              </div>
              <div className="rounded-[22px] border border-brand-muted/60 bg-[#fcfbf8] p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">Phone</p>
                <a href={`tel:${meta.phone}`} className="mt-2 block text-sm font-semibold text-brand-accent hover:text-black">{meta.phone}</a>
              </div>
              <div className="rounded-[22px] border border-brand-muted/60 bg-[#fcfbf8] p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">LinkedIn</p>
                <a href={meta.linkedin} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-semibold text-brand-accent hover:text-black">LinkedIn profile</a>
              </div>
              <div className="rounded-[22px] border border-brand-muted/60 bg-[#fcfbf8] p-4">
                <p className="text-[11px] uppercase tracking-[0.28em] text-brand-charcoal/70">GitHub</p>
                <a href={meta.github} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-semibold text-brand-accent hover:text-black">GitHub profile</a>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-brand-muted/70 bg-brand-charcoal p-7 text-white shadow-soft sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.32em] text-brand-accent">What I can help build</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-white/80">
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />Responsive React and Next.js product landing pages.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />Reusable UI libraries, dashboard experiences, and internal tools.</li>
              <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />Performance-aware interfaces with accessible interaction design.</li>
            </ul>
            <a href="mailto:itspjprashant07@gmail.com" className="mt-8 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-brand-charcoal transition hover:-translate-y-0.5">Start a conversation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
