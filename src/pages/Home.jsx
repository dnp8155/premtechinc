import React from "react";
import Header from "@/components/arcvolt/Header";
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
import Footer from "@/components/arcvolt/Footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}