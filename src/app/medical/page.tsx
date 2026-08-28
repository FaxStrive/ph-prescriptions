import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Medical-Grade Water - Precision Filtration for Clinical Excellence | pH Prescription",
  description:
    "Medical-grade water systems for dialysis centers, dental practices, medical imaging facilities, and sterile-prep environments. WQA-certified, NSF/ANSI 58 and 42. Serving medical facilities across all 50 states.",
};

const PROBLEMS = [
  "Municipal water contains chloramine, chlorine byproducts, heavy metals, and pharmaceutical traces that municipal treatment does not fully remove",
  "Standard commercial filtration systems are not rated for clinical-grade output and fail to meet AAMI or FDA water purity requirements",
  "Hard water scale damages equipment - autoclaves, dental chairs, imaging systems - shortening service life and creating unplanned downtime",
  "Inconsistent water purity creates variable outcomes in procedures where contamination control is not optional",
];

const WHY_FAILS = [
  "Single-stage carbon or sediment filters do not address chloramine, heavy metals, bacteria, or endotoxins at clinical levels",
  "Ion exchange softeners replace hardness minerals with sodium - which introduces a different contamination profile for medical use",
  "Reverse osmosis alone does not re-mineralize or disinfect - and membranes foul quickly without upstream protection",
  "Most systems are designed for residential comfort, not for clinical-grade purity or continuous high-volume flow",
];

const SOLUTIONS = [
  {
    heading: "Multi-Stage Reverse Osmosis with Re-Mineralization",
    body: "Our medical-grade RO systems combine sediment pre-filtration, KDF-55 heavy metal and chloramine reduction, catalytic carbon for VOCs and fluoride, and a high-rejection RO membrane. Re-mineralization restores the mineral balance critical for dialysis and instrument compatibility.",
  },
  {
    heading: "UV Sterilization Integration",
    body: "Post-filtration UV sterilization eliminates bacteria, E-coli, viruses, cysts, and Cryptosporidium. 9,000-hour bulb life with stainless steel chambers. Available in flow rates from 1 to 15 gallons per minute to match facility demand.",
  },
  {
    heading: "Total Home Point-of-Entry for Whole-Facility Coverage",
    body: "Large dialysis centers, imaging suites, and multi-chair dental offices benefit from point-of-entry whole-facility treatment. One system protects every water outlet - procedure rooms, sterilization, lab sinks, patient water, and HVAC loops.",
  },
  {
    heading: "Custom System Sizing and Configuration",
    body: "Every facility has different square footage, flow rates, contaminant profiles, and regulatory requirements. We assess your environment, test your water, and configure a system that meets it. No off-the-shelf compromise.",
  },
];

const WHO_FOR = [
  "Dialysis and hemodialysis centers",
  "Dental practices - general and specialty",
  "Medical imaging facilities (MRI, CT, X-ray)",
  "Central sterile supply departments",
  "Surgical and procedure prep environments",
  "Compounding pharmacies",
  "Veterinary clinics and animal hospitals",
  "Medical spas and aesthetic treatment centers",
];

const FAQS = [
  {
    q: "Do your systems meet AAMI water quality standards for dialysis?",
    a: "Each installation is assessed against the facility's specific compliance requirements, and we provide documentation for regulatory review.",
  },
  {
    q: "What flow rates are available for medical applications?",
    a: "Our medical systems range from 0.5 gallons per minute for single point-of-use applications (dental chair, lab sink) up to 15 gallons per minute for facility-wide installations. Multi-unit configurations are available for high-demand environments.",
  },
  {
    q: "Do you offer lease or financing for medical facility installations?",
    a: "Yes. We offer lease and finance options for medical facility installations. Many practices choose to lease to keep capital available and to ensure regular maintenance and filter replacement are managed under one agreement. Contact us for a facility quote.",
  },
];

export default function MedicalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical-Grade Water Systems",
    description:
      "Precision water filtration for dialysis centers, dental practices, medical imaging facilities, and sterile-prep environments.",
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
    serviceType: "Medical Water Treatment",
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
            Medical
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
            Precision Water for Clinical Excellence
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "2rem" }}>
            Medical facilities depend on water that meets or exceeds FDA and state standards for microbial purity, mineral balance, and chemical contamination.
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
              Request a Facility Consultation
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
            {["WQA Certified", "Made in USA", "40+ Years in Water Systems", "Serving All 50 States", "Doctor-Recommended Technology"].map((item) => (
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
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              color: "var(--color-navy)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            What Standard Municipal Water Delivers to Medical Facilities
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
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              color: "var(--color-navy)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Off-the-Shelf Filters Are Not Built for Clinical Demands
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {WHY_FAILS.map((item) => (
              <div
                key={item}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.25rem",
                  borderLeft: "3px solid var(--color-navy)",
                }}
              >
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9375rem", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How pH Prescription Solves It */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            The Solution
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--color-navy)",
              marginBottom: "3rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
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
            Medical and Clinical Environments We Serve
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {WHO_FOR.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.875rem 1rem",
                  background: "var(--color-surface)",
                }}
              >
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
            Ready to Discuss Your Facility?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Every medical facility has different purity requirements, flow rates, and installation constraints. We assess your environment and configure a system that meets it. Lease and finance options available.
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
