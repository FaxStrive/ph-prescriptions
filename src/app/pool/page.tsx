import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pool and Spa Water — Advanced Filtration Beyond Chlorine | pH Prescription",
  description:
    "Advanced pool and spa water treatment systems. Reduce chlorine demand 25-40% while improving water clarity and guest comfort. Integrates with existing pool circulation systems.",
};

const PROBLEMS = [
  "Conventional pool treatment relies on chlorine concentrations high enough to cause eye irritation, skin dryness, and respiratory discomfort for swimmers",
  "Chlorine combined with organic matter produces chloramine and disinfection byproducts (DBPs) that are difficult to eliminate with shock treatment alone",
  "Hard water causes scale buildup on pool walls, tile lines, equipment surfaces, and filter media — shortening equipment life and requiring costly descaling",
  "Saltwater pools still generate chlorine through electrolysis and face the same DBP challenges, with added corrosion risk from elevated salinity",
];

const WHY_FAILS = [
  "Standard cartridge and sand filters remove particulates but do not address dissolved chemicals, chloramine, or hardness minerals",
  "Chemical shock treatment temporarily addresses chloramine but introduces additional chemical load and requires 24-48 hours of pool downtime",
  "UV-only systems require chlorine backup and do not address mineral scale or chemical byproducts in the water column",
  "Ion exchange softeners designed for drinking water are not rated for pool volumes or continuous high-flow applications",
];

const SOLUTIONS = [
  {
    heading: "KDF and Catalytic Carbon Filtration",
    body: "KDF media reduces chloramine, bacteria, algae, and heavy metals through an electrolytic reaction. Catalytic carbon handles chlorine, VOCs, and DBPs. Together they reduce chemical demand by 25-40%, lowering operating costs while improving water clarity.",
  },
  {
    heading: "QuadVortex Mineral Restructuring",
    body: "Our QuadVortex vortex system micro-clusters water molecules and neutralizes scale-forming minerals without chemicals or salt. Water feels softer to swimmers, reduces skin and eye irritation, and prevents scale deposition on pool surfaces and equipment.",
  },
  {
    heading: "Integration with Existing Circulation Systems",
    body: "Our pool treatment systems are designed to integrate inline with existing pump and filter infrastructure. No pool resurfacing, no plumbing overhaul. Installation typically completes in a single service visit.",
  },
  {
    heading: "Commercial Pool and Spa Configurations",
    body: "From residential pools to hotel pools, aquatic centers, and therapeutic spa pools, we configure systems to match flow rate, pool volume, bather load, and local regulatory requirements. Lease and finance options available for commercial installations.",
  },
];

const WHO_FOR = [
  "Residential backyard pools and spas",
  "Hotel and resort pool facilities",
  "Aquatic and athletic centers",
  "Physical therapy and hydrotherapy pools",
  "Community and municipal recreation centers",
  "Luxury spa and wellness facilities",
  "Children's splash pads and water features",
];

const FAQS = [
  {
    q: "Will your system replace chlorine entirely?",
    a: "Our system significantly reduces the amount of chlorine required to maintain safe pool water — typically 25-40% less. Most pool operators and regulatory authorities require a minimum residual chlorine level for bather safety, so we reduce chemical demand rather than eliminate it entirely. The result is water that is gentler on skin and eyes with fewer disinfection byproducts.",
  },
  {
    q: "How does your system integrate with my existing pool equipment?",
    a: "Our systems are designed to fit inline on the return line from your existing filter, before the water re-enters the pool. No structural changes to the pool itself are required. Most residential installations complete in a few hours. Commercial installations are assessed individually for flow rate and plumbing configuration.",
  },
  {
    q: "What is the maintenance requirement after installation?",
    a: "KDF and catalytic carbon media typically last 3-5 years depending on pool volume, bather load, and source water quality. Our team will assess your system and provide a maintenance schedule at installation. Filter media replenishment is available through our Replenishment Program.",
  },
];

export default function PoolPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pool and Spa Water Treatment Systems",
    description:
      "Advanced pool and spa water treatment. Reduces chlorine demand 25-40% while improving water clarity and guest comfort.",
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
    serviceType: "Pool Water Treatment",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Pool and Spa
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
            Pool and Spa Water — Advanced Filtration Beyond Chlorine
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "2rem" }}>
            Reduce chlorine demand by 25-40%, eliminate scale and disinfection byproducts, and deliver water your swimmers and guests actually want to be in.
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
              Request a Pool Consultation
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

      {/* Trust bar */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "2rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {["WQA Certified", "Made in USA", "Founder with 40+ Years in Water Treatment", "Residential and Commercial", "Integrates with Existing Equipment"].map((item) => (
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
                <span style={{ width: "4px", height: "4px", background: "var(--color-teal)", display: "inline-block", flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            The Problem
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            What Conventional Pool Chemistry Leaves Behind
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {PROBLEMS.map((p) => (
              <div key={p} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem 1.25rem", background: "#fff" }}>
                <span style={{ color: "var(--color-teal)", fontWeight: 700, flexShrink: 0, fontSize: "1.125rem", lineHeight: 1 }}>+</span>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9375rem", margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Standard Filtration Fails */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Why Standard Filtration Fails
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Standard Pool Filters Address Particulates, Not Chemistry
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {WHY_FAILS.map((item) => (
              <div key={item} style={{ background: "var(--color-surface)", padding: "1.25rem", borderLeft: "3px solid var(--color-navy)" }}>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9375rem", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            The Solution
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--color-navy)", marginBottom: "3rem", letterSpacing: "-0.02em", textAlign: "center" }}>
            How pH Prescription Solves It
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2rem" }}>
            {SOLUTIONS.map((s) => (
              <div key={s.heading} style={{ background: "#fff", padding: "2rem", borderTop: "4px solid var(--color-navy)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", color: "var(--color-navy)", marginBottom: "0.875rem", letterSpacing: "-0.01em" }}>
                  {s.heading}
                </h3>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, fontSize: "0.9375rem" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Who This Is For
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Pool and Spa Environments We Serve
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {WHO_FOR.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1rem", background: "var(--color-surface)" }}>
                <span style={{ color: "var(--color-teal)", fontWeight: 700, flexShrink: 0 }}>+</span>
                <span style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-cream)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {FAQS.map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--color-border-soft)" }}>
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
                  {faq.q}
                  <span aria-hidden="true" style={{ flexShrink: 0, color: "var(--color-teal)", fontSize: "1.25rem", fontFamily: "var(--font-sans)" }}>+</span>
                </summary>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, paddingBottom: "1.5rem", fontSize: "0.9375rem" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "620px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "0.75rem", letterSpacing: "-0.02em", color: "#fff" }}>
            Get a Pool Water Assessment
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: "2rem" }}>
            We assess your pool volume, flow rate, source water, and bather load and recommend a system sized for your exact application. Residential and commercial. Lease and finance options available.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a
              href={`tel:${BUSINESS.phone}`}
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
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/consultation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#fff",
                padding: "0.9375rem 1.5rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
