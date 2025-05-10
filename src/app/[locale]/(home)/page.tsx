'use client'
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";


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

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      <main className="min-h-screen bg-white">
        <div
          style={{
            backgroundImage: "url(/assets/png/homeBanner.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "1000px",
            width: "100%",

            marginTop: "calc(-1*var(--header-height))",
            display: "flex",
            alignItems: "center",
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
                  {t('hero.subtitle')}
                </p>
                <h1 className="text-5xl font-bold text-[#181E4B] mb-8">
                  {t('hero.title')}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  {t('hero.description')}
                </p>
                <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg hover:bg-[#d89401] transition-colors">
                  {t('hero.cta')}
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
                {t('services.title')}
              </h2>
              <p className="text-gray-600">{t('services.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F0BB1F] rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/svg/window.svg"
                    alt="Destination"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('services.items.destination.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.items.destination.description')}
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F15A2B] rounded-lg flex items-center justify-center">
                  <Image src="/assets/svg/file.svg" alt="Payment" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('services.items.payment.title')}</h3>
                <p className="text-gray-600">
                  {t('services.items.payment.description')}
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#006380] rounded-lg flex items-center justify-center">
                  <Image src="/assets/svg/file.svg" alt="Airport" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t('services.items.airport.title')}
                </h3>
                <p className="text-gray-600">
                  {t('services.items.airport.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="container  mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <p className="text-[#5E6282] mb-2">{t('destinations.subtitle')}</p>
            <h2 className="text-4xl font-bold text-[#14183E]">
              {t('destinations.title')}
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
              <p className="text-[#5E6282] mb-2">{t('testimonials.subtitle')}</p>
              <h2 className="text-4xl font-bold text-[#14183E]">
                {t('testimonials.title')}
              </h2>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-4">
                  {t('testimonials.quote')}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">{t('testimonials.author')}</h4>
                    <p className="text-gray-600">{t('testimonials.location')}</p>
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
                {t('subscribe.title')}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder={t('subscribe.placeholder')}
                className="px-6 py-3 rounded-lg w-full md:w-auto bg-white shadow-md"
              />
              <button className="bg-[#FF946D] text-white px-6 py-3 rounded-lg hover:bg-[#ff8555] transition-colors">
                {t('subscribe.cta')}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
