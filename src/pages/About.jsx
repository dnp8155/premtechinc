import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  HardHat, 
  Award,
  Cpu
} from "lucide-react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { PILLARS } from "@/lib/pagesData";
import { Image } from "@/components/ui/image";

const ICONS = [Compass, Layers, Globe2, ShieldCheck];
const TAGS = [
  "Transmission & High Voltage Grids", 
  "Bridge Cantilever Overhangs", 
  "Deep Excavation & Shoring", 
  "Heavy Civil Transit Infrastructure",
  "ACI 350 Water & Wastewater",
  "Vendor-Neutral Equipment Procurement"
];

const METRICS = [
  { value: "50+", label: "US States Covered", sub: "Licensed Professional Engineers" },
  { value: "10+", label: "Canadian Provinces", sub: "P.Eng Certified Submittals" },
  { value: "100%", label: "Code & DOT Compliance", sub: "AASHTO, CSA, ACI, AISC, OSHA" },
  { value: "0", label: "Vendor Bias", sub: "Independent, Constructability-Driven" },
];

const WORKING_VALUES = [
  {
    icon: HardHat,
    title: "Contractor-Aligned Constructability",
    text: "We design structures and temporary works with field execution in mind — considering crane lift limits, staging sequences, bolt clearances, and rapid cycle stripping."
  },
  {
    icon: FileText,
    title: "Actionable Stamped Calculation Packages",
    text: "Clear, review-ready calculations and erection drawings formatted for immediate approval by state DOTs, provincial MOTs, transit authorities, and municipal agencies."
  },
  {
    icon: Cpu,
    title: "Advanced Structural Modeling & Simulation",
    text: "Utilizing 3D finite element analysis (FEA), PLS-TOWER nonlinear cable analysis, dynamic screed wheel load distribution, and staged construction simulation."
  },
  {
    icon: Award,
    title: "Uncompromising Life Safety & Rigor",
    text: "Temporary works carry live construction loads and human lives. Every calculation adheres to conservative safety factors, peer checks, and full equilibrium audits."
  }
];

const INDUSTRY_STANDARDS = [
  { code: "AASHTO LRFD", title: "Bridge Design Specifications", desc: "Cantilever deck overhangs, screed loads & torsional girder analysis." },
  { code: "CSA S6 / S16", title: "Canadian Highway & Steel Codes", desc: "Structural steel design and highway bridge design standards." },
  { code: "ACI 350 / 318", title: "Concrete Water-Retaining Structures", desc: "Environmental durability, crack-width control & sanitary tanks." },
  { code: "ASCE 10 / 48", title: "Transmission & Substation Structures", desc: "Lattice steel transmission towers and tubular steel pole structures." },
  { code: "OSHA / Provincial OH&S", title: "Construction Safety Standards", desc: "Fall protection, shoring safety limits, and access walkway compliance." },
  { code: "AISC 360", title: "Structural Steel Buildings & Frames", desc: "Specification for structural steel buildings and connections." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Prem Technology Inc. | Precision Structural Engineering Practice"
        description="Learn about Prem Technology Inc. — a specialized structural engineering practice serving transmission, temporary works, bridge overhang systems, and heavy civil construction across Canada and the USA."
        keywords="about Prem Technology, structural engineering firm Canada, engineering practice USA, transmission structural engineers, temporary works specialists, bridge bracket calculations"
        canonical="/about"
      />
      <PageHero
        kicker="Company / Prem Technology Inc."
        title="Engineering built around"
        accent="precision."
        text="A specialized structural engineering practice delivering rigorous, constructability-driven calculations for transmission structures, temporary works, bridge deck systems, and heavy civil infrastructure."
        img={IMG.team}
        aside={{ label: "Operating in", value: "Canada & USA", sub: "North America" }}
      />

      {/* Practice Overview */}
      <section className="bg-[#e5effb] text-[#0c1420] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="label-mono text-[#1565d8]">Practice Overview</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-3xl sm:text-4xl lg:text-5xl">
              Complex work, <span className="text-[#1565d8]">engineered clearly.</span>
            </h2>
            <p className="mt-6 text-[#3a4757] text-base sm:text-lg leading-relaxed">
              Prem Technology Inc. bridges the critical gap between conceptual structural engineering and actual jobsite constructability. We do not design from generic templates — every calculation responds to live field constraints, equipment load paths, and sequential erection staging.
            </p>
            <p className="mt-4 text-[#3a4757] text-base leading-relaxed">
              Serving contractors, power utilities, fabricators, and public infrastructure agencies, our team delivers certified stamped packages across all 50 US States and Canadian Provinces.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <span key={t} className="label-mono bg-white/70 border border-black/15 rounded-full px-3.5 py-2 text-xs font-semibold text-[#0c1420]">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-[#1565d8] text-white px-7 h-12 font-semibold hover:bg-[#0d4eb0] transition shadow-md">
                Explore Services <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/40 px-7 h-12 font-semibold hover:bg-black hover:text-white transition">
                Discuss a Project <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map((m, idx) => (
                <div key={idx} className="rounded-3xl bg-white/80 border border-black/10 p-6 sm:p-8 shadow-sm">
                  <div className="font-display font-extrabold text-3xl sm:text-4xl text-[#1565d8]">{m.value}</div>
                  <div className="mt-2 font-display font-bold text-base text-[#0c1420]">{m.label}</div>
                  <div className="mt-1 text-xs text-[#3a4757] font-mono">{m.sub}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-28">
        <SectionHead 
          kicker="Four Strategic Pillars" 
          title="How we" 
          outline="practice." 
          text="Our approach, expertise, market reach, and long-term engineering commitments." 
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.07} y={20}>
                <div className="rounded-3xl border hairline bg-card p-7 sm:p-8 h-full hover:border-primary transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 grid place-items-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="label-mono text-muted-foreground">0{i + 1}</span>
                    </div>
                    <h3 className="mt-8 font-display font-bold text-2xl">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t hairline flex items-center gap-2 text-xs font-mono text-primary">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Standard</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Working Values & Engineering Principles */}
      <section className="bg-card/40 border-y hairline py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <SectionHead 
            kicker="Core Engineering Principles" 
            title="Built for the" 
            outline="field." 
            text="The standard of execution we enforce on every calculation sheet and drawing set." 
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKING_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <Reveal key={val.title} delay={idx * 0.06} y={20}>
                  <div className="rounded-3xl border hairline bg-card p-7 h-full flex flex-col justify-between">
                    <div>
                      <Icon className="w-8 h-8 text-primary" />
                      <h4 className="mt-5 font-display font-bold text-xl">{val.title}</h4>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{val.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Codes, Standards & Regulatory Compliance */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="label-mono text-primary">Regulatory & Technical Framework</span>
              <h3 className="display-title text-3xl sm:text-4xl mt-3">
                Codes & Governing <span className="text-primary">Standards.</span>
              </h3>
            </div>
            <p className="max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every submittal is verified against governing North American design specifications and jurisdictional safety codes.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRY_STANDARDS.map((std, i) => (
            <Reveal key={std.code} delay={(i % 3) * 0.06} y={15}>
              <div className="rounded-2xl border hairline bg-card/60 p-6 hover:border-primary/50 transition-colors">
                <span className="label-mono text-primary text-xs font-bold">{std.code}</span>
                <h4 className="font-display font-bold text-lg mt-1 text-foreground">{std.title}</h4>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{std.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pt-4"><CtaBand /></div>
    </>
  );
}
