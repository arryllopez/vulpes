"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { FadeText } from "@/components/ui/fade-text";
import { Mail, Users, Utensils, Bell, MapPin, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-[#abc4ff]" />,
      title: "Community First",
      description: "We believe great food brings people together. Trivvi connects hungry diners with passionate restaurateurs.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-[#abc4ff]" />,
      title: "Supporting Restaurants",
      description: "Every alert sent through Trivvi helps restaurants fill seats. We're dedicated to reviving dine-in culture and culinary diversity.",
    },
    {
      icon: <Bell className="w-8 h-8 text-[#abc4ff]" />,
      title: "No Spam, Ever",
      description: "We respect your time. You only hear from us when there's something genuinely worth your attention.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#abc4ff]" />,
      title: "Hyper-Local",
      description: "Deals that matter, where you are. Trivvi understands that the best meal is often the one closest to you.",
    },
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white relative overflow-hidden">
        {/* Gradient Background */}
        <GradientBackground toColor="#abc4ff" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="px-6 pt-32 pb-16 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <FadeText
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-(family-name:--font-caudex) mb-6"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.2 } },
              }}
              text="About Trivvi"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 font-(family-name:--font-caudex) leading-relaxed"
            >
              We&apos;re on a mission to make great food more accessible.
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-(family-name:--font-caudex)">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600 font-(family-name:--font-caudex) leading-relaxed">
                <p>
                  Trivvi was born from a <span className = "font-bold"> simple frustration. </span>
                  <br/> 
                  Too many great restaurants <span className = "font-bold">struggle for visibility </span>, while hungry people nearby scroll <span className = "font-bold">endlessly through apps, unsure where to eat.</span>
                </p>
                <p>
                  We saw a disconnect. Restaurants needed a way to reach nearby diners at the right moment. Diners wanted relevant suggestions, not endless noise. So we built Trivvi. <span className = "font-bold">The bridge that connects the two.</span>
                </p>
                <p>
                  Today, Trivvi helps restaurants send timely alerts and offers to people who actually want them, based on what they love to eat and how far they&apos;re willing to go. <span className = "font-bold">No spam. No clutter. Just great food, when you want it.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#abc4ff]/20 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6 font-(family-name:--font-caudex)">
                <Heart className="w-4 h-4" />
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-(family-name:--font-caudex)">
                Making every meal an opportunity
              </h2>
              <p className="text-xl text-gray-600 font-(family-name:--font-caudex) leading-relaxed max-w-2xl mx-auto">
                We&apos;re building a world where no restaurant table sits empty undeservingly, and no hungry person misses out on great food nearby.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-black mb-12 text-center font-(family-name:--font-caudex)"
            >
              What We Believe
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
                >
                  <div className="w-14 h-14 bg-[#abc4ff]/20 rounded-xl flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-(family-name:--font-caudex)">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-(family-name:--font-caudex)">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-[#d7e3fc] rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-(family-name:--font-caudex)">
                Built with passion
              </h2>
              <p className="text-lg text-black font-(family-name:--font-caudex) mb-6 max-w-2xl mx-auto">
                Trivvi is crafted by a small team of food lovers, technologists, and dreamers who believe that the best meals are the ones shared with others.
              </p>
              <a
                href="mailto:contact@trivvi.io"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition-colors font-(family-name:--font-caudex)"
              >
                <Mail className="w-5 h-5" />
                Say Hello
              </a>
            </motion.div>
          </div>
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
                href: "https://x.com/trivviapp?s=21",
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
              text: "\u00A9 2026 Trivvi",
              license: "All rights reserved",
            }}
          />
        </div>
      </main>
    </SmoothScroll>
  );
}
