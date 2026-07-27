import type { Page } from "@/content/types";
import Hero from "./Hero";
import Section from "./Section";
import SectionNav from "./SectionNav";

/**
 * Renders a whole page from its content file: hero, jump links, then every
 * section in order. `/`, `/games`, and `/tools` all go through this.
 */
export default function PageShell({ page }: { page: Page }) {
  return (
    <div className="mx-auto max-w-shell space-y-8 px-4 py-8 sm:px-6 sm:py-10">
      <Hero page={page} />
      <SectionNav sections={page.sections} />
      {page.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}
