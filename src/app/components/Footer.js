import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Facebook size={16} />,
      href: "https://www.facebook.com/people/YYC-Cash-For-Cars/100083270712666/#",
    },
    {
      icon: <Instagram size={16} />,
      href: "https://www.instagram.com/yyc_cash_for_cars/",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-gray-300 ">
      <div className="py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4 pr-4">
            <Link
              href="/"
              className="inline-flex items-center justify-start w-full space-x-2 rounded-2xl p-2"
              aria-label="YYC Cash For Cars home"
            >
              <Image
                src={"/images/yyc-car-logo.png"}
                width={310}
                height={96}
                alt="YYC Cash For Cars logo"
                className="h-24 w-auto bg-white rounded-xl p-2"
              />
            </Link>
            <p className="text-white text-base leading-relaxed">
              Calgary cash buyer for junk and used cars quick offers by phone.
              We buy all makes and conditions and pay fair, on-the-spot cash
              with free towing.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Quick Links</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white hover:text-primary-red hover:pl-2 transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h4 className="font-bold text-xl text-white mb-3">Contact Us</h4>
            <div className="w-16 h-0.5 bg-primary-red mb-5"></div>
            <ul className="space-y-4 text-white">
              <li className="flex items-start space-x-3">
                <Phone
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+15877009806"
                  className="hover:text-primary-red transition-colors"
                >
                  587-700-9806
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:yyccashforcars786@gmail.com"
                  className="hover:text-primary-red transition-colors"
                >
                  yyccashforcars786@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={20}
                  className="text-primary-red mt-1 flex-shrink-0"
                />
                <p className="hover:text-primary-red transition-colors">
                  Calgary & Nearby
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Location/Opening Hours */}
          <div>
  <h4 className="font-bold text-xl text-white mb-3 footer-follow-heading">Follow Us</h4>

  <div className="flex space-x-3 pt-2 items-center footer-follow-icons">
    {socialLinks.map((link, index) => (
      <div
        key={index}
        className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-primary-red hover:border-primary-red transition-all duration-300 cursor-default"
      >
        {link.icon}
      </div>
    ))}

    {/* TikTok icon (no link) */}
    <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full">
      <Image
        src="/images/icons/tiktok.png"
        width={40}
        height={40}
        alt="TikTok"
        className="p-2"
      />
    </div>
  </div>

  <div className="mt-6">

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321243.3363692961!2d-114.34104816452238!3d51.02144032571336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdef6ee8d65022fd%3A0x47d7f94f17c10a33!2sYYC%20Cash%20For%20Cars!5e0!3m2!1sen!2s!4v1770932518348!5m2!1sen!2s"
      width="100%"
      height="200"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="YYC Cash For Cars map"
      className="w-full h-[200px] rounded-xl mb-4"
    />
    <a
      href="https://g.page/r/CTMKwRdP-ddHEAE/review"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-full bg-white text-primary font-semibold px-6 py-2 hover:shadow-lg transition-all duration-300"
    >
      Leave Us a Review
    </a>
  </div>
</div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="w-full py-6 px-4 sm:px-8 md:px-12 lg:px-20 text-sm">
          <div className="flex justify-center items-center space-y-4 sm:space-y-0">
            <p className=" text-white">
              © Copyright 2025, YYC Cash for cars . All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

