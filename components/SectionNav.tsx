import type { Section } from "@/content/types";

/** Horizontal jump links so a long scroll is still skimmable. */
export default function SectionNav({ sections }: { sections: Section[] }) {
  if (sections.length < 2) return null;

  return (
    <nav aria-label="Page sections" className="-mx-1 overflow-x-auto pb-1 lg:overflow-visible">
      <ul className="flex w-max gap-2 px-1 lg:w-auto lg:flex-wrap">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="block whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-paper-dim transition-colors hover:border-accent/40 hover:bg-white/[0.07] hover:text-paper"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
