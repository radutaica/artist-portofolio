import Image from "next/image";
import Link from "next/link";
import { works } from "@/lib/works";

export default function GalleryGrid() {
  return (
    <div className="index-grid">
      {works.map((work) => (
        <div key={work.id} className="index-cell-half">
          <div className="gallery-cell-inner">
            <Link href={`/work/${work.slug}`} className="group block relative overflow-hidden bg-neutral-100 cursor-pointer">
              <div className="relative aspect-square">
                <Image
                  src={work.cover}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-6">
                  <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="font-serif text-2xl md:text-3xl font-light text-white">{work.title}</p>
                    <p className="text-xs text-white/70 uppercase tracking-widest mt-0.5">{work.category}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
