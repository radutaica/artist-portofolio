import GalleryGrid from "@/components/GalleryGrid";

export default function Home() {
  return (
    <div>
      <div className="px-10 py-10 flex flex-col gap-6 items-center">
        {/* <video
          src="https://w3xdjtdixpgqzl4k.public.blob.vercel-storage.com/Untitled_Artwork9-ezgif.com-gif-to-mp4-converter.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[55vh] object-contain border border-neutral-200 shadow-lg"
        /> */}
        <p className="text-sm leading-relaxed max-w-xl md:max-w-3xl text-center text-[#13273F]">
          Daria Dascal | Visual Artist | Branding &amp; Graphic Design
        </p>
      </div>
      <GalleryGrid />
    </div>
  );
}
