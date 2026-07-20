"use client";

import { useState } from "react";
import ArtCard from "./ArtCard";
import Lightbox from "./Lightbox";
import type { Artwork } from "@/data/artworks";

export default function ArtworkGallery({ artworks }: { artworks: Artwork[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {artworks.map((art, i) => (
          <ArtCard key={art.slug} art={art} onClick={() => setOpenIndex(i)} />
        ))}
      </div>
      {openIndex !== null ? (
        <Lightbox
          artworks={artworks}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      ) : null}
    </>
  );
}
