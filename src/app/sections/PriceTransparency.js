import Link from "next/link";

const payoutRanges = [
  ["Running vehicle, decent condition", "$500 - $10,000"],
  ["Running, high mileage (150k+ km)", "$500 - $3,000"],
  ["Non-running, repairable damage", "$400 - $2,000"],
  ["Hail-damaged - Calgary storm season", "$300 - $2,500"],
  ["Accident write-off / insurance total", "$300 - $3,000"],
  ["Flood or fire-damaged vehicle", "$300 - $1,200"],
  ["End-of-life scrap, non-running", "$300 - $800"],
  ["Commercial truck / fleet vehicle", "$800 - $10,000+"],
];

export default function PriceTransparencySection() {
  return (
    <section className="bg-white p-4 py-16 md:p-10 lg:p-10">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-black/5 bg-gradient-to-br from-[#eef8ff] via-white to-[#fff4f6] p-6 shadow-[0_25px_70px_-45px_rgba(0,0,0,0.5)] md:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="space-y-5">
          <span className="inline-flex rounded-full bg-black/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black/70">
            Price Transparency
          </span>
          <h2 className="text-3xl font-bold leading-tight text-black md:text-5xl">
            What We Actually Pay for Cars in Calgary
          </h2>
          <p className="text-lg leading-relaxed text-black/75">
            Everyone says "top dollar." Your offer depends on the year and
            make, the condition of the body and drivetrain, what parts are still
            usable, and what Alberta's scrap metal market is doing that week.
            A 2009 Toyota Camry with a seized engine is worth something
            different than a running 2017 Ford F-150 - and we price them
            honestly. Here is a general range so you know what to expect before
            you call:
          </p>
          <p className="text-lg leading-relaxed text-black/75">
            These are real ranges, not inflated numbers meant to get you to
            call. The only way to get your exact number is to tell us about the
            vehicle - takes three minutes on the phone.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105"
          >
            Get My Free Cash Offer
          </Link>
        </div>

        <div className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl">
          <div className="grid grid-cols-[1.4fr_0.9fr] bg-black px-5 py-4 text-sm font-bold uppercase tracking-wide text-white">
            <span>Vehicle Type</span>
            <span>Typical Payout (CAD)</span>
          </div>
          {payoutRanges.map(([type, payout]) => (
            <div
              key={type}
              className="grid grid-cols-[1.4fr_0.9fr] gap-4 border-t border-black/5 px-5 py-4 text-sm text-black md:text-base"
            >
              <span>{type}</span>
              <span className="font-bold text-primary">{payout}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
