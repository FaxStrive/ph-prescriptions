import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "H2O: Health 2 Overcome | pH Prescription",
  description:
    "The inspirational memoir of pH Prescription Founder Leo G. Szymborski. A story of illness, resilience and the power of clean water to transform health.",
};

export default function H2OHealthPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "clamp(4rem, 8vw, 7rem) 0",
        }}
      >
        <div className="max-content" style={{ maxWidth: "800px" }}>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>
            From pH Prescription Founder
          </span>
          <h1
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            H2O:{" "}
            <span className="italic-accent" style={{ color: "#B9E3EF" }}>
              Health 2 Overcome
            </span>
          </h1>
          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "1.125rem",
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.85)",
              maxWidth: "60ch",
            }}
          >
            The inspirational memoir of pH Prescription Founder, Leo G. Szymborski,
            whose story is one of illness, trauma, loss, learning disabilities, and
            the overwhelming drive to rise above and thrive as a family man and entrepreneur.
          </p>
        </div>
      </section>

      {/* Video embed */}
      <section
        style={{
          background: "var(--color-surface)",
          padding: "clamp(3rem, 6vw, 5rem) 0",
        }}
      >
        <div className="max-content" style={{ maxWidth: "800px" }}>
          <span
            className="eyebrow"
            style={{ color: "var(--color-navy)", display: "block", marginBottom: "1.5rem" }}
          >
            Watch the Story
          </span>
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              overflow: "hidden",
              background: "#000",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/GhoxueDIF6o"
              title="H2O: Health 2 Overcome — Leo Szymborski"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: 0,
              }}
            />
          </div>
        </div>
      </section>

      {/* About the book */}
      <section style={{ background: "#fff", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
        <div className="max-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div>
              <span className="eyebrow" style={{ color: "var(--color-navy)" }}>
                #1 Best Seller
              </span>
              <h2
                style={{
                  marginTop: "1rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  color: "var(--color-ink)",
                }}
              >
                An extraordinary account of endurance, innovation, and personal rebirth.
              </h2>
              <p
                style={{
                  marginTop: "1.5rem",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "var(--color-ink-soft)",
                }}
              >
                Told with raw honesty and intimate detail, it captures the challenges
                of growing up misunderstood, surviving life-threatening trauma, and
                building a purpose-driven life rooted in family, faith, and water health.
              </p>
              <p
                style={{
                  marginTop: "1.25rem",
                  fontSize: "1.0625rem",
                  lineHeight: 1.75,
                  color: "var(--color-ink-soft)",
                }}
              >
                From blue-collar grit to scientific breakthrough, this book is a rare
                combination of emotional resonance and entrepreneurial spirit. It is for
                anyone who has ever felt lost, dismissed, or underestimated. Leo doesn&apos;t
                just survive; he rises, and brings others with him.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  title: "For the Learner Who Was Written Off",
                  text: "Leo's battle with dyslexia and the school system will resonate with anyone who has felt 'stupid' in the classroom but brilliant in the world. It redefines what intelligence looks like.",
                },
                {
                  title: "For the Survivor",
                  text: "From a near-fatal childhood illness to witnessing a school shooting at seven years old, Leo speaks directly to those who have lived through the unthinkable and are still standing and thriving.",
                },
                {
                  title: "For the Health Seeker",
                  text: "Leo was poisoned by the water he drank as a child, and he created real, scalable solutions. His story is personal and global at once.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border-soft)",
                    borderLeft: "3px solid var(--color-teal)",
                    padding: "1.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "1.125rem",
                      lineHeight: 1.3,
                      letterSpacing: "-0.01em",
                      color: "var(--color-ink)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      lineHeight: 1.65,
                      color: "var(--color-ink-soft)",
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "clamp(3rem, 6vw, 5rem) 0",
          textAlign: "center",
        }}
      >
        <div className="max-content" style={{ maxWidth: "640px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
            }}
          >
            Water changed Leo&apos;s life.{" "}
            <span className="italic-accent" style={{ color: "#B9E3EF" }}>
              It can change yours.
            </span>
          </h2>
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.8)",
            }}
          >
            Start with a free water analysis and consultation. No pressure, all fifty states.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link
              href="/consultation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                background: "#fff",
                color: "var(--color-navy)",
                padding: "1rem 2rem",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Get a free consultation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
