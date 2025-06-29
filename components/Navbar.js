'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-black p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpeg" alt="Logo" height={42} width={42} />
          <span className="text-3xl font-bold">BLACKPANTHERKAN</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/#home" className="hover:text-gray-500">Home</Link>
          <Link href="/#programs" className="hover:text-gray-500">About</Link>
          <Link href="/#classes" className="hover:text-gray-500">Classes</Link>
          <Link href="/contacts" className="hover:text-gray-500">Contact</Link>

          {/* Management Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">Management</button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible z-10">
              <Link href="/commitee#commitee" className="block px-4 py-2 hover:bg-gray-100">Committee</Link>
              <Link href="/commitee#comission" className="block px-4 py-2 hover:bg-gray-100">Commission</Link>
            </div>
          </div>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <button className="hover:text-gray-500">Gallery</button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 invisible z-10">
              <Link href="/camp" className="block px-4 py-2 hover:bg-gray-100">Camp</Link>
              <Link href="/competition" className="block px-4 py-2 hover:bg-gray-100">Competition</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 flex flex-col space-y-2 px-4">
          <Link href="/#home" className="hover:text-gray-500">Home</Link>
          <Link href="/#programs" className="hover:text-gray-500">About</Link>
          <Link href="/#classes" className="hover:text-gray-500">Classes</Link>
          <Link href="/contacts" className="hover:text-gray-500">Contact</Link>

          <details>
            <summary className="cursor-pointer hover:text-gray-500">Management</summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/commitee#commitee" className="block hover:text-gray-500">Committee</Link>
              <Link href="/commitee#comission" className="block hover:text-gray-500">Commission</Link>
            </div>
          </details>

          <details>
            <summary className="cursor-pointer hover:text-gray-500">Gallery</summary>
            <div className="ml-4 mt-2 space-y-1">
              <Link href="/camp" className="block hover:text-gray-500">Camp</Link>
              <Link href="/competition" className="block hover:text-gray-500">Competition</Link>
            </div>
          </details>
        </div>
      )}
    </nav>
  );
}
