import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-shell flex-col items-start gap-6 px-6 py-32">
      <h1 className="font-display text-5xl font-light text-paper">
        Nothing here
      </h1>
      <p className="text-lg text-paper-muted">
        That page doesn&apos;t exist — or it was a private link that has since moved.
      </p>
      <Link
        href="/"
        className="rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-semibold text-accent transition-colors hover:bg-accent/20 hover:text-accent-bright"
      >
        Back to Sam Makes Games
      </Link>
    </div>
  );
}
