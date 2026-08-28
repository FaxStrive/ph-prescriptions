import Image from "next/image";
import Link from "next/link";

export type PhotoCard = {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  body?: string;
  href?: string;
  linkLabel?: string;
};

/**
 * Photo-first card grid: the photo dominates (16/10), text sits beneath.
 * Server-safe. 2 or 3 columns.
 */
export default function PhotoCardGrid({
  cards,
  columns = 3,
}: {
  cards: PhotoCard[];
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 2
      ? "grid grid-cols-1 md:grid-cols-2"
      : columns === 4
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`${colClass} reveal-stagger`} style={{ gap: "1.75rem" }}>
      {cards.map((card) => {
        const inner = (
          <>
            <div
              className="photo-card-img"
              style={{
                position: "relative",
                aspectRatio: "16 / 10",
                overflow: "hidden",
                background: "var(--color-surface)",
              }}
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
              />
            </div>
            <div style={{ padding: "1.25rem 0 0" }}>
              {card.eyebrow ? (
                <span
                  style={{
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-teal)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {card.eyebrow}
                </span>
              ) : null}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "1.375rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.015em",
                  color: "var(--color-ink)",
                }}
              >
                {card.title}
              </h3>
              {card.body ? (
                <p style={{ marginTop: "0.5rem", fontSize: "0.9375rem", lineHeight: 1.65, color: "var(--color-ink-soft)" }}>
                  {card.body}
                </p>
              ) : null}
              {card.href && card.linkLabel ? (
                <span
                  style={{
                    display: "inline-block",
                    marginTop: "0.75rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--color-navy)",
                    borderBottom: "1px solid var(--color-navy)",
                    paddingBottom: "0.2rem",
                  }}
                >
                  {card.linkLabel} &rarr;
                </span>
              ) : null}
            </div>
          </>
        );
        return card.href ? (
          <Link key={card.title} href={card.href} className="photo-card" style={{ display: "block", textDecoration: "none" }}>
            {inner}
          </Link>
        ) : (
          <div key={card.title} className="photo-card">
            {inner}
          </div>
        );
      })}
    </div>
  );
}
