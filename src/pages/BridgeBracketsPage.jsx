import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import BridgeBracketShowcase from "@/components/arcvolt/BridgeBracketShowcase";
import Reveal from "@/components/arcvolt/Reveal";
import { ShieldCheck, Ruler, CheckCircle2, FileText, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BridgeBracketsPage() {
  return (
    <>
      <PageHero
        crumb="Bridge Brackets"
        kicker="Specialized Cantilever Systems"
        title="Bridge Overhang"
        accent="Bracket Engineering."
        text="AASHTO-compliant steel and aluminum bridge deck overhang brackets engineered for composite steel plate girders, precast bulb tees, and tub girders."
        img="/brackets/aluminum-bridge-overhang-bracket-bba96.jpg"
        aside={{ label: "Capacity Range", value: "4.5k – 10k", sub: "Safe Working Load (SWL)" }}
      />

      {/* Main Interactive Showcase Component */}
      <BridgeBracketShowcase />

      {/* Engineering Design Methodology & Criteria Section */}
      <section className="bg-[#e5effb] text-[#0c1420] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="label-mono text-[#1565d8]">Technical Design Standard</span>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Engineering Calculations & <span className="text-[#1565d8]">Field Verification.</span>
            </h2>
            <p className="mt-6 text-[#3a4757] max-w-2xl text-base sm:text-lg leading-relaxed">
              Every bridge overhang bracket installation must satisfy strict equilibrium conditions. We analyze the live loading sequence from screed placement, concrete pumping, walkway live loads, and wind overturning.
            </p>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Reveal delay={0.05} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-7 sm:p-9 shadow-sm">
                <span className="label-mono text-[#1565d8]">Phase 01</span>
                <h3 className="mt-3 font-display font-extrabold text-2xl">Girder Torsion & Web Stress</h3>
                <p className="mt-4 text-sm text-[#3a4757] leading-relaxed">
                  Deep concrete pours on exterior brackets exert eccentric horizontal forces on girder webs. We engineer transverse tie-struts, diagonal bottom flange blocks, and calculate web distortional stress to eliminate buckling risk.
                </p>
                <div className="mt-6 pt-4 border-t border-black/10 text-xs font-mono text-black/60">
                  Ref: AASHTO LRFD / CSA S6 Bridge Code
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-7 sm:p-9 shadow-sm">
                <span className="label-mono text-[#1565d8]">Phase 02</span>
                <h3 className="mt-3 font-display font-extrabold text-2xl">Dynamic Screed Wheel Loads</h3>
                <p className="mt-4 text-sm text-[#3a4757] leading-relaxed">
                  Bridge deck finishing machines (screeds) ride on screed pipes mounted directly on the outer bracket ends. We calculate concentrated single-wheel and tandem bogie wheel load distributions across adjacent bracket spans.
                </p>
                <div className="mt-6 pt-4 border-t border-black/10 text-xs font-mono text-black/60">
                  Ref: Safe Spacing Charts & Deflection Limits
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-7 sm:p-9 shadow-sm">
                <span className="label-mono text-[#1565d8]">Phase 03</span>
                <h3 className="mt-3 font-display font-extrabold text-2xl">Certified PE Stamped Submittals</h3>
                <p className="mt-4 text-sm text-[#3a4757] leading-relaxed">
                  We supply contractors with ready-to-submit DOT/MOT drawing packages including hanger tensile capacities, diagonal leg settings, guardrail OSHA compliance, and stripping sequencing procedures.
                </p>
                <div className="mt-6 pt-4 border-t border-black/10 text-xs font-mono text-black/60">
                  Licensed Across Canada & All 50 US States
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <CtaBand
          title="Need custom bridge bracket design?"
          text="Send us your bridge cross-sections, girder spacing, and screed specs. An engineering team member will provide spacing charts and stamped calculations."
          button="Discuss Bracket Requirements"
        />
      </div>
    </>
  );
}
