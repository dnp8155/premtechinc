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

  const [fileError, setFileError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  // Gmail strict attachment limit is 25 MB
  const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB in bytes

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileError("");

    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        setFileError(`File "${file.name}" is ${(file.size / (1024 * 1024)).toFixed(1)}MB. Gmail attachment limit is 25MB.`);
        setSelectedFile(null);
        e.target.value = "";
        return;
      }
      setSelectedFile(file);
    } else {
      setSelectedFile(null);
    }
  };

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

    // Read attachment as base64 if present
    let attachmentData = null;
    let attachmentName = null;
    let attachmentType = null;
    let attachmentSize = 0;

    if (selectedFile) {
      if (selectedFile.size > MAX_FILE_SIZE) {
        setError("Attached file exceeds Gmail's 25MB limit. Please attach a smaller file.");
        setBusy(false);
        return;
      }

      try {
        const base64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(selectedFile);
        });

        attachmentData = base64;
        attachmentName = selectedFile.name;
        attachmentType = selectedFile.type;
        attachmentSize = selectedFile.size;
      } catch (err) {
        console.error("Error reading file:", err);
      }
    }

    const inquiryDetails = {
      fullName,
      email,
      company,
      phone,
      location,
      category,
      stage,
      details,
      attachmentName,
      attachmentData,
      attachmentType,
      attachmentSize,
    };
    setSubmittedData(inquiryDetails);

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
        setSelectedFile(null);
        e.target.reset();
        return;
      } else {
        const errJson = await response.json().catch(() => null);
        if (errJson?.error) {
          setError(errJson.error);
        } else {
          setError("Failed to dispatch email. Please verify connection.");
        }
      }
    } catch {
      setError("Network error. Please try again or email virag@premtechinc.com directly.");
    }

    setBusy(false);
  };

  // If sent, form stays cleanly visible with green button and message
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
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className={labelCls}>Drawing or specification file attachment</label>
          <span className="text-[11px] font-mono text-muted-foreground">Max 25 MB (Gmail Limit)</span>
        </div>
        <input
          name="file"
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.dwg,.dxf,.zip,.rar,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx"
          className="block w-full text-xs sm:text-sm text-[#3a4757] file:mr-4 file:rounded-full file:border-0 file:bg-black file:text-white file:px-4 file:py-2 hover:file:bg-primary hover:file:text-primary-foreground file:transition-all cursor-pointer"
        />
        {selectedFile && (
          <p className="mt-1.5 text-xs text-primary font-mono flex items-center gap-1.5">
            📎 Selected: <strong>{selectedFile.name}</strong> ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
          </p>
        )}
        {fileError && <p className="mt-1.5 text-xs text-red-600 font-semibold">{fileError}</p>}
      </div>
      <label className="flex items-start gap-3 text-xs text-[#3a4757]">
        <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} className="mt-0.5" required />
        I agree to the privacy policy and consent to being contacted at virag@premtechinc.com about this enquiry.
      </label>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={!agree || busy || sent}
          className={`inline-flex items-center justify-center gap-3 rounded-full px-8 py-3.5 min-h-[48px] font-bold text-sm tracking-wide transition-all shadow-md shrink-0 ${
            sent
              ? "bg-[#16a34a] hover:bg-[#15803d] text-white shadow-green-600/30"
              : "bg-primary hover:bg-primary-hover text-primary-foreground shadow-primary/25 hover:shadow-lg"
          } disabled:opacity-60 disabled:cursor-not-allowed`}
        >
          {busy ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin shrink-0" />
              <span>Sending Enquiry...</span>
            </>
          ) : sent ? (
            <>
              <Check className="w-5 h-5 text-white shrink-0" />
              <span>Inquiry Sent Successfully!</span>
            </>
          ) : (
            <>
              <span>Send Project Enquiry</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </>
          )}
        </button>

        {sent && (
          <span className="text-xs text-green-700 font-semibold font-mono flex items-center gap-1.5 animate-in fade-in duration-300">
            <Check className="w-4 h-4 text-green-600 shrink-0" /> Dispatched to virag@premtechinc.com
          </span>
        )}
      </div>
    </form>
  );
}