import React, { useState } from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight, ShieldAlert, CheckCircle2, Building, Layers } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: "project-1",
    tag: "Project 01 · Structural Steel Shoring",
    category: "High-Bay Structural Shoring & Temporary Works",
    title: "Industrial Building Steel Beam Support",
    subtitle: "Modular falsework towers & high-capacity beam support system",
    description: "Engineered temporary heavy falsework towers and high-capacity beam support system designed to carry massive overhead roof girder reactions during building foundation excavation and structural column retrofit.",
    specs: [
      { label: "Structure", value: "High-Bay Industrial Steel Roof Girders & Columns" },
      { label: "System", value: "Multi-tier modular falsework towers with leveling screw jacks & tensioned guy-wire guying" },
      { label: "Safety Standard", value: "Verified against live roof/construction loads, lateral stability (guy-wire bracing), and progressive foundation excavation sequence." },
      { label: "Scope", value: "Temporary works engineering, progressive load distribution analysis & certified shop drawings by Prem Technology Inc." }
    ],
    statusLabel: "Executed by PTI",
    disclaimer: "These photographs are for portfolio and display purposes only, showcasing projects successfully executed by Prem Technology Inc. (PTI). Do not copy, replicate, or implement this structural shoring and beam support setup without certified engineering load calculations and explicit written approval from PTI.",
    photos: [
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
        caption: "Heavy-duty tensioned ratchet guy-wires providing lateral stability and overturning resistance during progressive foundation excavation."
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
    ]
  },
  {
    id: "project-2",
    tag: "Project 02 · Heavy Civil Infrastructure",
    category: "Heavy Civil Infrastructure — Wall Formwork & Shoring",
    title: "Heavy Civil Infrastructure — Wall Formwork & Shoring",
    subtitle: "15' high concrete wall formwork with heavy-duty push-pull braces",
    description: "Full temporary works engineering, formwork design, and P.Eng. stamped shop drawings for 15-foot high cast-in-place concrete walls. Complete with modular aluminum wall gang forms, heavy-duty adjustable push-pull alignment braces, top working platforms, and cold-weather thermal curing protection.",
    specs: [
      { label: "Structure", value: "15' high concrete walls" },
      { label: "System", value: "Aluminum wall formwork supported with heavy-duty push-pull braces" },
      { label: "Scope", value: "Temporary works engineering and P.Eng. stamped shop drawings by Prem Technology Inc." }
    ],
    statusLabel: "P.Eng. Stamped Delivery",
    disclaimer: "These photographs are for portfolio and display purposes only, showcasing projects successfully executed by Prem Technology Inc. (PTI). Do not copy, replicate, or implement this wall formwork and shoring setup without certified P.Eng. engineering load calculations and explicit written approval from PTI.",
    photos: [
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-1.jpg",
        title: "15' Aluminum Wall Formwork Gang with Push-Pull Bracing",
        caption: "Aluminum gang formwork panel assembly supported with heavy-duty telescopic push-pull braces and top scaffold walkway."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-2.jpg",
        title: "Top Scaffolding & Working Access Platform",
        caption: "Integrated safety handrails and timber working bracket platforms facilitating safe concrete placement and inspection."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-3.jpg",
        title: "Heavy-Duty Push-Pull Alignment Braces",
        caption: "Anchored diagonal turnbuckle braces maintaining plumb tolerances and wind overturning resistance."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-4.jpg",
        title: "Concrete Boom Pump & Deep Excavation Placement",
        caption: "Long-reach concrete boom pump delivering mass pour to 15' wall forms inside excavated retention trench."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-5.jpg",
        title: "Active Pouring Operations & Crane Placement",
        caption: "Coordinated heavy civil site operations featuring boom pumper, crawler crane, and formwork access."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-6.jpg",
        title: "Forced-Air Thermal Heating & Cold Weather Curing",
        caption: "Industrial frost heater ducting heat directly into formwork enclosure to ensure optimal concrete curing in low temperatures."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-7.jpg",
        title: "Timber Infill & Formwork Transition Detail",
        caption: "Engineered timber waler and clamp transition bridging aluminum gang panels with column tie-ins."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-8.jpg",
        title: "Dual Turnbuckle Push-Pull Base Anchorage",
        caption: "Concrete slab anchor brackets providing positive mechanical connection for dual telescopic wall braces."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-9.jpg",
        title: "Thermal Curing Tarps & Braced Wall Line",
        caption: "Insulated curing blankets and continuous push-pull brace alignment along the full length of the 15' retaining wall."
      },
      {
        src: "/projects/wall-formwork-shoring/wall-formwork-10.jpg",
        title: "Site Overview of Wall Line & Bracing Array",
        caption: "Full elevated view of the civil wall formwork array, staging area, scaffolding, and thermal protection setup."
      }
    ]
  }
];

