import React, { useState } from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldAlert, CheckCircle2 } from "lucide-react";
import { IMG } from "@/lib/siteData";

const PROJECT_PHOTOS = [
  {
    src: "/projects/industrial-steel-support/steel-support-1.jpg",
    title: "High-Bay Multi-Tier Falsework Towers",
    caption: "Full elevation of modular falsework shoring towers supporting high-bay industrial steel roof girders during live modification."
  },
  {
    src: "/projects/industrial-steel-support/steel-support-2.jpg",
    title: "Wide-Span Beam Support Staging",
    caption: "Cross-braced structural steel tower alignment with continuous top grillage and lateral strap tiebacks."
  },
  {
    src: "/projects/industrial-steel-support/steel-support-3.jpg",
    title: "Base Anchorage & Guy-Wire Guying",
    caption: "Heavy-duty tensioned ratchet guy-wires providing lateral overturning stability against construction wind loads."
  },
  {
    src: "/projects/industrial-steel-support/steel-support-4.jpg",
    title: "Upper Chord Load Distribution Header",
    caption: "Precision leveling screw jacks and heavy timber / structural steel spreader beams distributing load directly into primary building columns."
  },
  {
    src: "/projects/industrial-steel-support/steel-support-5.jpg",
    title: "Sequential Column Retrofit Setup",
    caption: "Dual tower falsework arrangement engineered around ongoing floor excavation and building structural upgrades."
  }
];

export default function ProjectsPage() {
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  return (
    <>
      <SEO
        title="Industrial Building Steel Beam Support Project | Prem Technology Inc."
        description="Project showcase: Industrial building steel beam support, modular falsework towers, and beam shoring engineered by Prem Technology Inc."
        keywords="industrial building steel beam support, structural shoring project, high bay falsework, temporary works engineering, beam support calculations"
        canonical="/projects"
      />
      <PageHero
        crumb="Projects"
        kicker="Featured Project Delivery"
        title="Industrial Building"
        accent="Steel Beam Support."
        text="Specialized structural temporary works, high-load falsework shoring towers, and sequential beam support engineering for major industrial facility upgrades."
        img="/projects/industrial-steel-support/steel-support-1.jpg"
        aside={{ label: "Project Status", value: "Executed", sub: "Successfully Completed by PTI" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-14 sm:py-20 lg:py-24">
        <Reveal y={20}>
          <div className="rounded-[2.5rem] border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300">
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Project Image Gallery Display */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-black/40 border-b lg:border-b-0 lg:border-r hairline p-5 sm:p-8">
                {/* Main Selected Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border hairline bg-black">
                  <img
                    src={PROJECT_PHOTOS[activePhotoIdx].src}
                    alt={PROJECT_PHOTOS[activePhotoIdx].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider">
                      Photo {activePhotoIdx + 1} of {PROJECT_PHOTOS.length}
                    </span>
                    <span className="label-mono bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                      Verified Delivery
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    <p className="font-display font-bold text-sm sm:text-base text-white">
                      {PROJECT_PHOTOS[activePhotoIdx].title}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {PROJECT_PHOTOS[activePhotoIdx].caption}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="grid grid-cols-5 gap-2.5 mt-4">
                  {PROJECT_PHOTOS.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhotoIdx(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                        activePhotoIdx === idx
                          ? "ring-2 ring-primary border-primary scale-[1.03] shadow-md shadow-primary/20"
                          : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <span className="label-mono text-primary text-xs uppercase tracking-widest block">
                    Structural Temporary Works & High-Bay Shoring
                  </span>
                  <h2 className="mt-4 font-display font-black text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight leading-tight">
                    Industrial Building Steel Beam Support
                  </h2>
                  <p className="mt-5 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Engineered temporary heavy falsework towers and high-capacity beam support system designed to carry massive overhead roof girder reactions during building foundation excavation and structural column retrofit.
                  </p>

                  <div className="mt-6 space-y-3.5 border-t hairline pt-6 text-sm">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground/90 text-xs sm:text-sm">
                        <strong className="text-foreground">Scope:</strong> Multi-tier falsework towers, screw-jack leveling headers, guy-wire lateral tieback anchors & load distribution analysis.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground/90 text-xs sm:text-sm">
                        <strong className="text-foreground">Safety Standard:</strong> Verified against live construction loads, wind overturning, and progressive foundation excavation sequence.
                      </p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-foreground/90 text-xs sm:text-sm">
                        <strong className="text-foreground">Execution:</strong> Successfully engineered and executed by Prem Technology Inc. (PTI).
                      </p>
                    </div>
                  </div>

                  {/* Portfolio Disclaimer */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-black/60 border border-primary/30 text-xs text-muted-foreground leading-relaxed shadow-inner">
                    <div className="flex items-center gap-2 text-primary font-mono font-bold mb-1.5 text-[11px] uppercase tracking-wider">
                      <ShieldAlert className="w-4 h-4 text-primary" />
                      DISCLAIMER:
                    </div>
                    These photographs are for portfolio and display purposes only, showcasing projects successfully executed by Prem Technology Inc. (PTI). Do not copy, replicate, or implement this structural shoring and beam support setup without certified engineering load calculations and explicit written approval from PTI.
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t hairline flex items-center justify-between">
                  <span className="label-mono text-xs text-muted-foreground">Certified Stamped Packages</span>
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

      <CtaBand 
        title="Need structural shoring or temporary steel support?" 
        text="Send us your building drawings, girder loads, and site constraints. Our team will provide stamped engineering calculation packages."
        button="Discuss Your Project"
      />
    </>
  );
}
