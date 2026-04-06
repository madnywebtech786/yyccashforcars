import Link from "next/link";
import { CheckCircle2, Clock3, PhoneCall, ArrowRight } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";

export const metadata = {
  title: "Thank You - YYC Cash for Cars",
  description: "Thank you for reaching out to YYC Cash for Cars.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb
        name="Thank You"
        subtitle="Your request has been sent to YYC Cash for Cars."
        titleAs="h1"
      />
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-[#eef7ff] via-white to-[#fff3f4] shadow-xl">
            <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1.1fr)_360px] lg:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">
                  <CheckCircle2 className="h-4 w-4" />
                  Submission received
                </div>

                <h2 className="mt-5 text-3xl font-bold text-black md:text-4xl">
                  Your request is in. We will review your vehicle details and follow up shortly.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
                  Our team has received your form submission. If your vehicle
                  details are complete, the next step is a quick review followed
                  by a cash offer and pickup coordination.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                    <Clock3 className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-lg font-semibold text-black">
                      Quick review
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      We check the vehicle details you submitted and prepare the next step.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-secondary/10 bg-white p-5 shadow-sm">
                    <PhoneCall className="h-5 w-5 text-secondary" />
                    <h3 className="mt-3 text-lg font-semibold text-black">
                      Fast follow-up
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      Expect a call or message from our team to confirm the details.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white p-5 shadow-sm">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <h3 className="mt-3 text-lg font-semibold text-black">
                      Offer and pickup
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-700">
                      Once confirmed, we move to your offer, towing, and pickup scheduling.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:+15877009806"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    Call (587) 700-9806
                  </a>
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/70 bg-white/90 p-6 shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-secondary">
                  What happens next
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    "We review your request and vehicle details.",
                    "A team member reaches out to confirm the information.",
                    "You receive a fair cash offer based on the details provided.",
                    "If you accept, we arrange pickup and towing.",
                  ].map((step) => (
                    <div
                      key={step}
                      className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-4"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <p className="text-sm leading-6 text-gray-700">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-primary to-secondary p-5 text-white">
                  <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                    Need help now?
                  </p>
                  <p className="mt-2 text-base leading-7">
                    If your request is urgent, call us directly and we can help
                    you faster.
                  </p>
                  <a
                    href="tel:+15877009806"
                    className="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary"
                  >
                    Call now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
