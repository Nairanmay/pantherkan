'use client';

import {
  Mail,
  Phone,
  User,
  MessageSquare,
  MapPin,
  Calendar,
} from 'lucide-react';
import { useState, useRef } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      age: form.age.value,
      phone: form.phone.value,
      email: form.email.value,
      address: form.address.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("https://my-backend-hztu.onrender.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Server Error");

      await res.json();
      form.reset();
      setFormSubmitted(true);
    } catch (err) {
      alert("❌ Failed to send message.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Contact Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              We'd love to hear from you. Fill out the form and we’ll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Form Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg relative">
              <form ref={formRef} className="space-y-5 text-sm sm:text-base" onSubmit={handleSubmit}>
                {/* Inputs */}
                {[
                  { icon: <User />, type: "text", placeholder: "Student's Name", name: "name" },
                  { icon: <Calendar />, type: "number", placeholder: "Student's Age", name: "age", min: 1 },
                  { icon: <Phone />, type: "tel", placeholder: "Phone Number (Student or Parent)", name: "phone" },
                  { icon: <Mail />, type: "email", placeholder: "Email (Student or Parent)", name: "email" },
                  { icon: <MapPin />, type: "text", placeholder: "Your Address", name: "address" },
                  { icon: <MessageSquare />, type: "text", placeholder: "Subject", name: "subject" },
                ].map(({ icon, type, placeholder, name, min }, i) => (
                  <div key={i} className="relative">
                    <div className="absolute left-3 top-3.5 text-gray-600">{icon}</div>
                    <input
                      type={type}
                      name={name}
                      min={min}
                      placeholder={placeholder}
                      required
                      className="w-full pl-10 pr-4 py-3 border rounded-lg text-gray-800 placeholder:text-gray-600 focus-visible:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                ))}

                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border rounded-lg h-32 focus-visible:outline-none focus:ring-2 focus:ring-red-500"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300 disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-6 text-gray-700 text-sm sm:text-base">
              <div>
                <h3 className="text-2xl font-bold mb-2">Black Pantherkan Academy</h3>
                <p className="text-gray-600">Reach out to us at our headquarters or use the form.</p>
              </div>
              <div className="space-y-2">
                <p>📍 <strong>Address:</strong> Vasai (W), Maharashtra, India</p>
                <p>📞 <strong>Phone:</strong> <a href="tel:+919970616339" className="text-red-600 hover:underline">+91 99706 16339</a></p>
                <p>📧 <strong>Email:</strong> <a href="mailto:blackpantherkan@gmail.com" className="text-red-600 hover:underline">blackpantherkan@gmail.com</a></p>
                <p>💬 <a href="https://wa.me/919970616339" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Chat on WhatsApp</a></p>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.553015837022!2d72.84393131476554!3d19.34519298693402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ae6455555555%3A0x5e96e887393abc6e!2sBlack%20Pantherkan%20karate%2C%20kick%20boxing%20and%20Rifle%20shooting%20classes!5e0!3m2!1sen!2sin!4v1719323740000!5m2!1sen!2sin
"
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

      {/* Spinner Overlay */}
      {loading && (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex items-center justify-center">
          <Image
            src="/logo.jpeg"
            alt="Loading"
            width={60}
            height={60}
            className="animate-spin"
          />
        </div>
      )}

      {/* Thank You Popup */}
      {formSubmitted && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4">
          <div className="bg-white p-6 rounded-2xl max-w-sm w-full text-center shadow-lg animate-fadeIn">
            <Image src="/logo.jpeg" alt="Logo" width={60} height={60} className="mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
            <p className="text-gray-700">Your message has been successfully sent.</p>
            <p className="text-gray-700 mt-1 mb-4">
              We’ll be in touch shortly.
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
