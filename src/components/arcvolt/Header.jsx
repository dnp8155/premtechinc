import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { NAV } from "@/lib/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="mx-auto max-w-[1440px] rounded-full border hairline bg-black/40 backdrop-blur-xl px-4 sm:px-6 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-display font-extrabold">X</span>
          <span className="font-display font-extrabold tracking-tight text-lg">ARCVOLT</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 h-11 text-sm font-semibold hover:brightness-110 transition">
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden w-11 h-11 rounded-full border hairline grid place-items-center" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mt-2 mx-auto max-w-[1440px] rounded-3xl border hairline bg-black/90 backdrop-blur-xl p-6 flex flex-col gap-4">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-lg font-display font-semibold">
              {n.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground h-12 font-semibold">
            Start a project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}