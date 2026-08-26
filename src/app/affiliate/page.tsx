import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Affiliate & Partner Program | pH Prescription",
  description: "Partner with pH Prescription as an affiliate, referral partner, or distributor. Ideal for health practitioners, plumbers, naturopaths, dentists, and wellness centers.",
};

export default function AffiliatePage() {
  return (
    <>
      <section
        style={{
          background: "#fff",
          color: "var(--color-ink)",
          padding: "5rem 0 4rem",
        }}
      >
        <div className="container" style={{ maxWidth: "740px" }}>
          <div
            style={{
              fontSize: "0.8125rem",
              color: "var(--color-teal)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Partner With Us
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem,5vw,3.25rem)",
              marginBottom: "1.25rem",
              letterSpacing: "-0.02em",
            }}
          >
            Affiliate &amp; Partner Program
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--color-ink-soft)",
              lineHeight: 1.8,
              maxWidth: "600px",
              marginBottom: "2rem",
            }}
          >
            Refer clients. Earn commissions. Help people access water that genuinely supports their health. Built for practitioners, plumbers, and wellness professionals who already believe in what we do.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href={`mailto:${BUSINESS.email}`} className="btn btn-primary">
              Apply: {BUSINESS.email}
            </a>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
              Call {BUSINESS.phoneTollFree}
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  color: "var(--color-navy)",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                How the Program Works
              </h2>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                The pH Prescription affiliate program is commission-based. When you refer a client who purchases a system, you earn a referral commission. There is no inventory to hold, no order fulfillment responsibility, and no minimum sales volume required to stay active.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8, marginBottom: "1rem" }}>
                All orders, consultations, and installations are handled by pH Prescription. Your role is the introduction. Our team takes the conversation from there.
              </p>
              <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.8 }}>
                Commission structure and tracking details are discussed during the application conversation. Contact us to start that discussion.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div
                style={{
                  background: "#fff",
                  padding: "1.5rem",
                  borderTop: "4px solid var(--color-teal)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.125rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Good Fit For
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {[
                    "Medical doctors, MDs, and DOs",
                    "Dentists and holistic dental practices",
                    "Naturopathic physicians",
                    "Licensed plumbers and plumbing contractors",
                    "Wellness centers and integrative health clinics",
                    "Nutritionists and dietitians",
                    "Personal trainers and performance coaches",
                    "Chiropractic and physical therapy practices",
                    "Health-focused businesses with client relationships",
                  ].map((item) => (
                    <li
                      key={item}
                      style={{
                        color: "var(--color-ink-soft)",
                        fontSize: "0.9375rem",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <span style={{ color: "var(--color-teal)", fontWeight: 700, marginTop: "0.1rem" }}>--</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: "820px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              color: "var(--color-navy)",
              marginBottom: "2rem",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Partner Benefits
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                title: "Commission on Referrals",
                body: "Earn a commission on every client you refer who purchases a system. No caps on the number of referrals you can submit.",
              },
              {
                title: "No Inventory Required",
                body: "You refer. We handle everything else: consultation, order, installation coordination, and after-sale support.",
              },
              {
                title: "Marketing Support",
                body: "Access to product information, educational materials, and support from the pH Prescription team to help you explain the systems to your clients.",
              },
              {
                title: "WQA-Certified Products",
                body: "You are referring clients to independently certified, USA-made products backed by a lifetime warranty. Your reputation stays protected.",
              },
              {
                title: "Doctor-Endorsed Science",
                body: "7+ independent medical professionals endorse our systems. That gives you credible third-party validation when recommending to health-conscious clients.",
              },
              {
                title: "Dedicated Partner Contact",
                body: "A direct line to our team for partner questions, client follow-ups, and commission tracking. No ticket queues.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "var(--color-cream)",
                  padding: "1.5rem",
                  borderLeft: "3px solid var(--color-teal)",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1rem",
                    color: "var(--color-navy)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", color: "var(--color-ink)", padding: "4rem 0" }}>
        <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.875rem",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Apply to the Program
          </h2>
          <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.75, marginBottom: "2rem" }}>
            Send us a brief introduction: who you are, your practice or business, and why you think pH Prescription is a fit for your clients. We review every application personally.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`mailto:${BUSINESS.email}?subject=Affiliate Program Application`} className="btn btn-primary">
              Email {BUSINESS.email}
            </a>
            <a href={`tel:${BUSINESS.phoneTollFree}`} className="btn btn-primary">
              Call {BUSINESS.phoneTollFree}
            </a>
          </div>
          <p style={{ color: "var(--color-ink-mute)", fontSize: "0.8125rem", marginTop: "1.5rem" }}>
            We respond to all applications within 2 business days.
          </p>
        </div>
      </section>
    </>
  );
}
