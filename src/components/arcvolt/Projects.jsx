import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "@/lib/siteData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-6 sm:px-10 py-32">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
        <Reveal>
          <span className="label-mono text-primary">Selected work / 2024–2026</span>
          <h2 className="display-title text-6xl sm:text-8xl mt-4">
            Projects with <span className="text-primary">presence.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-muted-foreground text-lg leading-relaxed">
            A portfolio built across workplace, residential, infrastructure and high-performance industrial environments.
          </p>
        </Reveal>
      </div>
      <div className="grid lg:grid-cols-12 gap-5">
        <Reveal className="lg:col-span-7"><ProjectCard p={PROJECTS[0]} className="h-[480px] lg:h-[760px]" /></Reveal>
        <div className="lg:col-span-5 grid gap-5">
          <Reveal delay={0.1}><ProjectCard p={PROJECTS[1]} className="h-[400px] lg:h-[370px]" /></Reveal>
          <Reveal delay={0.2}><ProjectCard p={PROJECTS[2]} className="h-[400px] lg:h-[370px]" /></Reveal>
        </div>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t hairline pt-8">
        <span className="label-mono text-muted-foreground">12 active sites · 7 major handovers scheduled this year</span>
        <Link to="/projects" className="inline-flex items-center gap-3 rounded-full border hairline px-7 h-14 font-semibold hover:border-primary hover:text-primary transition">
          View all projects <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}