import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { IMG, STATS } from "@/lib/siteData";

const line = (delay) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <motion.img
        src={IMG.hero}
        alt="Steel and concrete structure at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/60" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:25%_100%]" />

      <div className="relative max-w-[1440px] mx-auto w-full px-6 sm:px-10 pt-40 pb-10">
        <div className="flex items-center gap-3 label-mono text-foreground/90 mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          Future-ready construction / 2026
        </div>
        <h1 className="display-title text-[clamp(3.2rem,11vw,10rem)]">
          <span className="block overflow-hidden"><motion.span className="block" {...line(0.2)}>We build</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block" {...line(0.35)}><span className="text-primary">Beyond</span> today.</motion.span></span>
        </h1>

        <div className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p className="max-w-xl text-foreground/80 text-lg leading-relaxed">
            ARCVOLT combines construction expertise, architecture and digital engineering to deliver high-performance spaces built for people, business and the next generation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 h-14 font-semibold hover:brightness-110 transition">
              Explore projects <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#services" className="inline-flex items-center gap-3 rounded-full border hairline bg-black/30 backdrop-blur px-7 h-14 font-semibold hover:border-primary transition">
              What we build <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-t hairline">
          {STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-4 py-6 px-2 sm:px-6 border-r hairline last:border-r-0">
              <span className="font-display font-extrabold text-4xl tracking-tight">{s.value}</span>
              <span className="label-mono text-foreground/70 leading-snug max-w-[120px]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}