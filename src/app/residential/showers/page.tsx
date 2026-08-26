import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Shower & Tub Water Systems | pH Prescription", description: "Aquapellis molecular hydrogen shower systems for residential use. Transdermal H2 therapy from every shower. Contact for pricing." };
export default function ShowersPage() {
  return (<>
    <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Residential</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem" }}>Showers & Tubs</h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>The Aquapellis shower system delivers molecular hydrogen transdermally with every shower. Every shower becomes a therapeutic H2 treatment session. No electricity, compatible with existing plumbing.</p>
      </div>
    </section>
    <section style={{ background: "var(--color-cream)" }}>
      <div className="container" style={{ maxWidth: "760px" }}>
        <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>Standard shower filters remove chlorine. Aquapellis goes further - infusing your shower water with therapeutic molecular hydrogen (H2) that penetrates skin cells directly. Athletes, health-conscious families, and those dealing with skin conditions report measurable improvements in skin hydration, recovery, and overall wellbeing.</p>
        <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>The residential Aquapellis system is customized for your home's plumbing configuration. Contact our Aquapellis team at info@aquapellis.com or 888-728-2783 for a custom quote.</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/aquapellis" className="btn btn-primary">Learn About Aquapellis</Link>
          <a href="mailto:info@aquapellis.com" className="btn btn-outline">Contact Aquapellis Team</a>
        </div>
      </div>
    </section>
  </>);
}
