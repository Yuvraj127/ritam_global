import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritam Global | Incense Sticks (Agarbatti), Dhoop & Frying Bowls Manufacturer",
  description: "Manufacturer, Wholesaler & Supplier of 25+ Agarbatti Fragrances, Colored Incense, Premium Masala Agarbatti, Dry Dhoop Sticks & Cones, and Enamel Frying Bowls in Vadodara, Gujarat. GSTIN: 24HTGPP7238R1ZP.",
  keywords: "Ritam Global, Agarbatti Vadodara, Incense Sticks Manufacturer, Dry Dhoop Cones, Frying Bowls Vadka Vagariya, Wholesaler Agarbatti Gujarat",
  openGraph: {
    title: "Ritam Global | Pure Aromas & Spiritual Elegance",
    description: "Pure Agarbatti, Dry Dhoop & Traditional Cookware Manufacturer from Vadodara. Direct Wholesale Orders Accepted.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
