import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "4-Phase Filtration Science and QuadVortex Technology",
  description:
    "Learn how pH Prescription' 4-phase filtration process uses KDF-55, Brimac coconut carbon, tourmaline and garnet gemstones, and molecular hydrogen to rebuild your water from the ground up.",
};

const PHASES = [
  {
    num: "01",
    label: "Phase 1",
    title: "KDF-55: Kinetic Degradation Fluxion",
    color: "var(--color-teal)",
    image: "/images/commercial/dw-city-water-filter.jpg",
    imageAlt:
      "Lineup of six whole-house water filtration tanks in black and gray with digital control valves on a white background",
    body: [
      "Water first travels through patented KDF-55, a zinc-copper compound proven to reduce chloramines, chlorine, bacteria, iron, fungus, algae, hydrogen sulfide, and most heavy metals.",
      "KDF-55 neutralizes organic and inorganic mercury, trichloroethylene (TCE), and trihalomethanes (THM). It also inhibits bacterial growth and preserves the fresh state of water throughout the filter bed.",
      "When paired with high-calcium premium carbon in Phase 2, KDF-55 enhances chlorine reduction by 6 to 8 times compared to carbon alone.",
    ],
    specs: [
      "Patented zinc-copper compound",
      "Reduces chloramines, chlorine, heavy metals",
      "Inhibits bacterial growth",
      "Neutralizes TCE and THM",
    ],
  },
  {
    num: "02",
    label: "Phase 2",
    title: "Catalytic Carbon and Brimac High-Calcium Carbon",
    color: "var(--color-navy)",
    image: "/images/products-extra/uv-system.jpg",
    imageAlt:
      "Carbon block and sediment filter cartridges laid on a wooden board next to a glass of water in a bright kitchen",
    body: [
      "Catalytic carbon retains conventional carbon's ability to absorb contaminants, but it also possesses greatly enhanced capacity to catalyze. It is by catalytic action that chloramines are reduced. These carbons reduce chlorine, heavy metals, and radioactive isotopes on top of fluoride.",
      "Brimac is an industry-approved high-calcium premium carbon, carbonized at 1,472 degrees Fahrenheit under controlled conditions. The result is a Kosher Certified, 100% organic carbon composed of 80% phosphate of calcium, 10% carbon, and 10% calcium carbonate.",
      "Brimac is hundreds of times more porous than other filter mediums. Its calcium content actively attracts fluorides, achieving up to 95% fluoride reduction. It extends filter life, leaves behind beneficial minerals, and has no adverse effect on pH.",
    ],
    specs: [
      "Carbonized at 1,472 degrees Fahrenheit",
      "Kosher Certified, 100% organic carbon",
      "80% phosphate of calcium, 10% carbon, 10% calcium carbonate",
      "Up to 95% fluoride reduction",
    ],
  },
  {
    num: "03",
    label: "Phase 3",
    title: "Gemstone Filter Technology: Tourmaline and Garnet",
    color: "var(--color-teal)",
    image: "/images/lifestyle2/idw-droplets-1.jpg",
    imageAlt:
      "Overhead view of concentric ripple rings spreading across a dark teal water surface",
    body: [
      "Tourmaline is the only known mineral to show permanent electrical activity. It carries a negative ORP (oxidation reduction potential), which means it donates electrons rather than stealing them. This property has been studied at universities and research centers worldwide and makes tourmaline uniquely suited for water restructuring.",
      "Garnet, with its high molecular density, is heavier than most other filter media. That density provides stability within the dual media bed, allowing filter-sized garnet granules to capture particulates down to 10 to 20 microns. No other consumer filtration company combines these two gemstones in a single filter stage.",
      "Together, tourmaline and garnet deliver powerful filtering media that standard carbon systems cannot replicate. The negative ORP they produce means the water leaving Phase 3 is already an antioxidant before molecular hydrogen is added in Phase 4.",
    ],
    specs: [
      "Tourmaline: permanent natural electrical activity",
      "Negative ORP from tourmaline (electron donor)",
      "Garnet: filters particulates to 10 to 20 microns",
      "Combination not found in any other filtration system",
    ],
  },
  {
    num: "04",
    label: "Phase 4",
    title: "Mineral Restoration: Magnesium Added Back",
    color: "var(--color-navy)",
    image: "/images/lifestyle2/idw-glass-clear-1.jpg",
    imageAlt:
      "Woman filling a drinking glass with clear water at a brushed-steel kitchen faucet in a white kitchen",
    body: [
      "After removing what harms and restructuring what remains, Phase 4 adds back the essential mineral magnesium. This final step restores the mineral balance that thorough filtration necessarily reduces.",
      "Magnesium supports over 300 enzymatic reactions in the body, and most Americans are deficient in it. Adding it through the water supply rather than supplementation means every glass, every cup of tea, every cooked meal benefits.",
      "The result is water that is not just stripped of contaminants but rebuilt to a composition closer to pristine glacial sources: clean, slightly alkaline, mineral-rich, and micro-clustered for optimal cellular absorption.",
    ],
    specs: [
      "Essential mineral magnesium restored",
      "Raises water pH through natural minerals, not electricity",
      "Smaller water clusters for better cellular absorption",
      "Water rebuilt, not just filtered",
    ],
  },
];

