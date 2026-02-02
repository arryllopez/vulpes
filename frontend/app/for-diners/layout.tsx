import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Diners | Trivvi - Discover Great Food Deals Near You",
  description: "Find exclusive restaurant deals and discounts in your area. Trivvi notifies you about limited-time offers from local restaurants serving foods you love.",
  keywords: ["food deals", "restaurant discounts", "local dining", "food discovery app", "restaurant deals near me"],
  openGraph: {
    title: "For Diners | Trivvi - Discover Great Food Deals Near You",
    description: "Find exclusive restaurant deals and discounts in your area. Trivvi notifies you about limited-time offers from local restaurants serving foods you love.",
    type: "website",
  },
};

export default function ForDinersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
