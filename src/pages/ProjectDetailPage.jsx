import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { PROJECTS_DATA } from "@/lib/projectsData";
import { ArrowLeft, ArrowUpRight, ShieldAlert, CheckCircle2, ChevronLeft, ChevronRight, Camera } from "lucide-react";

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS_DATA.find((p) => p.slug === slug || p.id === slug);

  // If slug doesn't exist, redirect safely to projects index
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const [activePhotoIdx, setActivePhotoIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <SEO
        title={`${project.title} | Case Study | Prem Technology Inc.`}
        description={project.description}
        keywords={`${project.title}, ${project.category}, temporary works engineering, Prem Technology`}
        canonical={`/projects/${project.slug}`}
      />

      <PageHero
        crumb="Projects"
        kicker={project.tag}
        title={project.title.split("—")[0] || project.title}
        accent={project.title.includes("—") ? `— ${project.title.split("—")[1]}` : ""}
        text={project.subtitle || project.description}
        img={project.coverImage}
        aside={{ label: "Status", value: project.statusLabel, sub: "Field-Executed & Verified" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 sm:py-16 lg:py-20">
        
        {/* Navigation Bar back to projects */}
        <Reveal y={10}>
          <div className="flex items-center justify-between gap-4 mb-8 pb-6 border-b hairline">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-muted-foreground hover:text-primary transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back to All Projects
            </Link>

            <span className="label-mono text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>
        </Reveal>

        {/* 2-Column Detailed Layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Interactive Photography Showcase & Thumbnail Strip */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal y={15}>
              <div>
                {/* Main Selected Image */}
                <div
                  onClick={() => setIsLightboxOpen(true)}
                  className="relative aspect-[16/11] rounded-3xl overflow-hidden border hairline bg-black cursor-pointer group shadow-2xl"
                >
                  <img
                    src={project.photos[activePhotoIdx].src}
                    alt={project.photos[activePhotoIdx].title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Top Floating Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider">
                      Photo {activePhotoIdx + 1} of {project.photos.length}
                    </span>
                    <span className="label-mono bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                      Click to Enlarge
                    </span>
                  </div>

                  {/* Prev / Next overlay arrows on main viewer */}
                  {project.photos.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : project.photos.length - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 flex items-center justify-center transition opacity-0 group-hover:opacity-100"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActivePhotoIdx((prev) => (prev < project.photos.length - 1 ? prev + 1 : 0));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 flex items-center justify-center transition opacity-0 group-hover:opacity-100"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                    <p className="font-display font-bold text-base sm:text-lg text-white">
                      {project.photos[activePhotoIdx].title}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/80 mt-1 line-clamp-2">
                      {project.photos[activePhotoIdx].caption}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Strip Grid */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2.5 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-primary" />
                      All Site Photography ({project.photos.length})
                    </span>
                    <span>Tap to view photo</span>
                  </div>

                  <div className={`grid gap-2 ${project.photos.length > 5 ? "grid-cols-5 sm:grid-cols-10" : "grid-cols-5"}`}>
                    {project.photos.map((ph, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhotoIdx(idx)}
                        className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                          activePhotoIdx === idx
                            ? "border-primary ring-2 ring-primary scale-105 z-10 shadow-lg shadow-primary/25"
                            : "border-white/10 opacity-60 hover:opacity-100"
                        }`}
                        title={ph.title}
                      >
                        <img src={ph.src} alt={ph.title} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Complete Technical Specifications & Scope */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal delay={0.1} y={15}>
              <div>
                <span className="label-mono text-primary text-xs uppercase tracking-widest block">
                  Technical Project Brief
                </span>
                
                <h2 className="display-title text-2xl sm:text-3xl lg:text-4xl mt-2 tracking-tight">
                  {project.title}
                </h2>

                <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Specs List matching Client Prompt */}
                <div className="mt-8 pt-6 border-t hairline space-y-4">
                  {project.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div className="text-xs sm:text-sm">
                        <strong className="text-primary font-mono uppercase tracking-wider text-xs block mb-0.5">
                          * {spec.label}:
                        </strong>
                        <span className="text-foreground/90 leading-relaxed">
                          {spec.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Portfolio Disclaimer */}
                <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-black/60 border border-primary/30 text-xs text-muted-foreground leading-relaxed shadow-inner">
                  <div className="flex items-center gap-2 text-primary font-mono font-bold mb-1.5 text-[11px] uppercase tracking-wider">
                    <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
                    DISCLAIMER:
                  </div>
                  {project.disclaimer}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 pt-6 border-t hairline flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground px-7 h-12 text-sm font-semibold transition shadow-lg shadow-primary/20"
                >
                  Discuss Similar Project Scope <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-full border hairline px-5 h-12 text-xs sm:text-sm font-semibold hover:border-primary hover:text-primary transition"
                >
                  View Other Projects
                </Link>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Full-Screen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-6xl bg-[#0d131c] border hairline rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Header */}
            <div className="px-6 py-4 border-b hairline flex items-center justify-between bg-card/60">
              <div className="flex items-center gap-3">
                <span className="label-mono text-primary text-xs uppercase tracking-wider font-bold">
                  {project.tag}
                </span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <h4 className="font-display font-bold text-sm sm:text-base text-foreground line-clamp-1">
                  {project.title}
                </h4>
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-mono text-sm transition shrink-0 ml-3"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[500px]">
              <img
                src={project.photos[activePhotoIdx].src}
                alt={project.photos[activePhotoIdx].title}
                className="max-h-[66vh] w-auto max-w-full object-contain mx-auto transition-all duration-300"
              />

              {/* Prev / Next controls */}
              {project.photos.length > 1 && (
                <>
                  <button
                    onClick={() => setActivePhotoIdx((prev) => (prev > 0 ? prev - 1 : project.photos.length - 1))}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 flex items-center justify-center transition shadow-xl text-lg font-bold"
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setActivePhotoIdx((prev) => (prev < project.photos.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 flex items-center justify-center transition shadow-xl text-lg font-bold"
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/85 to-transparent">
                <div className="flex items-center justify-between text-xs text-primary font-mono mb-1">
                  <span>Photo {activePhotoIdx + 1} of {project.photos.length}</span>
                  <span className="hidden sm:inline">{project.statusLabel}</span>
                </div>
                <p className="font-display font-semibold text-sm sm:text-base text-white">
                  {project.photos[activePhotoIdx].title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {project.photos[activePhotoIdx].caption}
                </p>
              </div>
            </div>

            {/* Bottom filmstrip */}
            <div className="p-3 bg-black/70 border-t hairline overflow-x-auto flex gap-2">
              {project.photos.map((ph, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIdx(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition-all ${
                    activePhotoIdx === idx
                      ? "border-primary ring-2 ring-primary scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={ph.src} alt={ph.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      <CtaBand 
        title="Need certified formwork or structural shoring engineering?" 
        text="Send us your structural drawings, site constraints, and design criteria. Prem Technology Inc. provides P.Eng. stamped shop drawings and calculations across North America."
        button="Discuss Your Project"
      />
    </>
  );
}
