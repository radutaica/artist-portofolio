export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Artist Portfolio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
            Twitter
          </a>
          <a href="mailto:hello@artist.com" className="hover:text-neutral-900 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
