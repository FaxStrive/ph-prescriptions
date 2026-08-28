import type { Metadata } from "next";
import { Phone, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "Free Water Consultation | pH Prescription",
  description: "Schedule a free water analysis and consultation with pH Prescription. We test your water and recommend the right system for your home or business.",
};

export default function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="No Cost, No Obligation"
        title="Free Water Analysis"
        titleAccent="& Consultation"
        subhead="Schedule a complimentary water analysis. We test what is in your water, explain exactly what we find, and recommend the right solution for your home or business - with no obligation to purchase."
        image="/images/lifestyle/consultation.jpg"
        imageAlt="Water specialist reviewing test results with a homeowner during a consultation"
        minHeight="54vh"
      />

      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            {/* Benefits */}
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3vw,2.125rem)", color: "var(--color-navy)", marginBottom: "1.5rem" }}>
                What to Expect
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { step: "1", title: "Submit Your Request", desc: "Fill out the form with your name, phone, and zip code. We will reach out within 24 hours." },
                  { step: "2", title: "Water Analysis", desc: "Our team tests your current water supply and identifies contaminants, pH levels, and mineral content." },
                  { step: "3", title: "System Recommendation", desc: "We walk you through the results and recommend the right pH Prescription system for your specific water and needs." },
                  { step: "4", title: "No-Pressure Decision", desc: "Take all the time you need. There is zero obligation. If you are ready, we handle installation from start to finish." },
                ].map((item) => (
                  <div key={item.step} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <div style={{
                      width: "2.25rem", height: "2.25rem", background: "var(--color-teal)",
                      color: "var(--color-ink)", display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "0.875rem", flexShrink: 0,
                    }}>{item.step}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.25rem" }}>{item.title}</div>
                      <div style={{ color: "var(--color-ink-soft)", fontSize: "0.9rem", lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "var(--color-surface)", borderLeft: "3px solid var(--color-teal)" }}>
                <div style={{ fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.75rem" }}>Prefer to call?</div>
                <a href={`tel:${BUSINESS.phone}`} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-teal)", textDecoration: "none", fontSize: "1.0625rem", fontWeight: 600 }}>
                  <Phone size={18} /> {BUSINESS.phone}
                </a>
                <div style={{ fontSize: "0.875rem", color: "var(--color-ink-mute)", marginTop: "0.375rem" }}>Toll Free: {BUSINESS.phoneTollFree}</div>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "#fff", padding: "2.5rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid var(--color-border-soft)" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.375rem", color: "var(--color-navy)", marginBottom: "1.75rem" }}>
                Request Your Free Consultation
              </h3>
              <form style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Full Name *</label>
                  <input type="text" name="name" required placeholder="Your full name"
                    style={{ width: "100%", minHeight: "48px", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>Phone *</label>
                  <input type="tel" name="phone" required placeholder="Best number to reach you"
                    style={{ width: "100%", minHeight: "48px", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>ZIP Code *</label>
                  <input type="text" name="zip" required placeholder="Your ZIP code"
                    style={{ width: "100%", minHeight: "48px", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "var(--color-navy)", marginBottom: "0.5rem" }}>System Type</label>
                  <select name="type" style={{ width: "100%", minHeight: "48px", padding: "0.875rem 1rem", border: "1px solid var(--color-border-strong)", fontSize: "0.9375rem", outline: "none", background: "#fff" }}>
                    <option value="">Select interest area</option>
                    <option value="residential-drinking">Residential Drinking System</option>
                    <option value="residential-whole-home">Whole Home System</option>
                    <option value="business">Business / Commercial</option>
                    <option value="aquapellis">Aquapellis Shower System</option>
                    <option value="not-sure">Not Sure - Need Guidance</option>
                  </select>
                </div>
                <div style={{ padding: "0.75rem 1rem", background: "var(--color-teal-soft)", display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                  <CheckCircle2 size={15} style={{ color: "var(--color-teal)", marginTop: "0.15rem", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.8125rem", color: "var(--color-ink-soft)", lineHeight: 1.6 }}>
                    4.9 stars. WQA Certified. Lifetime warranty. No obligation.
                  </span>
                </div>
                <button type="submit" className="btn btn-primary" style={{ justifyContent: "center", padding: "1rem 2rem", fontSize: "1rem" }}>
                  Get My Free Water Analysis
                </button>
                <p style={{ fontSize: "0.8125rem", color: "var(--color-ink-mute)", textAlign: "center" }}>
                  We call back within 24 hours. No spam, no pressure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/svc-service-woman-drinking.jpg"
        imageAlt="Woman drinking a glass of freshly filtered water at home"
        statement="Know what is in your water"
        statementAccent="before you buy anything."
      />
    </>
  );
}
