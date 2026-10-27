import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Shield, Check, Package, Wrench, Search, ChevronRight, HelpCircle } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

// Categorized Equipment Catalogue without brand names (Vendor-Neutral)
const PROCUREMENT_CATEGORIES = [
  "All Equipment",
  "Shoring & Earth Retention",
  "Formwork & Falsework",
  "Bridge Deck Accessories",
  "Heavy Access & Platforms",
];

const EQUIPMENT_CATALOGUE = [
  {
    id: "eq-01",
    category: "Shoring & Earth Retention",
    name: "Aluminum Shoring Frames & Modular Hi-Load Towers",
    classification: "Modular Aluminum Shoring",
    img: "/real-images/aluminum-shoring-frames.jfif",
    specs: "Capacity: Up to 22 kips (100 kN) per leg · Heights: 4' to 16' modular stack · Screw jack adjustment",
    description: "Lightweight, high-capacity aluminum shoring frames designed for fast hand-set erection and crane-fly gang assemblies with cross-bracing and heavy base jacks.",
    applications: "Elevated slab shoring, parking structures, heavy bridge overhang decks, commercial transfer slabs.",
    availability: "Direct supply, rental fleet coordination & certified layout calculations.",
  },
  {
    id: "eq-02",
    category: "Formwork & Falsework",
    name: "Aluminum Gang Wall Formwork Systems",
    classification: "Modular Gang Wallform",
    img: "/real-images/aluminum-gang-wall-forms.jfif",
    specs: "Lateral Pour Pressure: Up to 1,500 psf (72 kN/m²) · High-tensile aluminum alloy w/ tough face sheets",
    description: "Modular aluminum gang wall panels and strongback walers providing rapid crane cycling, straight and curved wall configurations, and minimal tie requirements.",
    applications: "Foundation walls, civil retaining walls, water basin cores, bridge abutments, high-rise shear walls.",
    availability: "Complete gang assemblies with lifting brackets, catwalks, and PE-stamped pour plans.",
  },
  {
    id: "eq-03",
    category: "Shoring & Earth Retention",
    name: "Aluminum, Steel & PERI Post Shores",
    classification: "Heavy Telescopic Post Shores",
    img: "/real-images/aluminum-steel-post-shores.jfif",
    specs: "Working Load: 20 kN to 90 kN SWL · Extension: 1.5m to 6.25m · Quick-release drop heads",
    description: "Heavy-duty telescopic steel and aluminum props (including PERI/Titan-compatible profiles) featuring self-cleaning threads, forged collar rings, and tripod stands.",
    applications: "Multi-story slab reshoring, drop-beam shoring, edge back-propping, industrial temporary structural support.",
    availability: "Available for sale and rental packages with certified load tables.",
  },
  {
    id: "eq-04",
    category: "Bridge Deck Accessories",
    name: "Heavy-Duty Bridge Overhang Cantilever Brackets",
    classification: "Class A Heavy Civil",
    img: "/real-images/heavy-duty-bridge-overhang-cantilever-brackets.jfif",
    specs: "Capacity: 6,000 - 10,000 lbs SWL · 54\" to 96\" Chords · Sloped Web Knuckle",
    description: "Modular steel and lightweight aluminum triangular cantilever brackets engineered to support exterior bridge deck slab formwork, finishing screed rails, and exterior walkways.",
    applications: "Prestressed concrete I-girders, steel tub girders, deep plate girders, bridge widening projects.",
    availability: "Direct supply, rental fleet coordination & certified load calculations.",
  },
  {
    id: "eq-05",
    category: "Formwork & Falsework",
    name: "Modular Steel-Faced Wall & Column Formwork Panels",
    classification: "Modular Concrete Forming",
    img: "/real-images/steel-wall-column-formwork.jfif",
    specs: "Lateral Pour Pressure: Up to 1,650 psf (80 kN/m²) · Steel frames with high-density birch plywood",
    description: "Industrial modular forming system designed for fast crane cycling, rapid wedge clamp locking, and minimal tie rod requirements on high-rise or civil walls.",
    applications: "Foundation walls, bridge abutments, core shear walls, wastewater treatment basins.",
    availability: "Turnkey supply coordination and site erection supervision.",
  },
  {
    id: "eq-06",
    category: "Shoring & Earth Retention",
    name: "Hydraulic Waler & Strut Trench Shoring Systems",
    classification: "Excavation Support (ERSS)",
    img: "/real-images/hydraulic-trench-shoring.jfif",
    specs: "Cylinder Stroke: 24\" - 48\" · Hydraulic Working Pressure: 3,000 psi · Heavy waler beams",
    description: "Engineered hydraulic aluminum and steel cross-trench shoring frames designed for worker safety and rapid installation without entering unprotected trenches.",
    applications: "Utility trenching, pump station excavations, pipe installations, shaft portals.",
    availability: "OSHA & provincial safety compliant with certified manufacturer data.",
  },
  {
    id: "eq-07",
    category: "Formwork & Falsework",
    name: "Aluminum Formwork Stringers & Joist H-Beams",
    classification: "Structural Extrusions",
    img: "/real-images/aluminum-joist-stringers.jfif",
    specs: "Alloy 6061-T6 · 6.5\" & 7.25\" Profiles with protective continuous wood nailing strip",
    description: "Lightweight structural aluminum joists and strongbacks combining immense section modulus with minimal dead weight for fast manual gang forming.",
    applications: "Slab formwork decking, bridge overhang joists, vertical wall gang backing.",
    availability: "Standard stock lengths 8 ft to 24 ft available for immediate dispatch.",
  },
  {
    id: "eq-08",
    category: "Heavy Access & Platforms",
    name: "Cantilevered Erection Platforms & Stair Access Towers",
    classification: "Site Safety & Access",
    img: "/real-images/heavy-access-stair-towers.jfif",
    specs: "Rated for 50 psf live load · Enclosed OSHA staircases · Modular crane-liftable units",
    description: "Rigid modular access towers and trailing work platforms that attach to bridge decks or building facades to allow safe inspection, tensioning, and stripping.",
    applications: "Bridge pier access, viaduct deck edges, tower scaffolding, industrial maintenance.",
    availability: "Engineered attachment anchor details and site layout plans included.",
  },
];

