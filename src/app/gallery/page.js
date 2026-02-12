import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import GallerySection from '../sections/Gallery'
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  title: "Gallery - YYC Cash for Cars",
  description:
    "Browse YYC Cash for Cars gallery featuring vehicle pickups, service highlights, and Calgary-area cash-for-cars operations.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery - YYC Cash for Cars",
    description:
      "Browse YYC Cash for Cars gallery featuring vehicle pickups, service highlights, and Calgary-area cash-for-cars operations.",
    images: [getOgImageForPath("gallery")],
  },
  twitter: {
    title: "Gallery - YYC Cash for Cars",
    description:
      "Browse YYC Cash for Cars gallery featuring vehicle pickups, service highlights, and Calgary-area cash-for-cars operations.",
    images: [getOgImageForPath("gallery")],
  },
};

export default function page() {
  return (
    <div className='dark:bg-white'>
    <Breadcrumb name={'Our Gallery'} titleAs="h1" />
    <GallerySection />
    </div>
  )
}
