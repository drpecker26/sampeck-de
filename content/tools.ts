import type { Entry, Page } from "./types";

const tool = (
  title: string,
  blurb: string,
  file: string,
  width: number,
  height: number,
): Entry => ({
  title,
  blurb,
  media: { src: `/media/${file}`, alt: title, width, height },
});

const tools: Page = {
  title: "Tools",
  heading: "Tools",
  lede: [
    "Local-first tools I've built for making game ads, and for running the agents that help make them.",
  ],
  sections: [
    {
      id: "tools",
      title: "Sam's Tools",
      variant: "list",
      entries: [
        tool(
          "Woodpecker — Video Generation",
          "A canvas where generated and real clips get strung together into a finished video ad.",
          "woodpecker-video-generation.png", 1582, 1116,
        ),
        tool(
          "Woodpecker — Creative Composition",
          "A factory line that assembles reusable string frames into ads for every aspect ratio.",
          "woodpecker-creative-composition.png", 1844, 982,
        ),
        tool(
          "Woodpecker — Competitive Intelligence",
          "Captures and deconstructs competitor ads and playables, side by side with our own.",
          "woodpecker-competitive-intelligence.png", 1920, 1468,
        ),
        tool(
          "Agent Hotline",
          "A Slack channel where an AI secretary answers questions and follow-ups on my behalf.",
          "agent-hotline.png", 1426, 1130,
        ),
        tool(
          "Fieldnotes",
          "A swipeable phone feed of competitor ads that sends saved ideas straight back to my Mac.",
          "fieldnotes.png", 624, 1220,
        ),
        tool(
          "Remake Playable",
          "Rebuilds a reference playable ad in our own game's art and brand, critiqued until it holds up.",
          "remake-playable.png", 1992, 932,
        ),
        tool(
          "Remake Video",
          "Remakes a reference video ad's story, action and timing with our own game's characters.",
          "remake-video.png", 774, 660,
        ),
        tool(
          "Argus",
          "Zero-token telemetry over Claude Code sessions: tokens, cost and time per agent task.",
          "argus.png", 1854, 846,
        ),
      ],
    },
  ],
};

export default tools;
