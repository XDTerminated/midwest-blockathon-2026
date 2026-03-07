"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { Upload, FileText, Loader2, CheckCircle, File as FileIcon, ExternalLink } from "lucide-react";
import { CaseUploadForm } from "@/components/CaseUploadForm";
import { uploadFile, listFiles, type UploadedFile } from "@/lib/api";
import Link from "next/link";

type Mode = "choose" | "file" | "form";

function formatBytes(bytes?: number) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function UploadArea() {
  const [mode, setMode] = useState<Mode>("choose");
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState<{ cid: string; name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listFiles()
      .then((res) => setFiles(res.files))
      .catch(() => {})
      .finally(() => setLoadingFiles(false));
  }, [uploaded]);

  const handleFile = useCallback(async (file: File) => {
    setError(null);
    setUploading(true);

    try {
      const result = await uploadFile(file);
      setUploaded({ cid: result.cid, name: result.name ?? file.name });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setUploading(false);
    }
  }, []);

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  if (mode === "form") {
    return (
      <div className="flex flex-col gap-6">
        <button
          onClick={() => setMode("choose")}
          className="text-[#8a8ea0] hover:text-[#e8e8f0] text-sm self-start transition"
        >
          ← Back
        </button>
        <div className="bg-[#161A24] border border-[#2E323A] rounded-[14px] p-6">
          <CaseUploadForm />
        </div>
      </div>
    );
  }

  if (uploaded) {
    return (
      <div className="text-center py-16">
        <div className="flex justify-center mb-4">
          <div className="bg-[#0f1a0f] border border-green-800 rounded-full p-4">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#e8e8f0] mb-2">Uploaded!</h2>
        <p className="text-[#8a8ea0] mb-4 text-sm">
          Your file has been stored on IPFS.
        </p>
        <div className="bg-[#161A24] border border-[#2E323A] rounded-[14px] p-4 max-w-sm mx-auto mb-6">
          <p className="text-xs text-[#8a8ea0] mb-1">Content ID (CID)</p>
          <p className="font-mono text-sm text-[#C9A54E] break-all">{uploaded.cid}</p>
        </div>
        <div className="flex justify-center gap-3">
          <a href={`/verify/${uploaded.cid}`} className="text-sm text-[#C9A54E] hover:underline">
            Verify Integrity →
          </a>
          <span className="text-[#2E323A]">|</span>
          <button
            onClick={() => { setUploaded(null); setMode("choose"); }}
            className="text-sm text-[#8a8ea0] hover:text-[#e8e8f0]"
          >
            Upload Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* File upload drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`w-full border-2 border-dashed rounded-[14px] flex flex-col items-center justify-center gap-3 py-16 transition cursor-pointer ${
          dragging
            ? "border-[#C9A54E] bg-[#161A24]"
            : "border-[#2E323A] hover:border-[#C9A54E]"
        }`}
      >
        {uploading ? (
          <Loader2 className="w-8 h-8 text-[#C9A54E] animate-spin" />
        ) : (
          <>
            <div className="w-12 h-12 rounded-lg bg-[#161A24] border border-[#2E323A] flex items-center justify-center">
              <Upload className="w-6 h-6 text-[#C9A54E]" />
            </div>
            <div className="text-center">
              <p className="text-sm text-[#e8e8f0]">
                Drag & drop a file or <span className="text-[#C9A54E]">click to browse</span>
              </p>
              <p className="text-xs text-[#8a8ea0] mt-1">PDF, JSON, and other file types supported</p>
            </div>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,.pdf,.doc,.docx,.txt,.png,.jpg,.jpeg"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>

      {error && (
        <div className="bg-[#1a0f0f] border border-[#3a2020] text-red-400 rounded-lg px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {/* Divider */}
      <div className="flex items-center gap-4">
        <div className="flex-1 h-px bg-[#2E323A]" />
        <span className="text-xs text-[#8a8ea0]">or</span>
        <div className="flex-1 h-px bg-[#2E323A]" />
      </div>

      {/* Create case manually */}
      <button
        onClick={() => setMode("form")}
        className="w-full flex items-center justify-center gap-3 bg-[#161A24] border border-[#2E323A] hover:border-[#C9A54E] rounded-[14px] py-5 transition group"
      >
        <div className="w-10 h-10 rounded-lg bg-[#0C0F18] border border-[#2E323A] group-hover:border-[#C9A54E] flex items-center justify-center transition">
          <FileText className="w-5 h-5 text-[#C9A54E]" />
        </div>
        <div className="text-left">
          <p className="text-sm text-[#e8e8f0] font-medium">Create a Case</p>
          <p className="text-xs text-[#8a8ea0]">Fill out the form step by step</p>
        </div>
      </button>

      {/* Uploaded files list */}
      <div className="mt-4">
        <h2 className="text-sm font-medium text-[#e8e8f0] mb-3">Your Files</h2>
        {loadingFiles ? (
          <div className="flex items-center gap-2 text-[#8a8ea0] text-sm py-4">
            <Loader2 className="w-4 h-4 animate-spin" />
            Loading files...
          </div>
        ) : files.length === 0 ? (
          <p className="text-sm text-[#8a8ea0] py-4">No files uploaded yet.</p>
        ) : (
          <div className="flex flex-col divide-y divide-[#2E323A] border border-[#2E323A] rounded-[14px] overflow-hidden">
            {files.map((f) => (
              <Link
                key={f.cid}
                href={`/case/${f.cid}`}
                className="flex items-center gap-3 px-4 py-3 hover:bg-[#161A24] transition"
              >
                <FileIcon className="w-4 h-4 text-[#C9A54E] shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#e8e8f0] truncate">{f.name}</p>
                  <p className="text-xs text-[#8a8ea0]">
                    {new Date(f.createdAt).toLocaleDateString()}
                    {f.size ? ` · ${formatBytes(f.size)}` : ""}
                  </p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#2E323A] shrink-0" />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
