import React from "react";
import Reveal from "@/components/arcvolt/Reveal";

export default function SectionHead({ kicker, title, outline, text }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
      <Reveal>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-primary" />
          <span className="label-mono text-primary">{kicker}</span>
        </div>
        <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-4xl sm:text-6xl lg:text-7xl max-w-3xl">
          {title}{" "}
          {outline && <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.5)]">{outline}</span>}
        </h2>
      </Reveal>
      {text && <Reveal delay={0.1}><p className="max-w-sm text-muted-foreground text-lg leading-relaxed">{text}</p></Reveal>}
    </div>
  );
}