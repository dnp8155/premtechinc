import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, Droplets, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

// 100% Real-world municipal & industrial water / wastewater treatment plant photos
const WATER_PROJECTS = [
  {
    id: "wtp-01",
    title: "Secondary Aeration & Clarifier Basins",
    category: "Wastewater Treatment Facility (WWTP)",
    code: "ACI 350-20 Liquid-Retaining",
    capacity: "45 MGD Processing Capacity",
    specs: "Monolithic liquid-retaining concrete basins, waterstop construction joints, deep tieback shoring wall.",
    img: "https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?auto=format&fit=crop&w=1400&q=80",
    tags: ["Aeration Basins", "ACI 350 Liquid Retaining", "Mass Concrete"],
  },
  {
    id: "wtp-02",
    title: "Municipal Wastewater Treatment Infrastructure",
    category: "Full-Scale Municipal WWTP Facility",
    code: "EPA Clean Water / Ten States",
    capacity: "Klärwerk Regional System",
    specs: "Complete multi-stage treatment infrastructure: clarifiers, digestion basins, pumping vaults, and biological units.",
    img: "https://images.unsplash.com/photo-1622322977781-76f2247964b7?auto=format&fit=crop&w=1400&q=80",
    tags: ["Sedimentation Tanks", "Biological Treatment", "Regional Scale"],
  },
  {
    id: "wtp-03",
    title: "Regional Water Filtration & Treatment Works",
    category: "Potable Water Facility (WTP)",
    code: "AWWA D100 / State EPA",
    capacity: "Multi-MGD Potable Output",
    specs: "Flocculation chambers, rapid sand filtration beds, raw intake channels, and clearwell storage reservoir.",
    img: "https://images.unsplash.com/photo-1669003152899-a11941e54f5d?auto=format&fit=crop&w=1400&q=80",
    tags: ["Rapid Sand Filters", "Clearwell Vaults", "Intake Channels"],
  },
  {
    id: "wtp-04",
    title: "Circular Clarifiers & Sedimentation Tanks",
    category: "Liquid-Solid Separation · WTP/WWTP",
    code: "ACI 350.1 / ASCE 7",
    capacity: "140 ft Diameter Clarifiers",
    specs: "Radial post-tensioned circular concrete slabs, central sludge hopper, perimeter effluent launder trough.",
    img: "https://images.unsplash.com/photo-1579492450119-80542d516179?auto=format&fit=crop&w=1400&q=80",
    tags: ["Circular Clarifiers", "Post-Tensioned Slabs", "Launder Troughs"],
  },
  {
    id: "wtp-05",
    title: "Intake Pumping Station & Wet Well Vaults",
    category: "Deep Hydraulic Pumping Infrastructure",
    code: "USACE / OSHA Subpart P",
    capacity: "High-Lift Submersible Station",
    specs: "Secant cutoff walls, deep internal waler bracing, high-water-table buoyancy uplift anchor engineering.",
    img: "https://images.unsplash.com/photo-1603465410243-af3e840367dd?auto=format&fit=crop&w=1400&q=80",
    tags: ["Deep Wet Wells", "Intake Shoring", "Buoyancy Control"],
  },
  {
    id: "wtp-06",
    title: "Heavy Civil Excavation & Basin Formwork",
    category: "Constructability & Site Sequencing",
    code: "ACI 347 / ACI 207",
    capacity: "Monolithic Concrete Placements",
    specs: "Heavy lateral fluid formwork pressures, thermal mass temperature monitoring, watertight pour sequences.",
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1400&q=80",
    tags: ["Formwork Pressures", "Thermal Crack Control", "Heavy Civil"],
  },
];

export default function WaterTreatmentShowcase() {
  // Duplicate for smooth seamless looping
  const carouselItems = [...WATER_PROJECTS, ...WATER_PROJECTS];

  return (
    <section id="water-treatment" className="relative py-20 sm:py-28 lg:py-32 bg-slate-950 text-white overflow-hidden border-t hairline border-slate-800">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase tracking-wider mb-4">
              <Droplets className="w-3.5 h-3.5 text-primary animate-pulse" />
              US Water & Wastewater Infrastructure · Real-World Facilities
            </div>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white max-w-2xl">
              Water & Wastewater <span className="text-primary">Treatment Plants.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="max-w-md">
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Live portfolio of real municipal wastewater treatment facilities, clarifier basins, potable filtration plants, and liquid-retaining civil structures engineered to US codes (ACI 350 / AWWA / Ten States).
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-mono text-primary">
                <span>Hover over any project card to pause auto-scroll</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* INFINITE AUTOSCROLLING CAROUSEL STRIP */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Left and right fade gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent z-20 pointer-events-none" />

        <div className="flex w-max animate-marquee pause-hover gap-6 px-6">
          {carouselItems.map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="w-[360px] sm:w-[440px] shrink-0 rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden hover:border-primary/80 transition-all duration-300 group flex flex-col shadow-2xl hover:shadow-primary/10"
            >
              {/* Image banner with overlay */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-950">
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.82] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-primary text-slate-950 shadow">
                    {p.capacity}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950/90 border border-slate-700 text-slate-300 backdrop-blur-sm">
                    {p.code}
                  </span>
                </div>

                {/* Category chip on bottom left of image */}
                <div className="absolute bottom-3 left-3.5">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-primary font-semibold drop-shadow">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-primary transition-colors line-clamp-1">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {p.specs}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-400 group-hover:border-slate-700 transition"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" /> ACI 350 Validated
                    </span>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-primary hover:text-white font-semibold transition"
                    >
                      Inquire <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Authority Bar */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mt-12 sm:mt-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary" />
              US State Regulatory & Environmental Agency Support
            </div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-white">
              Need Engineering Review or Calculations for a Treatment Plant?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We provide sealed engineering drawings, ACI 350 crack-width checks, hydrostatic uplift calcs, deep wet-well shoring design, and mass concrete placement plans across North America.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-3 text-xs font-mono uppercase tracking-wider text-slate-200 hover:border-primary hover:text-primary transition"
            >
              All Project Sectors
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-primary text-slate-950 px-6 py-3 text-xs font-mono uppercase tracking-wider font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/20"
            >
              Request WTP / WWTP Brief <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
