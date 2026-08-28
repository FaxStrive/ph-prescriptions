import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-posts";
import PhotoCardGrid from "@/components/ui/PhotoCardGrid";

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      <div className="container">
        <header style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--color-border-soft)" }}>
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-teal)",
              marginBottom: "0.75rem",
            }}
          >
            Knowledge Center
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
              fontSize: "clamp(2rem, 5vw, 3.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--color-ink)",
              margin: 0,
            }}
          >
            Water Health Articles
          </h1>
          <p style={{ marginTop: "1rem", color: "var(--color-ink-soft)", fontSize: "1.0625rem", lineHeight: 1.7, maxWidth: "640px" }}>
            Science-backed writing on water quality, filtration technology, and the health case for cleaner water.
          </p>
        </header>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="photo-card"
          style={{ display: "block", textDecoration: "none", marginBottom: "3.5rem" }}
        >
          <article
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div
              className="photo-card-img"
              style={{
                position: "relative",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                background: "var(--color-surface)",
              }}
            >
              <Image
                src={featured.heroImage}
                alt={featured.heroImageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
              />
            </div>
            <div>
              <time
                dateTime={featured.date}
                style={{
                  display: "block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-teal)",
                  marginBottom: "0.75rem",
                }}
              >
                Latest &middot; {formatDate(featured.date)}
              </time>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "var(--color-ink)",
                  margin: "0 0 0.875rem",
                }}
              >
                {featured.title}
              </h2>
              <p style={{ margin: "0 0 1.25rem", color: "var(--color-ink-soft)", fontSize: "1rem", lineHeight: 1.7 }}>
                {featured.excerpt}
              </p>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--color-navy)",
                  borderBottom: "1px solid var(--color-navy)",
                  paddingBottom: "0.2rem",
                }}
              >
                Read article &rarr;
              </span>
            </div>
          </article>
        </Link>

        {/* All other posts */}
        <PhotoCardGrid
          columns={3}
          cards={rest.map((post) => ({
            image: post.heroImage,
            imageAlt: post.heroImageAlt,
            eyebrow: formatDate(post.date),
            title: post.title,
            body: post.excerpt,
            href: `/blog/${post.slug}`,
            linkLabel: "Read article",
          }))}
        />
      </div>
    </main>
  );
}
