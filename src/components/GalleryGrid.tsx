import Image from "next/image";

const works = [
  { id: 1, title: "Solitude I", category: "Photography", width: 800, height: 1000 },
  { id: 2, title: "Urban Fragments", category: "Mixed Media", width: 800, height: 600 },
  { id: 3, title: "Golden Hour", category: "Photography", width: 800, height: 800 },
  { id: 4, title: "Texture Study II", category: "Abstract", width: 800, height: 1000 },
  { id: 5, title: "Light &amp; Shadow", category: "Photography", width: 800, height: 600 },
  { id: 6, title: "Midnight Series", category: "Mixed Media", width: 800, height: 800 },
  { id: 7, title: "Form in Motion", category: "Abstract", width: 800, height: 1000 },
  { id: 8, title: "Still Life IV", category: "Photography", width: 800, height: 600 },
  { id: 9, title: "Chromatic Study", category: "Abstract", width: 800, height: 800 },
];

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {works.map((work) => (
        <div key={work.id} className="group relative overflow-hidden rounded-lg bg-neutral-100 cursor-pointer">
          <div className="aspect-square relative">
            <Image
              src={`https://picsum.photos/seed/${work.id + 20}/800/800`}
              alt={work.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
            <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white font-medium text-sm">{work.title}</p>
              <p className="text-white/70 text-xs mt-0.5">{work.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
