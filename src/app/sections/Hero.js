import Link from "next/link";
import Image from "next/image";
import ContactForm from "./Contact";
import "./styles/Hero.css";
const HeroSection = () => {
  return (
    <div className="min-h-screen p-4 py-16 md:p-10 lg:p-10 heroBg relative overflow-hidden">
      <Image
        src="/images/hero.webp"
        alt="Cash for cars Calgary"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="heroBgImage"
      />
      <div className="heroBgOverlay" aria-hidden="true" />
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium ">
                Cash for Junk Cars Calgary
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ">
                Get Top Cash for Cars Calgary - We Come to You
              </h1>

              <p className="text-lg text-white leading-relaxed">
                Locally owned and operated in Calgary. We buy junk cars, scrap
                vehicles, accident write-offs, and anything in between. $300 to
                $10,000 paid the same day - free towing included.
              </p>
            </div>
            <p className="text-white mt-3">
              Serving Calgary, Airdrie, Cochrane, Okotoks, Chestermere,
              Strathmore, High River, Rocky View County, and nearby areas.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="/contact">
                <button className="px-4 md:px-8 py-3 md:py-4 bg-white text-primary font-bold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Get My Free Cash Offer
                </button>
              </Link>
              <Link href="tel:+15877009806">
                <button className="px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Call 587-700-9806
                </button>
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:pl-8">
            <ContactForm onSide={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
