import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS, DOCTORS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Why pH Prescription? | Point of Difference",
  description: "What sets pH Prescription apart: a complete approach to filtration, built around health, rebuilt rather than just stripped, with proprietary filtration media that comes from over 40 years of real-world experience in the Northeast.",
};

export default function PointOfDifferencePage() {
  return (
    <>
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            FAQ / Point of Difference
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Why pH Prescription
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              maxWidth: "600px",
            }}
          >
            Anyone can filter water. Very few know how to fix it.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {[
              {
                heading: "Beyond Basic Filtration",
                body: "Most water filtration systems do one job. We take a complete and total approach to water filtration. We not only use the highest quality filtration media in our equipment, but we complete the cycle of filtration by not only reducing contaminants but improving the overall quality, feel, and function of your water throughout the entire home.",
              },
              {
                heading: "Built Around Health",
                body: "This isn't just plumbing, it's wellness. When it comes to your water filtration, we consider every point of use and its effect on health and longevity: drinking, cooking, bathing, and daily bathing exposure. We take this approach because water impacts far more than what you drink.",
              },
              {
                heading: "Not Just Stripped, It's Rebuilt",
                body: "Many systems remove some contaminants, but stop there. Our approach focuses on balance. When a harmful element is removed, we replace that with something beneficial. Depending on the system, that may include purification, mineral support, and performance enhancements. The goal: to create 'better water', life enhancing water.",
              },
              {
                heading: "Proprietary Filtration Technology",
                body: "At the core of our filtration systems is something you won't find anywhere else: our proprietary filtration media. This wasn't developed in theory. It comes from over 40 years of real-world experience cleaning up highly contaminated water systems and toxic wells throughout the Northeast, including New Jersey, Delaware, New York, and Pennsylvania. That experience exposed the limitations of standard filtration and drove the need to create something better. We don't disclose the exact formulation of our proprietary filtration media.",
              },
              {
                heading: "Whole-Home Thinking",
                body: "Water affects everything: from your skin to the air you breathe, to your appliances, and even your daily routine. We design systems around total water exposure, not water coming out of just one faucet, creating a more complete, holistic and protective home environment.",
              },
              {
                heading: "Built From Real Experience",
                body: "pH Prescription was built in the field not in theory. Decades of hands-on experience, real-world problem solving, and personal commitment shape every system we design. No two water sources are the same, so we don't believe in one-size-fits-all solutions.",
              },
              {
                heading: "Personalized Systems to Meet Your Water Profile",
                body: "We start with your water, not a product. Your location, water source, and filtration goals all matter. Whether it's issues with chlorine, hardness, VOCs, or full-home treatment, we tailor solutions to fit your exact needs. Because premium water should never be guesswork.",
              },
            ].map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid var(--color-border-soft)",
                }}
              >
                <summary
                  style={{
                    padding: "1.5rem 0",
                    cursor: "pointer",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  {item.heading}
                  <span
                    style={{
                      flexShrink: 0,
                      color: "var(--color-teal)",
                      fontSize: "1.25rem",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.8,
                    paddingBottom: "1.5rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {item.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              color: "var(--color-navy)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Doctor Endorsements
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontSize: "1rem",
            }}
          >
            Doctors, dentists and health experts who use and recommend pH Prescription water
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "1rem",
            }}
          >
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.name}
                style={{
                  background: "var(--color-cream)",
                  padding: "1.25rem 1.5rem",
                  borderLeft: "3px solid var(--color-teal)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.9375rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {doctor.name}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", marginBottom: "0.25rem" }}>
                  {doctor.specialty}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-ink-soft)", fontStyle: "italic" }}>
                  {doctor.credential}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <Link href="/experts" style={{ color: "var(--color-teal)", textDecoration: "none", fontWeight: 500 }}>
              View full doctor endorsements
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            See the Difference Yourself
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Start with a free consultation. We will review your local water quality with you, show you exactly what is in it, and let you decide whether our systems are right for you. No pressure. No commitment.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/consultation" className="btn btn-primary">
              Free Consultation
            </Link>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
              Call {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
