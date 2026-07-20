import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="placard">Jack — Graphic Art &amp; Drawing · {new Date().getFullYear()}</p>
        <div className="flex gap-6">
          {/* TODO: real Instagram handle */}
          <Link href="/commission" className="placard link-underline">
            Commissions open
          </Link>
          <a
            href="https://www.stickermule.com/jlep"
            className="placard link-underline"
            target="_blank"
            rel="noreferrer"
          >
            Sticker Mule
          </a>
          <a
            href="https://instagram.com"
            className="placard link-underline"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
