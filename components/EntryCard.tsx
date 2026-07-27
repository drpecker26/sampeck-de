import Image from "next/image";
import type { Entry } from "@/content/types";
import RichText from "./RichText";

/**
 * One game / pitch / project. Image on top, title, blurb, then a row of links —
 * the same arrangement the original deck used.
 */
export default function EntryCard({ entry }: { entry: Entry }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors hover:border-accent/40 hover:bg-white/[0.06]">
      {entry.media && (
        <div className="relative aspect-[4/3] overflow-hidden bg-ink-900">
          <Image
            src={entry.media.src}
            alt={entry.media.alt}
            width={entry.media.width}
            height={entry.media.height}
            unoptimized={entry.media.src.endsWith(".gif")}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-normal text-paper">{entry.title}</h3>

        {entry.blurb && (
          <p className="text-[0.975rem] leading-relaxed text-paper-muted">
            <RichText text={entry.blurb} />
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
          {entry.links?.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright"
            >
              {link.label}
            </a>
          ))}
          {entry.note && (
            <span className="text-sm text-paper-dim">{entry.note}</span>
          )}
        </div>
      </div>
    </article>
  );
}
