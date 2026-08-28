import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "Resources | pH Prescription Water Systems",
  description: "White papers, hydration science, educational videos, warranty information, and support documentation for pH Prescription water systems.",
};

const VIDEOS = [
  { title: "Why a well-known Athlete chose Aquapellis to aid in his health and recovery", videoId: "3it1-O26hE4" },
  { title: "A Deep Dive into Tap Water: Filtering Out Toxins and Replacing with Positive Elements", videoId: "1jMEo66cve0" },
  { title: "Clean Isn't Enough: The Science Behind Water That Actually Heals the Body", videoId: "5mzAckVxLbI" },
  { title: "How to Remove Harmful Toxins in Water", videoId: "KPhqiKwnMO4" },
  { title: "The East Palestine Train Disaster's Effect on Water", videoId: "IstZXkOyoCE" },
  { title: "Environmental Impact on Our Water: What are we really exposed to?", videoId: "1vZcItSPB1Y" },
  { title: "The Importance of Total Home Water Filtration", videoId: "asyl4MdN9O8" },
  { title: "Why do I need a Drinking System if I have a Whole House Water Filtration System?", videoId: "xw35W-c4yfg" },
  { title: "What's the Difference Between Clean Water and Healthy Water?", videoId: "hAB1wj_kp-c" },
  { title: "Molecular Weight Explained", videoId: "NDak7qtxZ6Y" },
  { title: "The New pH Prescription Quad Vortex Water Filtration System", videoId: "q7iVuwpQqVk" },
  { title: "How pH Prescription was Created", videoId: "gUFjvjYVMTI" },
  { title: "Dr Nathan Bryan | Best Whole House Water Filter on the Market", videoId: "FxWHSMHg93Q" },
  { title: "Alkaline Water Filter System Whole Home - Part 4 of 4", videoId: "RFdET9vA7w0" },
  { title: "Alkaline Home Water Filter System - Alkaline Water Benefits", videoId: "yeIvq0g7-9w" },
  { title: "Alkaline Water Filter System Whole Home - Part 3 of 4", videoId: "QKesyfHe6ks" },
  { title: "Alkaline Water Filter System Whole Home - Part 2 of 4", videoId: "PsDndnbK-FA" },
  { title: "Alkaline Water Filter System Whole Home - Part 1 of 4", videoId: "nqj3WekxkZQ" },
  { title: "Alkaline Water Filter System Reviews - Josh Turner", videoId: "SPacmKV9lMw" },
  { title: "pH Prescription Alkaline Water Testimonial - Erin Sharoni", videoId: "psX6yF9RDBw" },
  { title: "pH Prescription - Structured Alkaline Water Filters and Whole House Water Filtration Systems", videoId: "3A6HEg7ljLw" },
  { title: "Alkaline Home Water Systems - pH Prescription Reviews", videoId: "IV2_iY8bwXA" },
  { title: "Arlo Guthrie Testimonial - Alkaline Home Water Systems by pH Prescription", videoId: "CycJNbMHhNM" },
  { title: "Best Alkaline Water Filter System Reviews", videoId: "8dPyBSJrBvA" },
  { title: "Alkaline Water Filter System Reviews - PH Prescription Water Filters", videoId: "fPXom2fBWCM" },
];

