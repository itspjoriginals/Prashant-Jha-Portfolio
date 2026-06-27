export default function Footer() {
  return (
    <footer className="border-t border-brand-muted/60 bg-[#fcfbf8] py-8 sm:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-black/70">© {new Date().getFullYear()} Prashant Jha. All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a href="mailto:itspjprashant07@gmail.com" className="text-sm font-medium text-brand-accent hover:text-black">Contact</a>
          <a href="https://github.com/itspjoriginals" target="_blank" rel="noreferrer" className="text-sm font-medium text-brand-charcoal/80 hover:text-brand-charcoal">GitHub</a>
          <a href="https://www.linkedin.com/in/itspjoriginals" target="_blank" rel="noreferrer" className="text-sm font-medium text-brand-charcoal/80 hover:text-brand-charcoal">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
