import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../sections/Contact";
import { getOgImageForPath } from "@/lib/seo";

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
    <div className="dark:bg-white ">
      <Breadcrumb name={"Contact Us"} titleAs="h1" />
      <div className="p-4 py-16 md:p-10 lg:p-20">
        <ContactForm />
      </div>
    </div>
  );
}
