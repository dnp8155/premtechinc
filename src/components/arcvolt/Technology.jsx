import React from "react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { Image } from "@/components/ui/image";
import { IMG, TECH, TECH_TAGS, METRICS } from "@/lib/siteData";

export default function Technology() {
  return (
    <section id="technology" className="bg-card py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="label-mono text-primary">Construction intelligence</span>
              <h2 className="display-title text-6xl sm:text-8xl mt-4">
                Smarter systems. <span className="text-primary">Sharper delivery.</span>
              </h2>
              <p className="mt-8 max-w-lg text-muted-foreground text-lg leading-relaxed">
                Digital coordination is embedded in the project, not added at the end. We connect planning, BIM, field data and operational intelligence into one construction workflow.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {TECH.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.08} y={20}>
                  <div className="rounded-2xl border hairline p-6 h-full hover:border-primary transition-colors">
                    <span className="text-3xl text-primary">{t.icon}</span>
                    <h3 className="mt-4 font-display font-bold text-xl">{t.title}</h3>
                    <p className="label-mono text-muted-foreground mt-2 normal-case tracking-wider">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src={IMG.facade} alt="Modern building facade" className="w-full h-full" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {TECH_TAGS.map((t) => (
                  <span key={t} className="label-mono bg-black/60 backdrop-blur px-3 py-2 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 border-t hairline">
          {METRICS.map((m) => (
            <div key={m.label} className="p-6 sm:p-8 border-r hairline last:border-r-0 border-b lg:border-b-0">
              <div className="font-display font-extrabold text-6xl sm:text-8xl tracking-tighter text-primary">
                <CountUp to={m.value} suffix={m.suffix} />
              </div>
              <p className="mt-4 text-sm text-muted-foreground max-w-[220px]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}