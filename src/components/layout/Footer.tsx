"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

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
