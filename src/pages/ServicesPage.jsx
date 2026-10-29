import React from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { SERVICE_GROUPS } from "@/lib/pagesData";

const ROWS = [["Scope", "scope"], ["Applications", "applications"], ["Deliverables", "deliverables"], ["Interfaces", "interfaces"]];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Structural Engineering Services | Transmission, Temporary Works & Heavy Civil"
        description="Comprehensive structural engineering services including Transmission Structure Design, Temporary Works & Shoring, Heavy Civil Structures, and Material Procurement Engineering."
        keywords="structural engineering services, transmission engineering, temporary works engineering, shoring design, falsework calculations, civil engineering Canada, heavy infrastructure engineering USA"
        canonical="/services"
      />
      <PageHero
        crumb="Services"
        kicker="Engineering services"
        title="Comprehensive service groups."
        accent="One technical scope."
        text="Specialized technical capabilities grouped into client-ready delivery models."
        img={IMG.steel}
        aside={{ label: "Service groups", value: "06", sub: "Core offerings" }}
      />

      <section className="bg-[#e5effb] text-[#0c1420] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid md:grid-cols-2 gap-5">
          {SERVICE_GROUPS.map((s, i) => (
            <Reveal key={s.n} delay={(i % 2) * 0.07} y={20}>
              <div className="h-full rounded-[2rem] bg-white/60 border border-black/10 p-7 sm:p-9">
                <span className="label-mono text-[#1565d8]">Service group {s.n}</span>
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