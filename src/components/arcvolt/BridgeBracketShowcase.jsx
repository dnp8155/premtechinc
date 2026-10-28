import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldCheck, CheckCircle2, Gauge } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

// Engineered Bridge Overhang Bracket Systems & Deck Formwork Specifications (Vendor Neutral)
const BRACKET_SYSTEMS = [
  {
    id: "bracket-01",
    tag: "High-Capacity Aluminum",
    title: "Heavy-Duty Aluminum Bridge Overhang Bracket (BBA-96 Class)",
    category: "Bridge Deck Cantilever Formwork",
    capacity: "Up to 10,000 lbs (10 kips) Safe Working Load",
    summary: "High-strength, lightweight modular aluminum alloy overhang bracket engineered for exterior bridge deck slabs on steel girders and precast prestressed concrete I-beams.",
    img: "/brackets/aluminum-bridge-overhang-bracket-bba96.jpg",
    specs: [
      { label: "Horizontal Member", val: "96 in (8 ft) extruded structural channel" },
      { label: "Vertical Leg Adjustment", val: "31.5 in to 64.5 in range" },
      { label: "Weight Advantage", val: "40% lighter than equivalent steel systems" },
      { label: "Compatibility", val: "Deep plate girders, precast bulb tees & tub girders" },
    ],
    features: [
      "Field gang-forming up to 24-foot sections with aluminum joist beams",
      "Fast top-deck elevation adjustments without overhead hazard",
      "Integrated walkway and OSHA-compliant guardrail post receiver pockets",
      "Rotational bottom strut pivot adjusting to sloped web angles",
    ],
  },
  {
    id: "bracket-02",
    tag: "Standard Steel Heavy-Duty",
    title: "Standard Heavy-Duty Steel Overhang Bracket (54\" Series / C49 Class)",
    category: "Structural Steel & Concrete Girders",
    capacity: "Up to 6,000 lbs SWL per bracket",
    summary: "Three-member adjustable triangular steel cantilever frame designed for exterior bridge deck forms where high concentrated screed machine wheel loads occur.",
    img: "/brackets/steel-bridge-overhang-bracket-bbs54.jpg",
    specs: [
      { label: "Horizontal Member", val: "54 in heavy steel channel" },
      { label: "Diagonal Leg", val: "Telescoping tubular steel with Acme threaded screw" },
      { label: "Adjustment Speed", val: "Continuous top-rod fine pitch screw leveler" },
      { label: "Connection Hardware", val: "1/2\" & 3/4\" high-tensile coil rods / tie wires" },
    ],
    features: [
      "Rigid load path directly into bottom flange web junction",
      "Engineered for heavy finishing bridge screed rail load distribution",
      "Adapts to straight girders, haunched beams and skewed cross-girders",
      "Zinc galvanized or high-visibility shop coat for corrosion resistance",
    ],
  },
  {
    id: "bracket-03",
    tag: "Deep Beam Extended",
    title: "Deep Girder Extended Steel Overhang Bracket (Deep Web Series)",
    category: "Deep Plate Girders & High Haunches",
    capacity: "Up to 7,500 lbs SWL per bracket",
    summary: "Engineered specifically for deep steel plate girders (>60\" to 120\" web depths) and deep precast concrete girders where standard brackets cannot reach the lower flange.",
    img: "/brackets/steel-bridge-overhang-bracket-deep-bbs54l.jpg",
    specs: [
      { label: "Web Clearance", val: "Up to 90 in vertical drop configuration" },
      { label: "Diagonal Strut", val: "Reinforced high-yield square tubing" },
      { label: "Bottom Flange Pad", val: "Swivel urethane / steel bearing pad" },
      { label: "Hanger Type", val: "Pres-steel 45° and 90° adjustable deck hangers" },
    ],
    features: [
      "Eliminates web buckling risk by placing load line above lower web flange fillet",
      "Allows full exterior form stripping from deck level or suspended platform",
      "Engineered PE stamp calculations for girder torsional stability during pour",
      "Optional guardrail stanchion socket welded directly to outer member",
    ],
  },
  {
    id: "bracket-04",
    tag: "Compact Twin-Bridge",
    title: "Junior Compact Bridge Overhang Bracket (27\" Series / C49JR Class)",
    category: "Restricted Clearance & Twin Bridges",
    capacity: "Up to 4,500 lbs SWL per bracket",
    summary: "Compact cantilever frame engineered for narrow overhangs and tight lateral clearances between adjacent twin bridge superstructures.",
    img: "/brackets/steel-junior-bridge-overhang-bracket-bbs27.jpg",
    specs: [
      { label: "Horizontal Member", val: "27 in to 36 in compact frame" },
      { label: "Vertical Clearance", val: "Minimum 14 in shallow beam profile" },
      { label: "Weight", val: "Under 38 lbs for single-man handling" },
      { label: "Hardware", val: "Standard coil tie and bridge hanger compatibility" },
    ],
    features: [
      "Ideal for multi-lane bridge widening, phased construction and median closures",
      "Rapid manual placement without requiring crane assistance",
      "Prevents clearance clashes between staged traffic barrier walls",
      "Adjustable slope knuckle for cross-slope superelevation decks",
    ],
  },
  {
    id: "bracket-05",
    tag: "Heavy Timber / Burke Frame",
    title: "Heavy-Duty Channel Burke-Style Bridge Bracket Frame",
    category: "Heavy Civil & Mass Deck Cantilevers",
    capacity: "Up to 9,000 lbs SWL per bracket",
    summary: "Proven structural bridge bracket configuration featuring heavy double-channel top chords designed for heavy timber stringers, steel walers, and cantilever sidewalk forms.",
    img: "/brackets/burke-bridge-overhang-bracket-bbs47.jpg",
    specs: [
      { label: "Chord Type", val: "Double back-to-back channel with spacer ties" },
      { label: "Tie-down System", val: "Through-bolt or clamp hook assemblies" },
      { label: "Cantilever Reach", val: "Handles up to 10 ft cantilever deck overhangs" },
      { label: "Reusability", val: "100+ bridge pour cycle durability" },
    ],
    features: [
      "Engineered for pedestrian bridge sidewalks, inspection walkways and sound wall mounts",
      "Accommodates extreme highway superelevations up to 12%",
      "Integrated tieback hook anchors for precast girder flanges",
      "Full structural PE stamped calculations and load test certifications available",
    ],
  },
];

