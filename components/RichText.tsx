import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders the tiny inline markup used throughout content/: `[label](href)`.
 * Deliberately not a Markdown parser — content is ours, and one syntax is
 * enough to keep the data files readable.
 */
const PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export default function RichText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(PATTERN)) {
    const [full, label, href] = match;
    const start = match.index ?? 0;
    if (start > cursor) parts.push(text.slice(cursor, start));
    parts.push(<InlineLink key={start} href={href} label={label} />);
    cursor = start + full.length;
  }
  if (cursor < text.length) parts.push(text.slice(cursor));

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  );
}

function InlineLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("http");
  const className =
    "font-semibold text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent-bright hover:decoration-accent-bright";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}
