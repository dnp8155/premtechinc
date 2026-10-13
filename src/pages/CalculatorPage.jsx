import React, { useState } from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import { Input } from "@/components/ui/input";
import { IMG } from "@/lib/siteData";

const SHAPES = ["Slab", "Column", "Footing"];

export default function CalculatorPage() {
  const [shape, setShape] = useState("Slab");
  const [l, setL] = useState(10);
  const [w, setW] = useState(5);
  const [t, setT] = useState(0.2);
  const [waste, setWaste] = useState(5);

  const base = shape === "Column" ? Math.PI * Math.pow(w / 2, 2) * l : l * w * t;
  const volume = base * (1 + waste / 100);
  const bags = Math.ceil(volume * 1000 / 14.5 * 0.5);

  const num = (set) => (e) => set(parseFloat(e.target.value) || 0);

  return (
    <>
      <PageHero
        crumb="Concrete calculator"
        kicker="Technology / Calculator"
        title="Concrete"
        accent="calculator."
        text="A quick estimate for slab, column and footing volumes, including a wastage allowance."
        img={IMG.concrete}
      />
      <section className="max-w-[1100px] mx-auto px-6 sm:px-10 py-24 grid lg:grid-cols-2 gap-10">
        <div className="rounded-[2rem] border hairline bg-card p-8 space-y-6">
          <div className="flex gap-2">
            {SHAPES.map((s) => (
              <button key={s} onClick={() => setShape(s)} className={`rounded-full px-5 h-10 text-sm font-semibold border transition ${shape === s ? "bg-primary text-primary-foreground border-primary" : "hairline"}`}>{s}</button>
            ))}
          </div>
          <div><label className="label-mono text-muted-foreground block mb-2">{shape === "Column" ? "Height (m)" : "Length (m)"}</label><Input type="number" value={l} onChange={num(setL)} /></div>
          <div><label className="label-mono text-muted-foreground block mb-2">{shape === "Column" ? "Diameter (m)" : "Width (m)"}</label><Input type="number" value={w} onChange={num(setW)} /></div>
          {shape !== "Column" && <div><label className="label-mono text-muted-foreground block mb-2">Thickness (m)</label><Input type="number" step="0.05" value={t} onChange={num(setT)} /></div>}
          <div><label className="label-mono text-muted-foreground block mb-2">Wastage (%)</label><Input type="number" value={waste} onChange={num(setWaste)} /></div>
        </div>
        <div className="rounded-[2rem] bg-primary text-primary-foreground p-10 flex flex-col justify-between">
          <span className="label-mono">Estimated volume</span>
          <div>
            <div className="font-display font-extrabold text-7xl sm:text-8xl tracking-tighter">{volume.toFixed(2)}<span className="text-3xl"> m³</span></div>
            <p className="mt-4 font-medium">≈ {bags.toLocaleString()} bags of cement (indicative)</p>
          </div>
          <p className="text-sm opacity-70">Indicative only. Final quantities should be confirmed by your engineer.</p>
        </div>
      </section>
      <CtaBand title="Need a precise quantity take-off?" />
    </>
  );
}