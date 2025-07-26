"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically load Spline only for client
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <p className="text-gray-500">Loading 3D Model...</p>
    </div>
  ),
});

const faqs = [
  {
    question: "What is Black PantherKan Academy?",
    answer:
      "Black PantherKan Academy of Sports & Martial Arts is a leading training center focusing on martial arts,Kick-Boxing, Rifle-Shooting, self-defense, and fitness programs for all age groups.",
  },
  {
    question: "What programs do you offer?",
    answer:
      "We offer Karate, Kickboxing, Rifle Shooting, and Self-defense programs tailored for kids, teens, and adults.",
  },
  {
    question: "How can I enroll in a class?",
    answer:
      "You can enroll by visiting our Registation from and filling the form, or call us directly at +91-9970616339.",
  },
  {
    question: "Do you provide trial classes?",
    answer: "No, we do not offer a free trial class for new students.",
  },
  {
    question: "Where are you located?",
    answer:
      "We are located in Vasai & Naigoan, and our full address is listed on the Contact page.",
  },
  {
    question: "What age is required and what is the age limit?",
    answer:
      "We welcome students starting from 4 years old. There is no strict upper age limit as our programs are designed for all age groups, including adults.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="relative flex flex-col md:flex-row w-screen min-h-screen overflow-hidden">
      {/* FAQ Section */}
    <section
  className="
    relative z-10 
    w-full md:w-1/2 
    pt-32 sm:pt-40 md:pt-16 
    px-6 sm:px-8 md:px-16 
     md:bg-transparent
  "
>
        <h1 className=" font-merich text-3xl md:text-4xl  mb-6 md:mb-10 text-gray-900 drop-shadow-lg pt-2 ">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md bg-white/90 hover:bg-white transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className=" font-aleo w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-900"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className=" font-crimson px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Spline Model - Pushed Right */}
      <div className="hidden md:block absolute top-0 right-[-15%] w-[120%] h-screen z-0">
        <Spline scene="https://prod.spline.design/Xhg3DvPyyHXk0P32/scene.splinecode" />
      </div>
    </div>
  );
}
