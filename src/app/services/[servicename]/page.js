import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation"; // Import Next.js navigation for handling 404
import { CircleCheck } from "lucide-react";
import { getOgImageForPath } from "@/lib/seo";

// A static list of services. You can move this to a separate file or fetch it from an API.
const services = [
  {
    id: 1,
    slug: "cash-for-junk-cars",
    name: "Cash for Junk Cars in Calgary - Fast, Fair & Hassle-Free",
    metaTitle: "Junk Car Removal Calgary | Fast, Free, & Cash on the Spot",
    metaDescription:
      "Need junk car removal in Calgary? Get fast, free towing and top cash for your unwanted vehicle. Contact YYC Cash today for hassle-free removal!",
    desc: "Are you in Calgary with an old, damaged, or non-running vehicle that needs to be removed easily, quickly, and profitably? YYC Cash makes junk car removal straightforward with competitive offers, free towing services, and reliable pickup anywhere within Calgary and its surrounding communities - regardless of its condition. Our cash for junk cars service provides affordable offers as well as FREE towing. We make junk car removal hassle-free!",
    img: "/images/car-junk.webp",
    features: [
      "Same-day offers",
      "cash paid at pickup",
      "transparent pricing",
      "Free junk car removal in Calgary & nearby areas",
    ],
    additionalInfo:
      "We understand the stress associated with owning an unwanted vehicle. That's why thousands of customers in Calgary, Airdrie, Chestermere, Okotoks and Cochrane trust us to quickly dispose of unwanted cars while providing cash payouts - fast!",
  },
  {
    id: 2,
    slug: "scrap-car-removal",
    name: "Scrap Car Removal Service in Calgary",
    metaTitle: "Scrap Car Removal Calgary | Get Cash for Junk Cars Today",
    metaDescription:
      "Looking for scrap car removal in Calgary? We offer fast, eco-friendly, and cash-for-car services. Contact us for quick junk car removal near you!",
    desc: "When it comes to disposing of scrap or junk cars, we provide fast, reliable, and hassle-free removal solutions that provide convenience, eco-friendliness and profit. Whether your car has been involved in an accident, is no longer running properly or too costly to repair, we are here to assist! Our Scrap Car Removal service in Calgary provides convenient eco-friendly disposal of old or damaged vehicles at competitive rates; whether they be damaged beyond repair, non running altogether or no longer roadworthy we take great pride in offering one of the most efficient and rewarding junk car removal services around - offering our efficient yet profitable junk car removal service!",
    img: "/images/tow-scrap.webp",
    features: [
      "Quick Cash for Your Junk Car: We offer competitive cash offers regardless of its condition - be it an old or non-functional car sitting in your driveway for years, we guarantee a fair market price for it.",
      "Eco-Friendly Recycling: We strive to reuse materials whenever possible while minimising environmental impact.",
      "Fast and Hassle-Free Process: No towing fees or unexpected charges; just an easy, transparent process.",
      "Free Scrap Car Removal in Calgary: We provide free towing anywhere in Calgary and surrounding areas.",
      "Scrap Car Removal Near Me: Our Calgary service area and nearby regions make removal accessible and reliable.",
    ],
    additionalInfo:
      "No need to fret over finding buyers and negotiating prices; let us handle everything for you! Simply reach out, and let us take it from there.",
    benefits: [
      {
        title: "Get Paid Instantly for Your Junk Car",
        body: "Most people think old, non-running cars are simply useless piles of metal. Not at YYC Cash! We provide cash for scrap cars in Calgary, turning scrap metal into instant cash. No matter if your car is worn out or completely wrecked - expect us to provide an economical price.",
      },
      {
        title: "Save Occupied Property Space",
        body: "Old vehicles occupying space in your garage or driveway could be put to better use elsewhere. By getting rid of junk cars, you could free up space for new purchases such as cars or even storage facilities or gardening. Our fast same-day removal services make you reclaim that space in no-time!",
      },
      {
        title: "Avoid Expensive Repairs",
        body: "When your car becomes too costly to maintain, selling it as scrap may be your best option. Many car owners continue spending money on repairs only to discover that the vehicle remains unreliable despite these investments; selling as scrap can provide a practical and profitable alternative that helps avoid future repair expenses.",
      },
      {
        title: "No Hidden Fees",
        body: "At our scrap car removal services, we take great pride in being completely upfront with our clients. No hidden costs or towing costs will arise; instead we cover all charges so there won't be any unexpected extras.",
      },
    ],
    process: [
      {
        title: "1. Get a Free Quote",
        body: "To begin the Scrap Car Removal Process, the first step should be requesting a no-obligation, free quote from us. We are available both by phone and online, and will require basic details about your car such as its make, model, age, condition and location for an accurate quotation.",
      },
      {
        title: "2. Accept Our Offer",
        body: "Once we have your vehicle information, we'll offer an immediate price for its removal and scrap car recycling. If the offer suits your needs and you are happy with it, accept it and let's arrange for its pickup at a time convenient to you!",
      },
      {
        title: "3. Scrap Car Removal and Payment",
        body: "On the day of our scheduled arrival, we'll arrive with a tow truck and professional staff to inspect and tow away your car - as well as provide cash on the spot! Everything will be handled seamlessly for you so no additional effort is required on your part!",
      },
    ],
    faq: [
      {
        q: "Q1. What can I get for my scrap car?",
        a: "Your car's value depends on several factors, including its make, model, condition and weight. We provide competitive prices for all vehicle types to make sure you receive maximum value from our auction.",
      },
      {
        q: "Q2: Am I required to present my vehicle title when selling a junk car?",
        a: "While having your title to the vehicle would be ideal, we can still accept many vehicles without it. Simply contact us so we can discuss which options may work for your situation.",
      },
      {
        q: "Q3: How long will it take for my scrap car to be removed?",
        a: "We provide same-day or next-day service in most areas in Calgary. The process is quick, and our aim is to make the experience as stress-free as possible.",
      },
      {
        q: "Q4: Will there be a fee associated with towing my scrap car?",
        a: "No! Towing is completely free; our service covers any associated towing costs as part of its offering.",
      },
      {
        q: "Q5: Can you collect scrap cars from any location?",
        a: "Yes, we provide junk car removal in Calgary regardless of its location. Whether it's your garage, driveway or even off-road location we come directly to you!",
      },
    ],
    closingHeading:
      "Junk Car Removal Calgary | Your Solution to Unwanted Automobiles",
    closingText:
      "Are You Needing Your Old Car Removing From Your Property in Calgary? At YYC Cash, our junk car removal services in Calgary are tailored to meet the needs of our community. When you contact us, expect prompt, professional service with competitive pricing and eco-friendly disposal practices - whether you have junk cars, wrecked vehicles or simply old vehicles no longer being needed; We take care to do it efficiently!",
    finalCtaHeading:
      "Reach Out Now For Fast and Reliable Scrap Car Removal in Calgary",
    finalCtaText:
      "YYC Cash offers reliable junk car removal services throughout Calgary and its surrounding areas, so if you want to turn your scrap car into cash, don't hesitate to get in touch. Our team is just one call away, offering a quick and hassle-free car disposal experience.",
  },
];

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return services.map((service) => ({ servicename: service.slug }));
}

