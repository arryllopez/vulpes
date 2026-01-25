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
              textClassName="text-8xl md:text-10xl font-bold tracking-tight font-(family-name:--font-caudex) text-black"
              underlineClassName="text-[#000000]"
              underlineDuration={1.5}
            />
            <TextEffect
              per="line"
              as="p"
              preset="blur"
              delay={2}
              className="text-xl md:text-2xl text-black whitespace-nowrap"
            >
              {`Trivvi uses real-time alerts to help restaurants fill empty tables.
            Diners find great deals nearby.`}
            </TextEffect>

          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-10">
            <BlurFade delay={3} duration={0.5}>
              <Link href="/for-diners">
                <GlassButton size="lg">
                  I&apos;m hungry for deals
                </GlassButton>
              </Link>
            </BlurFade>
            <BlurFade delay={3.2} duration={0.5}>
              <Link href="/for-restaurants">
                <GlassButton size="lg">
                  I run a restaurant
                </GlassButton>
              </Link>
            </BlurFade>
          </div>


        </section>


      </main>
    </SmoothScroll>
  );
}
