import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Marine and RV Water Systems | pH Prescription",
  description:
    "Customized marine and RV water systems, from desalination to finely filtered drinking, cooking and bathing. Contact us for a complimentary consultation.",
};

const PROBLEMS = [
  "Saltwater and brackish water sources contain dissolved salts, sediment, biological contaminants, and high TDS that standard filters cannot handle",
  "Marina water supply is inconsistent in quality - sometimes municipal, sometimes well water, sometimes brackish - and changes with location",
  "Hard water and dissolved minerals accelerate corrosion of plumbing, fixtures, water heaters, and galley appliances on vessels",
  "Space and power constraints on vessels and RVs make most residential water treatment systems impractical or impossible to install",
];

const WHY_FAILS = [
  "Residential carbon and sediment filters are not designed for saltwater or brackish input and foul quickly in marine environments",
  "Standard RO systems require significant pressure (typically 60-80 PSI) and produce substantial wastewater - impractical for mobile platforms with limited water storage",
  "UV sterilization alone does not address dissolved salts, minerals, or chemical contamination in marine water sources",
  "Most marine water systems on the market filter sediment and taste only - they do not address chloramine, heavy metals, or hardness at the level a live-aboard demands",
];

const SOLUTIONS = [
  {
    heading: "Compact Multi-Stage Filtration for Marine and RV",
    body: "Our marine and RV systems are engineered to fit in confined spaces - under-counter, in-cabinet, or in-line installations. Multi-stage KDF, catalytic carbon, and sediment filtration work together to handle variable input water quality from marinas, campgrounds, and remote hookups.",
    image: "/images/products-extra/drinking-water-system.jpg",
    imageAlt:
      "Compact twin-cartridge filtration system installed inside an open cabinet beneath a double-sink counter",
  },
  {
    heading: "Corrosion and Scale Control",
    body: "Mineral restructuring media neutralizes scale-forming calcium and magnesium without chemicals or salt-based softeners. Protecting plumbing, fixtures, water heaters, and galley appliances from mineral buildup extends service life in saltwater-adjacent environments.",
    image: "/images/commercial/dw-water-softener.jpg",
    imageAlt:
      "Product lineup of water conditioning tanks in gray, black, and almond with digital valves and brine tanks on a white background",
  },
  {
    heading: "Heavy Metal and Chemical Reduction",
    body: "KDF-55 media is proven to reduce chloramines, chlorine, bacteria, iron, and most heavy metals. Catalytic carbon filters out chloramines, PFOS, pesticides, and herbicides.",
    image: "/images/lifestyle2/idw-tap-clean-2.jpg",
    imageAlt:
      "Man filling a drinking glass from a dedicated slim chrome filtration faucet beside the main galley-style tap",
  },
  {
    heading: "Customized for Your Vessel",
    body: "pH Prescription will design a system curated for your marine or recreational vehicle, from desalination to finely filtered drinking, cooking and bathing. Contact us for a complimentary consultation.",
    image: "/images/products-extra/whole-home-system.jpg",
    imageAlt:
      "Hand tightening a clear inline filter housing with a service wrench next to a water meter on compact plumbing",
  },
];

const WHO_FOR = [
  "Liveaboard cruising and sailing vessels",
  "Charter boats and fishing boats",
  "Superyachts and luxury motor vessels",
  "Commercial and working vessels",
  "Class A motorhomes and fifth-wheel RVs",
  "Travel trailers and camper vans",
  "Remote cabins and off-grid properties",
  "Coastal and island vacation properties",
];

const FAQS = [
  {
    q: "Can your systems handle saltwater input?",
    a: "pH Prescription designs a customized system for your boat, yacht or RV, from desalination to finely filtered drinking, cooking and bathing. Contact us for a complimentary consultation to discuss your specific water source and application.",
  },
  {
    q: "How is a marine or RV system configured?",
    a: "pH Prescription will design a system curated for your marine or recreational vehicle. Contact us for a complimentary consultation.",
  },
  {
    q: "What is the filter replacement schedule for a marine system?",
    a: "Filter replacement intervals depend on usage volume, input water quality, and which stages your system includes. pH Prescription offers a Replenishment Program that you can opt into for savings on regular filter replenishment.",
  },
];

