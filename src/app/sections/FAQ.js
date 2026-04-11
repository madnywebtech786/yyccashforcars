"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How much will I get for my car?",
      answer:
        "Between $300 and $10,000 depending on the year, make, model, condition, and current Alberta scrap market. A running 2016 Toyota Corolla might bring $2,500-$4,000. A 2005 Chevy Silverado with a bad engine might bring $600-$1,200. The only real answer comes after you tell us about your specific vehicle - call us and we will give you a number in minutes.",
    },
    {
      question: "Do I really pay nothing for towing?",
      answer:
        "Nothing. Free towing is on every pickup across all of Calgary and surrounding communities. No tow fee gets added later, nothing is deducted from your offer at the door. The number we quote is the number you receive.",
    },
    {
      question: "Can I sell a car without a title in Alberta?",
      answer:
        "In many cases yes. Alberta has provisions for junk and scrap vehicles sold without a standard title. Call us, tell us your situation, and we will walk you through what is needed. Bring your photo ID and whatever ownership documents you have.",
    },
    {
      question: "Do you buy vehicles with a lien?",
      answer:
        "Yes. It adds a step - we need to contact the lienholder and arrange a proper discharge - but it is a process we handle regularly. Call us and we will explain exactly what is involved for your situation.",
    },
    {
      question: "What paperwork do I need?",
      answer:
        "Your Alberta vehicle registration and a valid photo ID. If you do not have registration, call first. We deal with documentation gaps often and can usually still complete the purchase. We handle the Alberta Registry title transfer ourselves at no extra cost.",
    },
    {
      question: "Can I sell a hail-damaged car to you?",
      answer:
        "Yes and we see a lot of them. Calgary gets hit hard by hail in June and July - some years SW and SE Calgary take serious damage across thousands of vehicles. Whether yours was a partial claim or a full write-off, we will make you a fair offer.",
    },
    {
      question: "Do you buy trucks and commercial vehicles?",
      answer:
        "Yes. We buy pickup trucks, cargo vans, service vehicles, and heavy-duty work trucks. If you have a fleet to decommission, call us directly for multi-vehicle pricing.",
    },
    {
      question: "What happens to my car after pickup?",
      answer:
        "It goes to a certified Alberta recycling facility. Fluids are drained and disposed of per Alberta Environment requirements. Reusable parts are pulled and resold. The remaining steel and metals go to smelting. We follow Alberta Recycling Management Authority (ARMA) guidelines on every vehicle.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-4 py-16 md:p-10 lg:p-10 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            {" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequently Asked
            </span>{" "}
            Questions
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Questions Calgary sellers ask us most before booking free pickup.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-secondary rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "shadow-lg" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-[#4d88a9]" />
                  <span className="text-xl font-semibold text-primary">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#bd3747]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-gray-50">
                  <p className="text-black leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
