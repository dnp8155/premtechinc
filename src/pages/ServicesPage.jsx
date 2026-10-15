import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { SERVICE_GROUPS } from "@/lib/pagesData";

const ROWS = [["Scope", "scope"], ["Applications", "applications"], ["Deliverables", "deliverables"], ["Interfaces", "interfaces"]];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        kicker="Engineering services"
        title="Four service groups."
        accent="One technical scope."
        text="Technical capabilities grouped into four client delivery models."
        img={IMG.steel}
        aside={{ label: "Service groups", value: "04", sub: "Core offerings" }}
      />

      <section className="bg-[#eef2f7] text-[#0c1420] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-5">
          {SERVICE_GROUPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.07} y={20}>
              <div className="h-full rounded-[2rem] bg-white/60 border border-black/10 p-7 sm:p-9">
                <span className="label-mono text-[#0a63d1]">Service group {s.n}</span>
                <h3 className="mt-4 font-display font-extrabold text-2xl tracking-tight">{s.title}</h3>
                <dl className="mt-8 border-t border-black/10">
                  {ROWS.map(([label, key]) => (
                    <div key={key} className="grid sm:grid-cols-[130px_1fr] gap-1 sm:gap-4 py-4 border-b border-black/10">
                      <dt className="label-mono text-black/50">{label}</dt>
                      <dd className="text-sm text-[#3a4757] leading-relaxed">{s[key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="pt-24"><CtaBand /></div>
    </>
  );
}