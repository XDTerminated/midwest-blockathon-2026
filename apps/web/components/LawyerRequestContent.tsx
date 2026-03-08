"use client";

import { CASE_TYPES } from "@immivault/shared";
import { AlertTriangle, CheckCircle, Clock, Loader2, Scale, Send, X, XCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cancelLawyerRequest, createLawyerRequest, listLawyerRequests, type LawyerRequestData, type LawyerRequestRecord } from "@/lib/api";
import { useSession } from "@/lib/auth-client";
import { useLanguage } from "@/lib/i18n";

const URGENCY_OPTIONS = [
  { value: "low", label: "Low — General guidance", color: "text-[#6B7280]" },
  { value: "medium", label: "Medium — Need help soon", color: "text-[#D4AD5A]" },
  { value: "high", label: "High — Deadline approaching", color: "text-orange-400" },
  { value: "urgent", label: "Urgent — Immediate need", color: "text-red-400" },
] as const;

const STATUS_CONFIG: Record<string, { icon: typeof Clock; label: string; color: string }> = {
  pending: { icon: Clock, label: "Pending Review", color: "text-[#D4AD5A] bg-[#D4AD5A]/10" },
  matched: { icon: CheckCircle, label: "Lawyer Matched", color: "text-green-400 bg-green-400/10" },
  completed: { icon: CheckCircle, label: "Completed", color: "text-[#6B7280] bg-[#6B7280]/10" },
  cancelled: { icon: XCircle, label: "Cancelled", color: "text-red-400 bg-red-400/10" },
};

