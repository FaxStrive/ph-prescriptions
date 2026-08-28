import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

export const metadata: Metadata = { title: "UV Anti-Microbial Enhancements | pH Prescription", description: "Add UV anti-microbial enhancement to any pH Prescription system. Chemical-free bacteria and virus elimination for residential water systems." };

export default function UVPage() {
  return (
    <>
      <PageHero
        eyebrow="Residential Add-On"
        title="UV Anti-Microbial"
        titleAccent="Enhancements"
        subhead="Chemical-free UV treatment eliminates bacteria, viruses, and pathogens from your water supply. Pairs with any pH Prescription drinking or whole-home system for complete protection."
        image="/images/commercial/aw-uv-disinfection.jpg"
        imageAlt="Under-sink filtration with an inline UV disinfection chamber installed at the point of use"
        ctas={[
          { label: "Get a Free Consultation", href: "/consultation", variant: "white" },
          { label: `Call ${BUSINESS.phone}`, href: `tel:${BUSINESS.phone}`, variant: "outline" },
        ]}
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
                Physics, Not Chemicals
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1.5rem" }}>UV light at the correct wavelength (254nm) destroys the DNA of bacteria, viruses, and cysts - rendering them unable to reproduce. Unlike chlorine, UV treatment leaves no chemical residue and adds nothing to your water. It is purely physical treatment that neutralizes biological threats at the point of entry or point of use.</p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "2rem" }}>UV enhancement is recommended for any home on well water, in areas with older infrastructure, or where additional microbial protection is desired. Contact us for a consultation and pricing.</p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/consultation" className="btn btn-primary">Get a Free Consultation</Link>
                <a href={`tel:${BUSINESS.phone}`} className="btn btn-outline">Call {BUSINESS.phone}</a>
              </div>
            </div>
            <div style={{ position: "relative", aspectRatio: "16 / 11", overflow: "hidden" }}>
              <Image
                src="/images/lifestyle2/pa-water-testing-lab.jpg"
                alt="Lab technician in protective gear inspecting a glass of water beside a microscope"
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
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "0.75rem", letterSpacing: "-0.02em" }}>
            Where UV Earns Its Keep
          </h2>
          <p style={{ color: "var(--color-ink-soft)", maxWidth: "560px", marginBottom: "2.5rem", lineHeight: 1.7 }}>
            UV chambers mount inline after filtration, so clear water gets a final anti-microbial pass before it enters your home.
          </p>
          <PhotoCardGrid
            columns={3}
            cards={[
              {
                image: "/images/lifestyle2/pa-well-water-pipe.jpg",
                imageAlt: "Untreated well water gushing from a black discharge pipe into a green field",
                eyebrow: "Well Water",
                title: "Private Wells",
                body: "Wells are not chlorinated by a utility - UV neutralizes the bacteria and cysts a sediment filter cannot catch.",
              },
              {
                image: "/images/commercial/cfw-well-pressure-tank-new-install.jpg",
                imageAlt: "New well pressure tank plumbed on a concrete pad with a garden hose coiled beside it",
                eyebrow: "At the Source",
                title: "Point-of-Entry Protection",
                body: "Installed at the pressure tank or main line, one UV chamber protects every fixture downstream.",
              },
              {
                image: "/images/commercial/cfw-commercial-dab-pumps-uv-v2.jpg",
                imageAlt: "Wall-mounted booster pumps and a stainless UV sterilizer in a mechanical room",
                eyebrow: "Any System",
                title: "Pairs With Everything",
                body: "UV chambers bolt onto any pH Prescription drinking or whole-home system - and onto most existing setups.",
              },
            ]}
          />
        </div>
      </section>

      <ImageBand
        image="/images/hero/water-quality-hero.jpg"
        imageAlt="Scientist in blue gloves transferring a water sample between test tubes in a lab"
        statement="Tested, treated,"
        statementAccent="and protected"
      />
    </>
  );
}
