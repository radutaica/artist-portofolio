import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About — Alexandra Moreau",
  description: "Learn more about Alexandra Moreau, visual artist and photographer.",
};

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Photo */}
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-100">
          <Image
            src="https://picsum.photos/seed/portrait/600/800"
            alt="Alexandra Moreau"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-neutral-400 mb-2">About Me</p>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900">Alexandra Moreau</h1>
          </div>

          <div className="flex flex-col gap-4 text-neutral-600 leading-relaxed">
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

          <div className="flex flex-wrap gap-2">
            {["Photography", "Mixed Media", "Abstract", "Editorial", "Portraiture"].map((tag) => (
              <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="inline-block bg-neutral-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-700 transition-colors self-start mt-2"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
