import type { Page, Section } from "./types";
import home from "./home";

/**
 * The full games index. For now it reuses the game sections from the home page
 * so there's a single source of truth — as playable games land, give them their
 * own entries here.
 */
const GAME_SECTION_IDS = [
  "select-games",
  "generative-ai-prototypes",
  "fan-first-multiplayer-games",
  "other-games",
  "select-pitches",
];

const currentProject: Section = {
  id: "current-project",
  title: "Current Project",
  variant: "feature",
  entries: [
    {
      title: "Charter",
      blurb:
        "A MicroMORPG where we build the world together.\n\nGrow your character, build our town, and shape the world!",
      links: [{ label: "https://playcharter.io/", href: "https://playcharter.io/" }],
      media: {
        src: "/media/charter.mp4",
        webm: "/media/charter.webm",
        poster: "/media/charter.jpg",
        alt: "Charter gameplay",
        width: 540,
        height: 828,
      },
    },
  ],
};

const games: Page = {
  title: "Games",
  heading: "Games",
  compactHero: true,
  lede: [
    "Everything I've built or pitched, in one place. The ones marked Play are playable right now.",
  ],
  sections: [
    currentProject,
    ...home.sections.filter((section) => GAME_SECTION_IDS.includes(section.id)),
  ],
};

export default games;
