import HeroSection from "./sections/Hero";
import AboutUsSection from "./sections/About";
import PriceTransparencySection from "./sections/PriceTransparency";
import VehicleTypesSection from "./sections/VehicleTypes";
import AreasWeServeSection from "./sections/AreasWeServe";
import Services from "./sections/Services";
import ProcessSection from "./sections/Process";
import FAQSection from "./sections/FAQ";
import WhyChooseSection from "./sections/WhyChoose";
import TestimonialSection from "./sections/Testimonial";
import GallerySection from "./sections/Gallery";
import WorkingAreasSection from "./sections/WorkingAreas";
import {getOgImageForPath} from "@/lib/seo";

export const metadata = {
    title: "Cash for Cars Calgary | $300-$10,000 | YYC Cash",
    description:
        "Top cash for junk & scrap cars in Calgary. Free towing, same-day pickup, AMVIC-compliant. Paid cash or e-Transfer on the spot. Call 587-700-9806.",
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
            <PriceTransparencySection/>
            <Services/>
            <ProcessSection/>
            <VehicleTypesSection/>
            <AreasWeServeSection/>
            <WhyChooseSection/>
            <GallerySection/>
            <WorkingAreasSection/>
            <FAQSection/>
        </div>
    );
}
