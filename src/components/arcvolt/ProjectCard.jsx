import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

export default function ProjectCard({ p, className = "" }) {
  return (
    <Link to={p.to || "/projects"} className={`group relative block rounded-3xl overflow-hidden ${className}`}>
      <Image src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute top-5 left-5 right-5 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="label-mono bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-primary">{p.coord}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
        <span className="label-mono text-foreground/70">{p.meta}</span>
        <div className="mt-2 flex items-end justify-between gap-4">
          <h3 className="font-display font-extrabold text-xl sm:text-2xl leading-none tracking-tight">{p.title}</h3>
          <span className="label-mono bg-primary text-primary-foreground px-3 py-1.5 rounded-full shrink-0">{p.tag}</span>
        </div>
        {p.text && <p className="mt-3 text-sm text-foreground/75 max-w-lg leading-relaxed">{p.text}</p>}
      </div>
    </Link>
  );
}