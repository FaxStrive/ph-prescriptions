import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Business Water Systems | pH Prescription",
  description:
    "Commercial water treatment for restaurants, offices, and facilities. WQA Certified systems with lifetime warranties. Serving all 50 states.",
};

const SECTIONS = [
  {
    title: "Restaurant & Hospitality",
    desc: "Protect equipment, enhance taste, and give guests the purest water. From ice machines to espresso bars - pH Prescription has the commercial solution.",
    href: "/business/restaurant",
    from: "By consultation",
    image: "/images/lifestyle2/svc-service-clean-glass.jpg",
    imageAlt: "Tall glass of ice water beaded with condensation against a teal backdrop",
  },
  {
    title: "Water Coolers",
    desc: "Paddle-touch hot/cold commercial coolers with inline filtration. Alkaline, remineralized, hydrogen-infused water at every workstation.",
    href: "/business/coolers",
    from: "From $2,613.60",
    image: "/images/lifestyle2/svc-service-glass-fill.jpg",
    imageAlt: "Employee filling a glass from a dedicated filtered-water faucet",
  },
  {
    title: "Drinking Systems",
    desc: "Under-counter and point-of-use commercial drinking systems - the same doctor-recommended technology, scaled for your business.",
    href: "/business/drinking-systems",
    from: "By consultation",
    image: "/images/commercial/cfw-dual-ro-faucet-kitchen-sink-v2.jpg",
    imageAlt: "Stainless double sink with a dedicated reverse osmosis faucet installed beside the main tap",
  },
  {
    title: "Total Home/Business",
    desc: "Whole-facility restructured water from every tap and fixture. Our Premier system transforms the entire water supply of your building.",
    href: "/business/total",
    from: "By consultation",
    image: "/images/commercial/cfw-commercial-tank-warehouse-install-1-v2.jpg",
    imageAlt: "Large composite media tank and brine tank installed inside a commercial warehouse",
  },
];

const INDUSTRIES = [
  "Restaurants & Cafes",
  "Hotels & Resorts",
  "Medical Offices",
  "Spas & Wellness",
  "Corporate Offices",
  "Gyms & Fitness",
];

const PROCESS = [
  {
    eyebrow: "Step 01",
    title: "Facility Assessment",
    body: "We review your water quality data and map your usage before recommending any system - no guesswork, no overselling.",
    image: "/images/lifestyle2/pa-technician-clipboard.jpg",
    imageAlt: "Technician in uniform reviewing notes on a clipboard beside a red toolbox in a kitchen",
  },
  {
    eyebrow: "Step 02",
    title: "Professional Install",
    body: "Our network of licensed installers delivers professional installation in all 50 states, sized to your facility.",
    image: "/images/commercial/dwc-installation-real.jpg",
    imageAlt: "Commercial filtration system being fitted during a real facility installation",
  },
  {
    eyebrow: "Step 03",
    title: "Ongoing Service",
    body: "Filter plans and scheduled maintenance keep every system on spec - backed by our lifetime warranty.",
    image: "/images/commercial/dwc-boiler-feed-water-softening.jpg",
    imageAlt: "Boiler-feed water softening skid maintained inside a mechanical room",
  },
];

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="For Your Business"
        title="Commercial Water"
        titleAccent="Treatment"
        subhead="WQA Certified systems built for restaurants, medical offices, hotels, and any facility where water quality directly affects your guests, equipment, and reputation. Same lifetime warranty. Same proprietary QuadVortex technology."
        image="/images/hero/business-hero.jpg"
        imageAlt="Rows of membrane filtration units and stainless piping inside a commercial water treatment plant"
        ctas={[
          { label: "Request Business Quote", href: "/consultation", variant: "white" },
          { label: BUSINESS.phoneTollFree, href: `tel:${BUSINESS.phoneTollFree}`, variant: "outline" },
        ]}
      />

      {/* Solutions grid */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2.125rem)",
              color: "var(--color-navy)",
              marginBottom: "0.75rem",
            }}
          >
            Commercial Solutions
          </h2>
          <p
            style={{
              color: "rgba(27,58,107,0.65)",
              marginBottom: "2.5rem",
              maxWidth: "560px",
            }}
          >
            Every system scales to your facility. Free water consultation included with every business quote.
          </p>
          <PhotoCardGrid
            columns={2}
            cards={SECTIONS.map((s) => ({
              image: s.image,
              imageAlt: s.imageAlt,
              eyebrow: s.from,
              title: s.title,
              body: s.desc,
              href: s.href,
              linkLabel: "Explore",
            }))}
          />
        </div>
      </section>

      <ImageBand
        image="/images/commercial/cfw-commercial-ro-north-south-tanks-v2.jpg"
        imageAlt="Commercial batch tanks and reverse osmosis equipment inside a production facility"
        statement="Engineered for every gallon"
        statementAccent="your facility uses"
      />

      {/* Industries */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "2rem",
            }}
          >
            Industries We Serve
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {INDUSTRIES.map((name, i) => (
              <div
                key={name}
                style={{
                  border: "1px solid rgba(27,58,107,0.1)",
                  borderTop: "3px solid var(--color-teal)",
                  padding: "1.5rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    color: "var(--color-teal)",
                    marginBottom: "0.625rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--color-navy)",
                    fontWeight: 600,
                  }}
                >
                  {name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "2rem",
            }}
          >
            How Commercial Engagements Work
          </h2>
          <PhotoCardGrid
            columns={3}
            cards={PROCESS.map((p) => ({
              image: p.image,
              imageAlt: p.imageAlt,
              eyebrow: p.eyebrow,
              title: p.title,
              body: p.body,
            }))}
          />
        </div>
      </section>

      {/* Why businesses trust us */}
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "4rem 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  marginBottom: "2rem",
                }}
              >
                Why Businesses Choose pH Prescription
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                {[
                  {
                    title: "Free Water Consultation",
                    body: "We review your water quality data before recommending any system - no guesswork, no overselling.",
                  },
                  {
                    title: "Nationwide Service",
                    body: "Serving all 50 states. Our network of licensed installers means you get professional installation anywhere.",
                  },
                  {
                    title: "Lifetime Warranty",
                    body: "Every commercial system includes our lifetime warranty with licensed plumber installation.",
                  },
                  {
                    title: "20+ Years Commercial Experience",
                    body: "Founded in 2005 by Leo Szymborski, a third-generation plumber with 40+ years of water expertise.",
                  },
                ].map((item) => (
                  <div key={item.title}>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.0625rem",
                        marginBottom: "0.5rem",
                        color: "var(--color-teal)",
                      }}
                    >
                      {item.title}
                    </div>
                    <p
                      style={{
                        color: "var(--color-ink-soft)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
              <Image
                src="/images/commercial/cfw-technician-family-2.jpg"
                alt="Water treatment technician shaking hands with a client at her front door"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-cream)", padding: "3.5rem 0" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
              color: "var(--color-navy)",
              marginBottom: "1rem",
            }}
          >
            Get a Free Business Consultation
          </h2>
          <p style={{ color: "rgba(27,58,107,0.7)", marginBottom: "1.5rem" }}>
            Tell us your facility type and usage. We will recommend the right system at the right scale - and back it with a lifetime warranty.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Request My Business Quote
          </Link>
        </div>
      </section>
    </>
  );
}
