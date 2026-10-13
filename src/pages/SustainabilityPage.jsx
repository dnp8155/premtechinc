import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Sustainability from "@/components/arcvolt/Sustainability";
import { IMG } from "@/lib/siteData";

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        crumb="Sustainability"
        kicker="Company / Sustainability"
        title="Better buildings,"
        accent="lighter footprint."
        text="Sustainability is a design and engineering input from day one — not a report written after the fact."
        img={IMG.atrium}
        aside={{ label: "Net-zero target", value: "2030", sub: "Operational portfolio framework" }}
      />
      <Sustainability />
      <div className="pt-24"><CtaBand title="Plan a lower-carbon project with us." /></div>
    </>
  );
}