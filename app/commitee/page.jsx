'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
const committeeMembers = [
  {
    name: 'Dr. Biju Nair',
    designation: 'Founder & President',
    image: '/committee/bijunair.JPG',
  },
  {
    name: 'Lalita Nair',
    designation: 'vice President',
    image: '/committee/lalita.JPG',
  },
  {
    name: 'Namrata Nair',
    designation: 'Treasurer',
    image: '/committee/nammu.JPG',
  },
  {
    name: 'Prashant Chavan',
    designation: 'General Secretary',
    image: '/committee/prashant.JPG',
  },
  {
    name: 'Tanmay Nair',
    designation: 'Joint Secretary',
    image: '/committee/tanm.JPG',
  },
  // Add more committee members as needed
];

const commissionMembers = [
  {
    name: 'Vikas Tiwari',
    designation: 'Refree Commission',
    image: '/committee/vikas.JPG',
  },
  {
    name: 'Arjun Tharu',
    designation: 'Tournament Commission',
    image: '/committee/arjun.JPG',
  },
  {
    name: 'Akash Nair',
    designation: 'Technical Commission',
    image: '/committee/akash.JPG',
  },
  {
    name: 'Omesh Shah',
    designation: 'Athlete Commission',
    image: '/committee/omesh.JPG',
  },
  // Add more commission members as needed
];

export default function CommitteePage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [managementOpen, setManagementOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
  return (
   <div className="bg-gray-100 min-h-screen">
     
   {/* Committee Section */}
{/* Committee Section */}
<section id="committee" className="max-w-6xl mx-auto px-4 py-20">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-800">
      Our <span className="text-red-600">Committee</span>
    </h2>
    <p className="text-gray-600 mt-4">Meet the leaders guiding our vision and values.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {committeeMembers.map((member, index) => (
      <div
        key={index}
        className="shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="w-full aspect-square relative mb-4 overflow-hidden border-4 border-red-600 rounded-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{member.designation}</p>
      </div>
    ))}
  </div>
</section>


{/* Commission Section */}
<section id="comission" className="max-w-6xl mx-auto px-4 py-20">
  <div className="text-center mb-16">
    <h2 className="text-4xl font-bold text-gray-800">
      Our <span className="text-red-600">Commission</span> Members
    </h2>
    <p className="text-gray-600 mt-4">A team of professionals supporting excellence in every domain.</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
    {commissionMembers.map((member, index) => (
      <div
        key={index}
        className="shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="w-full aspect-square relative mb-4 overflow-hidden border-4 border-red-600 rounded-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{member.designation}</p>
      </div>
    ))}
  </div>
</section>

       {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
  <div className="container mx-auto px-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} Black Pantherkan Academy. All rights reserved.</p>
  </div>
</footer>


   
    </div>
    
  );
}
