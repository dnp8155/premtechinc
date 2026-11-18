import React from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight, Camera, CheckCircle2 } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/projectsData";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Projects Portfolio | Field Deliveries | Prem Technology Inc."
        description="Explore Prem Technology Inc.'s engineering portfolio: Industrial steel beam support falsework towers and heavy civil 15' wall formwork. Certified P.Eng. stamped temporary works engineering."
        keywords="heavy civil wall formwork, industrial building steel beam support, structural shoring project, P.Eng. stamped shop drawings, Prem Technology projects"
        canonical="/projects"
      />

      <PageHero
        crumb="Projects"
        kicker="Portfolio & Deliveries"
        title="Engineered Field"
        accent="Deliveries."
        text="A curated selection of certified temporary works, structural falsework, and heavy civil formwork projects executed across North America."
        img="/projects/wall-formwork-shoring/wall-formwork-4.jpg"
        aside={{ label: "Featured Projects", value: "02", sub: "P.Eng. Stamped & Field-Verified" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Editorial Subheader */}
        <Reveal y={15}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b hairline pb-8">
            <div>
              <span className="label-mono text-primary text-xs uppercase tracking-widest block">
                Selected Works
              </span>
              <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl mt-2 tracking-tight">
                Projects <span className="text-primary">Index.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
              Click any project below to inspect the comprehensive project sheet, full high-resolution site photography, and technical scope.
            </p>
          </div>
        </Reveal>

        {/* Minimal Classic Project Cards (1 Image + Clean Heading + Meta + Direct Link) */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((proj, pIdx) => (
            <Reveal key={proj.id} delay={pIdx * 0.12} y={20}>
              <Link
                to={`/projects/${proj.slug}`}
                className="group flex flex-col justify-between rounded-3xl border hairline bg-[#0d131c] overflow-hidden hover:border-primary/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full"
              >
                <div>
                  {/* Single Hero Cover Image with Smooth Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black">
                    <img
                      src={proj.coverImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d131c] via-black/30 to-black/20 group-hover:opacity-60 transition-opacity" />

                    {/* Top Status & Photo Count Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wider flex items-center gap-1.5">
                        <Camera className="w-3 h-3 text-primary" />
                        {proj.photos.length} Photos
                      </span>
                      <span className="label-mono bg-primary text-primary-foreground px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider">
                        {proj.statusLabel}
                      </span>
                    </div>

                    {/* Subtle Hover Reveal Pill */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide shadow-xl">
                        Open Project Sheet <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Body: Classic Clean Typography */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="label-mono text-primary text-xs uppercase tracking-wider font-bold">
                        {proj.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Quick Highlights Strip */}
                    <div className="mt-6 pt-5 border-t hairline space-y-2">
                      <div className="flex items-center gap-2 text-xs text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground font-mono uppercase text-[11px]">System:</span>
                        <span className="truncate">{proj.specs[1]?.value}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-foreground/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-muted-foreground font-mono uppercase text-[11px]">Scope:</span>
                        <span className="truncate">P.Eng. Stamped Engineering & Field Inspection</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Bottom CTA */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 flex items-center justify-between border-t hairline pt-4 mt-2">
                  <span className="text-xs font-mono text-primary font-semibold">
                    View Complete Case Study
                  </span>
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border hairline text-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand 
        title="Need certified formwork or structural shoring engineering?" 
        text="Send us your structural drawings, site constraints, and design criteria. Prem Technology Inc. provides P.Eng. stamped shop drawings and calculations across North America."
        button="Discuss Your Project"
      />
    </>
  );
}
