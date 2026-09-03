import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Residential Drinking Water Systems | pH Prescription",
  description: "Under-sink reverse osmosis and QuadVortex drinking water systems. Removes up to 99% of contaminants, adds alkalinity, remineralizes, and infuses molecular hydrogen. From $985.",
};

export default function DrinkingSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Drinking Water"
        titleAccent="Systems"
        subhead="Doctor-recommended under-sink systems that filter, alkalize, remineralize, and infuse molecular hydrogen. Non-electric. Lifetime warranty with licensed plumber installation."
        image="/images/hero/drinking-water-hero.jpg"
        imageAlt="Glass pitcher and cup of purified water on a kitchen counter with a reverse osmosis system in the background"
        ctas={[
          { label: "Get My Free Analysis", href: "/consultation", variant: "white" },
          { label: `Call ${BUSINESS.phone}`, href: `tel:${BUSINESS.phone}`, variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "start" }}>
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
              <div style={{ background: "#fff", color: "var(--color-ink)", padding: "2rem" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", marginBottom: "1rem" }}>Why These Systems?</h3>
                {["Non-electric - no power required", "Removes up to 99% of contaminants", "Alkalizes to pH 8.0-9.5", "Re-mineralizes with essential trace minerals", "Infuses molecular hydrogen (H2)", "WQA Certified, Made in USA", "Lifetime warranty with licensed plumber install", "Fits under standard kitchen sink"].map((p) => (
                  <div key={p} style={{ display: "flex", gap: "0.625rem", padding: "0.5rem 0", borderBottom: "1px solid var(--color-border-soft)", fontSize: "0.875rem", color: "var(--color-ink-soft)" }}>
                    <span style={{ color: "var(--color-teal)" }}>+</span> {p}
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--color-surface)", padding: "1.75rem" }}>
                <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.75rem" }}>Schedule a Free Consultation</div>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: "1.25rem" }}>We review your water quality with you and recommend the right system with no obligation.</p>
                <Link href="/consultation" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>Get My Free Analysis</Link>
                <div style={{ textAlign: "center", marginTop: "0.75rem" }}>
                  <a href={`tel:${BUSINESS.phone}`} style={{ color: "var(--color-teal)", textDecoration: "none", fontSize: "0.875rem" }}>{BUSINESS.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}>
              <Image
                src="/images/installations/bathroom-install-progress.jpg"
                alt="Technician installing a pH Prescription multi-stage drinking system inside an under-sink cabinet"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-teal)", display: "block", marginBottom: "1rem" }}>
                A Real Install
              </span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
                Installed Under Your Sink, Out of Sight
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Both systems tuck into a standard kitchen cabinet and connect to your existing plumbing - no electricity, no countertop clutter. A licensed plumber handles the entire install, which is what lets us back every system with a lifetime warranty.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                From first glass onward, your water is filtered, alkalized to pH 8.0-9.5, remineralized, and infused with molecular hydrogen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/svc-service-couple-drinking.jpg"
        imageAlt="Parents and their young daughter raising glasses of water together on the couch"
        statement="Up to 99% of contaminants removed,"
        statementAccent="every single glass"
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            What Better Drinking Water Looks Like
          </h2>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/lifestyle2/pa-enjoy-pure-water.jpg",
                imageAlt: "Cupped hands catching a stream of clean water in the sunlight",
                title: "Clean at the Source",
                body: "QuadVortex reverse osmosis strips heavy metals, chlorine, fluoride, and micro-organisms before the water reaches your glass.",
              },
              {
                image: "/images/lifestyle2/svc-service-kitchen-tap.jpg",
                imageAlt: "Hand filling a glass from a modern black kitchen faucet beside fresh produce",
                title: "Right at Your Tap",
                body: "Alkaline, remineralized water on demand for drinking, cooking, coffee, and rinsing produce.",
              },
              {
                image: "/images/hero/faq-hero.jpg",
                imageAlt: "Woman filling a glass of water at the kitchen sink and smiling",
                title: "Water You Actually Drink",
                body: "When water tastes clean, families drink more of it. H2-infused water adds antioxidant support with every pour.",
              },
            ]}
          />
        </div>
      </section>
    </>
  );
}
