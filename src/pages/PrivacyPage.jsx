import React from "react";
import LegalPage from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/pagesData";

export default function PrivacyPage() {
  return <LegalPage crumb="Privacy Policy" title="Privacy" accent="Policy." text="How client project documents, contact details and technical enquiries are handled." sections={LEGAL.privacy} />;
}