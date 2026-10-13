import React from "react";
import Reveal from "./Reveal";
import { STEPS } from "@/lib/siteData";

export default function Process() {
  return (
    <section id="process" className="max-w-[1440px] mx-auto px-6 sm:px-10 py-32 grid lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
        <Reveal>
          <span className="label-mono text-primary">Our approach</span>
          <h2 className="display-title text-6xl sm:text-8xl mt-4">
            Five steps to <span className="text-primary">buildable.</span>
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground text-lg leading-relaxed">
            From constraints and loads to clear, actionable documentation — a disciplined sequence on every project.
          </p>
        </Reveal>
      </div>
      <div className="lg:col-span-7 space-y-5">
        {STEPS.map((s) => (
          <Reveal key={s.n} delay={0.05}>
            <div className="group rounded-3xl border hairline p-8 sm:p-10 hover:border-primary hover:bg-white/[0.02] transition-all duration-500">
              <span className="label-mono text-primary">{s.n}</span>
              <h3 className="mt-4 font-display font-extrabold text-3xl sm:text-5xl tracking-tight">{s.title}</h3>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl leading-relaxed">{s.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}