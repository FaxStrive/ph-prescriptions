import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
export const metadata: Metadata = { title: "Total Home Water Systems | PH Prescriptions", description: "Whole-home restructured water treatment. Every tap, every shower, every glass transformed. pH-WH-3500-CO from $9,244." };
export default function TotalHomePage() {
  return (<>
    <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0 4rem" }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        <div style={{ fontSize: "0.8125rem", color: "var(--color-teal-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Residential</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>Total Home Restructured Water</h1>
        <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>Our Premier Total Home System (pH-WH-3500-CO) transforms every water outlet in your home - every faucet, shower, and appliance. QuadVortex filtration, alkalizing, remineralizing, and hydrogen infusion for the whole house. From $9,244.25.</p>
      </div>
    </section>
    <section style={{ background: "var(--color-cream)" }}>
      <div className="container" style={{ maxWidth: "760px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3vw,2.125rem)", color: "var(--color-navy)", marginBottom: "1.25rem" }}>What Is Included</h2>
        <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>The Total Home Premier Restructured Water System is the most comprehensive water solution PH Prescriptions offers. Every water source in your home - showers, baths, kitchen, laundry, outdoor - is treated with the full QuadVortex process. Point-of-entry installation means every drop of water entering your home is filtered, structured, alkalized, remineralized, and hydrogen-infused.</p>
        <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>Whole-home restructured water benefits extend beyond drinking - your skin, hair, and appliances all benefit from truly clean water. Lifetime warranty with licensed plumber installation.</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/consultation" className="btn btn-primary">Get a Custom Quote</Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
        </div>
      </div>
    </section>
  </>);
}
