import {
  AlertTriangle,
  Car,
  Clock,
  Cog,
  Gauge,
  Truck,
  Wrench,
} from "lucide-react";

const vehicleTypes = [
  {
    title: "Scrap cars",
    description: "(Not worth repairing)",
    icon: Wrench,
  },
  {
    title: "Junk cars",
    description: "(Non-running, damaged, or missing parts)",
    icon: Car,
  },
  {
    title: "Accident vehicles",
    description: "(Collision damage / write-offs)",
    icon: AlertTriangle,
  },
  {
    title: "High-mileage used cars",
    description: "",
    icon: Gauge,
  },
  {
    title: "Old cars sitting unused",
    description: "",
    icon: Clock,
  },
  {
    title: "Fleet & commercial vehicles",
    description: "",
    icon: Truck,
  },
  {
    title: "Vehicles with mechanical problems",
    description: "(Engine, transmission, etc.)",
    icon: Cog,
  },
];

export default function VehicleTypesSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#fdf3ea] via-white to-[#e8f7ff] p-8 md:p-12 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.5)]">
          <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-primary/15 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-secondary/20 blur-2xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-black/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black/70">
                We Buy Vehicles That Are
              </span>

              <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
                From scrap to fleet, we tow it all.
              </h2>

              <p className="max-w-xl text-base text-black/70 md:text-lg">
                Whatever condition your vehicle is in, we make the process fast and
                straightforward with instant offers and free pickup.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {vehicleTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.title}
                    className="group flex flex-col gap-3 rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black">
                          {type.title}
                        </h3>
                        {type.description ? (
                          <p className="mt-1 text-sm text-black/60">
                            {type.description}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
