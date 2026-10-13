import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { ARTICLES } from "@/lib/pagesData";

export default function Insights() {
  return (
    <section id="insights" className="bg-card py-16 sm:py-24 lg:py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6 mb-14">
          <Reveal>
            <span className="label-mono text-primary">Technical insights</span>
            <h2 className="display-title text-4xl min-[400px]:text-5xl sm:text-7xl lg:text-8xl break-words mt-4">
              Ideas that <span className="text-primary">move projects.</span>
            </h2>
          </Reveal>
          <Link to="/insights" className="hidden sm:inline-flex items-center gap-3 rounded-full border hairline px-7 h-14 font-semibold hover:border-primary hover:text-primary transition shrink-0">
            All insights <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="border-t hairline">
          {ARTICLES.slice(0, 3).map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08} y={20}>
              <Link to="/insights" className="group grid sm:grid-cols-[160px_1fr_auto] gap-4 sm:gap-8 items-center py-8 border-b hairline hover:px-4 hover:bg-white/[0.03] transition-all duration-500">
                <span className="label-mono text-muted-foreground">Article {a.n}</span>
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl group-hover:text-primary transition-colors">{a.title}</h3>
                  <span className="label-mono text-muted-foreground mt-2 block">{a.cat} · {a.read}</span>
                </div>
                <span className="w-12 h-12 rounded-full border hairline grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}