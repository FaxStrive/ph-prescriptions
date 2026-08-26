import type { Metadata } from "next";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Terms of Service | pH Prescription",
  description: "pH Prescription terms of service — your agreement with us when using our website and purchasing our products.",
};

export default function TermsPage() {
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
          Terms of Service
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
            heading: "1. Acceptance of Terms",
            body: `By accessing or using our website at phprescription.com, or by purchasing products or services from pH Prescription, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or purchase our products.`,
          },
          {
            heading: "2. Products and Services",
            body: `pH Prescription sells water treatment systems and related products. All prices are listed in U.S. dollars. We reserve the right to modify prices and product availability at any time without notice. Product descriptions are as accurate as possible; we do not warrant that descriptions are complete, current, or error-free.`,
          },
          {
            heading: "3. Orders and Payment",
            body: `When you place an order, you represent that you are authorized to use the payment method provided. We reserve the right to refuse or cancel any order for any reason, including suspected fraud or product availability. Payment is due at the time of order unless otherwise agreed in writing.`,
          },
          {
            heading: "4. Installation",
            body: `Many pH Prescription systems require installation by a licensed plumber. Our lifetime warranty applies only when the system is installed by a licensed plumber. We maintain a network of licensed installers in all 50 states. We are not responsible for damage caused by improper installation performed by unlicensed individuals.`,
          },
          {
            heading: "5. Warranty",
            body: `Our systems come with a lifetime warranty on manufacturing defects when installed by a licensed plumber. The warranty does not cover damage from misuse, modification, failure to perform required maintenance, or installation by an unlicensed person. Full warranty terms are available at phprescription.com/warranty.`,
          },
          {
            heading: "6. Returns and Refunds",
            body: `Returns are accepted within 30 days of delivery for uninstalled systems in original condition. Installed systems may not be returned. Contact us at ${BUSINESS.email} or ${BUSINESS.phone} to initiate a return. Return shipping is the customer's responsibility unless the return is due to our error.`,
          },
          {
            heading: "7. Limitation of Liability",
            body: `To the fullest extent permitted by law, pH Prescription shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website. Our total liability for any claim related to our products or services shall not exceed the amount you paid for the product or service in question.`,
          },
          {
            heading: "8. Health Information",
            body: `Information on our website about water quality, alkalinity, molecular hydrogen, and health benefits is provided for general informational purposes only. It does not constitute medical advice and should not replace consultation with a licensed healthcare professional. Our products are not intended to diagnose, treat, cure, or prevent any disease.`,
          },
          {
            heading: "9. Intellectual Property",
            body: `All content on our website — including text, images, logos, and the QuadVortex trade name — is the property of pH Prescription or its licensors and is protected by applicable intellectual property laws. You may not use our content without written permission.`,
          },
          {
            heading: "10. Governing Law",
            body: `These terms are governed by the laws of the State of Florida without regard to its conflict of law provisions. Any dispute arising from these terms shall be resolved in the courts of Martin County, Florida.`,
          },
          {
            heading: "11. Contact",
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
