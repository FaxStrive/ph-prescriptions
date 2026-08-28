import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_ALL } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";

function categoryId(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export const metadata: Metadata = {
  title: "All Products | pH Prescription Water Systems",
  description:
    "Complete product catalogue: 46 water filtration systems, filters, and accessories. WQA Certified, Made in USA. Drinking systems, whole-home systems, UV disinfection, shower filters, and more.",
};

const CATEGORY_ORDER = [
  "Drinking Systems",
  "Total Home",
  "UV & Disinfection",
  "Showers & Tubs",
  "Business Stations",
  "Nutraceuticals",
  "Marine & Pool",
  "Faucets",
  "Testing Equipment",
  "Replacement Parts",
  "Other",
];

export default function ProductsPage() {
  const grouped: Record<string, typeof PRODUCTS_ALL> = {};
  for (const cat of CATEGORY_ORDER) {
    grouped[cat] = PRODUCTS_ALL.filter((p) => p.category === cat);
  }

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow="Product Catalogue"
        title="Our Complete Product Catalogue"
        subhead="46 systems, filters, and accessories - WQA Certified, Made in USA"
        image="/images/lifestyle2/svc-service-tap-closeup.jpg"
        imageAlt="Man filling a tall glass with fresh water from a brushed-steel gooseneck kitchen faucet"
        minHeight="52vh"
        ctas={[{ label: "Book a Free Consultation", href: "/consultation", variant: "primary" }]}
      />

      {/* Category quick links */}
      <section
        aria-label="Browse by category"
        style={{ background: "#fff", padding: "1.5rem 0", borderBottom: "1px solid var(--color-border-soft)" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem 0.75rem",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--color-ink-mute)",
                marginRight: "0.5rem",
              }}
            >
              Jump to
            </span>
            {CATEGORY_ORDER.filter((category) =>
              PRODUCTS_ALL.some((p) => p.category === category)
            ).map((category) => (
              <a
                key={category}
                href={`#${categoryId(category)}`}
                style={{
                  display: "inline-block",
                  padding: "0.45rem 0.9rem",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "var(--color-navy)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border-soft)",
                  textDecoration: "none",
                }}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "2rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {["WQA Certified", "Made in USA", "40+ Years in Water Systems", "Doctor-Recommended", "Ships to All 50 States"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    opacity: 0.92,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "var(--color-teal)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Products grouped by category */}
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          {CATEGORY_ORDER.map((category) => {
            const products = grouped[category];
            if (!products || products.length === 0) return null;
            return (
              <div key={category} id={categoryId(category)} style={{ marginBottom: "4rem", scrollMarginTop: "6rem" }}>
                <div
                  style={{
                    borderBottom: "2px solid var(--color-navy)",
                    paddingBottom: "0.75rem",
                    marginBottom: "2rem",
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      color: "var(--color-navy)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {category}
                  </h2>
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--color-ink-mute)",
                    }}
                  >
                    {products.length} {products.length === 1 ? "product" : "products"}
                  </span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  {products.map((product) => (
                    <div
                      key={product.slug}
                      style={{
                        background: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        borderTop: "3px solid var(--color-teal)",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "1 / 1",
                          background: "var(--color-surface)",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={300}
                          height={300}
                          unoptimized
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            padding: "1rem",
                          }}
                        />
                      </div>
                      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                        {product.sku && (
                          <div
                            style={{
                              fontSize: "0.6875rem",
                              color: "var(--color-ink-mute)",
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              marginBottom: "0.375rem",
                            }}
                          >
                            SKU: {product.sku}
                          </div>
                        )}
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.0625rem",
                            color: "var(--color-navy)",
                            marginBottom: "0.5rem",
                            lineHeight: 1.3,
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {product.name}
                        </h3>
                        <p
                          style={{
                            color: "var(--color-ink-soft)",
                            fontSize: "0.875rem",
                            lineHeight: 1.7,
                            marginBottom: "1rem",
                            flexGrow: 1,
                          }}
                        >
                          {product.description}
                        </p>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "1.125rem",
                            color: "var(--color-navy)",
                            fontWeight: 700,
                          }}
                        >
                          {product.price}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "620px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            Not Sure Which System Is Right for You?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Our team will assess your water, your home, and your goals - and recommend exactly the right system. Free consultation, no pressure.
          </p>
          <Link
            href="/consultation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              color: "var(--color-navy)",
              padding: "0.9375rem 1.75rem",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
