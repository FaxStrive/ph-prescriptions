"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Shield, Award, Droplets, Phone, CheckCircle2, Star, ArrowUpRight, ArrowRight } from "lucide-react";
import { BUSINESS, PRODUCTS, DOCTORS } from "@/lib/business";
import { SystemBreakdown } from "@/components/breakdown/SystemBreakdown";
import { ro1100Config } from "@/lib/ro1100Config";
import ServiceSelector from "@/components/sections/ServiceSelector";
import DoctorTestimonials from "@/components/sections/DoctorTestimonials";

const STATS = [
  { value: "40+", label: "Years Experience" },
  { value: "7+", label: "Doctor Endorsements" },
  { value: "2005", label: "Founded" },
  { value: "50", label: "States Served" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    location: "Palm City, FL",
    text: "Our whole-home system changed everything. Water tastes clean, my skin is better, and I finally feel confident about what my family drinks every day.",
  },
  {
    name: "Dr. Robert K.",
    location: "Stuart, FL",
    text: "I recommend pH Prescription to my patients. The science behind their QuadVortex technology is sound and the results are measurable.",
  },
  {
    name: "James T.",
    location: "Hobe Sound, FL",
    text: "Leo and his team are true professionals. 10,000 sq ft warehouse, everything made in the USA, and the lifetime warranty gives real peace of mind.",
  },
];

const PILLARS = [
  { icon: Shield, title: "Up to 99% Contaminant Removal", desc: "QuadVortex filtration removes bacteria, heavy metals, chlorine, fluoride, pharmaceuticals and more." },
  { icon: Droplets, title: "Alkaline & Re-Mineralized", desc: "Restores healthy pH balance and adds back essential minerals stripped by conventional filtration." },
  { icon: Award, title: "Molecular Hydrogen Infused", desc: "H2 infusion — the most powerful antioxidant known to science — is built into every system." },
  { icon: CheckCircle2, title: "Lifetime Warranty", desc: "Every system carries a lifetime warranty when installed by a licensed plumber." },
];

