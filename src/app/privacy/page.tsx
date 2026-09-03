import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Privacy Policy | pH Prescription",
  description: "pH Prescription privacy policy - how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const updated = "August 1, 2025";
  return (
    <section style={{ background: "#fff", padding: "5rem 0 6rem" }}>
      <div className="container" style={{ maxWidth: "720px" }}>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.875rem,4vw,2.75rem)",
            color: "var(--color-navy)",
            marginBottom: "0.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Privacy Policy
        </h1>
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(27,58,107,0.5)",
            marginBottom: "3rem",
          }}
        >
          Last updated: {updated}
        </p>

        {[
          {
            heading: "1. Who We Are",
            body: `pH Prescription ("we," "us," or "our") is a water wellness technology company located at ${BUSINESS.address.full}. We operate the website phprescription.com. Questions about this policy may be directed to ${BUSINESS.email}.`,
          },
          {
            heading: "2. Information We Collect",
            body: `We collect information you provide directly - such as your name, phone number, email address, and ZIP code when you request a consultation, submit a contact form, or register for a warranty. We also collect standard website analytics data (pages visited, session duration, device type) through cookies and similar technologies. We do not sell or rent your personal information.`,
          },
          {
            heading: "3. How We Use Your Information",
            body: `We use the information we collect to: respond to your inquiries and schedule consultations; process warranty registrations; send service reminders and filter replacement notices (you may opt out at any time); improve our website and understand how visitors use it; comply with legal obligations.`,
          },
          {
            heading: "4. Sharing Your Information",
            body: `We do not sell your personal information. We may share it with licensed plumbers and installers in our network when scheduling your installation, and with service providers who help us operate our business (email, analytics, CRM) under confidentiality agreements. We may also disclose information when required by law.`,
          },
          {
            heading: "5. Cookies",
            body: `Our website uses cookies to remember your preferences and understand how pages are used. You can disable cookies in your browser settings, though some site features may not function correctly. We do not use cookies for targeted advertising.`,
          },
          {
            heading: "6. Data Security",
            body: `We implement reasonable technical and organizational measures to protect your information. No method of internet transmission is 100% secure. If you have reason to believe your interaction with us is no longer secure, please contact us immediately.`,
          },
          {
            heading: "7. Your Rights",
            body: `You may request access to, correction of, or deletion of personal information we hold about you. To exercise these rights, contact us at ${BUSINESS.email} or ${BUSINESS.phone}. We will respond within 30 days.`,
          },
          {
            heading: "8. Children",
            body: `Our website is not directed to children under 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us.`,
          },
          {
            heading: "9. Changes to This Policy",
            body: `We may update this privacy policy from time to time. The updated date at the top of this page reflects when the policy was last revised. Continued use of our website after changes constitutes acceptance of the revised policy.`,
          },
          {
            heading: "10. Contact Us",
            body: `pH Prescription\n${BUSINESS.address.full}\nPhone: ${BUSINESS.phone}\nToll Free: ${BUSINESS.phoneTollFree}\nEmail: ${BUSINESS.email}`,
          },
        ].map((section) => (
          <div key={section.heading} style={{ marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.1875rem",
                color: "var(--color-navy)",
                marginBottom: "0.625rem",
              }}
            >
              {section.heading}
            </h2>
            <p
              style={{
                color: "rgba(27,58,107,0.78)",
                lineHeight: 1.8,
                fontSize: "0.9375rem",
                whiteSpace: "pre-line",
              }}
            >
              {section.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
