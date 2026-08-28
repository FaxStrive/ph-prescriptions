import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | pH Prescription`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const paragraphs = post.content
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <main style={{ paddingTop: "4rem", paddingBottom: "6rem" }}>
      <div className="container" style={{ maxWidth: "760px" }}>
        <nav style={{ marginBottom: "2.5rem" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-mute)",
              textDecoration: "none",
            }}
          >
            &larr; All articles
          </Link>
        </nav>

        <article>
          <header style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid var(--color-border-soft)" }}>
            <time
              dateTime={post.date}
              style={{
                display: "block",
                fontFamily: "var(--font-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-teal)",
                marginBottom: "1rem",
              }}
            >
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                color: "var(--color-ink)",
                margin: "0 0 1rem",
              }}
            >
              {post.title}
            </h1>
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                background: "var(--color-surface)",
                margin: "1.75rem 0",
              }}
            >
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt}
                fill
                priority
                sizes="(max-width: 800px) 100vw, 760px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <p
              style={{
                margin: 0,
                fontSize: "1.125rem",
                lineHeight: 1.65,
                color: "var(--color-ink-soft)",
                fontStyle: "italic",
              }}
            >
              {post.excerpt}
            </p>
          </header>

          <div
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.75,
              color: "var(--color-ink)",
            }}
          >
            {paragraphs.map((para, i) => (
              <p key={i} style={{ margin: "0 0 1.5rem" }}>
                {para}
              </p>
            ))}
          </div>
        </article>

        <footer
          style={{
            marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border-soft)",
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/blog"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-ink-mute)",
              textDecoration: "none",
            }}
          >
            &larr; All articles
          </Link>
          <Link
            href="/consultation"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "var(--color-teal)",
              color: "#fff",
              padding: "0.875rem 1.5rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Free Consultation
          </Link>
        </footer>
      </div>
    </main>
  );
}
