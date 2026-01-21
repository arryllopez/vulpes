"use client";

import { cn } from "@/lib/utils";
import { Layers, Search, Zap } from "lucide-react";
import type React from "react";


interface HowItWorksProps extends React.HTMLAttributes<HTMLElement> {}

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => (
  <div
    className={cn(
      "relative rounded-2xl border bg-card p-6 text-card-foreground transition-all duration-300 ease-in-out",
      "hover:scale-105 hover:shadow-lg hover:border-primary/50 hover:bg-muted"
    )}
  >
   
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-primary">
      {icon}
    </div>
    
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="mb-6 text-muted-foreground">{description}</p>
    
    <ul className="space-y-3">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center gap-3">
          <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-primary/20">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
          </div>
          <span className="text-muted-foreground">{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);


export default function HowItWorks({
  className,
  ...props
}: HowItWorksProps) {
  const stepsData = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Discover curated resources",
      description:
        "Browse learning resources curated by developers worldwide, organized by topic and learning style.",
      benefits: [
        "Filter by learning style and difficulty",
        "Community ratings and reviews",
        "Regularly updated and verified content",
      ],
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Find what works for you",
      description:
        "Compare resources, read developer experiences, and choose the learning path that matches your style.",
      benefits: [
        "Sort by relevance and quality",
        "Filter by format and complexity",
        "Detailed information about each resource",
      ],
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Learn and scale faster",
      description:
        "Access resources directly and start learning immediately. Build your skills with content that actually helps.",
      benefits: [
        "Direct links to resources",
        "Save favorites for later",
        "Track your learning progress",
      ],
    },
  ];

  return (
    <section
      id="how-it-works"
      className={cn("w-full bg-background py-16 sm:py-24", className)}
      {...props}
    >
      <div className="container mx-auto px-4">
        
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-5xl font-medium tracking-tight text-foreground sm:text-5xl" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            How it works
          </h2>
          <p className="mt-4 text-lg font-bold text-primary text-muted-foreground" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
            Discover curated learning resources organized by developers worldwide, 
            so you can find what works for you and learn faster
          </p>
        </div>

    
        <div className="relative mx-auto mb-8 w-full max-w-4xl">
          <div
            aria-hidden="true"
            className="absolute left-[16.6667%] top-1/2 h-0.5 w-[66.6667%] -translate-y-1/2 bg-border"
          ></div>

          <div className="relative grid grid-cols-3">
            {stepsData.map((_, index) => (
              <div
                key={index}
              
                className="flex h-8 w-8 items-center justify-center justify-self-center rounded-full bg-muted font-semibold text-foreground ring-4 ring-background"
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>


        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
          {stepsData.map((step, index) => (
            <StepCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              benefits={step.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
