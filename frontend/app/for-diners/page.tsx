"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";
import NotificationsAnimation from "@/public/animationsLottie/notifications.json";
import PizzaAnimation from "@/public/animationsLottie/pizza ingrediants.json";
import WalletAnimation from "@/public/animationsLottie/Wallet Animation.json";
import FoodCarousel from "@/public/animationsLottie/Food.json";
import Navigation from "@/public/animationsLottie/map navigation.json";
import { FadeText } from "@/components/ui/fade-text";
import { TextEffect } from "@/components/ui/text-effect";
import IphoneFrame from "@/components/ui/IphoneFrame";

export default function ForDiners() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend/email service
    console.log("Diner signup:", email);
    setSubmitted(true);
  };

  const features = [
    {
      name: "Real savings, no catch",
      description: "Exclusive discounts. Same great food, smaller bill.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
      lottieAnimation: WalletAnimation,
    },
    {
      name: "Get notified, not spammed",
      description: "We only notify you when something good is happening nearby — no noise, no spam.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
      lottieAnimation: NotificationsAnimation,
      animationClassName: "pt-8",
    },
    {
      name: "On-demand navigation",
      description: "Follow the in-app map for directions and get to the deal with ease.",
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      lottieAnimation: Navigation,
      animationClassName: "!inset-0 !h-full scale-150"
      // background: (
      //   <>
      //     <div
      //       className="absolute inset-0 bg-center"
      //       style={{ backgroundImage: "url('/imageAssets/mapbox.png')", backgroundSize: "190%" }}
      //     />
      //     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/90 backdrop-blur-[0px]" />
      //     <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)] backdrop-blur-sm" />
      //   </>
      // ),
    },
    {
      name: "Support great food",
      description: "Enjoy deals that help restaurants thrive — and treat yourself.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      lottieAnimation: PizzaAnimation,
    },
    {
      name: "Your deals, your way",
      description: "See the deals you want, right when they're available. Skip the hassle of searching.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      lottieAnimation : FoodCarousel,
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* City Skyline Background */}
        <div
          className="absolute bottom-0 left-0 right-0 h-70 pointer-events-none z-0 opacity-20 blur-[1px]"
          style={{
            backgroundImage: "url('/imageAssets/citySkyline.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            maskImage: "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
          }}
        />

        {/* Header */}
        <header className="p-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </header>

        {/* Hero */}
        <section className="px-6 py-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <FadeText
                className="text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text="Great Food."
              />
              <FadeText
                className="text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.8 } },
                }}
                text="Better prices."
              />
              <FadeText
                className="text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 1.2 } },
                }}
                text="Just next door."
              />
            </div>

            <div className="py-10">
              {/* <p className="text-lg md:text-xl text-black-600 mx-auto whitespace-nowrap">
                Trivvi sends you deals from local restaurants during their quiet hours.
                <br />
                You save money, they fill seats.
                <br />
                Everybody wins.
              </p> */}
              <TextEffect
                per="line"
                as="p"
                preset="blur"
                delay={1.6}
                className="text-xl md:text-2xl text-black text-center mx-auto"
              >
                {`Trivvi uses real-time alerts to help restaurants fill empty tables.
Diners find great deals nearby.`}
              </TextEffect>

            </div>

          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <section className="text-center py-10">
              <TextEffect
                per="line"
                as="p"
                preset="blur"
                delay={2}
                className="text-2xl md:text-3xl text-black font-(family-name:--font-caudex)"
              >
                {`Trivvi is Designed for Diners`}
              </TextEffect>
            </section>
            <BentoGrid className="lg:grid-rows-3" delay={2.5}>

              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-4xl font-bold mb-12 font-(family-name:--font-caudex)">
              Setup in 3 easy steps
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4">
              {[
                { step: "1", emoji: "📱", text: "Sign up & enable notifications", subtext: "" },
                { step: "2", emoji: "🔔", text: "Get alerted when nearby deals drop ", subtext: "Only when it's worth your attention" },
                { step: "3", emoji: "🍜", text: "Show up, eat up, save up" },
              ].map((item) => (
                <div key={item.step} className="flex-1 flex flex-col items-center">
                  <span className="text-4xl mb-3">
                    {item.emoji}
                  </span>
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3">
                    {item.step}
                  </div>
                  <p className="text-gray-700 ">
                    {item.text}
                  </p>
                  <p className=" text-gray-500 font-(family-name:--font-caudex)">
                    {item.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="shrink-0 flex justify-start">
              <LottieAnimation
                animationData={ParrotAnimation}
                className="w-64 h-64 md:w-80 md:h-80"
              />
            </div>

            <div className="flex-1 text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-[#03045E] mb-6 font-(family-name:--font-caudex)">
                Meet Chirp
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-(family-name:--font-inter) max-w-lg mx-auto">
                Your friendly guide to the best local deals. Chirp helps you discover amazing food at amazing prices, right in your neighborhood.
              </p>
            </div>

            <div className="min-h-screen flex items-center justify-center p-8">
              <IphoneFrame />
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section className="px-6 py-16">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Be first in line
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re launching soon. Join the waitlist and be the first to know when Vulpes arrives in your area.
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <span className="text-5xl mb-4 block">🎉</span>
                <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
                <p className="text-gray-600">We&apos;ll let you know as soon as we launch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Join waitlist
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-gray-400 text-sm">
          <p></p>
        </footer>
      </main>
    </SmoothScroll>
  );
}
