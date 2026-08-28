import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Business Water Systems | pH Prescription",
  description:
    "Commercial water treatment for restaurants, offices, and facilities. WQA Certified systems with lifetime warranties. Serving all 50 states.",
};

const SECTIONS = [
  {
    title: "Restaurant & Hospitality",
    desc: "Protect equipment, enhance taste, and give guests the purest water. From ice machines to espresso bars - pH Prescription has the commercial solution.",
    href: "/business/restaurant",
    from: "By consultation",
  },
  {
    title: "Water Coolers",
    desc: "Paddle-touch hot/cold commercial coolers with inline filtration. Alkaline, remineralized, hydrogen-infused water at every workstation.",
    href: "/business/coolers",
    from: "From $2,613.60",
  },
  {
    title: "Drinking Systems",
    desc: "Under-counter and point-of-use commercial drinking systems - the same doctor-recommended technology, scaled for your business.",
    href: "/business/drinking-systems",
    from: "By consultation",
  },
  {
    title: "Total Home/Business",
    desc: "Whole-facility restructured water from every tap and fixture. Our Premier system transforms the entire water supply of your building.",
    href: "/business/total",
    from: "By consultation",
  },
];

const INDUSTRIES = [
  { name: "Restaurants & Cafes", icon: "☕" },
  { name: "Hotels & Resorts", icon: "🏨" },
  { name: "Medical Offices", icon: "🏥" },
  { name: "Spas & Wellness", icon: "🛁" },
  { name: "Corporate Offices", icon: "🏢" },
  { name: "Gyms & Fitness", icon: "💪" },
];

export default function BusinessPage() {
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
            For Your Business
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Commercial Water Treatment
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            WQA Certified systems built for restaurants, medical offices, hotels, and any facility where water quality directly affects your guests, equipment, and reputation. Same lifetime warranty. Same proprietary QuadVortex technology.
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
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
            >
              Request Business Quote
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

      {/* Solutions grid */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2.125rem)",
              color: "var(--color-navy)",
              marginBottom: "0.75rem",
            }}
          >
            Commercial Solutions
          </h2>
          <p
            style={{
              color: "rgba(27,58,107,0.65)",
              marginBottom: "2.5rem",
              maxWidth: "560px",
            }}
          >
            Every system scales to your facility. Free water analysis included with every business quote.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {SECTIONS.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(27,58,107,0.1)",
                    padding: "2rem",
                    height: "100%",
                    transition: "box-shadow 0.2s",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1875rem",
                      color: "var(--color-navy)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(27,58,107,0.72)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                    }}
                  >
                    {s.desc}
                  </p>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--color-teal)",
                      fontWeight: 600,
                    }}
                  >
                    {s.from}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
            Industries We Serve
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.name}
                style={{
                  border: "1px solid rgba(27,58,107,0.1)",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>
                  {ind.icon}
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-navy)",
                    fontWeight: 600,
                  }}
                >
                  {ind.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why business trust us */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "4rem 0",
        }}
      >
        <div className="container" style={{ maxWidth: "800px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              marginBottom: "2rem",
            }}
          >
            Why Businesses Choose pH Prescription
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
                title: "Free Water Analysis",
                body: "We test your current water before recommending any system - no guesswork, no overselling.",
              },
              {
                title: "Nationwide Service",
                body: "Serving all 50 states. Our network of licensed installers means you get professional installation anywhere.",
              },
              {
                title: "Lifetime Warranty",
                body: "Every commercial system includes our lifetime warranty with licensed plumber installation.",
              },
              {
                title: "20+ Years Commercial Experience",
                body: "Founded in 2005 by Leo Szymborski, a third-generation plumber with 40+ years of water expertise.",
              },
            ].map((item) => (
              <div key={item.title}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    marginBottom: "0.5rem",
                    color: "var(--color-teal)",
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
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
            Get a Free Business Water Analysis
          </h2>
          <p style={{ color: "rgba(27,58,107,0.7)", marginBottom: "1.5rem" }}>
            Tell us your facility type and usage. We will recommend the right system at the right scale - and back it with a lifetime warranty.
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
            Request My Business Quote
          </Link>
        </div>
      </section>
    </>
  );
}
