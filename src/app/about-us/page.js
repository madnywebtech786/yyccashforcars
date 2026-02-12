import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutUsSection from "../sections/About";
import ScrapCarsSection from "../sections/Scrape";
import GallerySection from "../sections/Gallery";
import StatsSection from "../sections/Stats";
import TestimonialSection from "../sections/Testimonial";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "About Us - YYC Cash for Cars",
  description:
    "Learn about YYC Cash for Cars, Calgary's trusted buyer for junk, scrap, and used vehicles with fast quotes, free towing, and same-day payment.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us - YYC Cash for Cars",
    description:
      "Learn about YYC Cash for Cars, Calgary's trusted buyer for junk, scrap, and used vehicles with fast quotes, free towing, and same-day payment.",
    images: [getOgImageForPath("about-us")],
  },
  twitter: {
    title: "About Us - YYC Cash for Cars",
    description:
      "Learn about YYC Cash for Cars, Calgary's trusted buyer for junk, scrap, and used vehicles with fast quotes, free towing, and same-day payment.",
    images: [getOgImageForPath("about-us")],
  },
};

export default function page() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb name={"About Us"} titleAs="h1" />
      <AboutUsSection />
      <ScrapCarsSection />
      <StatsSection />
      <GallerySection />
      <TestimonialSection />
    </div>
  );
}
