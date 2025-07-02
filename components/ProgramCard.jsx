'use client';

import Image from 'next/image';

export default function ProgramCard({ program, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
    >
      <div className="relative w-full h-56">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
      </div>
    </div>
  );
}
