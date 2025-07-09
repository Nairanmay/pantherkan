'use client';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';
export default function AboutPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
     <section
      ref={ref}
      className="relative w-full min-h-[300px] flex items-center justify-center text-white overflow-hidden bg-parallax"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground content */}
      <div
        className={`relative z-20 text-center px-6 py-20 max-w-3xl transition-all duration-1000 ${
          inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <h1 className="text-4xl font-bold mb-4">About Black Pantherkan</h1>
        <p className="text-lg leading-relaxed">
          Black Pantherkan is a premier sports and martial arts academy founded in 2015 by Dr. Biju Nair.
          We are dedicated to promoting physical excellence, discipline, and sportsmanship across Maharashtra.
        </p>
      </div>
    </section>


      {/* Legacy Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Legacy</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Since our establishment in 2015, Black Pantherkan has grown into one of the most recognized sports 
              and martial arts organizations in the region. With over 20 active training centers across Maharashtra, 
              we have nurtured thousands of athletes, instilling in them the values of discipline, resilience, and respect.
            </p>
          </div>
          <Image
            src="/flag.webp" // Replace with your actual logo path
            alt="Black Pantherkan Logo"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

{/* Founder Section */}
<section id='founder' className="bg-white py-16 px-6 border-t border-gray-200">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Founder Image */}
    <Image
      src="/biju_nair.jpg" // Replace with actual path to founder's photo
      alt="Grandmaster Dr. Biju Nair"
      width={400}
      height={500}
      className="rounded-xl shadow-lg object-cover mx-auto"
    />

    {/* Founder Text */}
    <div>
      <h2 className="text-3xl font-bold mb-4">Our Founder</h2>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Grandmaster Dr. Biju Nair</h3>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Grandmaster Dr. Biju Nair is an Indian martial artist and the visionary founder of the Black Pantherkan Association of Sports and Martial Arts. 
        He holds an esteemed <strong>8th Dan Black Belt</strong> and serves as a National Tournament Commission Member of the <strong>Karate India Organization (KIO)</strong>.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Born in Kerala, India, and later moving to Mumbai for education, Dr. Biju Nair was introduced to martial arts at the age of just 6. 
        Since then, his unwavering dedication to the art has led him to countless achievements and recognitions on national and international platforms.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Widely respected as one of the finest martial artists by senior personalities from the worlds of media and global sports, 
        he has devoted his life to empowering the next generation. Through years of perseverance, he established not only an academy but also his own recognized martial arts style.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed">
        Today, Grandmaster Dr. Biju Nair continues to inspire thousands across Maharashtra and India through his leadership, discipline, and legacy in martial arts.
      </p>
    </div>
  </div>
</section>



      {/* Divisions Section */}
      {/* Divisions Section with Images */}
<section className="bg-gray-100 py-16 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10">Our Divisions</h2>
    <div className="grid md:grid-cols-3 gap-8 text-center">
      
      {/* Karate Division */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <Image
          src="/gojulogo.jpg" // Replace with your actual image path
          alt="Goju Ryu Sports Karate Do Association"
          width={300}
          height={200}
          className="mx-auto rounded mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Goju Ryu Sports Karate Do Association</h3>
        <p className="text-gray-600">Established in 2015</p>
      </div>

      {/* Air Rifle Division */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <Image
          src="/riflelogo.png" // Replace with your actual image path
          alt="Black Pantherkan Air Rifle Association"
          width={300}
          height={200}
          className="mx-auto rounded mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Black Pantherkan Air Rifle Association</h3>
        <p className="text-gray-600">Established in 2016</p>
      </div>

      {/* Kickboxing Division */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <Image
          src="/kickboxinglogo.png" // Replace with your actual image path
          alt="Black Pantherkan Kickboxing Association"
          width={300}
          height={200}
          className="mx-auto rounded mb-4 object-cover"
        />
        <h3 className="text-xl font-semibold mb-2">Black Pantherkan Kickboxing Association</h3>
        <p className="text-gray-600">Established in 2016</p>
      </div>

    </div>
  </div>
</section>


      {/* Team & Expertise Section */}
     <section className="py-16 px-6 bg-white border-t border-gray-200">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Our Team & Expertise</h2>
    <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8">
      Black Pantherkan is powered by a team of highly qualified instructors with decades of combined experience 
      in martial arts and sports coaching. Our faculty includes certified national-level trainers, and a strong panel of 
      judges and referees affiliated with the <strong>Karate India Organization (KIO)</strong> and the <strong>World Pantherkan Karate Federation (WPKF)</strong>.
    </p>

    {/* Logos between paragraph and cards */}
  <div className="flex justify-center items-center gap-10 mb-10 flex-wrap">
  {/* KIO */}
  <div className="w-64 flex flex-col items-center text-center space-y-2">
    <Image
      src="/kio.png"
      alt="Karate India Organization"
      width={150}
      height={150}
      className="object-contain mb-1"
    />
    <h4 className="text-lg font-semibold text-gray-800">Karate India Organization (KIO)</h4>
    <p className="text-sm text-gray-600">
      Official national governing body for Karate in India, recognized by the Indian Olympic Association.
    </p>
  </div>

  {/* WPKF */}
  <div className="w-64 flex flex-col items-center text-center space-y-2">
    <Image
      src="/wpkf.png"
      alt="World Pantherkan Karate Federation"
      width={150}
      height={150}
      className="object-contain mb-1"
    />
    <h4 className="text-lg font-semibold text-gray-800">World Pantherkan Karate Federation (WPKF)</h4>
    <p className="text-sm text-gray-600">
      An international karate organization, Parent organization of Black Pantherkan Academy of Sports and Martial Arts.
    </p>
  </div>
</div>


    {/* Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-50 p-6 rounded-xl shadow text-left">
        <h3 className="text-xl font-semibold mb-2">Qualified Instructors</h3>
        <p className="text-gray-600">
          Led by Dr. Biju Nair, our instructors are nationally and internationally certified with deep technical knowledge.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl shadow text-left">
        <h3 className="text-xl font-semibold mb-2">KIO Certified Judges & Refrees</h3>
        <p className="text-gray-600">
          Judges and referees trained under the standards of Karate India Organization, representing professionalism and integrity.
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-xl shadow text-left">
        <h3 className="text-xl font-semibold mb-2">WPKF Referees & Judges</h3>
        <p className="text-gray-600">
         Huge team of highly trained judges and refrees under the standards of Word PantherKan Federtion.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Presence Section */}
     <section
  className="relative w-full min-h-[500px] flex items-center justify-center text-white bg-fixed bg-center bg-cover"
  style={{ backgroundImage: "url('/camp/summer2024/img10.JPG')" }} // 🔁 Replace this path
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/60 z-10" />

  {/* Content */}
  <div className="relative z-20 text-center px-6 py-20 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-4">Our Presence</h2>
    <p className="text-lg">
      We are proud to have a strong presence across India, especially in the Maharashtra region
      with over 20 active martial arts and sports classes. Black Pantherkan is not just an academy—it’s
      a movement empowering the next generation of champions.
    </p>
  </div>
</section>
      {/* What Sets Us Apart Section */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">What Sets Us Apart</h2>
    <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
      Black Pantherkan is not just a martial arts academy — it's a complete ecosystem for sports and personal development, 
      combining tradition, professionalism, and regional excellence.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
      
      {/* Regional Presence */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Strong Regional Presence</h3>
        <p className="text-gray-600">
          With over 20 training centers across Maharashtra and widespread influence in Maharashtra, 
          we are deeply rooted in the local community and growing every year.
        </p>
      </div>

      {/* Karate Blend */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Traditional & Sports Karate</h3>
        <p className="text-gray-600">
          Our training includes both classical Okinawan styles and modern competitive sports karate, 
          providing a balanced and authentic martial arts experience.
        </p>
      </div>

      {/* Rifle Range */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">Professional Rifle Shooting Range</h3>
        <p className="text-gray-600">
          Equipped with a fully professional air rifle shooting range, our students receive structured, 
          safety-first training in marksmanship and focus.
        </p>
      </div>

      {/* Kickboxing National Reach */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-2">National Kickboxing Presence</h3>
        <p className="text-gray-600">
          Our kickboxing athletes compete and win at the national level, representing 
          Black Pantherkan with pride, power, and professionalism.
        </p>
      </div>

    </div>
  </div>
</section>


<section className="bg-gray-100 py-8 px-4">
  <div className="max-w-4xl mx-auto text-center mb-6">
    <h2 className="text-3xl font-bold text-gray-800 mb-2">Annual Events</h2>
    <p className="text-base text-gray-600">
      Black Pantherkan hosts impactful events that shape discipline and excellence.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {/* Training & Grading Camp */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="w-full aspect-[4/3] relative">
        <img
          src="/bg3.webp"
          alt="Training & Grading Camp"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">Training & Grading Camp</h3>
        <p className="text-sm text-gray-600 mb-3">
          Annual promotion event with focused training and belt exams under certified instructors.
        </p>
        <a
          href="./camp"
          className="inline-block px-4 py-2 bg-black text-white rounded-full text-xs hover:bg-red-600 transition"
        >
          View More
        </a>
      </div>
    </div>

    {/* National Pantherkan Cup */}
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
      <div className="w-full aspect-[4/3] relative">
        <img
          src="/bg7.JPG"
          alt="National Pantherkan Cup"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">National Pantherkan Cup</h3>
        <p className="text-sm text-gray-600 mb-3">
          Prestigious national karate championship hosted annually with competitors from across India.
        </p>
        <a
          href="./competition"
          className="inline-block px-4 py-2 bg-black text-white rounded-full text-xs hover:bg-red-600 transition"
        >
          View More
        </a>
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
