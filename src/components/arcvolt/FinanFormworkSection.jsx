import React from "react";
import { ArrowUpRight, Phone, Mail, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function FinanFormworkSection() {
  const highlights = [
    "Hydraulic Jump Forms & Climbing Core Systems",
    "Perimeter Protection & Safety Screens",
    "Modular Wall, Column & Slab Formwork Systems",
    "High-Capacity Construction Hoists & Vertical Access"
  ];

  return (
    <section id="finan-division" className="relative py-12 sm:py-16 bg-slate-900 text-white overflow-hidden border-y border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative">
        
        {/* Compact Top Header */}
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold tracking-wide uppercase">
                Official Partnership 🇺🇸 🇨🇦 🇲🇽 🇬🇧
              </span>
              <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mt-2 leading-tight">
                Expanding High-Rise &amp; Infrastructure Formwork &amp; Vertical Access Capabilities
              </h2>
            </div>
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 self-start sm:self-auto shrink-0">
              <img src="/brand/prem-technology-logo.png" alt="Prem Technology" className="h-6 object-contain brightness-0 invert" />
              <span className="text-white/40 font-light">×</span>
              <div className="bg-white px-2 py-0.5 rounded">
                <img src="/brand/finan-formworks-logo.png" alt="Finan Formworks" className="h-5 object-contain" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2-Column Compact Layout: Left Banner Image | Right Core Info */}
        <div className="mt-8 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: The new Crisp Partnership Graphic */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-slate-950 group">
              <img
                src="/brand/prem-finan-partnership-banner.jpg"
                alt="Prem Technology and Finan Formworks Exclusive North American Representation"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </Reveal>

          {/* Right: Crisp, punchy representation summary */}
          <Reveal delay={0.2} className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/10 text-white font-semibold text-xs sm:text-sm border border-white/15 w-fit">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span>Exclusive North American Representation</span>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>Prem Technology Inc.</strong> proudly represents <strong>Finan Formworks Ltd. (UK)</strong> across the <strong>United States</strong>, <strong>Canada</strong>, and <strong>Mexico</strong>. Combining British-engineered high-rise and infrastructure formwork systems at <strong>competitive pricing</strong> with Prem Technology’s dedicated <strong>licensed PE / P.Eng. engineering support</strong>.
            </p>

            {/* Key product bullets */}
            <div className="space-y-2 pt-1">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Action Bar */}
            <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2.5">
              <a
                href="tel:19428804032"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-primary hover:text-white transition shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span>1-942-880-4032</span>
              </a>

              <a
                href="mailto:Virag@premtechinc.com"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-slate-900 transition border border-white/15"
              >
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>Virag@premtechinc.com</span>
              </a>

              <a
                href="https://www.finanformworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-slate-400 hover:text-primary transition text-xs sm:text-sm"
              >
                <span>Finan UK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}
