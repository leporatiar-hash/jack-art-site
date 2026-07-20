export type Artwork = {
  slug: string;
  title: string;
  /** Unconfirmed until Jack fills it in — omit rather than guess. */
  year?: number;
  /** Unconfirmed until Jack fills it in — omit rather than guess. */
  medium?: string;
  /** Path under /public (e.g. "/art/piece-01.jpg") or a full CDN URL. */
  image: string;
  /** Optional: mark a few as featured to show on the home page. */
  featured?: boolean;
  /** Optional: original dimensions, availability, price, etc. */
  detail?: string;
};

/**
 * This is the whole "CMS" for now — edit this file to add work.
 * Drop images in /public/art and point `image` at them.
 * When Jack wants to manage this himself without touching code,
 * swap this array for a fetch to a headless CMS (Sanity, etc.);
 * the components below don't care where the data comes from.
 */
export const artworks: Artwork[] = [
  {
    slug: "hamsa-eye-hand",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Hamsa Eye Hand",
    image: "/art/hamsa-eye-hand.png",
    featured: true,
  },
  {
    slug: "eye-illustration",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Eye Illustration",
    image: "/art/eye-illustration.jpg",
    featured: true,
  },
  {
    slug: "purple-dream-scene",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Purple Dream Scene",
    image: "/art/purple-dream-scene.jpg",
    featured: true,
  },
  {
    slug: "abstract-face-collage",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Abstract Face Collage",
    image: "/art/abstract-face-collage.png",
  },
  {
    slug: "brain-figure-teal",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Brain Figure Teal",
    image: "/art/brain-figure-teal.jpg",
  },
  {
    slug: "meditation-figures-diptych",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    // Source was an Instagram screenshot; cropped the header/UI chrome off,
    // original untouched on disk.
    title: "Meditation Figures Diptych",
    image: "/art/meditation-figures-diptych.jpg",
  },
  {
    slug: "tree-figure-collage",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Tree Figure Collage",
    image: "/art/tree-figure-collage.png",
  },
  {
    slug: "split-figures-collage",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Split Figures Collage",
    image: "/art/split-figures-collage.png",
  },
  {
    slug: "one-eyed-creature",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "One-Eyed Creature",
    image: "/art/one-eyed-creature.png",
  },
  {
    slug: "hooded-figure-maze",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Hooded Figure Maze",
    image: "/art/hooded-figure-maze.png",
  },
  {
    slug: "red-totem-figure",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Red Totem Figure",
    image: "/art/red-totem-figure.png",
  },
  {
    slug: "mandala-figure-scene",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Mandala Figure Scene",
    image: "/art/mandala-figure-scene.png",
  },
  {
    slug: "crowned-creature",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Crowned Creature",
    image: "/art/crowned-creature.png",
  },
  {
    slug: "unicycle-figure",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Unicycle Figure",
    image: "/art/unicycle-figure.png",
  },
  {
    slug: "split-face-portrait",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Split Face Portrait",
    image: "/art/split-face-portrait.png",
  },
  {
    slug: "wounded-hand",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Wounded Hand",
    image: "/art/wounded-hand.png",
  },
  {
    slug: "segmented-limb-sculpture",
    // TODO: confirm title, year, medium — filename used as placeholder title.
    title: "Segmented Limb Sculpture",
    image: "/art/segmented-limb-sculpture.png",
  },
];

export const featuredArtworks = artworks.filter((a) => a.featured);
