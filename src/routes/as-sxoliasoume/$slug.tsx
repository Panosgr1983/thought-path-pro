import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { SITE } from "@/lib/site";
import { BLOG_TITLE, POSTS, getPost } from "@/lib/blog";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/as-sxoliasoume/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.post;
    if (!p) return {};
    const title = `${p.title} — ${BLOG_TITLE} | ${SITE.name}`;
    const url = `${SITE.url}/as-sxoliasoume/${p.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: p.title,
            description: p.excerpt,
            datePublished: p.date,
            url,
            author: {
              "@type": "Person",
              name: "Ευδοκία Τίντζη-Σαββιδάκη",
            },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
            },
            mainEntityOfPage: url,
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-serif text-3xl text-ink">Το άρθρο δεν βρέθηκε</h1>
      <Link to="/as-sxoliasoume" className="mt-6 inline-flex text-primary hover:underline">
        Επιστροφή στα άρθρα
      </Link>
    </div>
  ),
  component: BlogPostPage,
});

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("el-GR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section
        className="relative overflow-hidden py-16 text-white md:py-24"
        style={{
          backgroundImage: "linear-gradient(135deg, #EE8560 0%, #E07A5F 45%, #C15F3C 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.45), transparent 45%), radial-gradient(circle at 85% 75%, rgba(255,255,255,0.3), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 md:px-8">
          <Link
            to="/as-sxoliasoume"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {BLOG_TITLE}
          </Link>
          <h1 className="mt-8 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
            {post.title}
          </h1>
          {post.date && (
            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.date)}
            </p>
          )}
        </div>
      </section>

      <article className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          {post.image && (
            <img
              src={post.image}
              alt={post.imageAlt ?? post.title}
              className="mb-10 h-auto max-h-[420px] w-full rounded-2xl border border-border object-cover shadow-[0_20px_60px_-20px_rgba(14,27,26,0.25)]"
            />
          )}
          <p className="font-serif text-lg leading-relaxed text-ink/90 md:text-xl">
            {post.excerpt}
          </p>
          <div className="mt-8 space-y-6 text-[17px] leading-[1.85] text-foreground/85">
            {post.sections.map((s, i) => (
              <div key={i} className="space-y-6">
                {s.heading && (
                  <h2 className="pt-4 font-serif text-2xl leading-snug tracking-[-0.01em] text-ink md:text-3xl">
                    {s.heading}
                  </h2>
                )}
                {s.paragraphs.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                {s.quote &&
                  (s.quote.kind === "closing" ? (
                    <div className="rounded-r-xl border-l-2 border-primary bg-primary-soft/50 px-6 py-6">
                      <p className="font-serif text-xl leading-relaxed tracking-[-0.01em] text-ink md:text-2xl">
                        {s.quote.text}
                      </p>
                    </div>
                  ) : (
                    <blockquote className="relative py-2 pl-10">
                      <span
                        aria-hidden
                        className="absolute left-0 top-0 font-serif text-5xl leading-none text-primary/40"
                      >
                        «
                      </span>
                      <p className="font-serif text-2xl leading-snug tracking-[-0.01em] text-primary md:text-3xl">
                        {s.quote.text}
                      </p>
                    </blockquote>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <h2 className="font-serif text-2xl leading-snug text-ink md:text-3xl">
                Σχετικά άρθρα
              </h2>
              <Link
                to="/as-sxoliasoume"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                Όλα τα άρθρα
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/as-sxoliasoume/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  {p.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.imageAlt ?? p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-serif text-lg leading-snug text-ink">{p.title}</h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-primary">
                      Διαβάστε το άρθρο <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </>
  );
}
