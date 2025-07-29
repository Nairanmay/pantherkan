"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";

// ✅ Dynamically load Spline for client only
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full bg-gray-100">
      <p className="text-gray-500">Loading 3D Model...</p>
    </div>
  ),
});

const faqs = [
  { question: "What is Black PantherKan Academy?", answer: "Black PantherKan Academy..." },
  { question: "What programs do you offer?", answer: "We offer Karate, Kickboxing..." },
  // ✅ Add the rest of your FAQs here
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="relative flex flex-col md:flex-row w-screen min-h-screen overflow-hidden">
      {/* ✅ FAQ Section */}
      <section className="relative z-10 w-full md:w-1/2 pt-32 px-6 sm:px-8 md:px-16">
        <h1 className="font-merich text-3xl md:text-4xl mb-6 md:mb-10 text-gray-900 drop-shadow-lg">
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
                className="font-aleo w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-900"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="font-crimson px-4 pb-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Spline 3D Model Section */}
      <div className="hidden md:block absolute top-0 right-[-15%] w-[120%] h-screen z-0">
        <Spline scene="https://prod.spline.design/Xhg3DvPyyHXk0P32/scene.splinecode" />
      </div>
    </div>
  );
}
