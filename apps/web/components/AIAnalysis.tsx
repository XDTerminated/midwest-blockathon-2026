"use client";

import type { SearchResult } from "@immivault/shared";
import { Volume2, Square, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { CitedCase } from "@/components/CitedCase";
import { textToSpeech } from "@/lib/api";

// Simple language detection based on Unicode ranges and common words
const detectLang = (text: string): string => {
  if (/[\u4e00-\u9fff]/.test(text)) return "zh";
  if (/[\u3040-\u309f\u30a0-\u30ff]/.test(text)) return "ja";
  if (/[\uac00-\ud7af]/.test(text)) return "ko";
  if (/[\u0600-\u06ff]/.test(text)) return "ar";
  if (/[\u0900-\u097f]/.test(text)) return "hi";
  if (/[\u0400-\u04ff]/.test(text)) return "ru";
  if (/[\u0e00-\u0e7f]/.test(text)) return "th";
  if (/[\u1000-\u109f]/.test(text)) return "my";
  const lower = text.toLowerCase();
  if (/\b(el|la|los|las|es|está|puede|también|pero)\b/.test(lower)) return "es";
  if (/\b(le|la|les|est|sont|peut|aussi|mais|avec)\b/.test(lower)) return "fr";
  if (/\b(o|os|as|é|são|pode|também|mas|com)\b/.test(lower)) return "pt";
  if (/\b(mwen|ou|li|yo|nan|pou|pa|ak)\b/.test(lower)) return "ht";
  if (/\b(ang|ng|mga|sa|na|ay|at|ko)\b/.test(lower)) return "tl";
  if (/\b(là|của|và|có|không|được|này|những)\b/.test(lower)) return "vi";
  if (/\b(і|є|що|але|або|та|це|до)\b/.test(lower)) return "uk";
  return "en";
};

interface AIAnalysisProps {
  result: SearchResult;
}

export const AIAnalysis = ({ result }: AIAnalysisProps) => {
  const [speaking, setSpeaking] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const blobUrlRef = useRef<string | null>(null);

  const toggleSpeak = async () => {
    if (speaking) {
      audioRef.current?.pause();
      audioRef.current = null;
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
      setSpeaking(false);
      return;
    }

    const text = result.analysis.replace(/\[Case CID: [^\]]+\]/g, "");
    const lang = detectLang(text);

    setLoading(true);
    try {
      const blob = await textToSpeech(text, lang);
      const url = URL.createObjectURL(blob);
      blobUrlRef.current = url;

      const audio = new Audio(url);
      audioRef.current = audio;
      audio.onended = () => {
        setSpeaking(false);
        URL.revokeObjectURL(url);
        blobUrlRef.current = null;
      };
      audio.onerror = () => {
        setSpeaking(false);
        URL.revokeObjectURL(url);
        blobUrlRef.current = null;
      };
      await audio.play();
      setSpeaking(true);
    } catch {
      console.error("ElevenLabs TTS failed, falling back to browser TTS");
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setSpeaking(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#161A24] rounded-[14px] border border-[#2E323A] p-5">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-[#2E323A] bg-[#0C0F18] border border-[#2E323A] px-2 py-1 rounded">
          Lumina AI
        </span>
        <button
          onClick={toggleSpeak}
          disabled={loading}
          className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition text-xs font-medium ${
            speaking
              ? "text-[#C9A54E] bg-[#C9A54E]/10"
              : loading
                ? "text-[#C9A54E] bg-[#C9A54E]/5 opacity-70"
                : "text-[#5a5e6a] hover:text-[#C9A54E] hover:bg-[#C9A54E]/5"
          }`}
          title={loading ? "Generating audio..." : speaking ? "Stop listening" : "Listen to response"}
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : speaking ? <Square className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          {loading ? "Loading..." : speaking ? "Stop" : "Listen"}
        </button>
      </div>

      {/* AI analysis — markdown rendered */}
      <div className="text-base text-[#c0c2d0] leading-loose space-y-4">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="leading-loose">
                {processCitations(children as string, result.citedCases)}
              </p>
            ),
            h2: ({ children }) => (
              <h2 className="text-base font-semibold text-[#e8e8f0] mt-4 mb-1">{children}</h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-sm font-semibold text-[#e8e8f0] mt-3 mb-1">{children}</h3>
            ),
            ul: ({ children }) => <ul className="list-disc pl-5 space-y-1">{children}</ul>,
            li: ({ children }) => <li className="text-sm">{children}</li>,
            strong: ({ children }) => <strong className="font-semibold text-[#e8e8f0]">{children}</strong>,
          }}
        >
          {result.analysis}
        </ReactMarkdown>
      </div>

      {/* Cited cases */}
      {result.citedCases.length > 0 && (
        <div className="mt-4 pt-4 border-t border-[#2E323A]">
          <p className="text-xs text-[#2E323A] uppercase tracking-wide mb-2">
            Cases Referenced
          </p>
          <div className="flex flex-wrap gap-2">
            {result.citedCases.map((ref_) => (
              <CitedCase key={ref_.cid} ref_={ref_} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

// Replace [Case CID: <cid>] patterns with CitedCase badges.
const processCitations = (
  content: React.ReactNode,
  citedCases: SearchResult["citedCases"]
): React.ReactNode => {
  if (typeof content !== "string") return content;

  const cidPattern = /\[Case CID: ([^\]]+)\]/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = cidPattern.exec(content)) !== null) {
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    const cid = match[1];
    const cited = citedCases.find((c) => c.cid === cid);
    if (cited) {
      parts.push(<CitedCase key={cid} ref_={cited} />);
    } else {
      parts.push(match[0]);
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  return parts.length > 0 ? parts : content;
};
