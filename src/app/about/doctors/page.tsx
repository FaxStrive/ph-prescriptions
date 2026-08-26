import type { Metadata } from "next";
import Link from "next/link";
import { DOCTORS, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Doctor Endorsements | pH Prescription",
  description: "7+ leading physicians, dentists, and researchers endorse pH Prescription water systems, including authors and board-certified specialists.",
};

export default function DoctorsPage() {
  return (
    <>
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Medical Credibility</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Endorsed by Leading Physicians
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            7+ doctors, dentists, surgeons, and researchers have reviewed and endorsed pH Prescription water systems. Their endorsements represent independent professional judgment, not paid sponsorship.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            {DOCTORS.map((doctor) => (
              <div key={doctor.name} style={{ background: "#fff", padding: "2rem", borderLeft: "4px solid var(--color-teal)", boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--color-navy)", marginBottom: "0.375rem" }}>{doctor.name}</h3>
                <div style={{ fontSize: "0.875rem", color: "var(--color-teal)", fontWeight: 600, marginBottom: "0.5rem" }}>{doctor.specialty}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--color-ink-soft)", fontStyle: "italic" }}>{doctor.credential}</div>
              </div>
            ))}
          </div>

          <div style={{ maxWidth: "700px", margin: "4rem auto 0", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3.5vw,2.25rem)", color: "var(--color-navy)", marginBottom: "1rem" }}>
              What the Science Says
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              The physicians who endorse pH Prescription systems do so because the underlying science is sound. Alkaline water, molecular hydrogen, and clean mineral-balanced water have been subjects of legitimate peer-reviewed research. Our systems are built around that research.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>
              Books like &ldquo;Whole Body Dentistry&rdquo; by Dr. Mark Breiner and &ldquo;Healing is Voltage&rdquo; by Dr. Jerry Tennant have brought water science into mainstream clinical conversation. pH Prescription systems are engineered to meet the standards these researchers describe.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/technology" className="btn btn-primary">Learn About Our Technology</Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
