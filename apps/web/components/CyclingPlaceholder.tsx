"use client";

import { useEffect, useState } from "react";

import { CYCLING_PLACEHOLDERS } from "@/lib/i18n";

export const CyclingPlaceholder = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      // After fade out, switch text and fade in.
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % CYCLING_PLACEHOLDERS.length);
        setVisible(true);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const item = CYCLING_PLACEHOLDERS[index];

  return (
    <p
      className="text-[#6B7280] text-base transition-all duration-400"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
      }}
      dir={item.lang === "ar" ? "rtl" : "ltr"}
    >
      {item.text}
    </p>
  );
};
