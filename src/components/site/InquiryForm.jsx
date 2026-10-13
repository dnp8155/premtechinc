import React, { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
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

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = new FormData(e.currentTarget);
    try {
      const file = f.get("file");
      let attachment_uri;
      if (file && file.size > 0) {
        const res = await base44.integrations.Core.UploadPrivateFile({ file });
        attachment_uri = res.file_uri;
      }
      await base44.entities.Inquiry.create({
        full_name: f.get("full_name"),
        email: f.get("email"),
        company: f.get("company") || undefined,
        phone: f.get("phone") || undefined,
        location: f.get("location"),
        category: f.get("category"),
        stage: f.get("stage"),
        details: f.get("details"),
        attachment_uri,
      });
      setSent(true);
    } catch (err) {
      setError("Something went wrong sending your enquiry. Please try again or email us directly.");
    }
    setBusy(false);
  };

  if (sent) {
    return (
      <div className="py-16 text-center">
        <span className="w-14 h-14 rounded-full bg-primary text-primary-foreground grid place-items-center mx-auto"><Check className="w-6 h-6" /></span>
        <h3 className="mt-6 font-display font-extrabold text-3xl">Enquiry received.</h3>
        <p className="mt-2 text-[#3a4757]">An engineering team member will respond to you directly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div><label className={labelCls}>Full name</label><Input name="full_name" required placeholder="Your name" className={fieldCls} /></div>
        <div><label className={labelCls}>Email address</label><Input name="email" required type="email" placeholder="name@company.com" className={fieldCls} /></div>
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
      <div><label className={labelCls}>Project details / brief description</label><Textarea name="details" required rows={5} placeholder="Scope, constraints, sequence, key challenge..." className={fieldCls} /></div>
      <div><label className={labelCls}>File upload attachment</label><input name="file" type="file" className="block w-full text-sm text-[#3a4757] file:mr-4 file:rounded-full file:border-0 file:bg-black file:text-white file:px-4 file:py-2" /></div>
      <label className="flex items-start gap-3 text-xs text-[#3a4757]">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5" required />
        I agree to the privacy policy and consent to being contacted about this enquiry.
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" disabled={!agree || busy} className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 h-12 font-semibold hover:brightness-110 transition disabled:opacity-50">
        {busy ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending</> : <>Send project enquiry <ArrowRight className="w-4 h-4" /></>}
      </button>
    </form>
  );
}