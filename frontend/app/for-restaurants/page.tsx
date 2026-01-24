"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Users, Zap } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";

export default function ForRestaurants() {
  const [email, setEmail] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to your backend/email service
    console.log("Restaurant signup:", { email, restaurantName });
    setSubmitted(true);
  };

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Turn dead hours into revenue",
      description: "Those slow 2-4pm hours? Fill them with customers who are happy to be there.",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "No upfront costs",
      description: "Only pay when it works. No subscriptions, no setup fees, no risk.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Reach your neighbors",
      description: "Connect with hungry customers within walking distance of your door.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "You stay in control",
      description: "Set your own deals, choose your hours, adjust anytime. Your restaurant, your rules.",
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        {/* Header */}
        <header className="p-6">
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
            <span className="text-4xl mb-4 block">👨‍🍳</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
              Empty seats?<br />Not anymore.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
              Post a deal during your slow hours. Vulpes notifies hungry locals nearby.
              They show up, you profit, your community grows.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why restaurants love Vulpes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12">
              How it works
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-4">
              {[
                { step: "1", emoji: "📝", text: "Set your slow hours & create a deal" },
                { step: "2", emoji: "📍", text: "We notify hungry people nearby" },
                { step: "3", emoji: "🪑", text: "Watch the seats fill up" },
              ].map((item) => (
                <div key={item.step} className="flex-1 flex flex-col items-center">
                  <span className="text-4xl mb-3">{item.emoji}</span>
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-3">
                    {item.step}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section className="px-6 py-16 bg-primary/5">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Get early access
            </h2>
            <p className="text-gray-600 mb-8">
              We&apos;re launching soon and partnering with local restaurants first.
              Join the waitlist to be among our founding partners.
            </p>

            {submitted ? (
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <span className="text-5xl mb-4 block">🎉</span>
                <h3 className="text-xl font-bold mb-2">Welcome to the pack!</h3>
                <p className="text-gray-600">We&apos;ll reach out soon to get you set up.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  required
                  value={restaurantName}
                  onChange={(e) => setRestaurantName(e.target.value)}
                  placeholder="Restaurant name"
                  className="px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="px-5 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  Join as a partner
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-gray-400 text-sm">
          <p>Made with 🦊 by Vulpes</p>
        </footer>
      </main>
    </SmoothScroll>
  );
}
