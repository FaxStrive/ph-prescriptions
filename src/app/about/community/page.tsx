import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Community Care | pH Prescription",
  description: "pH Prescription is committed to giving back to the Palm City FL community and beyond. Learn about our community care initiatives.",
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Community"
        titleAccent="Care"
        subhead="pH Prescription is rooted in Palm City, Florida. For over 20 years, we have been part of this community - and we believe in giving back to the people and organizations that make it thrive."
        image="/images/lifestyle/kids-drinking-water.jpg"
        imageAlt="Kids drinking glasses of clean filtered water together"
        ctas={[{ label: "Contact Our Team", href: "/contact", variant: "primary" }]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.5rem" }}>
              As a family owned and operated business in southeast Florida, pH Prescription understands the importance of community and the importance of helping those in need. Our belief is that through partnerships with organizations that share our core values, mission and passion, together we can assist people to live healthier lives through clean water.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.5rem" }}>
              Our Community Care goal is to support like-minded organizations so that together we may have a deeper impact on the quality of life that finely filtered water brings to those who otherwise would not have access. pH Prescription helps Operation 300, a non-profit organization that provides support to Gold Star families and mentorship to children of the fallen, honoring the sacrifice of those who have given their all for our freedom, and promoting patriotism and service in our communities since 2012.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.5rem" }}>
              For more information about Community Care, contact us at {BUSINESS.email}.
            </p>
          </div>
        </div>
      </section>

      {/* Out in the community */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem", maxWidth: "640px" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--color-teal)",
                marginBottom: "1rem",
              }}
            >
              Out In The Field
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: "0 0 1rem",
              }}
            >
              You Will Find Us Where Wellness Happens
            </h2>
            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.7, color: "var(--color-ink-soft)" }}>
              Trade shows, wellness expos, and medical conventions are where we meet our neighbors face to face,
              demonstrate the systems, and talk honestly about what is in the water.
            </p>
          </div>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/trade-shows/booth-setup.jpg",
                imageAlt: "Two pH Prescription team members at the company booth before a wellness expo opens",
                eyebrow: "Expo Floor",
                title: "Setting Up the Booth",
                body: "Whole house filtration and hydrogen drinking systems, demonstrated live before the doors open.",
              },
              {
                image: "/images/trade-shows/team-photo.jpg",
                imageAlt: "Four pH Prescription team members standing together at the company trade show booth",
                eyebrow: "The Team",
                title: "The Crew Behind the Booth",
                body: "The pH Prescription team at the company trade show booth.",
              },
              {
                image: "/images/lifestyle2/idw-family-water-4.jpg",
                imageAlt: "Parent and children enjoying glasses of clean filtered water at home",
                eyebrow: "Why We Do It",
                title: "Families First",
                body: "Every booth, class, and consultation exists to get healthier water into more homes.",
              },
            ]}
          />
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ background: "var(--color-surface)", padding: "2rem", marginBottom: "2.5rem" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "var(--color-navy)", marginBottom: "0.75rem" }}>
                Affiliate Program
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
                Health practitioners, doctors, coaches, and community leaders can join our Affiliate Program and earn while bringing pH Prescription water health to their clients and networks.
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
