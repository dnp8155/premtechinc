import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";
import { SPECIALIZATIONS, TECH_SERVICES, WHY_TAGS } from "@/lib/siteData";

function ListCard({ title, items, onHover }) {
  return (
    <div className="rounded-2xl border hairline p-6 h-full hover:border-primary transition-colors">
      <h3 className="font-display font-bold text-xl text-primary">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((t) => (
          <li
            key={t.label}
            className="text-sm text-muted-foreground leading-snug border-b hairline pb-3 last:border-0 last:pb-0 cursor-pointer hover:text-foreground transition-colors"
            onMouseEnter={() => onHover(t.img)}
          >
            {t.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Technology() {
  const [activeImg, setActiveImg] = useState(SPECIALIZATIONS[0].img);

  return (
    <section id="why-prem" className="bg-card py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="label-mono text-primary">Why Prem</span>
              <h2 className="display-title text-3xl sm:text-4xl lg:text-5xl break-words mt-4">
                Precision where <span className="text-primary">it counts.</span>
              </h2>
              <p className="mt-8 max-w-lg text-muted-foreground text-lg leading-relaxed">
                A focused practice supporting contractors, utilities, engineering teams and project owners across specialized structures and technical services.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              <Reveal y={20}><ListCard title="Specializations" items={SPECIALIZATIONS} onHover={setActiveImg} /></Reveal>
              <Reveal delay={0.08} y={20}><ListCard title="Technical services" items={TECH_SERVICES} onHover={setActiveImg} /></Reveal>
            </div>
          </div>
          <Reveal>
            <div className="relative aspect-[3/2] rounded-3xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <Image src={activeImg} alt="Engineering and construction" className="w-full h-full object-cover" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
                {WHY_TAGS.map((t) => (
                  <span key={t} className="label-mono bg-black/60 backdrop-blur px-3 py-2 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}