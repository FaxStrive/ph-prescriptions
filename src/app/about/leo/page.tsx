import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BUSINESS } from "@/lib/business";
import PageHero from "@/components/ui/PageHero";
import ImageBand from "@/components/ui/ImageBand";

export const metadata: Metadata = {
  title: "About Leo Szymborski | Founder of pH Prescription",
  description:
    "Leo Szymborski founded pH Prescription in 2005. A third-generation plumber with 40+ years in water systems, Leo authored the best-selling H2O: Health 2 Overcome and built a water wellness technology company endorsed by physicians.",
};

/**
 * Media architecture, per the growth plan: appearances render here as they
 * publish. Add entries as {show, topic, href, kind: "watch" | "listen"} and
 * the section lists them automatically. The founder video slot works the
 * same way: set LEO_VIDEO to a YouTube embed URL when the 60-90 second
 * "Meet Leo" video is produced and the player appears in place.
 */
const MEDIA_APPEARANCES: { show: string; topic: string; href: string; kind: "watch" | "listen" }[] = [
  {
    show: "Interview with Jake Paul",
    topic: "Leo on water, health, and why athletes choose hydrogen water",
    href: "https://www.youtube.com/watch?v=3it1-O26hE4",
    kind: "watch",
  },
  {
    show: "Work Ready Podcast",
    topic: "Clean isn't enough: the science behind water that actually heals the body",
    href: "https://www.youtube.com/watch?v=5mzAckVxLbI",
    kind: "watch",
  },
  {
    show: "In Conversation with Dr. Nathan Bryan",
    topic: "Why the doctor calls it the best whole house water filter on the market",
    href: "https://www.youtube.com/watch?v=FxWHSMHg93Q",
    kind: "watch",
  },
  {
    show: "Keynote",
    topic: "How to remove harmful toxins from water",
    href: "https://www.youtube.com/watch?v=KPhqiKwnMO4",
    kind: "watch",
  },
];
const LEO_VIDEO: string | null = "https://www.youtube-nocookie.com/embed/gUFjvjYVMTI";

