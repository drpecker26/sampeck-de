import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RichText from "@/components/RichText";
import { coverLetterSlugs, getCoverLetter } from "@/content/coverLetters";

type Props = { params: Promise<{ slug: string }> };

/**
 * Unlisted per-application cover letters. Reachable by direct link only:
 * not linked from the site, noindex'd here and via X-Robots-Tag in
 * next.config.mjs, and absent from robots.txt / sitemap.xml.
 */
export function generateStaticParams() {
  return coverLetterSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const letter = getCoverLetter(slug);
  if (!letter) return { title: "Not found", robots: { index: false, follow: false } };

  return {
    title: `${letter.company}`,
    description: letter.hook,
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function CoverLetterPage({ params }: Props) {
  const { slug } = await params;
  const letter = getCoverLetter(slug);
  if (!letter) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">
        {letter.company}
      </p>
      <h1 className="mt-4 font-display text-4xl font-light tracking-tight text-paper sm:text-5xl">
        {letter.role}
      </h1>
      <p className="mt-6 text-xl leading-relaxed text-paper">{letter.hook}</p>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-paper-muted">
        {letter.body.map((paragraph) => (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ))}
      </div>

      <h2 className="mt-14 font-display text-2xl font-light text-paper">
        Why me, specifically
      </h2>
      <ul className="mt-6 space-y-4">
        {letter.highlights.map((item) => (
          <li
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
          >
            <h3 className="font-display text-lg text-paper">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-paper-muted">{item.detail}</p>
          </li>
        ))}
      </ul>

      <p className="mt-12 text-lg leading-relaxed text-paper-muted">
        <RichText text={letter.closing} />
      </p>

      {letter.links && letter.links.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
          {letter.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20 hover:text-accent-bright"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
