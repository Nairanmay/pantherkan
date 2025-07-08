'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X } from 'lucide-react';

const athletes = [
  {
    name: 'Alphonse Thomas',
    image: '/athletes/aryan.jpg',
  },
  {
    name: 'Vedant Kadam',
    image: '/athletes/sneha.jpg',
  },
  {
    name: 'Bhavik Avaghade',
    image: '/athletes/rahul.jpg',
  },
  {
    name: 'Mithilesh Vishwakarma',
    image: '/athletes/nisha.jpg',
  },
 {
    name: 'Manav Shrivastav',
    image: '/athletes/nisha.jpg',
  },
   {
    name: 'Juhit Patil',
    image: '/athletes/nisha.jpg',
  },
   {
    name: 'Pavitra Devendra',
    image: '/athletes/nisha.jpg',
  },
   {
    name: 'Vikas Tiwari',
    image: '/athletes/nisha.jpg',
  },
   {
    name: 'Shashwat Yadav',
    image: '/athletes/nisha.jpg',
  },
   {
    name: 'Kartik Servi',
    image: '/athletes/nisha.jpg',
  },
   {
    name: 'Anaisha Nair',
    image: '/athletes/nisha.jpg',
  },
];

export default function AthletesPage() {
  const [selectedAthlete, setSelectedAthlete] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Athletes</h1>
        <p className="text-lg text-gray-600">Meet the champions trained at Black Pantherkan</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {athletes.map((athlete, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-300 cursor-pointer"
            onClick={() => setSelectedAthlete(athlete)}
          >
            <div className="w-full aspect-square relative mb-4 overflow-hidden rounded-md">
              <Image
                src={athlete.image}
                alt={athlete.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{athlete.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedAthlete && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
              onClick={() => setSelectedAthlete(null)}
            >
              <X size={24} />
            </button>

            <div className="w-full aspect-square relative mb-4 rounded-md overflow-hidden">
              <Image
                src={selectedAthlete.image}
                alt={selectedAthlete.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {selectedAthlete.name}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
