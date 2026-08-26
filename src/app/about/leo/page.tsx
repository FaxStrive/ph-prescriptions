import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Leo Szymborski | Founder of PH Prescriptions",
  description: "Leo Szymborski founded PH Prescriptions in 2005. A third-generation plumber with 40+ years of water system experience, Leo authored H2O: Health 2 Overcome.",
};

export default function AboutLeoPage() {
  return (
    <>
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Founder</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Leo Szymborski
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            Third-generation plumber. {BUSINESS.yearsExperience} years in water systems. Author. Founder of PH Prescriptions.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3.5vw,2.25rem)", color: "var(--color-navy)", marginBottom: "1.5rem" }}>
              A Lifetime in Water
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              Leo Szymborski grew up in the plumbing trade. As a third-generation plumber, he spent decades on job sites learning exactly what travels through the pipes that supply the water we drink, bathe in, and cook with. What he discovered was not reassuring.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              In 2005, Leo founded PH Prescriptions in Palm City, Florida, with a single mission: to create water systems that go beyond filtration and actually restore water to its healthiest natural state. Over {BUSINESS.yearsExperience} years, he developed the proprietary QuadVortex technology that filters, alkalizes, remineralizes, and infuses molecular hydrogen into every drop.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              Leo has since built a 10,000 square foot manufacturing facility in Palm City, FL, and grown PH Prescriptions into a nationally recognized brand serving all 50 states. Every system bears the WQA certification and the Made in USA designation he is proud of.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "2rem" }}>
              His work gained the attention of leading physicians and researchers - including authors, surgeons, and molecular medicine scientists - who now endorse PH Prescriptions systems to their own patients and clients.
            </p>

            <div style={{ background: "#fff", color: "var(--color-ink)", padding: "2.5rem", marginBottom: "2rem" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1rem", color: "var(--color-teal)", marginBottom: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Book by Leo Szymborski
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.625rem", marginBottom: "0.75rem" }}>
                &ldquo;H2O: Health 2 Overcome&rdquo;
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                Leo documented his journey and the science behind water health in his book H2O: Health 2 Overcome. Available through PH Prescriptions - contact us to learn more.
              </p>
            </div>

            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/about/doctors" className="btn btn-primary">View Doctor Endorsements</Link>
              <Link href="/consultation" className="btn btn-outline">Free Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
