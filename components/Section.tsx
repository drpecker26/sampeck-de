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
          (section.variant === "gallery" ? (
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
