import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FOOTER_COMPANY, FOOTER_EXPERTISE } from "@/lib/navData";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline bg-background pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-display font-extrabold">X</span>
            <span className="font-display font-extrabold text-lg">ARCVOLT</span>
          </Link>
          <p className="mt-4 text-muted-foreground max-w-xs">Integrated construction, architecture and engineering for organizations building with long-term ambition.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex items-center border-b hairline max-w-xs">
            <input type="email" required placeholder="Email for project insights" className="bg-transparent flex-1 py-3 text-sm outline-none placeholder:text-muted-foreground" />
            <button type="submit" aria-label="Subscribe" className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center"><ArrowRight className="w-4 h-4" /></button>
          </form>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Company</h4>
          <ul className="space-y-2">{FOOTER_COMPANY.map((l) => <li key={l.to}><Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition">{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Expertise</h4>
          <ul className="space-y-2">{FOOTER_EXPERTISE.map((l) => <li key={l.to}><Link to={l.to} className="text-sm text-muted-foreground hover:text-foreground transition">{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@arcvolt.com" className="hover:text-foreground transition">hello@arcvolt.com</a></li>
            <li><a href="tel:+10000000000" className="hover:text-foreground transition">+1 000 000 0000</a></li>
            <li><Link to="/contact" className="hover:text-foreground transition">New business</Link></li>
            <li><Link to="/careers" className="hover:text-foreground transition">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mt-14 pt-6 border-t hairline flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© 2026 ARCVOLT. Construction & built-environment company.</span>
        <a href="#top" className="hover:text-primary transition">Back to top ↑</a>
      </div>
    </footer>
  );
}