import React from "react";
import SEO from "@/components/common/SEO";
import Hero from "@/components/arcvolt/Hero";
import Marquee from "@/components/arcvolt/Marquee";
import Manifesto from "@/components/arcvolt/Manifesto";
import Services from "@/components/arcvolt/Services";
import Projects from "@/components/arcvolt/Projects";
import BridgeBracketShowcase from "@/components/arcvolt/BridgeBracketShowcase";
import MaterialProcurementShowcase from "@/components/arcvolt/MaterialProcurementShowcase";
import Technology from "@/components/arcvolt/Technology";
import WaterTreatmentShowcase from "@/components/arcvolt/WaterTreatmentShowcase";
import Process from "@/components/arcvolt/Process";
import Insights from "@/components/arcvolt/Insights";
import CtaBand from "@/components/site/CtaBand";

export default function Home() {
  return (
    <>
      <SEO
        title="Prem Technology Inc. | Structural Engineering Canada & USA"
        description="Prem Technology provides specialized structural engineering for transmission structures, temporary works, and heavy civil infrastructure across Canada & USA."
        keywords="Prem Technology, structural engineering, transmission structures, temporary works, bridge overhang brackets, heavy civil, Canada, USA"
        canonical="/"
      />
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Projects />
      <BridgeBracketShowcase />
      <MaterialProcurementShowcase />
      <WaterTreatmentShowcase />
      <Technology />
      <Process />
      <Insights />
      <div className="pt-24">
        <CtaBand title="Discuss your project." text="Send us your drawings, specifications or brief. An engineering team member will respond directly." button="Discuss Your Project" />
      </div>
    </>
  );
}