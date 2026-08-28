import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "About Leo Szymborski | Founder of pH Prescription",
  description: "Leo Szymborski founded pH Prescription in 2005. A third-generation plumber with 40+ years of water system experience, Leo authored H2O: Health 2 Overcome.",
};

export default function AboutLeoPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Leo Szymborski"
        subhead={`Third-generation plumber. ${BUSINESS.yearsExperience} years in water systems. Author. Founder of pH Prescription.`}
        image="/images/lifestyle2/idw-person-drinking-4.jpg"
        imageAlt="Man drinking a glass of clean filtered water"
        ctas={[
          { label: "Read His Book", href: "/book", variant: "primary" },
          { label: "Doctor Endorsements", href: "/experts", variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3.5vw,2.25rem)", color: "var(--color-navy)", marginBottom: "1.5rem" }}>
              A Lifetime in Water
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              Leo Szymborski grew up in the plumbing trade. As a third-generation plumber, he spent decades on job sites learning exactly what travels through the pipes that supply the water we drink, bathe in, and cook with. What he discovered was not reassuring.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              In 2005, Leo founded pH Prescription in Palm City, Florida, with a single mission: to create water systems that go beyond filtration and actually restore water to its healthiest natural state. Over {BUSINESS.yearsExperience} years, he developed the proprietary QuadVortex technology that filters, alkalizes, remineralizes, and infuses molecular hydrogen into every drop.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              Leo has since built a 10,000 square foot manufacturing facility in Palm City, FL, and grown pH Prescription into a nationally recognized brand serving all 50 states. Every system bears the WQA certification and the Made in USA designation he is proud of.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              His work gained the attention of leading physicians and researchers - including authors, surgeons, and molecular medicine scientists - who now endorse pH Prescription systems to their own patients and clients.
            </p>
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/svc-service-family-outdoor.jpg"
        imageAlt="Family spending time together outdoors, healthy and well hydrated"
        statement="Water changed his life."
        statementAccent="Then it became his life's work."
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ background: "#fff", color: "var(--color-ink)", padding: "2.5rem", marginBottom: "2rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-teal)", marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Book by Leo Szymborski
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.625rem", marginBottom: "0.75rem" }}>
                &ldquo;H2O: Health 2 Overcome&rdquo;
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                Leo documented his journey and the science behind water health in his book H2O: Health 2 Overcome. Available through pH Prescription - contact us to learn more.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/experts" className="btn btn-primary">View Doctor Endorsements</Link>
              <Link href="/consultation" className="btn btn-outline">Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