export default function MaterialProcurementShowcase() {
  const [activeTab, setActiveTab] = useState("All Equipment");

  const filtered = activeTab === "All Equipment"
    ? EQUIPMENT_CATALOGUE
    : EQUIPMENT_CATALOGUE.filter((item) => item.category === activeTab);

  return (
    <section id="material-procurement" className="py-16 sm:py-24 lg:py-32 bg-card border-b hairline relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="label-mono text-primary">Equipment Supply & Engineering Integration</span>
            </div>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl break-words mt-4">
              Material Resourcing & <span className="text-primary">Procurement.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              We connect contractors, infrastructure builders and project managers with verified, vendor-neutral shoring, formwork, and heavy civil construction equipment — backed by independent structural engineering certification and site sequencing drawings.
            </p>
          </Reveal>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b hairline">
          {PROCUREMENT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`label-mono px-4 py-2.5 rounded-full text-xs transition-all ${
                activeTab === cat
                  ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/20"
                  : "bg-white/[0.04] text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((eq) => (
            <div
              key={eq.id}
              className="rounded-3xl border hairline bg-[#0d121a] flex flex-col justify-between overflow-hidden group hover:border-primary/60 transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b hairline">
                  <Image
                    src={eq.img}
                    alt={eq.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="label-mono text-[10px] bg-black/80 backdrop-blur px-2.5 py-1 rounded-full text-primary border border-primary/20">
                      {eq.classification}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <span className="label-mono text-[10px] text-muted-foreground block mb-1">{eq.category}</span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                    {eq.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {eq.description}
                  </p>

                  <div className="mt-4 pt-4 border-t hairline space-y-2 text-xs">
                    <div>
                      <span className="font-mono text-foreground/80 font-medium text-[11px] block">Technical Specs:</span>
                      <span className="text-muted-foreground">{eq.specs}</span>
                    </div>
                    <div>
                      <span className="font-mono text-foreground/80 font-medium text-[11px] block">Primary Applications:</span>
                      <span className="text-muted-foreground">{eq.applications}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-6 pt-0">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-between rounded-full bg-white/[0.05] hover:bg-primary hover:text-primary-foreground border hairline px-5 py-2.5 text-xs font-semibold transition-all group/btn"
                >
                  <span>Request Specs & Resourcing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:rotate-45 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Procurement Assurance Pillars */}
        <div className="mt-14 rounded-3xl border hairline bg-card/40 p-6 sm:p-10">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0 text-primary">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-foreground">Vendor-Neutral Procurement</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  We don't lock you into proprietary manufacturer systems. We specify, source, or engineer around whatever equipment inventory is most cost-effective for your job site.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0 text-primary">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-foreground">Certified Stamped Calculations</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Every shoring tower, bracket spacing and formwork layout comes backed with certified PE calculations in compliance with Canadian and US jurisdictional codes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0 text-primary">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-base text-foreground">Rapid Cross-Border Mobilization</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Coordinating logistics, certified test reports and on-site assembly inspection across Canada and the United States.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
