import type { Metadata } from "next";
import { Open_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ReferralPassthrough from "@/components/ReferralPassthrough";
import { BUSINESS } from "@/lib/business";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "pH Prescription | Doctor-Recommended Water Health Systems | Palm City FL",
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Water filtration, alkaline, and hydrogen-infused systems for residential and commercial use. 30+ Year WQA Member. Founded 2005, Palm City FL. Serving all 50 states. #1 Doctor Recommended Drinking System.",
  keywords:
    "water filtration Palm City FL, alkaline water system, hydrogen water, WMS QuadVortex water restructuring, whole home water treatment Florida, reverse osmosis drinking system",
  metadataBase: new URL("https://phprescription.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "pH Prescription | Doctor-Recommended Water Health Systems",
    description: "30+ Year WQA Member. Made in USA since 2005. Serving all 50 states.",
    type: "website",
    locale: "en_US",
    url: "https://phprescription.com",
    siteName: BUSINESS.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${openSans.variable} ${fraunces.variable}`}>
      <body>
        <Header />
        <main style={{ paddingTop: "72px" }}>{children}</main>
        <Footer />
        <ReferralPassthrough />
      </body>
    </html>
  );
}
