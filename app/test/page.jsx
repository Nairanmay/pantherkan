'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['/img1.jpg', '/bg2.webp', '/bg3.webp', '/bg4.webp'];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () =>
    setIndex((prev) => (prev + 1) % images.length);

  return (
    <section
      id="home"
      className="relative h-[60vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center text-center text-white overflow-hidden px-4"
    >
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`slide-${i}`}
            fill
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            priority={i === 0}
          />
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 p-4 sm:p-6 md:p-10 rounded-2xl max-w-3xl w-full">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 md:mb-5">
          Work Harder, Get Stronger
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
          Easy with our Team
        </p>
        <Link
          href="/contacts"
          className="inline-block bg-red-600 text-white px-5 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-red-700 transition"
        >
          Become a Member
        </Link>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 p-2 sm:p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 p-2 sm:p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
      </button>
    </section>
  );
}