export default function AboutLeoPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Leo Szymborski"
        subhead={`Third-generation plumber. ${BUSINESS.yearsExperience} years in water systems. Best-selling author. Founder of pH Prescription.`}
        image="/images/lifestyle2/idw-person-drinking-4.jpg"
        imageAlt="Man drinking a glass of clean filtered water"
        ctas={[
          { label: "Read His Book", href: "/book", variant: "primary" },
          { label: "Doctor Endorsements", href: "/experts", variant: "outline" },
        ]}
      />

      {/* Full story lives here; About Us carries only the introduction */}
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.625rem,3.5vw,2.25rem)", color: "var(--color-navy)", marginBottom: "1.5rem" }}>
              A Lifetime in Water
            </h2>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              Leo&apos;s journey began in the industrial landscape of New Jersey, where he grew up in the shadow of chemical plants. Born with chronic health issues and struggling in school, he was mislabeled as &ldquo;dumb&rdquo; by teachers who failed to recognize his dyslexia. Being underestimated became his superpower: Leo learned to trust his instincts, and his personal experience of being poisoned by the water he drank as a child became the driving force behind everything that followed.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              A third-generation plumber, Leo spent decades on job sites learning exactly what travels through the pipes that supply the water we drink, bathe in, and cook with. What he discovered was not reassuring. When a life-threatening illness later sent him searching for how water could help the body heal itself, those two threads became one.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              In 2005, Leo founded pH Prescription in Palm City, Florida, with a single mission: to create water systems that go beyond filtration and restore water to its healthiest natural state. Over {BUSINESS.yearsExperience} years he developed the proprietary QuadVortex technology that filters, alkalizes, remineralizes, and infuses molecular hydrogen into every drop.
            </p>
            <p style={{ color: "var(--color-ink-soft)", lineHeight: 1.85, fontSize: "1.0625rem", marginBottom: "1.25rem" }}>
              Today pH Prescription manufactures in a 10,000 square foot American facility, serves all 50 states, and carries the endorsements of leading physicians and researchers who recommend the systems to their own patients.
            </p>
          </div>
        </div>
      </section>

      {/* Leo's Philosophy */}
      <section style={{ background: "var(--color-navy-deep)", color: "#fff" }}>
        <div className="container">
          <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#B9E3EF",
                marginBottom: "1.25rem",
              }}
            >
              Leo&apos;s Philosophy
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                marginBottom: "2.25rem",
              }}
            >
              Clean water is only the beginning.
            </h2>
            <div style={{ display: "grid", gap: "0.75rem", marginBottom: "2.25rem" }}>
              {[
                "Filter what shouldn't be there.",
                "Restore what should be there.",
                "Enhance what water can do.",
              ].map((line, i) => (
                <p
                  key={line}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                    color: i === 2 ? "#B9E3EF" : "rgba(255,255,255,0.92)",
                    lineHeight: 1.35,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
            <p style={{ fontSize: "1.0625rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", maxWidth: "64ch", margin: "0 auto" }}>
              For Leo, filtration alone leaves the job half done. Water stripped bare is not healthy water. His systems remove the contaminants, put back the minerals the body depends on, and infuse molecular hydrogen so that every glass does something for you. That three-part philosophy runs through every product pH Prescription builds.
            </p>
          </div>
        </div>
      </section>

      {/* The Book */}
      <section style={{ background: "var(--color-cream)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]" style={{ gap: "3rem", alignItems: "center", maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ position: "relative", aspectRatio: "2 / 3", maxWidth: "260px", boxShadow: "0 12px 32px rgba(30,15,60,0.18)" }}>
              <Image
                src="/products/H2O-book-cover-top-seller-v2.jpg"
                alt="H2O: Health 2 Overcome book cover by Leo Szymborski, #1 Amazon Best Seller"
                fill
                unoptimized
                sizes="260px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <span className="eyebrow" style={{ color: "var(--color-navy)" }}>The Book</span>
              <h2 style={{ marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
                H2O: Health 2 Overcome
              </h2>
              <p style={{ marginTop: "1.25rem", color: "var(--color-ink-soft)", lineHeight: 1.8, fontSize: "1.0625rem" }}>
                Leo wrote H2O: Health 2 Overcome because the story behind pH Prescription is not a business story. It is the story of how water made him sick, and how understanding water made him well. The book became a #1 Amazon Best Seller and lays out, in plain language, the science of filtration, remineralization, and molecular hydrogen that his systems are built on.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1.75rem" }}>
                <Link href="/book" className="btn btn-primary">About the Book</Link>
                <Link href="/experts" className="btn btn-outline">The Doctors Who Endorse It</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageBand
        image="/images/lifestyle2/svc-service-family-outdoor.jpg"
        imageAlt="Family spending time together outdoors, healthy and well hydrated"
        statement="Water changed his life."
        statementAccent="Then it became his life's work."
      />

      {/* Listen to Leo - media architecture, populated as appearances publish */}
      <section style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <span className="eyebrow" style={{ color: "var(--color-navy)" }}>Listen to Leo</span>
            <h2 style={{ marginTop: "1rem", fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--color-ink)" }}>
              Conversations about water, health, and <span className="italic-accent" style={{ color: "var(--color-teal)" }}>the future of water wellness.</span>
            </h2>
            {LEO_VIDEO ? (
              <div style={{ position: "relative", aspectRatio: "16 / 9", marginTop: "2rem", background: "var(--color-surface)" }}>
                <iframe
                  src={LEO_VIDEO}
                  title="How pH Prescription was created - Leo Szymborski"
                  style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : null}
            {MEDIA_APPEARANCES.length > 0 ? (
              <div style={{ display: "grid", gap: "1rem", marginTop: "2rem", textAlign: "left" }}>
                {MEDIA_APPEARANCES.map((m) => (
                  <a
                    key={m.href}
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", background: "var(--color-surface)", border: "1px solid var(--color-border-soft)", textDecoration: "none" }}
                  >
                    <span>
                      <span style={{ display: "block", fontWeight: 600, color: "var(--color-ink)" }}>{m.show}</span>
                      <span style={{ display: "block", fontSize: "0.875rem", color: "var(--color-ink-soft)" }}>{m.topic}</span>
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--color-navy)", whiteSpace: "nowrap" }}>
                      {m.kind === "watch" ? "Watch" : "Listen"} &rarr;
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
            <p style={{ marginTop: "1.75rem", color: "var(--color-ink-mute)", fontSize: "0.9375rem", lineHeight: 1.7 }}>
              For interviews and press, reach the team at{" "}
              <a href={`mailto:${BUSINESS.email}`} style={{ color: "var(--color-teal)", textDecoration: "none" }}>{BUSINESS.email}</a>.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-cream)", paddingTop: 0 }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto", display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/experts" className="btn btn-primary">View Doctor Endorsements</Link>
            <Link href="/consultation" className="btn btn-outline">Free Consultation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
