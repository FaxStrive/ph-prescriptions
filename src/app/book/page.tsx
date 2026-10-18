import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "H2O: Health 2 Overcome | pH Prescription",
  description:
    "Leo Szymborski's #1 Best Seller. The inspirational memoir of pH Prescription founder Leo G. Szymborski, whose story is one of illness, trauma, loss, learning disabilities, and the overwhelming drive to rise above and thrive.",
};

const AMAZON_URL =
  "https://www.amazon.com/dp/B0FYRZKGMT";

const EDITORIAL_REVIEWS = [
  "Leo G. Szymborski's memoir is an extraordinary account of endurance, innovation, and personal rebirth. Told with raw honesty and intimate detail, it captures the challenges of growing up misunderstood, surviving life-threatening trauma, and building a purpose-driven life rooted in family, faith, and clean water.",
  "From blue-collar grit to scientific breakthrough, this book is a rare combination of emotional resonance and entrepreneurial spirit. It is for anyone who has ever felt lost, dismissed, or underestimated. Leo doesn't just survive; he rises, and brings others with him.",
  "Leo's battle with dyslexia and the school system will resonate with anyone who has felt 'stupid' in the classroom but brilliant in the world. It redefines what intelligence looks like.",
  "From a near-fatal childhood illness to witnessing a school shooting at seven years old, Leo speaks directly to those who have lived through the unthinkable and are still standing and thriving.",
  "Leo was poisoned by the water he drank as a child, and he has created real, scalable solutions. His story is personal and global at once.",
];

