import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { PROJECT_DETAILS } from "@/lib/pagesData";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = PROJECT_DETAILS[slug];
  if (!p) return <Navigate to="/projects" replace />;
  const facts = [["Location", p.place], ["Area", p.area], ["Sector", p.cat], ["Year", "2026"]];

  return (
    <>
      <PageHero crumb={p.title} kicker={p.meta} title={p.title} img={p.img} text={p.text} aside={{ label: "Area", value: p.area }} />
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y hairline">
          {facts.map(([k, v]) => (
            <div key={k} className="py-8 px-4 border-r hairline last:border-r-0">
              <div className="label-mono text-muted-foreground">{k}</div>
              <div className="font-display font-bold text-2xl mt-2">{v}</div>
            </div>
          ))}
        </div>
        <Reveal className="mt-16 aspect-[16/9] rounded-[2rem] overflow-hidden">
          <Image src={p.img} alt={p.title} className="w-full h-full" />
        </Reveal>
        <Link to="/projects" className="mt-12 inline-flex items-center gap-2 font-semibold hover:text-primary transition"><ArrowLeft className="w-4 h-4" /> All projects</Link>
      </section>
      <CtaBand />
    </>
  );
}