import React from "react";
import Hero from "@/components/arcvolt/Hero";
import Marquee from "@/components/arcvolt/Marquee";
import Manifesto from "@/components/arcvolt/Manifesto";
import Services from "@/components/arcvolt/Services";
import Projects from "@/components/arcvolt/Projects";
import Technology from "@/components/arcvolt/Technology";
import Process from "@/components/arcvolt/Process";
import Sustainability from "@/components/arcvolt/Sustainability";
import Testimonials from "@/components/arcvolt/Testimonials";
import Insights from "@/components/arcvolt/Insights";
import CtaBand from "@/components/site/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <Services />
      <Projects />
      <Technology />
      <Process />
      <Sustainability />
      <Testimonials />
      <Insights />
      <div className="pt-24">
        <CtaBand title="Let's build what's next." />
      </div>
    </>
  );
}