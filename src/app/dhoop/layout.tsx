import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dry Dhoop Sticks & Cones | Ritam Global",
  description: "Pure resinous dry dhoop formulations available in both Stick and Cone formats for deep purification.",
};

export default function DhoopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
