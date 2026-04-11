import Link from "next/link";
import { ArrowLeft, Car, Home, MapPin, Phone } from "lucide-react";

const helpfulLinks = [
  {
    label: "Cash for Junk Cars",
    href: "/services/cash-for-junk-cars",
  },
  {
    label: "Scrap Car Removal",
    href: "/services/scrap-car-removal",
  },
  {
    label: "Areas We Serve",
    href: "/locations",
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-8 md:px-12 lg:px-20">
      <div className="pointer-events-none absolute -left-28 top-24 h-72 w-72 rounded-full bg-primary/15 blur-[100px]" />
      <div className="pointer-events-none absolute -right-28 bottom-16 h-80 w-80 rounded-full bg-secondary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid overflow-hidden rounded-[2.4rem] border border-black/5 bg-gradient-to-br from-[#eef8ff] via-white to-[#fff4f6] shadow-[0_30px_90px_-55px_rgba(0,0,0,0.55)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex min-h-[22rem] items-center justify-center bg-[#07141d] p-10 text-white">
            <div className="relative">
              <div className="absolute -left-10 -top-10 h-28 w-28 rounded-full bg-primary/30 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-28 w-28 rounded-full bg-secondary/30 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center backdrop-blur">
                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-primary">
                  <Car size={42} aria-hidden="true" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/60">
                  Page Not Found
                </p>
                <div className="mt-3 text-7xl font-black tracking-tight md:text-8xl">
                  404
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-14">
            <p className="mb-4 inline-flex rounded-full bg-black/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-black/60">
              Wrong Turn
            </p>
            <h1 className="text-4xl font-bold leading-tight text-black md:text-5xl">
              This page is gone, but your car quote is still one click away.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-black/70">
              The link may be outdated or the page may have moved. Use one of
              the shortcuts below to get back to YYC Cash for Cars.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get My Free Cash Offer
              </Link>
              <a
                href="tel:+15877009806"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-6 py-3 font-bold text-black transition hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-lg"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call 587-700-9806
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              <Link
                href="/"
                className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Home className="h-5 w-5 text-primary" />
                Back to Homepage
                <ArrowLeft className="ml-auto h-4 w-4 rotate-180 text-black/30 transition group-hover:translate-x-1 group-hover:text-primary" />
              </Link>
              {helpfulLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-white p-4 font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <MapPin className="h-5 w-5 text-secondary" />
                  {link.label}
                  <ArrowLeft className="ml-auto h-4 w-4 rotate-180 text-black/30 transition group-hover:translate-x-1 group-hover:text-secondary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
