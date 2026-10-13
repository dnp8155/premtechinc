import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Insights from "@/components/arcvolt/Insights";
import { IMG } from "@/lib/siteData";

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumb="Insights"
        kicker="Company / Insights"
        title="Ideas that"
        accent="move projects."
        text="Field notes on preconstruction, design, digital delivery and building performance."
        img={IMG.glass}
      />
      <Insights />
      <div className="pt-24"><CtaBand /></div>
    </>
  );
}