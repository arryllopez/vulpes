"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";
import { FadeText } from "@/components/ui/fade-text";
import { TextEffect } from "@/components/ui/text-effect";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FaqSections } from "@/components/ui/faq-sections";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { Mail, Bell } from "lucide-react";
import IPhoneDashboard from "@/components/ui/IPhoneDashboard";
import { useState } from "react";

export default function ForRestaurants() {
  const [email, setEmail] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Restaurant signup:", { email, restaurantName });
    setSubmitted(true);
  };

  const features = [
    {
      name: "Fill empty seats instantly",
      description: "Turn slow hours into busy ones — diners see your deals when they open the app nearby.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 min-h-[280px] md:min-h-[320px]",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 30%, #ffffff 70%)"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-end p-4 -mt-12 pr-0">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-[340px] scale-[0.85] md:scale-[1.2] translate-x-1 -translate-y-7">
              <div className="text-base font-semibold text-gray-800 mb-5 font-(family-name:--font-caudex)">Table Occupancy</div>
              <div className="grid grid-cols-4 gap-4 mb-5 font-(family-name:--font-caudex)">
                {[1,2,3,4,5,6,7,8].map((i) => (
                  <div key={i} className={`w-14 h-14 rounded-xl flex items-center justify-center text-base font-semibold ${[2,3,5].includes(i) ? 'bg-[#abc4ff]/20 text-[#abc4ff]' : i <= 5 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'}`}>
                    {i}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm font-(family-name:--font-caudex)">
                <span className="text-gray-600 font-(family-name:--font-caudex)">5/8 tables filled</span>
                <span className="text-[#abc4ff] font-semibold">+3 from Trivvi</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white from-80% to-transparent pointer-events-none md:hidden" />
        </div>
      ),
    },
    {
      name: "Simple pricing.",
      description: "$15/month per restaurant. First 30 days free. Cancel anytime — no hidden fees.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 min-h-[200px]",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 30%, #ffffff 70%)"
          }}
        >
          <div
            className="p-2 md:p-3 scale-[0.9] md:scale-[0.85] origin-top"
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 90%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 90%)"
            }}
          >
            <div className="bg-white rounded-xl shadow-lg p-3 text-[10px] md:text-xs">
              <div className="text-[8px] md:text-[10px] text-gray-500 mb-2">Pricing</div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-black font-bold font-(family-name:--font-caudex)">Monthly Fee</span>
                  <span className="text-black font-bold font-(family-name:--font-caudex)">$15</span>
                </div>  
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-bold font-(family-name:--font-caudex)">Free Trial</span>
                  <span className="text-green-600 font-bold font-(family-name:--font-caudex)">-$15</span>
                </div>
                <div className="border-t border-gray-100 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-black font-bold font-(family-name:--font-caudex)">Total Amount</span>
                    <span className="text-black font-bold font-(family-name:--font-caudex)">$0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "View your performance",
      description: "Simple analytics show exactly how your posted deals are performing.",
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 50%, #ffffff 85%)"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 -mt-8">
            <div className="scale-[0.50] md:scale-[0.85] origin-center translate-y-6 md:-translate-y-12">
              <IPhoneDashboard />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-20 bg-gradient-to-t from-white from-40% via-white/95 via-60% to-transparent pointer-events-none" />
        </div>
      ),
    },
    {
      name: "Reach nearby diners",
      description: "Connect with hungry customers within walking distance.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 30%, #ffffff 70%)"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center -translate-y-8">
            <img
              src="/imageAssets/peopleWalking.svg"
              alt="People walking"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-45 bg-gradient-to-t from-white from-70% to-transparent pointer-events-none" />
        </div>
      ),
    },
    {
      name: "You stay in control",
      description: "Set your own deals, your own alerts, at your own schedule.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 40%, #ffffff 80%)"
          }}
        >
          <div className="absolute inset-0">
            {/* Live Update Card - top left (Signal-only, no deal) */}
            <div className="absolute top-3 left-1 md:top-4 md:left-3 w-[155px] md:w-[180px] bg-white rounded-xl shadow-lg p-3 rotate-[-3deg]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#f6bd60]/20 text-[#f6bd60] text-[8px] md:text-[9px] font-semibold px-2 py-0.5 rounded font-(family-name:--font-caudex)">🔵 Live Update</span>
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Headline</div>
              <input
                type="text"
                placeholder="No wait right now"
                className="w-full text-[8px] md:text-[9px] px-2 py-1 rounded-lg bg-gray-50 border border-gray-200 mb-1.5 font-(family-name:--font-caudex) placeholder:text-gray-400"
                readOnly
              />
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Category</div>
              <div className="flex gap-1 mb-1.5 flex-wrap">
                {['Pizza', 'Ramen', 'Burgers'].map((c, i) => (
                  <button key={c} className={`text-[6px] md:text-[7px] px-1.5 py-0.5 rounded-md font-(family-name:--font-caudex) ${i === 1 ? 'bg-[#f6bd60] text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {c}
                  </button>
                ))}
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Duration</div>
              <div className="flex gap-1 mb-1.5 flex-wrap">
                {['30m', '1hr', '2hr', '3hr'].map((t, i) => (
                  <button key={t} className={`text-[6px] md:text-[7px] px-1 py-0.5 rounded-md font-(family-name:--font-caudex) ${i === 2 ? 'bg-[#f6bd60] text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Radius</div>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                  <div className="absolute left-0 top-0 h-1 w-[60%] bg-[#f6bd60] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[60%] w-2 h-2 bg-[#f6bd60] rounded-full border border-white shadow-sm" />
                </div>
                <span className="text-[6px] md:text-[7px] text-gray-600 font-(family-name:--font-caudex)">1.2km</span>
              </div>
              <button className="w-full bg-[#f6bd60] text-white text-[8px] md:text-[9px] py-1.5 rounded-lg font-medium font-(family-name:--font-caudex)">
                Broadcast
              </button>
            </div>

            {/* Trivvi Exclusive Card - middle right (Discount, attribution-heavy) */}
            <div className="absolute top-36 right-0 md:top-44 md:right-1 w-[155px] md:w-[180px] bg-white rounded-xl shadow-lg p-3 rotate-[4deg]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#abc4ff]/20 text-[#abc4ff] text-[8px] md:text-[9px] font-semibold px-2 py-0.5 rounded font-(family-name:--font-caudex)">🟢 Trivvi Exclusive</span>
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Deal Title</div>
              <input
                type="text"
                placeholder="20% off Lunch Menu"
                className="w-full text-[8px] md:text-[9px] px-2 py-1 rounded-lg bg-gray-50 border border-gray-200 mb-1.5 font-(family-name:--font-caudex) placeholder:text-gray-400"
                readOnly
              />
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Discount Type</div>
              <div className="flex gap-1 mb-1.5 flex-wrap">
                {['% off', '$ off', 'Free item'].map((d, i) => (
                  <button key={d} className={`text-[6px] md:text-[7px] px-1.5 py-0.5 rounded-md font-(family-name:--font-caudex) ${i === 0 ? 'bg-[#abc4ff] text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {d}
                  </button>
                ))}
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Duration</div>
              <div className="flex gap-1 mb-1.5 flex-wrap">
                {['1hr', '2hr', '3hr'].map((t, i) => (
                  <button key={t} className={`text-[6px] md:text-[7px] px-1 py-0.5 rounded-md font-(family-name:--font-caudex) ${i === 1 ? 'bg-[#abc4ff] text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Radius (max 2km)</div>
              <div className="flex items-center gap-1 mb-2">
                <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                  <div className="absolute left-0 top-0 h-1 w-[40%] bg-[#abc4ff] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[40%] w-2 h-2 bg-[#abc4ff] rounded-full border border-white shadow-sm" />
                </div>
                <span className="text-[6px] md:text-[7px] text-gray-600 font-(family-name:--font-caudex)">0.8km</span>
              </div>
              <button className="w-full bg-[#abc4ff] text-white text-[8px] md:text-[9px] py-1.5 rounded-lg font-medium font-(family-name:--font-caudex)">
                Get Deal
              </button>
            </div>

            {/* House Special Card - bottom left (Promo, not exclusive) */}
            <div className="absolute bottom-14 left-2 md:bottom-16 md:left-4 w-[155px] md:w-[180px] bg-white rounded-xl shadow-lg p-3 rotate-[2deg]">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-[#4f772d]/20 text-[#4f772d] text-[8px] md:text-[9px] font-semibold px-2 py-0.5 rounded font-(family-name:--font-caudex)">🟣 House Special</span>
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Special Name</div>
              <input
                type="text"
                placeholder="Friday $15.99 Alfredo"
                className="w-full text-[8px] md:text-[9px] px-2 py-1 rounded-lg bg-gray-50 border border-gray-200 mb-1.5 font-(family-name:--font-caudex) placeholder:text-gray-400"
                readOnly
              />
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Duration</div>
              <div className="flex gap-1 mb-1.5 flex-wrap">
                {['Today', '2hr', 'Custom'].map((t, i) => (
                  <button key={t} className={`text-[6px] md:text-[7px] px-1 py-0.5 rounded-md font-(family-name:--font-caudex) ${i === 0 ? 'bg-[#4f772d] text-white' : 'bg-gray-100 text-gray-600'}`}>
                    {t}
                  </button>
                ))}
              </div>
              <div className="text-[7px] md:text-[8px] text-gray-500 mb-0.5 font-(family-name:--font-caudex)">Radius (max 2km)</div>
              <div className="flex items-center gap-1 mb-1.5">
                <div className="flex-1 h-1 bg-gray-200 rounded-full relative">
                  <div className="absolute left-0 top-0 h-1 w-[75%] bg-[#4f772d] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-2 h-2 bg-[#4f772d] rounded-full border border-white shadow-sm" />
                </div>
                <span className="text-[6px] md:text-[7px] text-gray-600 font-(family-name:--font-caudex)">1.5km</span>
              </div>
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-3 h-3 rounded border border-gray-300 bg-gray-50" />
                <span className="text-[6px] md:text-[7px] text-gray-600 font-(family-name:--font-caudex)">Make Trivvi Exclusive</span>
              </div>
              <button className="w-full bg-[#4f772d] text-white text-[8px] md:text-[9px] py-1.5 rounded-lg font-medium font-(family-name:--font-caudex)">
                See Special
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-20 bg-gradient-to-t from-white from-50% via-white/95 via-75% to-transparent pointer-events-none" />
        </div>
      ),
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Gradient Background */}
        <GradientBackground toColor="#abc4ff" />

        {/* Navbar */}
        <Navbar />

        {/* Hero */}
        <section className="px-6 pt-24 pb-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <FadeText
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text="Empty seats?"
              />
              <FadeText
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.8 } },
                }}
                text="Not anymore."
              />
            </div>

            <div className="py-10">
              <TextEffect
                per="line"
                as="p"
                preset="blur"
                delay={1.2}
                className="text-base md:text-xl lg:text-2xl text-black text-center w-full max-w-4xl md:whitespace-nowrap"
              >
                {`Post a deal during your slow hours. Trivvi notifies hungry locals nearby.`}
              </TextEffect>
              <TextEffect
                per="line"
                as="p"
                preset="blur"
                delay={1.6}
                className="text-base md:text-xl lg:text-2xl text-black text-center w-full max-w-4xl md:whitespace-nowrap mt-2"
              >
                {`They show up, you profit, your community grows.`}
              </TextEffect>
            </div>
          </div>
        </section>

        {/* Bento Grid Features */}
        <section className="px-6 py-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <section className="text-center py-10">
              <div style={{ fontWeight: 700 }}>
                <TextEffect
                  per="line"
                  as="h2"
                  preset="blur"
                  delay={2}
                  className="text-4xl md:text-4xl text-black font-(family-name:--font-caudex)"
                >
                  {`Trivvi is Designed for Restaurants`}
                </TextEffect>
              </div>
            </section>
            <BentoGrid className="lg:grid-rows-3" delay={2.5}>
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* How it works */}
        <section className="px-6 py-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-4xl font-bold mb-16 text-center font-(family-name:--font-caudex)"
            >
              How Trivvi works for restaurants
            </motion.h2>
            <div className="flex flex-col gap-16">
              {[
                {
                  step: "1",
                  title: "Set your slow hours",
                  description: "Choose the times when you need more customers. Lunch lull? Late afternoon? You decide.",
                },
                {
                  step: "2",
                  title: "Create a deal",
                  description: "Offer a discount, special, or promotion. Make it enticing enough to get people through the door.",
                },
                {
                  step: "3",
                  title: "Diners see your deals nearby",
                  description: "When diners open Trivvi in your general area, they'll see your posted deals — no background access needed.",
                },
                {
                  step: "4",
                  title: "Watch the seats fill up",
                  description: "Customers arrive, you serve great food, everyone wins. View your results anytime in the dashboard.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-20 h-20 bg-[#abc4ff] text-white rounded-full flex items-center justify-center font-bold text-3xl shrink-0 font-(family-name:--font-caudex)">
                    {item.step}
                  </div>
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-(family-name:--font-caudex)">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet Chirp Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-white relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="shrink-0 flex justify-start"
            >
              <LottieAnimation
                animationData={ParrotAnimation}
                className="w-64 h-64 md:w-80 md:h-80"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="flex-1 text-center px-4"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 font-(family-name:--font-caudex)">
                Meet Chirp
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-(family-name:--font-inter) max-w-lg mx-auto">
                Your messenger to hungry locals. When you send a deal, Chirp delivers it to nearby diners who are ready to eat.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="shrink-0 flex items-center justify-center"
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 max-w-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#abc4ff] rounded-full flex items-center justify-center">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-(family-name:--font-caudex)">New Chirp Alert!</p>
                    <p className="text-sm text-gray-500">Just now</p>
                  </div>
                </div>
                <p className="text-gray-700 font-(family-name:--font-caudex)">
                  🍕 <span className="font-semibold">Mario&apos;s Pizzeria</span> is offering 20% off large pizzas for the next 2 hours!
                </p>
                <p className="text-sm text-gray-500 mt-2">350m away • Ends at 4:00 PM</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section id="waitlist" className="px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative backdrop-blur-xl bg-[#ccdbfd]/20 border border-[#ccdbfd]/40 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ccdbfd]/10 to-transparent pointer-events-none" />

              <div className="relative z-10 text-center">
                {!submitted ? (
                  <>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-(family-name:--font-caudex)">
                      Get early access
                    </h2>
                    <p className="text-gray-600 mb-8 font-(family-name:--font-caudex)">
                      We&apos;re launching soon and partnering with local restaurants first.
                      Join the waitlist to be among our founding partners.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <input
                        type="text"
                        required
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        placeholder="Restaurant name"
                        className="w-full bg-white/80 border border-[#ccdbfd]/50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 h-12 px-4 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2"
                      />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        className="w-full bg-white/80 border border-[#ccdbfd]/50 text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-primary/20 h-12 px-4 rounded-xl backdrop-blur-sm focus:outline-none focus:ring-2"
                      />
                      <button
                        type="submit"
                        className="w-full h-12 px-6 bg-[#abc4ff] hover:bg-[#abc4ff]/90 text-black font-semibold rounded-xl transition-all duration-300 hover:shadow-lg font-(family-name:--font-caudex)"
                      >
                        Join as a partner
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-400/30 to-emerald-500/30 flex items-center justify-center border border-green-400/40">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 font-(family-name:--font-caudex)">
                      Welcome to the pack!
                    </h3>
                    <p className="text-gray-600 font-(family-name:--font-caudex)">
                      We&apos;ll reach out soon to get you set up.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <FaqSections
              label="FAQ's"
              title="Got questions?"
              subtitle="Everything you need to know about partnering with Trivvi."
              className="font-(family-name:--font-caudex)"
              faqs={[
                {
                  question: "How much does Trivvi cost?",
                  answer: "Trivvi has no upfront costs, subscriptions, or setup fees. You only pay a small commission when a deal brings customers through your door.",
                },
                {
                  question: "How do I create a deal?",
                  answer: "Simply log into your Trivvi dashboard, set your slow hours, create an enticing offer, and publish. It takes less than 2 minutes.",
                },
                {
                  question: "What kind of deals work best?",
                  answer: "Percentage discounts (15-25% off) and special combo offers tend to perform well. The key is making it compelling enough to get people off the couch.",
                },
                {
                  question: "How far do notifications reach?",
                  answer: "You can set a custom radius, but most restaurants see the best results targeting customers within 1-2km of their location.",
                },
                {
                  question: "Can I cancel or pause deals?",
                  answer: "Absolutely. You have full control. Pause, edit, or cancel any deal at any time from your dashboard.",
                },
                {
                  question: "How do I view performance?",
                  answer: "Your Trivvi dashboard shows analytics including views, redemptions, and revenue generated from each deal — updated whenever you check in.",
                },
                {
                  question: "When will Trivvi be available in my area?",
                  answer: "We're launching city by city. Join the waitlist and we'll prioritize areas with the most restaurant interest.",
                },
                {
                  question: "Do diners need the Trivvi app?",
                  answer: "Yes, diners download the free Trivvi app to receive notifications and redeem deals. We're growing our diner base alongside our restaurant partners.",
                },
              ]}
            />
          </motion.div>
        </section>

        {/* Footer */}
        <div className="relative z-10 bg-white font-(family-name:--font-caudex) text-black [&_a]:text-black [&_span]:text-black [&_div]:text-black">
          <Footer
            logo={
              <Image
                src="/imageAssets/trivviLogo.svg"
                alt="Trivvi Logo"
                width={40}
                height={40}
              />
            }
            brandName="Trivvi"
            socialLinks={[
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "https://x.com/trivvi",
                label: "X",
              },
              {
                icon: (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                ),
                href: "https://www.instagram.com/trivvi.io/",
                label: "Instagram",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                href: "mailto:contact@trivvi.io",
                label: "Email",
              },
            ]}
            mainLinks={[
              { href: "/for-diners", label: "For Diners" },
              { href: "/for-restaurants", label: "For Restaurants" },
              { href: "/about", label: "About" },
              { href: "mailto:contact@trivvi.io", label: "Contact" },
            ]}
            legalLinks={[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
            ]}
            copyright={{
              text: "© 2026 Trivvi",
              license: "All rights reserved",
            }}
          />
        </div>
      </main>
    </SmoothScroll>
  );
}
