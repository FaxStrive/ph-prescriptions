import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Nutraceuticals | PH Prescriptions pHP New Product Line",
  description: "Targeted nutrition supplements that complement PH Prescriptions water systems. Mineral repletion, hydrogen-boosting, and cellular support. Part of the pHP New product line.",
};

export default function NutraceuticalsPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy) 100%)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal-light)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            pHP New Product Line
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Nutraceuticals
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            Targeted nutritional supplements that work alongside our water systems to support mineral repletion, cellular hydration, and hydrogen-boosting at the cellular level.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
              Inquire: {BUSINESS.phoneTollFree}
            </a>
            <Link href="/consultation" className="btn btn-white">
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Water and Nutrition Work Together
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Our water systems are the foundation of cellular hydration. But water alone does not replenish every mineral your body needs, and it cannot replace targeted nutritional support for specific health goals.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                The pHP New nutraceutical line was developed to complement our filtration and hydrogen-infusion systems. Each supplement is selected to work with properly structured, mineralized water to maximize cellular uptake and effectiveness.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                These are not mass-market vitamins. Availability is consultation-based because Leo and his team match supplementation to each client's water quality data, health profile, and goals. No online cart. Every order starts with a conversation.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                {
                  title: "Mineral Repletion",
                  body: "Modern diets and demineralized water leave most people depleted in essential minerals. Our mineral formulations restore what filtration and the food supply remove.",
                },
                {
                  title: "Hydrogen-Boosting Supplements",
                  body: "Hydrogen tablets and formulations that generate molecular H2 internally, extending the benefits of our hydrogen-infused water systems.",
                },
                {
                  title: "Cellular Hydration Support",
                  body: "Electrolyte complexes designed to work with structured water, improving cellular uptake and reducing the gap between water consumed and water actually used by your cells.",
                },
                {
                  title: "pH-Supportive Nutrition",
                  body: "Alkaline-forming supplements that complement the pH-balanced water our systems produce. Targeted for clients with specific acidic load concerns.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "#fff",
                    padding: "1.25rem 1.5rem",
                    borderLeft: "3px solid var(--color-teal)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1rem",
                      color: "var(--color-navy)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              background: "var(--color-cream)",
              padding: "2.5rem",
              borderTop: "4px solid var(--color-gold)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.375rem",
                color: "var(--color-navy)",
                marginBottom: "0.75rem",
              }}
            >
              Consultation-Based Availability
            </h3>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
              pHP New nutraceuticals are not sold online. We match each client to specific formulations based on their water test results, health history, and goals. To inquire about availability or to order, contact us directly.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
                Call {BUSINESS.phoneTollFree}
              </a>
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--color-teal)", textDecoration: "none", fontWeight: 500, alignSelf: "center" }}>
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Start With Your Water
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Every nutraceutical consultation begins with a free water analysis. Understanding what your water is doing first shapes what supplementation makes sense. Schedule a consultation and we will test your water at no cost.
          </p>
          <Link href="/consultation" className="btn btn-teal">
            Schedule Free Water Analysis
          </Link>
        </div>
      </section>
    </>
  );
}
