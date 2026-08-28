import Image from "next/image";
import Link from "next/link";

type Cta = { label: string; href: string; variant?: "primary" | "white" | "outline" };

/**
 * Full-bleed interior page hero: real photo (or video) background behind a
 * two-layer scrim, left-aligned copy column. Server-safe (no hooks).
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subhead,
  image,
  imageAlt,
  video,
  ctas,
  minHeight = "62vh",
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  subhead?: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  ctas?: Cta[];
  minHeight?: string;
}) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--color-navy-deep)",
        color: "#fff",
        minHeight,
        display: "flex",
        alignItems: "center",
        padding: "clamp(5rem, 10vw, 8rem) 0",
      }}
    >
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={image}
          aria-hidden
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : image ? (
        <Image
          src={image}
          alt={imageAlt ?? ""}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      ) : null}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(30,15,60,0.82) 0%, rgba(30,15,60,0.55) 45%, rgba(30,15,60,0.18) 100%)",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(30,15,60,0.55) 0%, transparent 35%)",
        }}
      />
      <div className="max-content" style={{ position: "relative", width: "100%" }}>
        <div style={{ maxWidth: "640px" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B9E3EF",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(4px)",
              padding: "0.45rem 0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            {eyebrow}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2.25rem, 5.5vw, 3.75rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            {title}
            {titleAccent ? (
              <>
                {" "}
                <em className="italic-accent" style={{ color: "#B9E3EF" }}>{titleAccent}</em>
              </>
            ) : null}
          </h1>
          {subhead ? (
            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.88)",
                maxWidth: "56ch",
              }}
            >
              {subhead}
            </p>
          ) : null}
          {ctas && ctas.length > 0 ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "2rem" }}>
              {ctas.map((c) => (
                <Link
                  key={c.href + c.label}
                  href={c.href}
                  className={`btn ${c.variant === "white" ? "btn-white" : c.variant === "outline" ? "btn-outline" : "btn-primary"}`}
                  style={c.variant === "outline" ? { borderColor: "#fff", color: "#fff" } : undefined}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
