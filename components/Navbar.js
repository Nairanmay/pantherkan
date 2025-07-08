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
          <Link href="./#home" className="hover:text-gray-500">Home</Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">About</button>
            <div className="absolute left-0 mt-2 w-52 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-10">
              <Link href="./#programs" className="block px-4 py-2 hover:bg-gray-100">Our Programs</Link>
              <Link href="./commitee#commitee" className="block px-4 py-2 hover:bg-gray-100">Committee</Link>
              <Link href="./commitee#comission" className="block px-4 py-2 hover:bg-gray-100">Commission</Link>
              <Link href="./our_organisation" className="block px-4 py-2 hover:bg-gray-100">Our Organization</Link>
            </div>
          </div>

          <Link href="./#classes" className="hover:text-gray-500">Classes</Link>
          <Link href="./contacts" className="hover:text-gray-500">Contact</Link>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">Gallery</button>
            <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition duration-300 z-10">
              <Link href="./camp" className="block px-4 py-2 hover:bg-gray-100">Camp</Link>
              <Link href="./competition" className="block px-4 py-2 hover:bg-gray-100">Competition</Link>
              <Link href="./refree" className="block px-4 py-2 hover:bg-gray-100">Referee Seminar</Link>
              <Link href="./selfdefence_seminar" className="block px-4 py-2 hover:bg-gray-100">Self Defence Seminar</Link>
            </div>
          </div>

          <Link href="./athlete" className="hover:text-gray-500">Athlete</Link>

          {/* Register Button */}
          <Link
            href="/register"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Register Now
          </Link>
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
  <div className="absolute top-[64px] left-0 w-full z-50 bg-black/40 backdrop-blur-md text-white px-4 py-4 space-y-2 rounded-b-xl shadow-lg ring-1 ring-white/20 text-base">

    <Link
      href="./#home"
      className="block py-2 px-2 rounded hover:bg-white/10 hover:text-red-400 transition"
      onClick={handleNavClick}
    >
      Home
    </Link>

    {/* About Dropdown (unstyled container) */}
    <details>
      <summary className="cursor-pointer py-2 px-2 rounded hover:bg-white/10 hover:text-red-400 transition font-medium">
        About
      </summary>
      <div className="ml-4 mt-1 space-y-1 text-sm">
        <Link href="./#programs" className="block hover:text-red-400" onClick={handleNavClick}>
          Our Programs
        </Link>
        <Link href="./commitee#commitee" className="block hover:text-red-400" onClick={handleNavClick}>
          Committee
        </Link>
        <Link href="./commitee#comission" className="block hover:text-red-400" onClick={handleNavClick}>
          Commission
        </Link>
        <Link href="./our_organisation" className="block hover:text-red-400" onClick={handleNavClick}>
          Our Organization
        </Link>
      </div>
    </details>

    <Link
      href="./#classes"
      className="block py-2 px-2 rounded hover:bg-white/10 hover:text-red-400 transition"
      onClick={handleNavClick}
    >
      Classes
    </Link>

    <Link
      href="./contacts"
      className="block py-2 px-2 rounded hover:bg-white/10 hover:text-red-400 transition"
      onClick={handleNavClick}
    >
      Contact
    </Link>

    {/* Gallery Dropdown (unstyled container) */}
    <details>
      <summary className="cursor-pointer py-2 px-2  hover:bg-white/10 hover:text-red-400 transition font-medium">
        Gallery
      </summary>
      <div className="ml-4 mt-1 space-y-1 text-sm">
        <Link href="/camp" className="block hover:text-red-400" onClick={handleNavClick}>
          Camp
        </Link>
        <Link href="/competition" className="block hover:text-red-400" onClick={handleNavClick}>
          Competition
        </Link>
        <Link href="/refree" className="block hover:text-red-400" onClick={handleNavClick}>
          Referee Seminar
        </Link>
        <Link href="/selfdefence_seminar" className="block hover:text-red-400" onClick={handleNavClick}>
          Self Defence Seminar
        </Link>
      </div>
    </details>

    <Link
      href="./athlete"
      className="block py-2 px-2 rounded hover:bg-white/10 hover:text-red-400 transition"
      onClick={handleNavClick}
    >
      Athlete
    </Link>

    <Link
      href="/register"
      className="block mt-3 text-center bg-red-600 text-white py-2 rounded hover:bg-red-700 transition shadow-md"
      onClick={handleNavClick}
    >
      Register Now
    </Link>

  </div>
)}


    </nav>
  );
}
