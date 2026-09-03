import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "Restaurant & Hospitality Water Systems | pH Prescription",
  description:
    "Commercial water treatment for restaurants, hotels, and hospitality. Protect equipment, improve beverage taste, and deliver a premium guest experience with WQA Certified systems.",
};

const BENEFITS = [
  {
    title: "Better-Tasting Food & Beverages",
    body: "Water is the single largest ingredient in your kitchen. Filtered, remineralized water enhances the natural flavor profile of everything from espresso to sauces.",
  },
  {
    title: "Equipment Protection",
    body: "Hard water and chlorine destroy commercial equipment. Our systems eliminate scale buildup in steamers, dishwashers, ice machines, and espresso equipment - extending their lifespan significantly.",
  },
  {
    title: "Guest Experience",
    body: "Offer filtered, alkaline water at the table. Hotels, spas, and resorts use pH Prescription to provide a premium water experience that guests notice and remember.",
  },
  {
    title: "Operational Savings",
    body: "Fewer service calls, longer equipment life, and reduced bottled water purchasing. Most restaurant clients see a measurable ROI within the first year.",
  },
];

const APPLICATIONS = [
  "Ice machine pre-treatment",
  "Espresso and coffee systems",
  "Steam ovens and combi-ovens",
  "Dish and glass washers",
  "Beverage dispensing",
  "Hotel guest room filtration",
  "Spa treatment water",
  "Bar and tap water",
];

export default function RestaurantPage() {
  return (
    <>
      <PageHero
        eyebrow="For Your Business"
        title="Restaurant & Hospitality"
        titleAccent="Water Treatment"
        subhead="Water quality is a kitchen variable most operators overlook. pH Prescription delivers WQA Certified commercial systems that protect equipment, improve every dish and beverage, and give your guests the water quality they deserve."
        image="/images/hero/hospitality-hero.jpg"
        imageAlt="Row of water glasses being filled in sequence for table service"
        ctas={[
          { label: "Request Restaurant Quote", href: "/consultation", variant: "white" },
          { label: BUSINESS.phoneTollFree, href: `tel:${BUSINESS.phoneTollFree}`, variant: "outline" },
        ]}
      />

      {/* Benefits */}
      <section style={{ background: "var(--color-cream)", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2.125rem)",
              color: "var(--color-navy)",
              marginBottom: "2.5rem",
            }}
          >
            What Better Water Does for Your Operation
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                style={{
                  background: "#fff",
                  border: "1px solid rgba(27,58,107,0.1)",
                  borderTop: "3px solid var(--color-teal)",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {b.title}
                </h3>
                <p
                  style={{
                    color: "rgba(27,58,107,0.72)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/commercial/cfw-commercial-ro-membrane-skid-build-v2.jpg"
        imageAlt="Technician assembling a commercial reverse osmosis membrane skid in a warehouse"
        statement="Commercial-grade equipment,"
        statementAccent="sized for your kitchen"
      />

      {/* Applications */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
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
                Applications We Serve
              </h2>
              <p
                style={{
                  color: "rgba(27,58,107,0.7)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.7,
                }}
              >
                From single-restaurant installs to multi-property hotel chains, our systems are sized and specified for your exact usage profile. A free water consultation before every recommendation.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {APPLICATIONS.map((app) => (
                  <li
                    key={app}
                    style={{
                      padding: "0.5rem 0",
                      borderBottom: "1px solid rgba(27,58,107,0.08)",
                      color: "var(--color-navy)",
                      fontSize: "0.9375rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                    }}
                  >
                    <span style={{ color: "var(--color-teal)", fontWeight: 700 }}>+</span>
                    {app}
                  </li>
                ))}
              </ul>
              <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
                <Image
                  src="/images/hero/experts-hero.jpg"
                  alt="Gloved hands rinsing a laboratory beaker under running water during a water quality test"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div>
              <div style={{ display: "grid", gap: "1.25rem", marginBottom: "1.5rem" }}>
                <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
                  <Image
                    src="/images/commercial/cfw-commercial-ro-storage-tank-maintenance-v2.jpg"
                    alt="Large commercial reverse osmosis storage tank with a maintenance log posted on its side"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ position: "relative", aspectRatio: "16 / 10", overflow: "hidden" }}>
                  <Image
                    src="/images/commercial/dwc-industrial-grade-reverse-osmosis.jpg"
                    alt="Industrial-grade reverse osmosis unit plumbed for high-volume commercial service"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div
                style={{
                  background: "var(--color-cream)",
                  color: "var(--color-ink)",
                  padding: "2rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.375rem",
                    marginBottom: "1.25rem",
                  }}
                >
                  What&apos;s Included in Every Commercial Quote
                </h3>
                {[
                  "Free water quality analysis for your location",
                  "System sizing based on your daily usage",
                  "Installation by a licensed plumber in your area",
                  "Lifetime warranty on every system",
                  "Ongoing service and filter replacement plans",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--color-teal)",
                        marginTop: "0.1rem",
                        flexShrink: 0,
                      }}
                    >
                      +
                    </span>
                    <span
                      style={{
                        color: "var(--color-ink-soft)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
                <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden", marginTop: "1.25rem" }}>
                  <Image
                    src="/images/lifestyle2/svc-service-tech-handshake.jpg"
                    alt="Technician holding a toolbox while shaking hands with a client"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-cream)",
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
            Ready to Upgrade Your Restaurant Water?
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}
          >
            We analyze your water, specify the right system, and back every install with a lifetime warranty. All 50 states.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Get My Free Business Quote
          </Link>
        </div>
      </section>
    </>
  );
}
