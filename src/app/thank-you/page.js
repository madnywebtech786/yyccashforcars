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
      <Breadcrumb name="Thank You" />
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Thank You
          </h1>
          <p className="text-black text-lg">
            Your message has been received.
          </p>
        </div>
      </section>
    </div>
  );
}
