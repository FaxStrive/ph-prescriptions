import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "FAQ | PH Prescriptions Water Systems",
  description: "Answers to common questions about PH Prescriptions water filtration, alkaline water, molecular hydrogen, installation, warranty, and more.",
};

const FAQS = [
  {
    q: "What makes PH Prescriptions water systems different from other filters?",
    a: "Standard filters only remove contaminants. PH Prescriptions systems do four things: filter up to 99% of contaminants using our QuadVortex technology, restructure water at the molecular level, restore alkaline pH and re-mineralize, and infuse therapeutic concentrations of molecular hydrogen. No other consumer system does all four.",
  },
  {
    q: "What is molecular hydrogen and why does it matter?",
    a: "Molecular hydrogen (H2) is the smallest molecule known to science - small enough to penetrate cell membranes and mitochondria directly. It is the most cell-permeable antioxidant available, and peer-reviewed research suggests it supports cellular energy production and reduces oxidative stress.",
  },
  {
    q: "Do I need an electrician or plumber to install a PH Prescriptions system?",
    a: "Our under-sink drinking systems are non-electric and designed to fit existing plumbing without major modifications. A licensed plumber is required for installation to qualify for the lifetime warranty. We can recommend certified installers in your area.",
  },
  {
    q: "What warranty comes with PH Prescriptions systems?",
    a: "Every PH Prescriptions system comes with a lifetime warranty when installed by a licensed plumber. This is one of the strongest warranties in the industry. Contact us for warranty registration details after installation.",
  },
  {
    q: "Do you ship to my state?",
    a: "Yes. PH Prescriptions ships to all 50 states. We also serve international clients. Call 888-728-2783 for international shipping inquiries.",
  },
  {
    q: "What contaminants do your systems remove?",
    a: "Our QuadVortex technology targets bacteria, heavy metals (lead, mercury, arsenic), chlorine, chloramine, fluoride, pharmaceuticals, micro-plastics, pesticides, herbicides, and hundreds of other documented contaminants. Independent testing shows up to 99% removal rates.",
  },
  {
    q: "Can I use a PH Prescriptions system in my business or restaurant?",
    a: "Absolutely. We have commercial and business lines specifically designed for restaurants, hotels, gyms, medical offices, and other commercial facilities. Contact us for a commercial consultation.",
  },
  {
    q: "What is the Aquapellis shower system?",
    a: "Aquapellis is our molecular hydrogen shower system - a transdermal H2 delivery system that infuses your shower water with therapeutic concentrations of molecular hydrogen. It is available for residential, commercial, and hospitality applications. Contact info@aquapellis.com for pricing.",
  },
  {
    q: "Is alkaline water safe to drink every day?",
    a: "Yes. Our systems produce water at a pH of 8.0-9.5, which is within the range that doctors including those who endorse our products consider optimal. The alkalinity comes from dissolved minerals, not chemical additives, making it safe and beneficial for daily consumption.",
  },
  {
    q: "How do I get started?",
    a: "The best first step is a free water analysis and consultation. We will test your current water, identify what is in it, and recommend the right system for your home or business. Contact us at 772-220-8789 or schedule online.",
  },
];

export default function FAQPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal-light)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Help Center</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.82)", lineHeight: 1.75 }}>
            Everything you need to know about PH Prescriptions water systems, technology, installation, and warranty.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {FAQS.map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--color-border-soft)", paddingBottom: "0" }}>
                <summary style={{
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
                }}>
                  {faq.q}
                  <span style={{ flexShrink: 0, color: "var(--color-teal)", fontSize: "1.25rem", fontFamily: "var(--font-sans)" }}>+</span>
                </summary>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, paddingBottom: "1.5rem", fontSize: "0.9375rem" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>

          <div style={{ marginTop: "3rem", background: "var(--color-navy)", color: "#fff", padding: "2.5rem", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", marginBottom: "0.75rem" }}>
              Still have questions?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", marginBottom: "1.5rem" }}>
              Our team is ready to answer. Call us or schedule a free consultation.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
              <Link href="/consultation" className="btn btn-primary">Free Consultation</Link>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-white">Call {BUSINESS.phone}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
