import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

// Practical, field-tested water and wastewater infrastructure applications
const WATER_PROJECTS = [
  {
    id: "wtp-01",
    n: "01",
    title: "Aeration Basins & Liquid-Retaining Tanks",
    category: "Wastewater Treatment (WWTP)",
    standard: "ACI 350-20",
    summary: "Monolithic reinforced concrete tanks engineered for continuous hydrostatic pressure, minimum shrinkage cracking, and chemical exposure.",
    img: "https://images.unsplash.com/photo-1533163238111-4a7ced54f2e4?auto=format&fit=crop&w=1200&q=80",
    scope: "Crack-width control · Waterstop detailing · Construction joint layout",
  },
  {
    id: "wtp-02",
    n: "02",
    title: "Municipal Treatment Facilities & Process Units",
    category: "Civil Infrastructure",
    standard: "Ten States / EPA",
    summary: "Multi-stage facility infrastructure including headworks structures, biological process units, sludge digesters, and inter-connecting pipe galleries.",
    img: "https://images.unsplash.com/photo-1622322977781-76f2247964b7?auto=format&fit=crop&w=1200&q=80",
    scope: "Substructure design · Differential settlement review · Heavy equipment pads",
  },
  {
    id: "wtp-03",
    n: "03",
    title: "Water Filtration Plants & Clearwell Reservoirs",
    category: "Potable Water (WTP)",
    standard: "AWWA D100",
    summary: "Rapid gravity filtration basins, chemical contact chambers, and underground clearwells designed to maintain watertight integrity under varying ground conditions.",
    img: "https://images.unsplash.com/photo-1669003152899-a11941e54f5d?auto=format&fit=crop&w=1200&q=80",
    scope: "Filter cell walls · Uplift buoyancy calculations · Base slab design",
  },
  {
    id: "wtp-04",
    n: "04",
    title: "Circular Clarifiers & Flocculation Basins",
    category: "Sedimentation Systems",
    standard: "ACI 350 / ASCE 7",
    summary: "Large-diameter circular post-tensioned and reinforced concrete clarifiers with center mechanism supports and perimeter launder channels.",
    img: "https://images.unsplash.com/photo-1579492450119-80542d516179?auto=format&fit=crop&w=1200&q=80",
    scope: "Torque-cage loading · Radial slab reinforcement · Weir elevation control",
  },
  {
    id: "wtp-05",
    n: "05",
    title: "Intake Structures & Deep Pump Wet Wells",
    category: "Temporary Works & Shoring",
    standard: "OSHA Subpart P / USACE",
    summary: "Excavation support, secant pile cutoff walls, and structural internal bracing for deep wet wells excavated below the prevailing water table.",
    img: "https://images.unsplash.com/photo-1603465410243-af3e840367dd?auto=format&fit=crop&w=1200&q=80",
    scope: "Shoring & dewatering interfaces · Hydrostatic uplift anchors · Walers & struts",
  },
  {
    id: "wtp-06",
    n: "06",
    title: "Mass Concrete Pours & Heavy Basin Formwork",
    category: "Construction Engineering",
    standard: "ACI 347 / ACI 207",
    summary: "Site-specific engineering for high-lift basin wall forms, lateral concrete pressure calculation, and thermal control plans for thick monolithic pours.",
    img: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&w=1200&q=80",
    scope: "Formwork & falsework review · Thermal monitoring plans · Pour staging",
  },
];

export default function WaterTreatmentShowcase() {
  const carouselItems = [...WATER_PROJECTS, ...WATER_PROJECTS];

  return (
    <section id="water-treatment" className="border-t hairline bg-background py-16 sm:py-24 lg:py-32">
      {/* Top Header matching exact Prem site typography */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mb-12 sm:mb-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <Reveal>
            <span className="label-mono text-primary">Core expertise / 04</span>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl break-words mt-4">
              Water & wastewater <span className="text-primary">infrastructure.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
              Liquid-retaining concrete structures, deep pumping vaults, and process basins engineered around ACI 350 standards, serviceability, and tight construction tolerances.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Clean, authentic horizontal marquee matching the site's dark design tokens */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge masking using site background tokens */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee pause-hover gap-6 px-6">
          {carouselItems.map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className="w-[340px] sm:w-[420px] shrink-0 rounded-3xl border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300 flex flex-col group"
            >
              {/* Photo */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-background">
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale contrast-[1.08] brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Top badges - High Contrast & Clearly Visible */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wider shadow-md">
                    {p.n}
                  </span>
                  <span className="label-mono bg-black/85 backdrop-blur-md border border-white/25 px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wider shadow-md">
                    {p.standard}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 z-10">
                  <span className="label-mono text-[11px] font-semibold text-white uppercase tracking-wider bg-black/85 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 shadow-md">
                    {p.category}
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {p.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t hairline">
                  <div className="label-mono text-[11px] text-slate-400">
                    {p.scope}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean bottom strip */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t hairline pt-8">
        <span className="label-mono text-muted-foreground">
          Supporting municipal and industrial water treatment projects across North America
        </span>
        <Link
          to="/projects"
          className="inline-flex items-center gap-3 rounded-full border hairline px-7 h-14 font-semibold hover:border-primary hover:text-primary transition"
        >
          View all applications <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
