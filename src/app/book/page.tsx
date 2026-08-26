import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "H2O: Health 2 Overcome | PH Prescriptions",
  description: "Leo Szymborski's book on how water quality transformed his health and the science behind hydrogen therapy, mineral balance, and true water healing.",
};

export default function BookPage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy) 60%, var(--color-teal) 100%)",
          color: "#fff",
          padding: "6rem 0 5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal-light)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            PH Prescriptions Book
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.25rem,5vw,3.5rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            H2O: Health 2 Overcome
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            The personal story and science behind how water quality can transform your health. Written by Leo Szymborski, founder of PH Prescriptions, with 40+ years in water systems.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
              Call to Order: {BUSINESS.phoneTollFree}
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
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                The Story Behind the Book
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Leo Szymborski spent decades as a third-generation plumber before a personal health crisis changed everything. After struggling with chronic symptoms that conventional medicine could not fully resolve, Leo turned his attention to the one substance he had worked with his entire career: water.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                What he discovered transformed his health and ultimately became the foundation of PH Prescriptions. H2O: Health 2 Overcome tells that story and shares the science that convinced a skeptical tradesman turned water health advocate.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                The book is not a sales pitch. It is a personal account backed by the research Leo spent years studying, the doctors who validated it, and the clients whose lives changed after they changed their water.
              </p>
            </div>

            <div
              style={{
                background: "var(--color-navy)",
                color: "#fff",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-teal-light)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                About the Author
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  marginBottom: "0.75rem",
                }}
              >
                Leo Szymborski
              </h3>
              <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, fontSize: "0.9375rem", marginBottom: "1rem" }}>
                Third-generation plumber. Founder of PH Prescriptions. 40+ years in water systems and installation. WQA Certified water specialist. Health advocate and researcher.
              </p>
              <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                Leo founded PH Prescriptions in {BUSINESS.founded} after witnessing how water quality directly affected the health of his clients, his family, and himself. He has since built relationships with medical doctors, researchers, and integrative health practitioners who endorse the science his systems are built on.
              </p>
              <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.15)" }}>
                <Link href="/about/leo" style={{ color: "var(--color-teal-light)", textDecoration: "none", fontSize: "0.875rem" }}>
                  Read more about Leo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--color-navy)",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            What the Book Covers
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontSize: "1.0625rem",
            }}
          >
            The science of water quality in plain language
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Water Quality Science",
                body: "What is actually in your tap water, how testing works, and why standard filtration falls short of what your body needs.",
              },
              {
                title: "Molecular Hydrogen Therapy",
                body: "The peer-reviewed research on H2 as a cell-permeable antioxidant, and why its size makes it uniquely effective at reaching mitochondria.",
              },
              {
                title: "Mineral Balance",
                body: "How stripped, demineralized water can deplete your body over time, and how proper re-mineralization restores what is lost.",
              },
              {
                title: "Alkaline pH",
                body: "The difference between chemically altered alkalinity and mineral-derived alkalinity, and why the source matters for long-term health.",
              },
              {
                title: "Whole Body Impact",
                body: "How hydration quality affects digestion, energy, skin, joints, and cellular recovery from illness and exercise.",
              },
              {
                title: "Real-World Results",
                body: "Client stories and Leo's own health journey: what changed, how long it took, and how water quality fit into a broader health picture.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-cream)",
                  padding: "1.5rem",
                  borderLeft: "3px solid var(--color-teal)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.0625rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Order Your Copy
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "2rem" }}>
            H2O: Health 2 Overcome is available through PH Prescriptions directly. Call or email to place an order. Bulk orders for health practitioners and clinic waiting rooms are welcome.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
              Call {BUSINESS.phoneTollFree}
            </a>
            <a href={`mailto:${BUSINESS.email}`} className="btn btn-white">
              Email {BUSINESS.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
