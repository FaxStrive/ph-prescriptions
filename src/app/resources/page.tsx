import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Resources | PH Prescriptions Water Systems",
  description: "White papers, hydration science, educational videos, warranty information, and support documentation for PH Prescriptions water systems.",
};

const RESOURCE_SECTIONS = [
  {
    title: "White Papers",
    description: "Technical documentation on molecular hydrogen, QuadVortex filtration methodology, water restructuring science, and mineral repletion.",
    items: [
      "Molecular Hydrogen: Peer-Reviewed Research Summary",
      "QuadVortex Technology: Filtration, Restructuring, and H2 Infusion",
      "The Case for Mineral Repletion in Modern Water Systems",
      "Alkaline pH and Cellular Health: What the Research Actually Says",
    ],
    note: "White papers are available upon request. Contact us to receive the full documentation.",
    action: { label: `Request White Papers: ${BUSINESS.email}`, href: `mailto:${BUSINESS.email}?subject=White Paper Request` },
    borderColor: "var(--color-teal)",
  },
  {
    title: "Hydration Science & Technology",
    description: "The science behind what PH Prescriptions systems do and why it matters for human health.",
    items: [
      "How molecular hydrogen reaches cells and mitochondria",
      "The four-stage QuadVortex process explained",
      "Why water source and mineral content matter for cellular uptake",
      "pH and alkalinity: the difference between chemical and mineral alkalinity",
    ],
    note: "For a deeper technical consultation, schedule a free call with our team.",
    action: { label: "Schedule Free Consultation", href: "/consultation" },
    borderColor: "var(--color-teal)",
  },
  {
    title: "Educational Videos",
    description: "Video content explaining our systems, the science, installation, and what to expect.",
    items: [
      "PH Prescriptions product overview",
      "QuadVortex technology walkthrough",
      "Installation expectations and the licensed plumber requirement",
      "Client Q&A with Leo Szymborski",
    ],
    note: "Educational videos are available on request and via our YouTube channel. Contact us for access.",
    action: { label: `Contact for Videos: ${BUSINESS.phoneTollFree}`, href: `tel:${BUSINESS.phoneTollFree}` },
    borderColor: "var(--color-gold)",
  },
  {
    title: "Warranty Information",
    description: "Every PH Prescriptions system comes with a lifetime warranty when installed by a licensed plumber.",
    items: [
      "Lifetime warranty coverage with licensed plumber installation",
      "What is covered and what voids the warranty",
      "How to register your warranty after installation",
      "Warranty service process and contact",
    ],
    note: "Read the full warranty terms before installation.",
    action: { label: "View Warranty Terms", href: "/warranty" },
    borderColor: "var(--color-gold)",
  },
  {
    title: "Support Documentation",
    description: "Installation manuals, maintenance guides, and troubleshooting support for PH Prescriptions systems.",
    items: [
      "Installation manuals (available per model)",
      "Maintenance schedules and filter replacement guides",
      "Troubleshooting common questions",
      "How to reach our technical support team",
    ],
    note: "Manuals are provided at time of purchase and are available by request.",
    action: { label: `Request Documentation: ${BUSINESS.email}`, href: `mailto:${BUSINESS.email}?subject=Support Documentation Request` },
    borderColor: "var(--color-slate)",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy) 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal-light)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Knowledge Base
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Resources
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.8,
              maxWidth: "600px",
            }}
          >
            White papers, hydration science, educational videos, warranty terms, and support documentation for PH Prescriptions clients and partners.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {RESOURCE_SECTIONS.map((section) => (
              <div
                key={section.title}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderLeft: `4px solid ${section.borderColor}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.375rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.75,
                    marginBottom: "1rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {section.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1.25rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  {section.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "var(--color-ink-soft)",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: section.borderColor, fontWeight: 700, marginTop: "0.05rem", flexShrink: 0 }}>--</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p
                    style={{
                      color: "var(--color-ink-soft)",
                      fontSize: "0.875rem",
                      fontStyle: "italic",
                      marginBottom: "1rem",
                    }}
                  >
                    {section.note}
                  </p>
                )}
                {section.action.href.startsWith("/") ? (
                  <Link
                    href={section.action.href}
                    style={{
                      color: "var(--color-teal)",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {section.action.label}
                  </Link>
                ) : (
                  <a
                    href={section.action.href}
                    style={{
                      color: "var(--color-teal)",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {section.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Cannot Find What You Need?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Our team is available by phone or email. If you need documentation, have a technical question, or are looking for something specific, call or write and we will get it to you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
              Call {BUSINESS.phoneTollFree}
            </a>
            <Link href="/contact" className="btn btn-white">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
