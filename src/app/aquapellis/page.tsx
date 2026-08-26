import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Phone, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Aquapellis Molecular Hydrogen Shower System",
  description: "The Aquapellis shower system delivers molecular hydrogen transdermally - the same antioxidant science in your drinking water, now in every shower. Residential, commercial, and hospitality.",
};

export default function AquapellisPage() {
  return (
    <>
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "740px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            A pH Prescription Brand
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Aquapellis<br />
            <em style={{ color: "var(--color-teal)" }}>Molecular Hydrogen Shower</em>
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            The Aquapellis system delivers molecular hydrogen (H2) transdermally - through your skin - with every shower. The same antioxidant science you drink is now absorbed through the body's largest organ, providing whole-body cellular benefit.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <a href={`mailto:${BUSINESS.emailAquapellis}`} className="btn btn-primary">Request Aquapellis Quote</a>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
              <Phone size={16} /> {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.5rem)", color: "var(--color-navy)", marginBottom: "1.25rem" }}>
                Transdermal H2 Therapy
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Molecular hydrogen is the smallest molecule in the universe - small enough to pass directly through skin cells. Aquapellis infuses your shower water with therapeutic concentrations of H2, delivering antioxidant benefit to every cell in your body during your daily routine.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                Recommended for athletes, wellness practitioners, medical professionals, and anyone serious about their health and longevity.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Molecular hydrogen infused at therapeutic concentrations",
                  "Compatible with existing plumbing - no major renovation",
                  "Customized for residential, commercial, and hospitality environments",
                  "Vital Impact variant for military and first responders ($7,999)",
                  "Contact info@aquapellis.com or 888-728-2783 for pricing",
                ].map((point) => (
                  <div key={point} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--color-teal)", flexShrink: 0, marginTop: "0.2rem" }} />
                    <span style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.65 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "#fff", padding: "3rem 2.5rem", color: "var(--color-ink)", borderTop: "3px solid var(--color-navy)", boxShadow: "0 2px 24px rgba(88,56,144,0.08)" }}>
              <Droplets size={40} style={{ color: "var(--color-teal)", marginBottom: "1.25rem" }} />
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "1rem" }}>Available Systems</h3>
              {[
                { name: "Aquapellis Residential", price: "By consultation", desc: "Single-family home installation with custom fitting." },
                { name: "Aquapellis Commercial", price: "By consultation", desc: "Multi-unit and facility installations for gyms, spas, and wellness centers." },
                { name: "Aquapellis Hospitality", price: "By consultation", desc: "Hotel and resort installations delivering premium guest experience." },
                { name: "Vital Impact (Military/First Responder)", price: "$7,999", desc: "Dedicated system for active duty military, veterans, and first responders." },
              ].map((sys) => (
                <div key={sys.name} style={{ borderBottom: "1px solid var(--color-border-soft)", paddingBottom: "1.125rem", marginBottom: "1.125rem" }}>
                  <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--color-ink)", marginBottom: "0.25rem" }}>{sys.name}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", marginBottom: "0.375rem" }}>{sys.price}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--color-ink-mute)" }}>{sys.desc}</div>
                </div>
              ))}
              <a href={`mailto:${BUSINESS.emailAquapellis}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
                Contact Aquapellis Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", color: "var(--color-ink)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "600px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem,3.5vw,2.25rem)", marginBottom: "1rem" }}>
            Ready to Upgrade Your Shower?
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Contact our Aquapellis team for a custom quote. All systems are professionally installed with full support.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <a href={`mailto:${BUSINESS.emailAquapellis}`} className="btn btn-primary">Email info@aquapellis.com</a>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn" style={{ background: "transparent", border: "2px solid var(--color-navy)", color: "var(--color-ink)" }}>
              <Phone size={16} /> {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
