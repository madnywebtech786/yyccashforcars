import { Users, ShieldCheck } from "lucide-react";
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

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Cash for Cars Calgary — Get Top Dollar + Free Pickup
            </h2>

            <p className="text-lg text-black leading-relaxed">
              Are You Searching for Quick Cash for Cars Calgary Without Hassles and Free Pickup Want Fast, Hassle-free Car Buying Solutions in Calgary? YYC Cash makes selling unwanted vehicles an effortless process--whether running, damaged, accidental, old rusted or completely non-starting! We provide instant offers, free towing services, same or next day pickup throughout Calgary and its nearby communities so that you get paid without hassle of listings, messages or no shows!
            </p>

            <p className="text-lg text-black leading-relaxed">
              Calgary's Local Junk and Scrap Car Buyers Selling privately can take weeks,
              while dealers don't always want older or damaged vehicles.
              By choosing YYC Cash as your <a href="https://www.yyccash.com/" className="text-primary font-semibold hover:text-secondary underline">local junk and scrap car buyers</a> in Calgary,
              we make it simple with straightforward cash offers based on vehicle details
              such as make, model, year, condition and location. 
              Being local means we understand busy Calgary schedules as well as seasonal wear on 
              vehicles needing quick pickups when blocking driveways or taking up parking spots.

            </p>

            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Proudly Locally Owned & Operated</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Completely Insured Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
