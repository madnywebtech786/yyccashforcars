import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MapPin, Phone, Star } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Blog", href: "/blog" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms of Use", href: "/terms-of-use" },
];

const serviceLinks = [
  { name: "Cash for Junk Cars", href: "/services/cash-for-junk-cars" },
  { name: "Scrap Car Removal", href: "/services/scrap-car-removal" },
  { name: "Junk Car Recycling", href: "/services#junk-car-recycling" },
  { name: "Free Towing Service", href: "/services#free-towing" },
];

const cityLinks = [
  { name: "Calgary", href: "/" },
  { name: "Cochrane", href: "/locations/cochrane" },
  { name: "Okotoks", href: "/locations/okotoks" },
  { name: "Chestermere", href: "/locations/chestermere" },
  { name: "Strathmore", href: "/locations/strathmore" },
  { name: "High River", href: "/locations/high-river" },
  { name: "All Across Alberta", href: "/locations/" },
];

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/people/YYC-Cash-For-Cars/100083270712666/#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/yyc_cash_for_cars/",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07141d] text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-secondary/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-8 lg:px-10">
        <div className="mb-10 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur md:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Ready to turn an unwanted vehicle into cash?
              </h2>
              <p className="mt-4 max-w-3xl text-white/75">
                Fast quotes, free towing, cash or Interac e-Transfer on pickup,
                and paperwork handled across Calgary and nearby communities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-white px-6 py-3 text-center font-bold text-primary transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Get My Free Cash Offer
              </Link>
              <a
                href="tel:+15877009806"
                className="rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-center font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Call 587-700-9806
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr]">
          <div>
            <Link href="/" aria-label="YYC Cash For Cars home">
              <Image
                src="/images/yyc-car-logo.png"
                width={260}
                height={80}
                alt="YYC Cash For Cars logo"
                className="h-20 w-auto rounded-2xl bg-white p-2"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-white/75">
              Locally owned Calgary cash buyer for junk cars, scrap vehicles,
              write-offs, fleet units, and unwanted vehicles in almost any
              condition.
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href="tel:+15877009806"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-white/10"
              >
                <Phone size={20} className="text-secondary" />
                <span className="font-semibold">587-700-9806</span>
              </a>
              <a
                href="mailto:yyccashforcars786@gmail.com"
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition hover:bg-white/10"
              >
                <Mail size={20} className="text-secondary" />
                <span className="break-all font-semibold">
                  yyccashforcars786@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                <MapPin size={20} className="text-secondary" />
                <span className="font-semibold">Calgary & All across Alberta</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-bold">Areas We Serve</h3>
            <div className="mb-6 flex flex-wrap gap-2">
              {cityLinks.map((city) => (
                <Link
                  key={city.name}
                  href={city.href}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/75 transition hover:bg-white hover:text-primary"
                >
                  {city.name}
                </Link>
              ))}
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321243.3363692961!2d-114.34104816452238!3d51.02144032571336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdef6ee8d65022fd%3A0x47d7f94f17c10a33!2sYYC%20Cash%20For%20Cars!5e0!3m2!1sen!2s!4v1770932518348!5m2!1sen!2s"
                width="100%"
                height="190"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YYC Cash For Cars map"
                className="h-[190px] w-full rounded-2xl"
              />
              <a
                href="https://g.page/r/CTMKwRdP-ddHEAE/review"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-primary transition hover:shadow-xl"
              >
                <Star size={18} className="fill-current" />
                Leave Us a Review
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2025, YYC Cash for Cars. All Rights Reserved.</p>
          <p>All Days, 7am-11pm</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
