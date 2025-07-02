'use client';

import { useState } from 'react';
import ProgramCard from './ProgramCard';
import ProgramModal from './ProgramModal';

const programs = [
  {
    title: 'Karate',
    desc: `Our team comprises numerous expert senior instructors, each bringing years of experience and deep mastery in both the traditional Goju-Ryu style of Karate and competitive sports. As an ISO-certified organization, we are proud to be affiliated with the Karate India Organization (KIO) and the Goju-Ryu Karate Association of India. We operate multiple training centers across Vasai and Naigaon, making high-quality martial arts education easily accessible to students throughout the region`,
    image: '/karate2.jpeg',
    logo: '/gojulogo.jpg',
    className: 'Goju-Ryu Sports Karate-Do Association',  
},
   {
    title: 'Rifle Shooting',
    desc: `Our rifle shooting class is designed to teach discipline, focus, and precision through structured firearm training. Students learn about firearm safety, proper handling, aiming techniques, and responsible shooting practices. Whether you're a beginner or looking to improve your skills, the class combines theory with hands-on practice under the supervision of certified instructors. It’s a great way to build confidence, sharpen concentration, and develop a strong sense of responsibility while enjoying a challenging and rewarding sport.`,
    image: '/rifle.jpeg',
    logo: '/riflelogo.png',
    className: 'Black Pantherkan Air Rifle Association',  
},
   {
    title: 'Kick Boxing',
    desc: `Our kickboxing classes are high-energy workouts that blend martial arts techniques with fast-paced cardio. Perfect for all fitness levels, these sessions improve strength, endurance, and agility while teaching practical striking and self-defense skills. With expert guidance, students build confidence, burn calories, and relieve stress in a supportive and empowering environment.`,
    image: '/kb.webp',
    logo: '/gojulogo.jpg',
    className: 'Black Pantherkan Kick Boxing Association',  
},
  {
    title: 'Personal Training',
    desc: `Personal karate training offers a customized learning experience focused on individual progress and mastery. Whether you're a beginner or an advanced student, one-on-one sessions help refine techniques, improve discipline, and boost confidence. Guided by experienced instructors, students develop both physical strength and mental resilience through traditional karate principles.`,
    image: '/PT.jpeg',
    logo: '/logo.jpeg',
    className: 'Black Pantherkan Academy Of Sports And Martial Arts',  
},
{
    title: 'Dance',
    desc: `Our classical dance classes offer a deep and graceful journey into traditional dance forms rooted in rich cultural heritage. Students learn posture, expression (abhinaya), rhythm (tala), and intricate movements under the guidance of experienced instructors. With a focus on discipline, storytelling, and artistic expression, these classes help build strong foundations in classical styles such as Bharatanatyam, Kathak, or Odissi. Ideal for all age groups, the classes foster cultural appreciation, body control, and inner confidence.`,
    image: '/dance.jpg',
    logo: '/Dancelogo.jpg',
    className: 'SAADHANA NRITHYALAYA',  
},
{
    title: 'Self Defense',
    desc: `Our self-defence seminars provide practical skills and real-world strategies to stay safe in everyday situations. These sessions are designed for all age groups and focus on awareness, quick decision-making, and simple yet effective techniques. Taught by qualified professionals, the seminars aim to empower participants with the confidence to protect themselves and others.`,
    image: '/sd.jpeg',
    logo: '/logo.jpeg',
    className: 'Black Pantherkan Academy Of Sports And Martial Arts',  
},
  // Add more programs as needed
];

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(null);

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Choose <em className="text-red-500 not-italic">Program</em></h2>
        <p className="text-center text-gray-600 mb-12">
          Click on a program to learn more.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              program={program}
              onClick={() => setActiveProgram(program)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProgram && (
        <ProgramModal program={activeProgram} onClose={() => setActiveProgram(null)} />
      )}
    </section>
  );
}
