import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = {
  title: "Residential Water Systems | pH Prescription",
  description: "Residential drinking systems, whole-home water treatment, shower systems, and UV enhancements. WQA Certified, Made in USA, lifetime warranty.",
};

const SECTIONS = [
  {
    title: "Drinking Systems",
    desc: "Under-sink reverse osmosis with QuadVortex technology. Removes up to 99% of contaminants, alkalizes, remineralizes, and infuses molecular hydrogen.",
    href: "/residential/drinking-systems",
    from: "Starting from $985",
    image: "/images/lifestyle2/pa-ro-kitchen-sink.jpg",
    imageAlt: "Father and young son washing up together at a kitchen sink with the faucet running",
  },
  {
    title: "Total Home Systems",
    desc: "Whole-home restructured water from every tap and shower. Our Premier system transforms your entire water supply.",
    href: "/residential/total-home",
    from: "Starting from $9,244",
    image: "/images/hero/whole-home-hero.jpg",
    imageAlt: "Whole-house water filter being tightened onto a home's main supply line beside the water meter",
  },
  {
    title: "Showers & Tubs",
    desc: "Aquapellis molecular hydrogen shower systems for transdermal H2 therapy. Compatible with existing plumbing.",
    href: "/residential/showers",
    from: "By consultation",
    image: "/images/lifestyle2/svc-service-shower-hands.jpg",
    imageAlt: "Outstretched hands catching the falling spray of a running shower",
  },
  {
    title: "UV Enhancements",
    desc: "Anti-microbial UV add-ons for any system. Kills bacteria and viruses without chemicals.",
    href: "/residential/uv",
    from: "By consultation",
    image: "/images/commercial/cfw-outdoor-twin-softener-uv-1-v2.jpg",
    imageAlt: "Outdoor twin-tank water treatment install with a stainless UV sterilizer mounted on the wall",
  },
];

const PROCESS = [
  {
    eyebrow: "Step 01",
    title: "Free Water Analysis",
    body: "We test your water first and recommend the right system with no obligation - no guesswork, no overselling.",
    image: "/images/commercial/cfw-water-test-kit-system.jpg",
    imageAlt: "Professional water analysis test kit in a carrying case",
  },
  {
    eyebrow: "Step 02",
    title: "Licensed Installation",
    body: "Every system is installed by a licensed plumber - the workmanship that backs our lifetime warranty.",
    image: "/images/hero/installation-hero.jpg",
    imageAlt: "Licensed plumber installing an inline whole-house water filter on copper supply lines",
  },
  {
    eyebrow: "Step 03",
    title: "Lifetime Warranty",
    body: "WQA Certified systems, Made in USA, and covered for life with ongoing service and filter plans.",
    image: "/images/hero/maintenance-hero.jpg",
    imageAlt: "Smiling service technician taking notes on a clipboard during a maintenance visit",
  },
];

export default function ResidentialPage() {
  return (
    <>
      <PageHero
        eyebrow="For Your Home"
        title="Residential Water"
        titleAccent="Systems"
        subhead="From under-sink drinking systems to whole-home transformation - WQA Certified, Made in USA, lifetime warranty with licensed plumber installation."
        video="/video/water-stream.mp4"
        image="/images/hero/residential-hero.jpg"
        ctas={[
          { label: "Free Water Analysis", href: "/consultation", variant: "white" },
          { label: `Call ${BUSINESS.phone}`, href: `tel:${BUSINESS.phone}`, variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3vw,2.25rem)", color: "var(--color-navy)", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Four Ways to Transform Your Water
          </h2>
          <p style={{ color: "var(--color-ink-soft)", maxWidth: "560px", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Every system is built around the same QuadVortex process - choose the coverage that fits your home.
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
              linkLabel: "Learn more",
            }))}
          />
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/svc-service-kid-drinking.jpg"
        imageAlt="Young girl in a straw hat drinking a glass of water outdoors"
        statement="Water your family can trust,"
        statementAccent="from every tap"
      />

      <section style={{ background: "#fff" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            How It Works
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

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
                Built for Real Homes
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                From new construction to decades-old plumbing, every install is specified for the house it serves. We size the system to your water quality, your fixture count, and how your family actually uses water.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.75rem" }}>
                WQA Certified. Made in USA. Lifetime warranty with licensed plumber installation - the same standard on every system we sell.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/consultation" className="btn btn-primary">Free Water Analysis</Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
              </div>
            </div>
            <div style={{ display: "grid", gap: "1.25rem" }}>
              <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                <Image
                  src="/images/commercial/cfw-new-construction-home-central-fl-v2.jpg"
                  alt="Newly built Florida home ready for a whole-home water system"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "relative", aspectRatio: "16 / 9", overflow: "hidden" }}>
                <Image
                  src="/images/lifestyle2/aw-technician-with-customer.jpg"
                  alt="Technician walking a homeowner through her new filtration system at the kitchen sink"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
