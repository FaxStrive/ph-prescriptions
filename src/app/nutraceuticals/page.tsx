import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Nutraceuticals | pH Prescription pHP New Product Line",
  description: "Targeted nutrition supplements that complement pH Prescription water systems. Mineral repletion, hydrogen-boosting, and cellular support. Part of the pHP New product line.",
};

const PILLARS = [
  {
    title: "Mineral Repletion",
    body: "Modern diets and demineralized water leave most people depleted in essential minerals. Our mineral formulations restore what filtration and the food supply remove.",
    image: "/images/products-extra/residential-card.jpg",
    imageAlt: "Woman drinking a glass of water while leaning against the counter in a bright white kitchen",
  },
  {
    title: "Hydrogen-Boosting Supplements",
    body: "Hydrogen tablets and formulations that generate molecular H2 internally, extending the benefits of our hydrogen-infused water systems.",
    image: "/images/products-extra/home-system-promo.jpg",
    imageAlt: "pH Prescription promotional graphic for doctor-recommended alkaline water with molecular hydrogen showing a multi-stage home filtration system",
  },
  {
    title: "Cellular Hydration Support",
    body: "Electrolyte complexes designed to work with structured water, improving cellular uptake and reducing the gap between water consumed and water actually used by your cells.",
    image: "/images/lifestyle2/idw-kitchen-faucet-1.jpg",
    imageAlt: "Woman rinsing a plate under a professional-style spring faucet in a bright farmhouse kitchen",
  },
  {
    title: "pH-Supportive Nutrition",
    body: "Alkaline-forming supplements that complement the pH-balanced water our systems produce. Targeted for clients with specific acidic load concerns.",
    image: "/images/lifestyle2/idw-tap-modern-1.jpg",
    imageAlt: "Man testing the water temperature with his hand under a modern chrome bathroom faucet",
  },
];

export default function NutraceuticalsPage() {
  return (
    <>
      <PageHero
        eyebrow="pHP New Product Line"
        title="Nutraceuticals"
        subhead="Targeted nutritional supplements that work alongside our water systems to support mineral repletion, cellular hydration, and hydrogen-boosting at the cellular level."
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
              Water and Nutrition Work Together
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
              Our water systems are the foundation of cellular hydration. But water alone does not replenish every mineral your body needs, and it cannot replace targeted nutritional support for specific health goals.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
              The pHP New nutraceutical line was developed to complement our filtration and hydrogen-infusion systems. Each supplement is selected to work with properly structured, mineralized water to maximize cellular uptake and effectiveness.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
              These are not mass-market vitamins. Availability is consultation-based because Leo and his team match supplementation to each client&apos;s water quality data, health profile, and goals. No online cart. Every order starts with a conversation.
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
              Consultation-Based Availability
            </h3>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              pHP New nutraceuticals are not sold online. We match each client to specific formulations based on their water test results, health history, and goals. To inquire about availability or to order, contact us directly.
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
            Start With Your Water
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Every nutraceutical consultation begins with a free water review. Understanding what your water is doing first shapes what supplementation makes sense. Schedule a consultation and we will review your water quality with you at no cost.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
