import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Restaurant & Hospitality Water Systems | PH Prescriptions",
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
    body: "Hard water and chlorine destroy commercial equipment. Our systems eliminate scale buildup in steamers, dishwashers, ice machines, and espresso equipment — extending their lifespan significantly.",
  },
  {
    title: "Guest Experience",
    body: "Offer filtered, alkaline water at the table. Hotels, spas, and resorts use PH Prescriptions to provide a premium water experience that guests notice and remember.",
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
      {/* Hero */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "700px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal-light)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            For Your Business
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Restaurant & Hospitality Water Treatment
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "rgba(255,255,255,0.82)",
              lineHeight: 1.75,
              marginBottom: "2rem",
            }}
          >
            Water quality is a kitchen variable most operators overlook. PH Prescriptions delivers WQA Certified commercial systems that protect equipment, improve every dish and beverage, and give your guests the water quality they deserve.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/consultation"
              style={{
                display: "inline-block",
                background: "var(--color-navy)",
                color: "#fff",
                padding: "0.875rem 2rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Request Restaurant Quote
            </Link>
            <a
              href={`tel:${BUSINESS.phoneTollFree}`}
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,255,255,0.4)",
                color: "#fff",
                padding: "0.875rem 2rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>

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

      {/* Applications */}
      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
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
                From single-restaurant installs to multi-property hotel chains, our systems are sized and specified for your exact usage profile. Free water analysis before every recommendation.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
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
                    <span style={{ color: "var(--color-teal)", fontWeight: 700 }}>
                      --
                    </span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
            <div
              style={{
                background: "var(--color-navy)",
                color: "#fff",
                padding: "2.5rem",
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
                      color: "var(--color-teal-light)",
                      marginTop: "0.1rem",
                      flexShrink: 0,
                    }}
                  >
                    +
                  </span>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.85)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--color-navy)",
          color: "#fff",
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
              color: "rgba(255,255,255,0.9)",
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}
          >
            We analyze your water, specify the right system, and back every install with a lifetime warranty. All 50 states.
          </p>
          <Link
            href="/consultation"
            style={{
              display: "inline-block",
              background: "#fff",
              color: "var(--color-teal)",
              padding: "0.875rem 2.25rem",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Get My Free Business Quote
          </Link>
        </div>
      </section>
    </>
  );
}
