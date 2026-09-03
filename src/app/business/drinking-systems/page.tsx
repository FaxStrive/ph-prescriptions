import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Business Drinking Water Systems | pH Prescription",
  description:
    "Commercial under-counter and point-of-use drinking water systems. QuadVortex filtration, alkaline, remineralized, hydrogen-infused. WQA Certified. Lifetime warranty.",
};

const APPLICATIONS = [
  {
    name: "Office Break Rooms",
    desc: "Replace bottled water programs with inline filtered water at the sink. Saves thousands annually for mid-size offices.",
    image: "/images/hero/health-supplements-hero.jpg",
    imageAlt: "Woman drinking a glass of water at a table set with fresh fruit and vegetables",
  },
  {
    name: "Medical & Dental Offices",
    desc: "Ultra-pure water for patient hydration and clinical applications. Doctor-recommended systems trusted by physicians nationwide.",
    image: "/images/business/medical-healthcare.jpg",
    imageAlt: "Doctor in a white coat consulting with a patient at her desk",
  },
  {
    name: "Gyms & Fitness Centers",
    desc: "High-volume under-counter systems for member hydration stations. Alkaline water supports faster recovery.",
    image: "/images/industries/fitness.jpg",
    imageAlt: "Athlete in workout gear drinking from a water bottle under a clear sky",
  },
  {
    name: "Corporate Cafeterias",
    desc: "High-capacity systems for food service, beverage stations, and employee dining. Sized for your daily volume.",
    image: "/images/lifestyle2/idw-tap-kitchen-1.jpg",
    imageAlt: "Filtered water tap in an office kitchen ready for staff refills",
  },
];

export default function BusinessDrinkingSystemsPage() {
  return (
    <>
      <PageHero
        eyebrow="Business / Drinking Systems"
        title="Commercial Drinking"
        titleAccent="Water Systems"
        subhead="The same doctor-recommended QuadVortex technology from our residential line, scaled for commercial usage. Under-counter, point-of-use, and high-volume configurations. WQA Certified. Lifetime warranty. All 50 states."
        image="/images/hero/office-hero.jpg"
        imageAlt="Technician preparing a multi-stage reverse osmosis unit for installation, red toolbox at his side"
        ctas={[
          { label: "Request Commercial Quote", href: "/consultation", variant: "white" },
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
              alignItems: "center",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem,3vw,2rem)",
                  color: "var(--color-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                What Every System Delivers
              </h2>
              <p
                style={{
                  color: "rgba(27,58,107,0.65)",
                  marginBottom: "2rem",
                  maxWidth: "560px",
                }}
              >
                Commercial configurations of our residential technology - same four-stage process, higher daily output.
              </p>
              <div style={{ display: "grid", gap: "1.25rem" }}>
                {[
                  {
                    step: "01",
                    name: "Reverse Osmosis",
                    desc: "Removes up to 99% of contaminants including heavy metals, chlorine, fluoride, and micro-organisms.",
                  },
                  {
                    step: "02",
                    name: "Alkalizing",
                    desc: "Raises pH to 8.5-9.5 through an alkalizing cartridge - no electricity required.",
                  },
                  {
                    step: "03",
                    name: "Remineralization",
                    desc: "Adds back essential minerals stripped by RO: calcium, magnesium, potassium.",
                  },
                  {
                    step: "04",
                    name: "Hydrogen Infusion",
                    desc: "QuadVortex molecular hydrogen infusion. Antioxidant-rich water at every pour.",
                  },
                ].map((s) => (
                  <div
                    key={s.step}
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      alignItems: "flex-start",
                      background: "#fff",
                      border: "1px solid rgba(27,58,107,0.1)",
                      padding: "1.25rem 1.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "1.5rem",
                        fontFamily: "var(--font-display)",
                        color: "var(--color-teal)",
                        opacity: 0.5,
                        lineHeight: 1.2,
                      }}
                    >
                      {s.step}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.0625rem",
                          color: "var(--color-navy)",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {s.name}
                      </div>
                      <p
                        style={{
                          color: "rgba(27,58,107,0.7)",
                          fontSize: "0.9rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}>
              <Image
                src="/images/hero/resources-hero.jpg"
                alt="Replacement filter cartridges laid out beside a glass of purified water in a bright kitchen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "4rem 0" }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem,3vw,2rem)",
              color: "var(--color-navy)",
              marginBottom: "2.5rem",
            }}
          >
            Commercial Applications
          </h2>
          <PhotoCardGrid
            columns={2}
            cards={APPLICATIONS.map((a) => ({
              image: a.image,
              imageAlt: a.imageAlt,
              title: a.name,
              body: a.desc,
            }))}
          />
        </div>
      </section>

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
            A Free Consultation for Your Facility
          </h2>
          <p
            style={{
              color: "var(--color-ink-soft)",
              marginBottom: "1.75rem",
            }}
          >
            We consult first, then recommend. No overselling. Licensed installation. Lifetime warranty. Nationwide.
          </p>
          <Link href="/consultation" className="btn btn-primary">
            Request My Commercial Quote
          </Link>
        </div>
      </section>
    </>
  );
}
