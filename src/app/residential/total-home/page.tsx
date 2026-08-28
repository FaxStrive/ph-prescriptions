import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = { title: "Total Home Water Systems | pH Prescription", description: "Whole-home restructured water treatment. Every tap, every shower, every glass transformed. pH-WH-3500-CO from $9,244." };

export default function TotalHomePage() {
  return (
    <>
      <PageHero
        eyebrow="Residential"
        title="Total Home"
        titleAccent="Restructured Water"
        subhead="Our Premier Total Home System (pH-WH-3500-CO) transforms every water outlet in your home - every faucet, shower, and appliance. QuadVortex filtration, alkalizing, remineralizing, and hydrogen infusion for the whole house. From $9,244.25."
        image="/images/hero/home-solutions-hero.jpg"
        imageAlt="Woman filling a glass of water at the sink of a bright modern kitchen"
        ctas={[
          { label: "Get a Custom Quote", href: "/consultation", variant: "white" },
          { label: `Call ${BUSINESS.phone}`, href: `tel:${BUSINESS.phone}`, variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3vw,2.125rem)", color: "var(--color-navy)", marginBottom: "1.25rem" }}>What Is Included</h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.25rem" }}>The Total Home Premier Restructured Water System is the most comprehensive water solution pH Prescription offers. Every water source in your home - showers, baths, kitchen, laundry, outdoor - is treated with the full QuadVortex process. Point-of-entry installation means every drop of water entering your home is filtered, structured, alkalized, remineralized, and hydrogen-infused.</p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>Whole-home restructured water benefits extend beyond drinking - your skin, hair, and appliances all benefit from truly clean water. Lifetime warranty with licensed plumber installation.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/consultation" className="btn btn-primary">Get a Custom Quote</Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}>
              <Image
                src="/images/commercial/cfw-fiberglass-mineral-tank-closeup-v2.jpg"
                alt="Close-up of a large fiberglass media tank and control valve on an outdoor point-of-entry install"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/pa-whole-home-shower.jpg"
        imageAlt="Woman rinsing her hair under a steady stream of shower water"
        statement="From the kitchen tap"
        statementAccent="to the master shower"
      />

      <section style={{ background: "#fff" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Point-of-Entry Installs, Done Right
          </h2>
          <p style={{ color: "var(--color-ink-soft)", maxWidth: "560px", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            Total home systems live where your water enters the house - garage, utility wall, or yard pad - and treat every gallon before it reaches a single fixture.
          </p>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/commercial/cfw-residential-softener-challenger-tank-v2.jpg",
                imageAlt: "Whole-home treatment system with media tank, brine tank, and pressure tank installed in a backyard garden",
                eyebrow: "Backyard Pad",
                title: "Sized for Your Home",
                body: "Tank capacity and media are matched to your household's daily water use and incoming water quality.",
              },
              {
                image: "/images/commercial/cfw-softener-well-install-yard-v2.jpg",
                imageAlt: "Multi-stage point-of-entry treatment train with filter housings, pressure tank, and media tanks in a yard",
                eyebrow: "Point of Entry",
                title: "Every Drop Treated",
                body: "Sediment, carbon, and conditioning stages work in sequence so treated water feeds every line in the house.",
              },
              {
                image: "/images/commercial/cfw-twin-softener-fenceline-install-v2.jpg",
                imageAlt: "Twin treatment tanks and brine tank installed neatly along a backyard fence line",
                eyebrow: "Clean Install",
                title: "Professionally Plumbed",
                body: "Licensed plumbers route, mount, and pressure-test the full system - the workmanship behind the lifetime warranty.",
              },
            ]}
          />
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "620px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.375rem,2.5vw,1.875rem)", color: "var(--color-navy)", marginBottom: "1rem" }}>
            One System. Every Outlet.
          </h2>
          <p style={{ color: "var(--color-ink-soft)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            Start with a free water analysis and get a quote specified for your home&apos;s plumbing, water quality, and usage.
          </p>
          <Link href="/consultation" className="btn btn-primary">Get a Custom Quote</Link>
        </div>
      </section>
    </>
  );
}
