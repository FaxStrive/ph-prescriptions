"use client";

import Link from "next/link";

const SERVICES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 3L4 12v17h24V12L16 3z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <rect x="11" y="20" width="10" height="9" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
      </svg>
    ),
    title: "Residential",
    description: "Whole-home and drinking systems for families",
    href: "/residential",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <rect x="3" y="8" width="26" height="21" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <path d="M3 14h26M11 8V3h10v5" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <rect x="13" y="18" width="6" height="7" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Business",
    description: "Commercial-grade filtration for any industry",
    href: "/business",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M16 4C10.477 4 6 8.477 6 14c0 4.418 2.686 8.218 6.5 9.83V27h7v-3.17C23.314 22.218 26 18.418 26 14c0-5.523-4.477-10-10-10z" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 27h8M13 30h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Medical",
    description: "Dialysis-grade purity for clinical environments",
    href: "/solutions/medical",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 22c0-6 6-14 12-14s12 8 12 14" stroke="currentColor" strokeWidth="1.75" />
        <path d="M4 22h24" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M10 22V13M22 22v-9M16 22V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Hospitality",
    description: "Ice, beverage and kitchen water solutions",
    href: "/solutions/restaurant-hospitality",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <ellipse cx="16" cy="20" rx="11" ry="7" stroke="currentColor" strokeWidth="1.75" />
        <path d="M16 13c0-5 4-9 0-9s-4 4 0 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 22c-1.5 1-2 2.5-1 3.5s3 .5 4.5-.5M25 22c1.5 1 2 2.5 1 3.5s-3 .5-4.5-.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </svg>
    ),
    title: "Pool",
    description: "Mineral-balanced, chlorine-free pool water",
    href: "/pool",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path d="M4 20l5-10h14l5 10v5H4v-5z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        <path d="M9 10V8a7 7 0 0114 0v2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22" cy="24" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Marine / RV",
    description: "Compact systems for boats and travel",
    href: "/marine",
  },
];

export default function ServiceSelector() {
  return (
    <section style={{ background: "#fff", padding: "clamp(4rem, 8vw, 6rem) 0" }}>
      <div className="max-content">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              marginBottom: "0.75rem",
            }}
          >
            Every Environment
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: "0 0 1rem",
            }}
          >
            Find Your Water Solution
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              fontSize: "1.0625rem",
              lineHeight: 1.65,
              maxWidth: "52ch",
              margin: "0 auto",
            }}
          >
            pH Prescription serves every environment - from home to hospital.
          </p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: "1px",
            background: "var(--color-border-soft)",
            border: "1px solid var(--color-border-soft)",
          }}
        >
          {SERVICES.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "2rem",
                background: "#fff",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "var(--color-surface)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#fff";
              }}
            >
              <span style={{ color: "var(--color-teal)" }}>{svc.icon}</span>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "1.25rem",
                    letterSpacing: "-0.01em",
                    color: "var(--color-ink)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {svc.title}
                </span>
                <span
                  style={{
                    display: "block",
                    fontSize: "0.875rem",
                    lineHeight: 1.5,
                    color: "var(--color-ink-soft)",
                  }}
                >
                  {svc.description}
                </span>
              </div>
              <span
                style={{
                  marginTop: "auto",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                }}
              >
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
