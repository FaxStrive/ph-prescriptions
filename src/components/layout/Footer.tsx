import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--color-navy-deep)", color: "rgba(255,255,255,0.75)" }}>
      <div className="container" style={{ padding: "4rem 1.5rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "var(--font-display)", color: "#fff", fontSize: "1.375rem", marginBottom: "0.5rem" }}>
              PH Prescriptions
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              WQA Certified water health systems since {BUSINESS.founded}. Made in USA. Serving all 50 states and international clients from Palm City, FL.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.875rem" }}>
              <a href={`tel:${BUSINESS.phone}`} style={{ color: "var(--color-teal-light)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={14} /> {BUSINESS.phone}
              </a>
              <a href={`tel:${BUSINESS.phoneTollFree}`} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={14} /> {BUSINESS.phoneTollFree} (Toll Free)
              </a>
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
            <h4 style={{ color: "#fff", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Residential</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Drinking Systems", "/residential/drinking-systems"],
                ["Total Home Systems", "/residential/total-home"],
                ["Showers & Tubs", "/residential/showers"],
                ["UV Enhancements", "/residential/uv"],
                ["Aquapellis", "/aquapellis"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Business */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Business</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Restaurant & Hospitality", "/business/restaurant"],
                ["Water Coolers", "/business/coolers"],
                ["Drinking Systems", "/business/drinking-systems"],
                ["Total Business", "/business/total"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "#fff", fontSize: "0.8125rem", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Company</h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                ["Our Story", "/about"],
                ["About Leo", "/about/leo"],
                ["Doctor Endorsements", "/about/doctors"],
                ["Community Care", "/about/community"],
                ["Technology", "/technology"],
                ["FAQ", "/faq"],
                ["Free Consultation", "/consultation"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link key={href} href={href} style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.2s" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal-light)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.65)")}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.75rem", fontSize: "0.8125rem" }}>
          <span>&copy; {year} PH Prescriptions. All rights reserved. WQA Certified. Made in USA.</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Terms</Link>
            <Link href="/warranty" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>Warranty</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
