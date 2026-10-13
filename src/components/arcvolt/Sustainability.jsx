import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";
import { IMG, ESG } from "@/lib/siteData";

export default function Sustainability() {
  return (
    <section className="bg-card py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image src={IMG.atrium} alt="Atrium interior with illuminated staircase" className="w-full h-full" />
            <div className="absolute bottom-6 left-6 bg-primary text-primary-foreground rounded-2xl p-5 max-w-[240px]">
              <div className="font-display font-extrabold text-5xl">2030</div>
              <p className="text-sm font-medium mt-1">Target: net-zero operational portfolio framework</p>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal>
            <span className="label-mono text-primary">Better buildings, lighter footprint</span>
            <h2 className="display-title text-5xl sm:text-7xl mt-4">
              Performance is part of the <span className="text-primary">architecture.</span>
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-lg">
              We approach sustainability as a design and engineering input from day one: material efficiency, operational energy, adaptable systems and measurable outcomes.
            </p>
          </Reveal>
          <div className="mt-10 space-y-6">
            {ESG.map((e) => (
              <div key={e.label}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{e.label}</span>
                  <span className="label-mono text-primary">{e.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${e.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
          <Link to="/sustainability" className="mt-10 inline-flex items-center gap-3 rounded-full border hairline px-7 h-14 font-semibold hover:border-primary hover:text-primary transition">
            Read ESG framework <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}