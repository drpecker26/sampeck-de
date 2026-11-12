import Image from "next/image";
import type { Page } from "@/content/types";
import RichText from "./RichText";

/**
 * Full-bleed opener. Mirrors the deck: a dark image wash behind an oversized
 * light heading and a short lede.
 */
export default function Hero({ page }: { page: Page }) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10">
      {page.heroImage ? (
        <Image
          src={page.heroImage.src}
          alt=""
          width={page.heroImage.width}
          height={page.heroImage.height}
          priority
          aria-hidden
          className="absolute inset-0 -z-10 h-full w-full scale-105 object-cover blur-[2px]"
        />
      ) : (
        <div className="aurora absolute inset-0 -z-10" aria-hidden />
      )}

      {/* Two stacked washes: a flat floor for contrast, plus a bottom-heavy
          gradient so the lede stays readable over the busiest part of the art. */}
      <div className="absolute inset-0 -z-10 bg-ink-950/70" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950/40 via-ink-950/60 to-ink-950/95"
        aria-hidden
      />

      <div
        className={
          page.compactHero
            ? "px-6 py-6 sm:px-12 sm:py-8"
            : "px-6 py-24 sm:px-12 sm:py-32"
        }
      >
        <h1
          className={`font-display font-light tracking-tight text-paper ${
            page.compactHero ? "text-4xl sm:text-5xl" : "text-5xl sm:text-7xl"
          }`}
        >
          {page.heading}
        </h1>

        <div className={`space-y-4 ${page.compactHero ? "mt-3 max-w-3xl" : "mt-8 max-w-2xl"}`}>
          {page.lede.map((line) => (
            <p key={line} className="text-lg leading-relaxed text-paper-muted">
              <RichText text={line} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
