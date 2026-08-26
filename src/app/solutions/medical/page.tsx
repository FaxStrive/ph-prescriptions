import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Medical-Grade Water Solutions | PH Prescriptions",
  description:
    "Ultra-pure water systems for dialysis centers, dental practices, medical imaging facilities, and sterile-prep environments. WQA-certified. Serving medical facilities across all 50 states.",
};

const USE_CASES = [
  {
    label: "Dialysis Centers",
    heading: "Dialysis Water Treatment",
    body: "Dialysis requires water purity levels far exceeding standard municipal supply. Our systems deliver ultra-low contaminant water with multi-stage filtration that removes heavy metals, chloramines, bacteria, and endotoxins. Consistent purity on every treatment cycle.",
    specs: [
      "Multi-stage reverse osmosis with re-mineralization",
      "KDF-55 heavy metal and chloramine removal",
      "UV sterilization option for bacterial control",
      "NSF-rated filtration media throughout",
    ],
  },
  {
    label: "Dental Practices",
    heading: "Dental Office Water Systems",
    body: "Dental unit waterlines require measurable microbial control. Our systems provide purified, re-mineralized water for patient rinsing, handpiece cooling, and procedure prep. Consistently clean water protects your patients and meets CDC waterline quality guidelines.",
    specs: [
      "Meets CDC dental waterline quality benchmarks",
      "Chloramine and heavy metal elimination",
      "Molecular hydrogen infusion option available",
      "Under-counter and point-of-use configurations",
    ],
  },
  {
    label: "Medical Imaging",
    heading: "Imaging and Lab Water Supply",
    body: "Medical imaging equipment and laboratory processes demand consistent water purity to avoid mineral scale, contamination, and equipment damage. Our systems protect imaging equipment while delivering reliably pure process water.",
    specs: [
      "Scale-free mineral reduction for equipment longevity",
      "Consistent TDS output with monitoring options",
      "Whole-facility or point-of-use configurations",
      "Preventive maintenance plans available",
    ],
  },
  {
    label: "Sterile Prep",
    heading: "Sterile Preparation Environments",
    body: "Central sterile supply and surgical prep require water free of particulates, bacteria, and chemical contaminants. Our 4-phase QuadVortex filtration system produces water suitable for instrument washing, autoclaving, and clean-room support.",
    specs: [
      "4-phase QuadVortex filtration (KDF-55, Catalytic Carbon, Tourmaline, H2)",
      "Sub-micron particulate removal",
      "UV enhancement for pathogen control",
      "Compatible with sterilization and autoclave supply",
    ],
  },
];

export default function MedicalPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical-Grade Water Systems",
    description:
      "Ultra-pure water filtration systems designed for dialysis centers, dental practices, medical imaging facilities, and sterile-prep environments.",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Medical Water Solutions",
      itemListElement: USE_CASES.map((uc) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: uc.heading,
        },
      })),
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
            Solutions / Medical
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
            Medical-Grade Water for Clinical Environments
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            Dialysis centers, dental practices, imaging facilities, and sterile-prep rooms all require water that municipal supply cannot reliably deliver. PH Prescriptions builds systems to match each clinical application.
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
              Request My Facility Consultation
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
              gap: "2.5rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[
              "WQA Certified",
              "Made in USA",
              "40+ Years in Water Systems",
              "Serving All 50 States",
              "Doctor-Recommended Technology",
            ].map((item) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
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
            Clinical Applications
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
            Built for the Demands of Medical Practice
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "1.0625rem",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            Each use case has distinct purity requirements. We engineer to the application, not to a general spec.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2rem",
            }}
          >
            {USE_CASES.map((uc) => (
              <div
                key={uc.label}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderTop: "4px solid var(--color-navy)",
                }}
              >
                <div
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--color-teal)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "0.625rem",
                    fontWeight: 600,
                  }}
                >
                  {uc.label}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.3125rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.875rem",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {uc.heading}
                </h3>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  {uc.body}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {uc.specs.map((spec) => (
                    <li
                      key={spec}
                      style={{
                        display: "flex",
                        gap: "0.6rem",
                        fontSize: "0.875rem",
                        color: "var(--color-ink-soft)",
                        lineHeight: 1.5,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--color-teal)",
                          flexShrink: 0,
                          marginTop: "0.15em",
                          fontWeight: 700,
                        }}
                      >
                        +
                      </span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Bridge */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
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
                The Science
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.875rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                4-Phase QuadVortex Filtration
              </h2>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                Every medical application draws from the same foundation: PH Prescriptions' proprietary 4-phase filtration process. KDF-55 handles heavy metals and chloramines. Catalytic and Brimac carbon address VOCs, fluoride, and radioactive isotopes. Tourmaline and garnet gemstones restructure the water at a mineral level. Finally, molecular hydrogen infusion delivers cell-permeable antioxidant benefits.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                For medical applications, we layer additional stages as the application requires: UV sterilization, sub-micron filtration, and deionization options for the most demanding environments.
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
                { num: "01", label: "KDF-55", desc: "Heavy metals, chloramines, bacteria" },
                { num: "02", label: "Catalytic Carbon", desc: "VOCs, fluoride, isotopes" },
                { num: "03", label: "Tourmaline & Garnet", desc: "Mineral restructuring" },
                { num: "04", label: "Molecular Hydrogen", desc: "Cellular antioxidant delivery" },
              ].map((phase) => (
                <div
                  key={phase.num}
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    padding: "1rem",
                    background: "var(--color-surface)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      color: "var(--color-teal)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      paddingTop: "0.15em",
                      flexShrink: 0,
                    }}
                  >
                    {phase.num}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1rem",
                        color: "var(--color-navy)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {phase.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8375rem",
                        color: "var(--color-ink-soft)",
                      }}
                    >
                      {phase.desc}
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href="/technology"
                style={{
                  color: "var(--color-teal)",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  marginTop: "0.5rem",
                }}
              >
                Full technology overview &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor endorsements */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
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
            The Technology is Physician-Reviewed
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "3rem",
              lineHeight: 1.75,
            }}
          >
            Seven physicians and researchers have reviewed and endorsed the science behind PH Prescriptions systems. Our medical clients are not taking our word alone.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              { name: "Dr. Debra DeMarta, MD, FACS", specialty: "Board-Certified Colorectal Surgeon" },
              { name: "Dr. Jerry Tennant, MD", specialty: "Author, Healing is Voltage" },
              { name: "Dr. Nathan Bryan, PhD", specialty: "Molecular Medicine Researcher" },
              { name: "Dr. Mark A. Breiner, DDS", specialty: "Author, Whole Body Dentistry" },
            ].map((doc) => (
              <div
                key={doc.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1rem 1.25rem",
                  background: "#fff",
                  borderLeft: "3px solid var(--color-navy)",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                  }}
                >
                  {doc.name}
                </span>
                <span
                  style={{
                    fontSize: "0.8375rem",
                    color: "var(--color-ink-mute)",
                  }}
                >
                  {doc.specialty}
                </span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              href="/experts"
              style={{
                color: "var(--color-teal)",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              See all expert endorsements &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "5rem 0",
        }}
      >
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
              color: "#fff",
            }}
          >
            Ready to Discuss Your Facility?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Every medical facility has different purity requirements, flow rates, and installation constraints. We assess your environment and configure a system that meets it. Lease and finance options available.
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
