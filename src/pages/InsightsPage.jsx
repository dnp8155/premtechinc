import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { ARTICLES } from "@/lib/pagesData";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumb="Insights"
        kicker="Technical insights"
        title="Engineering"
        accent="knowledge."
        text="Technical articles and case studies on temporary works, transmission structures, heavy civil and construction engineering."
        img={IMG.concrete}
        aside={{ label: "Articles", value: "06", sub: "Knowledge base" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24 grid md:grid-cols-2 gap-5">
        {ARTICLES.map((a, i) => (
          <Reveal key={a.n} delay={(i % 2) * 0.07} y={20}>
            <article className="h-full rounded-[2rem] border hairline bg-card p-7 sm:p-9 hover:border-primary transition-colors flex flex-col">
              <div className="flex justify-between label-mono">
                <span className="text-primary">{a.n} / {a.cat}</span>
                <span className="text-muted-foreground">{a.read}</span>
              </div>
              <h3 className="mt-8 font-display font-extrabold text-2xl sm:text-3xl leading-tight tracking-tight">{a.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{a.summary}</p>
              <div className="mt-6 pt-5 border-t hairline mt-auto">
                <span className="label-mono text-primary">Key takeaway</span>
                <p className="mt-2 text-sm leading-relaxed">{a.takeaway}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <CtaBand />
    </>
  );
}