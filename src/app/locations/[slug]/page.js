import React from "react";
import Image from "next/image";
import { notFound, permanentRedirect } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { MapPin, Phone, Clock, CheckCircle, Truck, Navigation } from "lucide-react";
import ContactForm from "@/app/sections/Contact";
import Testimonial from "@/app/sections/Testimonial";
import { getOgImageForPath } from "@/lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

const sectionImages = [
  "/images/gallery/g1.webp",
  "/images/gallery/g2.webp",
  "/images/gallery/g3.webp",
  "/images/gallery/g4.webp",
  "/images/gallery/g5.webp",
  "/images/gallery/g6.webp",
  "/images/gallery/g7.webp",
  "/images/gallery/g8.webp",
  "/images/gallery/g9.webp",
  "/images/gallery/g10.webp",
  "/images/gallery/g11.webp",
  "/images/gallery/g12.webp",
  "/images/gallery/g13.webp",
];

const locationStats = [
  { value: "8+", label: "Years in Business" },
  { value: "70+", label: "Cars Bought Monthly" },
  { value: "99%", label: "Positive Feedback" },
  { value: "5,000+", label: "Junk Cars Purchased" },
];

// Location data with detailed information
const locationsData = [
  {
    id: 1,
    name: "Calgary",
    slug: "calgary",
    area: "Downtown",
    distance: "0 km",
    primary: true,
    image: "/images/car-about.webp",
    heading: "Cash for Cars in Calgary - Fast & Fair Offers",
    description:
      "Welcome to YYC Cash for Cars, Calgary's premier car buying service. Located in the heart of downtown Calgary, we offer the most competitive prices for your used, junk, or scrap vehicles. Our experienced team provides instant cash offers and free towing services across all Calgary neighborhoods. Whether you're in the NE, NW, SE, or SW quadrants, we come to you! We specialize in buying all makes and models, regardless of condition. Get your free quote today and turn your unwanted vehicle into cash within 24 hours. Serving Calgary residents with honesty, transparency, and unbeatable customer service since our establishment.",
    additionalInfo:
      "Calgary is our primary service area, and we take pride in being the most trusted car buying service in the city. We understand the local market and offer fair, competitive prices based on current market values. Our team is available 7 days a week to serve you.",
    neighborhoods: [
      "Downtown Calgary",
      "Beltline",
      "Inglewood",
      "Kensington",
      "Mission",
      "Bridgeland",
      "Forest Lawn",
      "Marlborough",
    ],
    features: [
      "Instant cash offers within minutes",
      "Free towing service across all Calgary areas",
      "Same-day pickup available",
      "All paperwork handled for you",
      "Licensed and insured professionals",
      "Highest prices guaranteed",
      "No hidden fees or charges",
      "Eco-friendly vehicle recycling",
    ],
    hours: "Monday - Sunday: 8:00 AM - 8:00 PM",
    responseTime: "Under 30 minutes",
  },
  {
    id: 2,
    name: "Airdrie",
    slug: "airdrie",
    area: "North Calgary",
    distance: "36 km",
    primary: false,
    image: "/images/car-junk.webp",
    metaTitle: "Cash for Cars Airdrie | Get Top Cash & Free Car Removal",
    metaDescription:
      "Top cash for your car in Airdrie! Fast, free car removal and fair offers for any vehicle. No hidden fees, just top value paid on the spot. Call 587-700-9806!",
    heading: "Cash for Cars Airdrie – Top Dollar, Fast & Hassle-Free Vehicle Removal",
    description:
      "Welcome to Cash for Cars Airdrie, your trusted local partner for turning unwanted, old, damaged, or non-running vehicles into fast cash — backed with free pickup, transparent offers, and eco-friendly disposal. If you’re searching for the best way to sell your car in Airdrie, get rid of scrap vehicles quickly, or need reliable scrap car removal Airdrie and junk car removal Airdrie services, you’re in the right place.",
    additionalInfo:
      "Whether your car won’t start, is written off after an accident, or has simply reached the end of its road, we make selling it as simple as possible — with no stress, no hidden fees, and top cash offers paid immediately.",
    neighborhoods: [
      "Coopers Crossing",
      "Williamstown",
      "Kings Heights",
      "Bayside",
      "Windsong",
      "Reunion",
    ],
    features: [
      "Fast cash offers",
      "Free scrap car removal Airdrie",
      "Hands-off paperwork handling",
      "Eco-friendly recycling",
      "Same-day service",
      "Fair and transparent pricing",
      "Cash paid on the spot",
      "Buy vehicles in any condition",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 45 minutes",
    content: `Welcome to Cash for Cars Airdrie, your trusted local partner for turning unwanted, old, damaged, or non‑running vehicles into fast cash — backed with free pickup, transparent offers, and eco‑friendly disposal. If you’re searching for the best way to sell your car in Airdrie, get rid of scrap vehicles quickly, or need reliable [scrap car removal Airdrie](/service/scrap-car-removal) and junk car removal Airdrie services, you’re in the right place.

Whether your car won’t start, is written off after an accident, or has simply reached the end of its road, we make selling it as simple as possible — with no stress, no hidden fees, and [top cash offers paid immediately](/).

## Why Airdrie Drivers Choose Our Cash for Cars Service

Selling a vehicle in Airdrie, Alberta shouldn’t be complicated. Yet traditional private sales and dealership trade‑ins often mean wasted time, disappointment, and low offers. That’s where we step in. Our cash for cars Airdrie service is specifically designed for Airdrie residents who want:

Fast Cash Offers
We give you a fair and transparent cash quote — often within minutes, not days — based on your car’s condition, make, model, age, and market value.

Free Scrap Car Removal Airdrie
You won’t spend extra on towing. We come right to your location in Airdrie and pick up your vehicle for free — whether it’s running, completely dead, or somewhere in between.

Hands‑Off Paperwork Handling
We handle all necessary vehicle transfer paperwork so you don’t deal with confusing forms or government requirements.

Eco‑Friendly Recycling
Our junk car removal Airdrie process ensures vehicles are responsibly dismantled and recycled, reducing landfill waste and supporting sustainable metal reuse.

Same‑Day Service
Most pickups can be arranged for the same day or next day — perfect if you need to free up space fast.

This combination of speed, value, reliability, and convenience is exactly why more Airdrie locals trust our service over private selling or listing services.

## What Vehicles We Buy in Airdrie

We accept almost any type of vehicle, no matter its condition:

- Cars (running or not)
- SUVs & crossovers
- Trucks & pickups
- Vans & minivans
- Motorcycles & ATVs
- RVs, campers, and specialty vehicles

From non‑running clunkers to accident‑damaged vehicles, we turn what’s considered junk to most into fast cash for cars in Airdrie.

## How Our Cash for Cars Airdrie Process Works (Simple 3-Step System)

We’ve streamlined the process so that selling your vehicle is smooth and stress‑free — even if this is your first time.

### Step 1 – Tell Us About Your Vehicle

Just call or fill out our online form with a few details:
Make, model, year, condition, and where the vehicle is located in Airdrie. We’ll provide a free, no‑obligation quote based on this information.

### Step 2 – Receive a Fair Offer

Our team will evaluate your vehicle and present you with a quote that reflects the true value of your vehicle — including any usable parts or scrap metal value. This offer is yours to accept or reject.

### Step 3 – Schedule Pickup & Get Paid

Once you accept the offer, we arrange a time for free pickup. When we arrive, we pay you cash on the spot (or by cheque if you prefer), complete paperwork, and remove the vehicle from your property.

That’s it — no hidden fees, no negotiation stress, and no long waits.

## What Affects Your Cash Offer in Airdrie

Your cash payout is based on a few key factors:

Vehicle Condition
Vehicles with functional parts, intact engines, or repairable components often get higher offers than completely destroyed cars.

Make, Model & Year
Popular vehicles and models with high parts demand can fetch more.

Current Scrap Metal Market
Sometimes the price of your vehicle’s raw materials — like steel — affects the final offer.

You won’t waste time guessing — we give transparent pricing and explain exactly how we arrived at your offer.

## Scrap Car Removal Airdrie — Quick & Responsible

If your vehicle is no longer drivable or just sits gathering dust, our scrap car removal Airdrie service gets it gone fast. Instead of spending time and money trying to sell it privately:

- Skip costly tow fees
- Avoid time‑wasters and tire kickers
- Say goodbye to expired safety inspections
- Get same‑day pickup and payment

We use licensed facilities to recycle all metals and reusable parts, ensuring your vehicle is disposed of in an environmentally responsible way.

## Junk Car Removal Airdrie – More Than Just Scrapping

Junk cars often pose challenges:

- They take up valuable space on your property
- They depreciate with every passing year
- They can leak fluids or become environmental hazards

Our junk car removal Airdrie service doesn’t just haul away that eyesore — it pays you cash, handles all paperwork, and recycles your vehicle safely. The whole process is designed to be fast, efficient, and stress‑free.

## FAQs — Everything You Need to Know (Airdrie)

**Do you buy vehicles with no title?**

Yes! We can handle vehicles without title paperwork and guide you through any necessary documentation steps.

**What if my car isn’t running?**

No problem — we buy cars in all conditions, whether they’ve been sitting for years or were in a recent collision.

**Do you charge for towing?**

Absolutely not — we provide free pickup and removal within Airdrie.

**How quickly will I get paid?**

Typically on the spot at pickup, either in cash or by cheque — whichever you prefer.

## Why Selling With Us Beats DIY & Other Buyers

Selling your old or unwanted vehicle shouldn’t be a headache. Cash for Cars Airdrie offers a straightforward, honest, and local solution — getting you fast cash and removing your car with zero hassle.

You live in Airdrie, AB — we come to you.
You’re tired of that old car — we’ll take it away.
You want top value and quick service — you’re in the right place.

[Contact us now](/contact) to get your free, instant cash offer and schedule your vehicle pickup today!`,
  },
  {
    id: 3,
    name: "Okotoks",
    slug: "okotoks",
    area: "South Calgary",
    distance: "45 km",
    primary: false,
    image: "/images/scrap.webp",
    heading: "Cash for Cars in Okotoks - Reliable Service You Can Trust",
    description:
      "Located just 45 km south of Calgary, Okotoks residents can count on YYC Cash for Cars for all their vehicle selling needs. We bring our premium car buying service directly to your doorstep in Okotoks. Whether you're upgrading your vehicle, need quick cash, or simply want to get rid of an old car taking up space, we're here to help. Our Okotoks service offers competitive pricing, fast same-day or next-day pickup, and absolutely no hassle. We buy cars in any condition - running, damaged, or scrap. Our transparent process means you'll know exactly what you're getting before we arrive. Join hundreds of satisfied Okotoks customers who chose the smart way to sell their cars.",
    additionalInfo:
      "Okotoks' small-town charm deserves big-city service. We're proud to bring professional, honest car buying to this wonderful community south of Calgary.",
    neighborhoods: [
      "Downtown Okotoks",
      "Westmount",
      "Cimarron",
      "Drake Landing",
      "D'Arcy",
      "Heritage Hills",
    ],
    features: [
      "Competitive market-based pricing",
      "Free vehicle pickup and towing",
      "Instant cash or e-transfer payment",
      "Flexible scheduling options",
      "Licensed and bonded service",
      "Same-day service available",
      "Transparent, honest quotes",
      "Complete title transfer assistance",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 1 hour",
  },
  {
    id: 4,
    name: "Cochrane",
    slug: "cochrane",
    area: "West Calgary",
    distance: "36 km",
    primary: false,
    image: "/images/tow-scrap.webp",
    heading: "Cash for Cars in Cochrane - Fast Cash for Your Vehicle",
    description:
      "YYC Cash for Cars extends its trusted service to beautiful Cochrane, just 36 km west of Calgary. We understand that selling a car in Cochrane shouldn't mean driving all the way to Calgary. That's why we come to you! Our Cochrane service offers the same premium experience our Calgary customers enjoy: instant quotes, competitive prices, and hassle-free pickup. Whether you're in the established neighborhoods or newer developments, we service all areas of Cochrane. We buy all vehicle types including trucks, SUVs, sedans, and vans - running or not. Get top dollar for your vehicle without leaving your property. Our professional team handles everything from valuation to towing, making your selling experience smooth and stress-free.",
    additionalInfo:
      "Cochrane's proximity to the mountains and its growing population make it an important service area for us. We're committed to providing exceptional service to this vibrant western community.",
    neighborhoods: [
      "Heritage",
      "Sunset",
      "Riversong",
      "Fireside",
      "Gleneagles",
      "Downtown Cochrane",
    ],
    features: [
      "Free home or office pickup",
      "No-obligation free quotes",
      "All makes and models accepted",
      "Immediate cash payment",
      "Professional courteous service",
      "Proper disposal and recycling",
      "Complete DMV paperwork handled",
      "Available 7 days a week",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 45 minutes",
  },
  {
    id: 5,
    name: "Chestermere",
    slug: "chestermere",
    area: "East Calgary",
    distance: "19 km",
    primary: false,
    image: "/images/car-about.webp",
    heading: "Cash for Cars in Chestermere - Your Local Car Buyers",
    description:
      "Chestermere's lakeside community deserves convenient car selling options, and YYC Cash for Cars delivers! Just 19 km east of Calgary, we provide Chestermere residents with fast, friendly, and fair car buying services. Whether you're by the lake or in the newer subdivisions, we'll come to you. We specialize in making the car selling process as easy as possible - no need to clean your car, fix anything, or even have it running. We buy vehicles in any condition and pay top dollar based on current market values. Our Chestermere service includes free towing, instant cash offers, and complete documentation support. Experience why Chestermere residents trust us for honest, reliable car buying service.",
    additionalInfo:
      "Being close to Calgary means we can offer very quick service to Chestermere. Many of our team members live in the area, so we truly understand the community's needs.",
    neighborhoods: [
      "Rainbow Falls",
      "Westmere",
      "East Chestermere",
      "Dawson's Landing",
      "Kinniburgh",
      "Cove",
    ],
    features: [
      "Quick 30-minute average response",
      "Highest cash offers in the area",
      "Free same-day pickup available",
      "Buy cars, trucks, SUVs, vans",
      "Damaged and non-running vehicles OK",
      "Friendly local service",
      "No pressure, no obligation",
      "Secure payment methods",
    ],
    hours: "Monday - Sunday: 8:00 AM - 8:00 PM",
    responseTime: "Under 30 minutes",
  },
  {
    id: 6,
    name: "High River",
    slug: "high-river",
    area: "South Region",
    distance: "68 km",
    primary: false,
    image: "/images/car-junk.webp",
    heading: "Cash for Cars in High River - Serving Southern Alberta",
    description:
      "YYC Cash for Cars is proud to serve High River and the surrounding southern Alberta region. Located 68 km south of Calgary, High River residents can access our professional car buying services without the drive to the city. We come directly to you! Whether you have a vintage truck, a family sedan, or a non-running vehicle, we're interested. Our High River service offers competitive pricing, free towing, and fast payment. We understand rural vehicle needs and accept farm trucks, work vehicles, and personal cars in any condition. Our team respects your time and property, arriving when scheduled and completing transactions efficiently. Discover why High River vehicle owners choose us for honest appraisals and excellent customer service.",
    additionalInfo:
      "High River holds a special place in Alberta's history and community. We're honored to serve this resilient town and offer the same quality service regardless of the distance from Calgary.",
    neighborhoods: [
      "Downtown High River",
      "Westside",
      "Sunrise Estates",
      "Eagle Ridge",
      "Highwood Village",
      "Flatiron",
    ],
    features: [
      "Serve High River and surrounding areas",
      "Buy farm trucks and work vehicles",
      "Free long-distance towing",
      "Fair market value pricing",
      "Experienced professional buyers",
      "Quick and easy process",
      "Cash or certified check payment",
      "Full administrative support",
    ],
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
    responseTime: "Under 1.5 hours",
  },
  {
    id: 7,
    name: "Strathmore",
    slug: "strathmore",
    area: "East Region",
    distance: "52 km",
    primary: false,
    image: "/images/scrap.webp",
    heading: "Cash for Cars in Strathmore - East of Calgary Service",
    description:
      "Strathmore and the eastern region of Calgary can count on YYC Cash for Cars for reliable, professional vehicle buying services. Located 52 km east of Calgary, Strathmore is well within our service area. We offer the same exceptional service to Strathmore residents as we do in Calgary proper. Whether you're selling a personal vehicle, getting rid of an old farm truck, or disposing of a damaged car, we buy it all. Our Strathmore service includes free estimates, competitive pricing based on actual market values, and convenient pickup scheduling. We handle all the paperwork, towing, and payment on the spot. No hidden fees, no surprises - just honest, straightforward service. Call us today for your free quote!",
    additionalInfo:
      "Strathmore's agricultural heritage means we often work with trucks and work vehicles. We have extensive experience with all vehicle types and offer fair pricing for each.",
    neighborhoods: [
      "Downtown Strathmore",
      "Westview",
      "Sagewood",
      "Meadow View Estates",
      "East Lake",
      "Kinsmen Park",
    ],
    features: [
      "Specialists in trucks and work vehicles",
      "Free vehicle removal and towing",
      "Fair, transparent pricing",
      "Same or next-day service",
      "Cash payment on pickup",
      "Licensed and insured team",
      "No title? We can help!",
      "Courteous, respectful service",
    ],
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
    responseTime: "Under 1 hour",
  },
  {
    id: 8,
    name: "Canmore",
    slug: "canmore",
    area: "Mountain Region",
    distance: "104 km",
    primary: false,
    image: "/images/tow-scrap.webp",
    metaTitle: "Cash for Cars Canmore | Top Dollar & Free Car Removal",
    metaDescription:
      "Sell your car in Canmore for top cash! Get free junk car removal, fast payment, and eco-friendly recycling. Contact us today at 587-700-9806 for your quote!",
    heading: "Cash for Cars Canmore – Fast, Fair Offers & Free Vehicle Removal",
    description:
      "Welcome to Cash for Cars Canmore — your local trusted solution for selling old, damaged, or unwanted vehicles for top cash. If you’re located in Canmore, Alberta, and want a quick, stress‑free way to get cash for your car, we’ve got you covered.",
    additionalInfo:
      "Whether your vehicle won’t start, has been in an accident, sits unused in the driveway, or you simply need more space — our team is ready to help with reliable scrap car removal Canmore and [junk car removal Canmore services](/services/cash-for-junk-cars). We make the process easy, transparent, and rewarding.",
    neighborhoods: [
      "Downtown Canmore",
      "Three Sisters",
      "Cougar Creek",
      "Spring Creek",
      "Elk Run",
      "Peaks",
    ],
    features: [
      "Highest cash offers",
      "Free scrap car removal Canmore",
      "Hassle-free paperwork",
      "Eco-friendly junk car removal Canmore",
      "Fast, same-day service when possible",
      "Buy vehicles in any condition",
      "Immediate payment on pickup",
      "Free towing across Canmore",
    ],
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    responseTime: "1.5 - 2 hours",
    content: `Welcome to Cash for Cars Canmore — your local trusted solution for selling old, damaged, or unwanted vehicles for top cash. If you’re located in Canmore, Alberta, and want a quick, stress‑free way to get [cash for cars](/) for your car, we’ve got you covered.

Whether your vehicle won’t start, has been in an accident, sits unused in the driveway, or you simply need more space — our team is ready to help with reliable [scrap car removal Canmore](/services/scrap-car-removal/) and [junk car removal Canmore services](/services/cash-for-junk-cars). We make the process easy, transparent, and rewarding.

## Why Canmore Residents Trust Our Cash for Cars Service

Selling a vehicle shouldn’t be frustrating or time consuming — but often it is. Traditional private sales can take weeks, test drives waste your time, and dealerships rarely offer great value, especially for older or non‑running vehicles.

That’s where Cash for Cars shines. We specialize in helping locals sell vehicles of any condition and offering:

Highest Cash Offers
We provide fair and competitive quotes based on your vehicle’s real value — no low‑ball offers, no confusing valuations.

Free Scrap Car Removal Canmore
No matter where your vehicle is parked in Canmore — on your property, a rental yard, or a rural driveway — we’ll come to you and haul it away for free.

Hassle‑Free Paperwork
Don’t worry about confusing forms or DMV visits. We handle all documentation so you don’t have to.

Eco‑Friendly Junk Car Removal Canmore
Our disposal process is fully licensed and environmentally responsible, ensuring cars are recycled correctly and valuable materials are reused.

Fast, Same‑Day Service When Possible
We understand urgency — that’s why we aim to offer same‑day pickup and payment whenever it’s feasible.

## What Vehicles We Buy in Canmore

You might be surprised — we accept almost every type of vehicle, regardless of age or condition. That includes:

- Passenger cars (running or not)
- SUVs and crossovers
- Trucks and pickups
- Vans and minivans
- Motorcycles, ATVs, and UTVs
- Fleet vehicles and commercial units
- Old junk cars and scrap vehicles

Even if your car has no title, doesn’t run, or has major mechanical issues — we still buy it. That’s the beauty of our cash for cars Canmore process: we pay real cash for vehicles most others won’t touch.

## How Our Cash for Cars Canmore Process Works (Simple & Quick)

We’ve designed our system to be easy, straightforward, and fair.

### Step 1 – Contact Us or Fill Out the Form

Tell us a few basic details about your vehicle — make, model, year, condition, and location in Canmore. You can call us or use our online quote form.

### Step 2 – Get a Fast, Fair Offer

Our team analyzes your vehicle and provides an honest cash offer based on current market demand and local pricing. No obligation — accept only if you're happy.

### Step 3 – Schedule Convenient Pickup

Once you accept the offer, we’ll arrange a time to pick up your vehicle. We come to your location in Canmore — no tow fees, no waiting around.

### Step 4 – Get Cash on the Spot

We pay you immediately upon pickup — with cash or certified cheque — whichever you prefer.

That’s it. Simple, transparent, quick — no stress, no guesswork.

## What Determines Your Cash Offer in Canmore

We base our offers on a few key factors that make the valuation fair and accurate:

1. Vehicle Condition
A well‑maintained car with usable parts will typically fetch more than one that’s completely non‑functional. But even scrap vehicles have value — especially to recycling facilities.

2. Make, Model & Year
Certain models have higher demand for parts or resale value, so we factor that into your offer.

3. Metal & Parts Value
Even if your vehicle no longer runs or is severely damaged, the metal and recyclable parts still have value. That’s where scrap car removal Canmore becomes a win — you get paid for what others see as junk.

We believe in transparency, so if you ever want to know how we arrived at your offer, we’ll explain every detail.

## Scrap Car Removal Canmore – Quick, Free & Eco‑Responsible

Old cars can become eyesores, take up space, or leak fluids. If you’ve been putting off getting rid of that vehicle, our scrap car removal Canmore service makes it easy.

Here’s how it works:

You contact us with your vehicle details
We provide a no‑obligation scrap quote
We schedule a convenient pickup time
We remove the vehicle for free
You get cash on the spot

Many residents don’t realize that even the oldest, broken‑down cars have value — and we help you unlock that value without any hidden charges.

No tow fees. No waiting weeks. Just fast removal and fair cash.

## Junk Car Removal Canmore – We Take Anything

Junk cars can cause all sorts of issues:

- They take up valuable space
- They collect dust and rust
- They devalue your property
- They can leak hazardous fluids

Instead of letting that old car sit and depreciate, turn it into cash with our junk car removal Canmore service.

We’ll remove your vehicle quickly and responsibly, paying you cash in return. Whether your vehicle is:

- Flood damaged
- Heavily rusted
- Engine failed
- Collision damaged
- Long‑abandoned

We still buy it.

## Canmore Residents Ask: FAQs About Cash for Cars

**Do you buy cars that don’t run?**

Absolutely. Cars that won’t start, have engine issues, or are mechanically unsafe are all accepted.

**What if I don’t have the title?**

We can help you navigate that — missing titles won’t stop us from giving you an offer in many cases.

**How long does pickup take?**

We aim for the same‑day or next‑day pickup whenever possible. It depends on your schedule and availability.

**Is there any payment before pickup?**

Payment happens at pickup. Once we remove your vehicle, you receive the cash on the spot.

**Do you charge for towing?**

No — towing is 100% free across Canmore and the surrounding areas.

## Why Cash for Cars Canmore Beats Other Options

Many vehicle owners consider traditional options like selling privately or trading in with a dealership. But here’s the reality:

Private Sale: Takes weeks, involves back‑and‑forth messaging, test drives, and no guarantee you’ll sell.
Dealership Trade‑In: Often low offers since dealers resell for profit.
Online Classifieds: Time‑consuming and requires constant messaging and negotiation.
Scrap car for cash: Quick offer, free pickup, fast cash, no stress.

We make selling your vehicle simple and practical — with results that beat most alternatives in time, value, and convenience.

## Environmentally Responsible Vehicle Disposal

We don’t just take cars — we ensure they are disposed of responsibly. Our processes follow all environmental and recycling standards, ensuring:

- Fluids are handled safely
- Recyclable metals are reused
- Harmful materials are disposed of correctly
- Valuable parts get reused instead of wasted

So when you choose YYC cash for cars, you’re not only getting cash — you’re doing something good for the community and environment.

## Contact Us & Get Your Free Offer Today

If you’re ready to turn your unwanted vehicle into fast cash in Canmore, don’t wait. Our team is standing by to give you:

- Fast, fair cash offers
- Free scrap car removal Canmore
- Simple and quick pickup
- Reliable junk car removal Canmore

Your old vehicle still has value — let us help you unlock it.
Call us now at 587‑700‑9806 or fill out our online form for a free quote.
Turn your vehicle into cash today — with Canada’s most trusted local cash for cars service in Canmore.`,
  },
  {
    id: 9,
    name: "Drumheller",
    slug: "drumheller",
    area: "Drumheller Region",
    distance: "135 km",
    primary: false,
    image: "/images/tow-scrap.webp",
    metaTitle: "Cash for Junk Cars Drumheller | Free Towing & Fast Pickup",
    metaDescription:
      "Sell your unwanted vehicle fast with cash for cars in Drumheller. Free towing, quick quotes, and hassle-free pick-up in Drumheller and nearby areas.",
    heading: "Cash for Junk Cars Drumheller - Fast Pickup, Fair Offers, and Free Towing",
    description:
      "If you've got an old, damaged, unwanted or non-running vehicle taking up space in your driveway, garage, yard, acreage or business property that you want sold quickly without hassles such as listing, no shows, low offers or repairs costs; then YYC Cash for Cars makes the process easy with their cash for cars Drumheller service.",
    additionalInfo:
      "Our Drumheller service is built for convenience, with fair quotes, prompt pickup, and free towing for unwanted vehicles in town and nearby communities.",
    neighborhoods: [
      "Downtown Drumheller",
      "Central Drumheller",
      "North Drumheller",
      "Newcastle",
      "Midland",
      "Nacmine",
      "Rosedale",
      "East Coulee",
      "Wayne",
    ],
    features: [
      "Fast quotes based on the vehicle's actual condition",
      "Pickup arranged at a convenient time",
      "No towing charges added at the last minute",
      "Help with the basic selling process",
      "Removal of vehicles that are not drivable",
      "A straightforward offer without pressure",
      "Free towing in Drumheller and nearby areas",
      "Quick and hassle-free vehicle pickup",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 2 hours",
    content: `If you've got an old, damaged, unwanted or non-running vehicle taking up space in your driveway, garage, yard, acreage or business property that you want sold quickly without hassles such as listing, no shows, low offers or repairs costs; then YYC Cash for Cars makes the process easy with their cash for cars Drumheller service. Our cash for junk cars Drumheller service makes selling vehicles without hassles simple; just schedule pickup with us, get an accurate quote then payment upon collection of your car.

No matter the condition of your vehicle - be it non-running, severe rust damage, engine trouble, transmission problems, collision damage or simply no longer worth fixing - we are ready to assist. We recognize that many vehicle owners in Drumheller do not wish to continue investing money into something that has reached the end of its useful life and instead want it removed without taking up valuable space or losing more value. With us on your side you can turn it into cash quickly while having it removed stress free.

Our service is designed around convenience. Simply tell us about the vehicle, review its details, and we provide an offer based on its make, model, year, condition and pickup location. Once accepted, we arrange removal promptly without the hassles associated with classified ads or strangers coming onto your property; and no need for negotiations back-and-forth either way or trying to drive an unsafe or inoperable vehicle yourself.

If you are searching for a [Junk car removal](/services/cash-for-junk-cars) Drumheller, chances are you are seeking three things. A fair payout, free vehicle pickup and a company that follows through as promised - that is exactly what this page strives to deliver.

## Why Drumheller Vehicle Owners Choose Our Service

Selling a junk vehicle privately can be extremely frustrating. Many potential buyers simply vanish after making inquiries; others expect you to deliver it; while still others try negotiating upon arrival - especially when there are visible damages or mechanical issues on the car itself. Many find the time and stress simply not worth investing.

YYC Cash for Cars provides Drumheller residents with an efficient and reliable alternative to selling unwanted vehicles on the open market. By focusing on unwanted vehicles, YYC Cash for Cars eliminates the need to apologize for the condition of your car or spend money trying to make it "sale-ready." We already work with vehicles which may be scrap, old, written-off, damaged beyond repair, high mileage or no longer roadworthy.

Our process is designed to meet real-life situations. Perhaps your car failed inspection; perhaps repairs cost more than its value; perhaps you inherited or bought an older vehicle to replace an older one; in any of these instances, we can help simplify the next steps for you.

Here is what matters most to local sellers:

- fast quotes based on the vehicle’s actual condition
- pickup arranged at a convenient time
- no towing charges added at the last minute
- help with the basic selling process
- removal of vehicles that are not drivable
- a straightforward offer without pressure

At YYC Cash for cars we understand that people looking for cash for junk cars are looking for more than money: They need speed, trust, and convenience when searching for cash for junk cars in Drumheller.

## Scrap Car Removal Drumheller for Vehicles in Almost Any Condition

Scrap Car Removal Drumheller provides services for more than just wrecked vehicles; our scrap car collection Drumheller service also caters to vehicles still running but no longer worth keeping; others start occasionally but require costly work; others have major collision damage while some simply become outdated and insurable; or are simply too far gone to maintain safely.

We commonly help remove:

- scrap cars
- junk cars
- old used cars with major repair issues
- non-running vehicles
- accident-damaged vehicles
- flood-damaged or weather-damaged vehicles
- rusted-out cars and trucks
- high-mileage SUVs
- vans and work vehicles
- unwanted fleet vehicles
- vehicles with seized engines or bad transmissions
- abandoned or sitting vehicles with little resale value

If your vehicle is taking up space in your driveway or parked at home, we may still make you an offer for it. No need for repairs, cleaning up, advertising or waiting weeks for the right buyer; our offers are determined based on salvage value, reusable parts recovery, condition and current market demand.

Scrap car removal Drumheller can also help owners avoid further costs. Old vehicles often cause more hassle over time: leaky fluids, flat tires, dead batteries, municipal complaints and loss of parking space can all add up quickly to create additional costs that don't make financial sense anymore. Selling now will free up space and eliminate an ongoing source of irritation.

## A Simple 3-Step Process to Sell Your Junk Car in Drumheller

As most sellers want results and not paperwork headaches, our goal is to keep the process as painless as possible.

### 1. Tell Us About Your Car

Start by providing us with basic details of your car: year, make, model, condition and location in Drumheller. Even if it does not run, has damage or is missing parts, we welcome that information - because the more precise details provided, the more precise is our quote.

### 2. Get a Quote

After carefully considering all of the information about your vehicle, we provide a no-obligation offer based on factors like its condition, remaining salvage value, demand for parts and scrap value as well as ease of pickup.

### 3. Schedule Pick-Up and Receive Payment

If you accept our offer, we arrange pickup and removal. Our team arrives at the vehicle location, confirms all details, loads it onto a transport vehicle, and completes pickup to deliver payment to you immediately - meaning an unwanted vehicle has finally left its location behind!

Junk car removal Drumheller is often preferred over selling damaged, old, or non-roadworthy vehicles themselves as it provides faster, easier and more practical solutions for vehicles that cannot be made roadworthy.

## Who Uses Our Drumheller Junk Car Buying Service?

Homeowners frequently employ our service when an unused car has been sitting idly on their property for months or years. Landlords call when tenants abandon vehicles on the rental property; families reach out when clearing space on a property or disposing of one from an estate; small businesses and contractors utilize our service when repairing work vehicles no longer makes economic sense; drivers with accident damaged cars contact us when the cost of restoration becomes prohibitive;

Simply put, this service goes beyond simply disposing of "scrap cars." Instead, it provides an effective solution to unwanted vehicles which consume time, space, and money.

## Areas We Serve Around Drumheller

Drumheller is important, so we want this page for Drumheller to reflect how people actually search - some users search only by town name while others may add additional filters such as neighborhood or community modifiers.

That is why this page naturally supports searches related to Downtown Drumheller, Central Drumheller, North Drumheller, Newcastle, Midland, Nacmine Rosedale East Coulee Wayne communities as well as surrounding rural land areas. If your vehicle is located anywhere within these boundaries - whether in town, on residential property near a business, rural land areas or otherwise - don't hesitate to get in touch so we can discuss pickup options!

## Why Not Sell the Vehicle Privately?

Private sale may make sense for clean, newer used vehicles that have minimal wear-and-tear, such as SUVs or sedans with lower mileage; but in cases involving junk, scrap, damaged, non-running or high mileage cars it often proves more trouble than it's worth.

You may need to:

- pay for repairs before listing
- answer endless messages
- deal with people who never show up
- negotiate with bargain hunters
- arrange towing or transport
- spend days or weeks trying to close the sale

When someone searches for cash for junk cars in Drumheller, they typically want a simpler process involving one quote, one pickup appointment and one completed transaction. That is exactly why dedicated junk car buyers offer more value than the general private market.

## FAQs

**How much can I get for my junk car in Drumheller?**

The amount depends on the vehicle’s make, model, year, condition, completeness, location, and current salvage or scrap value. Vehicles with reusable parts or stronger metal value may receive higher offers than severely stripped or incomplete vehicles.

**Do you buy non-running vehicles?**

Yes. A vehicle does not need to be drivable to qualify. We regularly help with non-running cars, damaged trucks, old SUVs, and vehicles that have been sitting for a long time.

**Is towing included with your service?**

Yes, the goal is to make the process as easy as possible. If your vehicle needs to be removed, we discuss pickup as part of the overall service so you are not left trying to arrange your own transport.

**Do you only buy scrap cars?**

No. We buy many types of unwanted vehicles, including junk cars, collision-damaged cars, old used vehicles, high-mileage vehicles, and cars that are no longer worth repairing.

**How quickly can I start the process?**

You can start by contacting us with your vehicle details. Once we review the information and provide a quote, the next step is scheduling pickup based on availability and location.

**What information should I have ready?**

It helps to have the year, make, model, condition, and exact Drumheller location. If you know whether the vehicle runs, has major damage, or is missing parts, share that as well.

## Get Your Junk Car Removed in Drumheller Now

If your old vehicle no longer serves its intended purpose, now is the time to get rid of it and realize value from it. YYC Cash for Cars provides a hassle-free method for junk car removal Drumheller and cash for junk cars Drumheller without breaking a sweat!

[Call or submit our online form](/contact) with details on your vehicle today to begin the selling process! We will review the data, give an accurate quote, and arrange a smooth pickup process - all this with just one call or submission of our form! Let's turn that unwanted car into money while also clearing space on your property!`,
  },
  {
    id: 10,
    name: "Lethbridge",
    slug: "lethbridge",
    area: "Southern Alberta",
    distance: "215 km",
    primary: false,
    image: "/images/car-junk.webp",
    metaTitle: "Cash for Cars Lethbridge | Scrap & Junk Car Removal Services",
    metaDescription:
      "Get top cash for junk cars in Lethbridge! We offer free scrap car removal, fast towing, and competitive cash offers for unwanted vehicles.",
    heading: "Cash for Cars & Scrap Car Removal in Lethbridge",
    description:
      "Are you in Lethbridge and searching for an easy, fast, reliable way to sell your unwanted vehicle quickly and profitably? Whether it's old, damaged, non-running or simply taking up space - our Lethbridge car removal service provides top dollar cash, free towing and an effortless selling experience from start to finish.",
    additionalInfo:
      "Our Lethbridge service extends cash offers, free towing, and hassle-free vehicle pickup across the city and nearby southern Alberta communities.",
    neighborhoods: [
      "Downtown Lethbridge",
      "North Lethbridge",
      "Westside",
      "South Lethbridge",
      "Legacy Ridge",
      "Copperwood",
      "Indian Battle Heights",
      "Sunridge",
    ],
    features: [
      "Top cash offers based on market value and condition",
      "Free junk car removal and towing in Lethbridge",
      "Same-day or next-day pickup availability",
      "Instant cash payment on pickup",
      "Help with the selling process and paperwork",
      "Eco-friendly recycling and disposal practices",
      "All makes, models, and conditions accepted",
      "Service across Lethbridge and southern Alberta",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Same day or next day",
    content: `Are you in Lethbridge and searching for an easy, fast, reliable way to sell your unwanted vehicle quickly and profitably? Whether it's old, damaged, non-running or simply taking up space - our Lethbridge car removal service provides top dollar cash, free towing and an effortless selling experience from start to finish.

At YYC Cash, our vehicle buying and removal services extend from Calgary into Lethbridge and its surrounding communities, giving homeowners, business owners, and drivers an effortless way to dispose of their cars while receiving top cash offers for them.

## Turn Your Old Cars Into Fast Cash - Local and Hassle-Free

Owning a vehicle that no longer runs, has significant damage, or has been sitting unused can be extremely stressful and time consuming. Cluttering up your driveway while depreciating in value quickly, it can become an eyesore - but our cash for junk cars Lethbridge service can make all the difference in getting rid of unwanted vehicles quickly and hassle free.

We specialize in:

- Cash for Junk Cars Lethbridge
- Junk Car Removal Lethbridge
- Scrap Car Removal Lethbridge
- Free Car Pickup & Eco-Friendly Recycling
- Same-Day or Next-Day Service!

No matter the condition, make, or model of your car, we offer competitive cash offers and take care of the rest for you.

## Why Choose Our Cash for Junk Cars Lethbridge Service?

At YYC  Junk Car Cash Offers in Lethbridge, our mission is simple: make selling your unwanted vehicle fast, fair, and stress-free. With dependable service and fair cash offers we have built up a stellar reputation among Lethbridge residents looking to "sell my junk car for cash:"

### Highest Cash Offers in Lethbridge

We make our offers based on current market values, junk metal pricing and vehicle condition. No matter if your car is barely drivable or completely immobilized - whether damaged in an accident or simply out-of-service for years- we promise a fair quote that you can rely on.

### Free Junk Car Removal & Towing

Do away with expensive removal fees: once you accept our offer, we'll arrange a convenient pickup time - often same-day! - and tow your vehicle away for free anywhere within Lethbridge - including residential, commercial and rural locations across the region.

### Instant Cash Payment

Our team will come pick up your car and pay out immediately, no waiting, no hidden charges - just quick payment for an easy transaction.

Selling a vehicle can be confusing due to all of its necessary paperwork and legal obligations, but don't worry: our team takes care of everything for you - title transfers, forms completion and legal obligations are taken care of by us so you won't need to worry.

### Eco-Friendly Scrap Car Removal

Responsible junk car removal goes beyond simple convenience - it is also about being environmentally aware. Our service recycles reusable parts and properly disposes of hazardous fluids while making sure any materials salvaged from your car meet local standards for processing.

## Common Reasons People Use Scrap Car Removal in Lethbridge

There can be numerous reasons for Lethbridge residents to sell their vehicle for cash, including:

- The car has mechanical issues and the repair cost outweighs the value.
- The vehicle failed inspection or doesn’t meet local road standards.
- Insurance wrote off the car after an accident.
- It’s taking up space on your property with no plans to fix or sell it privately.
- You need quick cash and a straightforward way to sell your old car.

No matter the cause of your vehicle's disuse, our [junk car removal Lethbridge service](/services/cash-for-junk-cars) provides a fast solution for turning that problem vehicle into money fast.

## How Our Cash for Cars Process Works (Quick & Simple)

We have simplified our process for selling cars as easily and conveniently as possible. Here's how it works:

### 1. Contact Us for a Free Quote

Reach out by phone or online form with basic details about your vehicle: make, model, year, condition and location in Lethbridge. We'll then make you a no-committal cash offer based on this data.

### 2. Accept Your Cash Offer

Our quotes are transparent and straightforward - without gimmicks or pressure to purchase. If you like what you see, simply confirm it and we'll arrange pickup!

### 3. Vehicle Pickup and Free Towing

At your scheduled pickup time, we arrive to tow away your vehicle at no cost, even if it doesn't run anymore.

### 4. Get Paid On the Spot

Once the vehicle is on board the truck, you'll receive your cash instantly - fast, fair, and stress-free!

## What Vehicles Do We Buy?

We accept virtually all vehicle types, including:

- Cars of any make/model
- SUVs and crossovers
- Trucks and pick-ups
- Vans and commercial vehicles
- Damaged or accident-written-off vehicles
- Old / high-mileage cars
- Non-running scrap vehicles

No matter the condition of your vehicle, we offer fair quotes and handle its removal safely and responsibly.

## Environmental Benefits of Professional Junk Car Removal

Professional car removal Lethbridge services can not only benefit your pocketbook, but the environment as well.

### Sustainable Recycling

Vehicles contain valuable metals like steel, aluminum and copper which should be recycled instead of being sent to landfill.

### Proper Handling of Fluids & Waste

Cars contain fluids that can be harmful if released into soil or groundwater, so professional removal ensures proper disposal in accordance with environmental standards.

### Reduced Raw Material Demand

Reusing existing materials reduces the need for new mining and manufacturing operations, thus cutting emissions and energy usage.

## (FAQs)

**Q: Will you accept vehicles that don't run?**

A: Absolutely. We welcome all makes and models - running or not - at competitive cash offers.

**Q: Will I need a title to sell my car?**

A: In most cases, yes; however we can assist in taking you through all necessary steps should this not be available to you.

**Q: How fast can my car be removed in Lethbridge?**

A: Your schedule and location in Lethbridge will play a part in how quickly we are able to collect it. Usually the same or next day.

**Q: Is There Any Cost Associated with Towing and Removal Services?**

A: No - Our towing and removal service is completely free with no hidden fees attached.

## Serving All of Lethbridge & Southern Alberta

From downtown Lethbridge and surrounding neighborhoods - such as North Lethbridge, Westside and South Lethbridge - to South Lethbridge and beyond, our mission is to deliver fast, reliable service that you can count on.

## Get Started: Sell Your Junk Car in Lethbridge Today!

Don't allow that old, damaged, or unused vehicle to waste another moment of space or value! Reach out to YYC Cash now for your scrap car removal Lethbridge needs and discover just how straightforward selling your car for cash can be! We provide free quotes!

No matter your junk car removal or cash for junk car needs in Lethbridge, we are your local experts - [offering top offers](/contact), free towing, and honest service from start to finish.`,
  },
];

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  if (slug === "calgary") {
    return {
      title: "Redirecting...",
      alternates: {
        canonical: "/",
      },
    };
  }
  const location = locationsData.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  const metaTitle = location.metaTitle || `${location.heading} - YYC Cash for Cars`;
  const metaDescription =
    location.metaDescription || location.description.substring(0, 160);

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: getOgImageForPath(`locations/${location.slug}`),
          width: 1200,
          height: 630,
          alt: location.heading,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [getOgImageForPath(`locations/${location.slug}`)],
    },
  };
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.slug,
  }));
}

