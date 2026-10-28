import React from "react";
import SEO from "@/components/common/SEO";
import LegalPage from "@/components/site/LegalPage";
import { LEGAL } from "@/lib/pagesData";

export default function PrivacyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy | Prem Technology Inc."
        description="Prem Technology Inc. privacy policy detailing client project document security, data protection, and confidentiality standards."
        canonical="/privacy"
      />
      <LegalPage crumb="Privacy Policy" title="Privacy" accent="Policy." text="How client project documents, contact details and technical enquiries are handled." sections={LEGAL.privacy} />
    </>
  );
}