import Breadcrumb from "../components/Breadcrumb";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "Terms of Use | YYC Cash for Cars",
  description:
    "View the Terms of Use for yyccash.com. Learn about our vehicle quote process, inspection requirements, and offer validity in Calgary.",
  alternates: { canonical: "/terms-of-use" },
  openGraph: {
    title: "Terms of Use | YYC Cash for Cars",
    description:
      "View the Terms of Use for yyccash.com. Learn about our vehicle quote process, inspection requirements, and offer validity in Calgary.",
    images: [getOgImageForPath("terms-of-use")],
  },
  twitter: {
    title: "Terms of Use | YYC Cash for Cars",
    description:
      "View the Terms of Use for yyccash.com. Learn about our vehicle quote process, inspection requirements, and offer validity in Calgary.",
    images: [getOgImageForPath("terms-of-use")],
  },
};

const sections = [
  {
    title: "1. Services Provided",
    body: "YYC Cash For Cars acts as a digital storefront for Citywide Cash for Cars LTD to provide vehicle valuations and purchasing services. All transactions, towing, and paperwork are managed and fulfilled by Citywide Cash for Cars LTD.",
  },
  {
    title: "2. Nature of the Quote",
    body: "All quotes generated via yyccash.com, whether through the online form, email, or telephone, are non-binding estimates.",
    items: [
      "Final Offer: A final cash offer is only made after a physical inspection of the vehicle by a Citywide representative.",
      "Price Variance: We reserve the right to adjust or cancel an offer if the vehicle's actual condition, including mechanical, body, or interior condition, or mileage differs from the details submitted online.",
      "Offer Expiry: Unless otherwise specified, all quotes expire 48 hours after they are issued.",
    ],
  },
  {
    title: "3. Ownership Requirements",
    body: "To sell a vehicle through our platform, you must:",
    items: [
      "Be the legal owner of the vehicle or have documented Power of Attorney to sell it.",
      "Provide a valid government-issued photo ID.",
      "Disclose any liens, loans, or encumbrances currently attached to the vehicle.",
    ],
  },
  {
    title: "4. Vehicle Removal and Towing",
    body: "Free towing is offered as a courtesy for most completed purchases. However, the seller may be liable for towing costs or a service fee if:",
    items: [
      "The vehicle is not at the location provided.",
      "The vehicle is inaccessible by a standard tow truck, such as when it is stuck in a parkade or underground.",
      "The seller is not present at the agreed pick-up time.",
    ],
  },
  {
    title: "5. Limitation of Liability",
    body: "Citywide Cash for Cars LTD and yyccash.com are not liable for any indirect or consequential damages resulting from the use of our website. We do not guarantee that our valuation tool will be available at all times or error-free.",
  },
  {
    title: "6. Governing Law",
    body: "These Terms are governed by the laws of the Province of Alberta and the federal laws of Canada. Any disputes shall be resolved in the jurisdiction of Calgary, Alberta.",
  },
  {
    title: "7. Changes to Terms",
    body: "We reserve the right to modify these Terms at any time. Your continued use of yyccash.com after changes are posted constitutes your acceptance of the new Terms.",
  },
];

export default function TermsOfUsePage() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb name="Terms of Use" titleAs="h1" />

      <section className="px-4 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <p className="mt-6 text-base leading-8 text-slate-700">
            Welcome to yyccash.com. These Terms of Use (&quot;Terms&quot;)
            govern your use of this website and the services provided by its
            parent company, Citywide Cash for Cars LTD. By accessing this
            website or requesting a vehicle quote, you agree to be bound by
            these Terms.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-bold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-700">
                  {section.body}
                </p>
                {section.items ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-slate-700">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                8. Contact Information
              </h2>
              <div className="mt-4 rounded-2xl bg-slate-50 p-5 text-base leading-8 text-slate-700">
                <p>
                  <span className="font-semibold text-slate-900">
                    Parent Company:
                  </span>{" "}
                  Citywide Cash for Cars LTD.
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Website:</span>{" "}
                  yyccash.com
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  587-700-9806
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  yyccashforcars786@gmail.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
