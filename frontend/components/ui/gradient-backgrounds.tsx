
interface GradientBackgroundProps {
  className?: string;
  fromColor?: string;
  toColor?: string;
}

export function GradientBackground({
  fromColor = "#fff",
  toColor = "#b6ccfe",
}: GradientBackgroundProps) {
  return (
    <div
      className="absolute inset-0 z-0"
      style={{
        background: `radial-gradient(125% 125% at 50% 90%, ${fromColor} 50%, ${toColor} 100%)`,
      }}
    />
  );
}
