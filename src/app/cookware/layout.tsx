import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Enamel Cookware | Ritam Global",
  description: "High-grade enamel-coated traditional bowls and pans, including Vagariya and Vadka, in vibrant colors.",
};

export default function CookwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
