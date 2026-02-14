"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import SmoothScroll from "@/components/SmoothScroll";
import LottieAnimation from "@/components/LottieAnimation";
import BirdFlockAnimation from "@/public/animationsLottie/Transparent Birds.json";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";
import { TextEffect } from "@/components/ui/text-effect";
import { GlassButton } from "@/components/ui/glass-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { GradientBackground } from "@/components/ui/gradient-backgrounds";
import { AppStoreButton, GooglePlayButton } from "@/components/base/buttons/app-store-buttons";

const AnimatedClouds = dynamic(
  () => import("@/components/ui/animated-clouds").then((mod) => mod.AnimatedClouds),
  { ssr: false }
);

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 relative">

          <GradientBackground />
          <AnimatedClouds cloudCount={35} />

          <div className="h-[20vh] w-full absolute top-10 left-0 z-0 pointer-events-none">
            <LottieAnimation
              animationData={BirdFlockAnimation}
              className="w-full opacity-50"
            />
          </div>

          <div className="relative z-10 flex flex-col gap-8 items-center text-center max-w-2xl">
            <AnimatedText
              text="Trivvi"
              textClassName="text-6xl md:text-8xl lg:text-10xl font-bold tracking-tight font-(family-name:--font-caudex) text-black"
              underlineClassName="text-[#000000]"
              underlineDuration={1.5}
            />
            <TextEffect
              per="line"
              as="p"
              preset="blur"
              delay={1.5}
              className="text-base md:text-xl lg:text-2xl text-black px-4"
            >
              {`Right Place. Right Time`}
            </TextEffect>

          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-10">
            <BlurFade delay={1.8} duration={0.5}>
              <Link href="/for-diners">
                <GlassButton size="lg" contentClassName="text-black">
                  For Diners
                </GlassButton>
              </Link>
            </BlurFade>
            <BlurFade delay={2.0} duration={0.5}>
              <Link href="/for-restaurants">
                <GlassButton size="lg" contentClassName="text-black">
                  For Restaurants
                </GlassButton>
              </Link>
            </BlurFade>
          </div>

          <div className="relative z-10 flex flex-col items-center mt-6">
            <BlurFade delay={2.2} duration={0.5}>
              <p className="text-2xl text-black/70 mb-2 font-(family-name:--font-caudex)">Coming Soon</p>
            </BlurFade>
            <div className="flex flex-col items-center gap-3 md:flex-row">
              <BlurFade delay={2.3} duration={0.5}>
                <GooglePlayButton size="md" />
              </BlurFade>
              <BlurFade delay={2.5} duration={0.5}>
                <AppStoreButton size="md" />
              </BlurFade>
            </div>
          </div>


        </section>


      </main>
    </SmoothScroll>
  );
}