const TECH_FAQS = [
  {
    q: "What is QuadVortex technology?",
    a: "QuadVortex is pH Prescription' proprietary system that combines the four filtration phases above into one integrated whole-home and drinking-water platform. The name reflects the four-stage vortex structure that moves water through each medium in sequence, ensuring every phase is fully active before the water reaches your tap. It is a registered trademark and the core of our Total Home Premier system.",
  },
  {
    q: "Why don't you use an ionizer to raise pH?",
    a: "Ionizers use electricity to split water into alkaline and acidic streams. The alkalinity is artificial and does not come from minerals. pH Prescription uses an earth-based filter medium approach: minerals in the filter bed naturally raise pH by dissolving into the water, the same way glacial springs produce naturally alkaline water. The result is a stable, mineral-based alkalinity that the body recognizes, not an electrically induced one.",
  },
  {
    q: "What is water micro-clustering?",
    a: "Tap water molecules exist in clusters of 11 to 20 molecules per group. Glacial water, widely studied for its hydrating properties, clusters at 4 to 6 molecules per group. Smaller clusters pass through cell membranes more easily, improving cellular hydration and cell-to-cell communication. pH Prescription systems restructure tap water toward the smaller cluster profile found in pristine glacial sources.",
  },
  {
    q: "What is molecular hydrogen and why does it matter?",
    a: "Molecular hydrogen (H2) is the smallest molecule in existence, small enough to cross cell membranes and enter mitochondria directly. It is a selective antioxidant: it neutralizes the most damaging free radicals while leaving beneficial oxidative signals the body uses for normal signaling. Over 3,000 research and scientific papers have been published on molecular hydrogen in the past decade (source: Aquapellis Molecular Hydrogen Brochure, /docs/aquapellis-molecular-hydrogen-brochure.pdf).",
  },
  {
    q: "What is ORP and why is negative ORP good?",
    a: "ORP stands for oxidation reduction potential. A positive ORP means the water is an electron stealer, oxidizing what it touches. A negative ORP means the water donates electrons, reducing oxidation. Tap water typically carries a positive ORP. pH Prescription water, thanks to tourmaline and molecular hydrogen, carries a negative ORP, making it antioxidant by nature rather than by chemical additive.",
  },
  {
    q: "Do I need electricity to run a pH Prescription drinking system?",
    a: "No. Our under-sink drinking systems are entirely non-electric. Water pressure drives the filtration process through each phase. No power outlet, no electricity, no ongoing power cost. The system fits existing plumbing and requires only a licensed plumber for installation.",
  },
  {
    q: "How does Brimac compare to standard activated carbon?",
    a: "Standard activated carbon removes chlorine and some organic compounds. Brimac does all of that but also removes fluoride (up to 95%), heavy metals, and radioactive isotopes because its high calcium content (80% phosphate of calcium) actively attracts those contaminants. Brimac is also hundreds of times more porous, giving it far more surface area for catalytic action and a longer useful life than conventional carbon.",
  },
];

