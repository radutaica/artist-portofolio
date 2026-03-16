import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-6 bg-[#F5F0EE]">
      <p className="text-sm uppercase tracking-widest text-neutral-400 mb-4">
        Visual Artist &amp; Photographer
      </p>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#12273F] mb-6">
        Alexandra<br />Moreau
      </h1>
      <p className="max-w-xl text-lg text-neutral-600 mb-10 leading-relaxed">
        Exploring light, form, and emotion through the lens of contemporary photography
        and mixed-media art.
      </p>
      <Link
        href="/gallery"
        className="inline-block bg-[#12273F] text-white px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#1e3a5f] transition-colors"
      >
        View My Work
      </Link>
    </section>
  );
}
