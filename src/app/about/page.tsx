import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "About pH Prescription | Founded 2005, Palm City FL",
  description: "pH Prescription was founded in 2005 by Leo Szymborski in Palm City, FL. WQA Certified water health systems made in the USA. 40+ years experience. Serving all 50 states.",
};

export default function AboutPage() {
  return (
    <>
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Our Story</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Water Health Science<br />Since {BUSINESS.founded}
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            pH Prescription was built on a simple premise: the water you drink and bathe in profoundly affects your health. Founded by Leo Szymborski in Palm City, Florida, we have spent two decades refining the science of water and delivering it to homes and businesses across all 50 states.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "var(--color-navy)", marginBottom: "1.25rem" }}>
                Our Mission
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                pH Prescription exists to give every family and business access to water that is truly clean - not just filtered, but restructured, remineralized, and hydrogen-infused for measurable health outcomes.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                We operate from a 10,000 square foot facility in Palm City, FL, where every system is assembled, tested, and certified before it ships. Our WQA certification and Made in USA commitment are not marketing claims - they are the foundation of everything we do.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                When you purchase a pH Prescription system, you receive a lifetime warranty when installed by a licensed plumber - because we build systems meant to last.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { label: "Founded", value: BUSINESS.founded + ", Palm City FL" },
                { label: "Facility", value: "10,000 sq ft warehouse & assembly" },
                { label: "Markets", value: "All 50 states + international" },
                { label: "Certifications", value: "WQA Certified, Made in USA" },
                { label: "Warranty", value: "Lifetime (with licensed plumber install)" },
                { label: "Markets Served", value: "Residential, Commercial, Medical, Hospitality, Marine, RV" },
              ].map((item) => (
                <div key={item.label} style={{ borderLeft: "3px solid var(--color-teal)", paddingLeft: "1.25rem" }}>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-ink-mute)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.25rem" }}>{item.label}</div>
                  <div style={{ fontWeight: 600, color: "var(--color-navy)", fontSize: "0.9375rem" }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "var(--color-navy)", textAlign: "center", marginBottom: "2.5rem" }}>
            Learn More
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "About Leo Szymborski", desc: "Founder story and 40+ years in water health.", href: "/about/leo" },
              { title: "Doctor Endorsements", desc: "7+ physicians and researchers who recommend our systems.", href: "/about/doctors" },
              { title: "Community Care", desc: "How pH Prescription gives back to the community.", href: "/about/community" },
              { title: "Our Technology", desc: "How QuadVortex works and what makes it different.", href: "/technology" },
            ].map((card) => (
              <Link key={card.href} href={card.href} style={{
                display: "block", background: "#fff", padding: "1.75rem",
                border: "1px solid var(--color-border-soft)", textDecoration: "none",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)", transition: "box-shadow 0.2s",
              }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.0625rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>{card.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-ink-soft)", lineHeight: 1.65 }}>{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
