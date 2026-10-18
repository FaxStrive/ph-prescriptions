import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS, PRODUCTS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Commercial Water Coolers | pH Prescription",
  description:
    "Commercial hot/cold water coolers with minimal-touch paddle dispensing and four filtration options. USA final assembly and quality control. From $2,613.60.",
};

const COOLER = PRODUCTS.find((p) => p.slug === "business-water-cooler")!;

const FEATURES = [
  {
    title: "Paddle-Touch Dispensing",
    body: "A minimal-touch paddle delivery system that is sanitary, with no plastic bottles. The paddle press supports most sports bottles as well as coffee pots.",
  },
  {
    title: "Hot & Cold",
    body: "Dispenses hot and cold water consistently, with a hot water safety lock.",
  },
  {
    title: "Four Filtration Options",
    body: "Choose 3-phase filtration, reverse osmosis, 3-phase plus alkaline, or reverse osmosis plus alkaline.",
  },
];

export default function CoolersPage() {
  return (
    <>
      <PageHero
        eyebrow="Business / Water Coolers"
        title="Commercial"
        titleAccent="Water Coolers"
        subhead="A hot and cold commercial water cooler from a 30+ Year WQA Member, with a minimal-touch paddle dispenser and your choice of four filtration systems. USA final assembly and quality control."
        image="/images/hero/php-new-hero.jpg"
        imageAlt="Fresh water streaming from a modern black dispenser spout into the light"
        ctas={[
          { label: "Request Cooler Quote", href: "/consultation", variant: "white" },
          { label: BUSINESS.phoneTollFree, href: `tel:${BUSINESS.phoneTollFree}`, variant: "outline" },
        ]}
      />

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
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "stretch",
            }}
          >
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(27,58,107,0.1)",
                borderTop: "3px solid var(--color-teal)",
                padding: "2.5rem",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "var(--color-teal-soft, rgba(13,148,136,0.1))",
                  color: "var(--color-teal)",
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
              <Link href="/consultation" className="btn btn-primary">
                Request Pricing
              </Link>
            </div>
            <div style={{ position: "relative", minHeight: "320px", overflow: "hidden" }}>
              <Image
                src="/images/hero/marine-rv-hero.jpg"
                alt="Water pouring into a clear glass in soft window light"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
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

      <ImageBand
        image="/images/hero/case-studies-hero.jpg"
        imageAlt="Woman drinking from a glass of clear water"
        statement="Water your team"
        statementAccent="actually drinks"
      />

      {/* Comparison + service */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
                  marginBottom: "2rem",
                }}
              >
                Cooler Options
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    label: "pH Prescription Cooler",
                    items: [
                      "Four filtration systems to choose from",
                      "Minimal-touch paddle dispenser",
                      "Hot and cold water",
                      "Available in black or white",
                      "Leasing options by the month available",
                    ],
                    accent: "var(--color-teal)",
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
            <PhotoCardGrid
              columns={2}
              cards={[
                {
                  image: "/images/lifestyle2/svc-service-filtration-glass.jpg",
                  imageAlt: "Glass of purified water in front of a row of filtration cartridges",
                  title: "Filtered Water",
                  body: "Available with four filtration systems, with no plastic bottles to swap or store.",
                },
                {
                  image: "/images/lifestyle2/svc-service-plumber-portrait.jpg",
                  imageAlt: "Smiling technician in coveralls holding a pipe wrench",
                  title: "Licensed Installation",
                  body: "pH Prescription recommends a licensed plumber for installation.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Consultation split */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
              <Image
                src="/images/hero/consultation-hero.jpg"
                alt="Plumber with a clipboard reviewing a quote with a customer in her kitchen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                }}
              >
                Request Your Cooler Quote
              </h2>
              <p style={{ color: "rgba(27,58,107,0.7)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
                One call, free consultation. Serving all 50 states. Leasing options by the month available.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/consultation" className="btn btn-primary">
                  Get My Free Quote
                </Link>
                <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-outline">
                  {BUSINESS.phoneTollFree}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
