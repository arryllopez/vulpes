import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Diners | Trivvi - Discover Great Food Near You",
  description: "Discover great food and exclusive offers from local restaurants in your area. Trivvi notifies you about limited-time offers from nearby spots serving foods you love.",
  keywords: ["food discovery", "restaurant offers", "local dining", "food discovery app", "restaurants near me"],
  openGraph: {
    title: "For Diners | Trivvi - Discover Great Food Near You",
    description: "Discover great food and exclusive offers from local restaurants in your area. Trivvi notifies you about limited-time offers from nearby spots serving foods you love.",
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
