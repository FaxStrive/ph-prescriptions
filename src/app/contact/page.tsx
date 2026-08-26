import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Us | pH Prescription Palm City FL",
  description: "Contact pH Prescription by phone, email, or visit our 10,000 sq ft facility in Palm City, FL. Available for residential and commercial water system consultations.",
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    url: BUSINESS.url,
    foundingDate: BUSINESS.founded,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "5rem 0 4rem" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <div style={{ fontSize: "0.8125rem", color: "var(--color-teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>Get in Touch</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,5vw,3.25rem)", marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
            Contact pH Prescription
          </h1>
          <p style={{ fontSize: "1.0625rem", color: "var(--color-ink-soft)", lineHeight: 1.75 }}>
            Ready to find the right water system for your home or business? Reach out by phone, email, or visit our facility in Palm City, Florida.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Contact info */}
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "2rem" }}>
                Contact Information
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "var(--color-teal-soft)", padding: "0.75rem", flexShrink: 0 }}>
                    <Phone size={20} style={{ color: "var(--color-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.375rem" }}>Phone</div>
                    <a href={`tel:${BUSINESS.phone}`} style={{ display: "block", color: "var(--color-navy)", textDecoration: "none", fontSize: "1.0625rem", marginBottom: "0.25rem" }}>{BUSINESS.phone}</a>
                    <a href={`tel:${BUSINESS.phoneTollFree}`} style={{ display: "block", color: "var(--color-ink-soft)", textDecoration: "none", fontSize: "0.9rem" }}>Toll Free: {BUSINESS.phoneTollFree}</a>
                    <a href={`tel:${BUSINESS.phoneEmergency}`} style={{ display: "block", color: "var(--color-ink-soft)", textDecoration: "none", fontSize: "0.9rem" }}>Emergency: {BUSINESS.phoneEmergency}</a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "var(--color-teal-soft)", padding: "0.75rem", flexShrink: 0 }}>
                    <Mail size={20} style={{ color: "var(--color-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.375rem" }}>Email</div>
                    <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--color-navy)", textDecoration: "none" }}>{BUSINESS.email}</a>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "var(--color-teal-soft)", padding: "0.75rem", flexShrink: 0 }}>
                    <MapPin size={20} style={{ color: "var(--color-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.375rem" }}>Address</div>
                    <address style={{ fontStyle: "normal", color: "var(--color-ink-soft)", lineHeight: 1.7 }}>
                      {BUSINESS.address.street}<br />
                      {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                    </address>
                    <div style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--color-ink-mute)" }}>10,000 sq ft facility</div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ background: "var(--color-teal-soft)", padding: "0.75rem", flexShrink: 0 }}>
                    <Clock size={20} style={{ color: "var(--color-teal)" }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.375rem" }}>Hours</div>
                    <div style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9375rem" }}>
                      Monday - Friday: 9:00 AM - 5:00 PM ET<br />
                      Saturday: By appointment<br />
                      Emergency line available 24/7
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "#fff", color: "var(--color-ink)" }}>
                <div style={{ fontSize: "0.875rem", color: "var(--color-teal)", marginBottom: "0.375rem" }}>Aquapellis Inquiries</div>
                <a href={`mailto:${BUSINESS.emailAquapellis}`} style={{ color: "var(--color-ink)", textDecoration: "none" }}>{BUSINESS.emailAquapellis}</a>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-ink-mute)", marginTop: "0.25rem" }}>Molecular hydrogen shower systems</div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "var(--color-navy)", marginBottom: "2rem" }}>
                Send a Message
              </h2>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Full Name *</label>
                  <input type="text" name="name" required placeholder="Your full name"
                    style={{ width: "100%", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Phone *</label>
                  <input type="tel" name="phone" required placeholder="Your phone number"
                    style={{ width: "100%", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>ZIP Code</label>
                  <input type="text" name="zip" placeholder="Your ZIP code"
                    style={{ width: "100%", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Interest</label>
                  <select name="interest" style={{ width: "100%", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }}>
                    <option value="">Select an option</option>
                    <option value="residential">Residential System</option>
                    <option value="business">Business System</option>
                    <option value="aquapellis">Aquapellis Shower</option>
                    <option value="parts">Replacement Parts</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div style={{ fontSize: "0.8125rem", color: "var(--color-ink-mute)", padding: "0.75rem 1rem", background: "var(--color-teal-soft)", borderLeft: "3px solid var(--color-teal)" }}>
                  By submitting, you agree to receive a follow-up call or email. We respect your privacy.
                </div>
                <button type="submit" className="btn btn-primary" style={{ justifyContent: "center" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
