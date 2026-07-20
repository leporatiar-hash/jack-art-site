import type { Metadata } from "next";
import ArtCard from "@/components/ArtCard";
import { artworks } from "@/data/artworks";

export const metadata: Metadata = {
  title: "Gallery — Jack",
  description: "Selected original works.",
};

export default function GalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <p className="placard">{artworks.length} works</p>
      <h1 className="section-title mt-3">Gallery</h1>
      <p className="mt-4 max-w-xl text-muted">
        Hover or tap any piece for its wall label. To buy an original, use the{" "}
        <a href="/commission" className="link-underline">
          commission &amp; enquiries
        </a>{" "}
        form.
      </p>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {artworks.map((art) => (
          <ArtCard key={art.slug} art={art} />
        ))}
      </div>
    </section>
  );
}
