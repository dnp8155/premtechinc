import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";
import { CORE_AREAS } from "@/lib/siteData";

export default function Manifesto() {
  const [activeImg, setActiveImg] = useState(CORE_AREAS[0].img);

  return (
    <section id="manifesto" className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16 sm:py-24 lg:py-32 grid lg:grid-cols-12 gap-12">
      <Reveal className="lg:col-span-5 relative">
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
              <Image src={activeImg} alt="Engineering work on site" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-5 right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary text-primary-foreground grid place-items-center text-center font-display font-bold text-xs sm:text-sm leading-tight shadow-xl shadow-primary/30 ring-4 ring-background/60">
            CANADA<br />& USA ↗
          </div>
        </div>
      </Reveal>
      <div className="lg:col-span-7 flex flex-col justify-center">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-display font-extrabold text-4xl sm:text-6xl text-foreground/15">01</span>
            <span className="label-mono text-primary">Complexity & constructability</span>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-[1.02] tracking-tight">
            Where technical precision, constructability and <span className="text-primary italic font-semibold">reliability matter.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Specialized structural engineering where technical precision, constructability and reliability matter. We support contractors, utilities, engineering teams and project owners through the demanding stages of a project.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {CORE_AREAS.map((a) => (
              <span
                key={a.label}
                className="label-mono border hairline rounded-full px-3 py-2 cursor-pointer hover:border-primary hover:text-primary transition-colors"
                onMouseEnter={() => setActiveImg(a.img)}
              >
                {a.label}
              </span>
            ))}
          </div>
          <Link to="/about" className="mt-10 inline-flex items-center gap-3 rounded-full border hairline px-7 h-14 font-semibold hover:border-primary hover:text-primary transition">
            About Prem <ArrowUpRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}