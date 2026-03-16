export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="px-10 py-6 flex justify-between items-center text-xs text-neutral-400">
        <p>&copy; {new Date().getFullYear()} Daria Dascal</p>
        <div className="flex gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#12273F] transition-colors">
            Instagram
          </a>
          <a href="mailto:d.dascal07@gmail.com" className="hover:text-[#12273F] transition-colors">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
