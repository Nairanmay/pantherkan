'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setMenuOpen(false); // Close mobile menu after link click
  };

  return (
    <nav className="bg-white text-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpeg" alt="Logo" height={42} width={42} />
          <span className="text-xl sm:text-2xl font-bold">BLACKPANTHERKAN</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium">
          {[
            { href: './#home', label: 'Home' },
            { href: './#programs', label: 'About' },
            { href: './#classes', label: 'Classes' },
            { href: './contacts', label: 'Contact' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-gray-500">
              {item.label}
            </Link>
          ))}

          {/* Management Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">Management</button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-10">
              <Link href="./commitee#commitee" className="block px-4 py-2 hover:bg-gray-100">Committee</Link>
              <Link href="./commitee#comission" className="block px-4 py-2 hover:bg-gray-100">Commission</Link>
            </div>
          </div>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">Gallery</button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-10">
              <Link href="./camp" className="block px-4 py-2 hover:bg-gray-100">Camp</Link>
              <Link href="./competition" className="block px-4 py-2 hover:bg-gray-100">Competition</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden focus:outline-none text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          {[
            { href: './#home', label: 'Home' },
            { href: './#programs', label: 'About' },
            { href: './#classes', label: 'Classes' },
            { href: './contacts', label: 'Contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-gray-700 hover:text-red-500"
              onClick={handleNavClick}
            >
              {item.label}
            </Link>
          ))}

          <details className="py-2">
            <summary className="cursor-pointer text-gray-700 hover:text-red-500">Management</summary>
            <div className="ml-4 mt-1 space-y-1">
              <Link href="./commitee#commitee" className="block" onClick={handleNavClick}>Committee</Link>
              <Link href="./commitee#comission" className="block" onClick={handleNavClick}>Commission</Link>
            </div>
          </details>

          <details className="py-2">
            <summary className="cursor-pointer text-gray-700 hover:text-red-500">Gallery</summary>
            <div className="ml-4 mt-1 space-y-1">
              <Link href="/camp" className="block" onClick={handleNavClick}>Camp</Link>
              <Link href="/competition" className="block" onClick={handleNavClick}>Competition</Link>
            </div>
          </details>
        </div>
      )}
    </nav>
  );
}
