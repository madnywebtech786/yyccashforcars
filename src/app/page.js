import HeroSection from "./sections/Hero";
import AboutUsSection from "./sections/About";
import VehicleTypesSection from "./sections/VehicleTypes";
import AreasWeServeSection from "./sections/AreasWeServe";
import ScrapCarsSection from "./sections/Scrape";
import Services from "./sections/Services";
import ProcessSection from "./sections/Process";
import StatsSection from "./sections/Stats";
import GallerySection from "./sections/Gallery";
import FAQSection from "./sections/FAQ";
import TestimonialSection from "./sections/Testimonial";
import WorkingAreasSection from "./sections/WorkingAreas";
import WhatWeTowSection from "./sections/WhatTow";
import {getOgImageForPath} from "@/lib/seo";

export const metadata = {
    alternates: {
        canonical: "/",
    },
    openGraph: {
        images: [getOgImageForPath("")],
    },
    twitter: {
        images: [getOgImageForPath("")],
    },
};

export default function Home() {
    return (
        <div className="bg-white dark:bg-white">
            <HeroSection/>
            <AboutUsSection/>
            <TestimonialSection/>
            <VehicleTypesSection/>
            <ScrapCarsSection/>
            <Services/>
            <WhatWeTowSection/>
            <ProcessSection/>
            <StatsSection/>
            <GallerySection/>
            <WorkingAreasSection/>
            <AreasWeServeSection/>
            <FAQSection/>
        </div>
    );
}
