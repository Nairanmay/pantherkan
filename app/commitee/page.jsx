'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
const committeeMembers = [
   {
    name: 'Dr. Biju Nair',
    designation: 'Founder & President',
    image: '/committee/bijunair.JPG',
    yearsActive: '2015–Present',
    info: 'Pioneer of the organization and mentor to all members.',
  },
  {
    name: 'Lalita Nair',
    designation: 'Vice President',
    image: '/committee/lalita.JPG',
    yearsActive: '2015–Present',
    info: 'Oversees event coordination and member engagement.',
  },
  {
    name: 'Namrata Nair',
    designation: 'Treasurer',
    image: '/committee/nammu.JPG',
    yearsActive: '2023–Present',
    info: 'Manages financial planning and budget allocation.',
  },
  {
    name: 'Prashant Chavan',
    designation: 'General Secretary',
    image: '/committee/prashant.JPG',
    yearsActive: '2023–Present',
    info: 'Handles daily operations and internal communications.',
  },
  {
    name: 'Tanmay Nair',
    designation: 'Joint Secretary',
    image: '/committee/tanm.JPG',
    yearsActive: '2023–Present',
    info: 'Supports coordination and digital development tasks.',
  },
  // Add more committee members as needed
];

const commissionMembers = [
  {
    name: 'Vikas Tiwari',
    designation: 'Referee Commission',
    image: '/committee/vikas.JPG',
    yearsActive: '2023–Present',
    info: 'Supervises and trains officiating staff for events.',
  },
  {
    name: 'Arjun Tharu',
    designation: 'Tournament Commission',
    image: '/committee/arjun.JPG',
    yearsActive: '2023–Present',
    info: 'Leads tournament logistics and scheduling.',
  },
  {
    name: 'Akash Nair',
    designation: 'Technical Commission',
    image: '/committee/akash.JPG',
    yearsActive: '2023–Present',
    info: 'Responsible for technical setup and event execution.',
  },
  {
    name: 'Omesh Shah',
    designation: 'Athlete Commission',
    image: '/committee/omesh.JPG',
    yearsActive: '2023–Present',
    info: 'Represents athlete concerns and development programs.',
  },
  // Add more commission members as needed
];

export default function CommitteePage() {
  return (
    <div className="bg-gray-100 min-h-screen">
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
              className="shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white"
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
              {member.yearsActive && (
                <p className="text-xs text-gray-400 mt-1 italic">{member.yearsActive}</p>
              )}
              {member.info && (
                <p className="text-sm text-gray-600 mt-2">{member.info}</p>
              )}
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
          <p className="text-gray-600 mt-4">
            A team of professionals supporting excellence in every domain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {commissionMembers.map((member, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:-translate-y-1 hover:shadow-2xl bg-white"
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
              {member.yearsActive && (
                <p className="text-xs text-gray-400 mt-1 italic">{member.yearsActive}</p>
              )}
              {member.info && (
                <p className="text-sm text-gray-600 mt-2">{member.info}</p>
              )}
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
