import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Pool & Marine/RV Water Solutions | PH Prescriptions",
  description: "Pool water treatment and marine/RV water systems. In partnership with Exceptional Water Systems, bringing QuadVortex technology to pools, boats, and recreational vehicles.",
};

export default function PoolMarinePage() {
  return (
    <>
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-navy-deep) 0%, var(--color-navy) 60%, #1a6b7a 100%)",
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
            Specialty Solutions
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Pool &amp; Marine / RV Water Systems
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
            Clean, structured water everywhere you need it. PH Prescriptions partners with Exceptional Water Systems to bring advanced water treatment to pools, boats, and recreational vehicles.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
              Call {BUSINESS.phoneTollFree}
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
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: "2rem",
                borderTop: "4px solid var(--color-teal)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                }}
              >
                Pool Water Treatment
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                In partnership with Exceptional Water Systems, PH Prescriptions offers pool water treatment solutions that go beyond standard chlorination. Our systems reduce chemical dependency, improve water clarity, and create a pool environment that is gentler on eyes, skin, and swimwear.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Reduced chlorine demand",
                  "Improved water clarity and softness",
                  "Lower chemical costs over time",
                  "Gentler on skin, eyes, and hair",
                  "Compatible with existing pool systems",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "var(--color-ink-soft)",
                      fontSize: "0.9375rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--color-teal)", fontWeight: 700 }}>--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "#fff",
                padding: "2rem",
                borderTop: "4px solid var(--color-gold)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                }}
              >
                Marine &amp; RV Water Systems
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Clean drinking water on the water, or on the road. Our marine and RV water treatment systems adapt the QuadVortex technology for compact, mobile applications. Whether you are living aboard, cruising offshore, or traveling in a motorhome, you should not have to compromise on water quality.
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Compact units designed for mobile applications",
                  "Non-electric options for off-grid use",
                  "Removes contaminants from marina and RV park water sources",
                  "Molecular hydrogen infusion on the go",
                  "Easy installation in existing galley or wet-bay plumbing",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      color: "var(--color-ink-soft)",
                      fontSize: "0.9375rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span style={{ color: "var(--color-gold)", fontWeight: 700 }}>--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{
              background: "var(--color-navy)",
              color: "#fff",
              padding: "2rem 2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-teal-light)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Partnership
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.375rem",
                  marginBottom: "0.5rem",
                }}
              >
                Exceptional Water Systems
              </h3>
              <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, fontSize: "0.9375rem" }}>
                PH Prescriptions partners with Exceptional Water Systems to deliver pool and specialty water solutions. Together, we bring the same commitment to true water quality from the home into every environment where water matters.
              </p>
            </div>
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
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            The QuadVortex Difference
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "2.5rem",
              fontSize: "1rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            The same proprietary technology that powers our home systems, adapted for marine and mobile environments.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { stage: "1", label: "Filtration", desc: "Remove contaminants, bacteria, and sediment from any source water." },
              { stage: "2", label: "Restructuring", desc: "Vortex action restructures water molecules for better cellular uptake." },
              { stage: "3", label: "Re-mineralization", desc: "Restore alkaline minerals stripped by source water treatment." },
              { stage: "4", label: "Hydrogen Infusion", desc: "Infuse therapeutic molecular hydrogen into structured water." },
            ].map((s) => (
              <div
                key={s.stage}
                style={{
                  background: "var(--color-cream)",
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    background: "var(--color-teal)",
                    color: "#fff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    margin: "0 auto 0.875rem",
                  }}
                >
                  {s.stage}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {s.label}
                </h3>
                <p style={{ color: "var(--color-ink-soft)", fontSize: "0.875rem", lineHeight: 1.65 }}>{s.desc}</p>
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
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Get a Custom Quote
          </h2>
          <p style={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Pool, marine, and RV systems are quoted based on your specific application. Call us and describe what you need. We will tell you what is possible.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-teal">
              Call {BUSINESS.phoneTollFree}
            </a>
            <Link href="/contact" className="btn btn-white">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