export async function generateMetadata({ params }) {
  const { servicename } = await params;
  const decodedServiceName = decodeURIComponent(servicename);
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const description = service.metaDescription || (service.desc
    ? service.desc.substring(0, 160)
    : service.name);

  const ogImage = getOgImageForPath(`services/${service.slug}`);
  const pageTitle = service.metaTitle || `${service.name} - YYC Cash for Cars`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage],
    },
  };
}

export default async function ServicePage({ params }) {
  const { servicename } = await params; // Await the params prop

  // Decode the servicename to handle URL-encoded characters
  const decodedServiceName = decodeURIComponent(servicename);

  // Find the matching service
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    notFound(); // Render the 404 page if the service is not found
  }

  return (
    <div>
      <Breadcrumb name={service?.name} />

      <div className="p-4 py-16 md:p-10 lg:p-20 dark:bg-white">
        <div className="relative mb-20 overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-[#f3faff] via-white to-[#fff5f7] shadow-xl">
          <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/10" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-secondary/10" />
          <div className="relative grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr] p-6 lg:p-10">
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Calgary Service
                </span>
                <span className="rounded-full border border-secondary/20 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                  Fast Pickup
                </span>
                <span className="rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                  Free Towing
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold leading-tight text-black lg:text-5xl">
                {service.name}
              </h1>
              <p className="mb-6 text-base leading-relaxed text-gray-700">
                {service.desc}
              </p>

              <p className="mb-7 text-sm leading-relaxed text-gray-700">
                {service.additionalInfo}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="tel:+15877009806"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                >
                  Call Now
                </Link>
              </div>
            </div>

            <div className="relative">
              <Image
                src={service.img}
                alt={service.name}
                width={700}
                height={560}
                className="h-full min-h-[360px] w-full rounded-3xl object-cover shadow-lg lg:min-h-[520px]"
              />
              <div className="absolute bottom-4 right-4 rounded-2xl bg-black/70 px-4 py-3 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-wide text-white/80">
                  Trusted in Calgary
                </p>
                <p className="text-sm font-semibold text-white">
                  Fast. Reliable. Eco-Friendly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {service.slug === "cash-for-junk-cars" && (
          <div className="space-y-14">
            <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Quick Jump
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#why-choose-cash" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Why Choose Us
                </a>
                <a href="#types-cash" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Vehicle Types
                </a>
                <a href="#process-cash" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Our Process
                </a>
                <a href="#faq-cash" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  FAQs
                </a>
                <a href="#areas-cash" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Service Areas
                </a>
              </div>
            </section>

            <section
              id="why-choose-cash"
              className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-[#f4fbff] via-white to-[#fff5f6] p-6 lg:p-10"
            >
              <div className="absolute -top-16 -right-12 h-40 w-40 rounded-full bg-primary/10" />
              <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-secondary/10" />
              <h2 className="relative text-3xl font-bold text-black mb-6">
                Why Use Our Junk Car Removal Service
              </h2>
              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Receive Fast Cash for Junk Cars - Without Delay
                  </h3>
                  <p className="text-gray-700">
                    Don't just let that old car sit there taking up space! Our offers are calculated based on current scrap metal values, part worths, and market demand so you can trust we will give you fair value.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Same-day offers</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />cash paid at pickup</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />transparent pricing</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Free junk car removal is now available in Calgary & Nearby Areas
                  </h3>
                  <p className="text-gray-700">
                    Junk cars can be collected free of charge; our professional team will come directly to your location for collection.
                  </p>
                  <p className="text-gray-700 mt-3">
                    <Link href="/locations/calgary" className="text-primary underline underline-offset-2">Calgary</Link> neighborhoods (Downtown Calgary, Northeast Calgary, South Calgary and Northwest Calgary, etc) as well as nearby cities & towns are Including,
                  </p>
                  <p className="text-gray-700 mt-3">
                    <Link href="/locations/airdrie" className="text-primary underline underline-offset-2">Airdrie</Link>,{" "}
                    <Link href="/locations/chestermere" className="text-primary underline underline-offset-2">Chestermere</Link>,{" "}
                    <Link href="/locations/cochrane" className="text-primary underline underline-offset-2">Cochrane</Link>,{" "}
                    <Link href="/locations/okotoks" className="text-primary underline underline-offset-2">Okotoks</Link>,{" "}
                    <Link href="/locations/strathmore" className="text-primary underline underline-offset-2">Strathmore</Link>, Crossfield
                  </p>
                  <p className="text-gray-700 mt-3">
                    No matter where your vehicle is parked - curbside, driveway, alley, garage or vacant lot - our removal experts offer free removal.
                  </p>
                </div>
              </div>
            </section>

            <section id="types-cash">
              <h2 className="text-3xl font-bold text-black mb-6">
                We Accept All Types of Junk Cars
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-[#f8fcff] p-6 shadow-sm">
                  <p className="text-gray-700 mb-4">
                    No need to worry if your vehicle runs or not - we buy all kinds of junk cars in Calgary:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Damaged cars</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />non-running vehicles</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />flood damaged cars</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />accident damaged vehicles</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Old trucks & SUVs</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Scrap cars & vans</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Junk commercial vehicles</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-secondary/20 bg-[#fff8f8] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">Junk Car Recycling Can Be Green</h3>
                  <p className="text-gray-700">
                    Old cars can be more than mere eyesores - they also leak potentially hazardous fluids such as oil, coolant, brake fluid, and battery acid that could endanger both the environment and soil if improperly disposed of. When choosing us to remove your junk car:
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-700">
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />We responsibly recycle your vehicle</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Extract usable parts for reuse</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Recycle metals to reduce landfill waste</li>
                    <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Safely dispose of harmful fluids</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    Our vehicle recycling process ensures environmental sustainability while optimizing value from each car we collect.
                  </p>
                </div>
              </div>
            </section>

            <section id="process-cash">
              <h2 className="text-3xl font-bold text-black mb-2">
                Fast & Straight Forward Process - Without Stress or Hidden Fees
              </h2>
              <p className="text-gray-700 mb-6">
                Our junk car removal in Calgary has been made as effortless as possible with three easy steps.
              </p>
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">1</span>
                    <h3 className="text-xl font-semibold text-black">Get Your Quote</h3>
                  </div>
                  <p className="text-gray-700">
                    Call our toll-free phone number or fill out our online form with information on the year, make, model, condition and location of your vehicle for an honest quote fast.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">2</span>
                    <h3 className="text-xl font-semibold text-black">Schedule Pickup</h3>
                  </div>
                  <p className="text-gray-700">
                    Simply book a pickup time that works for you. We'll confirm all details and arrive promptly - leaving nothing for you to worry about but us handling everything!
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">3</span>
                    <h3 className="text-xl font-semibold text-black">We Tow and You Get Paid</h3>
                  </div>
                  <p className="text-gray-700">
                    Once we arrive, we inspect your junk car and give you cash on the spot - then tow it for free - making the experience quick, simple, and convenient for both of us!
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6 lg:p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-black mb-4">
                What Makes YYC Cash Different?
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-xl font-semibold text-black mb-2">No Towing Fees</h3>
                  <p className="text-gray-700">Unlike other companies that charge removal fees, we tow junk cars in Calgary free of charge.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-xl font-semibold text-black mb-2">Honest and Value-Packed Offers</h3>
                  <p className="text-gray-700">Our offers reflect current market prices; no lowball quotes here - instead we strive to give you maximum cash value possible.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-xl font-semibold text-black mb-2">Friendly, Professional Team</h3>
                  <p className="text-gray-700">At our company, every customer is treated with dignity and transparency. Our drivers are professional and polite.</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <h3 className="text-xl font-semibold text-black mb-2">Need your junk car removed ASAP?</h3>
                  <p className="text-gray-700">We provide same-day or next-day service throughout Calgary and its surrounding communities.</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-primary/20 bg-[#f8fcff] p-5">
                <h3 className="text-xl font-semibold text-black mb-2">Who Can Benefit From Our Service?</h3>
                <p className="text-gray-700 mb-3">Our cash for junk car service can help.</p>
                <ul className="grid gap-2 sm:grid-cols-2 text-gray-700">
                  <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Homeowners with old vehicles collecting dust</li>
                  <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Businesses with company cars ready for disposal</li>
                  <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Landlords cleaning up properties</li>
                  <li className="flex items-start gap-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Estates handling inherited vehicles</li>
                  <li className="flex items-start gap-2 sm:col-span-2"><CircleCheck size={16} className="mt-0.5 text-primary" />Busy people who want a fast, easy solution</li>
                </ul>
              </div>
            </section>

            <section id="faq-cash">
              <h2 className="text-3xl font-bold text-black mb-3">
                Are You Wondering: "Where Can I Find Cash for My Junk Car in Calgary?" - Well the Answer Can Be Found Right Here.
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q. How much cash will I receive for my junk car?</h3>
                  <p className="text-gray-700">A: Our offers for junk cars vary depending on factors like year, make, model, condition and current scrap metal prices. Most junk cars receive competitive offers that surpass typical scrap yard payouts.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q: To sell my junk car, do I require the title?</h3>
                  <p className="text-gray-700">A: In general, yes - having the vehicle title will speed up the process for sure! But even if you don't, reach out anyway as we may still be able to work with your situation.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q: How soon can you pick up my junk car?</h3>
                  <p className="text-gray-700">A: Our flexible scheduling allows us to often offer same-day pickup for customers in Calgary and its surroundings.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q: Will you tow my junk car for free?</h3>
                  <p className="text-gray-700">A: Absolutely not! Towing services are completely free - there are never any hidden costs or unexpected charges involved with towing.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm md:col-span-2">
                  <h3 className="text-lg font-semibold text-black mb-2">Q: Do you purchase non-running vehicles?</h3>
                  <p className="text-gray-700">A: Yes, We specialize in purchasing cars that won't start, have engine issues, flood damage or severe collision damage.</p>
                </div>
              </div>
            </section>

            <section
              id="areas-cash"
              className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-[#f4fbff] via-white to-[#fff5f6] p-6 lg:p-10 shadow-sm"
            >
              <div className="absolute -top-14 -right-8 h-40 w-40 rounded-full bg-primary/10" />
              <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-secondary/10" />
              <div className="relative">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  Service Coverage
                </p>
                <h2 className="text-3xl font-bold text-black mb-4">
                  Areas We Serve - Calgary and Beyond
                </h2>
                <p className="text-gray-700 mb-6 max-w-4xl">
                  We take great pleasure in serving all communities surrounding Calgary, such as but not limited to:
                </p>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                  <Link href="/locations/calgary" className="rounded-xl border border-primary/20 bg-white/90 px-4 py-3 text-sm font-semibold text-primary shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                    Calgary <span className="font-normal text-gray-700">(All Districts and Neighborhoods)</span>
                  </Link>
                  <Link href="/locations/airdrie" className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">
                    Airdrie
                  </Link>
                  <Link href="/locations/chestermere" className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">
                    Chestermere 
                  </Link>
                  <Link href="/locations/okotoks" className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">
                    Okotoks
                  </Link>
                  <Link href="/locations/cochrane" className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">
                    Cochrane
                  </Link>
                  <Link href="/locations/strathmore" className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">
                    Strathmore
                  </Link>
                  <span className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm">
                    Crossfield
                  </span>
                  <Link href="/locations/high-river" className="rounded-xl border border-gray-200 bg-white/90 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary hover:shadow-md">
                    High River
                  </Link>
                </div>

                <div className="mt-6 rounded-2xl border border-white/80 bg-white/85 p-4 shadow-sm">
                  <p className="text-gray-700">
                    These are just some of the areas we cover to remove your junk car for cash! From central Calgary to rural communities nearby we're ready to remove it quickly for cash!
                  </p>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-[#6f7fa0] to-secondary p-8 lg:p-10 shadow-xl">
              <div className="absolute -top-20 -right-10 h-56 w-56 rounded-full bg-white/10" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />
              <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-3 max-w-3xl">
                    Are You Ready to Sell Your Junk Car and Receive Cash Back?
                  </h2>
                  <p className="text-white/95 max-w-3xl leading-relaxed">
                    Don't let that old vehicle take up valuable space or become an environmental risk; make it count with Calgary's trusted junk car removal team by turning it into fast cash!
                  </p>
                  <p className="text-white/95 max-w-3xl leading-relaxed mt-3">
                    Contact our Calgary junk car removal experts now or fill out our online form and receive a no-commitment, free quote today - guaranteed. We make junk car disposal fast, simple, and rewarding - guaranteed.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-slate-100"
                    >
                      Get a Free Quote
                    </Link>
                    <Link
                      href="tel:+15877009806"
                      className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Call Now
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/85">
                    Direct Links
                  </p>
                  <div className="mt-3 space-y-3">
                    <Link href="/services/scrap-car-removal" className="block rounded-xl bg-white/10 p-3 text-sm text-white hover:bg-white/15">
                      Need scrap disposal? View Scrap Car Removal
                    </Link>
                    <Link href="/services" className="block rounded-xl bg-white/10 p-3 text-sm text-white hover:bg-white/15">
                      Explore all vehicle removal services
                    </Link>
                    <Link href="/contact" className="block rounded-xl bg-white/10 p-3 text-sm text-white hover:bg-white/15">
                      Book your pickup now
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {service.slug === "scrap-car-removal" && (
          <div className="space-y-14">
            <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                Quick Jump
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#why-choose-scrap" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Why Choose Us
                </a>
                <a href="#benefits-scrap" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Benefits
                </a>
                <a href="#process-scrap" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  Our Process
                </a>
                <a href="#faq-scrap" className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary">
                  FAQs
                </a>
              </div>
            </section>

            <section
              id="why-choose-scrap"
              className="relative overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-[#f4fbff] via-white to-[#fff5f6] p-6 lg:p-10"
            >
              <div className="absolute -top-16 -right-12 h-40 w-40 rounded-full bg-primary/10" />
              <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-secondary/10" />
              <h2 className="relative text-3xl font-bold text-black mb-6">
                Why choose our Scrap Car Removal Service?
              </h2>
              <div className="relative grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    1. Quick Cash for Your Junk Car
                  </h3>
                  <p className="text-gray-700">
                    Selling your scrap car to us can be an easy and profitable experience. We offer competitive cash offers regardless of its condition - be it an old or non-functional car sitting in your driveway for years, we guarantee a fair market price for it.
                  </p>
                  <p className="text-gray-700 mt-3">
                    No need to fret over finding buyers and negotiating prices; let us handle everything for you! Simply reach out, and let us take it from there.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    2. Eco-Friendly Recycling
                  </h3>
                  <p className="text-gray-700">
                    Proper car disposal is vital to environmental sustainability. Scrap cars contain harmful substances like oils, fuels, and chemicals which, if improperly disposed of, could harm the environment. With our{" "}
                    <Link href="/services/cash-for-junk-cars" className="text-primary underline underline-offset-2">
                      junk car removal service in Calgary
                    </Link>
                    , you can be assured that your vehicle will be responsibly recycled; we strive to reuse materials whenever possible while minimising environmental impact.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    3. Fast and Hassle-Free Process
                  </h3>
                  <p className="text-gray-700">
                    We understand your goal is to dispose of your old car quickly and effortlessly, which is why our process has been designed with simplicity in mind. Once you contact us, we'll arrange a no-obligation free estimate, then arrange the pickup of your vehicle at a time convenient to you and offer cash on-the-spot! Our team will arrive on-site and tow away your vehicle while giving you cash!
                  </p>
                  <p className="text-gray-700 mt-3">
                    No towing fees or unexpected charges; just an easy, transparent process.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    4. Free Scrap Car Removal in Calgary
                  </h3>
                  <p className="text-gray-700">
                    Our service provides free towing anywhere in Calgary and its surrounding areas, eliminating any towing fees or additional hidden costs for scrap car removal. No matter if the scrap car is located in a garage, driveway, or even off-road - no matter its condition we come directly to you to remove it and no matter its condition! That is one reason why customers choose us for all of their junk car needs.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm md:col-span-2">
                  <h3 className="text-xl font-semibold text-black mb-2">
                    5. Scrap Car Removal Near Me
                  </h3>
                  <p className="text-gray-700">
                    Are You Searching for Scrap Car Removal Near Me?"? Look No Further! Our Calgary service area and nearby regions make our scrap car removal accessible to anyone in need, from downtown Calgary to rural areas. Our goal is to make scrap car disposal as convenient and reliable as possible by providing fast and dependable services close by!
                  </p>
                </div>
              </div>
            </section>

            <section id="benefits-scrap">
              <h2 className="text-3xl font-bold text-black mb-6">
                Benefits of Scrap Car Removal
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-primary/20 bg-[#f8fcff] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">Get Paid Instantly for Your Junk Car</h3>
                  <p className="text-gray-700">
                    Most people think old, non-running cars are simply useless piles of metal. Not at YYC Cash! We provide cash for scrap cars in Calgary, turning scrap metal into instant cash. No matter if your car is worn out or completely wrecked - expect us to provide an economical price.
                  </p>
                </div>
                <div className="rounded-2xl border border-secondary/20 bg-[#fff8f8] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">Save Occupied Property Space</h3>
                  <p className="text-gray-700">
                    Old vehicles occupying space in your garage or driveway could be put to better use elsewhere. By getting rid of junk cars, you could free up space for new purchases such as cars or even storage facilities or gardening. Our fast same-day removal services make you reclaim that space in no-time!
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-[#f8fcff] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">Avoid Expensive Repairs</h3>
                  <p className="text-gray-700">
                    When your car becomes too costly to maintain, selling it as scrap may be your best option. Many car owners continue spending money on repairs only to discover that the vehicle remains unreliable despite these investments; selling as scrap can provide a practical and profitable alternative that helps avoid future repair expenses.
                  </p>
                </div>
                <div className="rounded-2xl border border-secondary/20 bg-[#fff8f8] p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-black mb-2">No Hidden Fees</h3>
                  <p className="text-gray-700">
                    At our scrap car removal services, we take great pride in being completely upfront with our clients. No hidden costs or towing costs will arise; instead we cover all charges so there won't be any unexpected extras.
                  </p>
                </div>
              </div>
            </section>

            <section id="process-scrap">
              <h2 className="text-3xl font-bold text-black mb-6">
                Scrap Car Removal Process
              </h2>
              <div className="grid gap-5 lg:grid-cols-3">
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">
                      1
                    </span>
                    <h3 className="text-xl font-semibold text-black">Get a Free Quote</h3>
                  </div>
                  <p className="text-gray-700">
                    To begin the Scrap Car Removal Process, the first step should be requesting a no-obligation, free quote from us. We are available both by phone and online, and will require basic details about your car such as its make, model, age, condition and location for an accurate quotation.
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">
                      2
                    </span>
                    <h3 className="text-xl font-semibold text-black">Accept Our Offer</h3>
                  </div>
                  <p className="text-gray-700">
                    Once we have your vehicle information, we'll offer an immediate price for its removal and scrap car recycling. If the offer suits your needs and you are happy with it, accept it and let's arrange for its pickup at a time convenient to you!
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-sm font-bold text-white">
                      3
                    </span>
                    <h3 className="text-xl font-semibold text-black">Scrap Car Removal and Payment</h3>
                  </div>
                  <p className="text-gray-700">
                    On the day of our scheduled arrival, we'll arrive with a tow truck and professional staff to inspect and tow away your car - as well as provide cash on the spot! Everything will be handled seamlessly for you so no additional effort is required on your part!
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-gray-100 bg-white p-6 lg:p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-black mb-4">
                Junk Car Removal Calgary | Your Solution to Unwanted Automobiles
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Are You Needing Your Old Car Removing From Your Property in Calgary? At YYC Cash, our{" "}
                <Link href="/services/cash-for-junk-cars" className="text-primary underline underline-offset-2">
                  junk car removal services in Calgary
                </Link>{" "}
                are tailored to meet the needs of our community. When you contact us, expect prompt, professional service with competitive pricing and eco-friendly disposal practices - whether you have junk cars, wrecked vehicles or simply old vehicles no longer being needed; We take care to do it efficiently!
              </p>
            </section>

            <section id="faq-scrap">
              <h2 className="text-3xl font-bold text-black mb-6">(FAQs)</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q1. What can I get for my scrap car?</h3>
                  <p className="text-gray-700">Your car's value depends on several factors, including its make, model, condition and weight. We provide competitive prices for all vehicle types to make sure you receive maximum value from our auction.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q2: Am I required to present my vehicle title when selling a junk car?</h3>
                  <p className="text-gray-700">While having your title to the vehicle would be ideal, we can still accept many vehicles without it. Simply contact us so we can discuss which options may work for your situation.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q3: How long will it take for my scrap car to be removed?</h3>
                  <p className="text-gray-700">We provide same-day or next-day service in most areas in Calgary. The process is quick, and our aim is to make the experience as stress-free as possible.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
                  <h3 className="text-lg font-semibold text-black mb-2">Q4: Will there be a fee associated with towing my scrap car?</h3>
                  <p className="text-gray-700">No! Towing is completely free; our service covers any associated towing costs as part of its offering.</p>
                </div>
                <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm md:col-span-2">
                  <h3 className="text-lg font-semibold text-black mb-2">Q5: Can you collect scrap cars from any location?</h3>
                  <p className="text-gray-700">Yes, we provide junk car removal in Calgary regardless of its location. Whether it's your garage, driveway or even off-road location we come directly to you!</p>
                </div>
              </div>
            </section>

            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-[#6f7fa0] to-secondary p-8 lg:p-10 shadow-xl">
              <div className="absolute -top-20 -right-10 h-56 w-56 rounded-full bg-white/10" />
              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />
              <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-3 max-w-3xl">
                    Reach Out Now For Fast and Reliable Scrap Car Removal in Calgary
                  </h2>
                  <p className="text-white/95 max-w-3xl leading-relaxed">
                    YYC Cash offers reliable junk car removal services throughout Calgary and its surrounding areas, so if you want to turn your scrap car into cash, don't hesitate to get in touch. Our team is just one call away, offering a quick and hassle-free car disposal experience.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-slate-100"
                    >
                      Get a Free Quote
                    </Link>
                    <Link
                      href="tel:+15877009806"
                      className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Call Now
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/25 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/85">
                    Why Contact Now
                  </p>
                  <div className="mt-3 space-y-3">
                    <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
                      Same-day or next-day pickup in most Calgary areas.
                    </div>
                    <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
                      Free towing with no hidden charges.
                    </div>
                    <div className="rounded-xl bg-white/10 p-3 text-sm text-white">
                      Cash paid on pickup with a quick, transparent process.
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
