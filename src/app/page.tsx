import Link from "next/link";
import ArtCard from "@/components/ArtCard";
import { featuredArtworks } from "@/data/artworks";

export default function Home() {
  return (
    <>
      {/* Hero: the name treated like a gallery banner. */}
      <section className="mx-auto max-w-6xl px-5 pb-10 pt-16 sm:px-8 sm:pt-24">
        <p className="placard">Painter · Charleston &amp; Connecticut</p>
        <h1 className="wordmark mt-4">
          Jack
          <br />
          Leporati
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          {/* TODO: Jack's real one-paragraph statement. Keep it plain and specific. */}
          Original paintings and works on paper. New pieces are added as they
          leave the studio. Prints and commissions available.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/gallery" className="placard link-underline">
            See the work
          </Link>
          <Link href="/shop" className="placard link-underline">
            Shop prints &amp; tees
          </Link>
          <Link href="/commission" className="placard link-underline">
            Request a commission
          </Link>
        </div>
      </section>

      {/* Featured grid. */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex items-baseline justify-between border-b border-line pb-4">
          <h2 className="section-title">Recent work</h2>
          <Link href="/gallery" className="placard link-underline">
            View all
          </Link>
        </div>
        <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {featuredArtworks.map((art) => (
            <ArtCard key={art.slug} art={art} />
          ))}
        </div>
      </section>
    </>
  );
}
