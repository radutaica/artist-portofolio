import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery — Alexandra Moreau",
  description: "A selection of works by Alexandra Moreau.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 mb-3">Gallery</h1>
        <p className="text-neutral-500 text-lg">A selection of recent works across photography and mixed media.</p>
      </div>
      <GalleryGrid />
    </div>
  );
}
