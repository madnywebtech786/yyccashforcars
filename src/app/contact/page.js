import React from "react";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../sections/Contact";
import { getOgImageForPath } from "@/lib/seo";
import {
  BadgeCheck,
  Clock3,
  MapPin,
  MessageSquareText,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "Contact Us - YYC Cash for Cars",
  description:
    "Contact YYC Cash for Cars for instant quotes, free towing, and same-day cash offers in Calgary and nearby areas.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us - YYC Cash for Cars",
    description:
      "Contact YYC Cash for Cars for instant quotes, free towing, and same-day cash offers in Calgary and nearby areas.",
    images: [getOgImageForPath("contact")],
  },
  twitter: {
    title: "Contact Us - YYC Cash for Cars",
    description:
      "Contact YYC Cash for Cars for instant quotes, free towing, and same-day cash offers in Calgary and nearby areas.",
    images: [getOgImageForPath("contact")],
  },
};

export default function page() {
  return (
    <div className="bg-white dark:bg-white">
      <Breadcrumb
        name={"Contact Us"}
        titleAs="h1"
        subtitle="Fast quotes, free pickup, and a cleaner way to sell your unwanted vehicle."
      />

      <section className="relative overflow-hidden bg-white px-4 py-16 sm:px-8 md:px-10 lg:px-20">
        <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(77,136,169,0.18),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(189,55,71,0.14),_transparent_38%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-[#eef8ff] via-white to-[#fff4f4] p-8 shadow-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                <BadgeCheck size={14} />
                Quick Response Team
              </div>
              <h2 className="max-w-xl text-4xl font-bold leading-tight text-black">
                Talk to a real buyer and get a usable offer without the usual runaround.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
                We help Calgary and nearby Alberta vehicle owners turn unwanted cars,
                trucks, vans, and scrap vehicles into cash with simple scheduling,
                free towing, and clear communication.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Clock3, label: "Fast Quotes", text: "Often within minutes" },
                  { icon: Truck, label: "Free Pickup", text: "No separate towing stress" },
                  { icon: ShieldCheck, label: "Straight Process", text: "Clear steps, no guesswork" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white bg-white/90 p-4 shadow-sm"
                  >
                    <item.icon className="mb-3 text-primary" size={20} />
                    <p className="text-sm font-semibold text-black">{item.label}</p>
                    <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+15877009806"
                className="group rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                    <PhoneCall size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Call Direct
                    </p>
                    <p className="mt-1 text-2xl font-bold text-black">587-700-9806</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Best for fast quotes and same-day scheduling.
                    </p>
                  </div>
                </div>
              </a>

              <Link
                href="/locations"
                className="group rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-secondary/10 p-3 text-secondary">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                      Coverage Area
                    </p>
                    <p className="mt-1 text-xl font-bold text-black">Calgary + Nearby Towns</p>
                    <p className="mt-2 text-sm text-gray-600">
                      Same Day Pickup with Free Towing
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="rounded-[1.75rem] border border-gray-100 bg-[#101820] p-7 text-white shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <MessageSquareText size={20} />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-white/60">
                    What To Send
                  </p>
                  <h3 className="text-2xl font-bold">The faster quote checklist</h3>
                </div>
              </div>
              <div className="mt-6 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
                {[
                  "Year, make, and model",
                  "Running or non-running condition",
                  "Damage, rust, or missing parts",
                  "Your city or pickup location",
                  "Why you want to sell it",
                  "Photos if available",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:pt-8">
            <div className="rounded-[2rem] border border-gray-100 bg-white p-3 shadow-2xl">
              <div className="rounded-[1.6rem] bg-gradient-to-br from-[#f8fcff] via-white to-[#fff7f8] p-4 md:p-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fbfc] px-4 pb-16 sm:px-8 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            {
              title: "Fast Contact",
              body: "Call or submit the form and we will review the vehicle details quickly.",
            },
            {
              title: "Fair Evaluation",
              body: "Offers are based on condition, parts value, scrap value, and pickup logistics.",
            },
            {
              title: "Easy Removal",
              body: "If the offer works, we arrange pickup and help get the vehicle off your property.",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-gray-100 bg-white p-6 shadow-lg"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
