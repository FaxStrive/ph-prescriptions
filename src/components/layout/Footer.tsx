"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const SOCIAL_LINKS = [
  {
    href: BUSINESS.social.facebook,
    label: "pH Prescription on Facebook",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
  {
    href: BUSINESS.social.instagram,
    label: "pH Prescription on Instagram",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
  },
  {
    href: BUSINESS.social.youtube,
    label: "pH Prescription on YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "#fff", color: "var(--color-ink-soft)" }}>
      <div className="container" style={{ padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", color: "var(--color-ink)", fontSize: "1.375rem", marginBottom: "0.5rem" }}>
              pH Prescription
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              WQA Certified water health systems since {BUSINESS.founded}. Made in USA. Serving all 50 states and international clients from Palm City, FL.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <a href={`tel:${BUSINESS.phone}`} style={{ color: "var(--color-teal)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", paddingBlock: "0.35rem" }}>
                <Phone size={14} /> {BUSINESS.phone}
              </a>
              <a href={`tel:${BUSINESS.phoneTollFree}`} style={{ color: "var(--color-ink-mute)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", paddingBlock: "0.35rem" }}>
                <Phone size={14} /> {BUSINESS.phoneTollFree} (Toll Free)
              </a>
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--color-ink-mute)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem", paddingBlock: "0.35rem" }}>
                <Mail size={14} /> {BUSINESS.email}
              </a>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                <MapPin size={14} style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                <span style={{ fontSize: "0.8125rem" }}>{BUSINESS.address.full}</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", border: "1px solid var(--color-border-soft)", color: "var(--color-ink-soft)" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Residential */}
          <div>
            <h3 style={{ color: "var(--color-ink)", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Residential</h3>
            <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Drinking Systems", "/residential/drinking-systems", "Residential Drinking Systems"],
                ["Total Home Systems", "/residential/total-home", ""],
                ["Showers & Tubs", "/residential/showers", ""],
                ["UV Enhancements", "/residential/uv", ""],
                ["Aquapellis", "/aquapellis", ""],
              ].map(([label, href, ariaLabel]) => (
                <Link key={href} href={href} aria-label={ariaLabel || undefined} style={{ color: "var(--color-ink-mute)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", paddingBlock: "0.4rem" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-mute)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Business */}
          <div>
            <h3 style={{ color: "var(--color-ink)", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Business</h3>
            <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Restaurant & Hospitality", "/business/restaurant", ""],
                ["Water Coolers", "/business/coolers", ""],
                ["Drinking Systems", "/business/drinking-systems", "Business Drinking Systems"],
                ["Total Business", "/business/total", ""],
              ].map(([label, href, ariaLabel]) => (
                <Link key={href} href={href} aria-label={ariaLabel || undefined} style={{ color: "var(--color-ink-mute)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", paddingBlock: "0.4rem" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-mute)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{ color: "var(--color-ink)", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Resources</h3>
            <nav aria-label="Footer Resources" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Blog", "/blog"],
                ["H2O: Health 2 Overcome", "/book"],
                ["FAQ", "/faq"],
                ["Technology", "/technology"],
                ["Doctor Endorsements", "/experts"],
                ["Free Consultation", "/consultation"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: "var(--color-ink-mute)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", paddingBlock: "0.4rem" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-mute)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ color: "var(--color-ink)", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Company</h3>
            <nav aria-label="Footer" style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Our Story", "/about"],
                ["About Leo", "/about/leo"],
                ["Community Care", "/about/community"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: "var(--color-ink-mute)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s", paddingBlock: "0.4rem" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink-mute)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid var(--color-border-soft)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.75rem", fontSize: "0.8125rem" }}>
          <span>&copy; {year} pH Prescription. All rights reserved. WQA Certified. Made in USA.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "var(--color-ink-mute)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "var(--color-ink-mute)", textDecoration: "none" }}>Terms</Link>
            <Link href="/warranty" style={{ color: "var(--color-ink-mute)", textDecoration: "none" }}>Warranty</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
