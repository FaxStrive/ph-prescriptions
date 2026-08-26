import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "About pH Prescription | Founded 2005, Palm City FL",
  description:
    "pH Prescription was founded in 2005 by Leo Szymborski in Palm City, FL. WQA Certified water health systems made in the USA. 40+ years experience. Serving all 50 states.",
};

const TEAM_MEMBERS = [
  {
    name: "Leo G. Szymborski",
    title: "President / Founder",
    photo: "/images/team/leo-szymborski.jpg",
    bio: "Nationally recognized water innovator with over 40 years of hands-on experience in water treatment, purification, and system design.",
  },
  {
    name: "Leann Szymborski",
    title: "Team Member",
    photo: "/images/team/leann-szymborski.jpg",
    bio: "Part of the founding family behind pH Prescription's mission to make genuinely healthy water accessible.",
  },
  {
    name: "Aida Aloian",
    title: "Team Member",
    photo: "/images/team/aida-aloian.jpg",
    bio: "Dedicated to helping customers find the right water solution for their home or business.",
  },
  {
    name: "Leo Szymborski Jr.",
    title: "Team Member",
    photo: "/images/team/leo-szymborski-jr.jpg",
    bio: "Second-generation water specialist continuing the family's commitment to water health.",
  },
  {
    name: "Walker Wayne Baker Jr.",
    title: "Team Member",
    photo: "/images/team/walker-baker.jpg",
    bio: "Supporting pH Prescription customers with expertise in system selection and installation.",
  },
  {
    name: "Alison Howland",
    title: "Team Member",
    photo: "/images/team/alison-howland.jpg",
    bio: "Committed to customer success and the pH Prescription mission of healthy water for every environment.",
  },
  {
    name: "Dean Szymborski",
    title: "Team Member",
    photo: "/images/team/dean-szymborski.jpg",
    bio: "Bringing water treatment expertise to every customer interaction.",
  },
  {
    name: "James Caulfield",
    title: "Team Member",
    photo: "/images/team/james-caulfield.jpg",
    bio: "Part of the pH Prescription team helping customers access genuinely healthy water.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="max-content" style={{ maxWidth: "760px" }}>
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
            Our Story
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Water Health Science
            <br />
            Since {BUSINESS.founded}
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            pH Prescription was built on a simple premise: the water you drink and bathe in profoundly affects your
            health. Founded by Leo Szymborski in Palm City, Florida, we have spent two decades refining the science
            of water and delivering it to homes and businesses across all 50 states.
          </p>
        </div>
      </section>

      {/* Mission / Vision / History */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="max-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  marginBottom: "1rem",
                }}
              >
                Mission
              </span>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-ink-soft)" }}>
                We are committed to providing the highest quality purification and filtering products, systems and
                technology of water in the most cost-effective way for residential and commercial businesses such as
                offices, medical facilities, food service, salons, spas, hospitality, marine and all industries
                needing finely filtered water.
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  marginBottom: "1rem",
                }}
              >
                Vision
              </span>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-ink-soft)" }}>
                Our vision is to innovate and create technology that, at reasonable cost, can supply the most
                finely filtered and healthiest water for all.
              </p>
            </div>
            <div>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  marginBottom: "1rem",
                }}
              >
                History
              </span>
              <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-ink-soft)" }}>
                Family owned and operated, founded in 2005 and headquartered in Palm City, Florida, pH Prescription
                has become the leader in finely filtered, re-mineralized and hydrogen-infused water through
                innovative natural-based science and technology. Growth from local South-East Florida to now serving
                all 50 states and international locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="max-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-teal)",
                    marginBottom: "1rem",
                  }}
                >
                  Founder
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 400,
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                    color: "var(--color-ink)",
                    margin: "0 0 1.25rem",
                  }}
                >
                  Leo G. Szymborski
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "var(--color-ink-mute)", fontStyle: "italic", marginBottom: "1.5rem" }}>
                  President / Founder, pH Prescription
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem" }}>
                <div
                  style={{
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    flexShrink: 0,
                    border: "2px solid var(--color-border-soft)",
                  }}
                >
                  <Image
                    src="/images/team/leo-szymborski.jpg"
                    alt="Leo G. Szymborski, Founder of pH Prescription"
                    width={96}
                    height={96}
                    style={{ width: "96px", height: "96px", objectFit: "cover" }}
                  />
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
                  }}
                >
                  "Water Doctors Recommend"
                </blockquote>
              </div>
            </div>

            <div style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--color-ink-soft)" }}>
              <p style={{ marginBottom: "1.25rem" }}>
                Leo G. Szymborski is a nationally recognized water innovator, entrepreneur, and founder of
                pH Prescription, LLC. With over 40 years of hands-on experience in water treatment, purification,
                and system design, Leo has dedicated his life to transforming the way we think about and interact
                with water.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                His journey began in the industrial landscape of New Jersey, where he grew up in the shadow of
                chemical plants. Born with chronic health issues and struggling in school, Leo was mislabeled as
                "dumb" by teachers who failed to recognize his dyslexia. It was not until later in life that he
                learned the truth, unlocking a deeper understanding of the resilience and determination that had
                carried him through those early challenges.
              </p>
              <p style={{ marginBottom: "1.25rem" }}>
                Being underestimated became his superpower. Leo learned to trust his instincts, developing an
                expertise in water science that no classroom could have taught. His personal experience of being
                poisoned by the water he drank as a child became the driving force behind pH Prescription.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Today, pH Prescription is headquartered in a 10,000 square foot facility in Palm City, Florida,
                serving customers across all 50 states and internationally. The company's Aquapellis brand
                extends the same water health science to personal care products.
              </p>
              <Link
                href="/book"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  textDecoration: "none",
                }}
              >
                Read Leo's memoir: H2O: Health 2 Overcome &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0", borderTop: "1px solid var(--color-border-soft)" }}>
        <div className="max-content">
          <div style={{ marginBottom: "3rem" }}>
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
              The Team
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--color-ink)",
                margin: 0,
              }}
            >
              The People Behind pH Prescription
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "2px solid var(--color-border-soft)",
                    background: "var(--color-border-soft)",
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={80}
                    height={80}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </div>
                <div>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "1rem",
                      letterSpacing: "-0.01em",
                      color: "var(--color-ink)",
                      lineHeight: 1.25,
                    }}
                  >
                    {member.name}
                  </span>
                  <span
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-mute)",
                      marginTop: "0.2rem",
                    }}
                  >
                    {member.title}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: "0.875rem", lineHeight: 1.6, color: "var(--color-ink-soft)" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "4rem 0" }}>
        <div className="max-content">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: "2rem",
              textAlign: "center",
            }}
          >
            {[
              { value: "2005", label: "Founded" },
              { value: "40+", label: "Years Experience" },
              { value: "50", label: "States Served" },
              { value: "7+", label: "Doctor Endorsements" },
              { value: "10,000 sq ft", label: "USA Facility" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "-0.03em",
                    color: "#B9E3EF",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "0.5rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aquapellis mention */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="max-content" style={{ maxWidth: "700px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
              marginBottom: "1rem",
            }}
          >
            Our Brands
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.75, color: "var(--color-ink-soft)", marginBottom: "1.5rem" }}>
            pH Prescription is the water filtration company. Aquapellis is our personal care brand, extending
            finely filtered water technology to showers, skincare, and hair health. Both brands are built on the
            same science and the same commitment to water that actively supports the body.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/aquapellis"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-teal)",
                textDecoration: "none",
              }}
            >
              Learn about Aquapellis &rarr;
            </Link>
            <Link
              href="/consultation"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--color-navy)",
                color: "#fff",
                padding: "0.875rem 1.5rem",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
