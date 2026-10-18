import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Nutraceuticals | pH Prescription",
  description: "N101 Nitric Oxide Lozenges and N.O. Beetz Nitric Oxide Infusion Sticks, developed by Dr. Nathan S. Bryan.",
};

const PILLARS = [
  {
    title: "N101 Nitric Oxide Lozenges",
    body: "Developed by Dr. Nathan S. Bryan, N101 Nitric Oxide Lozenges boost natural N.O. production rapidly as they dissolve. $79.99.",
    image: "/products/N1o1-Lozenge-hero.jpg",
    imageAlt: "N101 Nitric Oxide Lozenges",
  },
  {
    title: "N.O. Beetz Nitric Oxide Infusion Sticks",
    body: "The brainchild of Dr. Nathan S. Bryan. Pour one packet into 2-3 ounces of finely filtered water once a day to naturally boost Nitric Oxide production. $79.99.",
    image: "/products/no-beetz-hero.jpg",
    imageAlt: "N.O. Beetz Nitric Oxide Infusion Sticks",
  },
];

export default function NutraceuticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="pHP New"
        title="Nutraceuticals"
        subhead="N101 Nitric Oxide Lozenges and N.O. Beetz Nitric Oxide Infusion Sticks, developed by Dr. Nathan S. Bryan."
        image="/images/commercial/dw-reverse-osmosis-install.jpg"
        imageAlt="Man filling a glass with sparkling-clear water from a dedicated drinking-water faucet at a kitchen sink"
        minHeight="56vh"
        ctas={[
          { label: `Inquire: ${BUSINESS.phoneTollFree}`, href: `tel:${BUSINESS.phoneTollFree}`, variant: "primary" },
          { label: "Free Consultation", href: "/consultation", variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          <div style={{ maxWidth: "720px", marginBottom: "3rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                color: "var(--color-navy)",
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Nitric Oxide Support
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Nitric Oxide is produced naturally by the human body and is one of the most important molecules for blood vessel health. Both products were developed by Dr. Nathan S. Bryan, an internationally recognized biochemist and physiologist.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
              These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </div>

          <PhotoCardGrid
            columns={2}
            cards={PILLARS.map((p) => ({
              image: p.image,
              imageAlt: p.imageAlt,
              title: p.title,
              body: p.body,
            }))}
          />
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/idw-tap-stream-1.jpg"
        imageAlt="Father and young son laughing together while washing hands at a kitchen sink by a sunny window"
        statement="Wellness that starts"
        statementAccent="at the tap."
        height="clamp(240px, 34vw, 420px)"
      />

      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              background: "var(--color-cream)",
              padding: "2.5rem",
              borderTop: "4px solid var(--color-gold)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                color: "var(--color-navy)",
                marginBottom: "0.75rem",
              }}
            >
              Availability
            </h3>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              N101 Nitric Oxide Lozenges and N.O. Beetz Nitric Oxide Infusion Sticks are $79.99 each. To inquire about availability or to order, contact us directly.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
                Call {BUSINESS.phoneTollFree}
              </a>
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--color-teal)", textDecoration: "none", fontWeight: 500, alignSelf: "center" }}>
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Have Questions?
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Contact us for a free consultation.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
