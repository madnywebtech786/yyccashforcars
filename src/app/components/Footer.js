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
    { name: "About Us", href: "/about" },
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
              className="inline-flex items-center justify-center w-full space-x-2 rounded-2xl p-2"
              aria-label="YYC Cash For Cars home"
            >
              <Image
                src={"/images/yyc-car-logo.png"}
                width={400}
                height={80}
                alt="YYC Cash For Cars logo"
                className="w-full h-28 bg-white rounded-xl p-2"
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
        <div className="container py-6 text-sm">
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
