type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand-muted/70 bg-white/80 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.32em] text-brand-accent shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.02em] text-brand-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-xl text-base leading-7 text-black/75">{description}</p> : null}
    </div>
  );
}
