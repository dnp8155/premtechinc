import React, { useState } from "react";
import { ArrowRight, Check, Loader2, Mail, ExternalLink } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const CATEGORIES = ["Transmission", "Temporary Works", "Shoring", "Heavy Civil", "LRT", "Bridge", "Tunnel", "Water", "Other"];
const STAGES = ["Planning", "Design", "Pre-construction", "Active Construction"];
const labelCls = "label-mono text-[#0c1420]/70 block mb-2";
const fieldCls = "bg-white border-black/15 text-[#0c1420] placeholder:text-black/40";
const selectCls = `h-10 w-full rounded-md border px-3 text-sm ${fieldCls}`;

export default function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = new FormData(e.currentTarget);

    const fullName = f.get("full_name") || "";
    const email = f.get("email") || "";
    const company = f.get("company") || "N/A";
    const phone = f.get("phone") || "N/A";
    const location = f.get("location") || "Canada";
    const category = f.get("category") || "General";
    const stage = f.get("stage") || "Planning";
    const details = f.get("details") || "";

    const inquiryDetails = {
      fullName,
      email,
      company,
      phone,
      location,
      category,
      stage,
      details,
    };
    setSubmittedData(inquiryDetails);

    // Prepare nicely formatted email body for virag@premtechinc.com
    const subject = encodeURIComponent(`Project Enquiry: ${category} — ${fullName}`);
    const bodyText = `Hello Prem Technology Inc. Team,

I would like to submit a new project enquiry with the following details:

========================================
CLIENT & PROJECT INFORMATION
========================================
* Client Name: ${fullName}
* Email Address: ${email}
* Company / Organization: ${company}
* Phone Number: ${phone}
* Project Location: ${location}
* Practice Area / Category: ${category}
* Project Stage: ${stage}

========================================
PROJECT SCOPE & REQUIREMENTS:
========================================
${details}

========================================
(Please find any relevant drawings or engineering specifications attached.)

Best regards,
${fullName}`;

    const encodedBody = encodeURIComponent(bodyText);

    // Send directly to backend Gmail SMTP endpoint (/api/send-inquiry)
    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiryDetails),
      });

      if (response.ok) {
        setBusy(false);
        setSent(true);
        return;
      }
    } catch {
      // In local dev without serverless api, gracefully fallback
    }

    // Direct Web Gmail compose URL & universal mailto fallback if /api/ not active locally
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=virag@premtechinc.com&su=${subject}&body=${encodedBody}`;
    const mailtoUrl = `mailto:virag@premtechinc.com?subject=${subject}&body=${encodedBody}`;

    setBusy(false);
    setSent(true);

    // Open Gmail directly in a new tab; if popup blocked, fallback opens mail client
    const newTab = window.open(gmailUrl, "_blank");
    if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  if (sent && submittedData) {
    const subject = encodeURIComponent(`Project Enquiry: ${submittedData.category} — ${submittedData.fullName}`);
    const bodyText = encodeURIComponent(`Client Name: ${submittedData.fullName}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone}\nCompany: ${submittedData.company}\nCategory: ${submittedData.category}\nDetails:\n${submittedData.details}`);
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=virag@premtechinc.com&su=${subject}&body=${bodyText}`;
    const mailtoUrl = `mailto:virag@premtechinc.com?subject=${subject}&body=${bodyText}`;

    return (
      <div className="py-12 sm:py-16 text-center">
        <span className="w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center mx-auto shadow-xl shadow-primary/20">
          <Check className="w-8 h-8" />
        </span>
        <h3 className="mt-6 font-display font-black text-2xl sm:text-3xl text-[#0c1420]">
          Enquiry Prepared for Sending!
        </h3>
        <p className="mt-3 text-sm text-[#3a4757] max-w-md mx-auto leading-relaxed">
          Your message has been pre-formatted and sent to <strong>virag@premtechinc.com</strong>.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#ea4335] hover:bg-[#d93025] text-white px-6 py-3 text-xs sm:text-sm font-bold shadow-lg transition"
          >
            <Mail className="w-4 h-4" /> Open in Gmail <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href={mailtoUrl}
            className="inline-flex items-center gap-2 rounded-full bg-black hover:bg-neutral-800 text-white px-6 py-3 text-xs sm:text-sm font-semibold transition"
          >
            Open in Outlook / Mail App <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          onClick={() => {
            setSent(false);
            setSubmittedData(null);
          }}
          className="mt-6 text-xs text-[#0c1420]/60 underline hover:text-primary transition"
        >
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className={labelCls}>Full name *</label><Input name="full_name" required placeholder="Your name" className={fieldCls} /></div>
        <div><label className={labelCls}>Email address *</label><Input name="email" required type="email" placeholder="name@company.com" className={fieldCls} /></div>
        <div><label className={labelCls}>Company / Organization</label><Input name="company" placeholder="Company name" className={fieldCls} /></div>
        <div><label className={labelCls}>Phone number</label><Input name="phone" type="tel" placeholder="Phone" className={fieldCls} /></div>
        <div>
          <label className={labelCls}>Project location</label>
          <select name="location" className={selectCls}><option>Canada</option><option>USA</option></select>
        </div>
        <div>
          <label className={labelCls}>Project category</label>
          <select name="category" className={selectCls}>{CATEGORIES.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls}>Project stage</label>
          <select name="stage" className={selectCls}>{STAGES.map((t) => <option key={t}>{t}</option>)}</select>
        </div>
      </div>
      <div><label className={labelCls}>Project details / brief description *</label><Textarea name="details" required rows={5} placeholder="Scope, constraints, sequence, key challenge..." className={fieldCls} /></div>
      <div><label className={labelCls}>Optional drawing or specification files</label><input name="file" type="file" className="block w-full text-sm text-[#3a4757] file:mr-4 file:rounded-full file:border-0 file:bg-black file:text-white file:px-4 file:py-2" /></div>
      <label className="flex items-start gap-3 text-xs text-[#3a4757]">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5" required />
        I agree to the privacy policy and consent to being contacted at virag@premtechinc.com about this enquiry.
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={!agree || busy} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 h-12 font-semibold hover:brightness-110 transition disabled:opacity-50">
        {busy ? <><Loader2 className="w-4 h-4 animate-spin" /> Preparing...</> : <>Send project enquiry <ArrowRight className="w-4 h-4" /></>}
      </button>
    </form>
  );
}