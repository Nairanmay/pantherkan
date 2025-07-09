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
   <div className="bg-gray-100 min-h-full">

<section className="relative w-full  pb-24">
  {/* 🔷 Parallax Heading Section */}
   <div
    className="relative left-0 top-0 w-full h-[290px] bg-fixed bg-center bg-cover bg-no-repeat py-16 mb-16"
    style={{ backgroundImage: "url('/camp/winter2018/img1.jpg')" }}
  >
    <div className="absolute inset-0 bg-black/45 z-0" />
    <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Our <span className="text-[red]">Committee</span>
      </h2>
      <p className="mt-4 text-lg text-gray-200">
        A team of professionals supporting excellence in every domain.
      </p>
    </div>
  </div>

  {/* 🔷 Faint Logo Background Behind Cards */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
    <div className="w-[800px] h-[800px] bg-[url('/logo2.png')] bg-contain bg-no-repeat opacity-15" />
  </div>

  {/* 🔷 Pyramid Layout */}
<div className="relative z-10 flex flex-col items-center gap-12 pt-6 pb-0 px-4 sm:px-6 lg:px-8">
          {/* Top Row – 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
            {committeeMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-full max-w-[260px] aspect-square border-4 border-red-500 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={260}
                    height={260}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
                <p className="text-xs italic text-gray-400">{member.yearsActive}</p>
                <p className="text-sm text-gray-700 mt-2">{member.info}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row – 2 Centered Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-10 w-full max-w-3xl">
            {committeeMembers.slice(3, 5).map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
              >
                <div className="w-full max-w-[260px] aspect-square border-4 border-red-500 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={260}
                    height={260}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
                <p className="text-xs italic text-gray-400">{member.yearsActive}</p>
                <p className="text-sm text-gray-700 mt-2">{member.info}</p>
              </div>
            ))}
          </div>
        </div>



</section>



 <section id="comission" className="relative w-full py-20 bg-gray-100 overflow-hidden">
  {/* 🔷 COMMISSION Parallax Banner */}
  <div
    className="relative w-full h-[290px] bg-fixed bg-center bg-cover bg-no-repeat py-20"
    style={{ backgroundImage: "url('/camp/summer2024/img13.JPG')" }}
  >
    <div className="absolute inset-0 bg-black/45 z-0" />
    <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        Our <span className="text-[red]">Commission</span> Members
      </h2>
      <p className="mt-4 text-lg text-gray-200">
        A team of professionals supporting excellence in every domain.
      </p>
    </div>
  </div>

  {/* 🔷 Faint Logo Background */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
    <div className="w-[700px] h-[700px] bg-[url('/logo2.png')] bg-contain bg-no-repeat opacity-10" />
  </div>

  {/* 🔷 Pyramid Layout */}
 <div className="relative z-10 flex flex-col items-center gap-16 pt-24 pb-12 px-4 sm:px-6 lg:px-8">

    
    {/* Top Row – 3 Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 w-full max-w-6xl">
      {commissionMembers.slice(0, 3).map((member, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
        >
          <div className="w-[260px] h-[260px] border-4 border-red-500 rounded-xl overflow-hidden mb-4">
            <Image
              src={member.image}
              alt={member.name}
              width={260}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
          <p className="text-sm text-gray-600">{member.designation}</p>
          <p className="text-xs italic text-gray-400">{member.yearsActive}</p>
          <p className="text-sm text-gray-700 mt-2">{member.info}</p>
        </div>
      ))}
    </div>

    {/* Bottom Row – 2 Centered Cards */}
{/* Bottom Row – 1 Centered Card */}
<div className="flex justify-center w-full max-w-6xl">
  {commissionMembers.slice(3, 4).map((member, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
    >
      <div className="w-[260px] h-[260px] border-4 border-red-500 rounded-xl overflow-hidden mb-4">
        <Image
          src={member.image}
          alt={member.name}
          width={260}
          height={260}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-base font-bold text-gray-900">{member.name}</h3>
      <p className="text-sm text-gray-600">{member.designation}</p>
      <p className="text-xs italic text-gray-400">{member.yearsActive}</p>
      <p className="text-sm text-gray-700 mt-2">{member.info}</p>
    </div>
  ))}
</div>

  </div>
</section>

  

  {/* 🔷 FOOTER */}
  <footer className="bg-black text-white py-8 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Black Pantherkan Academy. All rights reserved.
      </p>
    </div>
  </footer>
</div>

    
  );
}
