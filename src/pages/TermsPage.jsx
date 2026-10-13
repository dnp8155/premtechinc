import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/pagesData";

export default function TermsPage() {
  return <LegalPage crumb="Terms of Engagement" title="Terms of" accent="Engagement." text="Technical disclaimers, intellectual property protection and standard engineering terms of service." sections={LEGAL.terms} />;
}