const buildContentSections = (content) => {
  if (!content) return { introHtml: null, sections: [] };

  const normalized = content.trim();
  const matches = [...normalized.matchAll(/^##\s+(.+)$/gm)];

  if (matches.length === 0) {
    return {
      introHtml: marked.parse(normalized),
      sections: [],
    };
  }

  const introMarkdown = normalized.slice(0, matches[0].index).trim();
  const sections = matches.map((match, index) => {
    const title = match[1].trim();
    const start = match.index + match[0].length;
    const end =
      index + 1 < matches.length ? matches[index + 1].index : normalized.length;
    const body = normalized.slice(start, end).trim();

    return {
      title,
      html: marked.parse(body),
    };
  });

  return {
    introHtml: introMarkdown ? marked.parse(introMarkdown) : null,
    sections,
  };
};

const slugifySectionTitle = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function LocationPage({ params }) {
  const { slug } = await params;
  if (slug === "calgary") {
    permanentRedirect("/");
  }
  const location = locationsData.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  const { introHtml, sections } = buildContentSections(location.content);
  const isServiceStyleLocation =
    location.slug === "lethbridge" || location.slug === "drumheller";
  const heroHighlights = (location.features || []).slice(0, 4);
  const availableSectionImages = sectionImages.filter(
    (image) => image !== location.image
  );
  const breadcrumbTitle = `Cash for Cars ${location.name}`;
  const renderStatsBand = () => (
    <section className="overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-r from-[#eef7ff] via-white to-[#fff2f4] px-6 py-8 shadow-xl lg:px-10">
      <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
        {locationStats.map((stat) => (
          <div key={stat.label}>
            <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
              {stat.value}
            </div>
            <p className="mt-2 text-base font-semibold text-gray-700 md:text-lg">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="dark:bg-white">
      <Breadcrumb name={breadcrumbTitle} titleAs="h1" />

      {/* Location Detail Section */}
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-20 overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-br from-[#eff8ff] via-white to-[#fff6f7] shadow-xl">
            <div className="absolute -top-28 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative grid items-start gap-8 p-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(340px,0.92fr)] lg:p-10">
              <div className="flex flex-col justify-center">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-primary/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    {location.name}
                  </span>
                  <span className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-700">
                    {location.responseTime}
                  </span>
                  <span className="rounded-full border border-secondary/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
                    Free Towing
                  </span>
                </div>

                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-black md:text-4xl lg:text-[2.85rem]">
                  {location.heading}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-700 md:text-base">
                  {location.description}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600">
                  {location.additionalInfo}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-primary/10 bg-white/90 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                        Hours
                      </span>
                    </div>
                    <p className="text-sm font-semibold leading-6 text-black">
                      {location.hours}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-secondary/10 bg-white/90 p-4 shadow-sm">
                    <div className="mb-2 flex items-center gap-2">
                      <Navigation className="h-4 w-4 text-secondary" />
                      <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
                        Coverage
                      </span>
                    </div>
                    <p className="text-sm font-semibold leading-6 text-black">
                      {location.distance} from Calgary
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {heroHighlights.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white/80 px-4 py-3"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm leading-6 text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="tel:+15877009806"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call (587) 700-9806
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-white/70 bg-white/70 p-2 shadow-lg backdrop-blur-sm">
                <ContactForm />
              </div>
            </div>
          </div>

          {introHtml || sections.length > 0 ? (
            <section className="mb-16">
              <div className="space-y-8">
                {introHtml ? (
                  <div className={`overflow-hidden rounded-[2rem] border shadow-xl ${
                    isServiceStyleLocation
                      ? "border-primary/15 bg-gradient-to-br from-[#f4fbff] via-white to-[#fff5f6]"
                      : "border-primary/10 bg-gradient-to-br from-primary/5 via-white to-secondary/10"
                  }`}>
                    <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.8fr)] md:p-8 lg:p-10">
                      <div
                        className="blog-content text-black"
                        dangerouslySetInnerHTML={{ __html: introHtml }}
                      />
                      <div className="rounded-3xl bg-white/90 p-6 shadow-lg ring-1 ring-primary/10">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                          {location.name} Service
                        </p>
                        <h2 className="mt-3 text-2xl font-bold text-black">
                          Fast pickup with clear pricing
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-gray-700">
                          We handle unwanted vehicles with straightforward quotes,
                          free towing, and prompt collection across {location.name}{" "}
                          and nearby areas.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          <div className="rounded-2xl border border-primary/10 bg-primary/5 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                              Response Time
                            </p>
                            <p className="mt-1 text-sm font-bold text-black">
                              {location.responseTime}
                            </p>
                          </div>
                          <div className="rounded-2xl border border-secondary/10 bg-secondary/5 p-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                              Towing
                            </p>
                            <p className="mt-1 text-sm font-bold text-black">
                              Free pickup available
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="grid gap-8">
                  {(() => {
                    const renderedSections = [];
                    let standardSectionCount = 0;

                    sections.forEach((section, index) => {
                      const normalizedTitle = section.title.toLowerCase().trim();
                      const isFaq = normalizedTitle === "faqs" || normalizedTitle.startsWith("faqs");
                      const isBracketFaq =
                        normalizedTitle === "(faqs)" ||
                        normalizedTitle.startsWith("(faqs");
                      const isCta = section.title
                        .toLowerCase()
                        .includes("get your junk car removed") ||
                        section.title.toLowerCase().includes("get started:");
                      const sectionImage =
                        index === 0 && location.image
                          ? location.image
                          : availableSectionImages[
                              (index - (location.image ? 1 : 0) +
                                availableSectionImages.length) %
                                availableSectionImages.length
                            ];
                      const imageFirst = index % 2 === 0;
                      let sectionNode;

                      if (isServiceStyleLocation) {
                        if (isBracketFaq || isFaq) {
                          sectionNode = (
                            <section
                              id={slugifySectionTitle(section.title)}
                              key={section.title}
                              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:p-10"
                            >
                              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                                Common Questions
                              </p>
                              <h2 className="mb-4 text-3xl font-bold text-black">
                                FAQs
                              </h2>
                              <div
                                className="blog-content location-content text-black"
                                dangerouslySetInnerHTML={{ __html: section.html }}
                              />
                            </section>
                          );
                        } else if (isCta) {
                          sectionNode = (
                            <section
                              id={slugifySectionTitle(section.title)}
                              key={section.title}
                              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary via-[#6f7fa0] to-secondary p-8 shadow-xl lg:p-10"
                            >
                              <div className="absolute -top-20 -right-10 h-56 w-56 rounded-full bg-white/10" />
                              <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/10" />
                              <div className="relative">
                                <h2 className="mb-3 text-3xl font-bold text-white">
                                  {section.title}
                                </h2>
                                <div
                                  className="blog-content location-content text-white [&_a]:inline-flex [&_a]:items-center [&_a]:rounded-full [&_a]:bg-white [&_a]:px-3 [&_a]:py-1 [&_a]:font-semibold [&_a]:text-primary [&_a]:no-underline"
                                  dangerouslySetInnerHTML={{ __html: section.html }}
                                />
                              </div>
                            </section>
                          );
                        } else {
                          sectionNode = (
                            <section
                              id={slugifySectionTitle(section.title)}
                              key={section.title}
                              className="grid items-stretch gap-6 lg:grid-cols-2"
                            >
                              <div
                                className={`relative overflow-hidden rounded-[1.75rem] border border-primary/10 shadow-sm ${
                                  imageFirst ? "lg:order-1" : "lg:order-2"
                                }`}
                              >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                                <div className="relative h-72 w-full lg:h-full lg:min-h-[420px]">
                                  <Image
                                    src={sectionImage}
                                    alt={`${section.title} in ${location.name}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                  />
                                </div>
                              </div>
                              <div
                                className={`rounded-[1.75rem] p-6 shadow-sm lg:p-10 ${
                                  imageFirst ? "lg:order-2" : "lg:order-1"
                                } ${
                                  index % 2 === 0
                                    ? "border border-primary/15 bg-gradient-to-br from-[#f4fbff] via-white to-[#fff5f6]"
                                    : "border border-gray-100 bg-white"
                                }`}
                              >
                                <h2 className="mb-4 text-3xl font-bold text-black">
                                  {section.title}
                                </h2>
                                <div
                                  className="blog-content location-content text-black"
                                  dangerouslySetInnerHTML={{ __html: section.html }}
                                />
                              </div>
                            </section>
                          );
                          standardSectionCount += 1;
                        }
                      } else if (isFaq) {
                        sectionNode = (
                          <div
                            id={slugifySectionTitle(section.title)}
                            key={section.title}
                            className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl md:p-8 lg:p-10"
                          >
                            <div className="mb-6 flex items-center justify-between gap-4">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">
                                  Common Questions
                                </p>
                                <h2 className="mt-2 text-3xl font-bold text-black">
                                  {section.title}
                                </h2>
                              </div>
                            </div>
                            <div
                              className="blog-content location-content text-black"
                              dangerouslySetInnerHTML={{ __html: section.html }}
                            />
                          </div>
                        );
                      } else if (isCta) {
                        sectionNode = (
                          <div
                            id={slugifySectionTitle(section.title)}
                            key={section.title}
                            className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-primary to-secondary p-[1px] shadow-2xl"
                          >
                            <div className="rounded-[calc(2rem-1px)] bg-white px-6 py-8 md:px-8 lg:px-10">
                              <p className="text-xs font-bold uppercase tracking-[0.24em] text-secondary">
                                Next Step
                              </p>
                              <h2 className="mt-2 text-3xl font-bold text-black">
                                {section.title}
                              </h2>
                              <div
                                className="blog-content location-content mt-5 text-black"
                                dangerouslySetInnerHTML={{ __html: section.html }}
                              />
                            </div>
                          </div>
                        );
                      } else {
                        sectionNode = (
                          <div
                            id={slugifySectionTitle(section.title)}
                            key={section.title}
                            className="grid items-stretch gap-6 lg:grid-cols-2"
                          >
                            <div
                              className={`overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 ${
                                imageFirst ? "lg:order-1" : "lg:order-2"
                              }`}
                            >
                              <div className="relative h-72 w-full lg:h-full lg:min-h-[460px]">
                                <Image
                                  src={sectionImage}
                                  alt={`${section.title} in ${location.name}`}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                              </div>
                            </div>
                            <div
                              className={`overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-xl ring-1 ring-black/5 ${
                                imageFirst ? "lg:order-2" : "lg:order-1"
                              }`}
                            >
                              <div className="relative overflow-hidden p-6 md:p-8 lg:p-10">
                                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-secondary/10 blur-2xl" />
                                <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                                <div className="relative">
                                  <div className="mb-4 flex items-center gap-3">
                                    <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-primary to-secondary" />
                                    <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                                  </div>
                                  <h2 className="text-2xl font-bold leading-tight text-black md:text-3xl">
                                    {section.title}
                                  </h2>
                                  <div
                                    className="blog-content location-content mt-6 text-black"
                                    dangerouslySetInnerHTML={{ __html: section.html }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                        standardSectionCount += 1;
                      }

                      renderedSections.push(sectionNode);

                      if (standardSectionCount === 2) {
                        renderedSections.push(
                          <div key="mid-content-stats">{renderStatsBand()}</div>
                        );
                      }
                    });

                    return renderedSections;
                  })()}
                </div>
              </div>
            </section>
          ) : null}

          {/* Neighborhoods Served */}
          {location.neighborhoods && location.neighborhoods.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Neighborhoods We Serve in {location.name}
                </h3>
                <p className="text-black">
                  We provide service to all areas of {location.name}
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {location.neighborhoods.map((neighborhood, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-black"
                    >
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="mb-16">
            <Testimonial />
          </div>

          {/* Service Promise */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <Truck className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Sell Your Car in {location.name}?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-95">
              Get an instant quote now! We offer same-day pickup, free towing, and
              cash on the spot. No hassle, no hidden fees.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+15877009806"
                className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                📞 (587) 700-9806
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
