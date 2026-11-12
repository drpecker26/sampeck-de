import type { Section as SectionData } from "@/content/types";
import EntryCard from "./EntryCard";
import MediaThumb from "./MediaThumb";
import RichText from "./RichText";

const COLUMNS = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
} as const;

/**
 * A titled band of the page. Every section on the site renders through here —
 * new sections are data, not JSX.
 */
export default function Section({ section }: { section: SectionData }) {
  if (section.variant === "feature") return <FeatureSection section={section} />;

  const columns = COLUMNS[section.columns ?? 3];

  return (
    <section
      id={section.id}
      className="aurora relative overflow-hidden rounded-3xl border border-white/10 px-6 py-14 sm:px-10 sm:py-16"
    >
      {/* Darkening wash so the aurora never fights the text. */}
      <div className="pointer-events-none absolute inset-0 bg-ink-950/55" aria-hidden />

      <div className="relative">
        <h2 className="font-display text-4xl font-light tracking-tight text-paper sm:text-5xl">
          {section.title}
        </h2>

        {section.intro && (
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-paper-muted">
            <RichText text={section.intro} />
          </p>
        )}

        {section.entries.length > 0 &&
          (section.variant === "list" ? (
            <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
              {section.entries.map((entry) => (
                <li key={entry.title} className="flex items-center gap-5 py-4 sm:gap-6">
                  <div className="w-28 shrink-0 sm:w-40">
                    {entry.media ? (
                      <MediaThumb
                        media={entry.media}
                        aspect="aspect-[16/10]"
                        rounded="rounded-lg border border-white/10"
                      />
                    ) : (
                      // Keeps titles aligned while a screenshot is pending.
                      <div className="aspect-[16/10] rounded-lg border border-dashed border-white/15 bg-ink-900" />
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-light text-paper sm:text-xl">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-paper-muted">
                      <RichText text={entry.blurb} />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : section.variant === "gallery" ? (
            <div className={`mt-10 grid gap-6 ${columns}`}>
              {section.entries.map((entry) => (
                <figure key={entry.title} className="group flex flex-col gap-3">
                  {entry.media && (
                    <MediaThumb
                      media={entry.media}
                      aspect="aspect-square"
                      rounded="rounded-2xl border border-white/10"
                    />
                  )}
                  <figcaption className="text-center text-paper-muted">
                    {entry.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className={`mt-10 grid gap-6 ${columns}`}>
              {section.entries.map((entry) => (
                <EntryCard key={entry.title} entry={entry} />
              ))}
            </div>
          ))}

        {section.outro && (
          <p className="mt-8 text-lg text-paper-muted">
            <RichText text={section.outro} />
          </p>
        )}
      </div>
    </section>
  );
}

/**
 * A spotlight band: no visible section heading (the title still labels the
 * jump-link), media flush left at the band's full height, copy beside it.
 * Blank lines in the blurb split paragraphs.
 */
function FeatureSection({ section }: { section: SectionData }) {
  return (
    <>
      {section.entries.map((entry, i) => (
        <section
          key={entry.title}
          id={i === 0 ? section.id : undefined}
          aria-label={section.title}
          className="aurora relative flex flex-col overflow-hidden rounded-3xl border border-white/10 sm:flex-row sm:items-stretch"
        >
          <div className="pointer-events-none absolute inset-0 bg-ink-950/55" aria-hidden />

          {entry.media && (
            <div className="relative aspect-[4/3] w-full shrink-0 sm:aspect-[540/828] sm:h-[30rem] sm:w-auto">
              <MediaThumb media={entry.media} aspect="h-full" />
            </div>
          )}

          <div className="relative flex flex-col justify-center gap-4 px-5 py-6 sm:px-10">
            <h3 className="font-display text-3xl font-light text-paper sm:text-4xl">
              {entry.title}
            </h3>
            {entry.blurb.split(/\n\s*\n/).map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-paper-muted">
                <RichText text={paragraph} />
              </p>
            ))}
            {entry.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
