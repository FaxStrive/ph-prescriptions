import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Residential Drinking Water Systems | PH Prescriptions",
  description: "Under-sink reverse osmosis and QuadVortex drinking water systems. Removes up to 99% of contaminants, adds alkalinity, remineralizes, and infuses molecular hydrogen. From $985.",
};

export default function DrinkingSystemsPage() {
  return (
    <>
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Residential</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>Drinking Water Systems</h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
            Doctor-recommended under-sink systems that filter, alkalize, remineralize, and infuse molecular hydrogen. Non-electric. Lifetime warranty with licensed plumber installation.
          </p>
        </div>
      </section>
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3vw,2.125rem)", color: "var(--color-navy)", marginBottom: "1.25rem" }}>Our Drinking Systems</h2>
              {[
                { name: "Ultimate Purified Drinking System", sku: "pH-RO-1100", price: "$1,747", badge: "#1 Doctor Recommended", desc: "Flagship 4-stage system. QuadVortex reverse osmosis, alkalizing cartridge, remineralization, and H2 infusion. Installs under any sink without electricity." },
                { name: "Finely Filtered Compact Drinking System", sku: "pH-UC-700", price: "$985", badge: "Most Popular", desc: "High-performance compact filtration. Removes up to 99% of contaminants in a smaller footprint. Non-electric, fits existing plumbing." },
              ].map((p) => (
                <div key={p.sku} style={{ background: "#fff", padding: "1.75rem", marginBottom: "1.5rem", border: "1px solid var(--color-border-soft)", borderTop: "3px solid var(--color-teal)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-teal)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.badge}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", color: "var(--color-navy)", margin: "0.375rem 0 0.625rem" }}>{p.name}</h3>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-ink-mute)", marginBottom: "0.75rem" }}>SKU: {p.sku}</div>
                  <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{p.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--color-navy)", fontWeight: 700 }}>{p.price}</span>
                    <Link href="/consultation" className="btn btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>Get Quote</Link>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ background: "var(--color-navy)", color: "#fff", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "1rem" }}>Why These Systems?</h3>
                {["Non-electric - no power required", "Removes up to 99% of contaminants", "Alkalizes to pH 8.0-9.5", "Re-mineralizes with essential trace minerals", "Infuses molecular hydrogen (H2)", "WQA Certified, Made in USA", "Lifetime warranty with licensed plumber install", "Fits under standard kitchen sink"].map((p) => (
                  <div key={p} style={{ display: "flex", gap: "0.625rem", padding: "0.5rem 0", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.875rem", color: "rgba(255,255,255,0.82)" }}>
                    <span style={{ color: "var(--color-teal-light)" }}>+</span> {p}
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--color-surface)", padding: "1.75rem" }}>
                <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.75rem" }}>Schedule a Free Water Analysis</div>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>We test your water and recommend the right system with no obligation.</p>
                <Link href="/consultation" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get My Free Analysis</Link>
                <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
                  <a href={`tel:${BUSINESS.phone}`} style={{ color: "var(--color-teal)", textDecoration: "none", fontSize: "0.875rem" }}>{BUSINESS.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
