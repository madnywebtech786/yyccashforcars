import Breadcrumb from "../components/Breadcrumb";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "Privacy Policy | YYC Cash for Cars",
  description:
    "Read the Privacy Policy for yyccash.com. See how Citywide Cash for Cars LTD protects your data when you sell your car for cash in Calgary.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | YYC Cash for Cars",
    description:
      "Read the Privacy Policy for yyccash.com. See how Citywide Cash for Cars LTD protects your data when you sell your car for cash in Calgary.",
    images: [getOgImageForPath("privacy-policy")],
  },
  twitter: {
    title: "Privacy Policy | YYC Cash for Cars",
    description:
      "Read the Privacy Policy for yyccash.com. See how Citywide Cash for Cars LTD protects your data when you sell your car for cash in Calgary.",
    images: [getOgImageForPath("privacy-policy")],
  },
};

const sections = [
  {
    title: "1. Scope of This Policy",
    body: "This policy applies to yyccash.com and all digital properties managed by the parent company, Citywide Cash for Cars LTD, including citywidecashforcars.ca, wildrosecashforcars.ca, and maplecashforcars.ca. By using this website, you consent to the data practices described in this statement.",
  },
  {
    title: "2. Collection of Your Personal Information",
    body: "In order to provide you with vehicle valuation and purchasing services, we may collect personally identifiable information, such as your contact details, service location, and vehicle data.",
    items: [
      "Contact Details: Name, email address, and phone number.",
      "Service Location: Address for vehicle inspection or towing.",
      "Vehicle Data: Year, make, model, VIN, mileage, and photos.",
    ],
  },
  {
    title: "3. Use of Your Personal Information",
    body: "YYC Cash, via Citywide Cash for Cars LTD, collects and uses your information to:",
    items: [
      "Deliver the cash offers you have requested.",
      "Schedule towing and vehicle removal services.",
      "Process legal ownership transfer paperwork.",
      "Inform you of other services or promotions available from our network.",
    ],
  },
  {
    title: "4. Sharing Information with Third Parties",
    body: "We do not sell or rent customer lists. We share data only with trusted partners, such as towing companies or legal authorities, to complete your transaction or as required by law.",
  },
  {
    title: "5. Communication Consent (Email and SMS)",
    body: 'By submitting a quote request on yyccash.com, you provide express consent for Citywide Cash for Cars LTD to contact you via phone, email, and SMS, including automated messages.',
    items: [
      'To opt out of SMS, reply "STOP" to any message.',
      'To opt out of marketing emails, use the unsubscribe link in the email.',
    ],
  },
  {
    title: "6. Technical Data and Cookies",
    body: "We automatically collect technical data, including IP addresses and browser type, and use cookies to improve your experience on our site. You can manage cookie preferences through your browser settings.",
  },
  {
    title: "7. Security and SSL",
    body: "We secure your personal information from unauthorized access using SSL protocol encryption. While we take strong security measures, no internet transmission is 100% secure.",
  },
  {
    title: "8. Changes to This Statement",
    body: "We reserve the right to update this policy. Your continued use of yyccash.com after updates constitutes your agreement to the new terms.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb name="Privacy Policy" titleAs="h1" />

      <section className="px-4 py-16 sm:px-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-10">
          <p className="mt-6 text-base leading-8 text-slate-700">
            Protecting your private information is our priority. This Statement
            of Privacy applies to{" "}
            <a
              href="https://yyccash.com"
              className="font-semibold text-primary underline"
            >
              https://yyccash.com
            </a>{" "}
            and governs data collection and usage. For the purposes of this
            Privacy Policy, this website is owned and operated by Citywide Cash
            for Cars LTD.
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
                9. Contact Information
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
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  yyccashforcars786@gmail.com
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  587-700-9806
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
