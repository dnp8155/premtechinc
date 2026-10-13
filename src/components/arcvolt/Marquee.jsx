import React from "react";
import { MARQUEE } from "@/lib/siteData";

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE, ...MARQUEE, ...MARQUEE];
  return (
    <div className="bg-primary text-primary-foreground overflow-hidden py-5">
      <div className="flex w-max animate-marquee">
        {items.map((t, i) => (
          <span key={i} className="flex items-center font-display font-extrabold uppercase text-2xl tracking-tight px-8">
            {t}
            <span className="ml-16 w-2 h-2 rounded-full bg-primary-foreground" />
          </span>
        ))}
      </div>
    </div>
  );
}