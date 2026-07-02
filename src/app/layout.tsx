import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeatherMax 7 | Real-Time Weather Intelligence Without Wi-Fi",
  description:
    "Know Before. Act First. WeatherMax 7 delivers real-time weather intelligence powered by National Weather Service data — no Wi-Fi, no monthly fees, no surprises.",
  keywords: [
    "WeatherMax 7",
    "weather station",
    "real-time weather",
    "no wifi weather",
    "National Weather Service",
    "Atmos Corex",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlow.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
