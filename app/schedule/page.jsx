'use client';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import ScheduleSection from '@/components/ScheduleSection'; // Adjust path if needed
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Blackpantherkan Academy</title>
        <meta name="description" content="Blackpantherkan Academy - Karate, Rifle Shooting, Yoga, and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {/* schedule tables area */}

      <main>
      {/* Other sections */}
      <ScheduleSection />
    </main>

     {/* contact us area */}
    <section id="contact-us" className="py-10 bg-white-900 text-black">
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
     


    
  
