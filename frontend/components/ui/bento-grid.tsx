import { ReactNode } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      transition={{ delay }}
      className={cn(
        "grid w-full auto-rows-[rem] grid-cols-3 gap-4 transform-gpu",
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
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  description: string;
  video?: string;
}) => (
  <motion.div
    variants={cardVariants}
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
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 md:gap-2 p-4 md:p-8 text-center items-center">
      <h3 className="text-lg md:text-2xl font-semibold text-neutral-700 font-(family-name:--font-caudex)">
        {name}
      </h3>
      <p className="max-w-lg text-sm md:text-base text-neutral-500">{description}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu group-hover:bg-black/3" />
  </motion.div>
);

export { BentoCard, BentoGrid };