const RESOURCE_SECTIONS = [
  {
    title: "White Papers",
    description: "Technical documentation on molecular hydrogen therapy, QuadVortex filtration technology, mineral repletion, and alkaline pH research available upon request.",
    items: [
      "Molecular Hydrogen: Peer-Reviewed Research Summary",
      "QuadVortex Technology: Filtration, Restructuring, and H2 Infusion",
      "The Case for Mineral Repletion in Modern Water Systems",
      "Alkaline pH and Cellular Health: What the Research Actually Says",
    ],
    note: "White papers are available upon request. Contact us to receive the full documentation.",
    action: { label: `Request White Papers: ${BUSINESS.email}`, href: `mailto:${BUSINESS.email}?subject=White Paper Request` },
    borderColor: "var(--color-teal)",
  },
  {
    title: "Hydration Science & Technology",
    description: "The science behind what pH Prescription systems do and why it matters for human health.",
    items: [
      "How molecular hydrogen reaches cells and mitochondria",
      "The four-stage QuadVortex process explained",
      "Why water source and mineral content matter for cellular uptake",
      "pH and alkalinity: the difference between chemical and mineral alkalinity",
    ],
    note: "For a deeper technical consultation, schedule a free call with our team.",
    action: { label: "Schedule Free Consultation", href: "/consultation" },
    borderColor: "var(--color-teal)",
  },
  {
    title: "Educational Videos",
    description: "Video content explaining our systems, the science, installation, and what to expect.",
    items: VIDEOS.map((v) => v.title),
    note: "25 educational videos on water filtration science, system demonstrations, and customer testimonials. Available on our YouTube channel and embedded below.",
    action: { label: "Watch All on YouTube", href: "https://www.youtube.com/@phprescription" },
    borderColor: "var(--color-gold)",
  },
  {
    title: "Warranty Information",
    description: "Every pH Prescription system is backed by our warranty program when installed by a licensed plumber. Contact us for full warranty details.",
    items: [
      "Lifetime warranty coverage with licensed plumber installation",
      "What is covered and what voids the warranty",
      "How to register your warranty after installation",
      "Warranty service process and contact",
    ],
    note: "Read the full warranty terms before installation.",
    action: { label: "View Warranty Terms", href: "/warranty" },
    borderColor: "var(--color-gold)",
  },
  {
    title: "Support Documentation",
    description: "Installation manuals, maintenance guides, and troubleshooting support for pH Prescription systems.",
    items: [
      "Installation manuals (available per model)",
      "Maintenance schedules and filter replacement guides",
      "Troubleshooting common questions",
      "How to reach our technical support team",
    ],
    note: "Manuals are provided at time of purchase and are available by request.",
    action: { label: `Request Documentation: ${BUSINESS.email}`, href: `mailto:${BUSINESS.email}?subject=Support Documentation Request` },
    borderColor: "var(--color-slate)",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Knowledge Base"
        title="Resources"
        subhead="White papers, hydration science, educational videos, warranty terms, and support documentation for pH Prescription clients and partners."
        image="/images/lifestyle2/idw-people-drinking-2.jpg"
        imageAlt="People sharing glasses of clean filtered drinking water"
        minHeight="54vh"
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {RESOURCE_SECTIONS.map((section) => (
              <div
                key={section.title}
                style={{
                  background: "#fff",
                  padding: "2rem",
                  borderLeft: `4px solid ${section.borderColor}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.375rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.75,
                    marginBottom: "1rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {section.description}
                </p>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 1.25rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.375rem",
                  }}
                >
                  {section.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "var(--color-ink-soft)",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: section.borderColor, fontWeight: 700, marginTop: "0.05rem", flexShrink: 0 }}>--</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p
                    style={{
                      color: "var(--color-ink-soft)",
                      fontSize: "0.875rem",
                      fontStyle: "italic",
                      marginBottom: "1rem",
                    }}
                  >
                    {section.note}
                  </p>
                )}
                {section.action.href.startsWith("/") || section.action.href.startsWith("https://") ? (
                  section.action.href.startsWith("/") ? (
                    <Link
                      href={section.action.href}
                      style={{
                        color: "var(--color-teal)",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.9375rem",
                      }}
                    >
                      {section.action.label}
                    </Link>
                  ) : (
                    <a
                      href={section.action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${section.action.label}, opens in a new tab`}
                      style={{
                        color: "var(--color-teal)",
                        textDecoration: "none",
                        fontWeight: 500,
                        fontSize: "0.9375rem",
                      }}
                    >
                      {section.action.label}
                    </a>
                  )
                ) : (
                  <a
                    href={section.action.href}
                    style={{
                      color: "var(--color-teal)",
                      textDecoration: "none",
                      fontWeight: 500,
                      fontSize: "0.9375rem",
                    }}
                  >
                    {section.action.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/svc-service-mom-baby-kitchen.jpg"
        imageAlt="Mother holding her baby while filling a glass of filtered water in the kitchen"
        statement="Learn what is in your water,"
        statementAccent="then decide what to do about it."
      />

      {/* Video Library */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
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
            Educational Content
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
            Video Library
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "1.0625rem",
              maxWidth: "560px",
              margin: "0 auto 3rem",
            }}
          >
            25 educational videos covering water science, system demonstrations, and customer testimonials.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
              gap: "2rem",
            }}
          >
            {VIDEOS.map((video) => (
              <div key={video.videoId}>
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
                    src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
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
                <p
                  style={{
                    marginTop: "0.625rem",
                    fontSize: "0.875rem",
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.5,
                  }}
                >
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Cannot Find What You Need?
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Our team is available by phone or email. If you need documentation, have a technical question, or are looking for something specific, call or write and we will get it to you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
              Call {BUSINESS.phoneTollFree}
            </a>
            <Link href="/contact" className="btn btn-primary">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
