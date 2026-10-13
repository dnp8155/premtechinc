import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/siteData";
import { PROJECT_DETAILS } from "@/lib/pagesData";

const FILTERS = ["All", "Commercial", "Civic", "Industrial"];

export default function ProjectsPage() {
  const [f, setF] = useState("All");
  const list = Object.entries(PROJECT_DETAILS).filter(([, p]) => f === "All" || p.cat === f);

  return (
    <>
      <PageHero
        crumb="Projects"
        kicker="Selected work"
        title="Projects with"
        accent="presence."
        text="Commercial, civic, industrial and mixed-use projects where architecture, performance and delivery discipline need to move together."
        img={IMG.glass}
        aside={{ label: "Delivered since 2020", value: "4.8M sq.ft", sub: "Across multiple sectors and regions" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
          <SectionHead kicker="Portfolio" title="Work that performs" outline="after the photo." />
          <div className="flex gap-2 mb-14 flex-wrap">
            {FILTERS.map((x) => (
              <button key={x} onClick={() => setF(x)} className={`rounded-full px-5 h-10 text-sm font-semibold border transition ${f === x ? "bg-primary text-primary-foreground border-primary" : "hairline hover:border-primary"}`}>{x}</button>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-14">
          {list.map(([slug, p], i) => (
            <Reveal key={slug} delay={(i % 2) * 0.1} className={i % 2 ? "md:mt-24" : ""}>
              <Link to={`/projects/${slug}`} className="group block">
                <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative">
                  <Image src={p.img} alt={p.title} className="w-full h-full transition-transform duration-[1200ms] group-hover:scale-105" />
                  <span className="absolute top-4 right-4 w-11 h-11 rounded-full bg-black/60 backdrop-blur grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition"><ArrowUpRight className="w-5 h-5" /></span>
                </div>
                <div className="mt-5 flex justify-between items-end gap-4">
                  <div>
                    <span className="label-mono text-muted-foreground">{p.meta}</span>
                    <h3 className="font-display font-extrabold text-4xl tracking-tight mt-1 group-hover:text-primary transition">{p.title}</h3>
                  </div>
                  <span className="text-sm text-muted-foreground text-right">{p.place}<br />{p.area}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title="Have a project that needs more control?" />
    </>
  );
}