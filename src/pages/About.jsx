import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Eye, Link2, ShieldCheck, Sprout } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/siteData";
import { PRINCIPLES, OPERATING } from "@/lib/pagesData";

const ICONS = [Eye, Link2, ShieldCheck, Sprout];

export default function About() {
  return (
    <>
      <PageHero
        crumb="Company"
        kicker="Company / Since 1998"
        title="Built for"
        accent="complex work."
        text="ARCVOLT brings design, engineering and construction together into one accountable team — creating clarity before a building is being delivered."
        img={IMG.team}
        aside={{ label: "Operating in", value: "11 countries", sub: "Offices across three regions" }}
      />

      <section className="bg-[#f1eee6] text-[#0b0c0a] py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="label-mono text-[#5b6b00]">Why ARCVOLT</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-7xl">
              The contractor and the studio, <span className="text-transparent [-webkit-text-stroke:1px_#0b0c0a80]">in one room.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display font-semibold text-2xl leading-snug">
              Big projects do not fail because teams lack expertise. They fail when expertise arrives in fragments.
            </p>
            <p className="mt-5 text-[#3b3d36] leading-relaxed">
              Our model connects early feasibility, design development, technical coordination, commercial planning and site execution. That means fewer handoffs, faster answers and a decision-led team — not only what is being delivered.
            </p>
            <Link to="/services" className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/20 px-6 h-12 font-semibold hover:bg-black hover:text-white transition">
              Explore capabilities <ArrowUpRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28">
        <SectionHead kicker="Operating principles" title="High standards." outline="Low noise." text="Our culture is built around useful information, visible ownership and disciplined execution." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRINCIPLES.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={p.title} delay={i * 0.07} y={20}>
                <div className="rounded-3xl border hairline bg-card p-7 h-full hover:border-primary transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="mt-10 font-display font-bold text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f1eee6] text-[#0b0c0a] py-28">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="label-mono text-[#5b6b00]">Our operating model</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-7xl">
              One project. <span className="text-transparent [-webkit-text-stroke:1px_#0b0c0a80]">One line of sight.</span>
            </h2>
            <p className="mt-6 text-[#3b3d36] max-w-sm">Five connected stages create a continuous chain from the first question to operating asset.</p>
          </div>
          <div className="lg:col-span-7 border-t border-black/15">
            {OPERATING.map((o) => (
              <div key={o.n} className="grid grid-cols-[60px_160px_1fr] gap-4 py-6 border-b border-black/15 items-center">
                <span className="font-display font-bold text-xl text-[#5b6b00]">{o.n}</span>
                <span className="font-display font-extrabold text-2xl">{o.title}</span>
                <span className="text-sm text-[#3b3d36]">{o.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-40 overflow-hidden">
        <Image src={IMG.glass} alt="" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-black/60" />
        <Reveal className="relative max-w-[1440px] mx-auto px-6 sm:px-10">
          <blockquote className="font-display font-extrabold tracking-[-0.03em] leading-[1.02] text-4xl sm:text-6xl max-w-4xl">
            “The best delivery model is the one that makes complexity feel manageable.”
          </blockquote>
          <span className="label-mono text-primary mt-6 block">ARCVOLT leadership</span>
        </Reveal>
      </section>

      <div className="pt-24"><CtaBand title="Build with one accountable team." /></div>
    </>
  );
}