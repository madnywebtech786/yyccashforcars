import React from "react";
import { Briefcase, FileText, Truck, Zap } from "lucide-react";
import Link from "next/link";

const serviceCards = [
  {
    title: "Cash for Junk Cars Calgary",
    icon: Zap,
    color: "from-[#4d88a9] to-[#4d88a9]/80",
    body: "If your car has been sitting in the driveway for two winters, won't start, has a transmission that gave up somewhere on Deerfoot Trail, or is simply costing you more in repairs than it will ever be worth — we want it.",
    bodyTwo:
      "We buy junk cars from every neighbourhood in Calgary. NW, NE, SE, SW, Downtown, the surrounding communities — it does not matter where you are or what shape the vehicle is in. Toyota, Honda, Ford, Dodge, Chevy, Hyundai, BMW, Subaru — we take all of them. Give us the year, the make, and a rough description of the condition, and we'll give you a number.",
    href: "/services/cash-for-junk-cars",
    cta: "Read More About Cash for Junk Cars",
  },
  {
    title: "Scrap Car Removal Calgary — Free Towing Every Time",
    icon: Truck,
    color: "from-[#bd3747] to-[#bd3747]/80",
    body: "Your scrap car is worth real money even when it no longer runs. Steel, aluminum, copper, and the platinum-group metals inside the catalytic converter all carry market value. We know what those materials are worth, and we pay you accordingly.",
    bodyTwo:
      "We pick up the vehicle for free from any address in Calgary, drain all fluids in compliance with Alberta Environment guidelines, and recycle through ARMA-registered facilities. The Alberta Registry disposal paperwork is handled by us. You get paid, the car gets recycled responsibly, and nothing comes back to you.",
    href: "/services/scrap-car-removal",
    cta: "Read More About Scrap Car Removal",
  },
  {
    title: "Accident and Insurance Write-Off Vehicles",
    icon: FileText,
    color: "from-black to-black/80",
    body: "If your insurer has declared your vehicle a total loss — from a collision, a hailstorm, a flood event near the Bow River, or anything else — we will buy it before you sign it over to the insurance company.",
    bodyTwo:
      "We regularly purchase write-offs with deployed airbags, bent frames, and serious structural damage. Call us first and find out what you could get.",
    href: "/contact",
    cta: "Get My Free Cash Offer",
  },
  {
    title: "Commercial and Fleet Vehicles",
    icon: Briefcase,
    color: "from-[#4d88a9] to-[#bd3747]",
    body: "Calgary's energy industry puts a lot of trucks and vans into service. When those vehicles reach the end of their working life, we buy them — pickup trucks, service vans, heavy-duty work trucks, and multi-vehicle lots.",
    bodyTwo:
      "If you're a contractor, a trades company, or a business with fleet vehicles to move, call us directly for fleet pricing.",
    href: "tel:+15877009806",
    cta: "Call for Fleet Pricing",
  },
];

export default function Services() {
  return (
    <section className="p-4 py-16 md:p-10 lg:p-10 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            What We Buy and{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              What We Do
            </span>{" "}
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            We buy junk cars, scrap vehicles, accident write-offs, commercial
            vehicles, and fleet units across Calgary and surrounding areas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {serviceCards.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-black/5 bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-secondary/10 blur-2xl" />

                <div className="relative space-y-5">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold leading-tight text-black">
                      {service.title}
                    </h4>
                  </div>

                  <p className="text-black/75 leading-relaxed">
                    {service.body}
                  </p>
                  <p className="text-black/75 leading-relaxed">
                    {service.bodyTwo}
                  </p>

                  <Link
                    href={service.href}
                    className={`inline-flex rounded-full bg-gradient-to-r ${service.color} px-5 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
