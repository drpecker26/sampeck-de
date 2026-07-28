import Image from "next/image";
import type { Media } from "@/content/types";

export const isVideo = (media: Media) => /\.(mp4|webm)$/i.test(media.src);

/**
 * Renders one piece of media as either an image or a silent looping video,
 * decided by the file extension. Shared by the card thumbnails and the
 * lightbox, so both stay in sync.
 */
export default function MediaFrame({
  media,
  fit,
  className = "",
  priority = false,
  sizes,
}: {
  media: Media;
  /** "cover" crops to the card's aspect ratio; "contain" shows the whole thing. */
  fit: "cover" | "contain";
  className?: string;
  priority?: boolean;
  /**
   * next/image sizing hint. It decides which srcset entry gets served, so the
   * lightbox must ask for a big one — otherwise it upscales a thumbnail.
   */
  sizes?: string;
}) {
  const objectFit = fit === "cover" ? "object-cover" : "object-contain";

  if (isVideo(media)) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={media.poster}
        width={media.width}
        height={media.height}
        aria-label={media.alt}
        className={`${objectFit} ${className}`}
      >
        {media.webm && <source src={media.webm} type="video/webm" />}
        <source src={media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width}
      height={media.height}
      priority={priority}
      // next/image can't optimize animated GIFs — it would freeze them.
      unoptimized={media.src.endsWith(".gif")}
      className={`${objectFit} ${className}`}
      sizes={sizes ?? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
    />
  );
}