export default function BookPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leo G. Szymborski",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
    description:
      "Third-generation plumber and founder of pH Prescription. 40+ years of hands-on experience in water treatment. 30+ Year WQA Member.",
    knowsAbout: [
      "Water Quality",
      "Molecular Hydrogen Therapy",
      "Reverse Osmosis",
      "Water Filtration",
      "Holistic Health",
    ],
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "H2O: Health 2 Overcome",
    author: {
      "@type": "Person",
      name: "Leo G. Szymborski",
    },
    description:
      "The inspirational memoir of pH Prescription Founder Leo G. Szymborski. Illness, trauma, loss, learning disabilities, and the overwhelming drive to rise above and thrive as a family man and entrepreneur.",
    isbn: "B0FYRZKGMT",
    bookFormat: "https://schema.org/EBook",
    inLanguage: "en",
    offers: {
      "@type": "Offer",
      url: AMAZON_URL,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Amazon",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* Hero */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "6rem 0 5rem",
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              display: "inline-block",
              background: "var(--color-navy)",
              color: "#fff",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "0.35rem 0.875rem",
              marginBottom: "1.25rem",
            }}
          >
            #1 Best Seller
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                pH Prescription Book
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.25rem,5vw,3.5rem)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                H2O: Health 2 Overcome
              </h1>
              <p
                style={{
                  fontSize: "1.125rem",
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  maxWidth: "560px",
                  marginBottom: "2rem",
                }}
              >
                The inspirational memoir of Leo Szymborski, founder of pH Prescription. Illness, trauma, loss, learning disabilities, and the overwhelming drive to rise above and thrive as a family man and entrepreneur.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "var(--color-navy)",
                    color: "#fff",
                    padding: "0.9375rem 1.75rem",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                >
                  Get My Copy on Amazon
                </a>
                <a
                  href={`tel:${BUSINESS.phoneTollFree}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid var(--color-navy)",
                    color: "var(--color-navy)",
                    padding: "0.9375rem 1.5rem",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                >
                  Call {BUSINESS.phoneTollFree}
                </a>
              </div>
            </div>

            {/* Book cover */}
            <div style={{ flexShrink: 0 }}>
              <Image
                src="/products/H2O-book-cover-top-seller-v2.jpg"
                alt="H2O: Health 2 Overcome by Leo Szymborski - #1 Best Seller"
                width={180}
                height={260}
                unoptimized
                style={{ display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About the book */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
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
                  fontSize: "1.875rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                The Story Behind the Book
              </h2>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                A life-threatening illness propelled Leo Szymborski, a third-generation plumber and pipefitter, on a journey to heal. Research from medical doctors, science and leaders in healing fueled his exploration into how to use water to create the ideal environment for the body to heal itself.
              </p>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                H2O: Health 2 Overcome is his inspirational memoir, a story of illness, trauma, loss, learning disabilities, and the overwhelming drive to rise above and thrive as a family man and entrepreneur.
              </p>
            </div>

            <div
              style={{
                background: "#fff",
                color: "var(--color-ink)",
                padding: "2rem",
                borderTop: "4px solid var(--color-navy)",
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-teal)",
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
                Leo G. Szymborski
              </h3>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.75,
                  fontSize: "0.9375rem",
                  marginBottom: "1rem",
                }}
              >
                Third-generation plumber. Founder of pH Prescription. 40+ years of hands-on experience in water treatment, purification, and system design. 30+ Year WQA Member.
              </p>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.75,
                  fontSize: "0.9375rem",
                }}
              >
                Over 20 years ago, a life-threatening illness sent Leo searching for how water could help the body heal itself. He founded pH Prescription in {BUSINESS.founded}, and leading medical doctors endorsed his finely filtered systems and began recommending pH Prescription to their patients.
              </p>
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--color-border-soft)",
                }}
              >
                <Link
                  href="/about/leo"
                  style={{
                    color: "var(--color-teal)",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                  }}
                >
                  Read more about Leo &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author photo */}
      <section style={{ background: "#fff", padding: "5rem 0 1rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <figure style={{ margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: "420px", aspectRatio: "2 / 3", margin: "0 auto", overflow: "hidden", background: "var(--color-surface)" }}>
              <Image
                src="/images/book/leo-book-yacht.jpg"
                alt="Leo Szymborski holding a copy of H2O: Health 2 Overcome aboard the H2O Leo in Key West, Florida"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <figcaption>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                A Florida Story
              </div>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                Leo with H2O: Health 2 Overcome in Key West. The water that made him sick as a child in industrial
                New Jersey is the same substance that built his health, his family business, and this book.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, margin: 0 }}>
                Leo grew up in the shadow of chemical plants in New Jersey and founded pH Prescription in Palm City,
                Florida, in {BUSINESS.founded}.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Editorial Reviews */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--color-navy)",
              marginBottom: "3rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Editorial Reviews
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {EDITORIAL_REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{
                  background: "var(--color-surface)",
                  padding: "1.75rem",
                  borderLeft: "3px solid var(--color-navy)",
                }}
              >
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.75,
                    fontSize: "0.9375rem",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{review}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Trailer */}
      <section
        style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0" }}
      >
        <div
          className="container"
          style={{ maxWidth: "680px", textAlign: "center" }}
        >
          <div
            style={{
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Book Trailer
          </div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
              color: "#fff",
            }}
          >
            Watch the H2O: Health 2 Overcome Trailer
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Watch the book trailer for H2O: Health 2 Overcome.
          </p>
          <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: 0,
            overflow: "hidden",
            marginBottom: "2rem",
            maxWidth: "640px",
            margin: "0 auto 2rem",
          }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/GhoxueDIF6o"
              title="H2O: Health 2 Overcome - Book Trailer"
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
          <a
            href={`tel:${BUSINESS.phoneTollFree}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fff",
              color: "var(--color-navy)",
              padding: "0.9375rem 1.75rem",
              fontSize: "0.8125rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
          >
            Call to Learn More: {BUSINESS.phoneTollFree}
          </a>
        </div>
      </section>

      {/* Order CTA */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div
          className="container"
          style={{ maxWidth: "620px", textAlign: "center" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
              color: "var(--color-navy)",
            }}
          >
            Get Your Copy Today
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Available on Amazon as an eBook. Call or email us with any questions.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--color-navy)",
                color: "#fff",
                padding: "0.9375rem 1.75rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Get My Copy on Amazon
            </a>
            <a
              href={`tel:${BUSINESS.phoneTollFree}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--color-navy)",
                color: "var(--color-navy)",
                padding: "0.9375rem 1.5rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Call {BUSINESS.phoneTollFree}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid var(--color-border-strong)",
                color: "var(--color-ink)",
                padding: "0.9375rem 1.5rem",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Doctors / endorsement bridge */}
      <section style={{ background: "var(--color-surface)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "740px", textAlign: "center" }}>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.5rem",
              color: "var(--color-navy)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Doctor Endorsements
          </h3>
          <p
            style={{
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              marginBottom: "1.75rem",
            }}
          >
            Seven doctors, dentists and researchers have put their names behind pH Prescription systems.
          </p>
          <Link
            href="/experts"
            style={{
              color: "var(--color-teal)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            See what the experts say &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}
