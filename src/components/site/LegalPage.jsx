import React from "react";
import PageHero from "@/components/site/PageHero";
import { IMG } from "@/lib/siteData";

export default function LegalPage({ crumb, title, accent, text, sections }) {
  return (
    <>
      <PageHero crumb={crumb} kicker="Legal & compliance" title={title} accent={accent} text={text} img={IMG.concrete} />
      <section className="max-w-3xl mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24 space-y-10">
        {sections.map((s) => (
          <div key={s.h} className="border-t hairline pt-6">
            <h2 className="font-display font-bold text-2xl">{s.h}</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
          </div>
        ))}
      </section>
    </>
  );
}