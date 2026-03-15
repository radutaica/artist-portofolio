export type Work = {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  slides: Array<{ seed: string; layout: "center" | "full"; caption?: string }>;
};

export const works: Work[] = [
  {
    id: 1,
    slug: "solitude-i",
    title: "Solitude I",
    category: "Photography",
    description:
      "A study of stillness and silence — finding the poetry in empty spaces, long exposures, and the hour before dawn.",
    slides: [
      { seed: "s1a", layout: "center" },
      { seed: "s1b", layout: "full" },
      { seed: "s1c", layout: "center", caption: "The series was shot over six months, returning to the same locations at the same hour each time." },
      { seed: "s1d", layout: "full" },
    ],
  },
  {
    id: 2,
    slug: "urban-fragments",
    title: "Urban Fragments",
    category: "Mixed Media",
    description:
      "Collage work drawn from discarded city materials — torn posters, newspaper type, and industrial surfaces layered into new compositions.",
    slides: [
      { seed: "s2a", layout: "center" },
      { seed: "s2b", layout: "full" },
      { seed: "s2c", layout: "center" },
      { seed: "s2d", layout: "full", caption: "Each piece incorporates found material collected within a single city block." },
    ],
  },
  {
    id: 3,
    slug: "golden-hour",
    title: "Golden Hour",
    category: "Photography",
    description:
      "A fleeting twenty-minute window of light, chased across three continents. The camera as a net for something that cannot be held.",
    slides: [
      { seed: "s3a", layout: "full" },
      { seed: "s3b", layout: "center" },
      { seed: "s3c", layout: "full" },
      { seed: "s3d", layout: "center", caption: "Shot entirely on medium-format film during the last light of the day." },
    ],
  },
  {
    id: 4,
    slug: "texture-study-ii",
    title: "Texture Study II",
    category: "Abstract",
    description:
      "A close examination of surfaces — rust, concrete, worn leather, and cracked paint. Beauty in the overlooked material world.",
    slides: [
      { seed: "s4a", layout: "center" },
      { seed: "s4b", layout: "center" },
      { seed: "s4c", layout: "full", caption: "Macro lenses reveal a landscape invisible to the naked eye." },
      { seed: "s4d", layout: "full" },
    ],
  },
  {
    id: 5,
    slug: "light-and-shadow",
    title: "Light & Shadow",
    category: "Photography",
    description:
      "An ongoing investigation into the drama created by a single light source — the way darkness defines form as much as light does.",
    slides: [
      { seed: "s5a", layout: "full" },
      { seed: "s5b", layout: "center" },
      { seed: "s5c", layout: "full" },
    ],
  },
  {
    id: 6,
    slug: "midnight-series",
    title: "Midnight Series",
    category: "Mixed Media",
    description:
      "Created entirely between midnight and 4 a.m., this series explores what the unconscious mind reaches for when the rational world is asleep.",
    slides: [
      { seed: "s6a", layout: "center" },
      { seed: "s6b", layout: "full", caption: "The process was deliberately unplanned — materials chosen at random, no sketches beforehand." },
      { seed: "s6c", layout: "center" },
      { seed: "s6d", layout: "full" },
    ],
  },
  {
    id: 7,
    slug: "form-in-motion",
    title: "Form in Motion",
    category: "Abstract",
    description:
      "Long-exposure work capturing the arc of movement — bodies in dance, traffic at night, water over stone.",
    slides: [
      { seed: "s7a", layout: "full" },
      { seed: "s7b", layout: "center", caption: "30-second exposures at ISO 100 render motion as light painting." },
      { seed: "s7c", layout: "full" },
    ],
  },
  {
    id: 8,
    slug: "still-life-iv",
    title: "Still Life IV",
    category: "Photography",
    description:
      "Domestic objects rearranged into quiet altars. A continuation of the centuries-old tradition, interrogated through a contemporary lens.",
    slides: [
      { seed: "s8a", layout: "center" },
      { seed: "s8b", layout: "full" },
      { seed: "s8c", layout: "center", caption: "All objects were sourced from flea markets and returned after shooting." },
    ],
  },
  {
    id: 9,
    slug: "chromatic-study",
    title: "Chromatic Study",
    category: "Abstract",
    description:
      "A series built around a single hue per work — every element within the frame sharing one dominant color family, exploring mood through monochrome.",
    slides: [
      { seed: "s9a", layout: "full" },
      { seed: "s9b", layout: "center" },
      { seed: "s9c", layout: "full", caption: "Pigments were hand-mixed and applied with a palette knife directly onto large-format prints." },
      { seed: "s9d", layout: "center" },
    ],
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}
