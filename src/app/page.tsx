import Link from "next/link";
import { Shield, Award, Droplets, Phone, CheckCircle2, Star } from "lucide-react";
import { BUSINESS, PRODUCTS, DOCTORS } from "@/lib/business";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doctor-Recommended Water Health Systems | Palm City FL",
  description:
    "PH Prescriptions delivers WQA Certified, alkaline, hydrogen-infused water systems for your home and business. Founded 2005, Palm City FL. Endorsed by 7+ doctors. Lifetime warranty.",
};

const STATS = [
  { value: "40+", label: "Years Experience" },
  { value: "7+", label: "Doctor Endorsements" },
  { value: "2005", label: "Founded" },
  { value: "50", label: "States Served" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Palm City, FL",
    rating: 5,
    text: "Our whole-home system changed everything. Water tastes clean, my skin is better, and I finally feel confident about what my family drinks every day.",
  },
  {
    name: "Dr. Robert K.",
    location: "Stuart, FL",
    rating: 5,
    text: "I recommend PH Prescriptions to my patients. The science behind their QuadVortex technology is sound and the results are measurable.",
  },
  {
    name: "James T.",
    location: "Hobe Sound, FL",
    rating: 5,
    text: "Leo and his team are true professionals. 10,000 sq ft warehouse, everything made in the USA, and the lifetime warranty gives real peace of mind.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy) 60%, #1a4f8a 100%)",
          color: "#fff",
          padding: "6rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 70% 50%, rgba(13,148,136,0.18) 0%, transparent 65%)",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "680px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(13,148,136,0.2)", border: "1px solid rgba(13,148,136,0.4)",
              padding: "0.375rem 1rem", marginBottom: "1.5rem", fontSize: "0.8125rem",
              color: "var(--color-teal-light)", letterSpacing: "0.08em", textTransform: "uppercase",
            }}>
              <Award size={13} /> #1 Doctor Recommended
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.25rem,5vw,3.5rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.03em" }}>
              Water That Works<br />
              <em style={{ color: "var(--color-teal-light)" }}>for Your Health</em>
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: 1.75, color: "rgba(255,255,255,0.82)", marginBottom: "2rem", maxWidth: "560px" }}>
              PH Prescriptions delivers WQA Certified, alkaline, re-mineralized, and hydrogen-infused water systems for your home and business. Made in USA since {BUSINESS.founded}. Endorsed by 7+ doctors. Lifetime warranty.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/consultation" className="btn btn-teal" style={{ minWidth: "200px" }}>
                Get a Free Consultation
              </Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-white" style={{ minWidth: "200px" }}>
                <Phone size={16} /> {BUSINESS.phone}
              </a>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem", marginTop: "2rem" }}>
              {["WQA Certified", "Made in USA", "Lifetime Warranty", "Non-Electric Options"].map((tag) => (
                <span key={tag} style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>
                  <CheckCircle2 size={13} style={{ color: "var(--color-teal-light)" }} /> {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--color-navy)", padding: "2.5rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", textAlign: "center" }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,4vw,3rem)", color: "var(--color-teal-light)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.65)", marginTop: "0.375rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY PH */}
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 3.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem,4vw,2.75rem)", color: "var(--color-navy)", marginBottom: "1rem" }}>
              Why PH Prescriptions?
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
              Tap water contains up to 316 known contaminants. Our proprietary QuadVortex technology removes up to 99% of toxins, then re-mineralizes and infuses your water with molecular hydrogen - the same water science endorsed by leading physicians.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Shield size={28} />, title: "Up to 99% Contaminant Removal", desc: "QuadVortex filtration removes bacteria, heavy metals, chlorine, fluoride, pharmaceuticals, and more." },
              { icon: <Droplets size={28} />, title: "Alkaline + Re-Mineralized", desc: "Restores healthy pH balance and adds back essential minerals stripped by conventional filtration." },
              { icon: <Award size={28} />, title: "Molecular Hydrogen Infused", desc: "H2 infusion - the most powerful antioxidant known to science - is built into every system." },
              { icon: <CheckCircle2 size={28} />, title: "Lifetime Warranty", desc: "Every system carries a lifetime warranty when installed by a licensed plumber. We stand behind our work." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", padding: "2rem", borderTop: "3px solid var(--color-teal)", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
                <div style={{ color: "var(--color-teal)", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1875rem", color: "var(--color-navy)", marginBottom: "0.625rem" }}>{item.title}</h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "540px", margin: "0 auto 3rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem,4vw,2.75rem)", color: "var(--color-navy)", marginBottom: "1rem" }}>
              Our Systems
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
              From compact under-sink drinking systems to whole-home restructured water - WQA Certified and Made in USA.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}>
            {PRODUCTS.map((p) => (
              <div key={p.sku} style={{ background: "#fff", display: "flex", flexDirection: "column", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid var(--color-border-soft)" }}>
                <div style={{ background: "var(--color-teal-soft)", padding: "1.5rem 1.5rem 1rem" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--color-teal)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.badge}</span>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.125rem", color: "var(--color-navy)", marginTop: "0.375rem", marginBottom: "0" }}>{p.name}</h3>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-ink-mute)", marginTop: "0.25rem" }}>SKU: {p.sku}</div>
                </div>
                <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.65, flex: 1 }}>{p.description}</p>
                  <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid var(--color-border-soft)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "var(--color-navy)", fontWeight: 700 }}>{p.price}</span>
                    <Link href="/consultation" className="btn btn-primary" style={{ padding: "0.5rem 1.125rem", fontSize: "0.8125rem" }}>
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/consultation" className="btn btn-outline" style={{ padding: "0.875rem 2.5rem" }}>
              Schedule a Free Water Analysis
            </Link>
          </div>
        </div>
      </section>

      {/* DOCTOR ENDORSEMENTS STRIP */}
      <section style={{ background: "var(--color-navy-dark)", color: "#fff" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff", marginBottom: "0.75rem" }}>
              Endorsed by Leading Physicians
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9375rem" }}>
              7+ doctors, dentists, and researchers recommend PH Prescriptions water systems.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }}>
            {DOCTORS.slice(0, 4).map((d) => (
              <div key={d.name} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "1.375rem 1.25rem" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "#fff", marginBottom: "0.25rem" }}>{d.name}</div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-teal-light)", marginBottom: "0.25rem" }}>{d.specialty}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontStyle: "italic" }}>{d.credential}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/about/doctors" className="btn btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}>
              View All Doctor Endorsements
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem,4vw,2.75rem)", color: "var(--color-navy)", textAlign: "center", marginBottom: "3rem" }}>
            What Customers Say
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ background: "#fff", padding: "2rem", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: "1px solid var(--color-border-soft)" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                  ))}
                </div>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "1.25rem" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: 600, color: "var(--color-navy)", fontSize: "0.9rem" }}>{t.name}</span>
                  <span style={{ fontSize: "0.8125rem", color: "var(--color-ink-mute)" }}>{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-teal)", color: "#fff", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.875rem,4vw,2.75rem)", marginBottom: "1rem" }}>
            Ready to Transform Your Water?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.88)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Schedule a free water analysis and consultation with our team. We serve all 50 states and offer both residential and commercial solutions.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
            <Link href="/consultation" className="btn btn-white" style={{ minWidth: "220px" }}>
              Schedule Free Consultation
            </Link>
            <a href={`tel:${BUSINESS.phone}`} className="btn" style={{ background: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", minWidth: "200px" }}>
              <Phone size={16} /> {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
