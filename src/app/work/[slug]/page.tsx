import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { works, getWorkBySlug } from "@/lib/works";

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return {};
  return {
    title: `${work.title} — Alexandra Moreau`,
    description: work.description,
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  const currentIndex = works.findIndex((w) => w.slug === slug);
  const otherWorks = works.filter((_, i) => i !== currentIndex).slice(0, 4);

  return (
    <div>
      {/* Title + description */}
      <div className="px-10 py-16 max-w-3xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-4">{work.category}</p>
        <h1 className="font-serif text-5xl md:text-6xl font-light text-[#222222] mb-8 leading-tight">
          {work.title}
        </h1>
        <p className="text-sm text-neutral-500 leading-relaxed">{work.description}</p>
      </div>

      {/* Slides */}
      <div className="flex flex-col gap-6 pb-16">
        {work.slides.map((slide, i) => (
          <div key={i} className={slide.layout === "full" ? "w-full" : "max-w-3xl mx-auto w-full px-10"}>
            <div className={`relative overflow-hidden bg-neutral-100 ${slide.layout === "full" ? "aspect-[16/9]" : "aspect-[3/4]"}`}>
              {slide.type === "video" ? (
                <video
                  src={slide.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <Image
                  src={slide.url}
                  alt={`${work.title} — slide ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={slide.layout === "full" ? "100vw" : "(max-width: 768px) 100vw, 60vw"}
                />
              )}
            </div>
            {slide.caption && (
              <p className="font-serif text-2xl md:text-3xl font-light text-[#222222] leading-snug mt-10 max-w-xl mx-auto text-center px-10">
                {slide.caption}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Other projects */}
      <div className="border-t border-neutral-100 px-10 py-12">
        <p className="text-xs uppercase tracking-widest text-neutral-400 mb-8">More Work</p>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {otherWorks.map((other) => (
            <Link
              key={other.id}
              href={`/work/${other.slug}`}
              className="font-serif text-xl font-light text-neutral-400 hover:text-[#222222] transition-colors"
            >
              {other.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
