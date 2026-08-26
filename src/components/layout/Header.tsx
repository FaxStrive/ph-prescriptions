"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const NAV = [
  {
    label: "For Your Home",
    href: "/residential",
    children: [
      { label: "Drinking Systems", href: "/residential/drinking-systems" },
      { label: "Total Home Systems", href: "/residential/total-home" },
      { label: "Showers & Tubs", href: "/residential/showers" },
      { label: "UV Enhancements", href: "/residential/uv" },
    ],
  },
  {
    label: "For Your Business",
    href: "/business",
    children: [
      { label: "Restaurant & Hospitality", href: "/business/restaurant" },
      { label: "Water Coolers", href: "/business/coolers" },
      { label: "Drinking Systems", href: "/business/drinking-systems" },
      { label: "Total Home/Business", href: "/business/total" },
    ],
  },
  { label: "Aquapellis", href: "/aquapellis" },
  { label: "Technology", href: "/technology" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "About Leo", href: "/about/leo" },
      { label: "Doctor Endorsements", href: "/about/doctors" },
      { label: "Community Care", href: "/about/community" },
    ],
  },
  {
    label: "FAQ",
    href: "/faq",
    children: [
      { label: "All FAQs", href: "/faq" },
      { label: "Point of Difference", href: "/faq/point-of-difference" },
    ],
  },
  {
    label: "More",
    href: "/resources",
    children: [
      { label: "Resources", href: "/resources" },
      { label: "Book: H2O", href: "/book" },
      { label: "Nutraceuticals", href: "/nutraceuticals" },
      { label: "Pool & Marine/RV", href: "/solutions/pool-marine" },
      { label: "Affiliate Program", href: "/affiliate" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
        borderBottom: "1px solid var(--color-border-soft)",
      }}
    >
      {/* Top bar */}
      <div style={{ background: "var(--color-surface)", padding: "0.35rem 0", borderBottom: "1px solid var(--color-border-soft)" }}>
        <div className="container" style={{ display: "flex", justifyContent: "flex-end", gap: "1.5rem", fontSize: "0.8125rem", color: "var(--color-ink-soft)" }}>
          <a href={`tel:${BUSINESS.phone}`} style={{ color: "inherit", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.375rem" }}>
            <Phone size={12} /> {BUSINESS.phone}
          </a>
          <a href={`tel:${BUSINESS.phoneTollFree}`} style={{ color: "inherit", textDecoration: "none" }}>
            Toll Free: {BUSINESS.phoneTollFree}
          </a>
          <a href={`mailto:${BUSINESS.email}`} style={{ color: "inherit", textDecoration: "none" }}>
            {BUSINESS.email}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 1.5rem" }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)", fontSize: "1.375rem", fontWeight: 400, letterSpacing: "-0.02em" }}>
            PH Prescriptions
          </span>
          <span style={{ color: "var(--color-teal)", fontSize: "0.6875rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Water Health &amp; Wellness
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="hidden lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={{
                    background: "none",
                    border: "none",
                    color: activeDropdown === item.label ? "var(--color-navy)" : "var(--color-ink-soft)",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    padding: "0.5rem 0.75rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.25rem",
                    transition: "color 0.2s",
                  }}
                >
                  {item.label} <ChevronDown size={13} />
                </button>
                {activeDropdown === item.label && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      background: "#fff",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                      minWidth: "200px",
                      zIndex: 100,
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        style={{
                          display: "block",
                          padding: "0.75rem 1.25rem",
                          color: "var(--color-ink)",
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          borderBottom: "1px solid var(--color-border-soft)",
                          transition: "background 0.15s, color 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "var(--color-teal-soft)";
                          (e.currentTarget as HTMLElement).style.color = "var(--color-teal)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = "";
                          (e.currentTarget as HTMLElement).style.color = "var(--color-ink)";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  color: "var(--color-ink-soft)",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  padding: "0.5rem 0.75rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-soft)")}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href="/consultation" className="btn btn-primary" style={{ marginLeft: "1rem", padding: "0.625rem 1.375rem", fontSize: "0.875rem" }}>
            Free Consultation
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", color: "var(--color-ink)", cursor: "pointer", padding: "0.5rem" }}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--color-border-soft)", padding: "1rem 0" }}>
          <div className="container">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    color: "var(--color-ink)",
                    textDecoration: "none",
                    padding: "0.75rem 0",
                    fontSize: "1rem",
                    fontWeight: 500,
                    borderBottom: "1px solid var(--color-border-soft)",
                  }}
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: "block",
                      color: "var(--color-ink-soft)",
                      textDecoration: "none",
                      padding: "0.5rem 0 0.5rem 1rem",
                      fontSize: "0.875rem",
                      borderBottom: "1px solid var(--color-border-soft)",
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ paddingTop: "1rem" }}>
              <a href={`tel:${BUSINESS.phone}`} className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
