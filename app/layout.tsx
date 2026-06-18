import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "CV Lavato Trimitra Nusantara — General Trading, Supplier & Kontraktor",
  description: "Mitra terpercaya untuk general trading, supply chain, dan konstruksi. Melayani Bogor, Jakarta, dan seluruh Indonesia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${poppins.variable} ${playfair.variable} scroll-smooth`} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}