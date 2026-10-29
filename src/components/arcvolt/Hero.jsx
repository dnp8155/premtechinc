import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { HERO_SLIDES, COORDS } from "@/lib/siteData";
import gurujiEyesImg from "@/assets/guruji-eyes.jpg";

const line = (delay) => ({
  initial: { y: "110%" },
  animate: { y: 0 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO_SLIDES.length), 5000);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background Hero Slides */}
      <AnimatePresence>
        <motion.img
          key={i}
          src={HERO_SLIDES[i].img}
          alt={HERO_SLIDES[i].label}
          loading={i === 0 ? "eager" : "lazy"}
          fetchpriority={i === 0 ? "high" : "auto"}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 0.55, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      {/* Guruji's Watchful Eyes - Balanced Ambient Background Layer (30% Opacity) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center overflow-hidden"
      >
        <div 
          className="relative w-full max-w-[1100px] aspect-[1153/331] opacity-30 mix-blend-screen scale-110 sm:scale-125 filter blur-[0.4px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        >
          <img
            src={gurujiEyesImg}
            alt=""
            className="w-full h-full object-cover object-center select-none"
          />
        </div>
      </div>

      {/* Subtle vignette and architectural grid overlays allowing main images to shine through */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-background via-background/50 to-background/25" />
      <div className="absolute inset-0 z-[3] opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:25%_100%]" />

      <div className="relative z-[4] max-w-[1440px] mx-auto w-full px-5 sm:px-10 pt-32 sm:pt-40 pb-6 sm:pb-10">
        <div className="flex flex-wrap items-center gap-3 label-mono text-[10px] sm:text-[11px] text-foreground/90 mb-5 sm:mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
          Structural Engineering
          <span className="text-foreground/40">/</span>
          {COORDS}
        </div>
        <h1 className="display-title text-[clamp(2rem,5vw,4rem)]">
          <span className="block overflow-hidden"><motion.span className="block" {...line(0.2)}>Engineering for</motion.span></span>
          <span className="block overflow-hidden"><motion.span className="block" {...line(0.35)}><span className="text-primary">Complex</span> infrastructure.</motion.span></span>
        </h1>

        <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p className="max-w-xl text-foreground/80 text-base sm:text-lg leading-relaxed">
            Specialized structural engineering for transmission structures, temporary works and heavy civil infrastructure across Canada and the USA.
          </p>
          <div className="flex flex-col min-[480px]:flex-row gap-3">
            <Link to="/projects" className="inline-flex items-center justify-center gap-3 rounded-full bg-primary text-primary-foreground px-7 h-12 sm:h-14 font-semibold hover:brightness-110 transition">
              Explore projects <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-3 rounded-full border hairline bg-black/30 backdrop-blur px-7 h-12 sm:h-14 font-semibold hover:border-primary transition">
              Discuss Your Project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 border-t hairline">
          {HERO_SLIDES.map((s, k) => (
            <button key={s.n} onClick={() => setI(k)} className={`flex items-center gap-2 sm:gap-4 py-4 sm:py-6 px-3 sm:px-6 border-r hairline last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r [&:nth-child(-n+2)]:border-b lg:[&:nth-child(-n+2)]:border-b-0 text-left transition-colors ${k === i ? "text-primary" : "text-foreground/60 hover:text-foreground"}`}>
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">{s.n}</span>
              <span className="label-mono leading-snug">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}