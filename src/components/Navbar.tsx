"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/about", label: "About me" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/dartxspace/",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/dariadascal/",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: "mailto:dariadascal.dart@gmail.com",
    label: "Email",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-background">
      {/* Desktop */}
      <div className="hidden md:flex px-10 h-16 items-center justify-between">
        {/* Left: Logo + Nav links */}
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image src="/assets/dart/logo dart.png" alt="Dart logo" width={40} height={14} className="object-contain" />
          </Link>
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm text-neutral-500 hover:text-[#13273F] transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Social links */}
        <div className="flex items-center gap-6">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-neutral-400 hover:text-[#13273F] transition-colors"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden px-10 h-16 flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/dart/logo dart.png" alt="Dart logo" width={40} height={14} className="object-contain h-[14px] w-auto" />
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
        <div className="md:hidden bg-background px-10 py-4 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-neutral-500 hover:text-[#13273F] transition-colors"
            >
              {label}
            </Link>
          ))}
          <div className="flex gap-5 pt-2">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                aria-label={label}
                className="text-neutral-400 hover:text-[#13273F] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
