export type Work = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  slides: Array<{ url: string; layout: "center" | "full"; type?: "video"; hasSound?: boolean; caption?: string }>;
};

export const works: Work[] = [
  {
    id: 3,
    slug: "restem-010",
    title: "Restem 010",
    category: "Flower studio branding",
    description:
      "RESTEM 010 is a flower studio rooted in Rotterdam's street culture and visual identity. The brand explores how floristry can intersect with the city's strong poster culture by collecting expired posters, flyers, and printed materials and giving them a second life as floral wrapping and communication surfaces. By transforming materials that were originally designed to be temporary, RESTEM 010 creates bouquets that carry fragments of Rotterdam's graphic landscape. Through bold typography, high-contrast colors, and layered visuals inspired by urban posters, the brand moves away from traditional, soft floristry aesthetics and instead embraces a loud, experimental, and culture-driven approach. RESTEM 010 turns flowers into a medium for circulation, reuse, and the expression of the city's creative energy.",
    cover: "/assets/Restem 010/home.png",
    slides: [
      { url: "https://w3xdjtdixpgqzl4k.public.blob.vercel-storage.com/video%20.mov", layout: "full", type: "video", hasSound: true },
      { url: "/assets/Restem 010/flyer.png", layout: "center" },
      { url: "/assets/Restem 010/Restem010 brand guide-01.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-02.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-03.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-04.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-05.png", layout: "full" },
      { url: "/assets/Restem 010/Restem010 brand guide-06.png", layout: "full" },
      { url: "/assets/Restem 010/images.png", layout: "full" },
      { url: "/assets/Restem 010/maneken-AMS02.jpg", layout: "center" },
      { url: "/assets/Restem 010/maneken-RAW07.jpg", layout: "center" },
      { url: "/assets/Restem 010/maneken-UBX59.jpg", layout: "center" },
      { url: "/assets/Restem 010/sticker 1_.png", layout: "full" },
    ],
  },
  {
    id: 2,
    slug: "fir",
    title: "FIR",
    category: "Coffee shop branding",
    description:
      "FIR is a youth-centered specialty café and creative space where high-quality coffee meets culture. FIR brings together coffee, art, and design through exhibitions, workshops, and a small concept store. Inspired by the symbolic meaning of \"fir\" in Romanian culture, the brand takes its name from the thread found in traditional textiles, rituals, and stories passed down through generations — reconnecting young generations with Romanian heritage by translating tradition into a modern, approachable context.",
    cover: "/assets/FIR/home.jpg",
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
    category: "Honey branding",
    description:
      "Bear is an organic honey brand inspired by one of nature's most iconic honey lovers. In the wild, bears are naturally drawn to beehives, making them a timeless symbol of honey's irresistible sweetness and a natural connection to the product. This idea is reflected in the brand identity — the logo mimics the wiggly, flowing texture of honey, as if it were written directly with honey itself. Its imperfect, organic shape emphasises the natural character of the product and reinforces the brand's focus on authenticity and the pure sweetness of honey.",
    cover: "/assets/Bear/home.jpg",
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
    category: "Installation",
    description:
      "An interactive multidisciplinary project exploring how day and night shape identity and social norms along Rotterdam's Nieuwe Binnenweg, presented through poster design, editorial publication and sculptures. The project looks at how the atmosphere of the same place shifts throughout the day and how these changes influence how people experience the space and themselves within it.",
    cover: "/assets/day & night/home.jpg",
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
