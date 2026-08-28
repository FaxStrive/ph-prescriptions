import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Total Business Water Systems | pH Prescription",
  description:
    "Whole-facility restructured water treatment for commercial buildings. Every tap, every fixture, every shower. WQA Certified. Lifetime warranty. Pricing by consultation.",
};

export default function BusinessTotalPage() {
  return (
    <>
      <PageHero
        eyebrow="Business / Total Facility"
        title="Total Facility"
        titleAccent="Water Treatment"
        subhead="Our commercial whole-facility system treats every gallon that enters your building. Every tap, every shower, every appliance gets restructured, alkalized, remineralized water. The commercial equivalent of our Total Home Premier System."
        image="/images/commercial/cfw-twin-softener-shaded-install-v2.jpg"
        imageAlt="Multi-tank point-of-entry treatment system with UV sterilizer installed along a white fence line"
        ctas={[
          { label: "Request Facility Assessment", href: "/consultation", variant: "white" },
          { label: BUSINESS.phoneTollFree, href: `tel:${BUSINESS.phoneTollFree}`, variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                }}
              >
                Every Point of Water. Transformed.
              </h2>
              <p
                style={{
                  color: "rgba(27,58,107,0.75)",
                  lineHeight: 1.75,
                  marginBottom: "1.25rem",
                }}
              >
                Our residential Total Home Premier System retails at $9,244.25. Commercial configurations are scoped and priced after a free facility assessment - building size, daily usage, fixture count, and current water quality all affect the specification.
              </p>
              <p
                style={{
                  color: "rgba(27,58,107,0.75)",
                  lineHeight: 1.75,
                  marginBottom: "1.75rem",
                }}
              >
                Unlike point-of-use systems, total facility treatment means every employee, guest, and piece of water-using equipment benefits from restructured water.
              </p>
              <Link
                href="/technology"
                style={{
                  color: "var(--color-teal)",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontSize: "0.9375rem",
                }}
              >
                Learn about QuadVortex technology
              </Link>
              <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden", marginTop: "1.75rem" }}>
                <Image
                  src="/images/lifestyle2/pa-installation-plumbing.jpg"
                  alt="Technician's hands adjusting components inside a wall-mounted unit during installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(27,58,107,0.1)",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                }}
              >
                What We Treat
              </div>
              {[
                "Chlorine and chloramines",
                "Heavy metals (lead, arsenic, mercury)",
                "Fluoride",
                "Sediment and particulates",
                "VOCs and pharmaceuticals",
                "Bacteria and micro-organisms",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "0.625rem",
                    alignItems: "center",
                    padding: "0.5rem 0",
                    borderBottom: "1px solid rgba(27,58,107,0.07)",
                    fontSize: "0.9375rem",
                    color: "rgba(27,58,107,0.78)",
                  }}
                >
                  <span style={{ color: "var(--color-teal)", fontWeight: 700 }}>+</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment classes */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "0.75rem",
            }}
          >
            Specified From a Full Equipment Lineup
          </h2>
          <p style={{ color: "rgba(27,58,107,0.65)", maxWidth: "560px", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Your facility assessment determines which treatment stages your building needs - and at what capacity.
          </p>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/commercial/dw-well-water-system.jpg",
                imageAlt: "Whole-building conditioning tank with control valve installed at the point of entry",
                eyebrow: "Stage",
                title: "Conditioning & Softening",
                body: "Scale protection for boilers, dishwashers, and fixtures across the building.",
              },
              {
                image: "/images/commercial/dwc-residential-well-water-filtration.jpg",
                imageAlt: "High-capacity residential-commercial filtration tanks plumbed in series",
                eyebrow: "Stage",
                title: "High-Capacity Filtration",
                body: "Media tanks sized to your peak-hour flow so treated water never bottlenecks operations.",
              },
              {
                image: "/images/commercial/dwc-rodi-30gpm-system.jpg",
                imageAlt: "30 GPM RO-DI treatment system with storage tank and control panel",
                eyebrow: "Stage",
                title: "Sulfur & Odor Treatment",
                body: "Dedicated media for wells and problem water - no rotten-egg smell at any fixture.",
              },
            ]}
          />
        </div>
      </section>

      <ImageBand
        image="/images/hero/about-hero.jpg"
        imageAlt="Glass filling with clear water from a natural spring on a mossy rock"
        statement="Source-quality water,"
        statementAccent="at every fixture"
      />

      {/* Best suited for */}
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
            Best Suited For
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              { name: "Hotels & Resorts", note: "Guest rooms, kitchens, spas" },
              { name: "Medical Facilities", note: "Clinical and patient water quality" },
              {
                name: "Multi-Tenant Office Buildings",
                note: "Common areas and individual suites",
              },
              { name: "Schools & Universities", note: "Drinking fountains, cafeterias, labs" },
              {
                name: "Senior Living Facilities",
                note: "Resident hydration and kitchen quality",
              },
              {
                name: "Large Restaurants",
                note: "Kitchen, bar, and guest table water",
              },
            ].map((item) => (
              <div
                key={item.name}
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderTop: "3px solid var(--color-navy)",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.375rem",
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(27,58,107,0.6)",
                  }}
                >
                  {item.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "3.5rem 0",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "560px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.375rem,2.5vw,1.875rem)",
              marginBottom: "1rem",
            }}
          >
            Start with a Free Facility Assessment
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}
          >
            We assess your building size, water quality, and usage before specifying anything. Pricing is based on your actual facility, not a catalog.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Request My Facility Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
