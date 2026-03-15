import GalleryGrid from "@/components/GalleryGrid";

export default function Home() {
  return (
    <div>
      <div className="px-10 py-10">
        <p className="font-serif italic text-sm text-neutral-500 leading-relaxed max-w-xl">
          — Alexandra Moreau is a visual artist, photographer, and light-chaser based in Paris,
          exploring form, emotion, and the quiet drama of the everyday.
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
