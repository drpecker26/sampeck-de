import type { Link } from "../types";
import foundersSchool from "./founders-school";

/**
 * Unlisted, per-application cover letters served at /cl/<slug>.
 *
 * To add one: copy founders-school.ts, edit it, register it below. The page is
 * live at /cl/<slug> immediately, is not linked from anywhere on the site, and
 * is excluded from the sitemap and robots.txt.
 */

export type CoverLetter = {
  slug: string;
  /**
   * Shows a loud "unfinished draft" banner on the page. Set it while the copy
   * is still scaffolding, and delete the line once the letter is real.
   */
  isDraft?: boolean;
  /** Company or program you're writing to. */
  company: string;
  /** Role you're applying for. */
  role: string;
  /** Opening line under the heading. */
  hook: string;
  /** Body paragraphs. Supports [label](href). */
  body: string[];
  /** "Why this maps to what you're hiring for" — title + one or two lines. */
  highlights: { title: string; detail: string }[];
  /** Closing paragraph. Supports [label](href). */
  closing: string;
  /** Things worth clicking: games, writing, the résumé. */
  links?: Link[];
};

export const coverLetters: Record<string, CoverLetter> = {
  [foundersSchool.slug]: foundersSchool,
};

export function getCoverLetter(slug: string): CoverLetter | undefined {
  return coverLetters[slug];
}

export function coverLetterSlugs(): string[] {
  return Object.keys(coverLetters);
}
