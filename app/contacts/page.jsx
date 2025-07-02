'use client';

import { Mail, Phone, User, MessageSquare, MapPin, Calendar } from 'lucide-react';
import { useState , useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-br from-gray-100 to-gray-200 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              We'd love to hear from you. Fill out the form and we’ll get back to you shortly.
            </p>
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <form
            ref={formRef}
             className="space-y-5 text-sm sm:text-base"
            onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
          formRef.current?.reset();
          setTimeout(() => setFormSubmitted(false), 3000);
              }}
>
            

                {/* Input Field Template */}
                {[
                  { icon: <User />, type: "text", placeholder: "Student's Name" },
                  { icon: <Calendar />, type: "number", placeholder: "Student's Age", min: 1 },
                  { icon: <Phone />, type: "tel", placeholder: "Phone Number (Student or Parent)" },
                  { icon: <Mail />, type: "email", placeholder: "Email (Student or Parent)" },
                  { icon: <MapPin />, type: "text", placeholder: "Your Address" },
                  { icon: <MessageSquare />, type: "text", placeholder: "Subject" },
                ].map(({ icon, type, placeholder, min }, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-3 top-3.5 text-gray-600">{icon}</div>
                    <input
                      type={type}
                      placeholder={placeholder}
                      min={min}
                     className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-800 sm:text-gray-900 placeholder:text-gray-600 sm:placeholder:text-gray-700 focus-visible:outline-none focus:ring-2 focus:ring-red-500"

                    />
                  </div>
                ))}

                {/* Message */}
                <textarea
                  placeholder="Your Message"
                  className="w-full px-4 py-3 border rounded-lg h-32 focus-visible:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>

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
            <div className="space-y-6 text-gray-700 text-sm sm:text-base">
              <div>
                <h3 className="text-2xl font-bold mb-2">Black Pantherkan Academy</h3>
                <p className="text-gray-600">
                  Reach out to us at our headquarters or send us a message using the form.
                </p>
              </div>

              <div className="space-y-2">
                <p>📍 <strong>Address:</strong> Vasai (W), Maharashtra, India</p>
                <p>📞 <strong>Phone:</strong>{' '}
                  <a href="tel:+919970616339" className="text-red-600 hover:underline">
                    +91 99706 16339
                  </a>
                </p>
                <p>📧 <strong>Email:</strong>{' '}
                  <a href="mailto:blackpantherkan@gmail.com" className="text-red-600 hover:underline">
                    blackpantherkan@gmail.com
                  </a>
                </p>
                <p>💬{' '}
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
         {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
  <div className="container mx-auto px-4">
    <p className="text-sm">&copy; {new Date().getFullYear()} Black Pantherkan Academy. All rights reserved.</p>
  </div>
</footer>
{formSubmitted && (
  <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-2xl max-w-md w-full text-center shadow-2xl animate-fadeIn">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
      <p className="text-gray-700 mb-2">
        Thank you for contacting us. We'll reach out to you soon.
      </p>
      <p className="text-gray-700 mb-6">
        For urgent inquiries, feel free to call us at:
        <br />
        <strong className="text-red-600">+91 99706 16339</strong>
      </p>
      <button
        onClick={() => setFormSubmitted(false)}
        className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300"
      >
        Close
      </button>
    </div>
  </div>
)}

    </div>
  );
}

// This code defines a contact page for a martial arts academy using React and Tailwind CSS.