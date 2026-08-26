"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

type NavPanelItem = { label: string; href: string; description: string };
type NavItem = {
  label: string;
  href: string;
  panel?: { eyebrow: string; headline: string; items: NavPanelItem[] };
};

const NAV: NavItem[] = [
  {
    label: "Residential",
    href: "/residential",
    panel: {
      eyebrow: "For Your Home",
      headline: "Every faucet, every glass, made pure.",
      items: [
        { label: "Drinking Systems", href: "/residential/drinking-systems", description: "Under-sink RO + hydrogen" },
        { label: "Total Home Systems", href: "/residential/total-home", description: "Whole-house restructuring" },
        { label: "Showers & Tubs", href: "/residential/showers", description: "Aquapellis skin & hair" },
        { label: "UV Enhancements", href: "/residential/uv", description: "Advanced sterilization" },
      ],
    },
  },
  {
    label: "Business",
    href: "/business",
    panel: {
      eyebrow: "For Your Business",
      headline: "Commercial-grade water, wherever you serve.",
      items: [
        { label: "Restaurant & Hospitality", href: "/business/restaurant", description: "Food-service quality" },
        { label: "Water Coolers", href: "/business/coolers", description: "Paddle-touch dispensing" },
        { label: "Drinking Systems", href: "/business/drinking-systems", description: "Office & facility" },
        { label: "Total Business Systems", href: "/business/total", description: "Whole-building" },
      ],
    },
  },
  { label: "Aquapellis", href: "/aquapellis" },
  { label: "Technology", href: "/technology" },
  {
    label: "About",
    href: "/about",
    panel: {
      eyebrow: "Who & How",
      headline: "Forty years of water science, made personal.",
      items: [
        { label: "Our Story", href: "/about", description: "Founded 2005 · Palm City FL" },
        { label: "About Leo", href: "/about/leo", description: "Founder Leo Szymborski" },
        { label: "Doctor Endorsements", href: "/about/doctors", description: "7+ physicians on record" },
        { label: "Community Care", href: "/about/community", description: "How we give back" },
      ],
    },
  },
  {
    label: "Resources",
    href: "/resources",
    panel: {
      eyebrow: "Learn More",
      headline: "The library behind the systems.",
      items: [
        { label: "All Resources", href: "/resources", description: "Guides & articles" },
        { label: "FAQ", href: "/faq", description: "Answers to common questions" },
        { label: "The H2O Book", href: "/book", description: "Leo's water-health manual" },
        { label: "Nutraceuticals", href: "/nutraceuticals", description: "Supplement line" },
      ],
    },
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenPanel(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop */}
      <div
        className="hidden xl:block"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#fff",
          boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.06)" : "none",
          transition: "box-shadow 0.3s",
        }}
      >
        {/* Row 1: Utility bar */}
        <div
          style={{
            background: "var(--color-navy-deep)",
            color: "rgba(255,255,255,0.92)",
            fontSize: "0.75rem",
            letterSpacing: "0.03em",
            height: scrolled ? 0 : 36,
            overflow: "hidden",
            transition: "height 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            className="max-content"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: 36,
              gap: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                <MapPin size={12} /> Palm City, FL · Serving All 50 States
              </span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", opacity: 0.85 }}
              >
                <Clock size={12} /> Mon–Fri 8am–5pm ET
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }}>
              <Link
                href="/consultation"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "none" }}
              >
                Financing Available
              </Link>
              <Link
                href="/warranty"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "none" }}
              >
                Warranty Support
              </Link>
              <Link
                href="/about/doctors"
                style={{ color: "rgba(255,255,255,0.92)", textDecoration: "none" }}
              >
                Doctor-Recommended
              </Link>
            </div>
          </div>
        </div>

        {/* Row 2: Main nav */}
        <div
          style={{
            borderBottom: "1px solid var(--color-border-soft)",
            background: "#fff",
          }}
        >
          <div
            className="max-content"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.25rem",
              height: 80,
            }}
          >
            <Link
              href="/"
              aria-label="pH Prescription home"
              style={{ display: "inline-flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}
            >
              <Image
                src="/logo.png"
                alt="pH Prescription — Water Health & Wellness"
                width={155}
                height={55}
                priority
                style={{ height: 50, width: "auto", display: "block" }}
              />
            </Link>

            <nav style={{ flex: 1, minWidth: 0 }}>
              <ul
                style={{ display: "flex", alignItems: "center", gap: "1.125rem", listStyle: "none", margin: 0, padding: 0, justifyContent: "center" }}
                onMouseLeave={() => setOpenPanel(null)}
              >
                {NAV.map((item) => {
                  const active = openPanel === item.label || pathname.startsWith(item.href);
                  const isPanelOpen = openPanel === item.label;
                  const commonStyle: React.CSSProperties = {
                    background: "transparent",
                    border: "none",
                    padding: "1.5rem 0",
                    cursor: "pointer",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: active ? "var(--color-navy)" : "var(--color-ink)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    transition: "color 0.2s",
                    position: "relative",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  };
                  return (
                    <li key={item.label} style={{ position: "relative" }}>
                      {item.panel ? (
                        <button
                          type="button"
                          onMouseEnter={() => setOpenPanel(item.label)}
                          onFocus={() => setOpenPanel(item.label)}
                          onClick={() => setOpenPanel((p) => (p === item.label ? null : item.label))}
                          style={commonStyle}
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={11}
                            style={{
                              transition: "transform 0.3s",
                              transform: isPanelOpen ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          />
                          <span
                            style={{
                              position: "absolute",
                              left: 0,
                              right: 0,
                              bottom: "-1px",
                              height: "2px",
                              background: "var(--color-navy)",
                              transform: isPanelOpen ? "scaleX(1)" : "scaleX(0)",
                              transformOrigin: "left",
                              transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                            }}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onMouseEnter={() => setOpenPanel(null)}
                          style={commonStyle}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="tabular"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.9375rem",
                  fontWeight: 700,
                  color: "var(--color-navy)",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                <Phone size={16} strokeWidth={2.5} /> {BUSINESS.phone}
              </a>
              <Link
                href="/consultation"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--color-navy)",
                  color: "#fff",
                  padding: "0.875rem 1.25rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  transition: "background 0.2s",
                  whiteSpace: "nowrap",
                  minWidth: 170,
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-navy-dark)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--color-navy)")}
              >
                Free Consultation
              </Link>
            </div>
          </div>

          <AnimatePresence>
            {openPanel && NAV.find((i) => i.label === openPanel)?.panel && (
              <motion.div
                key={openPanel}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setOpenPanel(openPanel)}
                onMouseLeave={() => setOpenPanel(null)}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "100%",
                  background: "#fff",
                  borderTop: "1px solid var(--color-border-soft)",
                  borderBottom: "1px solid var(--color-border-soft)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.06)",
                }}
              >
                <div className="max-content" style={{ padding: "3rem 1.5rem" }}>
                  {(() => {
                    const panel = NAV.find((i) => i.label === openPanel)?.panel;
                    if (!panel) return null;
                    return (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", gap: "4rem" }}>
                        <div>
                          <span className="eyebrow" style={{ color: "var(--color-navy)" }}>{panel.eyebrow}</span>
                          <h3
                            style={{
                              marginTop: "1.25rem",
                              fontFamily: "var(--font-display)",
                              fontWeight: 400,
                              fontSize: "1.75rem",
                              lineHeight: 1.15,
                              letterSpacing: "-0.02em",
                              color: "var(--color-ink)",
                              maxWidth: "18ch",
                            }}
                          >
                            {panel.headline}
                          </h3>
                        </div>
                        <ul
                          style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            columnGap: "3rem",
                            rowGap: "2rem",
                            listStyle: "none",
                            margin: 0,
                            padding: 0,
                          }}
                        >
                          {panel.items.map((it) => (
                            <li key={it.href}>
                              <Link
                                href={it.href}
                                onClick={() => setOpenPanel(null)}
                                style={{ display: "block", textDecoration: "none" }}
                              >
                                <span
                                  style={{
                                    display: "block",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.65rem",
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "var(--color-ink-mute)",
                                    marginBottom: "0.5rem",
                                  }}
                                >
                                  {it.description}
                                </span>
                                <span
                                  style={{
                                    display: "block",
                                    fontFamily: "var(--font-display)",
                                    fontWeight: 400,
                                    fontSize: "1.375rem",
                                    lineHeight: 1.2,
                                    letterSpacing: "-0.015em",
                                    color: "var(--color-ink)",
                                  }}
                                >
                                  {it.label}
                                </span>
                                <span
                                  style={{
                                    display: "inline-block",
                                    marginTop: "0.5rem",
                                    fontFamily: "var(--font-mono)",
                                    fontSize: "0.7rem",
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase",
                                    color: "var(--color-teal)",
                                  }}
                                >
                                  Explore →
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile */}
      <header
        className="xl:hidden"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#fff",
          borderBottom: "1px solid var(--color-border-soft)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem", height: "72px" }}>
          <Link href="/" aria-label="pH Prescription home" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/logo.png"
              alt="pH Prescription"
              width={150}
              height={54}
              priority
              style={{ height: 46, width: "auto", display: "block" }}
            />
          </Link>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <a
              href={`tel:${BUSINESS.phone}`}
              aria-label={`Call ${BUSINESS.phone}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                border: "1px solid var(--color-border-strong)",
                color: "var(--color-navy)",
              }}
            >
              <Phone size={16} strokeWidth={2.5} />
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "var(--color-navy)",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="xl:hidden"
              style={{ position: "fixed", inset: 0, background: "rgba(59,36,102,0.6)", zIndex: 70 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="xl:hidden"
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "88%",
                maxWidth: "400px",
                background: "#fff",
                zIndex: 80,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem", height: "72px", borderBottom: "1px solid var(--color-border-soft)" }}>
                <span className="eyebrow">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  style={{ background: "transparent", border: "none", color: "var(--color-ink)", cursor: "pointer", padding: "0.75rem" }}
                >
                  <X size={20} />
                </button>
              </div>
              <nav style={{ flex: 1, overflowY: "auto", padding: "1.5rem 1.25rem" }}>
                {NAV.map((it) => (
                  <div key={it.label}>
                    <Link
                      href={it.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        minHeight: "52px",
                        padding: "0.75rem 0",
                        fontFamily: "var(--font-display)",
                        fontSize: "1.375rem",
                        letterSpacing: "-0.015em",
                        color: "var(--color-ink)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--color-border-soft)",
                      }}
                    >
                      {it.label}
                    </Link>
                    {it.panel?.items.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: "block",
                          padding: "0.5rem 0 0.5rem 1rem",
                          fontFamily: "var(--font-sans)",
                          fontSize: "0.875rem",
                          color: "var(--color-ink-soft)",
                          textDecoration: "none",
                          borderBottom: "1px solid var(--color-border-soft)",
                        }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </nav>
              <div style={{ padding: "1.25rem", borderTop: "1px solid var(--color-border-soft)", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link
                  href="/consultation"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Free Consultation
                </Link>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="tabular"
                  style={{
                    textAlign: "center",
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    fontWeight: 700,
                    color: "var(--color-navy)",
                    textDecoration: "none",
                    padding: "0.5rem",
                  }}
                >
                  or call {BUSINESS.phone}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
