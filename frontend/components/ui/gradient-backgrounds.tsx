import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
  fromColor?: string;
  toColor?: string;
}

export function GradientBackground({
}: GradientBackgroundProps) {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
      background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #b6ccfe 100%)",
      }}
    />
  );
}
