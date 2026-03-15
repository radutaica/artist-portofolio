export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-10 py-6 flex justify-between items-center text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Alexandra Moreau</p>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-neutral-900 transition-colors">
            Instagram
          </a>
          <a href="mailto:hello@alexandramoreau.art" className="hover:text-neutral-900 transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
