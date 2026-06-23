import { meta } from '@/lib/portfolio-data';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Contact" title="Let’s build something together" description="A clean conversion section with direct contact details and strong closing copy." />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.7fr] lg:items-start">
          <div className="rounded-[32px] border border-brand-muted/70 bg-white p-10 shadow-soft">
            <p className="text-base leading-8 text-black/85">I’m available for frontend-led web development work, product interface projects, and modern UI system builds. Reach out to discuss a role, project, or collaboration.</p>
            <div className="mt-10 space-y-4 text-sm leading-7 text-black/85">
              <div>
                <p className="font-semibold text-black">Email</p>
                <a href={`mailto:${meta.email}`} className="text-brand-accent hover:text-black">{meta.email}</a>
              </div>
              <div>
                <p className="font-semibold text-black">Phone</p>
                <a href={`tel:${meta.phone}`} className="text-brand-accent hover:text-black">{meta.phone}</a>
              </div>
              <div>
                <p className="font-semibold text-black">LinkedIn</p>
                <a href={meta.linkedin} target="_blank" rel="noreferrer" className="text-brand-accent hover:text-black">LinkedIn profile</a>
              </div>
              <div>
                <p className="font-semibold text-black">GitHub</p>
                <a href={meta.github} target="_blank" rel="noreferrer" className="text-brand-accent hover:text-black">GitHub profile</a>
              </div>
              <div>
                <p className="font-semibold text-black">Leetcode</p>
                <a href={meta.leetcode} target="_blank" rel="noreferrer" className="text-brand-accent hover:text-black">Leetcode profile</a>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-brand-muted/70 bg-brand-muted/10 p-10 text-sm leading-7 text-black/85 shadow-soft">
            <p className="font-semibold text-black">What I can help build</p>
            <ul className="mt-6 space-y-3">
              <li className="list-disc pl-5">Responsive React and Next.js product landing pages.</li>
              <li className="list-disc pl-5">Reusable UI libraries, dashboard experiences, and internal tools.</li>
              <li className="list-disc pl-5">Performance-aware interfaces with accessible interaction design.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
