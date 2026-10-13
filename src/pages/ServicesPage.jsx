import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, Compass, HardHat, Cpu, Calculator, PaintBucket } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/siteData";
import { SERVICE_DETAILS } from "@/lib/pagesData";

const ICONS = { construction: HardHat, architecture: Compass, "civil-structural": Building2, "smart-buildings": Cpu, preconstruction: Calculator, "fit-out": PaintBucket };

export default function ServicesPage() {
  const entries = Object.entries(SERVICE_DETAILS);
  return (
    <>
      <PageHero
        crumb="Services"
        kicker="Integrated expertise"
        title="One partner."
        accent="Every layer."
        text="From early strategy to construction and digital handover, our services can work independently or as one integrated delivery system."
        img={IMG.steel}
        aside={{ label: "Core disciplines", value: "06", sub: "Configurable around project needs" }}
      />

      <section className="bg-[#f1eee6] text-[#0b0c0a] py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <h2 className="font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-7xl">
              Expertise without <span className="text-transparent [-webkit-text-stroke:1px_#0b0c0a80]">the silos.</span>
            </h2>
            <p className="max-w-xs text-[#3b3d36]">Select a discipline or combine them into a single project delivery structure.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {entries.map(([slug, s], i) => {
              const Icon = ICONS[slug];
              return (
                <Reveal key={slug} delay={(i % 3) * 0.07} y={20}>
                  <Link to={`/services/${slug}`} className="group block h-full rounded-[2rem] bg-white/60 border border-black/10 p-7 hover:bg-white hover:-translate-y-1 transition-all duration-500">
                    <div className="flex justify-between items-start">
                      <span className="w-12 h-12 rounded-2xl bg-black/5 grid place-items-center"><Icon className="w-5 h-5" /></span>
                      <span className="label-mono text-[#5b6b00]">0{i + 1}</span>
                    </div>
                    <h3 className="mt-14 font-display font-extrabold text-3xl tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-[#3b3d36] leading-relaxed min-h-[60px]">{s.intro}</p>
                    <span className="mt-6 inline-flex items-center gap-2 label-mono group-hover:text-[#5b6b00] transition">Explore service <ArrowUpRight className="w-4 h-4" /></span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-44 overflow-hidden">
        <Image src={IMG.team} alt="" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        <Reveal className="relative max-w-[1440px] mx-auto px-6 sm:px-10">
          <span className="label-mono text-primary">Integrated delivery</span>
          <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-7xl max-w-2xl">One briefing line. One coordinated team.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 h-14 font-semibold hover:brightness-110 transition">
            Talk about your project <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </section>

      <div className="pt-24"><CtaBand title="Have a complex project in mind?" /></div>
    </>
  );
}