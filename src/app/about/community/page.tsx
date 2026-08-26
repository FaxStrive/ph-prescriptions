import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Community Care | PH Prescriptions",
  description: "PH Prescriptions is committed to giving back to the Palm City FL community and beyond. Learn about our community care initiatives.",
};

export default function CommunityPage() {
  return (
    <>
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Community</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Community Care
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            PH Prescriptions is rooted in Palm City, Florida. For over 20 years, we have been part of this community - and we believe in giving back to the people and organizations that make it thrive.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.5rem" }}>
              Clean water is a right, not a luxury. That belief drives our business and our community work. Since {BUSINESS.founded}, we have partnered with local organizations, supported families in need, and educated our neighbors about the water they drink every day.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.5rem" }}>
              Our community care efforts include educational outreach about water quality, support for local health initiatives, and our Affiliate Program that empowers wellness practitioners, doctors, and community leaders to bring better water to more people.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "2.5rem" }}>
              To learn more about our community programs, partner with us, or bring a water education event to your organization, contact us directly.
            </p>
            <div style={{ background: "var(--color-surface)", padding: "2rem", marginBottom: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "var(--color-navy)", marginBottom: "0.75rem" }}>
                Affiliate Program
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Health practitioners, doctors, coaches, and community leaders can join our Affiliate Program and earn while bringing PH Prescriptions water health to their clients and networks.
              </p>
              <a href={`mailto:${BUSINESS.email}`} className="btn btn-primary">Inquire About Affiliates</a>
            </div>
            <Link href="/contact" className="btn btn-outline">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
