import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import { CheckCircle, Clock, Navigation, Phone, ShieldCheck } from "lucide-react";
import StatsSection from "../sections/Stats";
import GallerySection from "../sections/Gallery";
import TestimonialSection from "../sections/Testimonial";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "About Us – YYC Cash for Cars | Trusted Car Removal",
  description:
    "YYC Cash for Cars, your local, family-owned business offering fast and fair car removal services in Calgary, and surrounding cities in Alberta.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us – YYC Cash for Cars | Trusted Car Removal",
    description:
      "YYC Cash for Cars, your local, family-owned business offering fast and fair car removal services in Calgary, and surrounding cities in Alberta.",
    images: [getOgImageForPath("about-us")],
  },
  twitter: {
    title: "About Us – YYC Cash for Cars | Trusted Car Removal",
    description:
      "YYC Cash for Cars, your local, family-owned business offering fast and fair car removal services in Calgary, and surrounding cities in Alberta.",
    images: [getOgImageForPath("about-us")],
  },
};

const aboutHighlights = [
  "Fast, fair cash offers for running and non-running vehicles",
  "Free towing and car removal across Calgary and nearby cities",
  "Cash paid on the spot with paperwork handled for you",
  "Eco-friendly vehicle recycling and responsible disposal",
];

const aboutStats = [
  { value: "8+", label: "Years in Business" },
  { value: "2,500+", label: "Cars Purchased" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "Same Day", label: "Pickup Available" },
];

