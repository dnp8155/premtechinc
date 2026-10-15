import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { DISCIPLINES, VALUES } from "@/lib/pagesData";

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        kicker="Practice culture / Careers"
        title="Engineer structures"
        accent="that get built."
        text="Join a practice built around technical rigour, construction awareness and direct communication."
        img={IMG.team}
        aside={{ label: "Disciplines", value: String(DISCIPLINES.length).padStart(2, "0"), sub: "Recruited" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <SectionHead kicker="Primary disciplines recruited" title="Join the" outline="practice." text="Exposure to demanding structures across transmission, temporary works and heavy civil infrastructure." />
        <div className="border-t hairline">
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d} delay={i * 0.05} y={20}>
              <Link to="/contact" className="group grid grid-cols-[60px_1fr_auto] gap-3 sm:gap-6 items-center py-7 border-b hairline hover:px-4 hover:bg-white/[0.03] transition-all duration-500">
                <span className="label-mono text-muted-foreground">0{i + 1}</span>
                <h3 className="font-display font-bold text-xl group-hover:text-primary transition-colors">{d}</h3>
                <span className="w-11 h-11 rounded-full border hairline grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition"><ArrowUpRight className="w-5 h-5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <SectionHead kicker="Core practice values" title="What you can" outline="expect." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((p, i) => (
              <div key={p.title} className="rounded-3xl border hairline p-7 hover:border-primary transition-colors">
                <span className="label-mono text-primary">0{i + 1}</span>
                <h3 className="mt-8 font-display font-bold text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24"><CtaBand title="Interested in joining Prem?" text="Send us a note about your discipline and the structures you work on." button="Get in touch" /></div>
    </>
  );
}