function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#3B2466",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: 0,
        // main wraps every page in paddingTop:72px to clear the fixed header;
        // Hero only needs to additionally pull up by the remainder (116px full
        // header height - 72px already reserved by <main>) to sit flush at
        // the true viewport top. Using the full -116px double-counted the
        // 72px main already reserved, leaving a 44px gap below the stats bar.
        marginTop: "-72px",
        paddingTop: "116px",
      }}
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
        poster=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.55,
          ...(reduce ? {} : { y: videoY as unknown as string, scale: videoScale as unknown as number }),
        }}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </motion.video>
      <div className="hero-veil" style={{ position: "absolute", inset: 0 }} />

      <motion.div
        style={reduce ? undefined : { y: contentY }}
        className="max-content"
        // eslint-disable-next-line react/forbid-dom-props
      >
        <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", padding: "clamp(2.5rem, 6vw, 4rem) 0 clamp(1rem, 2vw, 1.5rem)" }}>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              color: "#fff",
              fontSize: "clamp(2.5rem, 9vw, 6.25rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              maxWidth: "18ch",
            }}
          >
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "block" }}
            >
              Water that works{" "}
            </motion.span>
            <motion.span
              initial={reduce ? false : { opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "block", color: "#B9E3EF" }}
            >
              for your health.
            </motion.span>
          </h1>
        </div>
      </motion.div>

      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65 }}
        className="max-content"
        style={{ position: "relative", paddingBottom: "clamp(5rem, 9vw, 7rem)" }}
      >
        <div style={{ height: "1px", background: "rgba(255,255,255,0.2)", marginBottom: "1.25rem" }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto auto",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
              }}
            >
              WQA Certified · Lifetime Warranty · 50 States
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Free water analysis · Endorsed by 7+ physicians
            </p>
          </div>
          <Link
            href="/consultation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2rem",
              minHeight: "48px",
              background: "#fff",
              color: "#3B2466",
              fontFamily: "var(--font-sans)",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#B9E3EF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
            }}
          >
            Get a free consultation
            <ArrowUpRight size={16} />
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
              minHeight: "44px",
              justifyContent: "center",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
              }}
            >
              Or call directly
            </span>
            <span
              className="tabular"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                letterSpacing: "0.06em",
                color: "#fff",
              }}
            >
              {BUSINESS.phone}
            </span>
          </a>
        </div>
      </motion.div>

      {/* Stats bar — second flex child, pushed to bottom by space-between */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: "relative",
          zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.12)",
          background: "rgba(0,0,0,0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div
          className="max-content"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
            padding: "1.25rem 0",
            textAlign: "center",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  color: "#B9E3EF",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: "0.35rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section
      style={{
        background: "var(--color-surface)",
        borderBottom: "1px solid var(--color-border-soft)",
        padding: "2rem 0",
      }}
    >
      <div className="max-content">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--color-ink-mute)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LifestyleImage() {
  return (
    <section style={{ position: "relative", overflow: "hidden", height: "clamp(240px, 35vw, 480px)" }}>
      <Image
        src="/images/lifestyle/family-kitchen.jpeg"
        alt="Family enjoying clean water from a pH Prescription system"
        fill
        style={{ objectFit: "cover" }}
        priority={false}
        sizes="100vw"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(59,36,102,0.7) 0%, rgba(59,36,102,0.2) 60%, transparent 100%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="max-content" style={{ position: "relative" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(1.5rem, 4vw, 2.75rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#fff",
              maxWidth: "20ch",
            }}
          >
            Clean water,{" "}
            <span className="italic-accent" style={{ color: "#B9E3EF" }}>every glass.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  return (
    <section style={{ background: "#fff", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="max-content">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", marginBottom: "4rem", maxWidth: "820px" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--color-navy)" }}>Why pH Prescription</span>
            <h2
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
              }}
            >
              Tap water carries up to 316 contaminants.
              <br />
              <span className="italic-accent" style={{ color: "var(--color-teal)" }}>We remove them.</span>
            </h2>
            <p
              style={{
                marginTop: "1.5rem",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "var(--color-ink-soft)",
                maxWidth: "60ch",
              }}
            >
              Our proprietary QuadVortex technology filters what nobody else bothers to, then re-mineralizes your water and infuses molecular hydrogen — the same science that seven physicians put their names behind.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "var(--color-border-soft)" }}>
          {PILLARS.map(({ icon: Icon, title, desc }) => (
            <div key={title} style={{ background: "#fff", padding: "2.25rem 1.75rem" }}>
              <Icon size={28} strokeWidth={1.4} style={{ color: "var(--color-navy)", marginBottom: "1.25rem" }} />
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.25rem",
                  lineHeight: 1.25,
                  letterSpacing: "-0.015em",
                  color: "var(--color-ink)",
                  marginBottom: "0.75rem",
                }}
              >
                {title}
              </h3>
              <p style={{ fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-ink-soft)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="max-content">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", marginBottom: "3.5rem" }}>
          <div style={{ maxWidth: "640px" }}>
            <span className="eyebrow" style={{ color: "var(--color-navy)" }}>The Catalogue</span>
            <h2
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
              }}
            >
              Every system, <span className="italic-accent" style={{ color: "var(--color-teal)" }}>properly specified.</span>
            </h2>
            <p style={{ marginTop: "1rem", fontSize: "1rem", lineHeight: 1.7, color: "var(--color-ink-soft)" }}>
              From compact under-sink drinking systems to whole-home restructured water — WQA Certified, Made in USA, backed by lifetime warranty.
            </p>
          </div>
          <Link
            href="/residential"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-navy)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-navy)",
              paddingBottom: "0.25rem",
            }}
          >
            View all systems <ArrowRight size={13} />
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PRODUCTS.map((p, i) => {
            const featured = i === 0;
            return (
              <article
                key={p.sku}
                className="product-card"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-border-soft)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {featured && (
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "var(--color-navy)",
                      color: "#fff",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "0.35rem 0.65rem",
                      zIndex: 2,
                    }}
                  >
                    #1 Doctor Recommended
                  </span>
                )}
                <div
                  aria-hidden
                  style={{
                    height: "180px",
                    background: `linear-gradient(140deg, ${featured ? "#583890" : "var(--color-teal-soft)"} 0%, ${featured ? "#7B5AB5" : "#B9E3EF"} 100%)`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0%, transparent 55%)`,
                    }}
                  />
                  <Droplets
                    size={64}
                    strokeWidth={1}
                    style={{
                      position: "absolute",
                      bottom: "1.5rem",
                      right: "1.5rem",
                      color: featured ? "rgba(255,255,255,0.5)" : "var(--color-teal)",
                      opacity: 0.9,
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem 1.5rem 1.25rem", borderBottom: "1px solid var(--color-border-soft)" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: featured ? "var(--color-navy)" : "var(--color-teal)",
                    }}
                  >
                    {p.badge}
                  </span>
                  <h3
                    style={{
                      marginTop: "0.5rem",
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      lineHeight: 1.2,
                      letterSpacing: "-0.015em",
                      color: "var(--color-ink)",
                    }}
                  >
                    {p.name}
                  </h3>
                  <div
                    className="tabular"
                    style={{
                      marginTop: "0.35rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-mute)",
                    }}
                  >
                    SKU · {p.sku}
                  </div>
                </div>
                <div style={{ padding: "1.25rem 1.5rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "var(--color-ink-soft)", fontSize: "0.9375rem", lineHeight: 1.65, flex: 1 }}>{p.description}</p>
                  <div
                    style={{
                      marginTop: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <span
                      className="tabular"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.5rem",
                        fontWeight: 500,
                        color: "var(--color-navy)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {p.price}
                    </span>
                    <Link
                      href="/consultation"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        background: "var(--color-navy)",
                        color: "#fff",
                        padding: "0.625rem 1.125rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-navy-dark)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-navy)")}
                    >
                      Get Quote <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VideoDivider() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 0",
        color: "#fff",
        background: "#3B2466",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
      >
        <source src="/video/waves.mp4" type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(59,36,102,0.55), rgba(59,36,102,0.9))" }} />
      <div className="max-content" style={{ position: "relative", textAlign: "center", maxWidth: "800px" }}>
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>The Standard</span>
        <h2
          style={{
            marginTop: "1.5rem",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
          }}
        >
          One water.
          <br />
          <span className="italic-accent" style={{ color: "#B9E3EF" }}>Every faucet, every glass.</span>
        </h2>
        <p
          style={{
            marginTop: "1.5rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.75)",
          }}
        >
          WQA Certified · Made in USA · Lifetime warranty
        </p>
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section style={{ background: "#fff", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="max-content">
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem", marginBottom: "3.5rem", textAlign: "center" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <span className="eyebrow" style={{ color: "var(--color-navy)" }}>The Record</span>
            <h2
              style={{
                marginTop: "1rem",
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "var(--color-ink)",
              }}
            >
              Endorsed by <span className="italic-accent" style={{ color: "var(--color-teal)" }}>leading physicians.</span>
            </h2>
            <p style={{ marginTop: "1rem", color: "var(--color-ink-soft)", fontSize: "1rem", lineHeight: 1.7 }}>
              Seven doctors, dentists and researchers have put their names behind pH Prescription systems.
            </p>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {DOCTORS.slice(0, 4).map((d) => (
            <div
              key={d.name}
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border-soft)",
                borderTop: "3px solid var(--color-teal)",
                padding: "1.75rem 1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  fontWeight: 500,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.25,
                }}
              >
                {d.name}
              </div>
              <div
                style={{
                  marginTop: "0.5rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                }}
              >
                {d.specialty}
              </div>
              <div style={{ marginTop: "0.5rem", fontSize: "0.8125rem", color: "var(--color-ink-mute)", fontStyle: "italic" }}>{d.credential}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <Link
            href="/about/doctors"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-navy)",
              textDecoration: "none",
              borderBottom: "1px solid var(--color-navy)",
              paddingBottom: "0.25rem",
            }}
          >
            View all endorsements <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{ background: "var(--color-surface)", padding: "clamp(4rem, 8vw, 7rem) 0" }}>
      <div className="max-content">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="eyebrow" style={{ color: "var(--color-navy)" }}>What Customers Say</span>
          <h2
            style={{
              marginTop: "1rem",
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--color-ink)",
            }}
          >
            Five stars. <span className="italic-accent" style={{ color: "var(--color-teal)" }}>Every install.</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              style={{
                background: "#fff",
                padding: "2rem",
                border: "1px solid var(--color-border-soft)",
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <div style={{ display: "flex", gap: "0.25rem" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} style={{ color: "#F5B841", fill: "#F5B841" }} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.0625rem",
                  lineHeight: 1.5,
                  color: "var(--color-ink)",
                  letterSpacing: "-0.005em",
                }}
              >
                &ldquo;{t.text}&rdquo;
              </p>
              <footer style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                <cite
                  style={{
                    fontStyle: "normal",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--color-navy)",
                  }}
                >
                  {t.name}
                </cite>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-ink-mute)" }}>
                  {t.location}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section
      style={{
        background: "var(--color-navy)",
        color: "#fff",
        padding: "clamp(4rem, 8vw, 6rem) 0",
        textAlign: "center",
      }}
    >
      <div className="max-content" style={{ maxWidth: "760px" }}>
        <span
          className="eyebrow"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          The Decision
        </span>
        <h2
          style={{
            marginTop: "1.25rem",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          }}
        >
          Ready to transform <span className="italic-accent" style={{ color: "#B9E3EF" }}>your water?</span>
        </h2>
        <p style={{ marginTop: "1.25rem", fontSize: "1rem", lineHeight: 1.7, color: "rgba(255,255,255,0.85)" }}>
          Book a free water analysis and consultation. Residential and commercial. All fifty states. No pressure.
        </p>
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Link
            href="/consultation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#fff",
              color: "var(--color-navy)",
              padding: "1rem 2rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#B9E3EF")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#fff")}
          >
            Schedule free consultation <ArrowUpRight size={16} />
          </Link>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="tabular"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "transparent",
              color: "#fff",
              padding: "1rem 2rem",
              border: "1px solid rgba(255,255,255,0.4)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              letterSpacing: "0.06em",
              textDecoration: "none",
            }}
          >
            <Phone size={14} /> {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: BUSINESS.name,
            description:
              "Doctor-recommended water filtration, alkaline and hydrogen-infused systems for home and business. Founded 2005, Palm City FL.",
            telephone: BUSINESS.phone,
            email: BUSINESS.email,
            url: BUSINESS.url,
            address: {
              "@type": "PostalAddress",
              streetAddress: BUSINESS.address.street,
              addressLocality: BUSINESS.address.city,
              addressRegion: BUSINESS.address.state,
              postalCode: BUSINESS.address.zip,
              addressCountry: "US",
            },
            foundingDate: BUSINESS.founded,
          }),
        }}
      />
      <Hero />
      <ServiceSelector />
      <DoctorTestimonials />
      <LifestyleImage />
      <Pillars />
      <Products />
      <VideoDivider />
      <Doctors />
      <SystemBreakdown config={ro1100Config} />
      <Testimonials />
      <CTABand />
    </>
  );
}
