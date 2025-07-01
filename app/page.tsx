'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = ['/img1.jpg', '/bg2.webp', '/bg3.webp', '/bg4.webp'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [managementOpen, setManagementOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 5000);
  return () => clearInterval(interval);
}, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Blackpantherkan Academy</title>
        <meta name="description" content="Blackpantherkan Academy - Karate, Rifle Shooting, Yoga, and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* Hero Section with Sliding Background */}
<section
  id="home"
  className="relative h-[50vh] md:h-screen flex items-center justify-center text-center text-white overflow-hidden"
>
  {/* Background Images */}
  <div className="absolute inset-0 w-full h-full z-10">
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
    {/* Optional: dark overlay */}
    {/* <div className="absolute inset-0 bg-black/40" /> */}
  </div>

  {/* Foreground Content */}
  <div className="relative z-20 bg-opacity-50 p-6 sm:p-8 rounded max-w-2xl w-full">
    <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4">
      Work Harder, Get Stronger
    </h1>
    <p className="text-base sm:text-lg md:text-xl mb-6">Easy with our Team</p>
    <Link
      href="/contacts"
      className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-red-700 transition"
    >
      Become a Member
    </Link>
  </div>

  {/* Manual Controls */}
  <button
    onClick={() => setIndex((index - 1 + images.length) % images.length)}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
  >
    <ChevronLeft className="text-white w-6 h-6" />
  </button>
  <button
    onClick={() => setIndex((index + 1) % images.length)}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/40 p-3 rounded-full hover:bg-black/60 transition"
  >
    <ChevronRight className="text-white w-6 h-6" />
  </button>
</section>


      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-br from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-gray-800">Choose Program</h2>
          <p className="text-base sm:text-lg text-center text-gray-600 mb-12">
            We have experts in various programs to guide you on your journey.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Karate',
                desc: 'We have a team of 20+ Senior Instructors in Goju Ryu style karate.',
                image: '/karate2.jpeg',
              },
              {
                title: 'Rifle Shooting',
                desc: 'We have two classes in Naigaon and Vasai for Rifle Shooting.',
                image: '/rifle.jpeg',
              },
              {
                title: 'Yoga',
                desc: 'We conduct Yoga classes in Naigaon Center.',
                image: '/yoga.jpeg',
              },
              {
                title: 'Personal Training',
                desc: 'We offer Personal Training for Kick Boxing and Karate at our Naigaon Center.',
                image: '/PT.jpeg',
              },
              {
                title: 'Dance',
                desc: 'Dance classes available in Naigaon for teenagers. Contact us for details.',
                image: '/dance.jpg',
              },
              {
                title: 'Self Defence Training',
                desc: 'We conduct self-defence seminars to promote women’s safety.',
                image: '/sd.jpeg',
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="w-full h-56 relative">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Social Section */}
      <section id="social" className="bg-gray-900 py-16 text-center">
  <div className="max-w-3xl mx-auto px-4">
    <h2 className="text-4xl font-extrabold text-white mb-4 tracking-wide">
      Don’t Think, Begin Today!
    </h2>
    <p className="text-lg text-gray-300 mb-8">
      Visit our social channels to explore more of our activities.
    </p>

    <div className="flex justify-center space-x-6">
      <a
        href="https://www.facebook.com/people/Black-Pantherkan-Academy-Of-Sports-Martial-Arts/100063680874664/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition"
        aria-label="Facebook"
      >
        <FaFacebookF className="text-2xl" />
      </a>

      <a
        href="https://www.youtube.com/channel/UCAfsmAav2uE8TuqSLCvLpYQ"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-red-600 hover:bg-red-700 p-4 rounded-full transition"
        aria-label="YouTube"
      >
        <FaYoutube className="text-2xl" />
      </a>

      <a
        href="https://www.instagram.com/blackpantherkan/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white bg-pink-500 hover:bg-pink-600 p-4 rounded-full transition"
        aria-label="Instagram"
      >
        <FaInstagram className="text-2xl" />
      </a>
    </div>
  </div>
</section>


      {/* Classes Section */}


<section id="classes" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
      Our <em className="text-red-500 not-italic">Classes</em>
    </h2>
    <p className="text-center text-gray-600 mb-12">
      Choose from our expert-led training programs designed for all skill levels.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: 'Karate Classes',
          desc: '20+ senior instructors and Palghar’s largest team of national-level judges.',
          image: '/class.jpg',
          link: '/schedule#karate-schedule',
        },
        {
          title: 'Rifle Shooting',
          desc: 'Train under certified professionals in Vasai & Naigaon.',
          image: '/rifle2.jpeg',
          link: '/schedule#Rifle-schedule',
        },
        {
          title: 'Kickboxing',
          desc: 'Dynamic, high-energy sessions led by experienced coaches.',
          image: '/kickboxing.jpg',
          link: '/schedule#KickBoxing-schedule',
        },
      ].map((cls, index) => (
        <div
          key={index}
          className="group bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="relative h-56 overflow-hidden">
            <img
              src={cls.image}
              alt={cls.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 mb-2 transition">
              {cls.title}
            </h3>
            <p className="text-gray-600 mb-4">{cls.desc}</p>
            <Link href={cls.link} className="inline-block px-4 py-2 bg-red-600 text-white rounded-full text-sm font-medium shadow hover:bg-red-700 transition">
              View Schedule
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>




      

      {/* founder Section */}
      <section id="trainers" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
       <div className="max-w-4xl mx-auto text-center mb-10">
  <h2 className="text-4xl font-bold text-gray-800 uppercase tracking-wider relative inline-block">
    FOUNDER
    <span className="block w-20 h-1 bg-indigo-600 mx-auto mt-2 rounded"></span>
  </h2>
</div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* Gray background box */}
          <div className="bg-gray-200 p-6 rounded-lg shadow-inner max-w-sm w-full">
            <div className="bg-white p-4 rounded-md shadow-md text-center hover:scale-105 transition-transform duration-300">
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>

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