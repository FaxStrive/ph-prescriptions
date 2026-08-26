import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Restaurant & Hospitality Water Solutions | pH Prescription",
  description:
    "First-class water systems for restaurants, resorts, banquet facilities, spas, wellness centers, and offices. BluPura Italian design with pH Prescription' proprietary filtration. From 5 to 300 people. Lease and finance available.",
};

const COUNTERTOP_MODELS = [
  {
    brand: "EcoChic",
    tagline: "Stylish. Stainless. Performance-first.",
    description:
      "A stylish countertop cooler featuring a stainless-steel shell with an attractive design that makes the most of its construction quality. High-performance ice bank, comprehensive safety features, and excellent ergonomics for both users and service personnel. Available in two sizes.",
    models: [
      { name: "EcoChic I.T. 80", sku: "EC-IT-80", dims: "W14 x D23 x H22" },
      { name: "EcoChic I.T. 150", sku: "EC-IT-150", dims: "W14 x D23 x H22" },
    ],
  },
  {
    brand: "BluBar",
    tagline: "Unrivaled performance for hospitality professionals.",
    description:
      "The cooler designed to offer unrivaled levels of performance. Available in counter-top and floor-standing versions. Synonymous with simplicity, functionality, reliability, and economy. Delivers a highly professional service experience for bar staff and restaurateurs.",
    models: [
      { name: "BluBar I.T. 80", sku: "BB-IT-80", dims: "W14 x D22 x H22" },
      { name: "BluBar I.T. 150", sku: "BB-IT-150", dims: "W18 x D25 x H21" },
    ],
  },
];

const DISPENSER_MODELS = [
  {
    name: "Cool 1 80",
    sku: "C1-TF-80",
    dims: "W19 x D17 x H57",
  },
  {
    name: "Cool 1 150",
    sku: "C1-TF-150",
    dims: "W19 x D17 x H57",
  },
];

const WATER_OPTIONS = [
  {
    label: "Fizz",
    desc: "Sparkling, CO2-infused water with controlled carbonation. Eliminates single-use plastic sparkling water bottles.",
  },
  {
    label: "Flat",
    desc: "Finely filtered, reverse-osmosis still water. The purest baseline for culinary applications, ice, and drinking.",
  },
  {
    label: "Mezzo",
    desc: "Finely filtered water infused with molecular hydrogen. The same wellness-grade water found in pH Prescription residential systems.",
  },
];

const VERTICALS = [
  "Restaurants",
  "Resorts",
  "Banquet Facilities",
  "Spas",
  "Wellness Centers",
  "Corporate Offices",
  "Hotels",
  "Country Clubs",
];

