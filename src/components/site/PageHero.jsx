import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

export default function PageHero({ kicker, crumb, title, accent, text, img, aside }) {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-44 pb-10 sm:pb-16 min-h-[420px] sm:min-h-[520px] flex items-end">
      {img && <Image src={img} alt="" className="absolute inset-0 w-full h-full" />}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/80" />
      <div className="relative max-w-[1440px] mx-auto w-full px-6 sm:px-10">
        <div className="label-mono text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link> <span className="mx-2">›</span> {crumb}
        </div>
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-primary" />
          <span className="label-mono text-primary">{kicker}</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold tracking-[-0.04em] leading-[0.95] text-4xl min-[400px]:text-5xl sm:text-7xl lg:text-8xl break-words"
            >
              {title} {accent && <span className="text-primary">{accent}</span>}
            </motion.h1>
            {text && <p className="mt-6 max-w-xl text-foreground/75 text-base sm:text-lg leading-relaxed">{text}</p>}
          </div>
          {aside && (
            <div className="border-l hairline pl-6 lg:shrink-0">
              <div className="label-mono text-muted-foreground">{aside.label}</div>
              <div className="font-display font-extrabold text-3xl mt-1">{aside.value}</div>
              {aside.sub && <div className="label-mono text-muted-foreground mt-1">{aside.sub}</div>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}