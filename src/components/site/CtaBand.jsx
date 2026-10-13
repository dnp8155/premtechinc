import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/arcvolt/Reveal";

export default function CtaBand({ title = "Have a complex structure to engineer?", text = "Send us your drawings, specifications or brief. An engineering team member will respond directly.", button = "Discuss Your Project" }) {
  return (
    <section className="max-w-[1440px] mx-auto px-6 sm:px-10 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] border hairline bg-card p-8 sm:p-16">
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-primary" />
              <span className="label-mono text-primary">Start with the brief</span>
            </div>
            <h2 className="font-display font-extrabold tracking-[-0.03em] leading-[1] text-4xl sm:text-6xl max-w-3xl">{title}</h2>
            <p className="mt-5 max-w-lg text-muted-foreground text-lg">{text}</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 h-14 font-semibold hover:brightness-110 transition">
              {button} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}