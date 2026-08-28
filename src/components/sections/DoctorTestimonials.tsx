import Image from "next/image";
import Link from "next/link";

const FEATURED_DOCTORS = [
  {
    name: "Dr. Nathan Bryan, PhD",
    credential: "Molecular Biologist - Nitric Oxide Researcher",
    photo: "/doctors/dr-bryan.jpg",
    quote:
      "People get sick for two reasons and two reasons only: 1. their body is missing essential nutrients and 2. their body is exposed to toxins, both orally and transdermally, both prevent the body from performing optimally. I use pH Prescription and Aquapellis finely filtered systems and recommend them as I have researched and studied them since 2018.",
    link: "/experts",
  },
  {
    name: "Dr. Jerry Tennant, MD",
    credential: "Founder, Tennant Institute for Integrative and Natural Medicine",
    photo: "/doctors/dr-tennant.jpg",
    quote:
      "An international lecturer and published author, Dr. Tennant has dedicated his career to understanding how the body heals. He holds over 12 patents and practices in Dallas, Texas - and recommends pH Prescription's finely filtered systems for their approach to complete water quality.",
    link: "/experts",
  },
];

export default function DoctorTestimonials() {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        padding: "clamp(4rem, 8vw, 6rem) 0",
        borderTop: "1px solid var(--color-border-soft)",
        borderBottom: "1px solid var(--color-border-soft)",
      }}
    >
      <div className="max-content">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              marginBottom: "0.75rem",
            }}
          >
            Medical Endorsements
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.875rem, 4vw, 2.875rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--color-ink)",
              margin: 0,
            }}
          >
            The Doctors Recommend pH Prescription
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {FEATURED_DOCTORS.map((doc) => (
            <article
              key={doc.name}
              style={{
                background: "#fff",
                border: "1px solid var(--color-border-soft)",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid var(--color-border-soft)",
                    background: "var(--color-surface)",
                  }}
                >
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    width={72}
                    height={72}
                    style={{ width: "72px", height: "72px", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "1.125rem",
                      letterSpacing: "-0.01em",
                      color: "var(--color-ink)",
                      lineHeight: 1.2,
                    }}
                  >
                    {doc.name}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-mute)",
                      marginTop: "0.25rem",
                      lineHeight: 1.4,
                    }}
                  >
                    {doc.credential}
                  </span>
                </div>
              </div>

              <blockquote
                style={{
                  margin: 0,
                  borderLeft: "3px solid var(--color-teal)",
                  paddingLeft: "1.25rem",
                  fontStyle: "italic",
                  fontSize: "0.9375rem",
                  lineHeight: 1.7,
                  color: "var(--color-ink-soft)",
                  flex: 1,
                }}
              >
                {doc.quote}
              </blockquote>

              <Link
                href={doc.link}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  textDecoration: "none",
                }}
              >
                Doctor Endorsements &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
