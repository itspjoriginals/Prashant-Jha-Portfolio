export default function Footer() {
  return (
    <footer className="border-t border-brand-muted/60 bg-white py-10">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-black/80">© {new Date().getFullYear()} Prashant Jha. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="mailto:itspjprashant07@gmail.com" className="text-sm text-brand-accent">Contact</a>
          <a href="https://github.com/itspjoriginals" target="_blank" rel="noreferrer" className="text-sm text-brand-charcoal/90">GitHub</a>
          <a href="https://www.linkedin.com/in/itspjori ginals" target="_blank" rel="noreferrer" className="text-sm text-brand-charcoal/90">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
