import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/siteData";

export default function Manifesto() {
  return (
    <section id="manifesto" className="max-w-[1440px] mx-auto px-6 sm:px-10 py-32 grid lg:grid-cols-12 gap-12">
      <Reveal className="lg:col-span-5 relative">
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
          <Image src={IMG.team} alt="Construction engineers reviewing plans on site" className="w-full h-full" />
          <div className="absolute bottom-5 right-5 w-28 h-28 rounded-full bg-primary text-primary-foreground grid place-items-center text-center font-display font-extrabold text-sm leading-tight">
            BUILT<br />WITH<br />INTENT ↗
          </div>
        </div>
      </Reveal>
      <div className="lg:col-span-7 flex flex-col justify-center">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display font-extrabold text-8xl text-foreground/15">01</span>
            <span className="label-mono text-primary">Our manifesto</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl leading-[1.02] tracking-tight">
            Construction is not about filling space. It's about <span className="text-primary italic font-semibold">shaping what comes next.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            We work where precision, performance and architectural ambition meet. Every project is organized around a clear idea: fewer compromises, smarter systems and spaces with lasting value.
          </p>
          <a href="#technology" className="mt-10 inline-flex items-center gap-3 rounded-full border hairline px-7 h-14 font-semibold hover:border-primary hover:text-primary transition">
            Discover our approach <ArrowUpRight className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}