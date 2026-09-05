import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: "pH Prescription | Doctor-Recommended Water Health Systems | Palm City FL",
  description:
    "Doctor-recommended water filtration, alkaline and hydrogen-infused systems for home and business. WQA Certified, Made in USA, serving all 50 states since 2005.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "pH Prescription | Water That Works for Your Health",
    description:
      "Doctor-recommended water filtration, alkaline and hydrogen-infused systems for home and business. Founded 2005, Palm City FL.",
    url: "/",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BUSINESS.name,
            description:
              "Doctor-recommended water filtration, alkaline and hydrogen-infused systems for home and business. Founded 2005, Palm City FL.",
            telephone: BUSINESS.phone,
            email: BUSINESS.email,
            url: BUSINESS.url,
            address: {
              "@type": "PostalAddress",
              streetAddress: BUSINESS.address.street,
              addressLocality: BUSINESS.address.city,
              addressRegion: BUSINESS.address.state,
              postalCode: BUSINESS.address.zip,
              addressCountry: "US",
            },
            foundingDate: BUSINESS.founded,
            sameAs: [
              BUSINESS.social.facebook,
              BUSINESS.social.instagram,
              BUSINESS.social.youtube,
            ],
          }),
        }}
      />
      <HomeClient />
    </>
  );
}
