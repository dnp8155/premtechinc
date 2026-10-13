import React from "react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";
import { IMG, SPECIALIZATIONS, TECH_SERVICES, WHY_TAGS } from "@/lib/siteData";

function ListCard({ title, items }) {
  return (
    <div className="rounded-2xl border hairline p-6 h-full hover:border-primary transition-colors">
      <h3 className="font-display font-bold text-xl text-primary">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((t) => <li key={t} className="text-sm text-muted-foreground leading-snug border-b hairline pb-3 last:border-0 last:pb-0">{t}</li>)}
      </ul>
    </div>
  );
}

export default function Technology() {
  return (
    <section id="why-prem" className="bg-card py-16 sm:py-24 lg:py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="label-mono text-primary">Why Prem</span>
              <h2 className="display-title text-4xl min-[400px]:text-5xl sm:text-7xl lg:text-8xl break-words mt-4">
                Precision where <span className="text-primary">it counts.</span>
              </h2>
              <p className="mt-8 max-w-lg text-muted-foreground text-lg leading-relaxed">
                A focused practice supporting contractors, utilities, engineering teams and project owners across specialized structures and technical services.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <Reveal y={20}><ListCard title="Specializations" items={SPECIALIZATIONS} /></Reveal>
              <Reveal delay={0.08} y={20}><ListCard title="Technical services" items={TECH_SERVICES} /></Reveal>
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <Image src={IMG.facade} alt="Structural steel and concrete" className="w-full h-full" />
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {WHY_TAGS.map((t) => (
                  <span key={t} className="label-mono bg-black/60 backdrop-blur px-3 py-2 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}