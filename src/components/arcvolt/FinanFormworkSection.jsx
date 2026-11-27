import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone, Mail, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

export default function FinanFormworkSection() {
  const products = [
    {
      icon: "🏗️",
      title: "Hydraulic Jump Forms & Climbing Core Systems",
      desc: "High-efficiency self-climbing and crane-lifted core formwork systems engineered for rapid floor-to-floor cycle times on high-rise towers and infrastructure piers."
    },
    {
      icon: "🛡️",
      title: "Perimeter Protection & Safety Screens",
      desc: "Heavy-duty climbing perimeter screens providing full-enclosure weather and fall protection at height."
    },
    {
      icon: "🧱",
      title: "Modular Wall, Column & Slab Formwork Systems",
      desc: "Versatile, high-load steel and modular formwork systems built for heavy infrastructure, architectural concrete precision, and repeatable site durability."
    },
    {
      icon: "🛗",
      title: "High-Capacity Construction Hoists & Vertical Access",
      desc: "Reliable passenger and material hoists engineered for continuous vertical logistics on demanding multi-story and infrastructure builds."
    }
  ];

  const pillars = [
    {
      title: "Competitive Direct-Supply Pricing",
      desc: "Cost-effective equipment packages structured to keep your bids sharp on high-rise, heavy infrastructure, and commercial tenders."
    },
    {
      title: "Dedicated North American Sales & Commercial Support",
      desc: "Fast quoting, equipment availability coordination, logistics planning, and responsive account management from tender to delivery."
    },
    {
      title: "Preliminary System Selection & Cycle-Time Layouts",
      desc: "Practical equipment configurations tailored to your project geometry and schedule."
    },
    {
      title: "North American Code Compliance & Stamped PE / P.Eng. Engineering",
      desc: "Comprehensive structural design checks, sealed shop drawings, tie-in detailing, and ongoing site engineering support from pre-construction through commissioning."
    }
  ];

  return (
    <section id="finan-division" className="relative py-20 sm:py-28 overflow-hidden bg-slate-900 text-white">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 translate-y-1/3 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative">
        {/* Partnership / Collab Header Tag */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs sm:text-sm font-bold tracking-wide uppercase">
                Official Partnership Announcement 🇺🇸 🇨🇦 🇲🇽 🇬🇧
              </span>
            </div>
            {/* Logos side by side */}
            <div className="flex items-center gap-5 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <img
                  src="/brand/prem-technology-logo.png"
                  alt="Prem Technology Inc."
                  className="h-7 sm:h-8 object-contain brightness-0 invert"
                />
              </div>
              <span className="text-white/40 font-light text-xl">×</span>
              <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-md">
                <img
                  src="/brand/finan-formworks-logo.png"
                  alt="Finan Formworks Ltd."
                  className="h-6 sm:h-7 object-contain"
                />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Main Heading & Division Subhead */}
        <div className="mt-10 lg:mt-14 max-w-4xl">
          <Reveal delay={0.05}>
            <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-mono uppercase tracking-wider mb-3">
              <span>Formwork &amp; Vertical Access Division</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-[1.12] tracking-tight">
              Expanding High-Rise &amp; Infrastructure Formwork &amp; Vertical Access Capabilities Across North America{" "}
              <span className="inline-block whitespace-nowrap">🇺🇸 🇨🇦 🇲🇽 🇬🇧</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/15">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
              <span>Exclusive North American Representation for <strong>Finan Formworks Ltd. (UK)</strong></span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
              <strong>Prem Technology Inc.</strong> proudly represents <strong>Finan Formworks Ltd.</strong> across the <strong>United States</strong>, <strong>Canada</strong>, and <strong>Mexico</strong>. Combining Finan’s specialist UK-engineered high-rise and infrastructure formwork, climbing, and vertical access systems at <strong>competitive pricing</strong> with Prem Technology Inc.’s dedicated North American sales and <strong>licensed PE / P.Eng. engineering support</strong>, we deliver cost-effective, end-to-end temporary works solutions for high-rise cores, heavy civil infrastructure, and commercial towers.
            </p>
          </Reveal>
        </div>

        {/* Hero Visual Card + Feature Callout */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-8 items-center">
          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-white/15 group aspect-[16/10] bg-slate-800">
              <img
                src="/brand/finan-jumpform-hero.jpg"
                alt="Finan Formworks Hydraulic Jump Form and Climbing Core Systems"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-wider text-primary font-bold font-mono">British Engineering × North American PE Stamping</span>
                <p className="mt-1 text-lg sm:text-xl font-bold text-white">Hydraulic Jump Forms, Climbing Cores &amp; Vertical Access</p>
              </div>
            </div>
          </Reveal>

          {/* Quick Stats / Highlights */}
          <Reveal delay={0.25} className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-display font-extrabold text-primary mb-1">Direct-Supply</div>
              <h4 className="text-base font-bold text-white mb-2">Competitive Direct Manufacturer Value</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Factory-direct UK manufacturing pricing structured to keep your general contractor and developer tenders sharp.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-display font-extrabold text-primary mb-1">PE / P.Eng.</div>
              <h4 className="text-base font-bold text-white mb-2">Stamped Structural Engineering Support</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Full structural verification, stamped calculations, sealed shop drawings, and site-specific tie-in detailing across Canada &amp; USA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-primary/50 transition-colors">
              <div className="text-3xl font-display font-extrabold text-primary mb-1">End-to-End</div>
              <h4 className="text-base font-bold text-white mb-2">Cycle-Time Planning &amp; Fast Quoting</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                From initial geometry takeoffs and cycle layouts through logistics, on-site supervision, and commissioning.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Core Product Lines */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-primary font-bold font-mono">01 / Systems</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Core Product Lines
            </h3>
            <p className="text-slate-400 mt-2 max-w-2xl text-sm sm:text-base">
              Proven British-engineered systems ready for high-rise towers, civil infrastructure, and heavy commercial construction.
            </p>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item, idx) => (
              <Reveal key={item.title} delay={0.08 * idx}>
                <div className="h-full flex flex-col p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/50 hover:bg-white/[0.06] transition-all group">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform origin-left">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white leading-snug mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed mt-auto">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Competitive Pricing & PE Engineering Support */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-xs uppercase tracking-wider text-primary font-bold font-mono">02 / Technical &amp; Commercial Backing</span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              Competitive Pricing, Sales &amp; Full PE / P.Eng. Engineering Support
            </h3>
            <p className="text-slate-400 mt-2 max-w-3xl text-sm sm:text-base">
              Every Finan Formworks system supplied through Prem Technology Inc. combines direct manufacturer value with responsive commercial and technical support:
            </p>
          </Reveal>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <Reveal key={p.title} delay={0.06 * idx}>
                <div className="flex gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 h-full">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white mb-2">{p.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Sales Inquiries & Callout Card */}
        <div className="mt-16 sm:mt-20">
          <Reveal>
            <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-primary/20 via-white/[0.04] to-transparent border-2 border-primary/40 shadow-2xl relative overflow-hidden">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider mb-4">
                  Inquiries &amp; Consultation
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
                  Sales Inquiries &amp; Technical Consultations
                </h3>
                <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                  For any <strong>sales inquiries</strong>, <strong>competitive quotes</strong>, or <strong>technical consultations</strong> on upcoming high-rise, infrastructure, or commercial projects in North America, please reach out to our team:
                </p>

                {/* Contact Pills */}
                <div className="mt-8 flex flex-wrap gap-4 sm:gap-6">
                  <a
                    href="tel:19428804032"
                    className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-white text-slate-900 font-bold text-sm sm:text-base hover:bg-primary hover:text-white transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>1-942-880-4032</span>
                  </a>

                  <a
                    href="mailto:Virag@premtechinc.com"
                    className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-slate-900 transition-all border border-white/20"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span>Virag@premtechinc.com</span>
                  </a>

                  <a
                    href="https://www.premtechinc.com"
                    className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm sm:text-base hover:bg-white hover:text-slate-900 transition-all border border-white/20"
                  >
                    <Globe className="w-4 h-4 text-primary" />
                    <span>www.premtechinc.com</span>
                  </a>

                  <a
                    href="https://www.finanformworks.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-transparent text-slate-300 font-semibold text-sm hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    <span>Visit Finan Formworks (UK)</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
