'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function FounderSection() {
  return (
    <section className="relative py-16 bg-[#919599] overflow-hidden">
      {/* Mobile: Slide in image on scroll */}
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.3 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="sm:hidden w-[360px] h-[440px] mx-auto mb-6 relative"
      >
        <Image
          src="/2076.jpg"
          alt="Founder Hero Mobile"
          fill
          className="object-contain rounded-xl shadow-xl"
        />
      </motion.div>

      {/* Card container */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wider relative inline-block">
            FOUNDER
            <span className="block w-20 h-1 bg-indigo-600 mx-auto mt-2 rounded"></span>
          </h2>
        </div>

        {/* Card with hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center relative"
        >
          {/* Card wrapper with hover group */}
          <div className="group relative">
            {/* Desktop: Hover background image - slides in from very left edge of screen */}
            <div className="hidden sm:block fixed top-1/2 left-0 transform -translate-y-1/2 -translate-x-full group-hover:translate-x-[calc(50vw-280px)] transition-transform duration-700 ease-in-out w-[420px] h-[500px] z-10 pointer-events-none md:group-hover:translate-x-[calc(50vw-320px)] lg:group-hover:translate-x-[calc(50vw-360px)] xl:group-hover:translate-x-[calc(50vw-400px)]">
              <div className="relative w-full h-full">
                <Image
                  src="/test.png"
                  alt="Martial Artist Background"
                  fill
                  className="object-contain shadow-2xl opacity-40"
                />
              </div>
            </div>

            {/* Main card */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-inner max-w-sm w-full relative z-20">
              <div className="bg-white p-4 rounded-md shadow-md text-center hover:scale-[1.03] transition-transform duration-300">
                <Image
                  src="/biju_nair.jpg"
                  alt="Grandmaster Dr. Biju Nair"
                  width={220}
                  height={160}
                  className="mb-3 mx-auto object-contain rounded"
                />
                <h3 className="text-lg font-semibold text-gray-800">Grandmaster Dr. Biju Nair</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Founder and principal of <span className="font-medium">Blackpantherkan Academy</span>.
                </p>
                <Link
                  href="./our_organisation#founder"
                  className="inline-block mt-3 text-sm text-indigo-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}