import Link from "next/link";
import { Compass, Star } from "lucide-react";

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
  ];

  return (
    <section className="bg-white p-4 py-16 md:p-10 lg:p-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 text-center">
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

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {workingAreas.map((area) => (
            <Link
              key={area.id}
              href={area.href}
              className={`group relative overflow-hidden rounded-[1.8rem] border p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                area.primary
                  ? "border-primary/20 bg-gradient-to-br from-[#eaf7ff] via-white to-[#fff4f6]"
                  : `border-gray-100 bg-gradient-to-br ${area.style}`
              }`}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" />
              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {area.area}
                    </p>
                    <h5 className="mt-2 text-2xl font-bold text-black">
                      {area.name}
                    </h5>
                    <p className="mt-3 max-w-[15rem] text-sm leading-6 text-gray-700">
                      {area.tagline}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/80 bg-white/80 px-3 py-2 text-right shadow-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                      Distance
                    </p>
                    <p className="text-sm font-bold text-black">
                      {area.distance}
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
          <div className="group relative overflow-hidden rounded-[1.8rem] border border-primary/15 bg-gradient-to-br from-[#f3faff] via-white to-[#fff5f7] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-secondary/10 blur-2xl" />
            <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h5 className="text-2xl font-bold text-black">
                    Growing Alberta Coverage
                  </h5>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm leading-7 text-gray-700">
                  We provide cash for cars in Calgary and across Alberta,
                  including scrap car removal, junk car removal, and fast cash
                  offers for unwanted vehicles.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <Link
                  href="/locations"
                  className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm">
                    <Compass className="h-4 w-4" />
                  </span>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
