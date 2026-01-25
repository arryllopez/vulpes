"use client";

import Image from "next/image";

interface Cloud {
  id: number;
  size: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}

function generateClouds(count: number): Cloud[] {
  const clouds: Cloud[] = [];
  for (let i = 0; i < count; i++) {
    clouds.push({
      id: i,
      size: Math.random() * 300 + 200,
      left: Math.random() * 120 - 10,
      top: Math.random() * 15 - 5,
      delay: Math.random() * -30,
      duration: Math.random() * 40 + 50,
    });
  }
  return clouds;
}

function AnimatedCloudsInner({ cloudCount = 20 }: { cloudCount?: number }) {
  const clouds = generateClouds(cloudCount);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="cloud absolute opacity-60"
          style={{
            width: cloud.size,
            left: `${cloud.left}%`,
            top: `${cloud.top}%`,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        >
          <Image
            src="/background/cloud.png"
            alt=""
            width={cloud.size}
            height={cloud.size * 0.6}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
}

export { AnimatedCloudsInner as AnimatedClouds };
