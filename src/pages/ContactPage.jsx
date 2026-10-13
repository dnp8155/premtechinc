import React from "react";
import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import SectionHead from "@/components/site/SectionHead";
import Reveal from "@/components/arcvolt/Reveal";
import InquiryForm from "@/components/site/InquiryForm";
import { IMG, CONTACT } from "@/lib/siteData";
import { INQUIRY_STEPS } from "@/lib/pagesData";

const rowCls = "flex items-center gap-4 py-5 border-b border-black/15";
const iconCls = "w-10 h-10 rounded-full bg-black text-primary grid place-items-center shrink-0";

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        kicker="Client intake / Contact"
        title="Discuss your"
        accent="project."
        text="Send us your enquiry together with any drawings, specifications or brief. We respond directly."
        img={IMG.atrium}
        aside={{ label: "Coverage", value: "Canada & USA", sub: "All provinces and US states" }}
      />

      <section className="bg-[#eef2f7] text-[#0c1420] py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="label-mono text-[#0a63d1]">Project enquiry</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-6xl">What are you building?</h2>
            <p className="mt-6 text-[#3a4757] max-w-md">Use the form for new projects, technical reviews or early-stage engineering conversations.</p>
            <div className="mt-10 border-t border-black/15">
              <a href={CONTACT.phoneHref} className={rowCls}>
                <span className={iconCls}><Phone className="w-4 h-4" /></span>
                <div><div className="label-mono text-black/50">Telephone</div><div className="font-semibold">{CONTACT.phone}</div></div>
              </a>
              <a href={CONTACT.emailHref} className={rowCls}>
                <span className={iconCls}><Mail className="w-4 h-4" /></span>
                <div><div className="label-mono text-black/50">Official email</div><div className="font-semibold">{CONTACT.email}</div></div>
              </a>
              <div className={rowCls}>
                <span className={iconCls}><MapPin className="w-4 h-4" /></span>
                <div><div className="label-mono text-black/50">Geographical scope</div><div className="font-semibold">All provinces of Canada and US States</div></div>
              </div>
              <div className={rowCls}>
                <span className={iconCls}><ShieldCheck className="w-4 h-4" /></span>
                <div><div className="label-mono text-black/50">Response standard</div><div className="font-semibold">Technical review performed directly by licensed engineering staff</div></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-white/60 border border-black/10 p-6 sm:p-10">
              <InquiryForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28">
        <SectionHead kicker="Client inquiry workflow" title="Three steps to" outline="engagement." />
        <div className="grid md:grid-cols-3 gap-5">
          {INQUIRY_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} y={20}>
              <div className="rounded-[2rem] border hairline bg-card p-8 h-full hover:border-primary transition-colors">
                <span className="label-mono text-primary">{s.n}</span>
                <h3 className="mt-10 font-display font-extrabold text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}