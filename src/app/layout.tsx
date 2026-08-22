import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BUSINESS } from "@/lib/business";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "PH Prescriptions | Doctor-Recommended Water Health Systems | Palm City FL",
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "WQA Certified water filtration, alkaline, and hydrogen-infused systems for residential and commercial use. Founded 2005, Palm City FL. Serving all 50 states. #1 Doctor Recommended.",
  keywords:
    "water filtration Palm City FL, alkaline water system, hydrogen water, QuadVortex water filter, whole home water treatment Florida, reverse osmosis drinking system",
  metadataBase: new URL("https://phprescription.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "PH Prescriptions | Doctor-Recommended Water Health Systems",
    description: "WQA Certified. Made in USA since 2005. Serving all 50 states.",
    type: "website",
    locale: "en_US",
    url: "https://phprescription.com",
    siteName: BUSINESS.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: "90px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
