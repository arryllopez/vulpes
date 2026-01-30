"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";
import { FadeText } from "@/components/ui/fade-text";
import { TextEffect } from "@/components/ui/text-effect";
import IphoneStep1 from "@/components/ui/IphoneStep1";
import IphoneStep2 from "@/components/ui/IphoneStep2";
import IphoneStep3 from "@/components/ui/IphoneStep3";
import IPhoneDealRedeem from "@/components/ui/IphoneDealRedeem";
import IPhoneMapNav from "@/components/ui/IphoneMapNav";
import BullseyeTestimonial from "@/components/ui/bullseyeTestimonial";
import LawrencesTestimonial from "@/components/ui/lawrencesTestimonial";
import FoodChecklist from "@/components/ui/FoodChecklist";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import WaitlistCard from "@/components/ui/WaitlistCard";
import { FaqSections } from "@/components/ui/faq-sections";

export default function ForDiners() {
  const features = [
    {
      name: "Get notified, not spammed",
      description: "Trivvi only notifies you of the food you love.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 min-h-[280px] md:min-h-[320px]",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 30%, #ffffff 70%)"
          }}
        >
          <motion.div
            className="absolute -top-80 md:-top-72 left-1/2 -translate-x-1/2 scale-[0.7] md:scale-[0.9] origin-top"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
          >
            <IphoneStep3 />
          </motion.div>
        </div>
      ),
    },
    {
      name: "Genuine savings",
      description: "Exclusive discounts. Same great food, smaller bill.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 min-h-[200px]",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 30%, #ffffff 70%)"
          }}
        >
          <motion.div
            className="p-2 md:p-3 scale-[0.9] md:scale-[0.85] origin-top"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 90%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 90%)"
            }}
          >
            {/* Order Summary Mockup */}
            <div className="bg-white rounded-xl shadow-lg p-2 md:p-3 text-[10px] md:text-xs">
              <div className="text-[8px] md:text-[10px] text-gray-500 mb-1">Order Summary</div>
              <div className="border-b border-gray-100 pb-1 md:pb-1.5 mb-1 md:mb-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">Beef Ramen</span>
                  <span className="text-gray-600">$16.99</span>
                </div>
              </div>
              <div className="space-y-0.5">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>$16.99</span>
                </div>
                <div className="flex justify-between text-green-600 font-medium">
                  <span>Trivvi Discount (15%)</span>
                  <span>-$2.55</span>
                </div>
              </div>
              <div className="border-t border-gray-100 mt-1 md:mt-1.5 pt-1 md:pt-1.5 flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>$14.44</span>
              </div>
            </div>
          </motion.div>
        </div>
      ),
    },
    {
      name: "On-demand navigation",
      description: "Trivvi provides an in-app map to guide you to your next meal.",
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 50%, #ffffff 85%)"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 -mt-12 md:mt-0">
            <motion.div
              className="scale-[0.45] md:scale-[0.55] origin-center -rotate-6 -mr-16"
              initial={{ x: -30, opacity: 0, rotate: -15 }}
              whileInView={{ x: 0, opacity: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
            >
              <IPhoneDealRedeem />
            </motion.div>
            <motion.div
              className="scale-[0.45] md:scale-[0.55] origin-center rotate-6 -mt-16"
              initial={{ x: 30, opacity: 0, rotate: 15 }}
              whileInView={{ x: 0, opacity: 1, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 3.0 }}
            >
              <IPhoneMapNav />
            </motion.div>
          </div>
          {/* Sharp white gradient for mobile text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-20 bg-gradient-to-t from-white from-40% via-white/95 via-60% to-transparent pointer-events-none" />
        </div>
      ),
    },
    {
      name: "Discover great food",
      description: "Hidden gems and local favorites you never knew existed.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 20%, #ffffff 60%)"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-4 -mt-16 md:-mt-12">
            <motion.div
              className="scale-[0.50] md:scale-[0.55] origin-center rotate-6 -mr-12"
              initial={{ x: -30, opacity: 0, rotate: 15 }}
              whileInView={{ x: 0, opacity: 1, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
            >
              <BullseyeTestimonial />
            </motion.div>
            <motion.div
              className="scale-[0.55] md:scale-[0.55] origin-center mt-4 md:-mt-8"
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 3.0 }}
            >
              <LawrencesTestimonial />
            </motion.div>
          </div>
          {/* Sharp white gradient for text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-32 bg-gradient-to-t from-white from-40% via-white/95 via-81% to-transparent pointer-events-none" />
        </div>
      ),
    },
    {
      name: "Pick the foods you love",
      description: "Trivvi tailors alerts based on your favorite cuisines and dishes.",
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 40%, #ffffff 80%)"
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center -mt-24 md:-mt-35">
            <motion.div
              className="w-full origin-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.8 }}
            >
              <FoodChecklist />
            </motion.div>
          </div>
          {/* Sharp white gradient for text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-40 md:h-50 bg-gradient-to-t from-white from-50% via-white/95 via-75% to-transparent pointer-events-none" />
        </div>
      ),
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Gradient Background */}
        <GradientBackground toColor="#abc4ff" />

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
        <header className="p-6 relative z-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </header>



        {/* Hero */}
        <section className="px-6 py-12 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <FadeText
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="right"
                framerProps={{
                  show: { transition: { delay: 0.4 } },
                }}
                text="Great Food."
              />
              <FadeText
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-(family-name:--font-caudex)"
                direction="left"
                framerProps={{
                  show: { transition: { delay: 0.8 } },
                }}
                text="Better prices."
              />
              <FadeText
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-(family-name:--font-caudex)"
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
                className="text-base md:text-xl lg:text-2xl text-black text-center w-full max-w-4xl md:whitespace-nowrap"
              >
                {`Trivvi uses real-time alerts to help diners find great deals and new food nearby.`}
              </TextEffect>

            </div>

          </div>
        </section>

        {/* Benefits */}
        <section className="px-6 py-8 relative z-10">r
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
                  {`Trivvi is Designed for Diners`}
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
              Trivvi in 3 easy steps
            </motion.h2>
            <div className="flex flex-col gap-24">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <IphoneStep1 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 font-(family-name:--font-caudex)">
                    1
                  </div>
                  <p className="text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Create your Trivvi account
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Create your account in seconds. It&apos;s fast, secure, and sets you up to start discovering your favorite food deals right away.
                  </p>
                </motion.div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <IphoneStep2 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 font-(family-name:--font-caudex)">
                    2
                  </div>
                  <p className="text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Pick your favourites
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Choose the foods you love and how far you want to go.
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Trivvi only notifies you about the foods you love
                    <br />
                    within the distance you choose.
                  </p>
                </motion.div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="shrink-0"
                >
                  <IphoneStep3 />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center"
                >
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 font-(family-name:--font-caudex)">
                    3
                  </div>
                  <p className="text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Stay in the loop
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Personalized real-time alerts, right when they matter.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

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
              <h2 className="text-4xl md:text-6xl font-bold text-[#03045E] mb-6 font-(family-name:--font-caudex)">
                Meet Chirp
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-(family-name:--font-inter) max-w-lg mx-auto">
                Your friendly guide to the best local deals. Chirp helps you discover amazing food at amazing prices, right in your neighborhood.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="shrink-0 flex items-center justify-center"
            >
              <IphoneStep3 />
            </motion.div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="px-6 py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Title - Centered Above */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-[#03045E] mb-4 font-(family-name:--font-caudex)">
                Your deals, on the map
              </h3>
              <p className="text-lg md:text-xl text-gray-600 font-(family-name:--font-caudex) leading-relaxed max-w-4xl mx-auto whitespace-nowrap">
                Our real-time interactive map shows all your favourite foods nearby.
                <br />Set your location or let Trivvi follow you.
                <br />
                Deals update as you move,
                so you never miss a bite.
              </p>
            </motion.div>

            {/* Map and Card - Side by Side, Same Size */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
              {/* Map Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="w-full max-w-[550px]"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src="/imageAssets/mapMockup.png"
                    alt="Interactive map showing nearby deals"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Deal Mockup Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="w-full max-w-[550px]"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden aspect-[4/3] flex flex-col">
                  {/* Restaurant Image */}
                  <div className="flex-1 relative overflow-hidden">
                    <img
                      src="/imageAssets/pizzaYum.jpg"
                      alt="Pepperoni Pizza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Deal Info */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full">
                        20% OFF
                      </span>
                      <span className="bg-red-100 text-black text-xs font-semibold px-2 py-1 rounded-full">
                        Reg. Price : C$14.99
                      </span>
                      <span className="text-gray-400 text-xs">• 350m away</span>
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1 font-(family-name:--font-caudex)">
                      Mario&apos;s Pizzeria
                    </h4>
                    <p className="text-gray-600 text-sm mb-3 font-(family-name:--font-caudex)">
                      20% off Large Handcrafted Pepperoni Pizza.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">4.8</span>
                        <span className="text-gray-400 text-xs">(120)</span>
                      </div>
                      <span className="text-xs text-gray-400">Ends in 2h</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section className="px-6 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <WaitlistCard />
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
              subtitle="Everything you need to know about Trivvi and how it works for diners."
              className="font-(family-name:--font-caudex)"
              faqs={[
                {
                  question: "What is Trivvi?",
                  answer: "Trivvi is a real-time food discovery app that alerts you when something good is happening nearby — from limited-time deals to hidden local spots worth checking out.",
                },
                {
                  question: "Is Trivvi free for diners?",
                  answer: "Yes. Trivvi is completely free for diners. Just download the app, create an account, and start receiving alerts about great food nearby.",
                },
                {
                  question: "How are notifications decided?",
                  answer: "You choose the foods you like and how far you're willing to go. Trivvi only notifies you when something relevant happens within your preferences — no spam.",
                },
                {
                  question: "Do all alerts include discounts?",
                  answer: "Not always. Some Chirps highlight limited-time deals, while others spotlight great local spots when they're quieter than usual.",
                },
                {
                  question: "How is this different from Yelp / Google Maps?",
                  answer: "Yelp and Maps help you research. Trivvi helps you decide in the moment — with real-time alerts, not endless scrolling.",
                },
                {
                  question: "When will Trivvi launch in my city?",
                  answer: "We're launching city by city. The more demand we see in an area, the sooner Trivvi arrives there.",
                },
                {
                  question: "Do I need to enable notifications?",
                  answer: "Notifications are optional. You're always in control of what you receive and when.",
                },
                {
                  question: "How do restaurants benefit from Trivvi?",
                  answer: "Trivvi helps restaurants fill empty tables, increase visibility, and attract nearby diners — without long-term discounts or third-party delivery fees.",
                },
                {
                  question: "How do I join the waitlist?",
                  answer: "Enter your email, drop a pin on the map, and you're in. We'll notify you when Trivvi launches near you.",
                },
              ]}
            />
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8 text-center text-gray-400 text-sm relative z-10">
          <p></p>
        </footer>
      </main>
    </SmoothScroll>
  );
}
