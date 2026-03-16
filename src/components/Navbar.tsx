"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const allLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const leftLinks = allLinks.slice(0, 2);
const rightLinks = allLinks.slice(2);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background">
      {/* Desktop */}
      <div className="hidden md:block px-10 h-16">
        <div className="nav-split w-full h-full">
          <ul className="nav-left flex gap-8">
            {leftLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-neutral-500 hover:text-[#12273F] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-logo">
            <Link href="/">
              <Image src="/assets/dart/logo dart.png" alt="Dart logo" width={40} height={14} className="object-contain" />
            </Link>
          </div>
          <ul className="nav-right flex gap-8">
            {rightLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="text-sm text-neutral-500 hover:text-[#12273F] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-10 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-light text-[#12273F]">
          Moreau
        </Link>
        <button
          className="p-2 text-neutral-700"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-background px-10 py-4 flex flex-col gap-4">
          {allLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-neutral-500 hover:text-[#12273F] transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
