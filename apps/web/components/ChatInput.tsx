"use client";

import { Loader2, Mic, MicOff, Plus, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

interface ChatInputProps {
  defaultValue?: string;
  onSend?: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ defaultValue = "", onSend, disabled }: ChatInputProps) => {
  const [query, setQuery] = useState(defaultValue);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const finalTranscriptRef = useRef("");
  const router = useRouter();

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
    };
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || disabled) return;
    // Stop mic if active.
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
    }
    const q = query.trim();
    setQuery("");
    finalTranscriptRef.current = "";
    if (onSend) {
      onSend(q);
    } else {
      router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  }, [query, disabled, listening, onSend, router]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  const toggleMic = () => {
    if (listening) {
      recognitionRef.current?.stop();
      setListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false; // Only show final results, no flickering.
    recognition.lang = "";

    finalTranscriptRef.current = query;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          const transcript = event.results[i][0].transcript;
          finalTranscriptRef.current += (finalTranscriptRef.current ? " " : "") + transcript;
          setQuery(finalTranscriptRef.current);
        }
      }
    };

    recognition.onerror = () => {
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
    setListening(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-end gap-0 bg-[#161A24] border border-[#2E323A] rounded-[14px] px-4 py-3"
    >
      <button
        type="button"
        onClick={toggleMic}
        className={`shrink-0 flex items-center gap-1.5 transition mr-1 rounded-lg px-2 py-1.5 ${
          listening
            ? "text-[#C9A54E] bg-[#C9A54E]/10 animate-pulse"
            : "text-[#5a5e6a] hover:text-[#C9A54E]"
        }`}
        title={listening ? "Stop recording" : "Start voice input"}
      >
        {listening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
        <span className="text-[10px] font-medium hidden sm:inline">
          {listening ? "Stop" : "Speak"}
        </span>
      </button>

      <button
        type="button"
        onClick={() => window.location.href = "/upload"}
        className="w-8 h-8 shrink-0 flex items-center justify-center text-[#2E323A] hover:text-[#C9A54E] transition mr-3 rounded-lg"
        title="Upload a document"
      >
        <Plus className="w-5 h-5" />
      </button>

      <textarea
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          finalTranscriptRef.current = e.target.value;
        }}
        onKeyDown={handleKeyDown}
        placeholder={listening ? "Listening..." : "Describe your situation..."}
        rows={1}
        className="flex-1 bg-transparent text-[#e8e8f0] placeholder-[#2E323A] text-sm resize-none focus:outline-none leading-relaxed py-1"
        style={{ maxHeight: "120px", overflowY: "auto" }}
        autoFocus
      />

      <button
        type="submit"
        disabled={disabled || !query.trim()}
        className="w-8 h-8 shrink-0 flex items-center justify-center bg-[#C9A54E] hover:bg-[#d4a030] disabled:opacity-30 text-[#0C0F18] rounded-lg transition ml-3"
      >
        {disabled ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      </button>
    </form>
  );
};
