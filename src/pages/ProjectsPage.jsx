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
  const [selectedProjectForModal, setSelectedProjectForModal] = useState(null);
  const [modalPhotoIdx, setModalPhotoIdx] = useState(0);

  const openProjectModal = (proj, initialIdx = 0) => {
    setSelectedProjectForModal(proj);
    setModalPhotoIdx(initialIdx);
  };

  const closeProjectModal = () => {
    setSelectedProjectForModal(null);
  };

  return (
    <>
      <SEO
        title="Featured Projects | Structural Steel Shoring & Heavy Civil Formwork | Prem Technology Inc."
        description="Explore Prem Technology Inc.'s certified project portfolio: Industrial steel beam support falsework towers and heavy civil 15' wall formwork with heavy-duty push-pull bracing. P.Eng. stamped engineering."
        keywords="heavy civil wall formwork, industrial building steel beam support, structural shoring project, P.Eng. stamped shop drawings, Prem Technology projects"
        canonical="/projects"
      />
      <PageHero
        crumb="Projects"
        kicker="Portfolio & Field Deliveries"
        title="Engineered Field"
        accent="Deliveries."
        text="Certified temporary works engineering, heavy civil formwork, and high-capacity structural shoring executed across North America."
        img="/projects/wall-formwork-shoring/wall-formwork-4.jpg"
        aside={{ label: "Certified Projects", value: "02", sub: "P.Eng. Stamped & Field-Verified" }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Section Header */}
        <Reveal y={15}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b hairline pb-8">
            <div>
              <span className="label-mono text-primary text-xs uppercase tracking-widest block">
                Engineering Case Studies
              </span>
              <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl mt-2 tracking-tight">
                Selected Works & <span className="text-primary">Deliveries.</span>
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground text-sm sm:text-base leading-relaxed">
              Every project represents strict compliance with North American design codes, stamped engineering packages, and rigorous field execution.
            </p>
          </div>
        </Reveal>

        {/* Clean Architectural 2-Column Grid Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((proj, pIdx) => (
            <Reveal key={proj.id} delay={pIdx * 0.12} y={20}>
              <div className="rounded-3xl border hairline bg-[#0d131c] overflow-hidden hover:border-primary/70 transition-all duration-300 flex flex-col justify-between h-full group hover:shadow-2xl hover:shadow-primary/5">
                
                <div>
                  {/* Hero Cover Image (Architectural ratio with overlay & photo badge) */}
                  <div 
                    onClick={() => openProjectModal(proj, 0)}
                    className="relative aspect-[16/10] overflow-hidden bg-black cursor-pointer group/img"
                  >
                    <img
                      src={proj.photos[0].src}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 group-hover/img:opacity-80 transition-opacity" />

                    {/* Top Status & Badge Bar */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[11px] font-semibold text-white tracking-wider">
                        {proj.photos.length} Site Photos
                      </span>
                      <span className="label-mono bg-primary text-primary-foreground px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider">
                        {proj.statusLabel}
                      </span>
                    </div>

                    {/* Hover Prompt on image */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/95 text-primary-foreground font-semibold text-xs tracking-wide shadow-xl transform scale-95 group-hover/img:scale-100 transition-transform">
                        Explore Gallery ({proj.photos.length} Photos) <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>

                    {/* Bottom Caption on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-white/80 line-clamp-1 pointer-events-none">
                      {proj.photos[0].title}
                    </div>
                  </div>

                  {/* Horizontal Thumbnail Preview Strip (Click directly to open that photo) */}
                  <div className="grid grid-cols-5 gap-1.5 p-3 bg-black/40 border-b hairline">
                    {proj.photos.slice(0, 5).map((ph, tIdx) => (
                      <button
                        key={tIdx}
                        onClick={() => openProjectModal(proj, tIdx)}
                        className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 hover:border-primary transition-all opacity-70 hover:opacity-100 group/thumb"
                        title={ph.title}
                      >
                        <img src={ph.src} alt={ph.title} className="w-full h-full object-cover group-hover/thumb:scale-110 transition-transform duration-300" />
                        {tIdx === 4 && proj.photos.length > 5 && (
                          <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] flex items-center justify-center font-mono text-[11px] font-bold text-primary">
                            +{proj.photos.length - 5}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Content Body */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="label-mono text-primary text-xs uppercase tracking-wider font-bold">
                        {proj.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>

                    {/* Architectural Technical Specs Box */}
                    <div className="mt-6 p-4 rounded-2xl bg-card border hairline space-y-2.5">
                      {proj.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                          <div className="leading-relaxed">
                            <span className="font-mono text-[11px] font-semibold text-primary uppercase mr-1.5">
                              {spec.label}:
                            </span>
                            <span className="text-foreground/90">{spec.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer Box */}
                    <div className="mt-5 p-3.5 rounded-xl bg-black/50 border hairline text-[11px] text-muted-foreground leading-relaxed">
                      <div className="flex items-center gap-1.5 text-primary font-mono font-bold mb-1 uppercase tracking-wider text-[10px]">
                        <ShieldAlert className="w-3 h-3 shrink-0" />
                        Notice:
                      </div>
                      {proj.disclaimer}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t hairline mt-4 pt-4">
                  <button
                    onClick={() => openProjectModal(proj, 0)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition"
                  >
                    View Photos ({proj.photos.length}) <ArrowUpRight className="w-3.5 h-3.5 text-primary" />
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 text-xs font-semibold transition shadow-md shadow-primary/20"
                  >
                    Discuss Scope <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Lightbox / Gallery Modal for Full View */}
      {selectedProjectForModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#0d131c] border hairline rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b hairline flex items-center justify-between bg-card/60">
              <div className="flex items-center gap-3">
                <span className="label-mono text-primary text-xs uppercase tracking-wider font-bold">
                  {selectedProjectForModal.tag}
                </span>
                <span className="text-white/30 hidden sm:inline">•</span>
                <h4 className="font-display font-bold text-sm sm:text-base text-foreground line-clamp-1">
                  {selectedProjectForModal.title}
                </h4>
              </div>

              <button
                onClick={closeProjectModal}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-mono text-sm transition shrink-0 ml-3"
                aria-label="Close Gallery"
              >
                ✕
              </button>
            </div>

            {/* Modal Main Image */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[480px]">
              <img
                src={selectedProjectForModal.photos[modalPhotoIdx].src}
                alt={selectedProjectForModal.photos[modalPhotoIdx].title}
                className="max-h-[62vh] w-auto max-w-full object-contain mx-auto transition-all duration-300"
              />

              {/* Prev / Next controls */}
              {selectedProjectForModal.photos.length > 1 && (
                <>
                  <button
                    onClick={() => setModalPhotoIdx((prev) => (prev > 0 ? prev - 1 : selectedProjectForModal.photos.length - 1))}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 flex items-center justify-center transition shadow-xl text-lg font-bold"
                    aria-label="Previous photo"
                  >
                    ‹
                  </button>
                  <button
                    onClick={() => setModalPhotoIdx((prev) => (prev < selectedProjectForModal.photos.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 hover:bg-primary text-white hover:text-primary-foreground border border-white/20 flex items-center justify-center transition shadow-xl text-lg font-bold"
                    aria-label="Next photo"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-black/95 via-black/85 to-transparent">
                <div className="flex items-center justify-between text-xs text-primary font-mono mb-1">
                  <span>Photo {modalPhotoIdx + 1} of {selectedProjectForModal.photos.length}</span>
                  <span className="hidden sm:inline">{selectedProjectForModal.statusLabel}</span>
                </div>
                <p className="font-display font-semibold text-sm sm:text-base text-white">
                  {selectedProjectForModal.photos[modalPhotoIdx].title}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                  {selectedProjectForModal.photos[modalPhotoIdx].caption}
                </p>
              </div>
            </div>

            {/* Modal Bottom Thumbnail Bar */}
            <div className="p-3 bg-black/70 border-t hairline overflow-x-auto flex gap-2">
              {selectedProjectForModal.photos.map((ph, idx) => (
                <button
                  key={idx}
                  onClick={() => setModalPhotoIdx(idx)}
                  className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border transition-all ${
                    modalPhotoIdx === idx
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