export default function RestaurantHospitalityPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Restaurant & Hospitality Water Systems",
    description:
      "First-class water dispensing systems for restaurants, resorts, spas, and hospitality venues. BluPura Italian design with pH Prescription proprietary filtration. Configurable from 5 to 300 people.",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
      },
    },
    areaServed: "US",
    serviceType: "Commercial Water Systems",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hospitality Water Products",
      itemListElement: [
        ...COUNTERTOP_MODELS.map((m) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: m.brand, description: m.tagline },
        })),
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Cool 1 Dispenser",
            description: "High-volume self-service dispenser for still, sparkling, and molecular hydrogen water.",
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Solutions / Restaurant &amp; Hospitality
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            First-Class Water for Restaurants, Resorts, and Hospitality
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              maxWidth: "620px",
              marginBottom: "0.75rem",
            }}
          >
            Presenting first-class functionality, design, and performance for restaurants, resorts, banquet facilities, spas, wellness centers, and offices. In partnership with BluPura, manufactured in Italy with no compromise on materials or construction quality.
          </p>
          <p
            style={{
              fontSize: "0.9375rem",
              color: "var(--color-ink-mute)",
              marginBottom: "2rem",
            }}
          >
            Configurable from 5 to 300 people. Lease and finance options available.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={`tel:${BUSINESS.phone}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-navy)",
                color: "#fff",
                padding: "0.9375rem 1.75rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Schedule My Complimentary Consultation
            </a>
            <Link
              href="/consultation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--color-navy)",
                color: "var(--color-navy)",
                padding: "0.9375rem 1.5rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Verticals served */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "2rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: "1.5rem 2.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {VERTICALS.map((v) => (
              <span
                key={v}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  opacity: 0.9,
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
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + partnership */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
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
                  fontSize: "1.875rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Italian Design. pH Prescription Filtration.
              </h2>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                All BluPura products are 100% designed and manufactured in Italy. Using materials of the highest quality guarantees excellent durability and performance levels that are not only functional and ergonomic, but stylish and modern in design.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                Each unit pairs BluPura's hardware with pH Prescription' proprietary filtration systems, delivering the same water quality that our residential and medical clients depend on. Your guests experience it as premium-tasting water, served with the precision your establishment demands.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {[
                {
                  label: "5 to 300 People",
                  desc: "Configurable for intimate dining rooms through large banquet and resort operations.",
                },
                {
                  label: "No Single-Use Plastic",
                  desc: "Eliminate plastic bottle inventory, storage cost, and waste. Serve from elegant glass carafes instead.",
                },
                {
                  label: "Your Logo on Every Carafe",
                  desc: "Glass carafes etched with your branding, letting guests know your water is distinctive.",
                },
                {
                  label: "Lease and Finance Options",
                  desc: "Low-barrier entry for operators who need professional water service without upfront capital.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "#fff",
                    padding: "1.25rem",
                    borderLeft: "3px solid var(--color-teal)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      color: "var(--color-navy)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-ink-soft)",
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Water options */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Water Options
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--color-navy)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Three Water Types, One System
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontSize: "1.0625rem",
            }}
          >
            Available as options on all models.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {WATER_OPTIONS.map((opt) => (
              <div
                key={opt.label}
                style={{
                  background: "var(--color-surface)",
                  padding: "2rem",
                  textAlign: "center",
                  borderTop: "4px solid var(--color-navy)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.375rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {opt.label}
                </div>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.7,
                    fontSize: "0.9375rem",
                  }}
                >
                  {opt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countertop models */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Countertop Systems
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--color-navy)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Bar and Counter Coolers
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "1.0625rem",
            }}
          >
            Two series designed for hospitality environments where aesthetics and performance are equally non-negotiable.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {COUNTERTOP_MODELS.map((model) => (
              <div
                key={model.brand}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderTop: "4px solid var(--color-navy)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.625rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {model.brand}
                </h3>
                <div
                  style={{
                    fontSize: "0.8125rem",
                    color: "var(--color-teal)",
                    letterSpacing: "0.05em",
                    marginBottom: "1rem",
                    fontStyle: "italic",
                  }}
                >
                  {model.tagline}
                </div>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {model.description}
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--color-border-soft)",
                    paddingTop: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {model.models.map((m) => (
                    <div
                      key={m.sku}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        gap: "1rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "0.9375rem",
                            color: "var(--color-ink)",
                          }}
                        >
                          {m.name}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6875rem",
                            color: "var(--color-ink-mute)",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {m.sku}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "0.8125rem",
                          color: "var(--color-ink-mute)",
                          textAlign: "right",
                        }}
                      >
                        {m.dims}&rdquo;
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cool 1 Dispenser */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                High-Volume Dispensers
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.875rem",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Cool 1: Simplistic Design, Powerful Performance
              </h2>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                The free-standing dispenser for high-volume self-service areas. Capable of supplying large quantities of still, sparkling, and molecular hydrogen-infused water. Reliable, robust, and geared toward maximum simplicity and practicality of use.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  marginBottom: "1.5rem",
                }}
              >
                {[
                  "Push-button for easy dispensing",
                  "Comfortable front opening for maintenance and inspection",
                  "Solenoid inlet valve",
                  "Internal space to house bracket for filters and CO2 cylinder strap",
                  "Fizz, Flat, and Mezzo water options",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.625rem",
                      fontSize: "0.9rem",
                      color: "var(--color-ink-soft)",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-teal)",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: "0.1em",
                      }}
                    >
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "var(--color-surface)",
                padding: "2rem",
                borderTop: "4px solid var(--color-teal)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                }}
              >
                Available Models
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {DISPENSER_MODELS.map((m) => (
                  <div
                    key={m.sku}
                    style={{
                      background: "#fff",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1rem",
                          color: "var(--color-ink)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {m.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.6875rem",
                          color: "var(--color-ink-mute)",
                          letterSpacing: "0.06em",
                        }}
                      >
                        {m.sku}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--color-ink-mute)",
                        textAlign: "right",
                      }}
                    >
                      {m.dims}&rdquo;
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental + branding */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "5rem 0",
        }}
      >
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "2.5rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                Environmental
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#fff",
                  letterSpacing: "-0.015em",
                }}
              >
                No Single-Use Plastic Bottles
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  fontSize: "0.9375rem",
                }}
              >
                Eliminate the cost, waste, and storage demands of single-use plastic bottles. Our systems supply still, sparkling, and molecular hydrogen water on demand, from a permanent fixture that pays for itself in operational savings.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                Your Brand
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#fff",
                  letterSpacing: "-0.015em",
                }}
              >
                Custom-Etched Glass Carafes
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  fontSize: "0.9375rem",
                }}
              >
                Let your guests know that your water is unique. We offer a selection of glass carafes etched with your logo or branding. Your water becomes part of your dining identity, not an afterthought.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.6875rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontWeight: 700,
                }}
              >
                Financing
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#fff",
                  letterSpacing: "-0.015em",
                }}
              >
                Lease and Finance Options
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.8,
                  fontSize: "0.9375rem",
                }}
              >
                Professional water service without upfront capital commitment. Lease and finance arrangements are available for all systems. Ask about terms when you schedule your complimentary consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div
          className="container"
          style={{ maxWidth: "620px", textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
              color: "var(--color-navy)",
            }}
          >
            Schedule Your Complimentary Consultation
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            We configure the optimum system for your business, from 5 people to 300. Call now or use the form to reach us anytime. Lease and finance options available.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href={`tel:${BUSINESS.phone}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-navy)",
                color: "#fff",
                padding: "0.9375rem 1.75rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Call Now {BUSINESS.phone}
            </a>
            <Link
              href="/consultation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--color-navy)",
                color: "var(--color-navy)",
                padding: "0.9375rem 1.5rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Get My Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
