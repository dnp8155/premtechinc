import React from "react";
import PageHero from "@/components/site/PageHero";
import CtaBand from "@/components/site/CtaBand";
import Process from "@/components/arcvolt/Process";
import { IMG } from "@/lib/siteData";

export default function ProcessPage() {
  return (
    <>
      <PageHero
        crumb="Process"
        kicker="Company / Our process"
        title="Built around"
        accent="clarity."
        text="A transparent delivery system keeps decisions visible, teams aligned and project risk under control."
        img={IMG.steel}
        aside={{ label: "Delivery stages", value: "05" }}
      />
      <Process />
      <CtaBand title="Ready to define the real brief?" />
    </>
  );
}