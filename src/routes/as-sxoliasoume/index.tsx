import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, PenLine } from "lucide-react";
import { SITE } from "@/lib/site";
import { BLOG_TITLE, POSTS } from "@/lib/blog";
import { FinalCTA } from "@/components/sections/FinalCTA";

const TITLE = `${BLOG_TITLE} — Άρθρα | ${SITE.name}`;
const DESCRIPTION =
  "Ας σχολιάσουμε — άρθρα και σκέψεις για την ψυχική υγεία, την ανατροφή και τις ανθρώπινες σχέσεις από το Κέντρο Ψυχικής Υγείας Διά… Λόγου Νόησις.";

export const Route = createFileRoute("/as-sxoliasoume/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE.url}/as-sxoliasoume` },
    ],
    links: [{ rel: "canonical", href: `${SITE.url}/as-sxoliasoume` }],
  }),
  component: BlogPage,
});

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("el-GR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPage() {
  return (
    <>
      <section
        className="relative overflow-hidden py-20 text-white md:py-28"
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
        <div className="relative mx-auto max-w-5xl px-4 text-center md:px-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] backdrop-blur">
            <PenLine className="h-3.5 w-3.5" />
            Σκέψεις & συζήτηση
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            {BLOG_TITLE}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/90 md:text-lg">
            Σκέψεις και αφορμές για συζήτηση γύρω από την ψυχική υγεία, την ανατροφή και τις
            ανθρώπινες σχέσεις.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          {POSTS.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">
              Τα πρώτα άρθρα θα αναρτηθούν σύντομα.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((p) => (
                <Link
                  key={p.slug}
                  to="/as-sxoliasoume/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  {p.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.imageAlt ?? p.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col gap-4 p-7">
                    <h2 className="font-serif text-xl leading-snug text-ink">{p.title}</h2>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Διαβάστε το άρθρο <ArrowRight className="h-4 w-4" />
                    </span>
                    {p.date && (
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {formatDate(p.date)}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
