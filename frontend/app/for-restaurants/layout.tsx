import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Restaurants | Trivvi - Fill Empty Tables & Boost Revenue",
  description: "Attract nearby diners during slow hours with targeted promotions. Trivvi helps restaurants fill empty seats, reduce food waste, and increase visibility without long-term discounts.",
  keywords: ["restaurant marketing", "fill empty tables", "restaurant promotions", "local restaurant advertising", "increase restaurant revenue"],
  openGraph: {
    title: "For Restaurants | Trivvi - Fill Empty Tables & Boost Revenue",
    description: "Attract nearby diners during slow hours with targeted promotions. Trivvi helps restaurants fill empty seats, reduce food waste, and increase visibility.",
    type: "website",
  },
};

export default function ForRestaurantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
