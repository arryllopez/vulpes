"use client";

import Link from "next/link";
import { Bell, MapPin, Percent, Clock, DollarSign, Users, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";

export default function Home() {
  return (
    <SmoothScroll>
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">
        <GradientBackground />

        <div className="relative z-10 flex flex-col gap-4 items-center text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-(family-name:--font-caudex) text-black">
            Trivvi
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-[#023E8A]">
            Fly with us to your next meal.
          </p>
          <p className="text-base md:text-lg font-bold max-w-lg text-[#03045E]">
            Local restaurants post deals during quiet hours.
            <br/>
            Nearby food lovers get notified.
            <br/>
            Everyone wins.
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10">
          <Link
            href="/for-diners"
            className="px-8 py-4 bg-white font-semibold text-lg rounded-full border-2 text-[#03045E] border-[#03045E]"
          >
            I&apos;m hungry for deals
          </Link>
          <Link
            href="/for-restaurants"
            className="px-8 py-4 bg-white font-semibold text-lg rounded-full border-2 text-[#0077B6] border-[#0077B6]"
          >
            I run a restaurant
          </Link>
        </div>

        <p className="relative z-10 mt-10 text-sm font-medium font-(family-name:--font-inter) text-[#0096C7]">
          Join the flock. Support local.
        </p>
      </section>

      <section className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 flex justify-start">
            <LottieAnimation
              animationData={ParrotAnimation}
              className="w-48 h-48 md:w-64 md:h-64"
            />
          </div>

          <div className="flex-1 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#03045E] mb-4 font-(family-name:--font-caudex)">
              Meet Chirp
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-(family-name:--font-inter) max-w-md mx-auto">
              Your friendly guide to the best local deals. Chirp helps you discover amazing food at amazing prices, right in your neighborhood.
            </p>
          </div>

          <div className="shrink-0 flex justify-end">
            <div className="w-48 h-80 md:w-56 md:h-96 bg-gray-100 rounded-3xl border-4 border-gray-300 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Phone Mockup</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Diners Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="shrink-0 flex justify-start">
            <div className="w-48 h-80 md:w-56 md:h-96 bg-gray-100 rounded-3xl border-4 border-gray-300 flex items-center justify-center">
              <p className="text-gray-400 text-sm">Phone Mockup</p>
            </div>
          </div>

          <div className="flex-1 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#03045E] mb-4 font-(family-name:--font-caudex)">
              For Diners
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-(family-name:--font-inter) max-w-md mx-auto">
              Chirp notifies you of the best deals all around town.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white text-center">
        <p className="text-[#03045E] font-bold text-xl mb-2">Trivvi</p>
        <p className="text-gray-500 text-sm">Join the flock. Support local.</p>
      </footer>
    </main>
    </SmoothScroll>
  );
}
