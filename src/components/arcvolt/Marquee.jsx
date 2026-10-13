import React from "react";
import { MARQUEE } from "@/lib/siteData";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className="border-y hairline bg-background overflow-hidden py-6">
      <div className="flex w-max animate-marquee">
        {items.map((t, i) => (
          <span key={i} className="flex items-center font-display font-semibold uppercase text-xl tracking-[0.12em] px-8 text-foreground/70">
            {t}
            <span className="ml-16 w-1.5 h-1.5 rotate-45 bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}