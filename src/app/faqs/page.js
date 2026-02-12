import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import FAQSection from '../sections/FAQ'
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "FAQs - YYC Cash for Cars",
  description:
    "Read frequently asked questions about selling junk or used cars in Calgary, including towing, paperwork, payouts, and pickup timelines.",
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs - YYC Cash for Cars",
    description:
      "Read frequently asked questions about selling junk or used cars in Calgary, including towing, paperwork, payouts, and pickup timelines.",
    images: [getOgImageForPath("faqs")],
  },
  twitter: {
    title: "FAQs - YYC Cash for Cars",
    description:
      "Read frequently asked questions about selling junk or used cars in Calgary, including towing, paperwork, payouts, and pickup timelines.",
    images: [getOgImageForPath("faqs")],
  },
};

export default function page() {
  return (
    <div className='dark:bg-white'>
    <Breadcrumb name={'FAQs'} titleAs="h1" />
    <FAQSection />
    </div>
  )
}
