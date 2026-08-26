import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, PRODUCTS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Commercial Water Coolers | pH Prescription",
  description:
    "Alkaline, hydrogen-infused commercial water coolers with paddle-touch dispensing. Hot/cold. Made in USA. From $2,613.60. Lifetime warranty with licensed installation.",
};

const COOLER = PRODUCTS.find((p) => p.slug === "business-water-cooler")!;

const FEATURES = [
  {
    title: "Paddle-Touch Dispensing",
    body: "Hands-free hygienic dispensing — tap with a cup, bottle, or the back of your hand. Ideal for high-traffic environments.",
  },
  {
    title: "Hot & Cold",
    body: "Instant hot water for teas, soups, and hot beverages. Chilled filtered water always ready. No plumbing rerouting required for most installations.",
  },
  {
    title: "Inline Filtration",
    body: "Removes chlorine, sediment, VOCs, and other contaminants right at the point of dispense. Your team drinks the same quality as our residential clients.",
  },
  {
    title: "QuadVortex Technology",
    body: "Water passes through our proprietary QuadVortex module — alkalized, remineralized, and hydrogen-infused before it reaches the spout.",
  },
];

export default function CoolersPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Business / Water Coolers
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Commercial Water Coolers
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Replace your water cooler rental with a WQA Certified system that delivers alkaline, remineralized, hydrogen-infused water — hot or cold — from a hygienic paddle-touch dispenser. Made in USA. Lifetime warranty.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/consultation"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "var(--color-ink)",
                padding: "0.875rem 2rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Request Cooler Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTollFree}`}
              style={{
                display: "inline-block",
                border: "1px solid var(--color-border-soft)",
                color: "var(--color-ink)",
                padding: "0.875rem 2rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>

      {/* Product card */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "2rem",
            }}
          >
            Our Commercial Cooler
          </h2>
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(27,58,107,0.1)",
              padding: "2.5rem",
              maxWidth: "680px",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#fff",
                color: "var(--color-ink)",
                fontSize: "0.75rem",
                fontWeight: 700,
                padding: "0.25rem 0.75rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              {COOLER.badge}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                color: "var(--color-navy)",
                marginBottom: "0.5rem",
              }}
            >
              {COOLER.name}
            </h3>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "rgba(27,58,107,0.5)",
                marginBottom: "1rem",
              }}
            >
              SKU: {COOLER.sku}
            </div>
            <p
              style={{
                color: "rgba(27,58,107,0.75)",
                lineHeight: 1.7,
                marginBottom: "1.25rem",
              }}
            >
              {COOLER.description}
            </p>
            <div
              style={{
                fontSize: "1.5rem",
                fontFamily: "var(--font-display)",
                color: "var(--color-navy)",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              {COOLER.price}
            </div>
            <Link
              href="/consultation"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "var(--color-ink)",
                padding: "0.75rem 1.75rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "2.5rem",
            }}
          >
            What Makes Our Cooler Different
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  borderLeft: "3px solid var(--color-teal)",
                  paddingLeft: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: "rgba(27,58,107,0.72)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "4rem 0",
        }}
      >
        <div className="container" style={{ maxWidth: "720px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
              marginBottom: "2rem",
            }}
          >
            vs. Standard Water Cooler Rentals
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.5rem",
            }}
          >
            {[
              {
                label: "Standard Rental",
                items: [
                  "Monthly rental fee forever",
                  "Basic filtration only",
                  "No hydrogen or remineralization",
                  "Standard tap or lever",
                  "No warranty on water quality",
                ],
                accent: "var(--color-ink-mute)",
              },
              {
                label: "pH Prescription Cooler",
                items: [
                  "One-time purchase, owned outright",
                  "QuadVortex inline filtration",
                  "Alkaline + H2 infusion included",
                  "Hygienic paddle-touch dispenser",
                  "Lifetime warranty",
                ],
                accent: "var(--color-teal-light)",
              },
            ].map((col) => (
              <div key={col.label}>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: col.accent,
                    marginBottom: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {col.label}
                </div>
                {col.items.map((item) => (
                  <div
                    key={item}
                    style={{
                      fontSize: "0.9375rem",
                      color: "var(--color-ink-soft)",
                      marginBottom: "0.625rem",
                      paddingBottom: "0.625rem",
                      borderBottom: "1px solid var(--color-border-soft)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-cream)", padding: "3.5rem 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
              color: "var(--color-navy)",
              marginBottom: "1rem",
            }}
          >
            Replace Your Rental. Own Your Water.
          </h2>
          <p style={{ color: "rgba(27,58,107,0.7)", marginBottom: "1.5rem" }}>
            One call, free water analysis, lifetime warranty. Serving all 50 states.
          </p>
          <Link
            href="/consultation"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "var(--color-ink)",
              padding: "0.875rem 2.25rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Get My Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
