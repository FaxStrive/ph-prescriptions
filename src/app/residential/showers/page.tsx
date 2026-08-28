import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = { title: "Shower & Tub Water Systems | pH Prescription", description: "Aquapellis molecular hydrogen shower systems for residential use. Transdermal H2 therapy from every shower. Contact for pricing." };

export default function ShowersPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Showers"
        titleAccent="& Tubs"
        subhead="The Aquapellis shower system delivers molecular hydrogen transdermally with every shower. Every shower becomes a therapeutic H2 treatment session. No electricity, compatible with existing plumbing."
        image="/images/hero/shower-bath-hero.jpg"
        imageAlt="Woman rinsing under a shower with her arm raised, eyes closed"
        ctas={[
          { label: "Learn About Aquapellis", href: "/aquapellis", variant: "white" },
          { label: "Contact Aquapellis Team", href: "mailto:info@aquapellis.com", variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
                Beyond a Shower Filter
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>Standard shower filters remove chlorine. Aquapellis goes further - infusing your shower water with therapeutic molecular hydrogen (H2) that penetrates skin cells directly. Athletes, health-conscious families, and those dealing with skin conditions report measurable improvements in skin hydration, recovery, and overall wellbeing.</p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>The residential Aquapellis system is customized for your home&apos;s plumbing configuration. Contact our Aquapellis team at info@aquapellis.com or 888-728-2783 for a custom quote.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/aquapellis" className="btn btn-primary">Learn About Aquapellis</Link>
                <a href="mailto:info@aquapellis.com" className="btn btn-outline">Contact Aquapellis Team</a>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "16 / 11", overflow: "hidden" }}>
              <Image
                src="/images/lifestyle2/svc-service-tech-consult.jpg"
                alt="Technician with a clipboard walking a homeowner through system options in her kitchen"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "2rem", letterSpacing: "-0.02em" }}>
            What to Expect
          </h2>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/hero/science-hero.jpg",
                imageAlt: "Laboratory pipette releasing a drop of water into a glass vessel",
                eyebrow: "The Science",
                title: "Transdermal H2 Delivery",
                body: "Molecular hydrogen is small enough to cross the skin barrier - so a shower becomes a whole-body H2 session.",
              },
              {
                image: "/images/lifestyle2/svc-service-tech-friendly.jpg",
                imageAlt: "Technician shaking hands with a homeowner in her kitchen, toolbox on the counter",
                eyebrow: "The Spec",
                title: "Customized to Your Plumbing",
                body: "Every residential Aquapellis is configured for your home's plumbing - no electricity required, no remodel needed.",
              },
              {
                image: "/images/lifestyle2/svc-service-tech-door.jpg",
                imageAlt: "Service technician arriving at a front door carrying a toolbox and folder",
                eyebrow: "The Install",
                title: "Handled Door to Drain",
                body: "The Aquapellis team scopes, quotes, and coordinates professional installation with your existing shower or tub.",
              },
            ]}
          />
        </div>
      </section>

      <ImageBand
        image="/images/hero/pool-spa-hero.jpg"
        imageAlt="Sunlight rippling across clear turquoise water"
        statement="Spa-quality water,"
        statementAccent="every single shower"
      />
    </>
  );
}
