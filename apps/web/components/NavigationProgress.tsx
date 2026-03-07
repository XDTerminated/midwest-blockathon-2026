"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const NavigationProgress = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const prevPath = useRef(pathname + searchParams.toString());
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const current = pathname + searchParams.toString();
    if (current === prevPath.current) return;

    // Route changed — show and animate to 100
    prevPath.current = current;
    clearInterval(timerRef.current);
    setProgress(100);
    setVisible(true);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => setProgress(0), 300);
    }, 400);

    return () => clearTimeout(hideTimer);
  }, [pathname, searchParams]);

  // Start progress bar on click of any internal link
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("http") || href.startsWith("#")) return;

      // Internal navigation detected
      setProgress(20);
      setVisible(true);
      clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(timerRef.current);
            return prev;
          }
          return prev + (90 - prev) * 0.1;
        });
      }, 100);
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
      clearInterval(timerRef.current);
    };
  }, []);

  if (!visible && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2px] pointer-events-none"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      <div
        className="h-full bg-[#D4AD5A] shadow-[0_0_8px_rgba(212,173,90,0.5)]"
        style={{
          width: `${progress}%`,
          transition: progress === 0 ? "none" : "width 0.3s ease-out",
        }}
      />
    </div>
  );
};
