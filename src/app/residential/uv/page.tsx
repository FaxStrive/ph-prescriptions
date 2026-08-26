import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
export const metadata: Metadata = { title: "UV Anti-Microbial Enhancements | PH Prescriptions", description: "Add UV anti-microbial enhancement to any PH Prescriptions system. Chemical-free bacteria and virus elimination for residential water systems." };
export default function UVPage() {
  return (<>
    <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Residential Add-On</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem" }}>UV Anti-Microbial Enhancements</h1>
        <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>Chemical-free UV treatment eliminates bacteria, viruses, and pathogens from your water supply. Pairs with any PH Prescriptions drinking or whole-home system for complete protection.</p>
      </div>
    </section>
    <section style={{ background: "var(--color-cream)" }}>
      <div className="container" style={{ maxWidth: "760px" }}>
        <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>UV light at the correct wavelength (254nm) destroys the DNA of bacteria, viruses, and cysts - rendering them unable to reproduce. Unlike chlorine, UV treatment leaves no chemical residue and adds nothing to your water. It is purely physical treatment that neutralizes biological threats at the point of entry or point of use.</p>
        <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>UV enhancement is recommended for any home on well water, in areas with older infrastructure, or where additional microbial protection is desired. Contact us for a consultation and pricing.</p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/consultation" className="btn btn-primary">Get a Free Consultation</Link>
          <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
        </div>
      </div>
    </section>
  </>);
}
