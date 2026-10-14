import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Image } from "@/components/ui/image";
import { NAV_MENU } from "@/lib/navData";
import { IMG, LOGO_ICON_URL, GURU_EYES_URL } from "@/lib/siteData";
import useHideOnScroll from "@/hooks/use-scroll-direction";

function DesktopItem({ item }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to) || item.children?.some((c) => pathname.startsWith(c.to));

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link to={item.to} className={`flex items-center gap-1.5 py-2 text-sm font-semibold border-b-2 transition-colors ${active || open ? "text-primary border-primary" : "text-slate-900 border-transparent"}`}>
        {item.label}
        {item.children && <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />}
      </Link>
      {item.children && open && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-6 z-50">
          <div className="w-[640px] rounded-3xl border border-black/10 bg-white text-slate-900 p-3 grid grid-cols-2 gap-3 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden min-h-[240px]">
              <Image src={IMG.glass} alt="" className="absolute inset-0 w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              <div className="absolute bottom-0 p-5">
                <span className="label-mono text-primary">Inside PREM</span>
                <p className="font-display font-bold text-2xl leading-tight mt-2 text-white">{item.blurb}</p>
              </div>
            </div>
            <ul className="py-1">
              {item.children.map((c) => (
                <li key={c.label}>
                  <Link to={c.to} onClick={() => setOpen(false)} className="flex items-center justify-between py-3.5 px-3 border-b border-black/10 last:border-0 text-sm font-medium hover:text-primary transition-colors">
                    {c.label} <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const hidden = useHideOnScroll();
  return (
    <header className={`fixed top-2 sm:top-4 left-0 right-0 z-50 px-2 sm:px-4 transition-transform duration-300 ${hidden && !open ? "-translate-y-[150%]" : "translate-y-0"}`}>
      <div className="relative overflow-hidden mx-auto max-w-[1440px] rounded-full border border-black/10 bg-white shadow-lg text-slate-900 pl-3 pr-2 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-2">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 hidden lg:flex items-center [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <Image src={GURU_EYES_URL} alt="" fittingType="fit" className="h-16 sm:h-[72px] w-[260px] max-w-none opacity-45" />
        </div>
        <Link to="/" className="relative flex items-center" aria-label="PREM Technology Inc. home">
          <Image src={LOGO_ICON_URL} alt="PREM Technology Inc." fittingType="fit" className="h-12 w-11 sm:h-14 sm:w-[52px] p-1" />
        </Link>
        <nav className="relative hidden lg:flex items-center gap-5 xl:gap-8">
          {NAV_MENU.map((n) => <DesktopItem key={n.label} item={n} />)}
        </nav>
        <div className="relative flex items-center gap-2">
          <Link to="/contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 xl:px-5 h-11 text-sm whitespace-nowrap font-semibold hover:brightness-110 transition">
            Discuss Your Project <ArrowUpRight className="w-4 h-4" />
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden w-11 h-11 rounded-full border border-black/15 text-slate-900 grid place-items-center" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden mt-2 mx-auto max-w-[1440px] rounded-3xl border border-black/10 bg-white text-slate-900 shadow-lg p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-5">
          {NAV_MENU.map((n) => (
            <div key={n.label}>
              <NavLink to={n.to} onClick={() => setOpen(false)} className="font-display font-bold text-xl">{n.label}</NavLink>
              {n.children && (
                <div className="mt-2 ml-3 flex flex-col gap-2">
                  {n.children.map((c) => <Link key={c.to} to={c.to} onClick={() => setOpen(false)} className="text-sm text-slate-600">{c.label}</Link>)}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground h-12 font-semibold">
            Discuss Your Project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}