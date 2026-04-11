export default function AreasWeServeSection() {
  return (
    <section className="relative overflow-hidden p-4 py-16 md:p-10 lg:p-10 bg-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto w-full px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold text-black mb-4">
            We Serve{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Every Part of Calgary
            </span>{" "}
          </h3>
          <p className="text-black max-w-3xl mx-auto text-lg">
            NW, NE, SE, SW, Downtown, and outside Calgary are all covered with
            the same free towing and same competitive pricing.
          </p>
        </div>
        

        <div className="grid gap-12">
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <div className="p-8 lg:p-10">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
                    <img
                      src="/images/calgary-city.jpg"
                      alt="Calgary cash for cars service area"
                      className="h-72 w-full rounded-xl object-cover object-center"
                    />
                  </div>
                  
                </div>
              </div>
              <div className="p-8 lg:p-10">
                <h4 className="text-2xl font-bold text-black mb-4">
                  NW Calgary
                </h4>
                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>
                    We cover all of NW Calgary daily — from the communities
                    around the University of Calgary and SAIT, through Brentwood,
                    Varsity, Dalhousie, Montgomery, Bowness, Silver Springs,
                    Ranchlands, Scenic Acres, and out west to Tuscany, Arbour
                    Lake, and Royal Oak. If your vehicle is in NW Calgary, we
                    can usually be there the same day.
                  </p>
                  <h4 className="pt-3 text-2xl font-bold text-black">
                    NE Calgary
                  </h4>
                  <p>
                    NE Calgary is one of our busiest pickup zones. Saddleridge,
                    Taradale, Martindale, Falconridge, Castleridge, Monterey
                    Park, SkyView Ranch, Cornerstone, Cityscape, and Redstone —
                    we are in these communities regularly. Same-day pickup is
                    almost always available.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-10">
                <h4 className="text-2xl font-bold text-black mb-4">
                  SE Calgary
                </h4>
                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>
                    SE Calgary is our highest-volume service area. Cranston,
                    Auburn Bay, Mahogany, Seton, Legacy, Walden, Deer Run,
                    Queensland, Acadia, McKenzie Towne, Douglasdale, and
                    Midnapore — we run these routes every single day.
                  </p>
                  <h4 className="pt-3 text-2xl font-bold text-black">
                    SW Calgary
                  </h4>
                  <p>
                    Marda Loop, Altadore, Glenbrook, Signal Hill, West Springs,
                    Aspen Woods, Springbank Hill, Strathcona Park, Evergreen,
                    Bridlewood, Silverado, and Garrison Woods — all covered,
                    same-day service available in most cases.
                  </p>
                  <h4 className="pt-3 text-2xl font-bold text-black">
                    Downtown &amp; Inner City
                  </h4>
                  <p>
                    Beltline, Mission, Inglewood, Bridgeland, Eau Claire, East
                    Village, and Ramsay — parking is tight in the core and we
                    know it. Our drivers navigate downtown Calgary regularly and
                    can arrange fast removal near the Stampede Grounds, Calgary
                    Tower, and East Village.
                  </p>
                  <h4 className="pt-3 text-2xl font-bold text-black">
                    Outside Calgary
                  </h4>
                  <p>
                    We serve Airdrie, Cochrane, Okotoks, Chestermere,
                    Strathmore, High River, and all Rocky View County
                    communities with the same free towing and same competitive
                    pricing. No extra charges for communities within 60 km of
                    Calgary.
                  </p>
                </div>
                
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="p-8 lg:p-10">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
                    <img
                      src="/images/nw-calgary-lifestyle.jpg"
                      alt="Downtown Calgary vehicle removal"
                      className="h-72 w-full rounded-xl object-cover object-center"
                    />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
