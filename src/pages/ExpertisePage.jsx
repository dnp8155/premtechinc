import React, { useState, useEffect } from "react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import WaterTreatmentShowcase from "@/components/arcvolt/WaterTreatmentShowcase";
import { Image } from "@/components/ui/image";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/siteData";
import { EXPERTISE, DELIVERABLES } from "@/lib/pagesData";

const TABS = [
  { id: "all", label: "All Practice Areas" },
  { id: "bridge-brackets", label: "Bridge Brackets" },
  { id: "transmission", label: "Transmission" },
  { id: "temporary-works", label: "Temporary Works" },
  { id: "heavy-civil", label: "Heavy Civil" },
  { id: "material-resourcing", label: "Material Resourcing" },
  { id: "water-wastewater", label: "Water & Wastewater" },
];

export default function ExpertisePage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    // Check hash or query param to filter exactly to the clicked tab
    const hash = location.hash.replace("#", "");
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get("tab") || hash;

    if (tabParam && TABS.some((t) => t.id === tabParam)) {
      setActiveTab(tabParam);
    } else {
      setActiveTab("all");
    }
  }, [location]);

  const filteredExpertise = activeTab === "all" 
    ? EXPERTISE 
    : EXPERTISE.filter((e) => e.category === activeTab);

  return (
    <>
      <SEO
        title="Areas of Technical Expertise | Prem Technology Inc."
        description="Explore Prem Technology's specialized practice areas: Transmission Towers, Bridge Brackets, Deep Shoring, Cofferdams, Heavy Rigging, LRT Structures, and Water Treatment Plants."
        keywords="structural engineering practice areas, transmission line engineering, deep shoring design, cofferdam engineering, falsework and formwork, crane rigging plans, LRT transit structures"
        canonical="/expertise"
      />
      <PageHero
        crumb="Expertise"
        kicker="Technical expertise"
        title="Engineering"
        accent="Practice Areas."
        text="Specialized engineering across structures, temporary works, transmission and heavy civil infrastructure."
        img={IMG.glass}
        aside={{ label: "Active Practice", value: activeTab === "all" ? "06" : "01", sub: activeTab === "all" ? "All Disciplines" : "Filtered Discipline" }}
      />

      {/* Interactive Tabs Filter - Client Requirement: Each tab shows ONLY relevant part */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 pt-12 sm:pt-16">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 border-b hairline pb-6">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "border hairline bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Photographic Expertise Showcase Grid - Filtered to relevant items only */}
      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-10 sm:py-16">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <span className="label-mono text-primary text-xs uppercase tracking-wider">
              {activeTab === "all" ? "All Disciplines" : TABS.find((t) => t.id === activeTab)?.label}
            </span>
            <h2 className="display-title text-2xl sm:text-3xl lg:text-4xl mt-2">
              {activeTab === "all" ? "Specialized by design." : `Showing only ${TABS.find((t) => t.id === activeTab)?.label} scope.`}
            </h2>
          </div>
          <span className="label-mono text-muted-foreground text-xs">
            {filteredExpertise.length} {filteredExpertise.length === 1 ? "Discipline" : "Disciplines"}
          </span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExpertise.map((e, i) => (
            <Reveal key={`${e.n}-${e.title}`} delay={(i % 3) * 0.05} y={20}>
              <div className="group rounded-3xl border hairline bg-card overflow-hidden hover:border-primary transition-all duration-300 flex flex-col h-full shadow-lg">
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-background">
                  <Image
                    src={e.img}
                    alt={e.title}
                    className="w-full h-full object-cover grayscale contrast-[1.05] brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wider shadow-md">
                      {e.n}
                    </span>
                    {e.tag && (
                      <span className="label-mono bg-black/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-md text-[11px] font-semibold text-white tracking-wider shadow-md">
                        {e.tag}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors">
                      {e.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {e.text}
                    </p>
                  </div>

                  {/* Context Action Button */}
                  <div className="mt-6 pt-4 border-t hairline flex items-center justify-between">
                    <span className="label-mono text-[11px] text-primary">Certified Engineering</span>
                    {e.id === "bridge-brackets" ? (
                      <Link to="/bridge-brackets" className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors">
                        View Brackets <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : e.id === "material-resourcing" ? (
                      <Link to="/procurement" className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors">
                        View Catalogue <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    ) : (
                      <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors">
                        Request Stamped Calc <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Water & Wastewater Infrastructure Showcase Section - Only shown when 'all' or 'water-wastewater' is selected */}
      {(activeTab === "all" || activeTab === "water-wastewater") && (
        <WaterTreatmentShowcase />
      )}

      {/* Deliverables Banner */}
      <section className="bg-[#e5effb] text-[#0c1420] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="label-mono text-[#1565d8]">Core engineering deliverables</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-2xl sm:text-3xl lg:text-4xl">What we put in your hands.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {DELIVERABLES.map((d) => <span key={d} className="rounded-full border border-black/20 bg-white/60 px-4 py-2.5 text-sm font-medium">{d}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      <div className="pt-24"><CtaBand /></div>
    </>
  );
}