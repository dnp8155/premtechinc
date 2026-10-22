import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Droplets, Layers, CheckCircle2, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

// WTP & WWTP Showcase designed to US Municipal & Industrial Infrastructure standards (ACI 350 / AWWA / ASCE 7)
export default function WaterTreatmentShowcase() {
  const highlights = [
    {
      title: "ACI 350 Liquid-Retaining Design",
      desc: "Crack control coefficient (z-factor), minimum shrinkage/temperature reinforcement, and stringent watertight joints for potable water & chemical basins.",
      code: "ACI 350-20 / ASCE 7",
    },
    {
      title: "Deep Basin & Shoring Engineering",
      desc: "Engineered soldier piles, internal bracing, and tieback systems for deep wet wells, headworks vaults, and high-water-table excavations.",
      code: "USACE / OSHA Subpart P",
    },
    {
      title: "Mass Pour & Falsework Systems",
      desc: "Thermal crack monitoring, specialized heavy formwork pressures for thick monolithic clarifier floors, baffle walls, and elevated channels.",
      code: "ACI 347 / ACI 207",
    },
  ];

  const plantTypes = [
    { name: "Biological Aeration Basins", tag: "Secondary Treatment" },
    { name: "Circular & Rectangular Clarifiers", tag: "Liquid Separation" },
    { name: "Raw Water Intake & Wet Wells", tag: "Pumping Facilities" },
    { name: "UV Disinfection & Contact Chambers", tag: "Tertiary Purification" },
    { name: "Digesters & Sludge Handling Vaults", tag: "Biosolids Control" },
    { name: "Chemical Feed & Rapid Mix Tanks", tag: "Coagulation / Flocculation" },
  ];

  return (
    <section id="water-treatment" className="relative py-20 sm:py-28 lg:py-32 bg-slate-950 text-white overflow-hidden border-t hairline border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              <Droplets className="w-3.5 h-3.5 text-primary" />
              US Water & Wastewater Infrastructure
            </div>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
              Engineered for <span className="text-primary">Water & Wastewater</span> Treatment Plants.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-md text-slate-300 text-base sm:text-lg leading-relaxed">
              Comprehensive structural engineering, ACI 350 watertight concrete design, and temporary excavation support for municipal & industrial water infrastructure across the United States.
            </p>
          </Reveal>
        </div>

        {/* Feature Grid / Main Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Visual Card */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal className="h-full">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 group h-full flex flex-col justify-end min-h-[420px] lg:min-h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?auto=format&fit=crop&w=1600&q=80"
                  alt="Industrial Wastewater Treatment Plant Aeration Basins"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.75] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="relative p-7 sm:p-10 z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-primary text-slate-950 font-bold">
                      WTP / WWTP
                    </span>
                    <span className="text-xs font-mono text-slate-300 tracking-wider">
                      Municipal & Industrial Facilities
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Environmental Liquid-Retaining Concrete Structures
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                    Engineered precisely to prevent leakage, resist severe chemical exposure, and sustain dynamic hydraulic forces in demanding treatment operations.
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-wrap gap-6 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>ACI 350 Watertight Standards</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-primary" />
                      <span>Heavy Basin Formwork & Shoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Highlights & Technical Disciplines */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-5">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.1 * (i + 1)}>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 hover:border-primary/60 transition-all hover:bg-slate-900 group">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="font-display font-bold text-lg text-white group-hover:text-primary transition-colors">
                      {h.title}
                    </h4>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-primary border border-slate-700">
                      {h.code}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {h.desc}
                  </p>
                </div>
              </Reveal>
            ))}

            <Reveal delay={0.4}>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider mb-2">
                    <Building2 className="w-4 h-4" />
                    US Project Support
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-1">
                    State & EPA Compliant Structural Reviews
                  </h4>
                  <p className="text-sm text-slate-300">
                    Calculations, PE stamps, constructability reviews, and staged construction engineering for clean water & pollution control agencies.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Facility Types Supported */}
        <Reveal y={20}>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Facility Portfolio</span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  Treatment Units & Structural Systems Supported
                </h3>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary hover:underline"
              >
                Request Treatment Plant Technical Consultation <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {plantTypes.map((pt) => (
                <div
                  key={pt.name}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-semibold text-white">{pt.name}</div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">{pt.tag}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom Action strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-slate-800 pt-8">
          <span className="text-xs sm:text-sm font-mono text-slate-400">
            Compliant with AWWA, ACI 350-20 & Ten States Standards for US Wastewater Engineering
          </span>
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 rounded-full bg-primary text-slate-950 px-7 h-13 py-3.5 font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/20 text-sm"
          >
            Explore Water Infrastructure Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
