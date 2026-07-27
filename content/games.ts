import type { Page } from "./types";
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

const games: Page = {
  title: "Games",
  heading: "Games",
  lede: [
    "Everything I've built or pitched, in one place. The ones marked Play are playable right now.",
  ],
  sections: home.sections.filter((section) =>
    GAME_SECTION_IDS.includes(section.id),
  ),
};

export default games;
