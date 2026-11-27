import React from "react";
import { ArrowUpRight, Phone, Mail, Globe, ShieldCheck, CheckCircle2, Building2, HardHat, Compass, FileCheck } from "lucide-react";
import Reveal from "./Reveal";

export default function FinanFormworkSection() {
  const products = [
    {
      icon: "🏗️",
      title: "Hydraulic Jump Forms & Climbing Core Systems",
      desc: "High-efficiency self-climbing & crane-lifted core formwork systems engineered for rapid floor-to-floor cycle times on high-rise towers and infrastructure piers."
    },
    {
      icon: "🛡️",
      title: "Perimeter Protection & Safety Screens",
      desc: "Heavy-duty climbing perimeter screens providing full-enclosure weather and fall protection at extreme height."
    },
    {
      icon: "🧱",
      title: "Modular Wall, Column & Slab Formwork",
      desc: "Versatile, high-load steel & modular formwork systems built for heavy infrastructure, architectural concrete precision, and site durability."
    },
    {
      icon: "🛗",
      title: "High-Capacity Construction Hoists & Vertical Access",
      desc: "Reliable passenger and material hoists engineered for continuous, high-volume vertical logistics on demanding multi-story builds."
    }
  ];

  const pillars = [
    {
      icon: Building2,
      title: "Competitive Direct-Supply Pricing",
      desc: "Direct UK manufacturer packages structured to keep contractor bids sharp on high-rise & infrastructure tenders."
    },
    {
      icon: HardHat,
      title: "Dedicated North American Sales Support",
      desc: "Fast estimating, equipment availability coordination, logistics planning, and responsive account management."
    },
    {
      icon: Compass,
      title: "Preliminary System Selection & Cycle Layouts",
      desc: "Practical equipment configurations and cycle-time layouts tailored to project geometry and schedule."
    },
    {
      icon: FileCheck,
      title: "Stamped PE / P.Eng. Engineering",
      desc: "Comprehensive structural design checks, sealed shop drawings, tie-in detailing, and ongoing site engineering support."
    }
  ];

  return (
    <section id="finan-division" className="relative py-16 sm:py-20 bg-slate-900 text-white overflow-hidden border-y border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative">
        
        {/* Top Announcement Bar */}
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs sm:text-sm font-bold tracking-wide uppercase">
                Official Representation Partnership 🇺🇸 🇨🇦 🇲🇽 🇬🇧
              </span>
            </div>

            {/* Co-Branding Badges */}
            <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 self-start md:self-auto">
              <img src="/brand/prem-technology-logo.png" alt="Prem Technology Inc." className="h-7 object-contain brightness-0 invert" />
              <span className="text-white/40 font-light text-lg">×</span>
              <div className="bg-white px-2.5 py-1 rounded">
                <img src="/brand/finan-formworks-logo.png" alt="Finan Formworks Ltd." className="h-6 object-contain" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hero Row: Left Graphic Banner | Right Overview */}
        <div className="mt-8 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Official Partnership Graphic */}
          <Reveal delay={0.1} className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-slate-950 group">
              <img
                src="/brand/prem-finan-partnership-banner.jpg"
                alt="Prem Technology and Finan Formworks Exclusive North American Representation"
                className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300"
              />
            </div>
          </Reveal>

          {/* Right: Overview Text */}
          <Reveal delay={0.15} className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-primary/15 text-primary font-semibold text-xs sm:text-sm border border-primary/30 w-fit mb-3">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Exclusive North American Representation</span>
            </div>

            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.15] tracking-tight">
              Expanding High-Rise &amp; Infrastructure Formwork &amp; Vertical Access Capabilities Across North America{" "}
              <span className="inline-block whitespace-nowrap">🇺🇸 🇨🇦 🇲🇽 🇬🇧</span>
            </h2>

            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <strong>Prem Technology Inc.</strong> proudly represents <strong>Finan Formworks Ltd. (UK)</strong> across the <strong>United States</strong>, <strong>Canada</strong>, and <strong>Mexico</strong>. 
              Through our dedicated <strong>Formwork &amp; Vertical Access Division</strong>, contractors and developers now have direct access to Finan’s proven British-engineered systems for high-rise and infrastructure projects at <strong>competitive pricing</strong>—backed locally from initial inquiry through stamped structural drawings by our <strong>dedicated sales and licensed PE / P.Eng. engineering team</strong>.
            </p>

            {/* Quick Consultation Callout */}
            <div className="mt-6 p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div>
                <span className="text-xs text-primary font-mono font-bold uppercase">Direct Support</span>
                <p className="text-sm font-semibold text-white">Full Tender Support &amp; PE / P.Eng. Stamped Drawings</p>
              </div>
              <a
                href="mailto:Virag@premtechinc.com"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-bold hover:brightness-110 transition shadow-sm"
              >
                <span>Inquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>

        </div>

        {/* Core Product Lines Cards */}
        <div className="mt-14">
          <Reveal delay={0.2}>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-primary font-bold font-mono">Product Systems</span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
                  Core Formwork &amp; Vertical Access Systems
                </h3>
              </div>
              <span className="hidden sm:inline-block text-xs text-slate-400">British Engineering · High-Rise &amp; Infrastructure</span>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((item, idx) => (
              <Reveal key={item.title} delay={0.06 * idx}>
                <div className="h-full p-5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/50 hover:bg-white/[0.07] transition-all flex flex-col group">
                  <div className="text-2xl mb-3 group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                  <h4 className="text-base font-bold text-white mb-2 leading-snug">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-auto">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Engineering & Sales Support Pillars */}
        <div className="mt-12">
          <Reveal delay={0.25}>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-wider text-primary font-bold font-mono">Value &amp; Support</span>
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mt-1">
                Competitive Pricing, Sales &amp; Full PE / P.Eng. Engineering Support
              </h3>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <Reveal key={p.title} delay={0.05 * idx}>
                  <div className="h-full p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col">
                    <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center mb-3">
                      <IconComp className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{p.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-auto">{p.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Sales Inquiries & Contact Bar */}
        <div className="mt-12">
          <Reveal delay={0.3}>
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/15 via-white/[0.05] to-white/[0.02] border border-primary/30 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-primary">Sales &amp; Technical Consultations</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1">Ready to discuss your high-rise or civil project?</h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Contact our team for fast quoting, system selection, or stamped engineering review.</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:19428804032"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-primary hover:text-white transition shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>1-942-880-4032</span>
                </a>

                <a
                  href="mailto:Virag@premtechinc.com"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-slate-900 transition border border-white/15"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>Virag@premtechinc.com</span>
                </a>

                <a
                  href="https://www.finanformworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-400 hover:text-primary transition text-xs sm:text-sm"
                >
                  <span>finanformworks.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
