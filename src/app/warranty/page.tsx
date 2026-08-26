import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Lifetime Warranty | pH Prescription",
  description:
    "pH Prescription lifetime warranty — what is covered, how to register, and how to file a warranty claim. WQA Certified systems backed for life with licensed installation.",
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
            Lifetime Warranty
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Every pH Prescription system is backed by a lifetime warranty on manufacturing defects when installed by a licensed plumber. We build systems that last — and we stand behind them.
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
                "Manufacturing defects in materials and workmanship",
                "System components under normal operating conditions",
                "Membranes, housings, and filtration stages",
                "QuadVortex module and alkalizing cartridge housing",
                "All systems installed by a licensed plumber",
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
                "Damage from improper installation (non-licensed installer)",
                "Damage from misuse or modification of the system",
                "Consumable filter replacements (periodic maintenance items)",
                "Damage from failure to perform recommended maintenance",
                "Cosmetic damage that does not affect performance",
                "Damage from water pressure outside specified ranges",
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
                step: "Register Your System",
                body: `Register your system within 30 days of installation to activate your lifetime warranty. Contact us at ${BUSINESS.email} or ${BUSINESS.phone} with your system model number, installation date, and licensed plumber information.`,
              },
              {
                step: "File a Claim",
                body: `If you experience a manufacturing defect, contact us at ${BUSINESS.phone} (local) or ${BUSINESS.phoneTollFree} (toll free). Have your system model number and installation date ready. We will diagnose the issue and arrange repair or replacement.`,
              },
              {
                step: "Emergency Service",
                body: `For urgent water system issues, call our emergency line at ${BUSINESS.phoneEmergency}. We will work to dispatch a licensed service professional as quickly as possible.`,
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
            Maintaining Your Warranty
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "1.25rem",
            }}
          >
            To keep your lifetime warranty in force, replace filter cartridges on schedule (typically every 12 months depending on your water quality and usage) and have any major service performed by a licensed plumber. We can recommend filter replacement intervals specific to your water profile.
          </p>
          <p
            style={{
              color: "var(--color-ink-mute)",
              lineHeight: 1.75,
              fontSize: "0.9375rem",
            }}
          >
            Replacement filters and maintenance kits are available directly from pH Prescription. Contact us to set up an annual service plan.
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
