'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
const committeeMembers = [
  {
    name: 'Dr. Biju Nair',
    designation: 'Founder & President',
    image: '/committee/biju.jpg',
  },
  {
    name: 'Lalita Nair',
    designation: 'vice President',
    image: '/committee/namrata.jpg',
  },
  {
    name: 'Namrata Nair',
    designation: 'Treasurer',
    image: '/committee/namrata.jpg',
  },
  {
    name: 'Prashant Chavan',
    designation: 'General Secretary',
    image: '/committee/namrata.jpg',
  },
  {
    name: 'Tanmay Nair',
    designation: 'Joint Secretary',
    image: '/committee/tanmay.jpg',
  },
  // Add more committee members as needed
];

const commissionMembers = [
  {
    name: 'Vikas Tiwari',
    designation: 'Refree Commission',
    image: '/committee/shashwat.jpg',
  },
  {
    name: 'Arjun Tharu',
    designation: 'Tournament Commission',
    image: '/committee/arjun.jpg',
  },
  {
    name: 'Akash Nair',
    designation: 'Technical Commission',
    image: '/committee/kavita.jpg',
  },
  {
    name: 'Omesh Shah',
    designation: 'Athlete Commission',
    image: '/committee/kavita.jpg',
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


      <br />
      <br />
      <br />
     {/* contact us area */}
   <section id="contact-us" className="py-10 bg-gray-200 text-black">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row">
      {/* Map */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.553015837022!2d72.84393131476554!3d19.34519298693402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae4de714943b%3A0xdde28067cf527857!2sBlack%20Pantherkan%20Academy%20Of%20Sports%20And%20Martial%20Arts!5e0!3m2!1sen!2sin!4v1587660121091!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/2 flex items-center px-4">
        <div>
          <h3 className="text-2xl font-bold mb-4">Black Pantherkan</h3>
          <p className="mb-2">
            Black Pantherkan Academy of sports and martial arts
          </p>
          <p className="mb-2">
            <a
              href="https://wa.me/919970616339"
              className="text-green-400 hover:underline inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-whatsapp mr-2 text-green-500"></i> Reach us on WhatsApp
            </a>
          </p>
          <p className="mb-2">
            <a href="tel:+919970616339" className="hover:underline">+91 9970616339</a> /
            <a href="tel:+919325032565" className="hover:underline ml-2">9325032565</a>
          </p>
          <p>
            <a href="mailto:Blackpantherkan@gmail.com" className="hover:underline">
              Blackpantherkan@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    
  );
}
