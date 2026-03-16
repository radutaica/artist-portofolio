import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Daria Dascal",
  description: "Learn more about Daria Dascal, visual artist and photographer.",
};

export default function AboutPage() {
  return (
    <div className="px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/assets/dart/Me 2.png"
            alt="Daria Dascal"
            fill
            className="object-cover mix-blend-multiply"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">About Me</p>
            <h1 className="font-serif text-5xl font-light text-[#12273F]">Daria Dascal</h1>
          </div>

          <div className="flex flex-col gap-4 text-sm text-neutral-500 leading-relaxed">
            <p>
              I&apos;m a visual artist and photographer based in Paris, France. My work explores
              the intersection of light, form, and human emotion — finding beauty in the
              everyday and the overlooked.
            </p>
            <p>
              With over a decade of experience spanning editorial photography, gallery
              exhibitions, and commissioned installations, I bring a meditative, intentional
              approach to every project. My mixed-media pieces draw from both analog and
              digital processes, creating layered narratives that invite contemplation.
            </p>
            <p>
              I hold an MFA in Visual Arts from the École Nationale Supérieure des
              Beaux-Arts, Paris, and have exhibited internationally in New York, London,
              Tokyo, and Berlin.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block border border-[#12273F] text-[#12273F] px-8 py-3.5 rounded-none text-sm font-medium hover:bg-[#12273F] hover:text-white transition-colors self-start mt-2"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
