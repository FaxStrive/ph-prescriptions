import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Total Business Water Systems | PH Prescriptions",
  description:
    "Whole-facility restructured water treatment for commercial buildings. Every tap, every fixture, every shower. WQA Certified. Lifetime warranty. Pricing by consultation.",
};

export default function BusinessTotalPage() {
  return (
    <>
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal-light)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Business / Total Facility
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Total Facility Water Treatment
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Our commercial whole-facility system treats every gallon that enters your building. Every tap, every shower, every appliance gets restructured, alkalized, remineralized water. The commercial equivalent of our Total Home Premier System.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/consultation"
              style={{
                display: "inline-block",
                background: "var(--color-teal)",
                color: "#fff",
                padding: "0.875rem 2rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Request Facility Assessment
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTollFree}`}
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
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

      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                }}
              >
                Every Point of Water. Transformed.
              </h2>
              <p
                style={{
                  color: "rgba(27,58,107,0.75)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                Our residential Total Home Premier System retails at $9,244.25. Commercial configurations are scoped and priced after a free facility assessment — building size, daily usage, fixture count, and current water quality all affect the specification.
              </p>
              <p
                style={{
                  color: "rgba(27,58,107,0.75)",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                Unlike point-of-use systems, total facility treatment means every employee, guest, and piece of water-using equipment benefits from restructured water.
              </p>
              <Link
                href="/technology"
                style={{
                  color: "var(--color-teal)",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                }}
              >
                Learn about QuadVortex technology
              </Link>
            </div>
            <div>
              {[
                {
                  title: "What We Treat",
                  items: [
                    "Chlorine and chloramines",
                    "Heavy metals (lead, arsenic, mercury)",
                    "Fluoride",
                    "Sediment and particulates",
                    "VOCs and pharmaceuticals",
                    "Bacteria and micro-organisms",
                  ],
                },
              ].map((section) => (
                <div
                  key={section.title}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(27,58,107,0.1)",
                    padding: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      color: "var(--color-navy)",
                      marginBottom: "1rem",
                    }}
                  >
                    {section.title}
                  </div>
                  {section.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        gap: "0.625rem",
                        alignItems: "center",
                        padding: "0.5rem 0",
                        borderBottom: "1px solid rgba(27,58,107,0.07)",
                        fontSize: "0.9375rem",
                        color: "rgba(27,58,107,0.78)",
                      }}
                    >
                      <span
                        style={{ color: "var(--color-teal)", fontWeight: 700 }}
                      >
                        +
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "2rem",
            }}
          >
            Best Suited For
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { name: "Hotels & Resorts", note: "Guest rooms, kitchens, spas" },
              { name: "Medical Facilities", note: "Clinical and patient water quality" },
              {
                name: "Multi-Tenant Office Buildings",
                note: "Common areas and individual suites",
              },
              { name: "Schools & Universities", note: "Drinking fountains, cafeterias, labs" },
              {
                name: "Senior Living Facilities",
                note: "Resident hydration and kitchen quality",
              },
              {
                name: "Large Restaurants",
                note: "Kitchen, bar, and guest table water",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "var(--color-cream)",
                  padding: "1.5rem",
                  borderTop: "3px solid var(--color-navy)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(27,58,107,0.6)",
                  }}
                >
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "3.5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
              marginBottom: "1rem",
            }}
          >
            Start with a Free Facility Assessment
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.82)",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}
          >
            We assess your building size, water quality, and usage before specifying anything. Pricing is based on your actual facility, not a catalog.
          </p>
          <Link
            href="/consultation"
            style={{
              display: "inline-block",
              background: "var(--color-teal)",
              color: "#fff",
              padding: "0.875rem 2.25rem",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Request My Facility Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
