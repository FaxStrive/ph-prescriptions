import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Droplets, Zap, Shield } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "QuadVortex Technology | How Our Water Systems Work",
  description: "Learn how PH Prescriptions' proprietary QuadVortex technology removes up to 99% of contaminants, restores alkalinity, and infuses molecular hydrogen into every drop.",
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "720px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Proprietary Technology
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            QuadVortex<sup style={{ fontSize: "0.5em" }}>&#174;</sup> Water Science
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            Our proprietary QuadVortex technology goes beyond standard filtration. It removes up to 99% of contaminants, restructures water at the molecular level, restores alkaline pH, re-mineralizes, and infuses molecular hydrogen - the most powerful antioxidant known to science.
          </p>
        </div>
      </section>

      {/* The 4 stages */}
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "var(--color-navy)", textAlign: "center", marginBottom: "3rem" }}>
            Four Stages of Water Transformation
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              {
                icon: <Shield size={32} />,
                num: "01",
                title: "Finely Filtered",
                desc: "Multi-stage filtration removes bacteria, heavy metals, chlorine, chloramine, fluoride, pharmaceuticals, micro-plastics, and up to 316 known contaminants.",
              },
              {
                icon: <Zap size={32} />,
                num: "02",
                title: "Alkaline Restructured",
                desc: "Water is restructured and brought to an optimal alkaline pH (8.0-9.5), matching the pH of healthy human blood and supporting cellular hydration.",
              },
              {
                icon: <Droplets size={32} />,
                num: "03",
                title: "Re-Mineralized",
                desc: "Essential trace minerals - calcium, magnesium, potassium - are reintroduced in bioavailable form after contaminant removal restores true mineral balance.",
              },
              {
                icon: <CheckCircle2 size={32} />,
                num: "04",
                title: "Hydrogen Infused",
                desc: "Molecular hydrogen (H2) is infused at therapeutic concentrations. H2 is the smallest and most cell-permeable antioxidant, supporting mitochondrial health.",
              },
            ].map((stage) => (
              <div key={stage.num} style={{ background: "#fff", padding: "2rem", borderTop: "4px solid var(--color-teal)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "2.5rem", color: "var(--color-border-strong)", lineHeight: 1 }}>{stage.num}</span>
                  <span style={{ color: "var(--color-teal)" }}>{stage.icon}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", color: "var(--color-navy)", marginBottom: "0.75rem" }}>{stage.title}</h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.7 }}>{stage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section style={{ background: "#fff", color: "var(--color-ink)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", marginBottom: "2.5rem", textAlign: "center" }}>
            What Makes PH Prescriptions Different
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              "Non-electric design - no power required, fits existing plumbing",
              "WQA (Water Quality Association) Certified",
              "Made in USA at our 10,000 sq ft Palm City, FL facility",
              "Lifetime warranty with licensed plumber installation",
              "Systems available for residential, commercial, marine, and RV use",
              "Anti-microbial UV enhancement options available",
              "Proprietary QuadVortex vortex restructuring technology",
              "Founded 2005 by Leo Szymborski, 3rd-generation plumber with 40+ years experience",
            ].map((point) => (
              <div key={point} style={{ display: "flex", gap: "0.875rem", alignItems: "flex-start" }}>
                <CheckCircle2 size={18} style={{ color: "var(--color-teal)", flexShrink: 0, marginTop: "0.15rem" }} />
                <span style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.6 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-surface)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", color: "var(--color-navy)", marginBottom: "1rem" }}>
            Experience the Difference
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Schedule a free water analysis and consultation. We will test your current water and show you exactly what is in it - and what our systems can do about it.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/consultation" className="btn btn-primary">Schedule Free Water Analysis</Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
