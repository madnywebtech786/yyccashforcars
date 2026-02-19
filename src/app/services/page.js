import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeDollarSign,
  CircleCheck,
  Recycle,
  Truck,
  Wallet,
} from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "Services - YYC Cash for Cars",
  description:
    "Explore YYC Cash for Cars services in Calgary including junk car removal, scrap car removal, free towing, eco-friendly recycling, and top cash offers.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services - YYC Cash for Cars",
    description:
      "Explore YYC Cash for Cars services in Calgary including junk car removal, scrap car removal, free towing, eco-friendly recycling, and top cash offers.",
    images: [getOgImageForPath("services")],
  },
  twitter: {
    title: "Services - YYC Cash for Cars",
    description:
      "Explore YYC Cash for Cars services in Calgary including junk car removal, scrap car removal, free towing, eco-friendly recycling, and top cash offers.",
    images: [getOgImageForPath("services")],
  },
};

const services = [
  {
    id: "junk-car-removal",
    title: "Junk Car Removal",
    tagline: null,
    description:
      "Is your vehicle taking up valuable space in your garage or driveway? Consider junk car removal! Whether it is an old, damaged, or completely non-functional vehicle that takes up unnecessary room in either location, our junk car removal service in Calgary provides quick, simple solutions. We offer:",
    bullets: [
      "Free, no-Obligation quotes: Just provide some basic details about your car, and we'll offer an instant cash offer.",
      "No Towing Fees: No hidden charges or additional expenses apply when we pick up your junk car for free! No hidden fees either!",
      "Same-day service: In most instances, we can arrange a quick pickup service on the same day.",
    ],
    image: "/images/car-junk.webp",
    imageAlt: "Junk car removal service in Calgary",
    cta: {
      label: "Read More About Junk Car Removal",
      href: "/services/cash-for-junk-cars",
    },
    icon: Truck,
  },
  {
    id: "scrap-car-removal",
    title: "Scrap Car Removal",
    tagline: null,
    description:
      "Is Your Car No Longer Reparable Or Has Been Becoming A Burden To You? Our Scrap Car Removal service in Calgary and the surrounding areas may be just what's necessary - let us remove it for you today. Here's why:",
    bullets: [
      "Top Cash Offers: No matter the condition of your vehicle, we provide competitive cash offers.",
      "Environmentally Friendly Disposal: We recycle scrap cars in an environmentally friendly manner, minimizing waste and pollution.",
      "Fast and Efficient: Our professional team makes removal easy with same-day or next-day services available.",
    ],
    image: "/images/tow-scrap.webp",
    imageAlt: "Scrap car removal with free towing",
    cta: {
      label: "Read More About Scrap Car Removal",
      href: "/services/scrap-car-removal",
    },
    icon: Truck,
  },
  {
    id: "free-towing",
    title: "Free Towing",
    tagline: null,
    description:
      "One of the primary barriers to disposing of an old or damaged car can be the cost of towing, which can add extra complications when trying to dispose of it. At YYC Cash For Cars, we make things simpler by offering free towing for junk and scrap cars of any sort; whether your car is in the garage, driveway, or off-road - no matter where it may be. Our friendly representatives will come directly to your location and remove your vehicle without charging a towing fee!",
    bullets: [
      "No Hidden Costs: Our towing service includes towing without additional costs.",
      "Professional Towing Team: Our towing team takes great care in safely towing away vehicles in any condition.",
      "Convenient Pick-Up Locations: We can collect your car from wherever it's situated - even remote or difficult-to-reach spots!",
    ],
    image: "/images/hero.webp",
    imageAlt: "Free towing for junk and scrap cars",
    cta: {
      label: "Request Free Towing",
      href: "/contact",
    },
    icon: Truck,
  },
  {
    id: "junk-car-recycling",
    title: "Junk Car Recycling",
    tagline: null,
    description:
      "At YYC Cash For Cars, we recognize the significance of environmental responsibility. Our junk car recycling service makes disposing of old or non-working vehicles in an eco-friendly and sustainable manner simple and stress-free. What sets us apart:",
    bullets: [
      "Environmental Impact: Old vehicles contain hazardous materials that can have adverse environmental consequences. We ensure all recycled cars are recycled properly, disposing of toxic substances safely.",
      "Reusing Car Parts: At our salvage yard, we salvage valuable car parts that can be reused or resold - contributing to a circular economy model.",
      "Zero Waste: Our goal is to minimize the environmental footprint of junk cars by recycling as much of the vehicle as possible.",
    ],
    image: "/images/scrap.webp",
    imageAlt: "Eco-friendly junk car recycling",
    cta: {
      label: "Ask About Recycling",
      href: "/contact",
    },
    icon: Recycle,
  },
  {
    id: "top-cash-for-cars",
    title: "Top Cash for Cars",
    tagline: null,
    description:
      "Do You Want Top Dollar for Your Used or Damaged Vehicle? With Our Top Cash for Cars service, we guarantee the most attractive payout on the market - regardless of whether your car runs or not. Our cash offers reflect its true market value!",
    bullets: [
      "Instant Cash Offers: Take advantage of instantaneous cash offers when we pick up your car! Get paid immediately in cash.",
      "Competitive Rates: Our experts assess the value of your car based on current market prices to make sure you receive the maximum offer.",
      "Quick and Simple: Our experts handle all the paperwork and logistics to get you your cash promptly.",
    ],
    image: "/images/car-about.webp",
    imageAlt: "Top cash paid for used cars",
    cta: {
      label: "Get a Cash Offer",
      href: "/contact",
    },
    icon: BadgeDollarSign,
  },
];