export default function ProjectsPage() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [photoIndices, setPhotoIndices] = useState({ 0: 0, 1: 0 });

  const activeProject = PROJECTS_DATA[activeProjectIdx];
  const currentPhotoIdx = photoIndices[activeProjectIdx] || 0;

  const handleSelectPhoto = (projIdx, photoIdx) => {
    setPhotoIndices((prev) => ({ ...prev, [projIdx]: photoIdx }));
  };

  return (
    <>
      <SEO
        title="Featured Projects | Heavy Civil Wall Formwork & Structural Steel Shoring | Prem Technology Inc."
        description="Explore Prem Technology Inc.'s featured project deliveries: Heavy Civil Infrastructure 15' wall formwork & shoring, and Industrial building steel beam support falsework towers. P.Eng. stamped temporary works engineering."
        keywords="heavy civil wall formwork, 15 high concrete wall formwork, push pull braces shoring, industrial building steel beam support, structural shoring project, P.Eng. stamped shop drawings, Prem Technology projects"
        canonical="/projects"
      />
      <PageHero
        crumb="Projects"
        kicker="Featured Project Showcase"
        title="Engineered Field"
        accent="Deliveries."
        text="Real-world temporary works engineering, heavy civil formwork, and high-load structural shoring executed and P.Eng. stamped across North America."
        img="/projects/wall-formwork-shoring/wall-formwork-4.jpg"
        aside={{ label: "Featured Projects", value: "02", sub: "P.Eng. Stamped & Field-Verified" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-12 sm:py-16 lg:py-20">
        {/* Project Selector Tabs */}
        <Reveal y={15}>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b hairline">
            <div>
              <span className="label-mono text-primary text-xs uppercase tracking-widest block">
                Project Portfolio
              </span>
              <h2 className="display-title text-2xl sm:text-3xl lg:text-4xl mt-2">
                Proven Field <span className="text-primary">Execution.</span>
              </h2>
            </div>

            {/* Quick Switcher Buttons */}
            <div className="inline-flex p-1.5 rounded-2xl bg-black/60 border hairline self-start sm:self-auto">
              {PROJECTS_DATA.map((proj, idx) => (
                <button
                  key={proj.id}
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all ${
                    activeProjectIdx === idx
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {idx === 0 ? "Project 1: Steel Beam Support" : "Project 2: Wall Formwork & Shoring"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Selected Project Full Showcase Card */}
        <Reveal key={activeProject.id} y={20}>
          <div className="rounded-[2.5rem] border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300 shadow-2xl">
            <div className="grid lg:grid-cols-12 gap-0">
              {/* Project Image Gallery Display */}
              <div className="lg:col-span-7 flex flex-col justify-between bg-black/50 border-b lg:border-b-0 lg:border-r hairline p-5 sm:p-8">
                {/* Main Selected Image */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border hairline bg-black shadow-inner">
                  <img
                    src={activeProject.photos[currentPhotoIdx].src}
                    alt={activeProject.photos[currentPhotoIdx].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white tracking-wider">
                      Photo {currentPhotoIdx + 1} of {activeProject.photos.length}
                    </span>
                    <span className="label-mono bg-primary text-primary-foreground px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider">
                      {activeProject.statusLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/75 to-transparent">
                    <p className="font-display font-bold text-base sm:text-lg text-white">
                      {activeProject.photos[currentPhotoIdx].title}
                    </p>
                    <p className="text-xs sm:text-sm text-foreground/80 mt-1 line-clamp-2">
                      {activeProject.photos[currentPhotoIdx].caption}
                    </p>
                  </div>
                </div>

                {/* Thumbnail Strip */}
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2 font-mono">
                    <span>Click photo to enlarge preview</span>
                    <span>{activeProject.photos.length} High-Res Site Photos</span>
                  </div>
                  <div className={`grid gap-2 ${activeProject.photos.length > 5 ? "grid-cols-5 sm:grid-cols-10" : "grid-cols-5"}`}>
                    {activeProject.photos.map((photo, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelectPhoto(activeProjectIdx, idx)}
                        className={`relative aspect-square rounded-xl overflow-hidden border transition-all ${
                          currentPhotoIdx === idx
                            ? "ring-2 ring-primary border-primary scale-[1.05] shadow-lg shadow-primary/25 z-10"
                            : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/30"
                        }`}
                        title={photo.title}
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
              </div>

              {/* Project Details */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 font-mono text-[11px] font-bold tracking-wider uppercase">
                      {activeProject.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-foreground tracking-tight leading-tight">
                    {activeProject.title}
                  </h3>

                  <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {activeProject.description}
                  </p>

                  {/* Bullet Specs matching client prompt */}
                  <div className="mt-6 space-y-3.5 border-t hairline pt-6">
                    {activeProject.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                          <strong className="text-primary font-mono uppercase tracking-wider text-xs mr-1.5">
                            * {spec.label}:
                          </strong>
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Portfolio Disclaimer */}
                  <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-black/60 border border-primary/30 text-xs text-muted-foreground leading-relaxed shadow-inner">
                    <div className="flex items-center gap-2 text-primary font-mono font-bold mb-1.5 text-[11px] uppercase tracking-wider">
                      <ShieldAlert className="w-4 h-4 text-primary shrink-0" />
                      DISCLAIMER:
                    </div>
                    {activeProject.disclaimer}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <span className="label-mono text-xs text-muted-foreground">Certified Stamped Packages</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-11 text-xs sm:text-sm font-semibold hover:brightness-110 transition shadow-lg shadow-primary/20 shrink-0"
                  >
                    Discuss Similar Project <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Secondary View: Show Both Projects as Cards Below for Quick Browsing */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl">
              All Executed Projects ({PROJECTS_DATA.length})
            </h3>
            <span className="label-mono text-xs text-primary">Browse All</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS_DATA.map((proj, pIdx) => (
              <div
                key={proj.id}
                onClick={() => {
                  setActiveProjectIdx(pIdx);
                  window.scrollTo({ top: 350, behavior: "smooth" });
                }}
                className={`cursor-pointer rounded-3xl border hairline bg-card p-6 sm:p-7 hover:border-primary transition-all duration-300 flex flex-col justify-between group ${
                  activeProjectIdx === pIdx ? "border-primary ring-1 ring-primary/40 bg-primary/[0.02]" : ""
                }`}
              >
                <div>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border hairline bg-black mb-5">
                    <img
                      src={proj.photos[0].src}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white">
                        {proj.photos.length} Photos
                      </span>
                    </div>
                  </div>

                  <span className="label-mono text-primary text-xs uppercase tracking-wider">
                    {proj.tag}
                  </span>
                  <h4 className="font-display font-bold text-xl text-foreground mt-1 group-hover:text-primary transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 line-clamp-2">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t hairline flex items-center justify-between">
                  <span className="text-xs font-mono text-primary">{proj.statusLabel}</span>
                  <span className="text-xs font-semibold text-foreground flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View Project Gallery <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand 
        title="Need wall formwork or structural shoring engineering?" 
        text="Send us your civil project drawings, wall heights, and concrete pour rates. Our team provides P.Eng. stamped shop drawings and calculation submittals across North America."
        button="Discuss Your Project"
      />
    </>
  );
}
