import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function WorkingAreasSection() {
  const workingAreas = [
    {
      id: 1,
      name: "Calgary",
      area: "Core Market",
      distance: "Citywide",
      primary: true,
      href: "/",
      style: "from-[#eef8ff] to-white",
      tagline: "We serve all of Calgary with fast cash offers and free towing.",
    },
    {
      id: 2,
      name: "Airdrie",
      area: "North Calgary",
      distance: "36 km",
      primary: false,
      href: "/locations/airdrie",
      style: "from-[#f4fbff] to-white",
      tagline: "Cash for cars service with quick pickup in Airdrie.",
    },
    {
      id: 5,
      name: "Chestermere",
      area: "East Calgary",
      distance: "19 km",
      primary: false,
      href: "/locations/chestermere",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars Chestermere with fast towing.",
    },
    {
      id: 4,
      name: "Cochrane",
      area: "West Calgary",
      distance: "36 km",
      primary: false,
      href: "/locations/cochrane",
      style: "from-[#fff7fb] to-white",
      tagline: "Cash for unwanted vehicles across Cochrane and nearby areas.",
    },
    {
      id: 20,
      name: "Crossfield",
      area: "Rocky View County",
      distance: "41 km",
      primary: false,
      href: "/locations/crossfield",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Crossfield.",
    },
    {
      id: 8,
      name: "Canmore",
      area: "Mountain Region",
      distance: "104 km",
      primary: false,
      href: "/locations/canmore",
      style: "from-[#fff8f8] to-white",
      tagline: "Mountain-area cash for cars service with reliable removal.",
    },
    {
      id: 19,
      name: "Carstairs",
      area: "Mountain View County",
      distance: "49 km",
      primary: false,
      href: "/locations/carstairs",
      style: "from-[#f4fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Carstairs.",
    },
    {
      id: 21,
      name: "Carseland",
      area: "Wheatland County",
      distance: "59 km",
      primary: false,
      href: "/locations/carseland",
      style: "from-[#fff8f8] to-white",
      tagline: "Cash for cars and scrap removal service in Carseland.",
    },
    {
      id: 22,
      name: "Cheadle",
      area: "Wheatland County",
      distance: "48 km",
      primary: false,
      href: "/locations/cheadle",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Cheadle.",
    },
    {
      id: 13,
      name: "Banff",
      area: "Mountain Region",
      distance: "127 km",
      primary: false,
      href: "/locations/banff",
      style: "from-[#f7fbff] to-white",
      tagline: "Fast cash for cars service with free towing in Banff.",
    },
    {
      id: 12,
      name: "Bragg Creek",
      area: "Rocky View County",
      distance: "44 km",
      primary: false,
      href: "/locations/bragg-creek",
      style: "from-[#fff8f8] to-white",
      tagline: "Fast junk and scrap vehicle removal in Bragg Creek.",
    },
    {
      id: 11,
      name: "Red Deer",
      area: "Central Alberta",
      distance: "151 km",
      primary: false,
      href: "/locations/red-deer",
      style: "from-[#f7fbff] to-white",
      tagline: "Fast junk and scrap car removal in Red Deer.",
    },
    {
      id: 9,
      name: "Drumheller",
      area: "Badlands Region",
      distance: "135 km",
      primary: false,
      href: "/locations/drumheller",
      style: "from-[#f4fbff] to-white",
      tagline: "Scrap and junk car removal service in Drumheller.",
    },
    {
      id: 6,
      name: "High River",
      area: "South Region",
      distance: "68 km",
      primary: false,
      href: "/locations/high-river",
      style: "from-[#fff8f8] to-white",
      tagline: "Sell old or damaged vehicles fast in High River.",
    },
    {
      id: 3,
      name: "Okotoks",
      area: "South Calgary",
      distance: "45 km",
      primary: false,
      href: "/locations/okotoks",
      style: "from-[#fff7fb] to-white",
      tagline: "Quick quotes and hassle-free car pickup in Okotoks.",
    },
    {
      id: 7,
      name: "Strathmore",
      area: "East Region",
      distance: "52 km",
      primary: false,
      href: "/locations/strathmore",
      style: "from-[#f4fbff] to-white",
      tagline: "Fair cash offers for unwanted vehicles in Strathmore.",
    },
    {
      id: 10,
      name: "Lethbridge",
      area: "Southern Alberta",
      distance: "215 km",
      primary: false,
      href: "/locations/lethbridge",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Lethbridge.",
    },
    {
      id: 11,
      name: "Brooks",
      area: "Southern Alberta",
      distance: "190 km",
      primary: false,
      href: "/locations/brooks",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Brooks.",
    },
    {
      id: 14,
      name: "Beiseker",
      area: "Northeast of Calgary",
      distance: "71 km",
      primary: false,
      href: "/locations/beiseker",
      style: "from-[#fff8f8] to-white",
      tagline: "Cash for cars and scrap removal service in Beiseker.",
    },
    {
      id: 15,
      name: "Bearspaw",
      area: "Rocky View County",
      distance: "22 km",
      primary: false,
      href: "/locations/bearspaw",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Bearspaw.",
    },
    {
      id: 16,
      name: "Bennett",
      area: "Rocky View County",
      distance: "31 km",
      primary: false,
      href: "/locations/bennett",
      style: "from-[#fff8f8] to-white",
      tagline: "Cash for cars and scrap removal service in Bennett.",
    },
    {
      id: 17,
      name: "Blackie",
      area: "Foothills County",
      distance: "67 km",
      primary: false,
      href: "/locations/blackie",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Blackie.",
    },
    {
      id: 18,
      name: "Cremona",
      area: "Mountain View County",
      distance: "76 km",
      primary: false,
      href: "/locations/cremona",
      style: "from-[#fff8f8] to-white",
      tagline: "Cash for cars and scrap removal service in Cremona.",
    },
    {
      id: 23,
      name: "Three Hills",
      area: "Kneehill County",
      distance: "132 km",
      primary: false,
      href: "/locations/three-hills",
      style: "from-[#fff8f8] to-white",
      tagline: "Cash for cars and scrap removal service in Three Hills.",
    },
    {
      id: 24,
      name: "Lake Louise",
      area: "Banff National Park",
      distance: "184 km",
      primary: false,
      href: "/locations/lake-louise",
      style: "from-[#f7fbff] to-white",
      tagline: "Cash for cars and scrap removal service in Lake Louise.",
    },
  ];

  return (
    <section className="bg-white p-4 py-12 md:p-10 lg:p-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center">
          <h3 className="mb-4 text-4xl font-bold text-black">
            Areas{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We Serve
            </span>{" "}
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-black">
            We serve all of Calgary plus surrounding Alberta communities with
            fast pickup, free towing, and city-specific coverage pages.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {[...workingAreas]
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className={`group flex min-h-20 items-center justify-between gap-3 rounded-2xl border px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                area.primary
                  ? "border-primary/30 bg-gradient-to-br from-[#eaf7ff] via-white to-[#fff4f6]"
                  : "border-gray-100 bg-white"
              }`}
            >
              <span className="font-bold text-black">{area.name}</span>
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