const reasons = [
  {
    title: "Customer-centered service",
    description:
      "our primary concern is providing prompt, professional assistance that meets your convenience and satisfaction every time.",
  },
  {
    title: "Experienced Team",
    description:
      "Our team has years of experience with junk and scrap car removal, towing, and recycling.",
  },
  {
    title: "No Hidden Fees",
    description:
      "Everything from your initial quote to final payment will be fully transparent - there won't be any unexpected extra charges that are hidden away in a corner somewhere.",
  },
  {
    title: "Eco-Friendly Recycling Practices",
    description:
      "At our vehicle recycling facility, we take great care to reduce environmental impact by recycling vehicles responsibly.",
  },
  {
    title: "Fast and Reliable Service",
    description:
      "At our company, we pride ourselves on offering fast service with same-day or next-day options available.",
  },
];

export default function ServicesPage() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb
        name="Our Services"
        subtitle="Our Top Rated Junk & Scrap Car Removal Services, Free Towing & More"
        titleAs="h1"
      />

      <section className="px-4 py-16 md:px-10 lg:px-20 bg-white">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative order-1">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-3xl bg-primary/10" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-3xl bg-secondary/10" />
            <Image
              src="/images/hero.webp"
              alt="YYC Cash for Cars service team"
              width={800}
              height={600}
              className="relative z-10 w-full rounded-3xl shadow-xl object-cover"
            />
          </div>
          <div className="order-2">
            <p className="text-sm font-semibold text-secondary uppercase tracking-wide">
              YYC Cash for Cars
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-black mt-2">
              Our Top Rated Junk & Scrap Car Removal Services, Free Towing &
              More
            </h2>
            <p className="text-gray-700 mt-5 leading-relaxed">
              At YYC Cash For Cars, our comprehensive vehicle disposal and recycling
              services aim to make disposing of your old car quick, easy, and
              profitable. No matter if it's just junk sitting in your driveway
              or no longer functioning as intended. Or whether you simply want
              to sell it for cash - no matter the case may be we have everything
              covered for you - including eco-friendly disposal methods so your
              old car is responsibly recycled or sold off.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {services.map((service) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-10 lg:px-20 bg-white">
        <div className="grid gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-10 items-center rounded-3xl border border-gray-100 shadow-lg p-6 lg:p-10 ${
                  isEven ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className={isEven ? "order-1" : "order-1 lg:order-2"}>
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-black">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  {service.tagline && (
                    <p className="text-gray-700 mt-4">{service.tagline}</p>
                  )}
                  <p className="text-gray-700 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex gap-2 text-gray-700">
                        <CircleCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.id === "junk-car-removal" && (
                    <p className="text-gray-700 mt-5 leading-relaxed">
                      By choosing us for junk car removal, you not only free up
                      your space in your garage but you also receive payment for
                      what may have seemed worthless to you. It's an effortless
                      and hassle-free way to rid yourself of an unneeded vehicle
                      while making extra cash!
                    </p>
                  )}
                  {service.id === "scrap-car-removal" && (
                    <p className="text-gray-700 mt-5 leading-relaxed">
                      Get rid of that old vehicle while making room for
                      something better - and even make money while doing it!
                      Our scrap car removal service ensures a stress-free
                      process from start to finish.
                    </p>
                  )}
                  {service.id === "free-towing" && (
                    <p className="text-gray-700 mt-5 leading-relaxed">
                      By opting for our free towing service, you can have peace
                      of mind knowing that there won't be any unexpected charges
                      for car removal - our professional crew will take care of
                      everything quickly and without charging you anything extra
                      for their services! Your car will be removed quickly
                      without incurring a penny for towing fees!
                    </p>
                  )}
                  {service.id === "junk-car-recycling" && (
                    <p className="text-gray-700 mt-5 leading-relaxed">
                      By choosing our junk car recycling services, you are
                      helping create a cleaner environment while getting rid of
                      your old vehicle in an eco-friendly fashion. Request
                      recycling support now.
                    </p>
                  )}
                  {service.id === "top-cash-for-cars" && (
                    <p className="text-gray-700 mt-5 leading-relaxed">
                      Are you looking to make the most of your old car? Our top
                      cash for cars service ensures that when selling it back to
                      us, not only can you receive free towing but you also turn
                      it into cash! It is an efficient and straightforward way
                      to turn unwanted automobiles into cash quickly.
                    </p>
                  )}
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                    >
                      Get a Free Quote
                    </Link>
                    <Link
                      href={service.cta.href}
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors"
                    >
                      {service.cta.label}
                    </Link>
                  </div>
                </div>

                <div className={isEven ? "order-2" : "order-2 lg:order-1"}>
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={700}
                    height={500}
                    className="w-full rounded-3xl object-cover shadow-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-4 py-16 md:px-10 lg:px-20 bg-slate-50">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <h2 className="text-4xl font-bold text-black">
              Why choose YYC Cash For Cars?
            </h2>
            <p className="text-gray-700 mt-4 leading-relaxed">
              <Link href="/contact" className="text-primary underline underline-offset-2">
                Contact Us
              </Link>{" "}
              now for efficient, reliable, and profitable car removal services!
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-2xl bg-white shadow-md p-5"
                >
                  <p className="font-semibold text-black">{reason.title}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white shadow-xl p-8">
            <div className="flex items-center gap-3">
              <Wallet className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-bold text-black">
                Contact Us Now
              </h3>
            </div>
            <p className="text-gray-700 mt-4 leading-relaxed">
              Are you ready to sell that old car and turn it into cash? YYC Cash For Cars
              can assist. From junk car removal and scrap car disposal, to
              reliable towing service and reliable tow-trucking in Calgary - our
              team makes this process as seamless and stress-free as possible so
              that when the job's done you walk away with cash!
            </p>
            <p className="text-gray-700 mt-4 leading-relaxed">
              <Link href="/services/cash-for-junk-cars" className="text-primary underline underline-offset-2">
                Reach out now
              </Link> for a no-cost and no-commitment quote and let us
              turn your unwanted car into cash! We take care of everything else,
              turning it into the cash that can make up our day!
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white"
              >
                Request a Free Quote
              </Link>
              <Link
                href="tel:+15877009806"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:border-primary hover:text-primary transition-colors"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
