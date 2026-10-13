import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/arcvolt/Reveal";
import { Image } from "@/components/ui/image";
import { SERVICE_DETAILS } from "@/lib/pagesData";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = SERVICE_DETAILS[slug];
  if (!s) return <Navigate to="/services" replace />;
  const others = Object.entries(SERVICE_DETAILS).filter(([k]) => k !== slug).slice(0, 3);

  return (
    <>
      <PageHero crumb={s.title} kicker={s.kicker} title={s.headline} text={s.intro} img={s.img} aside={{ label: s.stat.label, value: s.stat.value }} />

      <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden"><Image src={s.img} alt={s.title} className="w-full h-full" /></div>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="label-mono text-primary">What's included</span>
          <h2 className="mt-4 font-display font-extrabold tracking-[-0.03em] leading-[1] text-4xl sm:text-5xl">{s.title}, delivered with control.</h2>
          <ul className="mt-8 divide-y hairline border-y hairline">
            {s.points.map((p) => (
              <li key={p} className="flex items-center gap-4 py-5">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground grid place-items-center"><Check className="w-4 h-4" /></span>
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-card py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
          <span className="label-mono text-primary">Related expertise</span>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {others.map(([k, o]) => (
              <Link key={k} to={`/services/${k}`} className="group rounded-3xl border hairline p-7 hover:border-primary transition">
                <h3 className="font-display font-bold text-2xl group-hover:text-primary transition">{o.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{o.intro}</p>
                <ArrowUpRight className="w-5 h-5 mt-6 group-hover:text-primary transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-24"><CtaBand title={`Need ${s.title.toLowerCase()} expertise?`} /></div>
    </>
  );
}