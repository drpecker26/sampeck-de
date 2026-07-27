import type { Metadata } from "next";
import { Heebo, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import "./globals.css";

const display = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-display",
  display: "swap",
});

const body = Heebo({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sampeck.de"),
  title: {
    default: "Sam Makes Games",
    template: "%s — Sam Makes Games",
  },
  description:
    "Outside of my job making games that make $, I make games for fun too. Generative AI prototypes, fan-first multiplayer games, pitches, and more.",
  openGraph: {
    title: "Sam Makes Games",
    description:
      "Generative AI prototypes, fan-first multiplayer games, pitches, and more.",
    url: "https://sampeck.de",
    siteName: "Sam Makes Games",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
