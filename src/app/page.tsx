import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const destinations = [
  {
    name: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip",
    image: "/assets/png/destinations/rome.png",
  },
  {
    name: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    image: "/assets/png/destinations/london.png",
  },
  {
    name: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    image: "/assets/png/destinations/europe.png",
  },
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <div
          style={{
            backgroundImage: "url(/assets/png/homeBanner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "600px",
            width: "100%",

            marginTop: "calc(-1*var(--header-height))",
            paddingTop: 80,
          }}
        >
          {/* Hero Section */}
          <section
            style={{ backgroundColor: "transparent" }}
            className="container mx-auto px-4 py-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <p className="text-[20px] text-[#DF6951] font-bold mb-8 uppercase">
                  Best Destinations around the world
                </p>
                <h1 className="text-5xl font-bold text-[#181E4B] mb-8">
                  Travel, enjoy and live a new and full life
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Built Wicket longer admire do barton vanity itself do in it.
                  Preferred to sportsmen it engrossed listening. Park gate sell
                  they west hard for the.
                </p>
                <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg hover:bg-[#d89401] transition-colors">
                  Find out more
                </button>
              </div>
              <div className="flex-1 relative"></div>
            </div>
          </section>
        </div>

        {/* Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#14183E] mb-4">
                We Offer Best Services
              </h2>
              <p className="text-gray-600">CATEGORY</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F0BB1F] rounded-lg flex items-center justify-center">
                  <Image
                    src="/window.svg"
                    alt="Destination"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Choose Destination
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F15A2B] rounded-lg flex items-center justify-center">
                  <Image src="/file.svg" alt="Payment" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Make Payment</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#006380] rounded-lg flex items-center justify-center">
                  <Image src="/file.svg" alt="Airport" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Reach Airport on Selected Date
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="container  mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-[#5E6282] mb-2">Top Selling</p>
            <h2 className="text-4xl font-bold text-[#14183E]">
              Top Destinations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link
                href={`/destination/${index}`}
                key={index}
                className="hover:shadow-xl transition-shadow"
              >
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="h-64 bg-[#F8F8F8] relative">
                    <Image
                      src={destination.image}
                      alt={destination.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">{destination.name}</h3>
                        <p className="font-semibold">{destination.price}</p>
                      </div>
                      <p className="text-gray-600 mt-2">{destination.days}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-[#5E6282] mb-2">Testimonials</p>
              <h2 className="text-4xl font-bold text-[#14183E]">
                What people say about Us.
              </h2>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  "On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Mike Taylor</h4>
                    <p className="text-gray-600">Lahore, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Subscribe Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto bg-[#DFD7F9] rounded-2xl p-8 relative overflow-hidden">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#14183E] mb-4">
                Subscribe to get information, latest news and other interesting
                offers about Jadoo
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Your email"
                className="px-6 py-3 rounded-lg w-full md:w-auto"
              />
              <button className="bg-[#FF946D] text-white px-6 py-3 rounded-lg hover:bg-[#ff8555] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
