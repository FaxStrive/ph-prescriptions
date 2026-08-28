import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

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
      <PageHero
        eyebrow="Our Story"
        title="Water Health Science"
        titleAccent={`Since ${BUSINESS.founded}`}
        subhead="pH Prescription was built on a simple premise: the water you drink and bathe in profoundly affects your health. Founded by Leo Szymborski in Palm City, Florida, we have spent two decades refining the science of water and delivering it to homes and businesses across all 50 states."
        image="/images/lifestyle2/svc-service-family-sink.jpg"
        imageAlt="Family filling a glass of clean filtered water together at their kitchen sink"
        ctas={[
          { label: "Free Consultation", href: "/consultation", variant: "primary" },
          { label: "Meet the Experts", href: "/experts", variant: "outline" },
        ]}
      />

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

      {/* Photo band */}
      <ImageBand
        image="/images/lifestyle2/idw-family-water-2.jpg"
        imageAlt="Family sharing glasses of clean filtered water around the kitchen table"
        statement="Healthy water for"
        statementAccent="every family, every tap."
      />

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
                  &ldquo;Water Doctors Recommend&rdquo;
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
                &ldquo;dumb&rdquo; by teachers who failed to recognize his dyslexia. It was not until later in life that he
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
                serving customers across all 50 states and internationally. The company&apos;s Aquapellis brand
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
                Read Leo&apos;s memoir: H2O: Health 2 Overcome &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical endorsements */}
      <section style={{ background: "#fff", padding: "0 0 5rem" }}>
        <div className="max-content">
          <div
            style={{
              borderTop: "1px solid var(--color-border-soft)",
              paddingTop: "3rem",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ maxWidth: "420px" }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  marginBottom: "0.75rem",
                }}
              >
                Clinical Endorsements
              </span>
              <p style={{ margin: 0, fontSize: "0.9375rem", lineHeight: 1.7, color: "var(--color-ink-soft)" }}>
                The science behind our systems carries the independent endorsement of practicing physicians and
                researchers who use pH Prescription water themselves.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.75rem", alignItems: "center" }}>
              {[
                { name: "Dr. Debra DeMarta", cred: "MD, FACS", photo: "/images/team/deborah-demarta.jpg", alt: "Portrait of Dr. Debra DeMarta, endorsing physician" },
                { name: "Dr. Jerry Tennant", cred: "MD, MD(H)", photo: "/images/team/dr-jerry-tennant.png", alt: "Portrait of Dr. Jerry Tennant, endorsing physician" },
                { name: "Dr. Nathan Bryan", cred: "PhD", photo: "/images/team/dr-nathan-bryan.png", alt: "Portrait of Dr. Nathan Bryan, molecular biologist" },
              ].map((doc) => (
                <div key={doc.name} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: "2px solid var(--color-border-soft)",
                      background: "var(--color-surface)",
                    }}
                  >
                    <Image
                      src={doc.photo}
                      alt={doc.alt}
                      width={56}
                      height={56}
                      style={{ width: "56px", height: "56px", objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <span style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-ink)", lineHeight: 1.3 }}>
                      {doc.name}
                    </span>
                    <span style={{ display: "block", fontSize: "0.75rem", color: "var(--color-ink-mute)" }}>{doc.cred}</span>
                  </div>
                </div>
              ))}
              <Link
                href="/experts"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  textDecoration: "none",
                }}
              >
                All endorsements &rarr;
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

      {/* In the field */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="max-content">
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
              In The Field
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
              Where Our Water Goes to Work
            </h2>
          </div>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/lifestyle/family-thumbs-up.jpg",
                imageAlt: "Happy family giving a thumbs up for the filtered water in their home",
                eyebrow: "Residential",
                title: "Whole Home Confidence",
                body: "Point-of-entry systems that protect every tap, shower, and appliance in the house.",
                href: "/residential",
                linkLabel: "Home solutions",
              },
              {
                image: "/images/lifestyle2/idw-people-drinking-1.jpg",
                imageAlt: "Friends raising glasses of clean filtered drinking water together",
                eyebrow: "Wellness",
                title: "Water You Can Feel",
                body: "Re-mineralized, hydrogen-infused alkaline water that supports the body instead of just passing through it.",
                href: "/technology",
                linkLabel: "The science",
              },
              {
                image: "/images/trade-shows/team-at-booth.jpg",
                imageAlt: "pH Prescription team members at the company booth during a wellness trade show",
                eyebrow: "On The Road",
                title: "Expos and Real Conversations",
                body: "From medical conventions to wellness expos, we show up in person to demonstrate the systems and answer hard questions.",
                href: "/about/community",
                linkLabel: "Community care",
              },
            ]}
          />
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
