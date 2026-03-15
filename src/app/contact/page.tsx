import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact — Alexandra Moreau",
  description: "Get in touch with Alexandra Moreau for commissions, exhibitions, or collaborations.",
};

export default function ContactPage() {
  return (
    <div className="px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Info */}
        <div>
          <p className="text-xs uppercase tracking-widest text-neutral-400 mb-2">Contact</p>
          <h1 className="font-serif text-5xl font-light text-[#222222] mb-6">
            Let&apos;s Work<br />Together
          </h1>
          <p className="text-sm text-neutral-500 leading-relaxed mb-10">
            Whether you&apos;re interested in commissioning a piece, discussing an exhibition,
            or simply want to say hello — I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-4 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">Email</p>
              <a href="mailto:hello@alexandramoreau.art" className="text-neutral-500 hover:text-neutral-900 transition-colors">
                hello@alexandramoreau.art
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">Based in</p>
              <p className="text-neutral-500">Paris, France</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400">Available for</p>
              <p className="text-neutral-500">Commissions, Exhibitions, Collaborations</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
