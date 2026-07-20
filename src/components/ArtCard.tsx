import Image from "next/image";
import type { Artwork } from "@/data/artworks";

export default function ArtCard({ art }: { art: Artwork }) {
  const mediumYear = [art.medium, art.year].filter(Boolean).join(" · ");

  return (
    <figure className="group relative mb-6 break-inside-avoid overflow-hidden bg-white ring-1 ring-line">
      <div className="relative w-full">
        <Image
          src={art.image}
          alt={art.title}
          width={0}
          height={0}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {/* Wall label — always readable on mobile, reveals on hover on desktop. */}
      <figcaption
        className="translate-y-0 border-t border-line bg-paper px-4 py-3 sm:absolute sm:inset-x-0 sm:bottom-0 sm:translate-y-full sm:border-t-0 sm:bg-paper/95 sm:backdrop-blur sm:transition-transform sm:duration-300 sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0"
      >
        <p className="font-display text-base font-semibold leading-tight">
          {art.title}
        </p>
        {mediumYear ? <p className="placard mt-1">{mediumYear}</p> : null}
        {art.detail ? <p className="placard mt-0.5">{art.detail}</p> : null}
      </figcaption>
    </figure>
  );
}
