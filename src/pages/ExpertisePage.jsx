import React from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import WaterTreatmentShowcase from "@/components/arcvolt/WaterTreatmentShowcase";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/siteData";
import { EXPERTISE, DELIVERABLES } from "@/lib/pagesData";

export default function ExpertisePage() {
  return (
    <>
      <SEO
        title="Areas of Technical Expertise | Prem Technology Inc."
        description="Explore Prem Technology's specialized practice areas: Transmission Towers, Bridge Brackets, Deep Shoring, Cofferdams, Heavy Rigging, LRT Structures, and Water Treatment Plants."
        keywords="structural engineering practice areas, transmission line engineering, deep shoring design, cofferdam engineering, falsework and formwork, crane rigging plans, LRT transit structures"
        canonical="/expertise"
      />
      <PageHero
        crumb="Expertise"
        kicker="Technical expertise"
        title="Nine areas of"
        accent="practice."
        text="Specialized engineering across structures, temporary works, transmission and heavy civil infrastructure."
        img={IMG.glass}
        aside={{ label: "Practice areas", value: "09", sub: "Specialized engineering" }}
      />

      {/* Main Photographic Expertise Showcase Grid */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <SectionHead kicker="Practice areas" title="Specialized" outline="by design." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.n} delay={(i % 3) * 0.07} y={20}>
              <div className="group rounded-3xl border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300 flex flex-col h-full">
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-background">
                  <Image
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wider shadow-md">
                      {e.n}
                    </span>
                    {e.tag && (
                      <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wider shadow-md">
                        {e.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {e.text}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Water & Wastewater Infrastructure Showcase Section (Transferred here as requested) */}
      <WaterTreatmentShowcase />

      {/* Deliverables Banner */}
      <section className="bg-[#e5effb] text-[#0c1420] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="label-mono text-[#1565d8]">Core engineering deliverables</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-2xl sm:text-3xl lg:text-4xl">What we put in your hands.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {DELIVERABLES.map((d) => <span key={d} className="rounded-full border border-black/20 bg-white/60 px-4 py-2.5 text-sm font-medium">{d}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-24"><CtaBand /></div>
    </>
  );
}