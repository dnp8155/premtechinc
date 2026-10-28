import React from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import MaterialProcurementShowcase from "@/components/arcvolt/MaterialProcurementShowcase";
import Reveal from "@/components/arcvolt/Reveal";

export default function ProcurementPage() {
  return (
    <>
      <SEO
        title="Material Resourcing & Equipment Procurement | Prem Technology Inc."
        description="Vendor-neutral procurement and logistics for heavy civil construction: shoring towers, modular formwork, bridge overhang brackets, and engineered rigging equipment."
        keywords="heavy civil procurement, construction equipment sourcing, temporary works rental, shoring towers procurement, formwork sourcing, Canada US construction logistics"
        canonical="/procurement"
      />
      <PageHero
        crumb="Procurement"
        kicker="Material Resourcing & Equipment"
        title="Vendor-Neutral"
        accent="Equipment Sourcing."
        text="Turnkey resourcing, rental coordination, and certified structural integration for heavy shoring, concrete formwork, and bridge deck hardware."
        img="/real-images/crane-rigging-staging-industrial.jpg"
        aside={{ label: "Supply Model", value: "Vendor-Neutral", sub: "Canada & US Logistics" }}
      />

      {/* Main Interactive Procurement & Resourcing Catalogue */}
      <MaterialProcurementShowcase />

      {/* Sourcing & Quality Verification Protocol */}
      <section className="bg-[#e5effb] text-[#0c1420] py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <Reveal>
            <span className="label-mono text-[#1565d8]">Engineering Supply Advantage</span>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
              Why source through an <span className="text-[#1565d8]">engineering firm?</span>
            </h2>
            <p className="mt-6 text-[#3a4757] max-w-2xl text-base sm:text-lg leading-relaxed">
              Equipment dealers sell systems. We engineer the complete constructability workflow — verifying safe working loads, optimizing equipment quantities to avoid rental waste, and providing the required stamped drawings.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0.05} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-6 sm:p-8 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-[#1565d8] text-white grid place-items-center mb-5 font-bold font-mono">01</span>
                <h3 className="font-display font-bold text-xl">Zero Brand Bias</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#3a4757] leading-relaxed">
                  We specify whatever equipment is available locally in contractor yards or rental hubs, preventing expensive proprietary lock-in.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-6 sm:p-8 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-[#1565d8] text-white grid place-items-center mb-5 font-bold font-mono">02</span>
                <h3 className="font-display font-bold text-xl">Quantity Optimization</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#3a4757] leading-relaxed">
                  Staged pour sequencing plans calculate the exact cycle times and formwork turnover needed, cutting rental costs by 20% to 35%.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-6 sm:p-8 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-[#1565d8] text-white grid place-items-center mb-5 font-bold font-mono">03</span>
                <h3 className="font-display font-bold text-xl">Material Certifications</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#3a4757] leading-relaxed">
                  All structural steel tubing, aluminum alloy extrusions, and high-tensile hardware come with mill test certs and stamped capacities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} y={20}>
              <div className="h-full rounded-[2rem] bg-white/70 border border-black/10 p-6 sm:p-8 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-[#1565d8] text-white grid place-items-center mb-5 font-bold font-mono">04</span>
                <h3 className="font-display font-bold text-xl">On-Site Erection Review</h3>
                <p className="mt-3 text-xs sm:text-sm text-[#3a4757] leading-relaxed">
                  Licensed engineers conduct pre-pour field inspections to verify jack extension, torque settings, and brace alignment before sign-off.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-20">
        <CtaBand
          title="Procure equipment with engineering certainty."
          text="Send us your job site requirements or bill of materials. We coordinate equipment resourcing, stamped calculations, and site delivery."
          button="Request Equipment Resourcing"
        />
      </div>
    </>
  );
}
