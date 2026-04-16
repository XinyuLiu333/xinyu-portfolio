"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  unoptimized?: boolean;
  children: React.ReactNode;
};

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  unoptimized,
  children,
}: Props) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
    setTimeout(() => setOpen(false), 200);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  const overlay = open && (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 sm:p-12 transition-all duration-200"
      style={{
        backgroundColor: visible ? "rgba(0, 0, 0, 0.75)" : "rgba(0, 0, 0, 0)",
        backdropFilter: visible ? "blur(8px)" : "blur(0px)",
      }}
      onClick={close}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        className="absolute top-5 right-5 z-[10000] flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white/80 hover:bg-white/25 hover:text-white transition-all duration-150"
        style={{ opacity: visible ? 1 : 0 }}
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <div
        className="transition-all duration-200"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.95)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          width={width ?? 1600}
          height={height ?? 900}
          unoptimized={unoptimized}
          className="max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-zoom-in w-full text-left"
      >
        {children}
      </button>
      {mounted && overlay && createPortal(overlay, document.body)}
    </>
  );
}
