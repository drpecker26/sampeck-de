"use client";

import { useCallback, useEffect, useState } from "react";
import type { Media } from "@/content/types";
import MediaFrame from "./MediaFrame";

/**
 * A cropped thumbnail that opens the full, uncropped media in a lightbox.
 *
 * Cards crop to a common aspect ratio so the grid stays tidy — this is how you
 * get to see the whole frame.
 */
export default function MediaThumb({
  media,
  aspect = "aspect-[4/3]",
  rounded = "",
}: {
  media: Media;
  aspect?: string;
  rounded?: string;
}) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);

    // Stop the page scrolling behind the overlay.
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View ${media.alt} full size`}
        className={`group/thumb relative block w-full cursor-zoom-in overflow-hidden bg-ink-900 ${aspect} ${rounded}`}
      >
        <MediaFrame
          media={media}
          fit="cover"
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-end justify-end p-3 opacity-0 transition-opacity group-hover/thumb:opacity-100"
        >
          <span className="rounded-full bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-paper backdrop-blur-sm">
            View full
          </span>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={media.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-md sm:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-white/20 sm:right-6 sm:top-6"
            autoFocus
          >
            Close
          </button>

          {/* Stop clicks on the media itself from dismissing the overlay. */}
          {/* The figure needs a definite width — otherwise it and the image
              size off each other and collapse to a few hundred pixels. */}
          <figure
            onClick={(event) => event.stopPropagation()}
            className="flex w-full max-w-6xl cursor-default flex-col items-center gap-4"
          >
            <MediaFrame
              media={media}
              fit="contain"
              sizes="95vw"
              // w-full gives a definite box; object-contain letterboxes inside
              // it, so nothing is cropped and nothing is distorted.
              className="h-auto max-h-[82vh] w-full rounded-xl"
            />
            <figcaption className="text-center text-sm text-paper-dim">
              {media.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
