import { LINKEDIN, MEDIUM } from "@/content/home";

const YEAR = 2026;

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/5">
      <div className="mx-auto flex max-w-shell flex-col gap-3 px-6 py-10 text-sm text-paper-dim sm:flex-row sm:items-center sm:justify-between">
        <p>© {YEAR} Sam Peck</p>
        <div className="flex gap-5">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            LinkedIn
          </a>
          <a
            href={MEDIUM}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            Medium
          </a>
          <a
            href="https://www.youtube.com/@sampeck26"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