export const LawyerRequestContent = () => {
  const { data: session } = useSession();
  const { t } = useLanguage();
  const [tab, setTab] = useState<"request" | "history">("request");
  const [requests, setRequests] = useState<LawyerRequestRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Form state.
  const [caseType, setCaseType] = useState("");
  const [country, setCountry] = useState("");
  const [summary, setSummary] = useState("");
  const [urgency, setUrgency] = useState<LawyerRequestData["urgency"]>("medium");
  const [preferredLanguage, setPreferredLanguage] = useState("en");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [relatedCid, setRelatedCid] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      setContactEmail(session.user.email);
    }
  }, [session?.user?.email]);

  const loadRequests = useCallback(async () => {
    if (!session?.user) return;
    setLoading(true);
    try {
      const { requests: data } = await listLawyerRequests();
      setRequests(data);
    } catch {
      // Non-fatal.
    } finally {
      setLoading(false);
    }
  }, [session?.user]);

  useEffect(() => {
    if (tab === "history") loadRequests();
  }, [tab, loadRequests]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await createLawyerRequest({
        caseType,
        countryOfOrigin: country,
        summary,
        urgency,
        preferredLanguage,
        contactEmail,
        contactPhone: contactPhone || undefined,
        relatedCid: relatedCid || undefined,
      });
      setSuccess(true);
      setCaseType("");
      setCountry("");
      setSummary("");
      setUrgency("medium");
      setRelatedCid("");
      setContactPhone("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = async (id: number) => {
    try {
      await cancelLawyerRequest(id);
      setRequests((prev) => prev.map((r) => (r.id === id ? { ...r, status: "cancelled" } : r)));
    } catch {
      // Non-fatal.
    }
  };

  if (!session?.user) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center gap-4">
        <Scale className="w-12 h-12 text-[#D4AD5A]" />
        <p className="text-[#e8e8f0] text-lg font-medium">{t("logIn")} to request a lawyer</p>
        <p className="text-[#6B7280] text-sm max-w-md">Sign in to submit a request for free professional legal guidance from a pro bono immigration attorney.</p>
      </div>
    );
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center gap-4 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-green-400/10 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-xl font-semibold text-[#e8e8f0]">Request Submitted</h2>
        <p className="text-[#9CA3AF] text-sm max-w-md">Your request for a pro bono lawyer has been submitted. You will be notified when a lawyer is matched to your case.</p>
        <div className="flex gap-3 mt-2">
          <button onClick={() => setSuccess(false)} className="px-4 py-2 rounded-lg bg-[#1C2030] border border-[#363C4A] text-[#9CA3AF] hover:text-[#e8e8f0] hover:border-[#4A5060] transition text-sm">
            Submit Another
          </button>
          <button onClick={() => { setSuccess(false); setTab("history"); }} className="px-4 py-2 rounded-lg bg-[#D4AD5A] hover:bg-[#E0BD6A] text-[#121620] font-semibold transition text-sm">
            View My Requests
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#D4AD5A] to-[#B8942E] flex items-center justify-center shadow-surface">
            <Scale className="w-4 h-4 text-[#121620]" />
          </div>
          <h1 className="text-xl font-semibold text-[#e8e8f0]">{t("requestLawyer")}</h1>
        </div>
        <p className="text-[#6B7280] text-sm">{t("lawyerDescription")}</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-[#161A24] rounded-lg p-1 w-fit">
        <button onClick={() => setTab("request")} className={`px-4 py-2 rounded-md text-sm transition ${tab === "request" ? "bg-[#1C2030] text-[#e8e8f0] shadow-surface" : "text-[#6B7280] hover:text-[#9CA3AF]"}`}>
          New Request
        </button>
        <button onClick={() => setTab("history")} className={`px-4 py-2 rounded-md text-sm transition ${tab === "history" ? "bg-[#1C2030] text-[#e8e8f0] shadow-surface" : "text-[#6B7280] hover:text-[#9CA3AF]"}`}>
          My Requests
        </button>
      </div>

      {tab === "request" ? (
        <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
          {/* Info banner */}
          <div className="flex gap-3 bg-[#1C2030] border border-[#363C4A] rounded-xl p-4">
            <AlertTriangle className="w-5 h-5 text-[#D4AD5A] shrink-0 mt-0.5" />
            <div className="text-sm text-[#9CA3AF]">
              <p className="text-[#e8e8f0] font-medium mb-1">Free Pro Bono Legal Help</p>
              <p>Submit your case details below and a qualified immigration attorney will review your request. This service connects you with volunteer lawyers — no cost to you.</p>
            </div>
          </div>

          {/* Case Type */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Case Type *</label>
            <select value={caseType} onChange={(e) => setCaseType(e.target.value)} required className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] focus:outline-none focus:border-[#D4AD5A] transition appearance-none">
              <option value="">Select case type...</option>
              {CASE_TYPES.map((ct) => (
                <option key={ct.value} value={ct.value}>{ct.label}</option>
              ))}
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Country of Origin *</label>
            <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} required placeholder="e.g. Guatemala, China, Nigeria..." className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] focus:outline-none focus:border-[#D4AD5A] transition" />
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Describe Your Situation *</label>
            <textarea value={summary} onChange={(e) => setSummary(e.target.value)} required minLength={20} maxLength={5000} rows={5} placeholder="Please describe your immigration situation, what kind of help you need, and any upcoming deadlines..." className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] focus:outline-none focus:border-[#D4AD5A] transition resize-none" />
            <p className="text-[#6B7280] text-xs mt-1">{summary.length}/5000 characters</p>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Urgency Level</label>
            <div className="grid grid-cols-2 gap-2">
              {URGENCY_OPTIONS.map((opt) => (
                <button key={opt.value} type="button" onClick={() => setUrgency(opt.value)} className={`px-3 py-2.5 rounded-lg border text-sm text-left transition ${urgency === opt.value ? "border-[#D4AD5A] bg-[#D4AD5A]/5" : "border-[#363C4A] bg-[#161A24] hover:border-[#4A5060]"}`}>
                  <span className={opt.color}>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Preferred Language</label>
            <select value={preferredLanguage} onChange={(e) => setPreferredLanguage(e.target.value)} className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] focus:outline-none focus:border-[#D4AD5A] transition appearance-none">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="zh">Chinese</option>
              <option value="ar">Arabic</option>
              <option value="hi">Hindi</option>
              <option value="fr">French</option>
              <option value="ht">Haitian Creole</option>
              <option value="pt">Portuguese</option>
              <option value="ko">Korean</option>
              <option value="vi">Vietnamese</option>
              <option value="tl">Tagalog</option>
            </select>
          </div>

          {/* Contact Email */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Contact Email *</label>
            <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] focus:outline-none focus:border-[#D4AD5A] transition" />
          </div>

          {/* Contact Phone (optional) */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Phone Number <span className="text-[#6B7280]">(optional)</span></label>
            <input type="tel" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="+1 (555) 123-4567" className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] focus:outline-none focus:border-[#D4AD5A] transition" />
          </div>

          {/* Related Case CID (optional) */}
          <div>
            <label className="block text-sm text-[#9CA3AF] mb-1.5">Related Case CID <span className="text-[#6B7280]">(optional)</span></label>
            <input type="text" value={relatedCid} onChange={(e) => setRelatedCid(e.target.value)} placeholder="If you found a relevant case, paste its CID here" className="w-full bg-[#161A24] border border-[#363C4A] rounded-lg px-3 py-2.5 text-sm text-[#e8e8f0] placeholder-[#6B7280] focus:outline-none focus:border-[#D4AD5A] transition" />
          </div>

          {error && (
            <div className="bg-[#201518] border border-[#3a2020] text-red-400 rounded-lg px-4 py-3 text-sm">{error}</div>
          )}

          <button type="submit" disabled={submitting || !caseType || !country || summary.length < 20 || !contactEmail} className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#D4AD5A] hover:bg-[#E0BD6A] disabled:opacity-50 disabled:cursor-not-allowed text-[#121620] font-semibold transition text-sm cursor-pointer">
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      ) : (
        /* History tab */
        <div className="space-y-3">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 text-[#D4AD5A] animate-spin" />
            </div>
          ) : requests.length === 0 ? (
            <div className="text-center py-12">
              <Scale className="w-10 h-10 text-[#363C4A] mx-auto mb-3" />
              <p className="text-[#6B7280] text-sm">No lawyer requests yet.</p>
              <button onClick={() => setTab("request")} className="mt-3 text-sm text-[#D4AD5A] hover:text-[#E0BD6A] transition">Submit your first request</button>
            </div>
          ) : (
            requests.map((req) => {
              const statusCfg = STATUS_CONFIG[req.status] ?? STATUS_CONFIG.pending;
              const StatusIcon = statusCfg.icon;
              return (
                <div key={req.id} className="bg-[#1C2030] border border-[#363C4A] rounded-xl p-4 hover:border-[#4A5060] transition">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full font-medium ${statusCfg.color}`}>
                        <StatusIcon className="w-3 h-3" />
                        {statusCfg.label}
                      </span>
                      <span className="text-xs text-[#6B7280]">{new Date(req.createdAt).toLocaleDateString()}</span>
                    </div>
                    {req.status === "pending" && (
                      <button onClick={() => handleCancel(req.id)} className="text-[#6B7280] hover:text-red-400 transition" title="Cancel request">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-[#e8e8f0] font-medium mb-1">
                    {CASE_TYPES.find((ct) => ct.value === req.caseType)?.label ?? req.caseType} — {req.countryOfOrigin}
                  </p>
                  <p className="text-sm text-[#9CA3AF] line-clamp-2">{req.summary}</p>
                  <div className="flex gap-3 mt-2 text-xs text-[#6B7280]">
                    <span>Urgency: {req.urgency}</span>
                    <span>Language: {req.preferredLanguage.toUpperCase()}</span>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
};
