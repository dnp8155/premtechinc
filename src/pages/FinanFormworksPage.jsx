import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  HardHat, 
  Compass, 
  FileCheck,
  FileText,
  MapPin,
  ExternalLink
} from "lucide-react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";

export default function FinanFormworksPage() {
  const products = [
    {
      num: "01",
      title: "Hydraulic Jump Forms & Climbing Core Systems",
      tagline: "Rapid Core Cycle Times · Commercial Towers",
      image: "/brand/finan-site-oneleadenhall.jpg",
      desc: "High-efficiency self-climbing and crane-lifted core formwork systems engineered for rapid floor-to-floor cycle times on high-rise towers and infrastructure piers. Crane-independent, electrically & hydraulically driven climbing mechanisms with integrated suspended staircases, trailing decks, and modular 45° corner jacks adaptable to complex high-rise geometries.",
      specs: [
        "Self-climbing & crane-lifted options",
        "Single-stroke continuous vertical travel",
        "Integrated internal & external access stairs",
        "Engineered for 30+ story core towers"
      ]
    },
    {
      num: "02",
      title: "Perimeter Protection & Safety Screens",
      tagline: "Full-Enclosure Weather & Fall Protection at Height",
      image: "/brand/finan-site-screens.jpg",
      desc: "Heavy-duty climbing perimeter screens (Shield Master & Vertifan Climber) providing full-enclosure weather and fall protection at height. Features lightweight extruded aluminum frames clad in double-layered safety netting or perforated steel/fabric cladding, covering 2 to 3 floors with top perimeter working walkways.",
      specs: [
        "2 to 3 floors perimeter coverage",
        "Single-stroke motor-driven self-lifting mechanism",
        "High wind load & inclement weather tolerance",
        "BSEN 1263 & EN 13374 compliant"
      ]
    },
    {
      num: "03",
      title: "Modular Wall, Column & Slab Formwork Systems",
      tagline: "Heavy-Duty Civil Forming & Architectural Precision",
      image: "/real-images/steel-wall-column-formwork.jfif",
      desc: "Versatile, high-load steel and modular aluminum formwork systems (TRADForm, Alum Wall Form & SlabMaster) built for heavy civil infrastructure, retaining walls, culverts, and high-rise floor slabs. Up to 40 concrete casting uses on the same face with hot-dip galvanized steel walers and innovative FST-150 formwork beams.",
      specs: [
        "High-strength FST-150 composite beams",
        "Aluminium & steel gang wall systems",
        "SlabMaster table forms with folding props",
        "Up to 40 uses on the same panel face"
      ]
    },
    {
      num: "04",
      title: "High-Capacity Construction Hoists & Vertical Access",
      tagline: "Continuous Logistics for Multi-Story Builds",
      image: "/brand/finan-site-hoist.jpg",
      desc: "Reliable passenger and material hoists (TFL 2000 & Flexideck loading platforms) engineered for continuous vertical logistics on demanding multi-story and infrastructure builds. Removes vertical material movement from tower crane workloads with multi-floor access at all live RC structure levels.",
      specs: [
        "Crane-independent vertical distribution",
        "Flexideck 2.5T to 5.0T loading platforms",
        "Mast rotation system for precise repositioning",
        "Tested independently to 2× SWL"
      ]
    }
  ];

  const pillars = [
    {
      icon: Building2,
      title: "Competitive Direct-Supply Pricing",
      desc: "Direct UK manufacturer packages structured to keep general contractor and developer bids sharp on high-rise, heavy infrastructure, and commercial tenders."
    },
    {
      icon: HardHat,
      title: "Dedicated North American Sales & Support",
      desc: "Fast quoting, equipment availability coordination, North American logistics planning, and responsive account management from tender through delivery."
    },
    {
      icon: Compass,
      title: "Preliminary System Selection & Cycle Layouts",
      desc: "Practical equipment configurations and floor-to-floor cycle time layouts tailored directly to project geometry, crane availability, and pour schedules."
    },
    {
      icon: FileCheck,
      title: "Stamped PE / P.Eng. Engineering",
      desc: "Comprehensive structural design checks, sealed shop drawings, site-specific tie-in detailing, and ongoing field review across Canada and the United States."
    }
  ];

  const realProjects = [
    {
      title: "One Leadenhall Commercial Tower",
      location: "City of London, UK",
      partner: "PJ Carey & Multiplex",
      stats: "37 Floors · Central RC Core",
      image: "/brand/finan-site-oneleadenhall.jpg",
      desc: "Complete temporary works design, certification, and shared site supervision of an electrically climbed Jumpform system for a 37-story commercial core in central London."
    },
    {
      title: "105 Victoria Street",
      location: "London, UK",
      partner: "Careys Group",
      stats: "16-Storey Commercial · West & East Cores",
      image: "/brand/finan-site-screens.jpg",
      desc: "Engineered temporary works and jumpform climbing core solution for dual reinforced concrete cores on a high-profile sustainable commercial development."
    },
    {
      title: "Marston Box Bridge (HS2 Rail)",
      location: "Warwickshire, UK",
      partner: "MPB Structures / HS2",
      stats: "National High-Speed Rail Infrastructure",
      image: "/real-images/falsework-bridge.png",
      desc: "Formwork and temporary works engineering for the UK's first Box Slide Bridge, constructed off-site and slid into position over a guide raft slab."
    },
    {
      title: "Hirwaun Gas Fired Power Plant",
      location: "Cynon Valley, Wales",
      partner: "PJ Hegarty",
      stats: "Heavy Energy Infrastructure",
      image: "/real-images/heavy-civil-metro-hero.jpg",
      desc: "High-level temporary works design drawings, heavy civil formwork systems, and ongoing site engineering supervision for national energy advancement."
    }
  ];

  return (
    <>
      <SEO
        title="Formwork & Vertical Access Division | Prem Technology Inc. × Finan Formworks"
        description="Exclusive North American representation for Finan Formworks Ltd. (UK). High-rise jump forms, perimeter safety screens, modular formwork, and construction hoists with stamped PE/P.Eng. engineering support across USA, Canada, and Mexico."
        keywords="Finan Formworks, Prem Technology, jump forms, climbing core systems, perimeter safety screens, modular formwork, construction hoists, temporary works, PE stamping, P.Eng., Canada, USA, Mexico"
        canonical="/finan-formworks"
      />

      {/* Hero Section */}
      <PageHero
        kicker="Finan Formworks Ltd. (UK) × Prem Technology Inc."
        title="Formwork &"
        accent="Vertical Access Division."
        text="Exclusive North American representation across the United States, Canada, and Mexico. Combining British-engineered high-rise and infrastructure formwork systems at competitive direct-supply pricing with local licensed PE / P.Eng. structural engineering backing."
        img="/brand/finan-site-oneleadenhall.jpg"
        aside={{ label: "Representation", value: "US · CA · MX", sub: "British Engineering × Licensed PE/P.Eng." }}
      />

      {/* Real Project Banner & Co-Branding Bar */}
      <section className="py-8 bg-slate-950 text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wider">
                Official Representation 🇺🇸 🇨🇦 🇲🇽 🇬🇧
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                High-Rise Cores · Perimeter Screens · Modular Formwork · Hoists
              </span>
            </div>

            {/* Brochures & Logo Pill Group */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/docs/finan-capability-in-action-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center gap-2 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 transition-all font-semibold text-xs shadow-sm group"
              >
                <div className="w-5 h-5 rounded bg-red-600 text-white font-black text-[9px] flex items-center justify-center shrink-0">
                  PDF
                </div>
                <span>Systems Brochure</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="/docs/finan-formwork-and-edge-protection-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 inline-flex items-center gap-2 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 transition-all font-semibold text-xs shadow-sm group"
              >
                <div className="w-5 h-5 rounded bg-red-600 text-white font-black text-[9px] flex items-center justify-center shrink-0">
                  PDF
                </div>
                <span>Projects &amp; Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>

              {/* Co-Branding Logos Pill (Clean fixed sizes) */}
              <div className="h-11 flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-3 rounded-xl border border-white/15">
                <div className="bg-white rounded-lg px-2.5 py-1 flex items-center">
                  <img src="/brand/prem-technology-logo.png" alt="Prem Technology Inc." className="h-4.5 max-h-[20px] max-w-[90px] w-auto object-contain block" />
                </div>
                <span className="text-white/60 font-semibold text-sm leading-none">×</span>
                <div className="bg-white rounded-lg px-2.5 py-1 flex items-center">
                  <img src="/brand/finan-formworks-logo.png" alt="Finan Formworks Ltd." className="h-4.5 max-h-[20px] max-w-[90px] w-auto object-contain block" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Engineering Division Overview: Clean Editorial Layout */}
      <section className="py-20 lg:py-28 bg-background text-foreground">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
              <span className="label-mono text-primary">North American Representation</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
                Specialist UK Engineering with Stamped PE / P.Eng. Verification.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Prem Technology Inc. proudly represents Finan Formworks Ltd. across the United States, Canada, and Mexico.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                By pairing Finan Formworks’ heavy-duty UK manufacturing and competitive pricing with Prem Technology Inc.’s responsive North American sales and licensed PE / P.Eng. engineering support, we deliver cost-effective, code-compliant temporary works tailored for complex high-rise cores, heavy civil infrastructure, and commercial developments.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-semibold hover:brightness-110 transition shadow-sm"
                >
                  Discuss Your Project <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://www.finanformworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border hairline px-6 h-12 text-sm font-semibold hover:border-primary hover:text-primary transition"
                >
                  Visit Finan UK <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right: Real Site Imagery Collage with Live Stats */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="rounded-3xl overflow-hidden border hairline aspect-[4/5] relative group bg-slate-900">
                  <img
                    src="/brand/finan-site-oneleadenhall.jpg"
                    alt="Finan Formworks Electric Jumpform System on high rise commercial tower"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase font-mono font-bold text-primary">Live High-Rise Construction</span>
                    <h4 className="text-lg font-bold mt-1">One Leadenhall Tower, London</h4>
                    <p className="text-xs text-slate-300 mt-1">37-story core delivered via electrically climbed Jumpform</p>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden border hairline aspect-[4/5] relative group bg-slate-900">
                  <img
                    src="/brand/finan-site-screens.jpg"
                    alt="Finan Formworks Perimeter Safety Screens"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs uppercase font-mono font-bold text-primary">Edge Protection</span>
                    <h4 className="text-lg font-bold mt-1">Shield Master &amp; Vertifan Screens</h4>
                    <p className="text-xs text-slate-300 mt-1">Full enclosure climbing screens for complete weather &amp; fall arrest</p>
                  </div>
                </div>
              </div>

              {/* Verified Engineering Spec Bar */}
              <div className="p-6 rounded-3xl bg-muted/40 border hairline grid sm:grid-cols-3 gap-6 text-center sm:text-left">
                <div>
                  <div className="text-2xl font-extrabold font-display text-primary">Direct</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Supply Pricing</div>
                  <p className="text-xs text-foreground/80 mt-1">Factory-direct UK manufacturing packages</p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-display text-primary">PE / P.Eng.</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Licensed Stamping</div>
                  <p className="text-xs text-foreground/80 mt-1">Sealed drawings &amp; calculations in USA &amp; Canada</p>
                </div>
                <div>
                  <div className="text-2xl font-extrabold font-display text-primary">Turnkey</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-0.5">Cycle Engineering</div>
                  <p className="text-xs text-foreground/80 mt-1">Cycle-time layouts from tender to commissioning</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Systems: Real Construction Image Rows */}
      <section className="py-20 bg-muted/30 border-y hairline">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-16">
            <span className="label-mono text-primary">Core Equipment Lines</span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
              Four Core Formwork &amp; Access Systems
            </h3>
            <p className="text-muted-foreground mt-3 text-base">
              Engineered temporary works systems for high-rise commercial towers, residential cores, and heavy civil infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((item) => (
              <div key={item.title} className="rounded-3xl border hairline bg-background overflow-hidden flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors">
                <div className="aspect-[16/9] w-full relative overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-primary font-mono font-bold text-xs">
                    {item.num} / SYSTEM
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-primary">{item.tagline}</span>
                    <h4 className="text-xl sm:text-2xl font-bold font-display mt-1 mb-3">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                  </div>

                  <div className="pt-4 border-t hairline space-y-2">
                    {item.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Support Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12">
            <span className="label-mono text-primary">Commercial &amp; Technical Backing</span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
              Competitive Pricing, Sales &amp; Full PE / P.Eng. Engineering Support
            </h3>
            <p className="text-muted-foreground mt-3 text-base">
              Every Finan Formworks system supplied through Prem Technology Inc. combines direct manufacturer value with responsive commercial and technical support:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.title} className="p-6 rounded-2xl border hairline bg-muted/20 flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Real Construction Case Studies with Real Project Photos */}
      <section className="py-20 bg-slate-900 text-white border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono font-bold text-primary">Track Record &amp; Proven Projects</span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2 tracking-tight">
              Major High-Rise &amp; Infrastructure Builds
            </h3>
            <p className="text-slate-400 mt-2 text-base">
              Selected projects where Finan Formworks temporary works engineering has proven its cycle-time speed and structural reliability:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realProjects.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden flex flex-col justify-between group hover:border-primary/40 transition-colors">
                <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-primary font-mono mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{p.location}</span>
                    </div>
                    <h4 className="text-base font-bold text-white mb-1">{p.title}</h4>
                    <span className="text-xs font-semibold text-slate-300 block mb-2">{p.stats}</span>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 pt-2 border-t border-white/10">Partner: {p.partner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Inquiries & Consultations Callout */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/15 via-muted/40 to-transparent border hairline">
            <div className="max-w-3xl">
              <span className="label-mono text-primary">Sales &amp; Technical Consultations</span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
                Get Competitive Quotes &amp; Stamped Submittals
              </h3>
              <p className="text-muted-foreground mt-4 text-base sm:text-lg leading-relaxed">
                For any <strong>sales inquiries</strong>, <strong>competitive quotes</strong>, or <strong>technical consultations</strong> on upcoming high-rise, infrastructure, or commercial projects in North America, please reach out to our team:
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:19428804032"
                  className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-primary text-primary-foreground font-bold text-sm sm:text-base hover:brightness-110 transition shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>1-942-880-4032</span>
                </a>

                <a
                  href="mailto:Virag@premtechinc.com"
                  className="inline-flex items-center gap-3 px-5 py-3.5 rounded-full border hairline bg-background text-foreground font-bold text-sm sm:text-base hover:border-primary hover:text-primary transition"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Virag@premtechinc.com</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full border hairline bg-background text-foreground font-semibold text-sm sm:text-base hover:border-primary hover:text-primary transition"
                >
                  <span>Send Project Drawings</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <CtaBand
        title="Planning a high-rise core or infrastructure project?"
        text="Connect with our Formwork & Vertical Access engineering division for cycle-time calculations, preliminary system layouts, and stamped PE submittals."
        button="Consult Our Engineering Team"
      />
    </>
  );
}
