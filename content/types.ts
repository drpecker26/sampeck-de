/**
 * The shape of every page's content. Adding a new game, tool, or section means
 * editing a data file in this folder — never a component.
 */

export type Link = {
  label: string;
  href: string;
};

export type Media = {
  /**
   * Path under /public, e.g. "/media/endzone.gif". A `.mp4` here renders as a
   * silent looping video instead of an image — use that for anything over ~2MB
   * as a GIF (see the README for the ffmpeg command).
   */
  src: string;
  alt: string;
  /** Native pixel size — used to reserve layout space and avoid content shift. */
  width: number;
  height: number;
  /** Optional smaller `.webm`, tried before the `.mp4`. Video only. */
  webm?: string;
  /** First-frame image shown before the video starts. Video only. */
  poster?: string;
};

export type Entry = {
  title: string;
  /** Supports a tiny inline markup: [label](href) becomes a link. */
  blurb: string;
  media?: Media;
  links?: Link[];
  /** Renders after the links, unlinked — e.g. "(Play by Request)". */
  note?: string;
};

export type Section = {
  /** Anchor id, also used for the in-page nav. */
  id: string;
  title: string;
  /** Optional lede under the section title. Supports [label](href). */
  intro?: string;
  /** Optional closing line under the entries. Supports [label](href). */
  outro?: string;
  entries: Entry[];
  /** 3 is the deck's default; 2 reads better for very wordy entries. */
  columns?: 2 | 3;
  /**
   * "cards" (default) is the grid. "gallery" is a photo grid with captions
   * (Secret Dogs). "list" is a compact table: thumbnail left, title and
   * one-line blurb right (Tools). "feature" is a spotlight band per entry with
   * no visible heading: media flush left at full height, title, blurb and
   * links right; blank lines in the blurb split paragraphs (Current Project).
   */
  variant?: "cards" | "gallery" | "list" | "feature";
  /**
   * Keep the section off the jump-link bar. Still on the page and still
   * anchor-linkable — just not advertised at the top.
   */
  hideFromNav?: boolean;
};

export type Page = {
  title: string;
  /** Big hero heading. */
  heading: string;
  /** Paragraphs under the hero heading. Supports [label](href). */
  lede: string[];
  heroImage?: Media;
  /** Short header bar instead of the tall hero, so the first section shows above the fold. */
  compactHero?: boolean;
  sections: Section[];
};
