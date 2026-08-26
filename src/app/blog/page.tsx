"use client";

import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogIndexPage() {
  return (
    <main style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "900px" }}>
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
          <p style={{ marginTop: "1rem", color: "var(--color-ink-soft)", fontSize: "1.0625rem", lineHeight: 1.7 }}>
            Science-backed writing on water quality, filtration technology, and the health case for cleaner water.
          </p>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {blogPosts.map((post, i) => (
            <article
              key={post.slug}
              style={{
                padding: "2rem 0",
                borderBottom: i < blogPosts.length - 1 ? "1px solid var(--color-border-soft)" : "none",
              }}
            >
              <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "240px" }}>
                  <time
                    dateTime={post.date}
                    style={{
                      display: "block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.65rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-ink-mute)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 style={{ margin: "0 0 0.75rem", lineHeight: 1.25 }}>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        fontSize: "1.375rem",
                        letterSpacing: "-0.015em",
                        color: "var(--color-ink)",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-teal)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-ink)")}
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p
                    style={{
                      margin: "0 0 1rem",
                      color: "var(--color-ink-soft)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.375rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--color-teal)",
                      textDecoration: "none",
                    }}
                  >
                    Read article &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
