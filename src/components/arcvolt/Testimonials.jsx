import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/siteData";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const go = (d) => setI((i + d + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-10 py-32">
      <span className="label-mono text-primary">Client perspective</span>
      <h2 className="display-title text-6xl sm:text-8xl mt-4">
        Confidence you can <span className="text-primary">feel in the process.</span>
      </h2>
      <div className="mt-16 grid lg:grid-cols-12 gap-8 items-start border-t hairline pt-12">
        <div className="lg:col-span-2 label-mono text-muted-foreground">
          <span className="text-foreground text-2xl font-display font-extrabold">0{i + 1}</span> / 0{TESTIMONIALS.length}
        </div>
        <div className="lg:col-span-8 min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="font-display font-semibold text-3xl sm:text-5xl leading-[1.1] tracking-tight">
                “{t.quote}”
              </blockquote>
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-muted-foreground text-sm">{t.role}</div>
                </div>
                <div className="flex gap-1 text-primary">
                  {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-current" />)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="lg:col-span-2 flex gap-3 lg:justify-end">
          <button onClick={() => go(-1)} aria-label="Previous" className="w-14 h-14 rounded-full border hairline grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><ArrowLeft className="w-5 h-5" /></button>
          <button onClick={() => go(1)} aria-label="Next" className="w-14 h-14 rounded-full border hairline grid place-items-center hover:bg-primary hover:text-primary-foreground transition"><ArrowRight className="w-5 h-5" /></button>
        </div>
      </div>
    </section>
  );
}