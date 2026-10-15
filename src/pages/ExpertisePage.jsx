import React from "react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { EXPERTISE, DELIVERABLES } from "@/lib/pagesData";

export default function ExpertisePage() {
  return (
    <>
      <PageHero
        crumb="Expertise"
        kicker="Technical expertise"
        title="Nine areas of"
        accent="practice."
        text="Specialized engineering across structures, temporary works, transmission and heavy civil infrastructure."
        img={IMG.glass}
        aside={{ label: "Practice areas", value: "09", sub: "Specialized engineering" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <SectionHead kicker="Practice areas" title="Specialized" outline="by design." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.n} delay={(i % 3) * 0.07} y={20}>
              <div className="rounded-3xl border hairline bg-card p-7 h-full hover:border-primary transition-colors">
                <span className="label-mono text-primary">{e.n}</span>
                <h3 className="mt-10 font-display font-bold text-2xl">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

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