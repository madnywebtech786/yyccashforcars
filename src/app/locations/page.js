import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import Contact from "../sections/Contact";
import ProcessSection from "../sections/Process";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "Our Locations - YYC Cash for Cars",
  description:
    "YYC Cash for Cars serves Calgary and communities across Alberta with cash for cars, junk car removal, scrap car removal, free towing, and fast pickup.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: "Our Locations - YYC Cash for Cars",
    description:
      "YYC Cash for Cars serves Calgary and communities across Alberta with cash for cars, junk car removal, scrap car removal, free towing, and fast pickup.",
    images: [getOgImageForPath("locations")],
  },
  twitter: {
    title: "Our Locations - YYC Cash for Cars",
    description:
      "YYC Cash for Cars serves Calgary and communities across Alberta with cash for cars, junk car removal, scrap car removal, free towing, and fast pickup.",
    images: [getOgImageForPath("locations")],
  },
};

const locations = [
  {
    name: "Airdrie",
    href: "/locations/airdrie",
    area: "North Calgary",
    distance: "36 km",
    style: "from-[#f4fbff] to-white",
    tagline: "Cash for cars service with quick pickup in Airdrie.",
  },
  {
    name: "Brooks",
    href: "/locations/brooks",
    area: "Southeast Alberta",
    distance: "190 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with free towing in Brooks.",
  },
  {
    name: "Beiseker",
    href: "/locations/beiseker",
    area: "Northeast of Calgary",
    distance: "71 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Cash for cars service with free towing in Beiseker.",
  },
  {
    name: "Bearspaw",
    href: "/locations/bearspaw",
    area: "Rocky View County",
    distance: "22 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with free removal in Bearspaw.",
  },
  {
    name: "Bennett",
    href: "/locations/bennett",
    area: "Rocky View County",
    distance: "31 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Cash for cars service with free pickup in Bennett.",
  },
  {
    name: "Blackie",
    href: "/locations/blackie",
    area: "Foothills County",
    distance: "67 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with free towing in Blackie.",
  },
  {
    name: "Banff",
    href: "/locations/banff",
    area: "Mountain Region",
    distance: "127 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with free towing in Banff.",
  },
  {
    name: "Bragg Creek",
    href: "/locations/bragg-creek",
    area: "Rocky View County",
    distance: "44 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Fast junk and scrap vehicle removal in Bragg Creek.",
  },
  {
    name: "Canmore",
    href: "/locations/canmore",
    area: "Mountain Region",
    distance: "104 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Mountain-area cash for cars service with reliable removal.",
  },
  {
    name: "Carstairs",
    href: "/locations/carstairs",
    area: "Mountain View County",
    distance: "49 km",
    style: "from-[#f4fbff] to-white",
    tagline: "Fast cash for cars service with free pickup in Carstairs.",
  },
  {
    name: "Carseland",
    href: "/locations/carseland",
    area: "Wheatland County",
    distance: "59 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Fast cash for cars service with free towing in Carseland.",
  },
  {
    name: "Cheadle",
    href: "/locations/cheadle",
    area: "Wheatland County",
    distance: "48 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with free towing in Cheadle.",
  },
  {
    name: "Chestermere",
    href: "/locations/chestermere",
    area: "East Calgary",
    distance: "19 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast vehicle buying and towing service in Chestermere.",
  },
  {
    name: "Cochrane",
    href: "/locations/cochrane",
    area: "West Calgary",
    distance: "36 km",
    style: "from-[#fff7fb] to-white",
    tagline: "Cash for unwanted vehicles across Cochrane and nearby areas.",
  },
  {
    name: "Crossfield",
    href: "/locations/crossfield",
    area: "Rocky View County",
    distance: "41 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with free pickup in Crossfield.",
  },
  {
    name: "Cremona",
    href: "/locations/cremona",
    area: "Mountain View County",
    distance: "76 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast cash for cars service with fair pickup in Cremona.",
  },
  {
    name: "Delacour",
    href: "/locations/delacour",
    area: "Rocky View County",
    distance: "East of Calgary",
    style: "from-[#f7fbff] to-white",
    tagline: "Cash for cars in Delacour with free towing from your property.",
  },
  {
    name: "Didsbury",
    href: "/locations/didsbury",
    area: "Mountain View County",
    distance: "75 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Cash for cars in Didsbury with free towing from your property.",
  },
  {
    name: "Drumheller",
    href: "/locations/drumheller",
    area: "Badlands Region",
    distance: "135 km",
    style: "from-[#f4fbff] to-white",
    tagline: "Scrap and junk car removal service in Drumheller.",
  },
  {
    name: "High River",
    href: "/locations/high-river",
    area: "South Region",
    distance: "68 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Sell old or damaged vehicles fast in High River.",
  },
  {
    name: "Indus",
    href: "/locations/indus",
    area: "Rocky View County",
    distance: "35 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Cash for cars in Indus with free towing from your property.",
  },
  {
    name: "Lethbridge",
    href: "/locations/lethbridge",
    area: "Southern Alberta",
    distance: "215 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Cash for cars and scrap removal service in Lethbridge.",
  },
  {
    name: "Lake Louise",
    href: "/locations/lake-louise",
    area: "Banff National Park",
    distance: "184 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Fast cash for cars service with free towing in Lake Louise.",
  },
  {
    name: "Okotoks",
    href: "/locations/okotoks",
    area: "South Calgary",
    distance: "45 km",
    style: "from-[#fff7fb] to-white",
    tagline: "Quick quotes and hassle-free car pickup in Okotoks.",
  },
  {
    name: "Red Deer",
    href: "/locations/red-deer",
    area: "Central Alberta",
    distance: "151 km",
    style: "from-[#f7fbff] to-white",
    tagline: "Fast junk and scrap car removal service in Red Deer.",
  },
  {
    name: "Strathmore",
    href: "/locations/strathmore",
    area: "East Region",
    distance: "52 km",
    style: "from-[#f4fbff] to-white",
    tagline: "Fair cash offers for unwanted vehicles in Strathmore.",
  },
  {
    name: "Three Hills",
    href: "/locations/three-hills",
    area: "Kneehill County",
    distance: "132 km",
    style: "from-[#fff8f8] to-white",
    tagline: "Fast cash for cars service with free towing in Three Hills.",
  },
];

