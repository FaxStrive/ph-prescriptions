import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "H2O: Health 2 Overcome | pH Prescription",
  description:
    "Leo Szymborski's #1 Amazon Best Seller memoir on how water quality transformed his health. The science behind hydrogen therapy, mineral balance, and true water healing.",
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
      "Third-generation plumber turned water health advocate. Founder of pH Prescription. 40+ years in water systems. WQA Certified water specialist.",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: "5",
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
            #1 Amazon Best Seller
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
                The memoir of Leo Szymborski, founder of pH Prescription. Illness, trauma, loss, learning disabilities, and the drive to rise above and thrive. Water changed his life. This book explains how and why.
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
                  Call to Order: {BUSINESS.phoneTollFree}
                </a>
              </div>
            </div>

            {/* Book cover */}
            <div style={{ flexShrink: 0 }}>
              <Image
                src="https://phprescription.com/wp-content/uploads/2026/03/H2O-book-cover-top-seller-v2.jpg"
                alt="H2O: Health 2 Overcome by Leo Szymborski — #1 Amazon Best Seller"
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
                Leo Szymborski spent decades as a third-generation plumber before a personal health crisis changed everything. After struggling with chronic symptoms that conventional medicine could not fully resolve, Leo turned his attention to the one substance he had worked with his entire career: water.
              </p>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                }}
              >
                What he discovered transformed his health and ultimately became the foundation of pH Prescription. H2O: Health 2 Overcome tells that story and shares the science that convinced a skeptical tradesman turned water health advocate.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                The book is not a sales pitch. It is a personal account backed by the research Leo spent years studying, the doctors who validated it, and the clients whose lives changed after they changed their water.
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
                Third-generation plumber. Founder of pH Prescription. 40+ years in water systems and installation. WQA Certified water specialist. Health advocate and researcher.
              </p>
              <p
                style={{
                  color: "var(--color-ink-soft)",
                  lineHeight: 1.75,
                  fontSize: "0.9375rem",
                }}
              >
                Leo founded pH Prescription in {BUSINESS.founded} after witnessing how water quality directly affected the health of his clients, his family, and himself. He has since built relationships with medical doctors, researchers, and integrative health practitioners who endorse the science his systems are built on.
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

      {/* Editorial Reviews */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Editorial Reviews
          </div>
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
            What Readers Are Saying
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "1.0625rem",
            }}
          >
            Five-star reviews on Amazon
          </p>

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
                <div
                  style={{
                    color: "#F5A623",
                    fontSize: "1rem",
                    marginBottom: "0.875rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  {"★★★★★"}
                </div>
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

      {/* What the Book Covers */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
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
                  background: "#fff",
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
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.7,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.body}
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
            Leo tells his story in his own words. Three minutes that capture 40 years of water science and personal transformation.
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
              title="H2O: Health 2 Overcome — Book Trailer"
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
            Available on Amazon as an eBook. Bulk orders for health practitioners and clinic waiting rooms welcome. Call or email us directly.
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
            The Science Has Doctor Backing
          </h3>
          <p
            style={{
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              marginBottom: "1.75rem",
            }}
          >
            The claims in the book are not Leo's alone. Seven physicians and researchers have reviewed the technology and science behind pH Prescription and added their professional endorsement.
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
