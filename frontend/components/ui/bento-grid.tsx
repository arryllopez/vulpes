import { ReactNode } from "react";
import { motion } from "framer-motion";
import LottieAnimation from "@/components/LottieAnimation";

import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "grid w-full auto-rows-[rem] grid-cols-3 gap-4",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  video,
  lottieAnimation,
  animationClassName,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  description: string;
  video?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lottieAnimation?: any;
  animationClassName?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl min-h-[14.5rem]",
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu",
      className,
    )}
  >
    {background}
    {video && (
      <div className="absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center overflow-hidden">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full object-contain"
        />
      </div>
    )}
    {lottieAnimation && (
      <div className={cn(
        "absolute top-0 left-0 right-0 h-1/2 flex items-center justify-center overflow-hidden",
        animationClassName
      )}>
        <LottieAnimation
          animationData={lottieAnimation}
          className="h-full w-full"
        />
      </div>
    )}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 p-8">
      <h3 className="text-2xl font-semibold text-neutral-700 font-(family-name:--font-caudex)">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-500">{description}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
  </div>
);

export { BentoCard, BentoGrid };