export default function LocationsPage() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb name="Locations" titleAs="h1" />

      <section className="bg-white px-4 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-[#f3faff] via-white to-[#fff5f7] p-6 shadow-xl md:p-8 lg:p-10">
            <div className="absolute -top-24 -right-20 h-64 w-64 rounded-full bg-primary/10" />
            <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-secondary/10" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary/20 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    Alberta Coverage
                  </span>
                  <span className="rounded-full border border-secondary/20 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
                    Free Towing
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700">
                    Fast Pickup
                  </span>
                </div>
                <h2 className="mb-4 text-4xl font-bold leading-tight text-black lg:text-5xl">
                  Explore the cities we currently serve
                </h2>
                <p className="max-w-3xl text-base leading-relaxed text-gray-700">
                  YYC Cash for Cars helps vehicle owners across all of Calgary
                  and multiple surrounding Alberta communities with junk car
                  buying, scrap vehicle removal, free towing, and quick pickup.
                  Choose a city below to view local service details and
                  area-specific coverage.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="tel:+15877009806"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    Call Now
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    Service Radius
                  </p>
                  <p className="mt-2 text-3xl font-bold text-black">
                    Growing Coverage
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    Coverage across Calgary-adjacent communities plus Badlands,
                    mountain, southern Alberta, and expanding service areas.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    Vehicle Types
                  </p>
                  <p className="mt-2 text-3xl font-bold text-black">
                    Cars, SUVs, Trucks
                  </p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">
                    We buy unwanted vehicles in almost any condition, including
                    non-running, damaged, scrap, and high-mileage units.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/80 bg-white/90 p-5 shadow-sm sm:col-span-2">
                  <p className="text-sm leading-7 text-gray-700">
                    We serve all of Calgary in full, and the location pages
                    below focus on the surrounding service cities outside the
                    core Calgary market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                  Our Coverage Area
                </p>
                <h2 className="mt-2 text-3xl font-bold text-black">
                  Areas We Serve
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-7 text-gray-700">
                We serve Calgary and communities across Alberta, buying junk
                cars for cash, scrap cars, damaged vehicles, and unwanted
                non-running cars with fast pickup and free towing.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[...locations]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((location) => (
                <Link
                  key={location.href}
                  href={location.href}
                  className={`group relative overflow-hidden rounded-[1.8rem] border border-gray-100 bg-gradient-to-br ${location.style} p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" />
                  <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                          {location.area}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-black">
                          {location.name}
                        </h3>
                        <p className="mt-3 max-w-[15rem] text-sm leading-6 text-gray-700">
                          {location.tagline}
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/80 bg-white/80 px-3 py-2 text-right shadow-sm">
                        <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                          Distance
                        </p>
                        <p className="text-sm font-bold text-black">
                          {location.distance}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="text-sm font-semibold text-primary">
                        Learn More
                      </div>
                      <span className="text-xl text-gray-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl">
        <ProcessSection />
      </div>

      <section className="bg-white px-4 pb-16 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Contact />
        </div>
      </section>
    </div>
  );
}
