import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Configure fonts
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ritam Global | Premium Incense & Cookware",
  description: "Manufacturer & Supplier of high-quality Agarbatti, Dhoop sticks & cones, and traditional Enamel Frying Bowls in Vadodara, Gujarat.",
  keywords: "Agarbatti, Dhoop, Incense Sticks, Enamel Cookware, Vagariya, Vadka, Bulk Incense, Wholesale Agarbatti, Ritam Global",
  openGraph: {
    title: "Ritam Global | Premium Incense & Cookware",
    description: "Pure aromas and spiritual elegance for everyday rituals.",
    type: "website",
  }
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmokeCursor from "@/components/ui/SmokeCursor";
import FloatingMotif from "@/components/ui/FloatingMotif";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${cormorantGaramond.variable}`}>
      <body>
        <FloatingMotif />
        <SmokeCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
