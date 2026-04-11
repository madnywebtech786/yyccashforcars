import { CheckCircle } from "lucide-react";

const vehicleTypes = [
  "Won't start or non-running",
  "Blown engine or seized transmission",
  "Hail damage — Calgary storm season specialty",
  "Flood damage from Bow or Elbow River events",
  "Accident damage, insurance write-offs",
  "Fire damage",
  "Missing catalytic converter, wheels, or major parts",
  "Vehicles with outstanding liens",
  "Vehicles without a title — call us first",
  "High mileage with mechanical problems",
  "Commercial trucks and fleet vehicles",
  "Motorcycles, ATVs, RVs, and trailers",
];

const exampleVehicles = [
  "A 2003 Honda Accord with 320,000 km on it.",
  "A 2018 Dodge Ram with a blown motor.",
  "A 2010 Mazda3 that got totalled in a SW Calgary hailstorm.",
  "An old work van from a trades company in NE Calgary.",
  "We buy all of it.",
];

const makesWeBuy = [
  "Toyota",
  "Honda",
  "Ford",
  "Chevrolet",
  "GMC",
  "Dodge",
  "Ram",
  "Chrysler",
  "Jeep",
  "Hyundai",
  "Kia",
  "Nissan",
  "Mazda",
  "Subaru",
  "Volkswagen",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Cadillac",
  "Buick",
  "Pontiac",
  "Saturn",
  "Every other make and model registered in Alberta",
];

export default function VehicleTypesSection() {
  return (
    <section className="bg-white py-16 md:py-10">
      <div className="mx-auto w-full px-4 md:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-gradient-to-br from-[#fdf3ea] via-white to-[#e8f7ff] p-8 md:p-12 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.5)]">
          <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full bg-primary/15 blur-2xl" />
          <div className="absolute -bottom-16 -left-10 h-52 w-52 rounded-full bg-secondary/20 blur-2xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-5">
              <span className="inline-flex items-center rounded-full bg-black/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black/70">
                We are not selective
              </span>

              <h2 className="text-3xl font-bold text-black md:text-4xl lg:text-5xl">
                We Buy Every Vehicle — Any Condition, Any Year
              </h2>

              <div className="max-w-xl space-y-3">
                {exampleVehicles.map((vehicle) => (
                  <div
                    key={vehicle}
                    className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white/80 p-4 text-base text-black/75 shadow-sm"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary text-white">
                      <CheckCircle size={15} aria-hidden="true" />
                    </span>
                    <span>{vehicle}</span>
                  </div>
                ))}
              </div>
              <div className="max-w-xl">
                <p className="mb-3 text-base font-semibold text-black md:text-lg">
                  Makes we buy include:
                </p>
                <div className="flex flex-wrap gap-2">
                  {makesWeBuy.map((make) => (
                    <span
                      key={make}
                      className="rounded-full border border-primary/15 bg-white px-3 py-2 text-sm font-semibold text-black/75 shadow-sm"
                    >
                      {make}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-base font-semibold text-black md:text-lg">
                Conditions we accept:
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {vehicleTypes.map((type) => (
                  <div
                    key={type}
                    className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white/80 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white">
                      <CheckCircle size={20} aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-semibold text-black md:text-lg">
                      {type}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
