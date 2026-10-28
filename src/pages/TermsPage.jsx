import React from "react";
import SEO from "@/components/common/SEO";
import LegalPage from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/pagesData";

export default function TermsPage() {
  return (
    <>
      <SEO
        title="Terms of Engagement | Prem Technology Inc."
        description="Prem Technology Inc. terms of engagement, technical disclaimers, intellectual property protection, and engineering service terms."
        canonical="/terms"
      />
      <LegalPage crumb="Terms of Engagement" title="Terms of" accent="Engagement." text="Technical disclaimers, intellectual property protection and standard engineering terms of service." sections={LEGAL.terms} />
    </>
  );
}