import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { APPLICATIONS } from "@/lib/pagesData";

const ROWS = [["Challenge", "challenge"], ["Scope", "scope"], ["Where it applies", "where"]];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Projects"
        kicker="Projects & applications"
        title="Six application"
        accent="categories."
        text="Our portfolio is organized by engineering challenge, scope and technical application."
        img={IMG.hero}
        aside={{ label: "Applications", value: "06", sub: "Sector portfolio" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24 space-y-5">
        {APPLICATIONS.map((a) => (
          <Reveal key={a.n} y={20}>
            <div className="rounded-[2rem] border hairline bg-card p-7 sm:p-10 hover:border-primary transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl tracking-tight"><span className="text-primary mr-4">{a.n}</span>{a.title}</h3>
                <span className="label-mono text-muted-foreground">{a.sector}</span>
              </div>
              <dl className="mt-8 grid lg:grid-cols-3 gap-6">
                {ROWS.map(([label, key]) => (
                  <div key={key} className="border-t hairline pt-4">
                    <dt className="label-mono text-primary">{label}</dt>
                    <dd className="mt-2 text-sm text-muted-foreground leading-relaxed">{a[key]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </section>

      <CtaBand title="Discuss your project." />
    </>
  );
}