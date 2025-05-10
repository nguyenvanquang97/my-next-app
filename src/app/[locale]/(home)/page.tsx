"use client";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";

export const destinations = [
  {
    id: 1,
    name: "Rome",
    location: "Italy",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1000&auto=format&fit=crop",
    rating: 4.8
  },
  {
    id: 2,
    name: "London",
    location: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop",
    rating: 4.7
  },
  {
    id: 3,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop",
    rating: 4.9
  }
];

import { useTranslations } from "next-intl";
import { MapPin } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const t = useTranslations("home");

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
                  {t("hero.subtitle")}
                </p>
                <h1 className="text-5xl font-bold text-[#181E4B] mb-8">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  {t("hero.description")}
                </p>
                <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg hover:bg-[#d89401] transition-colors">
                  {t("hero.cta")}
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
                {t("services.title")}
              </h2>
              <p className="text-gray-600">{t("services.subtitle")}</p>
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
                  {t("services.items.destination.title")}
                </h3>
                <p className="text-gray-600">
                  {t("services.items.destination.description")}
                </p>
              </div>
              {/* Service Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#F15A2B] rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/svg/file.svg"
                    alt="Payment"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("services.items.payment.title")}
                </h3>
                <p className="text-gray-600">
                  {t("services.items.payment.description")}
                </p>
              </div>
              {/* Service Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-[#006380] rounded-lg flex items-center justify-center">
                  <Image
                    src="/assets/svg/file.svg"
                    alt="Airport"
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {t("services.items.airport.title")}
                </h3>
                <p className="text-gray-600">
                  {t("services.items.airport.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations Section */}

        <TopDestinations />

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <p className="text-[#5E6282] mb-2">
                {t("testimonials.subtitle")}
              </p>
              <h2 className="text-4xl font-bold text-[#14183E]">
                {t("testimonials.title")}
              </h2>
            </div>
            <div className="max-w-xl mx-auto">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-4">{t("testimonials.quote")}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">
                      {t("testimonials.author")}
                    </h4>
                    <p className="text-gray-600">
                      {t("testimonials.location")}
                    </p>
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
                {t("subscribe.title")}
              </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder={t("subscribe.placeholder")}
                className="px-6 py-3 rounded-lg w-full md:w-auto bg-white shadow-md"
              />
              <button className="bg-[#FF946D] text-white px-6 py-3 rounded-lg hover:bg-[#ff8555] transition-colors">
                {t("subscribe.cta")}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
}

function TopDestinations() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Top Destinations
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most popular travel destinations loved by travelers
            around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/destinations/${destination.id}`}
              className="group block overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  style={{
      
                  }}
                  className="object-cover w-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
              </div>
              <div className="relative -mt-16 px-4 pb-4">
                <div className="rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                      {destination.rating}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    {destination.location}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
