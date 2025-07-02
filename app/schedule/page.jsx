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

         {/* Contact Section */}
         <section id="contact-us" className="py-16 bg-gray-900 text-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
      {/* Map */}
      <div className="w-full md:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.553015837022!2d72.84393131476554!3d19.34519298693402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae6455555555%3A0x5e96e887393abc6e!2sBlack%20Pantherkan%20karate%2C%20kick%20boxing%20and%20Rifle%20shooting%20classes!5e0!3m2!1sen!2sin!4v1719323740000!5m2!1sen!2sin
"
          width="100%"
          height="400"
          className="rounded shadow-lg"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Info */}
      <div className="w-full md:w-1/2 text-left space-y-4">
        <h3 className="text-2xl font-bold">Black Pantherkan</h3>
        <p>Black Pantherkan Academy of Sports and Martial Arts</p>
        <p>
          <a
            href="https://wa.me/919970616339"
            className="text-green-400 hover:underline inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-whatsapp mr-2 text-green-500"></i> WhatsApp Us
          </a>
        </p>
        <p>
          <a href="tel:+919970616339" className="hover:underline">+91 9970616339</a> /{' '}
          <a href="tel:+919325032565" className="hover:underline">9325032565</a>
        </p>
        <p>
          <a href="mailto:Blackpantherkan@gmail.com" className="hover:underline">
            Blackpantherkan@gmail.com
          </a>
        </p>
      </div>
    </div>
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
     


    
  
