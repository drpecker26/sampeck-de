import type { CoverLetter } from "./index";

/**
 * EXAMPLE / TEMPLATE — live at /cl/founders-school.
 *
 * The prose below is a worked placeholder written from the portfolio content,
 * not a real submitted letter. Rewrite it per application; the structure is the
 * point. Slugs become URLs, so keep them lowercase-with-hyphens.
 */
const foundersSchool: CoverLetter = {
  slug: "founders-school",
  company: "Founders School",
  role: "Game Designer / Product Builder",

  hook: "I ship playable prototypes faster than most teams finish a spec.",

  body: [
    "I make games professionally, and then I go home and make more of them. That second category is where the interesting work happens: no roadmap, no committee, just a question I want answered and a build by the end of the weekend.",
    "The [Generative AI Prototypes](/#generative-ai-prototypes) on this site are the clearest example. Chimera Quest, Anything Crafter, and VectorNames each put an LLM inside the core gameplay loop rather than bolting it on as a chat window — and each one shipped far enough to have real players and real failure modes. I wrote up what worked and what didn't on [Medium](https://medium.com/@sampeck), including the false starts, because the false starts are the useful part.",
    "Alongside that I've run a podcast, published a book, and pitched more games than I've built. That range matters: I can take an idea from a one-paragraph pitch through a playable build to something people actually find and use.",
  ],

  highlights: [
    {
      title: "Prototype velocity",
      detail:
        "Multiple generative-AI games taken from idea to playable, with public write-ups on the design decisions behind each.",
    },
    {
      title: "Multiplayer systems",
      detail:
        "Fan-first multiplayer designs — Debate Court, Flirty Thirty, Steampunk Gangs — built around novel interactions rather than reskinned lobbies.",
    },
    {
      title: "Ships the whole thing",
      detail:
        "Design, build, deploy, and write it up. This site, its games, and their infrastructure are all mine end to end.",
    },
  ],

  closing:
    "If any of the above looks like the kind of problem you're working on, I'd love to talk. The fastest way to reach me is [LinkedIn](https://www.linkedin.com/in/samuel-peck-4078b415/).",

  links: [
    { label: "Play Kangaroo Court", href: "https://kangaroo-court.sampeck.de" },
    { label: "Portfolio", href: "/" },
    { label: "Writing", href: "https://medium.com/@sampeck" },
  ],
};

export default foundersSchool;
