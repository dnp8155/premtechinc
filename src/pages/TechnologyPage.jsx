import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Boxes, Smartphone, Database, Lightbulb, PenTool, Share2, Hammer, Building } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/siteData";
import { DIGITAL, CHAIN } from "@/lib/pagesData";

const CARD_ICONS = [Boxes, Smartphone, Database];
const CHAIN_ICONS = [Lightbulb, PenTool, Share2, Hammer, Building];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        crumb="Technology"
        kicker="Technology / Connected delivery"
        title="The building starts"
        accent="as data."
        text="Digital delivery is not a presentation layer. It is the coordination system that connects design, site decisions and the operating asset."
        img={IMG.facade}
        aside={{ label: "Connected workflow", value: "BIM → Field → Asset" }}
      />

      <section className="bg-[#f1eee6] text-[#0b0c0a] py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <span className="label-mono text-[#5b6b00]">Digital construction</span>
              <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-7xl">
                Resolve complexity <span className="text-transparent [-webkit-text-stroke:1px_#0b0c0a80]">before concrete.</span>
              </h2>
            </div>
            <p className="max-w-xs text-[#3b3d36]">Our digital workflows are designed around decisions: who needs the information, when it matters and what action it should unlock.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {DIGITAL.map((d, i) => {
              const Icon = CARD_ICONS[i];
              return (
                <Reveal key={d.title} delay={i * 0.08} y={20}>
                  <div className="rounded-[2rem] bg-white/60 border border-black/10 p-8 h-full">
                    <Icon className="w-7 h-7" />
                    <h3 className="mt-16 font-display font-extrabold text-2xl">{d.title}</h3>
                    <p className="mt-3 text-sm text-[#3b3d36]">{d.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-y hairline">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <span className="label-mono text-primary">One information chain</span>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
            {CHAIN.map((c, i) => {
              const Icon = CHAIN_ICONS[i];
              return (
                <React.Fragment key={c}>
                  <div className="flex flex-col items-center gap-3">
                    <span className="w-20 h-20 rounded-full border hairline grid place-items-center text-primary hover:bg-primary hover:text-primary-foreground transition"><Icon className="w-7 h-7" /></span>
                    <span className="font-semibold text-sm">{c}</span>
                  </div>
                  {i < CHAIN.length - 1 && <ArrowRight className="w-5 h-5 text-muted-foreground hidden sm:block" />}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f1eee6] text-[#0b0c0a] py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="label-mono text-[#5b6b00]">Digital twin ready</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-6xl">Handover that does not end in a folder.</h2>
            <p className="mt-6 text-[#3b3d36] max-w-md">Asset information is organized around the owner's operating model, creating a cleaner route from commissioning to maintenance and future adaptation.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Structured asset data", "Commissioning records", "Operations-ready handover"].map((t) => <span key={t} className="label-mono border border-black/20 rounded-full px-3 py-1.5">{t}</span>)}
            </div>
            <Link to="/calculator" className="mt-8 inline-flex items-center gap-2 font-semibold underline underline-offset-4">Try the concrete calculator <ArrowUpRight className="w-4 h-4" /></Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
              <Image src={IMG.concrete} alt="Connected building" className="w-full h-full" />
              <span className="absolute bottom-4 left-4 label-mono bg-black/60 text-white backdrop-blur px-3 py-1.5 rounded-full">Model → field → asset</span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-24"><CtaBand title="Want digital delivery to reduce risk, not add software?" /></div>
    </>
  );
}