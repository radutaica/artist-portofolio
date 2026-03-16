import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

export default function GalleryGrid() {
  return (
    <div className="index-grid">
      {works.map((work) => (
        <div key={work.id} className="index-cell-half">
          <div className="gallery-cell-inner">
            <Link href={`/work/${work.slug}`} className="group block cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-neutral-100">
                <Image
                  src={work.cover}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 hidden md:flex items-center justify-center p-6">
                  <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    <p className="font-serif text-4xl md:text-5xl font-light text-white uppercase">{work.title}</p>
                    <p className="text-xs text-white/70 uppercase tracking-widest mt-2">{work.category}</p>
                  </div>
                </div>
              </div>
              <div className="md:hidden pt-2 text-center">
                <p className="font-serif text-lg font-light text-[#12273F] uppercase">{work.title}</p>
                <p className="text-xs text-neutral-400 uppercase tracking-widest mt-0.5">{work.category}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
