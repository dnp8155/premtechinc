import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Compass, Layers, Globe2, ShieldCheck } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { PILLARS } from "@/lib/pagesData";

const ICONS = [Compass, Layers, Globe2, ShieldCheck];
const TAGS = ["Structural Engineering", "Temporary Works", "Transmission Structures", "Heavy Civil"];

export default function About() {
  return (
    <>
      <PageHero
        crumb="About"
        kicker="Company / Prem Technology Inc."
        title="Engineering built around"
        accent="precision."
        text="A structural engineering practice focused on complex infrastructure and demanding construction — transmission structures, temporary works and heavy civil."
        img={IMG.team}
        aside={{ label: "Operating in", value: "Canada & USA", sub: "North America" }}
      />

      <section className="bg-[#eef2f7] text-[#0c1420] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="label-mono text-[#0a63d1]">Practice overview</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-4xl sm:text-6xl lg:text-7xl">
              Complex work, <span className="text-transparent [-webkit-text-stroke:1px_#0c142080]">engineered clearly.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display font-semibold text-2xl leading-snug">
              Specialized structural engineering where technical precision, constructability and reliability matter.
            </p>
            <p className="mt-5 text-[#3a4757] leading-relaxed">
              We support contractors, utilities, engineering teams and project owners through the demanding stages of a project.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((t) => <span key={t} className="label-mono border border-black/20 rounded-full px-3 py-2">{t}</span>)}
            </div>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/20 px-6 h-12 font-semibold hover:bg-black hover:text-white transition">
              Explore services <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-28">
        <SectionHead kicker="Four strategic pillars" title="How we" outline="practice." text="Our approach, expertise, markets and commitment." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.07} y={20}>
                <div className="rounded-3xl border hairline bg-card p-7 h-full hover:border-primary transition-colors">
                  <div className="flex justify-between items-start">
                    <Icon className="w-6 h-6 text-primary" />
                    <span className="label-mono text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-10 font-display font-bold text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <div className="pt-8"><CtaBand /></div>
    </>
  );
}