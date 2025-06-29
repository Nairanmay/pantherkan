'use client';
import { div } from 'framer-motion/client';
import { Mail, Phone, User, MessageSquare, MapPin, Calendar } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
    const [managementOpen, setManagementOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
  return (

    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
                     

      {/* Contact Section */}
    <section id="contact" className="bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            We'd love to hear from you. Fill out the form and we’ll get back to you shortly.
          </p>
        </div>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form>
              {/* Name */}
              <div className="mb-5 relative">
                <User className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Students Name"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
                   
                   {/* Age */}
              <div className="mb-5 relative">
                <Calendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  placeholder="Students Age"
                  min="1"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

                {/* Phone Number */}
              <div className="mb-5 relative">
                <Phone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number(Students or Parents)"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

               {/* Email */}
              <div className="mb-5 relative">
                <Mail className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email(Students or Parents)"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Address */}
              <div className="mb-5 relative">
                <MapPin className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Address"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Subject */}
              <div className="mb-5 relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Static Info */}
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-2xl font-bold mb-2">Black Pantherkan Academy</h3>
              <p className="text-gray-600">
                Reach out to us at our headquarters or send us a message using the form.
              </p>
            </div>
            <div className="space-y-2">
              <p>📍 <strong>Address:</strong> Vasai (W), Maharashtra, India</p>
              <p>
                📞 <strong>Phone:</strong>{' '}
                <a href="tel:+919970616339" className="text-red-600 hover:underline">
                  +91 99706 16339
                </a>
              </p>
              <p>
                📧 <strong>Email:</strong>{' '}
                <a href="mailto:blackpantherkan@gmail.com" className="text-red-600 hover:underline">
                  blackpantherkan@gmail.com
                </a>
              </p>
              <p>
                💬{' '}
                <a
                  href="https://wa.me/919970616339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>

            {/* Embedded Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.553015837022!2d72.84393131476554!3d19.34519298693402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae4de714943b%3A0xdde28067cf527857!2sBlack%20Pantherkan%20Academy%20Of%20Sports%20And%20Martial%20Arts!5e0!3m2!1sen!2sin!4v1587660121091!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-lg border-0 shadow"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
// This code defines a contact page for a martial arts academy using React and Tailwind CSS.