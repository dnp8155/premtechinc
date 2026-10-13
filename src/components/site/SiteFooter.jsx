import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FOOTER_NAV, FOOTER_SERVICES, SECTORS } from "@/lib/navData";
import { CONTACT } from "@/lib/siteData";

const linkCls = "text-sm text-muted-foreground hover:text-foreground transition";

export default function SiteFooter() {
  return (
    <footer className="border-t hairline bg-background pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1fr_1fr] gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-display font-extrabold">P</span>
            <span className="leading-none">
              <span className="block font-display font-extrabold text-lg">PREM</span>
              <span className="block label-mono text-muted-foreground mt-1">Technology Inc.</span>
            </span>
          </Link>
          <p className="mt-4 text-muted-foreground max-w-xs">Structural engineering, temporary works, transmission structures and heavy civil infrastructure.</p>
          <span className="mt-4 inline-block label-mono border hairline rounded-full px-3 py-1.5 text-primary">Canada · USA</span>
          <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex items-center border-b hairline max-w-xs">
            <input type="email" required placeholder="Email for engineering insights" className="bg-transparent flex-1 py-3 text-sm outline-none placeholder:text-muted-foreground" />
            <button type="submit" aria-label="Subscribe" className="w-9 h-9 rounded-full bg-primary text-primary-foreground grid place-items-center"><ArrowRight className="w-4 h-4" /></button>
          </form>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Navigation</h4>
          <ul className="space-y-2">{FOOTER_NAV.map((l) => <li key={l.label}><Link to={l.to} className={linkCls}>{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Services</h4>
          <ul className="space-y-2">{FOOTER_SERVICES.map((l) => <li key={l.label}><Link to={l.to} className={linkCls}>{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Client sectors</h4>
          <ul className="space-y-2">{SECTORS.map((s) => <li key={s} className="text-sm text-muted-foreground">{s}</li>)}</ul>
        </div>
        <div>
          <h4 className="label-mono text-primary mb-4">Stay connected</h4>
          <ul className="space-y-2">
            <li><a href={CONTACT.emailHref} className={linkCls}>{CONTACT.email}</a></li>
            <li><a href={CONTACT.phoneHref} className={linkCls}>{CONTACT.phone}</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className={linkCls}>LinkedIn</a></li>
            <li><a href="https://www.youtube.com" target="_blank" rel="noreferrer" className={linkCls}>YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mt-14 pt-6 border-t hairline flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© 2026 Prem Technology Inc. All rights reserved.</span>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary transition">Terms of Engagement</Link>
          <a href="#top" className="hover:text-primary transition">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}