export default function MarinePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Marine and RV Water Filtration Systems",
    description:
      "Customized water systems for your boat, yacht or RV, from desalination to finely filtered drinking, cooking and bathing.",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.state,
        postalCode: BUSINESS.address.zip,
      },
    },
    areaServed: "US",
    serviceType: "Marine Water Treatment",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Marine and RV"
        title="Marine and RV Water"
        titleAccent="Systems"
        subhead="Customized systems for your boat, yacht or RV. From desalination to finely filtered drinking, cooking and bathing."
        image="/images/lifestyle2/idw-ocean-aerial-1.jpg"
        imageAlt="Aerial view of turquoise ocean water with white foam churning across the surface"
        minHeight="58vh"
        ctas={[
          { label: "Request a Marine Consultation", href: `tel:${BUSINESS.phone}`, variant: "primary" },
          { label: "Free Consultation", href: "/consultation", variant: "outline" },
        ]}
      />

      {/* Trust bar */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "2rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "2.5rem", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
            {["30+ Year WQA Member", "Compact for Marine Use"].map((item) => (
              <span
                key={item}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  opacity: 0.92,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ width: "4px", height: "4px", background: "var(--color-teal)", display: "inline-block", flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            The Problem
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            What Marine and RV Water Sources Contain
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {PROBLEMS.map((p) => (
              <div key={p} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem 1.25rem", background: "#fff" }}>
                <span style={{ color: "var(--color-teal)", fontWeight: 700, flexShrink: 0, fontSize: "1.125rem", lineHeight: 1 }}>+</span>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9375rem", margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Standard Filtration Fails */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Why Standard Filtration Fails
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Residential Filters Are Not Built for Marine Environments
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {WHY_FAILS.map((item) => (
              <div key={item} style={{ background: "var(--color-surface)", padding: "1.25rem", borderLeft: "3px solid var(--color-navy)" }}>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9375rem", margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section style={{ background: "var(--color-surface)", padding: "5rem 0" }}>
        <div className="container">
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem", textAlign: "center" }}>
            The Solution
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: "var(--color-navy)", marginBottom: "3rem", letterSpacing: "-0.02em", textAlign: "center" }}>
            How pH Prescription Solves It
          </h2>
          <PhotoCardGrid
            columns={2}
            cards={SOLUTIONS.map((s) => ({
              image: s.image,
              imageAlt: s.imageAlt,
              title: s.heading,
              body: s.body,
            }))}
          />
        </div>
      </section>

      {/* Open water band */}
      <ImageBand
        image="/images/lifestyle2/idw-water-surface-2.jpg"
        imageAlt="Sunlit turquoise sea surface with soft bokeh sparkles under a pale sky"
        statement="Clean water,"
        statementAccent="any harbor."
      />

      {/* Who This Is For */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
            Who This Is For
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
            Marine and Mobile Environments We Serve
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.75rem" }}>
            {WHO_FOR.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.875rem 1rem", background: "var(--color-surface)" }}>
                <span style={{ color: "var(--color-teal)", fontWeight: 700, flexShrink: 0 }}>+</span>
                <span style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--color-cream)", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.875rem", color: "var(--color-navy)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {FAQS.map((faq, i) => (
              <details key={i} style={{ borderBottom: "1px solid var(--color-border-soft)" }}>
                <summary
                  style={{
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
                  }}
                >
                  {faq.q}
                  <span style={{ flexShrink: 0, color: "var(--color-teal)", fontSize: "1.25rem", fontFamily: "var(--font-sans)" }}>+</span>
                </summary>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, paddingBottom: "1.5rem", fontSize: "0.9375rem" }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-navy)", color: "#fff", padding: "5rem 0" }}>
        <div className="container" style={{ maxWidth: "620px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "0.75rem", letterSpacing: "-0.02em", color: "#fff" }}>
            Get a Marine Water Assessment
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: "2rem" }}>
            We assess your vessel or mobile platform, your typical water sources, and your usage patterns - then configure a system that fits your space, power budget, and water quality goals.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href={`tel:${BUSINESS.phone}`} className="btn btn-white">
              Call {BUSINESS.phone}
            </a>
            <Link
              href="/consultation"
              className="btn btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.6)", color: "#fff" }}
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
