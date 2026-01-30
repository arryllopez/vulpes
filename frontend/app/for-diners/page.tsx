"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import LottieAnimation from "@/components/LottieAnimation";
import ParrotAnimation from "@/public/animationsLottie/Parrot.json";
import { FadeText } from "@/components/ui/fade-text";
import { TextEffect } from "@/components/ui/text-effect";
import IphoneStep1 from "@/components/ui/IphoneStep1";
import IphoneStep2 from "@/components/ui/IphoneStep2";
import IphoneStep3Map from "@/components/ui/IphoneStep3Map";
import IPhoneDealRedeem from "@/components/ui/IphoneDealRedeem";
import IPhoneMapNav from "@/components/ui/IphoneMapNav";
import BullseyeTestimonial from "@/components/ui/bullseyeTestimonial";
import LawrencesTestimonial from "@/components/ui/lawrencesTestimonial";
import FoodChecklist from "@/components/ui/FoodChecklist";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import WaitlistCard from "@/components/ui/WaitlistCard";
import { FaqSections } from "@/components/ui/faq-sections";
import { Footer } from "@/components/ui/footer";
import { Navbar } from "@/components/ui/navbar";
import { Mail } from "lucide-react";

export default function ForDiners() {
  const features = [
    {
      name: "Get notified, not spammed",
      description: "Open the Trivvi app to receive alerts for real-time deals nearby.",
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 min-h-[280px] md:min-h-[320px]",
      background: (
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #abc4ff 0%, #ccdbfd 30%, #ffffff 70%)"
          }}
        >
          <div className="absolute -top-80 md:-top-72 left-1/2 -translate-x-1/2 scale-[0.7] md:scale-[0.9] origin-top">
            <IphoneStep3Map />
          </div>
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
          <div
            className="p-2 md:p-3 scale-[0.9] md:scale-[0.85] origin-top"
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
                  <span>Trivvi Exclusive Discount (15%)</span>
                  <span>-$2.55</span>
                </div>
              </div>
              <div className="border-t border-gray-100 mt-1 md:mt-1.5 pt-1 md:pt-1.5 flex justify-between font-bold text-gray-800">
                <span>Total</span>
                <span>$14.44</span>
              </div>
            </div>
          </div>
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
            <div className="scale-[0.45] md:scale-[0.55] origin-center -rotate-6 -mr-16">
              <IPhoneDealRedeem />
            </div>
            <div className="scale-[0.45] md:scale-[0.55] origin-center rotate-6 -mt-16">
              <IPhoneMapNav />
            </div>
          </div>
          {/* Sharp white gradient for mobile text visibility */}
          <div className="absolute bottom-0 left-0 right-0 h-32 md:h-20 bg-linear-to-t from-white from-40% via-white/95 via-60% to-transparent pointer-events-none" />
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
            <div className="scale-[0.50] md:scale-[0.55] origin-center rotate-6 -mr-12">
              <BullseyeTestimonial />
            </div>
            <div className="scale-[0.55] md:scale-[0.55] origin-center mt-4 md:-mt-8">
              <LawrencesTestimonial />
            </div>
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
            <div className="w-full origin-center">
              <FoodChecklist />
            </div>
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
              <div className="text-base md:text-xl lg:text-2xl text-black text-center w-full max-w-4xl mx-auto">
                <TextEffect
                  per="word"
                  as="span"
                  preset="blur"
                  delay={1.6}
                >
                  {`Trivvi helps diners discover great food at better prices`}
                </TextEffect>
                <br className="hidden md:block" />
                <TextEffect
                  per="word"
                  as="span"
                  preset="blur"
                  delay={1.6}
                >
                  {` from great restaurants nearby.`}
                </TextEffect>
              </div>

            </div>

          </div>
        </section>

        {/* Benefits */}
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
                  <div className="w-12 h-12 bg-[#abc4ff] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 font-(family-name:--font-caudex)">
                    1
                  </div>
                  <p className="text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Create your Trivvi account
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Download the Trivvi app and create your account in seconds. It&apos;s fast, secure, and sets you up to start discovering your favourite food deals right away.
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
                  <div className="w-12 h-12 bg-[#abc4ff] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 font-(family-name:--font-caudex)">
                    2
                  </div>
                  <p className="text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Pick your favourites
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Choose the foods you love and how far you want to go.
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    Trivvi only shows you the foods you like
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
                  <IphoneStep3Map />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="flex-1 flex flex-col justify-center items-center text-center"
                >
                  <div className="w-12 h-12 bg-[#abc4ff] text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 font-(family-name:--font-caudex)">
                    3
                  </div>
                  <p className="text-3xl font-semibold text-black mb-2 font-(family-name:--font-caudex)">
                    Stay in the loop
                  </p>
                  <p className="text-xl text-gray-500 font-(family-name:--font-caudex)">
                    When you open the app, Chirp will notify you when restaurants nearby send out exclusive offers for the foods you love.
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
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 font-(family-name:--font-caudex)">
                Meet Chirp
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 font-(family-name:--font-inter) max-w-lg mx-auto">
                Your friendly guide to the best local deals. Chirp helps you discover amazing food at amazing prices, right in your area.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="shrink-0 flex items-center justify-center"
            >
              <IphoneStep3Map />
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
              <h3 className="text-3xl md:text-4xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Your deals, on the map
              </h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 font-(family-name:--font-caudex) leading-relaxed max-w-4xl mx-auto px-4">
                Our interactive map shows restaurants in your general vicinity when you open the app.
                <br className="hidden md:block" /> Click on a restaurant to see their details and get directions.
                <br className="hidden md:block" />Set your location manually or opt in to check your area on launch.
                <br className="hidden md:block" />
                Refresh anytime to see what&apos;s nearby —
                no background access needed.
              </p>
            </motion.div>

            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
              {/* Map Image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="w-full max-w-137.5"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3">
                  <Image
                    src="/imageAssets/mapMockup.png"
                    alt="Interactive map showing nearby deals"
                    width={550}
                    height={366}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Waitlist signup */}
        <section id="waitlist" className="px-6 py-16 relative z-10">
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
                  answer: "Trivvi is a food discovery app that shows you great deals in your general area when you open it — from limited-time offers to hidden local spots worth checking out.",
                },
                {
                  question: "Is Trivvi free for diners?",
                  answer: "Yes. Trivvi is completely free for diners. Just download the app, create an account, and start receiving alerts about great food nearby.",
                },
                {
                  question: "How are notifications decided?",
                  answer: "You choose the foods you like and your preferred distance. When you open Trivvi, it checks your approximate area once and shows relevant deals — no background access, no spam.",
                },
                {
                  question: "Do all alerts include discounts?",
                  answer: "Not always. Some Chirps highlight limited-time deals, while others spotlight great local spots when they're quieter than usual.",
                },
                {
                  question: "How is this different from Yelp / Google Maps?",
                  answer: "Yelp and Maps help you research. Trivvi helps you decide in the moment — open the app and see nearby deals relevant to your taste instantly, no endless scrolling.",
                },
                {
                  question: "When will Trivvi launch in my city?",
                  answer: "We're launching city by city. The more demand we see in an area, the sooner Trivvi arrives there.",
                },
                {
                  question: "Is Trivvi safe with my location and personal info?",
                  answer: "Yes! Trivvi only checks your general area when the app is open — never in the background. We use approximate location to show nearby deals you've opted in for. We never share your personal information with restaurants or third parties without your permission. You can update your preferences anytime. Learn more in our Privacy Policy.",
                },
                {
                  question: "Do I have to share my location?",
                  answer: "Nope! You can manually set your location anytime. If you opt in, Trivvi checks your general area only when you open the app — never in the background. Deals shown match your food preferences.",
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