export default function TechnologyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: TECH_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <PageHero
        eyebrow="Proprietary Technology"
        title={"4-Phase Filtration Science and QuadVortex® Technology"}
        subhead="pH Prescription has spent over 20 years developing filtration that goes beyond removing contaminants. Our 4-phase system rebuilds water at the molecular level: KDF-55 and Brimac carbon strip what harms, tourmaline and garnet gemstones restructure what remains, and molecular hydrogen turns every drop into an antioxidant."
        image="/images/lifestyle2/idw-water-surface-1.jpg"
        imageAlt="Golden sunlight glinting across a dark, gently rippled water surface"
        ctas={[
          { label: "Schedule a Free Consultation", href: "/consultation", variant: "primary" },
          { label: `Call ${BUSINESS.phone}`, href: `tel:${BUSINESS.phone}`, variant: "outline" },
        ]}
      />

      {/* 4-Phase Section */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-teal)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              The Full Process
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                color: "var(--color-navy)",
                letterSpacing: "-0.02em",
              }}
            >
              Four Phases of Water Transformation
            </h2>
          </div>
          <p
            style={{
              fontSize: "1.125rem",
              fontStyle: "italic",
              fontFamily: "var(--font-display)",
              color: "var(--color-ink-soft)",
              textAlign: "center",
              maxWidth: "480px",
              margin: "0 auto 3.5rem",
              borderTop: "3px solid var(--color-teal)",
              paddingTop: "1.25rem",
            }}
          >
            &ldquo;Anyone can filter water. Very few know how to fix it.&rdquo;
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {PHASES.map((phase) => (
              <div
                key={phase.num}
                style={{
                  background: "#fff",
                  borderLeft: `5px solid ${phase.color}`,
                  boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "0",
                }}
              >
                {/* Number column */}
                <div
                  style={{
                    background: phase.color,
                    color: "#fff",
                    padding: "2rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    minWidth: "80px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                      lineHeight: 1,
                    }}
                  >
                    {phase.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginTop: "0.375rem",
                      opacity: 0.85,
                    }}
                  >
                    {phase.label}
                  </span>
                </div>

                {/* Content column */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "clamp(160px, 22vw, 240px)",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={phase.image}
                      alt={phase.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 1000px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      aria-hidden
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(to right, rgba(30,15,60,0.28) 0%, transparent 55%)",
                      }}
                    />
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.3125rem",
                        color: "var(--color-navy)",
                        marginBottom: "1.25rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {phase.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2rem" }}>
                      <div>
                        {phase.body.map((para, i) => (
                          <p
                            key={i}
                            style={{
                              color: "var(--color-ink-soft)",
                              lineHeight: 1.75,
                              fontSize: "0.9375rem",
                              marginBottom: i < phase.body.length - 1 ? "0.875rem" : 0,
                            }}
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                      <div
                        style={{
                          background: "var(--color-surface)",
                          padding: "1.25rem",
                          alignSelf: "start",
                        }}
                      >
                        <div
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: phase.color,
                            marginBottom: "0.75rem",
                          }}
                        >
                          Key Specs
                        </div>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {phase.specs.map((spec) => (
                            <li
                              key={spec}
                              style={{
                                display: "flex",
                                gap: "0.5rem",
                                alignItems: "flex-start",
                                marginBottom: "0.5rem",
                                fontSize: "0.875rem",
                                color: "var(--color-ink-soft)",
                              }}
                            >
                              <span style={{ color: phase.color, flexShrink: 0, marginTop: "0.1em" }}>
                                &#10003;
                              </span>
                              {spec}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement band */}
      <ImageBand
        image="/images/lifestyle2/idw-ripple-2.jpg"
        imageAlt="Wide expanse of deep blue open water with fine ripples stretching to the horizon"
        statement="Not just stripped."
        statementAccent="It's rebuilt."
      />

      {/* QuadVortex Section */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div
            className="grid grid-cols-1 lg:grid-cols-2"
            style={{
              gap: "4rem",
              alignItems: "center",
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
                Proprietary IP
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem,3vw,2.25rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                QuadVortex<sup style={{ fontSize: "0.5em" }}>&reg;</sup>: Our Registered
                Proprietary Technology
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                QuadVortex is the registered trademark that identifies pH Prescription&apos;s
                four-phase integrated filtration approach. It is the architecture that holds the
                four phases together as a single engineered system rather than four separate
                products bolted in sequence.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                The QuadVortex platform is built on over 40 years of real-world experience
                cleaning up highly contaminated water systems and toxic wells across New Jersey,
                Delaware, New York, and Pennsylvania. Founder Leo Szymborski is a third-generation
                plumber and pipefitter who applied that industrial remediation background to
                residential and commercial water health starting in 2005.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Unlike systems built around a single proprietary media or a single stage, QuadVortex
                was engineered so each phase amplifies the next. KDF-55 primes the water for Brimac
                carbon. Brimac carbon removes what KDF-55 starts. Gemstones restructure what both
                leave behind. Magnesium restores what restructuring reduces. Every stage is
                necessary. None is redundant.
              </p>
              <div
                style={{
                  borderLeft: "3px solid var(--color-navy)",
                  paddingLeft: "1.25rem",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    fontStyle: "italic",
                    color: "var(--color-navy)",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;Not Just Stripped. It&apos;s Rebuilt.&rdquo; When a harmful element is removed, it is
                  replaced with something beneficial.
                </p>
              </div>
            </div>
            <div>
              <div
                style={{
                  position: "relative",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: "var(--color-surface)",
                  marginBottom: "1.5rem",
                }}
              >
                <Image
                  src="/images/commercial/dw-whole-house-ro.jpg"
                  alt="Frame-mounted multi-stage reverse osmosis system with sediment and carbon pre-filters, pressure gauges, and stainless membrane housings"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  background: "var(--color-surface)",
                  padding: "2rem",
                  borderTop: "4px solid var(--color-navy)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    color: "var(--color-navy)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Seven Differentiators of the pH Prescription Approach
                </h3>
                <ol style={{ paddingLeft: "1.25rem", margin: 0 }}>
                  {[
                    "Beyond Basic Filtration: reduces contaminants AND improves quality throughout the entire home",
                    "Built Around Health: not plumbing, wellness at every point of use",
                    "Not Just Stripped, It's Rebuilt: harmful elements are replaced with beneficial ones",
                    "Proprietary Filtration Technology: 40 years of contaminated-water remediation experience",
                    "Whole-Home Thinking: total water exposure, not one faucet",
                    "Built From Real Experience: no two water sources are the same",
                    "Personalized Systems: start with your water, not a product",
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        color: "var(--color-ink-soft)",
                        fontSize: "0.9rem",
                        lineHeight: 1.65,
                        marginBottom: "0.625rem",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Molecular Hydrogen Section */}
      <section style={{ background: "var(--color-navy)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-teal-light)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              The Antioxidant Story
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem,3.5vw,2.5rem)",
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              Molecular Hydrogen: The Smallest and Most Cell-Permeable Antioxidant
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.75 }}>
              Molecular hydrogen (H2) is the most researched development in water science over
              the past decade. Over 3,000 scientific papers have been published on molecular
              hydrogen (source: Aquapellis Molecular Hydrogen Brochure,{" "}
              <a
                href="/docs/aquapellis-molecular-hydrogen-brochure.pdf"
                style={{ color: "var(--color-teal-light)", textDecoration: "underline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                phprescription.com
              </a>
              ).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: "1.5rem" }}>
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                minHeight: "280px",
              }}
            >
              <Image
                src="/images/products-extra/business-complete.jpg"
                alt="Glass of purified water in sharp focus on a counter with a multi-cartridge filtration system softly blurred behind it"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                style={{ objectFit: "cover" }}
              />
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(30,15,60,0.45) 0%, transparent 50%)",
                }}
              />
            </div>
            <div
              className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2"
              style={{ gap: "1.5rem" }}
            >
              {[
                {
                  title: "Selective Antioxidant",
                  body: "H2 neutralizes the most damaging free radicals, specifically hydroxyl radicals, while leaving beneficial oxidative signals intact. Most antioxidants are non-selective and can interfere with normal cell signaling. Molecular hydrogen is not.",
                },
                {
                  title: "Cell-Permeable",
                  body: "H2 is the smallest molecule in existence. It crosses cell membranes and reaches mitochondria directly. Larger antioxidant molecules cannot do this. This makes H2 active where cellular energy is produced, not just in the bloodstream.",
                },
                {
                  title: "Naturally Occurring",
                  body: "Molecular hydrogen is colorless and odorless. It is produced naturally in the gut by certain bacteria and is present in trace amounts in many natural spring waters. Infusing it into filtered water restores a property pristine water sources carry.",
                },
                {
                  title: "Reduces Chronic Oxidative Stress",
                  body: "Oxidative stress from accumulated free radicals is a recognized driver of inflammation, cellular aging, and disease. By neutralizing the most damaging free radicals selectively, H2-infused water provides ongoing antioxidant support with every glass.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    padding: "1.75rem",
                    borderTop: "3px solid var(--color-teal)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.0625rem",
                      color: "#fff",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <p
            style={{
              marginTop: "2.5rem",
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.5)",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            These statements have not been evaluated by the Food and Drug Administration. This
            product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* Gemstone Remineralization Section */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-teal)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Phase 3 Deep Dive
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem,3.5vw,2.25rem)",
                color: "var(--color-navy)",
                letterSpacing: "-0.02em",
              }}
            >
              Why Gemstone Remineralization Matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "2.5rem" }}>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1875rem",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                }}
              >
                Tourmaline: Permanent Electrical Activity
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "0.875rem", fontSize: "0.9375rem" }}>
                Tourmaline is unique among minerals. It is the only one known to show permanent
                electrical activity without being artificially charged. Its negative ORP means it
                donates electrons to the water passing through it, making the water itself an
                electron donor.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                Electron-donor water carries a negative voltage. At pH 7.35 to 7.45, cells are
                designed to run at negative 20 to negative 25 millivolts. Tourmaline-treated water
                supports that electrical environment rather than working against it.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.1875rem",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                }}
              >
                Garnet: Density That Filters to 10 Microns
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "0.875rem", fontSize: "0.9375rem" }}>
                Garnet is denser than most filter media. That density keeps it stable within the
                dual media bed, preventing channeling and maintaining even water distribution.
                Filter-sized garnet granules capture particulates down to 10 to 20 microns, well
                below what standard sand or carbon beds can achieve.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                The combination of tourmaline and garnet in a single stage is not found in any
                other consumer filtration product. It is proprietary to pH Prescription and is
                the reason Phase 3 output carries a measurably different ORP profile from
                Phase 2 output.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-[280px_1fr]"
            style={{
              marginTop: "2.5rem",
              background: "var(--color-surface)",
              borderLeft: "4px solid var(--color-teal)",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "relative", minHeight: "220px" }}>
              <Image
                src="/images/lifestyle2/idw-tap-pouring-1.jpg"
                alt="Tall glass of water standing on a reflective surface in front of a softly blurred under-sink filtration system"
                fill
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1rem",
                  color: "var(--color-navy)",
                  marginBottom: "0.75rem",
                }}
              >
                Micro-Clustering: Water That Absorbs More Easily
              </h3>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                Tap water molecules cluster in groups of 11 to 20 molecules. Glacial spring water
                clusters at 4 to 6 molecules per group. Smaller clusters pass through cell membranes
                faster and improve cell-to-cell communication. The mineral and electrical activity in
                Phases 3 and 4 moves the cluster size of pH Prescription water toward the smaller
                profile found in high-altitude spring water.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification band */}
      <ImageBand
        image="/images/commercial/dw-water-testing-lab.jpg"
        imageAlt="Laboratory pipette releasing a drop of water into a test tube surrounded by glassware in cool blue light"
        statement="Measured, tested,"
        statementAccent="verified."
        height="clamp(240px, 32vw, 400px)"
      />

      {/* FAQ Section */}
      <section style={{ background: "var(--color-surface)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--color-teal)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Questions
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem,3.5vw,2.25rem)",
                color: "var(--color-navy)",
                letterSpacing: "-0.02em",
              }}
            >
              Technology FAQ
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {TECH_FAQS.map((faq, i) => (
              <details
                key={i}
                style={{ borderBottom: "1px solid var(--color-border-soft)", paddingBottom: "0" }}
              >
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
                  <span
                    style={{
                      flexShrink: 0,
                      color: "var(--color-teal)",
                      fontSize: "1.25rem",
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    color: "var(--color-ink-soft)",
                    lineHeight: 1.8,
                    paddingBottom: "1.5rem",
                    fontSize: "0.9375rem",
                  }}
                >
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ alignItems: "center", gap: "0", boxShadow: "0 2px 24px rgba(0,0,0,0.08)" }}
          >
            <div style={{ position: "relative", minHeight: "300px", height: "100%" }}>
              <Image
                src="/images/commercial/aw-pfas-test.jpg"
                alt="Hand comparing a home water test strip against a color chart beside a glass of water on a kitchen counter"
                fill
                sizes="(max-width: 768px) 100vw, 490px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div style={{ padding: "clamp(2rem, 5vw, 3.5rem)" }}>
              <div
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-teal)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "0.75rem",
                }}
              >
                Start Here
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem,3.5vw,2.25rem)",
                  color: "var(--color-navy)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Get My Free Consultation
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
                We review your local water quality data with you, walk through exactly what is in it, and recommend the right
                4-phase system for your home or business. No obligation.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                <Link href="/consultation" className="btn btn-primary">
                  Schedule a Free Consultation
                </Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">
                  Call {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
