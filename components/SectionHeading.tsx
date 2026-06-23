type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-accent/90">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-brand-charcoal sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-black/85">{description}</p> : null}
    </div>
  );
}