export default function BridgeBracketShowcase() {
  const [selectedId, setSelectedId] = useState(BRACKET_SYSTEMS[0].id);
  const activeSystem = BRACKET_SYSTEMS.find((b) => b.id === selectedId) || BRACKET_SYSTEMS[0];

  return (
    <section id="bridge-brackets" className="bg-[#0b0f15] border-y hairline py-16 sm:py-24 lg:py-32 text-foreground relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="label-mono text-primary">Structural Bridge Formwork & Cantilever Equipment</span>
            </div>
            <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl break-words mt-4">
              Bridge Overhang <span className="text-primary">Bracket Systems.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-muted-foreground text-base sm:text-lg leading-relaxed">
              Engineered steel and aluminum overhang bracket solutions for cast-in-place bridge decks on steel plate girders, precast concrete tub girders, and precast I-beams. Provided with independent PE load calculations and erection drawings.
            </p>
          </Reveal>
        </div>

        {/* Systems Grid Selector */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {BRACKET_SYSTEMS.map((b) => (
            <button
              key={b.id}
              onClick={() => setSelectedId(b.id)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 ${
                selectedId === b.id
                  ? "bg-card border-primary ring-1 ring-primary/40 shadow-lg shadow-primary/10"
                  : "bg-card/50 border-white/10 hover:border-white/20 hover:bg-card"
              }`}
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-1">{b.tag}</span>
              <p className="font-display font-bold text-sm sm:text-base leading-tight line-clamp-2 text-foreground">{b.title.split("(")[0]}</p>
            </button>
          ))}
        </div>

        {/* Selected System Interactive Showcase */}
        <div className="rounded-3xl border hairline bg-card/60 p-6 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Visual Display */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border hairline bg-black/40">
                <Image
                  src={activeSystem.img}
                  alt={activeSystem.title}
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 left-4">
                  <span className="label-mono bg-black/80 backdrop-blur px-3 py-1.5 rounded-full text-primary border border-primary/30">
                    {activeSystem.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur rounded-xl p-3 border hairline flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-mono text-foreground/90">{activeSystem.capacity}</span>
                  </div>
                  <span className="label-mono text-[10px] text-muted-foreground">Certified Load Path</span>
                </div>
              </div>
            </div>

            {/* Technical Detail & Specs */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <span className="label-mono text-primary">{activeSystem.tag}</span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl mt-2 leading-tight">
                  {activeSystem.title}
                </h3>
                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {activeSystem.summary}
                </p>

                {/* Specs Table */}
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {activeSystem.specs.map((s, idx) => (
                    <div key={idx} className="rounded-xl border hairline bg-black/30 p-3">
                      <span className="label-mono text-[10px] text-muted-foreground block">{s.label}</span>
                      <span className="font-semibold text-xs sm:text-sm text-foreground mt-0.5 block">{s.val}</span>
                    </div>
                  ))}
                </div>

                {/* Engineering Features */}
                <div className="mt-6 space-y-2.5">
                  <span className="label-mono text-[11px] text-muted-foreground block">Key Engineering & Erection Advantages</span>
                  {activeSystem.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Band */}
              <div className="mt-8 pt-6 border-t hairline flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Vendor-neutral specifications & custom bridge calculations available</span>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-11 text-xs sm:text-sm font-semibold hover:brightness-110 transition shadow-lg shadow-primary/20"
                >
                  Request Bracket Design / Pricing <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Engineering Standards Strip */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border hairline bg-card/40 p-5">
            <span className="label-mono text-primary text-[10px] block">Engineering Standard</span>
            <h4 className="font-display font-bold text-base mt-1">Screed Machine Loading</h4>
            <p className="text-xs text-muted-foreground mt-2">Dynamic wheel load distribution analysis for heavy bridge finishing machines and vibratory trusses.</p>
          </div>
          <div className="rounded-2xl border hairline bg-card/40 p-5">
            <span className="label-mono text-primary text-[10px] block">Engineering Standard</span>
            <h4 className="font-display font-bold text-base mt-1">PE Certification & Drawings</h4>
            <p className="text-xs text-muted-foreground mt-2">Stamped erection drawings and safe spacing charts issued across Canada and all 50 US States.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
