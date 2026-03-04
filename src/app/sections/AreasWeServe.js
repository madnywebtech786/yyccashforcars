export default function AreasWeServeSection() {
  return (
    <section className="relative overflow-hidden p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-[140px]" />

      <div className="relative mx-auto w-full px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold text-black mb-4">
            Areas We Serve in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Calgary
            </span>{" "}
          </h3>
          <p className="text-black max-w-3xl mx-auto text-lg">
            All quadrants covered with fast pickup across Deerfoot, Stoney, Crowchild,
            Glenmore, and Macleod Trail.
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
                  Citywide coverage with quick pickup
                </h4>
                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>
                    Our Cash for Cars Calgary service spans the city&mdash;north, northeast,
                    southeast, south-west, southeast&mdash;along with downtown and industrial
                    districts. No matter where your location falls on Deerfoot Trail, Stoney
                    Trail, Crowchild Trail, Glenmore Trail, or Macleod Trail, we can often
                    arrange quick pickup.
                  </p>
                  <p>
                    <span className="font-semibold text-black">Northwest Calgary</span>: We
                    offer services throughout NW Calgary, from established communities to newer
                    neighborhoods such as those near the University of Calgary / SAIT to
                    Kensington &amp; Hillhurst, Brentwood, Dalhousie, Varsity, Montgomery,
                    Bowness, Ranchlands, Scenic Acres, Tuscany, Arbour Lake, and Royal Oak.
                  </p>
                  <p>
                    <span className="font-semibold text-black">Northeast Calgary</span>: Calgary
                    pickups are often requested when vehicles won&apos;t start or are sitting
                    idling on-site, such as: Saddleridge, Taradale, Martindale, Falconridge,
                    Castle Ridge, Monterey Park, SkyView Ranch, and Cornerstone.
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 lg:order-1 p-8 lg:p-10">
                <h4 className="text-2xl font-bold text-black mb-4">
                  Neighborhoods, downtown, and industrial routes
                </h4>
                <div className="space-y-4 text-black/70 leading-relaxed">
                  <p>
                    <span className="font-semibold text-black">Southwest Calgary</span>: We
                    offer fast service across SW Calgary including Marda Loop, Altadore,
                    Glenbrook, Signal Hill, West Springs, Aspen Woods, Springbank Hill,
                    Strathcona Park, Evergreen, Bridlewood, and Silverado areas.
                  </p>
                  <p>
                    <span className="font-semibold text-black">SE Calgary</span>: We provide our
                    most popular service zone to date: SE Calgary is our most active service area
                    and covers Deer Run, Queensland, Acadia, Cranston, as well as Auburn Bay,
                    Mahogany, Seton, Legacy, Walden, and Midnapore.
                  </p>
                  <p>
                    Areas near industrial parks and major routes like Deerfoot and Stoney offer
                    great investment potential.
                  </p>
                  <p>
                    <span className="font-semibold text-black">Downtown Calgary &amp; Inner City</span>:
                    In the core or inner-city neighborhoods, we provide fast removal of unwanted
                    vehicles&mdash;particularly helpful when parking space is tight. Our service
                    areas include Beltline, Mission, Inglewood, Bridgeland, Eau Claire, and East
                    Village. Areas around major landmarks such as Calgary Tower and Stampede
                    Grounds provide opportunities for improvement.
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
