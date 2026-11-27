import React from "react";
import { Link } from "react-router-dom";
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Building2, 
  HardHat, 
  Compass, 
  FileCheck, 
  FileText,
  Layers,
  Wrench,
  Award
} from "lucide-react";
import SEO from "@/components/common/SEO";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";

export default function FinanFormworksPage() {
  const products = [
    {
      icon: "🏗️",
      title: "Hydraulic Jump Forms & Climbing Core Systems",
      tagline: "Rapid floor-to-floor cycle times for vertical cores",
      desc: "High-efficiency self-climbing and crane-lifted core formwork systems engineered for rapid floor-to-floor cycle times on high-rise towers and infrastructure piers. Crane-independent, electrically & hydraulically driven climbing mechanisms with integrated suspended staircases, trailing decks, and modular 45° corner jacks adaptable to complex high-rise geometries.",
      specs: ["Self-climbing & crane-lifted options", "Single-stroke continuous vertical travel", "Integrated internal & external access stairs", "Engineered for 30+ story core towers"]
    },
    {
      icon: "🛡️",
      title: "Perimeter Protection & Safety Screens",
      tagline: "Full-enclosure weather and fall protection at height",
      desc: "Heavy-duty climbing perimeter screens (Shield Master & Vertifan Climber) providing full-enclosure weather and fall protection at height. Features lightweight extruded aluminum frames clad in double-layered safety netting or perforated steel/fabric cladding, covering 2 to 3 floors with top perimeter working walkways.",
      specs: ["2 to 3 floors perimeter coverage", "Single-stroke motor-driven self-lifting mechanism", "High wind load & inclement weather tolerance", "BSEN 1263 & EN 13374 compliant"]
    },
    {
      icon: "🧱",
      title: "Modular Wall, Column & Slab Formwork Systems",
      tagline: "Heavy-duty civil forming & architectural precision",
      desc: "Versatile, high-load steel and modular aluminum formwork systems (TRADForm, Alum Wall Form & SlabMaster) built for heavy civil infrastructure, retaining walls, culverts, and high-rise floor slabs. Up to 40 concrete casting uses on the same face with hot-dip galvanized steel walers and innovative FST-150 formwork beams.",
      specs: ["High-strength FST-150 composite beams", "Aluminium & steel gang wall systems", "SlabMaster table forms with folding props", "Up to 40 uses on the same panel face"]
    },
    {
      icon: "🛗",
      title: "High-Capacity Construction Hoists & Vertical Access",
      tagline: "Continuous vertical logistics for multi-story builds",
      desc: "Reliable passenger and material hoists (TFL 2000 & Flexideck loading platforms) engineered for continuous vertical logistics on demanding multi-story and infrastructure builds. Removes vertical material movement from tower crane workloads with multi-floor access at all live RC structure levels.",
      specs: ["Crane-independent vertical distribution", "Flexideck 2.5T to 5.0T loading platforms", "Mast rotation system for precise repositioning", "Tested independently to 2× SWL"]
    }
  ];

  const pillars = [
    {
      icon: Building2,
      title: "Competitive Direct-Supply Pricing",
      desc: "Cost-effective equipment packages structured to keep your bids sharp on high-rise, heavy infrastructure, and commercial tenders through direct British factory value."
    },
    {
      icon: HardHat,
      title: "Dedicated North American Sales & Support",
      desc: "Fast quoting, equipment availability coordination, North American logistics planning, and responsive account management from initial tender through delivery."
    },
    {
      icon: Compass,
      title: "Preliminary System Selection & Cycle-Time Layouts",
      desc: "Practical equipment configurations and floor-to-floor cycle time layouts tailored directly to project geometry, crane availability, and pour schedule."
    },
    {
      icon: FileCheck,
      title: "Stamped PE / P.Eng. Engineering",
      desc: "Comprehensive structural design checks, sealed shop drawings, site-specific tie-in detailing, and ongoing field review across Canada and the United States."
    }
  ];

  const caseStudies = [
    {
      title: "One Leadenhall, London",
      partner: "PJ Carey & Multiplex",
      desc: "37-story central concrete core commercial tower delivered using an electrically climbed Jumpform system with complete temporary works design, certification, and site supervision."
    },
    {
      title: "105 Victoria Street, London",
      partner: "Careys Group",
      desc: "16-story high-performance commercial build comprising West and East cores utilizing innovative electrically climbed jumpform technology."
    },
    {
      title: "Marston Box Bridge, HS2 High-Speed Rail",
      partner: "MPB Structures",
      desc: "Temporary works formwork design for the UK's first Box Slide Bridge, constructed off-site and slid into place across a guide raft slab."
    },
    {
      title: "Hirwaun Gas Fired Power Plant, Wales",
      partner: "PJ Hegarty",
      desc: "High-level heavy civil wall formwork systems and temporary works engineering support for critical national energy infrastructure."
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
        title="High-Rise & Infrastructure Formwork & Vertical Access Division"
        category="Finan Formworks Ltd. (UK) × Prem Technology Inc."
        description="Exclusive North American representation across the United States, Canada, and Mexico. Combining British-engineered high-rise and infrastructure formwork systems at competitive direct-supply pricing with local licensed PE / P.Eng. structural engineering backing."
        bgImage="/brand/prem-finan-partnership-banner.jpg"
      />

      {/* Main Announcement & Co-Branding Banner */}
      <section className="py-12 bg-slate-900 text-white border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/15">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-bold uppercase tracking-wide mb-3">
                Official Partnership 🇺🇸 🇨🇦 🇲🇽 🇬🇧
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                Expanding Formwork &amp; Vertical Access Capabilities Across North America
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                Direct access to proven British-engineered systems backed locally by our dedicated sales and licensed PE / P.Eng. engineering team from inquiry through sealed drawings.
              </p>
            </div>

            {/* Brochures & Logo Pill Group */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/docs/finan-capability-in-action-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 inline-flex items-center gap-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 transition-all font-semibold text-xs shadow-sm group"
              >
                <div className="w-6 h-6 rounded bg-red-600 text-white font-black text-[9px] flex items-center justify-center shrink-0">
                  PDF
                </div>
                <span>Systems Brochure</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>

              <a
                href="/docs/finan-formwork-and-edge-protection-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 inline-flex items-center gap-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white text-white hover:text-slate-900 border border-white/20 transition-all font-semibold text-xs shadow-sm group"
              >
                <div className="w-6 h-6 rounded bg-red-600 text-white font-black text-[9px] flex items-center justify-center shrink-0">
                  PDF
                </div>
                <span>Projects &amp; Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
              </a>

              <div className="h-12 flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 rounded-2xl border border-white/15">
                <div className="bg-white rounded-xl px-2.5 py-1 flex items-center h-8">
                  <img src="/brand/prem-technology-logo.png" alt="Prem Technology Inc." className="h-5 w-auto object-contain" />
                </div>
                <span className="text-white/60 font-semibold text-base leading-none">×</span>
                <div className="bg-white rounded-xl px-2.5 py-1 flex items-center h-8">
                  <img src="/brand/finan-formworks-logo.png" alt="Finan Formworks Ltd." className="h-5 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Division Overview & Graphic Section */}
      <section className="py-20 bg-background text-foreground">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-2xl bg-slate-950">
              <img
                src="/brand/prem-finan-partnership-banner.jpg"
                alt="Prem Technology Inc. and Finan Formworks Exclusive North American Representation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Exclusive North American Representation</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight leading-tight">
              British Engineering Precision Meets North American Engineering Stamping
            </h3>

            <p className="text-muted-foreground text-base leading-relaxed">
              <strong>Prem Technology Inc.</strong> is proud to officially represent <strong>Finan Formworks Ltd. (UK)</strong> across the <strong>United States, Canada, and Mexico</strong>.
            </p>

            <p className="text-muted-foreground text-base leading-relaxed">
              Through our dedicated <strong>Formwork &amp; Vertical Access Division</strong>, contractors and developers now have direct access to Finan’s proven British-engineered systems for <strong>high-rise and infrastructure projects at competitive pricing</strong>—backed locally from initial inquiry through stamped structural drawings by our <strong>dedicated sales and licensed PE / P.Eng. engineering team</strong>.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-12 text-sm font-semibold hover:brightness-110 transition shadow-md"
              >
                Discuss Equipment Tender <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://www.finanformworks.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border hairline px-6 h-12 text-sm font-semibold hover:border-primary hover:text-primary transition"
              >
                Visit Finan Formworks (UK) <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Product Lines (Detailed Cards) */}
      <section className="py-20 bg-muted/30 border-y hairline">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12">
            <span className="label-mono text-primary">01 / Systems &amp; Technology</span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
              Core Product Lines
            </h3>
            <p className="text-muted-foreground mt-3 text-base">
              Engineered temporary works systems for high-rise commercial towers, residential cores, and heavy civil infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {products.map((p) => (
              <div key={p.title} className="p-8 rounded-3xl bg-background border hairline shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors">
                <div>
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <span className="text-xs uppercase font-mono font-bold text-primary">{p.tagline}</span>
                  <h4 className="text-2xl font-bold font-display mt-1 mb-3">{p.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.desc}</p>
                </div>

                <div className="pt-4 border-t hairline space-y-2">
                  {p.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Pricing & PE Stamping Pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12">
            <span className="label-mono text-primary">02 / Commercial &amp; Engineering Support</span>
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

      {/* Selected Previous Projects / Proven Track Record */}
      <section className="py-20 bg-slate-900 text-white border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-mono font-bold text-primary">03 / Global Track Record</span>
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2 tracking-tight">
              Proven Project Execution
            </h3>
            <p className="text-slate-400 mt-2 text-base">
              Finan Formworks systems have powered major high-rise towers and national infrastructure projects across the UK and internationally:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudies.map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs text-primary font-mono font-bold uppercase">{c.partner}</span>
                  <h4 className="text-lg font-bold text-white mt-1 mb-2">{c.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{c.desc}</p>
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
              <span className="label-mono text-primary">Contact &amp; Estimating</span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl mt-2 tracking-tight">
                Sales Inquiries &amp; Technical Consultations
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
