import GalleryGrid from "@/components/GalleryGrid";

export const metadata = {
  title: "Gallery — Alexandra Moreau",
  description: "A selection of works by Alexandra Moreau.",
};

export default function GalleryPage() {
  return (
    <div className="px-10 py-16">
      <div className="mb-12">
        <h1 className="font-serif text-5xl font-light text-[#222222] mb-3">Gallery</h1>
        <p className="text-neutral-500 text-sm">A selection of recent works across photography and mixed media.</p>
      </div>
      <GalleryGrid />
    </div>
  );
}