function AboutHero() {
  return (
    <section className="bg-white p-4 py-16 md:p-10 lg:p-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-16 overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-[#eff8ff] via-white to-[#fff6f7] shadow-xl">
          <div className="absolute -top-28 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
          <div className="relative grid items-start gap-8 p-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(340px,0.92fr)] lg:p-10">
            <div className="flex flex-col justify-center">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Family-Owned
                </span>
                <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-700">
                  Calgary & Area
                </span>
                <span className="rounded-full border border-secondary/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                  Trusted Car Removal
                </span>
              </div>

              <h2 className="max-w-3xl text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[2.85rem]">
                About Us – YYC Cash for Cars
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-700 md:text-base">
                Welcome to YYC Cash for Cars, where we turn your unwanted car
                into quick cash with zero hassle. Based in Calgary, and proudly
                serving Surrounding Cities in Alberta. We are your local,
                trusted vehicle removal partner.
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
                Whether you have a non-running car, a junk vehicle taking up
                space, or an old car that&apos;s been gathering dust, we are here
                to help. Our mission is simple: to make car selling easy,
                transparent, and rewarding for you.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-primary/10 bg-white/90 p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Availability
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-6 text-black">
                    Fast quotes and flexible pickup scheduling
                  </p>
                </div>
                <div className="rounded-2xl border border-secondary/10 bg-white/90 p-4 shadow-sm">
                  <div className="mb-2 flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-secondary" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Service Area
                    </span>
                  </div>
                  <p className="text-sm font-semibold leading-6 text-black">
                    Calgary and surrounding cities in Alberta
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {aboutHighlights.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white/80 px-4 py-3"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="text-sm leading-6 text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="tel:+15877009806"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call (587) 700-9806
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-2 shadow-lg backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.35rem]">
                <Image
                  src="/images/car-about.webp"
                  alt="YYC Cash for Cars team and vehicle removal service"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent p-6">
                  <div className="max-w-xs rounded-2xl bg-white/92 p-4 shadow-lg backdrop-blur">
                    <div className="mb-2 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-secondary" />
                      <span className="text-sm font-semibold text-black">
                        Local, honest, customer-centered
                      </span>
                    </div>
                    <p className="text-sm leading-6 text-gray-700">
                      Fast car removal backed by fair offers, free towing, and a
                      transparent process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-r from-[#eef7ff] via-white to-[#fff2f4] px-6 py-8 shadow-xl lg:px-10">
          <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label}>
                <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  {stat.value}
                </div>
                <p className="mt-2 text-base font-semibold text-gray-700 md:text-lg">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function AboutUsContent() {
  return (
    <section className="bg-white px-4 pb-8 md:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_420px]">
          <article className="rounded-[2rem] border border-primary/10 bg-white p-6 shadow-lg lg:p-10">
            <div className="space-y-4 text-black">
              <h3 className="text-3xl font-bold">
                Our Story – Local, Honest, and Customer-Centered
              </h3>
              <p className="text-lg leading-8">
                <Link href="/" className="text-primary underline">
                  At YYC Cash for Cars
                </Link>
                , we don&apos;t just buy cars — we offer a fast, free, and reliable
                service that provides instant cash on the spot. Our friendly,
                professional team is ready to assist you in getting rid of your
                unwanted vehicle with minimal effort on your part. And, we do
                all of this with a strong commitment and full responsible,
                eco-friendly practices.
              </p>
              <p className="text-lg leading-8">
                Founded by a group of passionate individuals who care about
                their community, YYC Cash for Cars started with one goal: to
                provide a no-hassle, trustworthy car selling experience for
                residents in Calgary and surrounding areas. From day one, we
                wanted to offer something better than the impersonal, stressful
                car selling processes that often leave people frustrated.
              </p>
              <p className="text-lg leading-8">
                We quickly realized that Calgarians and their neighbors in
                Chestermere, Airdrie, and Cochrane needed a reliable,
                straightforward way to sell old cars that didn&apos;t involve
                endless online ads, waiting for buyers, or haggling with
                strangers. That&apos;s when we decided to make the process simple,
                transparent, and beneficial for everyone.
              </p>
              <p className="text-lg leading-8">
                Our team is built on the values of honesty, transparency, and
                respect for your time. Every day, we strive to live up to the
                trust you place in us by offering a fair, efficient service that
                puts you first.
              </p>
            </div>
          </article>

          <aside className="overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-[#eff8ff] via-white to-[#fff8f6] shadow-lg">
            <div className="relative h-full min-h-[360px]">
              <Image
                src="/images/gallery/g4.webp"
                alt="Vehicle removal service in Calgary"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                <div className="rounded-2xl bg-white/90 p-4 backdrop-blur">
                  <h4 className="text-xl font-semibold text-black">
                    Honest service, transparent process
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    Local service built to save you time and remove the usual
                    stress from selling an unwanted vehicle.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-lg">
            <div className="relative h-72">
              <Image
                src="/images/gallery/g8.webp"
                alt="Free towing and car pickup"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-6 lg:p-8">
              <h3 className="text-3xl font-bold text-black">
                What We Do – Fast, Friendly, and Fair Car Removal
              </h3>
              <p className="text-lg leading-8 text-black">
                We understand that your time is valuable, and that&apos;s why we
                offer a streamlined process to sell your car quickly and without
                the usual stress. Here&apos;s what we do:
              </p>
              <p className="text-lg leading-8 text-black">
                Top Dollar for Your Vehicle
              </p>
              <p className="text-lg leading-8 text-black">
                You&apos;re not just another number to us. When you reach out to
                YYC Cash for Cars, you get a personalized offer based on the
                true value of your car. Whether your vehicle is running or not,
                we will provide you with a fair cash offer that reflects the
                current market value for your car&apos;s condition. We don&apos;t
                believe in low-ball offers; instead, we aim to ensure that you
                leave the process feeling good about the deal.
              </p>
              <p className="text-lg leading-8 text-black">
                Free Towing and Removal
              </p>
              <p className="text-lg leading-8 text-black">
                One of the key services we offer is free towing. Yes, you heard
                that right — free pickup at no extra cost to you. Whether your
                car is parked in your driveway, garage, or even somewhere more
                remote, we come to you, no matter the condition of your
                vehicle. No hidden fees. No surprise charges. Just prompt,
                professional service to get that old car off your hands without
                any stress.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-secondary/10 bg-white shadow-lg">
            <div className="relative h-72">
              <Image
                src="/images/gallery/g11.webp"
                alt="Instant cash and eco-friendly car recycling"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 p-6 lg:p-8">
              <h3 className="text-3xl font-bold text-black">
                Why Choose Us – Honest Service, Transparent Process
              </h3>
              <p className="text-lg leading-8 text-black">
                At YYC Cash for Cars, we know that people are often hesitant
                about selling their cars. We aim to change that by offering an
                honest, reliable, and community-driven service. Here&apos;s what
                makes us different:
              </p>
              <p className="text-lg leading-8 text-black">
                Instant Cash on the Spot
              </p>
              <p className="text-lg leading-8 text-black">
                No need to wait for checks to clear or bank transfers to go
                through. With YYC Cash for Cars, we hand you cash on the spot
                once we arrive to pick up your vehicle. The process is fast, so
                you can have money in your hands within hours of getting in
                touch with us.
              </p>
              <p className="text-lg leading-8 text-black">
                We Handle All the Paperwork
              </p>
              <p className="text-lg leading-8 text-black">
                Selling a car can sometimes feel like it comes with a mountain
                of paperwork. From title transfers to registration
                cancellations, it&apos;s easy to get overwhelmed. Don&apos;t worry.
                Our team takes care of everything for you — all the required
                forms and steps are handled with professionalism and accuracy.
                Our goal is to make the process as smooth as possible, so you
                can focus on what matters.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-lg">
            <div className="relative h-full min-h-[360px]">
              <Image
                src="/images/gallery/g2.webp"
                alt="Trusted local car buyers in Calgary"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <article className="rounded-[2rem] border border-primary/10 bg-gradient-to-br from-[#eff8ff] via-white to-[#fff6f7] p-6 shadow-lg lg:p-10">
            <div className="space-y-4 text-black">
              <h3 className="text-3xl font-bold">
                Our Values – Built on Trust, Transparency, and Respect
              </h3>
              <p className="text-lg leading-8">
                We&apos;re not a big, faceless corporation. We&apos;re your neighbors,
                and we believe in giving back to our community. When you choose
                YYC Cash for Cars, you&apos;re supporting a locally-owned business
                that cares about its customers and the Calgary area. Our
                commitment to exceptional service means we work hard to earn
                your trust every single day.
              </p>
              <p className="text-lg leading-8">
                The typical car-selling process can take weeks, involve endless
                negotiations, and often end in frustration. That&apos;s not the
                case with us. We&apos;ve designed a process that is fast, simple,
                and stress-free. Within hours of your call or request, we&apos;ll
                make an offer, schedule a pickup, and take your car off your
                hands.
              </p>
              <p className="text-lg leading-8">
                We care about the planet just as much as we care about our
                customers. That&apos;s why we&apos;re committed to eco-friendly
                disposal of your vehicle. After we remove your car, we ensure it
                is properly recycled. Usable parts are salvaged and reused,
                fluids are safely disposed of, and any materials that can be
                recycled are sent to the appropriate channels. When you sell
                your car to YYC Cash for Cars, you&apos;re contributing to a more
                sustainable future.
              </p>
              <div className="grid gap-4 pt-2 md:grid-cols-3">
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4">
                  <p className="text-base font-semibold">Transparency</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    We believe in full transparency throughout the entire
                    process. From your initial quote to the final offer, there
                    are no hidden fees, no last-minute surprises. You&apos;ll
                    always know what to expect.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4">
                  <p className="text-base font-semibold">Customer-Centric</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    Our customers are at the heart of everything we do. We&apos;re
                    here to make your car-selling experience as easy and
                    rewarding as possible.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/80 bg-white/90 p-4">
                  <p className="text-base font-semibold">Respect for Time</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    We understand that your time is valuable. We ensure that
                    everything from our offer to our car removal process is
                    quick, efficient, and hassle-free.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-lg">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="p-6 lg:p-10">
              <div className="space-y-4 text-black">
                <h3 className="text-3xl font-bold">
                  Our Process – Simple, Fast, and Efficient
                </h3>
                <p className="text-lg leading-8">
                  We&apos;ve designed our service to make selling your vehicle easy
                  and hassle-free. Here&apos;s how our process works:
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-primary/10 bg-[#f8fbff] p-5">
                    <p className="text-base font-semibold text-black">
                      Step 1: Request a Free Quote
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      Reach out to us via phone or our website. We&apos;ll ask you a
                      few simple questions about your vehicle, and based on that
                      information, we&apos;ll give you a fair cash offer.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-[#fff8f6] p-5">
                    <p className="text-base font-semibold text-black">
                      Step 2: Accept the Offer
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      Once you accept our offer, we&apos;ll schedule a convenient
                      time to pick up your vehicle. We pride ourselves on
                      flexibility, so we&apos;ll work around your schedule.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-[#fff8f6] p-5">
                    <p className="text-base font-semibold text-black">
                      Step 3: Pickup and Cash
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      On the day of the pickup, we&apos;ll come to your location,
                      inspect the vehicle, and give you cash on the spot. We
                      take care of all the paperwork, and your car is gone in no
                      time.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-[#f8fbff] p-5">
                    <p className="text-base font-semibold text-black">
                      Step 4: Free Towing
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      If you need a junk car removal or scrap car removal,
                      we&apos;ll tow your vehicle free of charge — saving you the
                      hassle of arranging transportation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px]">
              <Image
                src="/images/gallery/g13.webp"
                alt="Simple vehicle pickup process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-primary/10 bg-gradient-to-r from-[#eef7ff] via-white to-[#fff2f4] p-6 shadow-lg lg:p-10">
          <div className="max-w-4xl space-y-4 text-black">
            <h3 className="text-3xl font-bold">Contact Us – Let&apos;s Get Started</h3>
            <p className="text-lg leading-8">
              If you&apos;re ready to sell your car and get cash for cars in
              Calgary, Chestermere, Airdrie, or Cochrane, YYC Cash for Cars is
              just a call away. We&apos;re here to make your car-selling experience
              fast, easy, and fair.
            </p>
            <p className="text-lg leading-8">
              <Link href="/contact" className="text-primary underline">
                Call us today
              </Link>{" "}
              for an instant quote, or fill out our form online to get started
              with your free, no-obligation offer. We look forward to serving
              you!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default function page() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb name={"About Us"} titleAs="h1" />
      <AboutHero />
      <AboutUsContent />
      <TestimonialSection />
      <StatsSection />
      <GallerySection />
    </div>
  );
}
