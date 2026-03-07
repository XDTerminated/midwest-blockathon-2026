import { Shield, CheckCircle, XCircle, Clock, Key } from "lucide-react";

import { AppLayout } from "@/components/layout/AppLayout";
import { verifyCase } from "@/lib/api";
import { formatCID } from "@/lib/utils";

interface VerifyPageProps {
  params: Promise<{ cid: string }>;
}

const VerifyPage = async ({ params }: VerifyPageProps) => {
  const { cid } = await params;

  let result = null;
  let verifyError = null;

  try {
    result = await verifyCase(cid);
  } catch (err) {
    verifyError = err instanceof Error ? err.message : "Verification failed";
  }

  return (
    <AppLayout>
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="bg-[#1C2030] border border-[#363C4A] rounded-full p-3">
              <Shield className="w-7 h-7 text-[#D4AD5A]" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-[#e8e8f0] mb-2">Case Integrity Verification</h1>
          <p className="text-[#6B7280] text-sm">
            Cryptographic proof that this case file has not been altered since upload.
          </p>
        </div>

        <div className="bg-[#1C2030] border border-[#363C4A] rounded-xl p-6 space-y-5">
          {/* CID */}
          <div>
            <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-1">
              Content ID (CID)
            </p>
            <p className="font-mono text-sm text-[#D4AD5A] break-all bg-[#121620] border border-[#363C4A] rounded px-3 py-2">
              {cid}
            </p>
            <p className="text-xs text-[#6B7280] mt-1">
              This ID is a cryptographic hash of the file content. It changes if the file is modified.
            </p>
          </div>

          {verifyError && (
            <div className="flex items-start gap-3 bg-[#1a0f0f] border border-[#2a1515] rounded-lg p-4">
              <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-400 text-sm">Verification Error</p>
                <p className="text-red-400 text-sm mt-1 opacity-80">{verifyError}</p>
              </div>
            </div>
          )}

          {result && (
            <>
              {/* Validity badge */}
              <div
                className={`flex items-center gap-3 rounded-lg p-4 ${
                  result.isValid
                    ? "bg-[#0f1a0f] border border-green-800"
                    : "bg-[#1a0f0f] border border-[#2a1515]"
                }`}
              >
                {result.isValid ? (
                  <CheckCircle className="w-6 h-6 text-green-400 shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                )}
                <div>
                  <p className={`font-semibold text-sm ${result.isValid ? "text-green-400" : "text-red-400"}`}>
                    {result.isValid ? "Signature Valid" : "Signature Invalid"}
                  </p>
                  <p className={`text-xs mt-0.5 ${result.isValid ? "text-green-500" : "text-red-500"} opacity-80`}>
                    {result.isValid
                      ? "This case file has not been modified since it was uploaded."
                      : "This case file may have been altered or the signature could not be verified."}
                  </p>
                </div>
              </div>

              {/* Metadata */}
              {result.signedAt && (
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#6B7280] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Signed At</p>
                    <p className="text-sm text-[#e8e8f0] mt-0.5">
                      {new Date(result.signedAt).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              {result.signedBy && (
                <div className="flex items-start gap-3">
                  <Key className="w-4 h-4 text-[#6B7280] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Signed By</p>
                    <p className="text-sm font-mono text-[#e8e8f0] mt-0.5">
                      {formatCID(result.signedBy, 8)}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          {/* Explanation */}
          <div className="border-t border-[#363C4A] pt-4">
            <p className="text-xs text-[#6B7280]">
              Lumina stores case files on Pinata Private IPFS. Each file receives a content
              identifier (CID) — a cryptographic hash of its contents. If the file were modified,
              the CID would change. The file signature proves who uploaded the file and when,
              providing a tamper-evident audit trail.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default VerifyPage;
