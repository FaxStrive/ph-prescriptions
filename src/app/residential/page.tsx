import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Residential Water Systems | PH Prescriptions",
  description: "Residential drinking systems, whole-home water treatment, shower systems, and UV enhancements. WQA Certified, Made in USA, lifetime warranty.",
};

const SECTIONS = [
  { title: "Drinking Systems", desc: "Under-sink reverse osmosis with QuadVortex technology. Removes up to 99% of contaminants, alkalizes, remineralizes, and infuses molecular hydrogen.", href: "/residential/drinking-systems", from: "$985" },
  { title: "Total Home Systems", desc: "Whole-home restructured water from every tap and shower. Our Premier system transforms your entire water supply.", href: "/residential/total-home", from: "$9,244" },
  { title: "Showers & Tubs", desc: "Aquapellis molecular hydrogen shower systems for transdermal H2 therapy. Compatible with existing plumbing.", href: "/residential/showers", from: "By consultation" },
  { title: "UV Enhancements", desc: "Anti-microbial UV add-ons for any system. Kills bacteria and viruses without chemicals.", href: "/residential/uv", from: "By consultation" },
];

export default function ResidentialPage() {
  return (
    <>
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>For Your Home</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>Residential Water Systems</h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
            From under-sink drinking systems to whole-home transformation - WQA Certified, Made in USA, lifetime warranty with licensed plumber installation.
          </p>
        </div>
      </section>
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href} style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid var(--color-border-soft)", textDecoration: "none", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ background: "var(--color-teal-soft)", padding: "1.5rem", borderBottom: "3px solid var(--color-teal)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-teal)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.375rem" }}>Starting from {s.from}</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--color-navy)" }}>{s.title}</h2>
                </div>
                <div style={{ padding: "1.5rem", flex: 1 }}>
                  <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
                  <div style={{ marginTop: "1.25rem", color: "var(--color-teal)", fontWeight: 600, fontSize: "0.875rem" }}>Learn more &rarr;</div>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/consultation" className="btn btn-primary" style={{ marginRight: "1rem" }}>Free Water Analysis</Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
