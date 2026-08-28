import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Business Drinking Water Systems | pH Prescription",
  description:
    "Commercial under-counter and point-of-use drinking water systems. QuadVortex filtration, alkaline, remineralized, hydrogen-infused. WQA Certified. Lifetime warranty.",
};

const APPLICATIONS = [
  {
    name: "Office Break Rooms",
    desc: "Replace bottled water programs with inline filtered water at the sink. Saves thousands annually for mid-size offices.",
  },
  {
    name: "Medical & Dental Offices",
    desc: "Ultra-pure water for patient hydration and clinical applications. Doctor-recommended systems trusted by physicians nationwide.",
  },
  {
    name: "Gyms & Fitness Centers",
    desc: "High-volume under-counter systems for member hydration stations. Alkaline water supports faster recovery.",
  },
  {
    name: "Corporate Cafeterias",
    desc: "High-capacity systems for food service, beverage stations, and employee dining. Sized for your daily volume.",
  },
];

export default function BusinessDrinkingSystemsPage() {
  return (
    <>
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
            Business / Drinking Systems
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Commercial Drinking Water Systems
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            The same doctor-recommended QuadVortex technology from our residential line, scaled for commercial usage. Under-counter, point-of-use, and high-volume configurations. WQA Certified. Lifetime warranty. All 50 states.
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
              Request Commercial Quote
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

      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "0.75rem",
            }}
          >
            What Every System Delivers
          </h2>
          <p
            style={{
              color: "rgba(27,58,107,0.65)",
              marginBottom: "2.5rem",
              maxWidth: "560px",
            }}
          >
            Commercial configurations of our residential technology - same four-stage process, higher daily output.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                step: "01",
                name: "Reverse Osmosis",
                desc: "Removes up to 99% of contaminants including heavy metals, chlorine, fluoride, and micro-organisms.",
              },
              {
                step: "02",
                name: "Alkalizing",
                desc: "Raises pH to 8.5-9.5 through an alkalizing cartridge - no electricity required.",
              },
              {
                step: "03",
                name: "Remineralization",
                desc: "Adds back essential minerals stripped by RO: calcium, magnesium, potassium.",
              },
              {
                step: "04",
                name: "Hydrogen Infusion",
                desc: "QuadVortex molecular hydrogen infusion. Antioxidant-rich water at every pour.",
              },
            ].map((s) => (
              <div
                key={s.step}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(27,58,107,0.1)",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontFamily: "var(--font-display)",
                    color: "var(--color-teal)",
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.step}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {s.name}
                </div>
                <p
                  style={{
                    color: "rgba(27,58,107,0.7)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
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
              marginBottom: "2.5rem",
            }}
          >
            Commercial Applications
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {APPLICATIONS.map((a) => (
              <div
                key={a.name}
                style={{
                  borderTop: "3px solid var(--color-teal)",
                  paddingTop: "1.25rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {a.name}
                </h3>
                <p
                  style={{
                    color: "rgba(27,58,107,0.7)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
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
            Free Water Analysis for Your Facility
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              marginBottom: "1.75rem",
            }}
          >
            We test first, then recommend. No overselling. Licensed installation. Lifetime warranty. Nationwide.
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
            Request My Commercial Quote
          </Link>
        </div>
      </section>
    </>
  );
}
