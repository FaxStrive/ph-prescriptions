import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "5-Year Warranty | pH Prescription",
  description:
    "The pH Prescription five-year warranty on residential systems installed by a licensed plumber: what is covered, what is not, and how to register your product. Plus a lifetime warranty on parts with the Replenishment Program.",
};

export default function WarrantyPage() {
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
            Warranty
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            5-Year Warranty
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Five-year warranty on residential systems when installed by a licensed plumber, plus a lifetime warranty on parts with the Replenishment Program. pH Prescription will replace defective product, subject to the conditions below.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            style={{
              display: "inline-block",
              background: "#fff",
              color: "var(--color-ink)",
              padding: "0.875rem 2rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Call to File a Claim: {BUSINESS.phone}
          </a>
        </div>
      </section>

      {/* Coverage */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1.5rem",
                }}
              >
                What Is Covered
              </h2>
              {[
                "Replacement of defective product for five years",
                "Defects in manufacture and materials in a pH Prescription water treatment system supplied for installation into domestic premises in the United States",
                "Residential installations done by a licensed plumber",
                "If an identical replacement product is not available, pH Prescription may replace the defective product with a similar quality product",
                "A lifetime warranty on parts with the Replenishment Program",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    marginBottom: "0.875rem",
                    fontSize: "0.9375rem",
                    color: "rgba(27,58,107,0.82)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: "var(--color-teal)",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    +
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1.5rem",
                }}
              >
                What Is Not Covered
              </h2>
              {[
                "Commercial installations: this warranty applies to residential installations only",
                "Claims from anyone other than the original purchaser",
                "Installations outside the United States",
                "Installations not done by a licensed plumber: the warranty is null and void",
                "Casualty loss due to Acts of God and other claims such as, without limitation, hurricanes, tornadoes, earthquakes, fires or floods",
                "Shipping cost and labor installation cost for the replacement product",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    alignItems: "flex-start",
                    marginBottom: "0.875rem",
                    fontSize: "0.9375rem",
                    color: "rgba(27,58,107,0.82)",
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color: "rgba(27,58,107,0.35)",
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: "0.1rem",
                    }}
                  >
                    --
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration and claims */}
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
            Registration & Claims
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                step: "Register Your Product",
                body: `Protect your investment by registering your pH Prescription product. Contact us at ${BUSINESS.email} or ${BUSINESS.phone} with your name, address, date of purchase, model number and serial number.`,
              },
              {
                step: "File a Claim",
                body: `Contact us at ${BUSINESS.phone} (local) or ${BUSINESS.phoneTollFree} (toll free). Any claim must include a copy of valid proof of purchase showing the date and place of purchase.`,
              },
              {
                step: "Emergency Line",
                body: `Emergency: ${BUSINESS.phoneEmergency}.`,
              },
            ].map((card) => (
              <div
                key={card.step}
                style={{
                  background: "var(--color-cream)",
                  padding: "2rem",
                  borderTop: "3px solid var(--color-teal)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {card.step}
                </h3>
                <p
                  style={{
                    color: "rgba(27,58,107,0.75)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter maintenance note */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "3.5rem 0",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
              marginBottom: "1.25rem",
            }}
          >
            Replenishment Program and Licensed Installation
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            pH Prescription also offers a lifetime warranty on parts and a 20% discount on filters when you enroll in our Replenishment Program.
          </p>
          <p
            style={{
              color: "var(--color-ink-mute)",
              lineHeight: 1.75,
              fontSize: "0.9375rem",
            }}
          >
            If you do not use a licensed plumber for your installation, your warranty is null and void. If you need one, contact pH Prescription with your location and the equipment purchased, and we will recommend a licensed plumber for you to contact.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`tel:${BUSINESS.phone}`}
              style={{
                display: "inline-block",
                background: "#fff",
                color: "var(--color-ink)",
                padding: "0.75rem 1.75rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                border: "1px solid var(--color-border-soft)",
                color: "var(--color-ink)",
                padding: "0.75rem 1.75rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
