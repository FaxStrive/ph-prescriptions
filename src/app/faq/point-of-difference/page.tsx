import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, DOCTORS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Why pH Prescription? | Point of Difference",
  description: "What separates pH Prescription from every other water filtration company. QuadVortex technology, lifetime warranty, WQA certified, Made in USA, 7+ doctor endorsements, and 40+ years of experience.",
};

export default function PointOfDifferencePage() {
  return (
    <>
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            FAQ / Point of Difference
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Why pH Prescription
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              maxWidth: "600px",
            }}
          >
            There are hundreds of water filtration companies. Here is what separates pH Prescription from every other option on the market, and why the doctors and practitioners who endorse us stand behind that distinction.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              {
                heading: "QuadVortex Technology - Proprietary, Not Off-the-Shelf",
                body: "Standard water filters only remove contaminants. Every major competitor stops there. pH Prescription systems do four things: filter up to 99% of contaminants, restructure water molecules at the vortex stage, restore alkaline pH through mineral re-introduction, and infuse therapeutic concentrations of molecular hydrogen. No other consumer-available system does all four. The QuadVortex process is proprietary and is not available under any other brand.",
              },
              {
                heading: "Non-Electric - No Power Required",
                body: "Our systems require no electricity to operate. That means no operating cost, no EMF concern, no power-outage vulnerability, and simpler installation in almost any location. Most competitors rely on electric pumps, UV lights, or ionizers that fail when the power does.",
              },
              {
                heading: "Lifetime Warranty With Licensed Plumber Install",
                body: "We back every system with a lifetime warranty when installed by a licensed plumber. This is one of the strongest warranty positions in the water treatment industry. Competitors typically offer 1 to 5 year warranties. Ours has no expiration. The lifetime warranty reflects our confidence in the build quality and our commitment to standing behind every client long term.",
              },
              {
                heading: "WQA Certified, Made in USA",
                body: "Our systems are certified by the Water Quality Association - the independent body that sets the standard for the industry. They are manufactured in the United States, not overseas. Most filter brands sold online are made in China to price-competitive specifications. WQA certification means an independent lab verified the claims.",
              },
              {
                heading: "7+ Doctor Endorsements - Independent, Not Paid",
                body: "The medical professionals who endorse pH Prescription are independent practitioners who evaluated our systems and concluded the science is sound. They are not paid spokespeople. They use our systems in their own practices and recommend them to patients.",
              },
              {
                heading: "40+ Years of Experience, Family-Owned Since 2005",
                body: `Leo Szymborski is a third-generation plumber with more than ${BUSINESS.yearsExperience} years in water systems. pH Prescription was founded in ${BUSINESS.founded} as a family business. Every client interacts with people who have been in this industry their whole lives, not a sales team hired to move product.`,
              },
              {
                heading: "Local, Reachable, Accountable",
                body: `We are based in Palm City, Florida with a ${BUSINESS.warehouseSqFt} sq ft warehouse and direct-contact support. When you call ${BUSINESS.phone}, you reach someone who knows your system. There is no ticket queue, no overseas support center, no call deflection.`,
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid var(--color-border-soft)",
                }}
              >
                <summary
                  style={{
                    padding: "1.5rem 0",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {item.heading}
                  <span
                    style={{
                      flexShrink: 0,
                      color: "var(--color-teal)",
                      fontSize: "1.25rem",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.8,
                    paddingBottom: "1.5rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {item.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              color: "var(--color-navy)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Doctor Endorsements
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            Independent medical professionals who evaluated and stand behind our systems
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.name}
                style={{
                  background: "var(--color-cream)",
                  padding: "1.25rem 1.5rem",
                  borderLeft: "3px solid var(--color-teal)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9375rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {doctor.name}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", marginBottom: "0.25rem" }}>
                  {doctor.specialty}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-ink-soft)", fontStyle: "italic" }}>
                  {doctor.credential}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/experts" style={{ color: "var(--color-teal)", textDecoration: "none", fontWeight: 500 }}>
              View full doctor endorsements
            </Link>
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
            See the Difference Yourself
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Start with a free consultation. We will review your local water quality with you, show you exactly what is in it, and let you decide whether our systems are right for you. No pressure. No commitment.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/consultation" className="btn btn-primary">
              Free Consultation
            </Link>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
              Call {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
