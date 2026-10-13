import React from "react";
import { ArrowRight } from "lucide-react";
import { NAV, SERVICES } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden pt-32 pb-10">
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_20%_20%,#fff_0,transparent_40%),repeating-linear-gradient(45deg,#fff_0,#fff_1px,transparent_1px,transparent_6px)]" />
      <div className="relative max-w-[1440px] mx-auto px-6 sm:px-10">
        <h2 className="display-title text-[clamp(3.5rem,12vw,11rem)]">
          Let's build <span className="text-primary">what's next.</span>
        </h2>
        <a href="mailto:hello@arcvolt.com" className="mt-12 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-8 h-16 text-lg font-semibold hover:brightness-110 transition">
          Start a project <ArrowRight className="w-5 h-5" />
        </a>

        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-t hairline pt-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-display font-extrabold">X</span>
              <span className="font-display font-extrabold text-lg">ARCVOLT</span>
            </div>
            <p className="mt-4 text-muted-foreground max-w-xs">Construction, architecture and digital engineering for what comes next.</p>
          </div>
          <div>
            <h4 className="label-mono text-primary mb-4">Navigate</h4>
            <ul className="space-y-2">
              {NAV.map((n) => <li key={n.href}><a href={n.href} className="text-muted-foreground hover:text-foreground transition">{n.label}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="label-mono text-primary mb-4">Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((s) => <li key={s.n}><a href="#services" className="text-muted-foreground hover:text-foreground transition">{s.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="label-mono text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:hello@arcvolt.com" className="hover:text-foreground transition">hello@arcvolt.com</a></li>
              <li><a href="tel:+10000000000" className="hover:text-foreground transition">+1 (000) 000-0000</a></li>
              <li>Portland · Osaka · Tashkent</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row justify-between gap-3 label-mono text-muted-foreground">
          <span>© 2026 ARCVOLT. All rights reserved.</span>
          <a href="#top" className="hover:text-primary transition">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}