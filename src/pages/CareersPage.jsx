import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { IMG } from "@/lib/siteData";
import { CAREERS, PRINCIPLES } from "@/lib/pagesData";

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumb="Careers"
        kicker="Company / Careers"
        title="Build a career"
        accent="that builds things."
        text="Join engineers, designers and builders who care about clarity, craft and long-term performance."
        img={IMG.team}
        aside={{ label: "Open roles", value: String(CAREERS.length).padStart(2, "0") }}
      />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-24">
        <SectionHead kicker="Open roles" title="Join the" outline="team." text="Roles across site, design and digital delivery." />
        <div className="border-t hairline">
          {CAREERS.map((c, i) => (
            <Reveal key={c.role} delay={i * 0.05} y={20}>
              <Link to="/contact" className="group grid sm:grid-cols-[1fr_200px_160px_auto] gap-3 sm:gap-6 items-center py-7 border-b hairline hover:px-4 hover:bg-white/[0.03] transition-all duration-500">
                <h3 className="font-display font-bold text-2xl group-hover:text-primary transition-colors">{c.role}</h3>
                <span className="label-mono text-muted-foreground">{c.team}</span>
                <span className="label-mono text-muted-foreground">{c.place}</span>
                <span className="w-11 h-11 rounded-full border hairline grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition"><ArrowUpRight className="w-5 h-5" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <SectionHead kicker="How we work" title="What you can" outline="expect." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="rounded-3xl border hairline p-7">
                <h3 className="font-display font-bold text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24"><CtaBand title="Don't see your role?" text="Send us a note about what you do best. We're always meeting exceptional people." button="Get in touch" /></div>
    </>
  );
}