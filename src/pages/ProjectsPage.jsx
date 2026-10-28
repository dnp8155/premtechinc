import React from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/siteData";

export default function ProjectsPage() {
  return (
    <>
      <SEO
        title="Engineering Projects Portfolio | Prem Technology Inc."
        description="Review Prem Technology's structural engineering project portfolio across Canada and the United States."
        keywords="structural engineering projects, transmission line crossings, LRT guideway engineering, deep excavation shoring, civil engineering portfolio, heavy infrastructure case studies"
        canonical="/projects"
      />
      <PageHero
        crumb="Projects"
        kicker="Engineering Projects"
        title="Featured"
        accent="Infrastructure."
        text="Specialized structural engineering, construction staging, and field-tested technical delivery."
        img={IMG.hero}
        aside={{ label: "Active Project", value: "01", sub: "Signature Delivery" }}
      />

      {/* Clean Single Featured Project Section (Awaiting client's custom project details) */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <Reveal y={20}>
          <div className="rounded-[2.5rem] border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300">
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Project Image */}
              <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[500px] overflow-hidden">
                <Image
                  src="/real-images/substructure-deep-shoring.png"
                  alt="Deep Excavation Shoring & Complex Infrastructure"
                  className="w-full h-full object-cover grayscale contrast-[1.05] brightness-95 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent lg:hidden" />
                <div className="absolute top-6 left-6 z-10 flex gap-2">
                  <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider">
                    Featured Project / 01
                  </span>
                  <span className="label-mono bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                    Active Delivery
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="label-mono text-primary text-xs uppercase tracking-widest block">
                    Heavy Civil & Temporary Works
                  </span>
                  <h2 className="mt-4 font-display font-black text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight leading-tight">
                    Substructure & Deep Urban Shoring Engineering
                  </h2>
                  <p className="mt-6 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Turnkey excavation support system comprising multi-tier tieback anchors, soldier piles with timber lagging, and continuous structural deflection monitoring safeguarding municipal utilities.
                  </p>

                  <div className="mt-8 space-y-4 border-t hairline pt-6">
                    <div>
                      <span className="label-mono text-primary text-xs block">Engineering Scope</span>
                      <p className="mt-1 text-sm text-foreground/90 font-medium">
                        Geotechnical interface analysis, tieback design, waler beam calculations, and stamped PE submittal.
                      </p>
                    </div>
                    <div>
                      <span className="label-mono text-primary text-xs block">Jurisdiction</span>
                      <p className="mt-1 text-sm text-foreground/90 font-medium">
                        Licensed across Canada & All 50 US States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t hairline flex items-center justify-between">
                  <span className="label-mono text-xs text-muted-foreground">Detailed project briefing</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-11 text-xs sm:text-sm font-semibold hover:brightness-110 transition shadow-lg shadow-primary/20"
                  >
                    Discuss Similar Project <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand title="Discuss your project." />
    </>
  );
}