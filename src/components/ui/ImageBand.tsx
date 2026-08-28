import Image from "next/image";

/**
 * Full-bleed photo band with dark scrim and an overlaid statement.
 * Server-safe. Use between contained sections for rhythm.
 */
export default function ImageBand({
  image,
  imageAlt,
  statement,
  statementAccent,
  height = "clamp(260px, 38vw, 460px)",
}: {
  image: string;
  imageAlt: string;
  statement?: string;
  statementAccent?: string;
  height?: string;
}) {
  return (
    <section style={{ position: "relative", overflow: "hidden", height, padding: 0 }}>
      <Image src={image} alt={imageAlt} fill sizes="100vw" style={{ objectFit: "cover" }} />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(30,15,60,0.62) 0%, rgba(30,15,60,0.25) 55%, rgba(30,15,60,0.05) 100%)",
        }}
      />
      {statement ? (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="max-content" style={{ width: "100%" }}>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.5rem, 3.6vw, 2.5rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "#fff",
                maxWidth: "22ch",
                textShadow: "0 2px 24px rgba(30,15,60,0.7)",
              }}
            >
              {statement}
              {statementAccent ? (
                <>
                  {" "}
                  <em className="italic-accent" style={{ color: "#B9E3EF" }}>{statementAccent}</em>
                </>
              ) : null}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
