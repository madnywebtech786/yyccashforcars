import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function AboutUsSection() {
  return (
    <div className="p-4 py-16 md:p-10 lg:p-10 bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image with Absolute Divs */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/blog/scrap-car-removal-calgary-yyc.jpg"
                alt="About Cash 4Cars"
                className="w-full h-full object-cover"
              />

              {/* Bottom Left Absolute Div */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={50}
                    aria-hidden="true"
                    className="text-secondary"
                  />
                  <div>
                    <div className="text-secondary font-bold text-lg mb-1">
                      Best Scrap Car Removal in Calgary
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-black leading-tight">
              Calgary's Own Cash for Cars Buyer - Not a Chain, Not a Middleman
            </h2>

            <p className="text-lg text-black leading-relaxed">
              We started <Link
                href="/"
                className="font-semibold text-primary underline hover:text-secondary"
            >
              YYC Cash For Cars
            </Link>{" "} because selling a car in Calgary was harder
              than it needed to be. Dealers would not touch older vehicles,
              private buyers wasted your time, and the few junk car services
              around lowballed everyone. So we fixed it.
            </p>

            <p className="text-lg text-black leading-relaxed">
              We give you a real number based on your actual vehicle - the year,
              make, condition, and current Alberta scrap market - and we stick to
              it. No surprise deductions when our driver shows up. No cheques
              that clear a week later. You get what we quoted, in cash or by
              Interac e-Transfer, before we move your car off your property.
            </p>

            <p className="text-lg text-black leading-relaxed">
              We are AMVIC-compliant, fully insured, and we handle the Alberta
              Registry title transfer ourselves. If you need{" "}
              <Link
                href="/services/cash-for-junk-cars"
                className="font-semibold text-primary underline hover:text-secondary"
              >
                junk car removal
              </Link>{" "}
              or{" "}
              <Link
                href="/services/scrap-car-removal"
                className="font-semibold text-primary underline hover:text-secondary"
              >
                scrap car removal
              </Link>{" "}
              in Calgary, the process is built to protect your time and your
              paperwork. You are protected from parking tickets, fines, or any
              liability tied to that vehicle the moment we take possession.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Locally Owned - Calgary, AB</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>AMVIC-Compliant Automotive Business</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Fully Insured & Bonded</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Alberta Registry Title Transfer Handled</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>2,500+ Vehicles Purchased</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Open 24 Hours 7 Days a Week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
