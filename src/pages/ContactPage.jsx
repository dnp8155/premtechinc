import React, { useState } from "react";
import { ArrowRight, Mail, Phone, Check } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import Reveal from "@/components/arcvolt/Reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IMG } from "@/lib/siteData";
import { OFFICES } from "@/lib/pagesData";

const TYPES = ["Commercial", "Residential", "Civic", "Industrial", "Mixed use", "Infrastructure"];
const labelCls = "label-mono text-[#0b0c0a]/70 block mb-2";
const fieldCls = "bg-white border-black/15 text-[#0b0c0a] placeholder:text-black/40";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <>
      <PageHero
        crumb="Contact"
        kicker="New business / Contact"
        title="Start with the"
        accent="real question."
        text="Tell us what you are trying to build, what is making it difficult and where the project stands today."
        img={IMG.atrium}
        aside={{ label: "Response target", value: "1 business day", sub: "New business enquiries" }}
      />

      <section className="bg-[#f1eee6] text-[#0b0c0a] py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-14">
          <Reveal>
            <span className="label-mono text-[#5b6b00]">Project enquiry</span>
            <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-6xl">What are you building?</h2>
            <p className="mt-6 text-[#3b3d36] max-w-md">Use the form for new projects, partnerships or early-stage feasibility conversations.</p>
            <div className="mt-10 border-t border-black/15">
              <a href="mailto:hello@arcvolt.com" className="flex items-center gap-4 py-5 border-b border-black/15">
                <span className="w-10 h-10 rounded-full bg-black text-primary grid place-items-center"><Mail className="w-4 h-4" /></span>
                <div><div className="label-mono text-black/50">Email</div><div className="font-semibold">hello@arcvolt.com</div></div>
              </a>
              <a href="tel:+10000000000" className="flex items-center gap-4 py-5 border-b border-black/15">
                <span className="w-10 h-10 rounded-full bg-black text-primary grid place-items-center"><Phone className="w-4 h-4" /></span>
                <div><div className="label-mono text-black/50">Phone</div><div className="font-semibold">+1 000 000 0000</div></div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-white/60 border border-black/10 p-6 sm:p-10">
              {sent ? (
                <div className="py-16 text-center">
                  <span className="w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center mx-auto"><Check className="w-6 h-6" /></span>
                  <h3 className="mt-6 font-display font-extrabold text-3xl">Enquiry received.</h3>
                  <p className="mt-2 text-[#3b3d36]">We'll respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div><label className={labelCls}>Full name</label><Input required placeholder="Your name" className={fieldCls} /></div>
                    <div><label className={labelCls}>Work email</label><Input required type="email" placeholder="name@company.com" className={fieldCls} /></div>
                    <div><label className={labelCls}>Company</label><Input placeholder="Company name" className={fieldCls} /></div>
                    <div>
                      <label className={labelCls}>Project type</label>
                      <select className={`h-10 w-full rounded-md border px-3 text-sm ${fieldCls}`}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select>
                    </div>
                  </div>
                  <div><label className={labelCls}>Tell us about the project</label><Textarea required rows={5} placeholder="Location, stage, scale, key challenge..." className={fieldCls} /></div>
                  <label className="flex items-start gap-3 text-xs text-[#3b3d36]">
                    <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5" required />
                    I agree to the privacy policy and consent to being contacted about this enquiry.
                  </label>
                  <button type="submit" disabled={!agree} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 h-12 font-semibold hover:brightness-110 transition disabled:opacity-50">
                    Send project enquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-28">
        <span className="label-mono text-primary">Studios</span>
        <h2 className="mt-4 font-display font-extrabold tracking-[-0.04em] leading-[0.98] text-5xl sm:text-7xl">
          Local teams. <span className="text-transparent [-webkit-text-stroke:1px_hsl(var(--foreground)/0.5)]">Shared system.</span>
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {OFFICES.map((o, i) => (
            <Reveal key={o.city} delay={i * 0.08} y={20}>
              <div className="rounded-[2rem] border hairline bg-card p-8 h-full hover:border-primary transition-colors">
                <span className="label-mono text-muted-foreground">{o.n}</span>
                <h3 className="mt-10 font-display font-extrabold text-4xl">{o.city}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.addr}<br />{o.sub}</p>
                <a href="mailto:hello@arcvolt.com" className="mt-8 inline-block label-mono text-primary">New business ↗</a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}