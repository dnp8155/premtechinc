import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { SERVICES } from "@/lib/siteData";

export default function Services() {
  return (
    <section id="services" className="bg-card py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
          <Reveal>
            <span className="label-mono text-primary">What we do</span>
            <h2 className="display-title text-6xl sm:text-8xl mt-4">
              One partner. <span className="text-primary">Every layer.</span>
            </h2>
            <p className="mt-8 max-w-md text-muted-foreground text-lg leading-relaxed">
              From the first feasibility study to final commissioning, we coordinate the disciplines that make complex projects move faster and perform better.
            </p>
          </Reveal>
        </div>
        <div className="lg:col-span-7 border-t hairline">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05} y={20}>
              <a href="#contact" className="group grid grid-cols-[auto_1fr_auto] gap-6 items-center py-8 border-b hairline hover:bg-white/[0.03] hover:px-4 transition-all duration-500">
                <span className="label-mono text-muted-foreground group-hover:text-primary">{s.n}</span>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-md">{s.text}</p>
                </div>
                <span className="w-12 h-12 rounded-full border hairline grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-45 transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}