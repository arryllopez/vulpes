import type { Metadata } from "next";
import { Inter, Caudex } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const caudex = Caudex({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caudex",
});

export const metadata: Metadata = {
  title: "Trivvi - Connecting Diners & Restaurants",
  description: "Trivvi connects hungry diners with local restaurants offering exclusive deals.",
  icons: {
    icon: "/imageAssets/trivviLogo.svg",
    apple: "/imageAssets/trivviLogo.svg",
  },
  openGraph: {
    title: "Trivvi - Connecting Diners & Restaurants",
    description: "Trivvi connects hungry diners with local restaurants offering exclusive deals.",
    images: ["/imageAssets/trivviLogo.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Trivvi",
  applicationCategory: "FoodService",
  description: "Trivvi connects hungry diners with local restaurants offering exclusive deals and limited-time offers.",
  operatingSystem: "iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${caudex.variable} antialiased bg-white`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
