"use client";

import { useEffect } from "react";
import type { Artwork } from "@/data/artworks";

const controlStyle = { outlineColor: "#FFFFFF" };

export default function Lightbox({
  artworks,
  index,
  onClose,
  onNavigate,
}: {
  artworks: Artwork[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  const art = artworks[index];
  const mediumYear = [art.medium, art.year].filter(Boolean).join(" · ");
  const hasMultiple = artworks.length > 1;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (hasMultiple && e.key === "ArrowRight") {
        onNavigate((index + 1) % artworks.length);
      }
      if (hasMultiple && e.key === "ArrowLeft") {
        onNavigate((index - 1 + artworks.length) % artworks.length);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [index, artworks.length, hasMultiple, onClose, onNavigate]);

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-ink/95 p-4 sm:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={art.title}
    >
      <button
        type="button"
        onClick={onClose}
        style={controlStyle}
        className="placard absolute right-4 top-4 text-paper hover:opacity-70 sm:right-8 sm:top-8"
      >
        Close ✕
      </button>

      {hasMultiple ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + artworks.length) % artworks.length);
            }}
            style={controlStyle}
            aria-label="Previous piece"
            className="placard absolute left-2 top-1/2 -translate-y-1/2 px-2 py-4 text-paper hover:opacity-70 sm:left-6"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % artworks.length);
            }}
            style={controlStyle}
            aria-label="Next piece"
            className="placard absolute right-2 top-1/2 -translate-y-1/2 px-2 py-4 text-paper hover:opacity-70 sm:right-6"
          >
            →
          </button>
        </>
      ) : null}

      <div
        className="flex max-h-full max-w-full flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={art.image}
          alt={art.title}
          className="max-h-[75vh] max-w-full object-contain sm:max-h-[80vh]"
        />
        <div className="mt-4 max-w-md text-center text-paper">
          <p className="font-display text-lg font-semibold">{art.title}</p>
          {mediumYear ? <p className="placard mt-1 opacity-80">{mediumYear}</p> : null}
          {art.detail ? <p className="placard mt-0.5 opacity-80">{art.detail}</p> : null}
        </div>
      </div>
    </div>
  );
}
