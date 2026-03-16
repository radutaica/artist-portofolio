export type Work = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  slides: Array<{ url: string; layout: "center" | "full"; type?: "video"; caption?: string }>;
};

export const works: Work[] = [
  {
    id: 3,
    slug: "restem-010",
    title: "Restem 010",
    category: "Branding",
    description:
      "A brand identity for Restem 010 — a studio clothing line that bridges archival research and contemporary silhouette.",
    cover: "/assets/Restem 010/RESTEM 010 BRAND GUIDE.png",
    slides: [
      { url: "/assets/Restem 010/RESTEM 010 BRAND GUIDE.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-01.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-02.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-03.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-04.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-05.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-06.png", layout: "full" },
      { url: "/assets/Restem 010/images.png", layout: "full" },
      { url: "https://w3xdjtdixpgqzl4k.public.blob.vercel-storage.com/9C4D23FB-EFCF-4517-ACEB-E8AEAF8A91D1.MOV", layout: "full", type: "video" },
      { url: "/assets/Restem 010/maneken-AMS02.jpg", layout: "center" },
      { url: "/assets/Restem 010/maneken-RAW07.jpg", layout: "center" },
      { url: "/assets/Restem 010/maneken-UBX59.jpg", layout: "center" },
    ],
  },
  {
    id: 2,
    slug: "fir",
    title: "FIR",
    category: "Branding",
    description:
      "Visual identity for FIR — a concept café built around the idea of the forest as a place of gathering, slowness, and ritual.",
    cover: "/assets/FIR/FIR BRAND GUIDE-09.png",
    slides: [
      { url: "/assets/FIR/FIR BRAND GUIDE-09.png", layout: "full" },
      { url: "/assets/FIR/FIR cafenea guide.png", layout: "full" },
      { url: "/assets/FIR/fir-brand guide-02.png", layout: "full" },
      { url: "/assets/FIR/fir-brand guide-04.png", layout: "full" },
      { url: "/assets/FIR/fir-brand guide-05.png", layout: "full" },
      { url: "/assets/FIR/fir-brand guide-07.png", layout: "full" },
      { url: "/assets/FIR/fir-brand guide-08.png", layout: "full" },
      { url: "/assets/FIR/ChatGPT Image Mar 12, 2026 at 12_22_41 PM.png", layout: "full" },
      { url: "/assets/FIR/tote bag.png", layout: "full" },
      { url: "/assets/FIR/maneken-FW2517 copy.JPG", layout: "center" },
      { url: "/assets/FIR/maneken-FW2520.jpg", layout: "center" },
      { url: "/assets/FIR/maneken-RZ05.jpg", layout: "center" },
    ],
  },
  {
    id: 1,
    slug: "bear",
    title: "Bear",
    category: "Branding",
    description:
      "A brand identity built around warmth and craft — rooted in natural textures, hand-drawn type, and a palette drawn from the forest floor.",
    cover: "/assets/Bear/bear brand guide.png",
    slides: [
      { url: "/assets/Bear/bear brand guide.png", layout: "full" },
      { url: "/assets/Bear/ChatGPT Image Mar 12, 2026 at 04_00_28 PM.png", layout: "full" },
      { url: "/assets/Bear/ChatGPT Image Mar 16, 2026 at 03_16_41 PM.png", layout: "full" },
      { url: "/assets/Bear/ChatGPT Image Mar 16, 2026 at 03_21_28 PM.png", layout: "full" },
      { url: "/assets/Bear/maneken-ECOM46.jpg", layout: "center" },
      { url: "/assets/Bear/maneken-EPHEMERA26.jpg", layout: "center" },
    ],
  },
  {
    id: 4,
    slug: "day-and-night",
    title: "day & night",
    category: "Art Direction",
    description:
      "An art direction project exploring the duality of light — the charged stillness of late afternoon against the quiet weight of night.",
    cover: "/assets/day & night/Untitled_Artwork 13.png",
    slides: [
      { url: "/assets/day & night/Untitled_Artwork 13.png", layout: "full" },
      { url: "/assets/day & night/Untitled_Artwork 4 copy.png", layout: "full" },
      { url: "https://w3xdjtdixpgqzl4k.public.blob.vercel-storage.com/90A44C1A-91EB-4003-AB7C-92E819FA89D0.MOV", layout: "full", type: "video" },
      { url: "https://w3xdjtdixpgqzl4k.public.blob.vercel-storage.com/ACB0B5E7-A38D-47E4-B8D5-9292E72039E7.MOV", layout: "full", type: "video" },
      { url: "https://w3xdjtdixpgqzl4k.public.blob.vercel-storage.com/IMG_8241.MOV", layout: "full", type: "video" },
      { url: "/assets/day & night/d5ba0fd5-f3a6-4421-9ccf-9383dea4c98b.JPG", layout: "full" },
      { url: "/assets/day & night/maneken-PS129.jpg", layout: "center" },
      { url: "/assets/day & night/maneken-PS20.jpg", layout: "center" },
      { url: "/assets/day & night/maneken-STUDIONSF17.jpg", layout: "center" },
    ],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
