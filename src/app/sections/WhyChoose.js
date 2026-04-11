import { BadgeCheck, DollarSign, FileCheck, ShieldCheck, ThermometerSun } from "lucide-react";

const reasons = [
  {
    title: "AMVIC-Compliant — The Only Calgary Scrap Buyer That Says It Plainly",
    icon: ShieldCheck,
    body: "AMVIC, the Alberta Motor Vehicle Industry Council, regulates automotive dealers and buyers in this province. We operate in full compliance. That means you are protected legally when you sell to us — not handing your keys and title to someone with no accountability. Ask for our AMVIC registration number when our driver arrives.",
  },
  {
    title: "We Price Against Real Alberta Scrap Metal Rates",
    icon: DollarSign,
    body: "Our offers are built on what Alberta's steel, aluminum, copper, and catalytic converter metals are worth right now — not what they were worth six months ago. When commodity prices go up in Alberta's industrial market, your offer goes up with them.",
  },
  {
    title: "Cash or Interac e-Transfer — Paid Before We Move the Vehicle",
    icon: BadgeCheck,
    body: "You choose how you want to be paid. Most Calgary sellers prefer Interac e-Transfer for larger amounts — it is instant, traceable, and safe. Others want cash in hand. Either way, payment happens before our driver touches your car. Not after. Not later. Before.",
  },
  {
    title: "We Know Calgary's Damage Patterns",
    icon: ThermometerSun,
    body: "Chinook cycles crack suspension components and destroy undercarriage. June and July hailstorms total thousands of SE and SW Calgary vehicles every year. Spring flooding near the Bow and Elbow rivers damages cars in Inglewood, Seton, and surrounding areas. We price Calgary-specific damage fairly because we see it every week — you will not be penalized for conditions that are common here.",
  },
  {
    title: "Title Transfer and Paperwork — Done by Us",
    icon: FileCheck,
    body: "Once you sign the vehicle over, we register the title transfer through Alberta Registry immediately. Any future fines, tickets, or liabilities tied to that vehicle are no longer your problem from the moment we take it.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white p-4 py-16 md:p-10 lg:p-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black md:text-5xl">
            Why Calgary Car Sellers{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pick YYC Cash
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-black">
            AMVIC-compliant service, real Alberta scrap market pricing, payment
            before removal, Calgary-specific damage knowledge, and paperwork
            handled for you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-black/5 bg-gradient-to-br from-white via-white to-[#eef8ff] p-7 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-black text-white">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-black">
                    {reason.title}
                  </h3>
                </div>
                <p className="leading-relaxed text-black/75">{reason.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
