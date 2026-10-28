import React from "react";
import SEO from "@/components/common/SEO";
import Hero from "@/components/arcvolt/Hero";
import Marquee from "@/components/arcvolt/Marquee";
import Manifesto from "@/components/arcvolt/Manifesto";
import Services from "@/components/arcvolt/Services";
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
      <div className="pt-20">
        <CtaBand 
          title="Discuss your project." 
          text="Send us your drawings, specifications or brief. An engineering team member will respond directly." 
          button="Discuss Your Project" 
        />
      </div>
    </>
  );
}