import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agarbatti Collection | Ritam Global",
  description: "Explore our collection of 25+ premium standard, colored, and masala agarbatti fragrances for your daily devotion.",
};

export default function AgarbattiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
