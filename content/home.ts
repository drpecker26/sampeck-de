import type { Page } from "./types";

/**
 * Home page content, transcribed verbatim from the original Gamma deck
 * (gamma.app/docs/Sam-Makes-Games-as1jrf4svrg1lj7), with "Select Games" added
 * at the top as a jumping-off point.
 *
 * To add an entry: copy a block, drop its image in /public/media, done.
 */

const PITCH_DOC =
  "https://docs.google.com/document/d/1W7-w_9GxQ3AaOpcHShi1g6JYZ_QgvNfG53fVyeW-r5E/edit";

export const LINKEDIN = "https://www.linkedin.com/in/samuel-peck-4078b415/";
export const MEDIUM = "https://medium.com/@sampeck";

const home: Page = {
  title: "Sam Makes Games",
  heading: "Sam Makes Games",
  lede: [
    "Outside of my job making games that make $, I make games for fun too.",
    `For serious business inquiries, reach out on [LinkedIn](${LINKEDIN}). For more reading, check out my [Medium](${MEDIUM}).`,
  ],
  heroImage: {
    src: "/media/hero-chimeras.png",
    alt: "A grid of AI-generated chimera creatures from Chimera Quest",
    width: 1072,
    height: 1134,
  },
  sections: [
    {
      id: "select-games",
      title: "Select Games",
      columns: 2,
      entries: [
        {
          title: "How Will I Die?",
          blurb:
            "AI predicts your death. A cinematic, one-tap simulation of the rest of your life — and what might change the ending.",
          media: {
            src: "/media/how-will-i-die.gif",
            alt: "How Will I Die? gameplay",
            width: 344,
            height: 572,
          },
          links: [{ label: "Play", href: "https://how-will-i-die.fly.dev/" }],
        },
        {
          title: "Bayworks",
          blurb:
            "An industrial economy strategy game on a metro map of the real Bay Area. Set your prices, out-trade the NPC factories, and build an empire.",
          media: {
            src: "/media/bayworks.mp4",
            webm: "/media/bayworks.webm",
            poster: "/media/bayworks.jpg",
            alt: "Bayworks gameplay",
            width: 338,
            height: 542,
          },
          links: [{ label: "Play", href: "https://bayworks-game.fly.dev/" }],
        },
        {
          title: "Rawgs to Riches",
          blurb:
            "My first game, originally made in VBA, before I joined a gaming company. Revived for $2.68 in Claude credits.",
          media: {
            src: "/media/rawgs-to-riches.gif",
            alt: "Rawgs to Riches gameplay",
            width: 450,
            height: 360,
          },
          links: [
            {
              label: "How to Play",
              href: "https://www.youtube.com/watch?v=-coTUxx3fHY",
            },
            { label: "Play", href: "https://rawgs-to-riches.fly.dev/" },
          ],
        },
        {
          title: "Kangaroo Court",
          blurb:
            "More a streamer's setup to coordinate courtroom drama with friends than a game.",
          media: {
            // Transcoded from an 8.2MB GIF — same loop, ~20x smaller.
            src: "/media/kangaroo-court.mp4",
            webm: "/media/kangaroo-court.webm",
            poster: "/media/kangaroo-court.jpg",
            alt: "Kangaroo Court streamer setup in action",
            width: 952,
            height: 514,
          },
          links: [
            {
              label: "Video Demo",
              href: "https://www.youtube.com/watch?v=rMVPQ63hJak",
            },
            { label: "Play", href: "https://kangaroo-court.sampeck.de/" },
          ],
        },
        {
          title: "Factory Dice",
          blurb:
            "[Slice and Dice](https://play.google.com/store/apps/details?id=com.com.tann.dice&hl=en_US&pli=1) with a Factory/Supply chain theme",
          media: {
            src: "/media/factory-dice.gif",
            alt: "Factory Dice prototype",
            width: 270,
            height: 528,
          },
          links: [
            {
              label: "Pitch (Request Access)",
              href: `${PITCH_DOC}?tab=t.0#heading=h.l8vnqdw3gh0w`,
            },
          ],
        },
        {
          title: "Friendship Garden",
          blurb:
            "A discord 'game' that tracks time spent with friends with plant progression.",
          media: {
            src: "/media/friendship-garden.png",
            alt: "Friendship Garden plant progression in Discord",
            width: 650,
            height: 478,
          },
          links: [
            {
              label: "Pitch (Request Access)",
              href: `${PITCH_DOC}?tab=t.0#heading=h.wobo5thixzdh`,
            },
          ],
        },
      ],
    },

    {
      id: "generative-ai-prototypes",
      title: "Generative AI Prototypes",
      intro: "Games made with API calls to AI as part of the core gameplay loop",
      entries: [
        {
          title: "Chimera Quest",
          blurb:
            "Breed unique creatures and send them on quests to improve their stats.",
          media: {
            src: "/media/chimera-quest.png",
            alt: "Chimera Quest breeding results in Discord",
            width: 646,
            height: 610,
          },
          links: [
            { label: "Play", href: "https://discord.gg/bfdkwMjxjT" },
            {
              label: "More Reading",
              href: "https://medium.com/@sampeck/taming-gpt-two-projects-demonstrating-the-potential-of-generative-ai-within-games-16e3afa3ffa0",
            },
          ],
        },
        {
          title: "Anything Crafter",
          blurb:
            "Combine anything with anything to invent new objects in the game world for others to craft.",
          media: {
            src: "/media/anything-crafter.png",
            alt: "Anything Crafter invention screen",
            width: 710,
            height: 678,
          },
          links: [
            {
              label: "More Reading",
              href: "https://medium.com/@sampeck/taming-gpt-two-projects-demonstrating-the-potential-of-generative-ai-within-games-16e3afa3ffa0",
            },
          ],
        },
        {
          title: "VectorNames",
          blurb: "LLM guesses your Codenames-like clue.",
          media: {
            src: "/media/vectornames.gif",
            alt: "VectorNames guessing a clue",
            width: 186,
            height: 332,
          },
          note: "(Play by Request)",
        },
      ],
    },

    {
      id: "fan-first-multiplayer-games",
      title: "Fan-first Multiplayer Games",
      intro: `(Novel multiplayer interactions - [more reading](https://docs.google.com/document/d/1IhDpnvBPlpLAoWYsm9hZwkAV7osqVZYvirRoBspqbc0/edit))`,
      entries: [
        {
          title: "Debate Court",
          blurb:
            "Wavelength / Here To There meets courtroom drama. Lawyer up and convince the jury of your case.",
          media: {
            src: "/media/debate-court.png",
            alt: "Debate Court concept art",
            width: 1146,
            height: 782,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.7fdvu1cjcpv` }],
        },
        {
          title: "Flirty Thirty",
          blurb: "The Dating Game modernized and played on Discord.",
          media: {
            src: "/media/flirty-thirty.png",
            alt: "Flirty Thirty concept art",
            width: 1602,
            height: 678,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.4h8z7cjaajam` }],
        },
        {
          title: "Steampunk Gangs",
          blurb:
            "[Battle for Riddler Nation](https://fivethirtyeight.com/features/the-sixth-battle-for-riddler-nation/) played over multiple rounds and with RTS elements.",
          media: {
            src: "/media/steampunk-gangs.png",
            alt: "Steampunk Gangs concept art",
            width: 936,
            height: 620,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.xk08jzvb1tsi` }],
        },
      ],
    },

    {
      id: "other-games",
      title: "Other Games",
      entries: [
        {
          title: "Color Block Heat Transfer Puzzle Game",
          blurb:
            "[Exactly What It Says on the Tin](https://tvtropes.org/pmwiki/pmwiki.php/Main/ExactlyWhatItSaysOnTheTin).",
          media: {
            src: "/media/color-block.gif",
            alt: "Color Block Heat Transfer Puzzle Game gameplay",
            width: 318,
            height: 298,
          },
          links: [
            { label: "Play", href: "https://simmer.io/@hammerstein/cbhtpg-01" },
          ],
        },
        {
          title: "Asteroid Crossfire",
          blurb: "Physics-based RTS with factory/automation elements.",
          media: {
            src: "/media/asteroid-crossfire.gif",
            alt: "Asteroid Crossfire gameplay",
            width: 318,
            height: 298,
          },
          links: [
            {
              label: "Play",
              href: "https://simmer.io/@hammerstein/asteroid-crossfire",
            },
          ],
        },
        {
          title: "EndZone",
          blurb: "Coach characters using Natural Language.",
          media: {
            src: "/media/endzone.gif",
            alt: "EndZone football gameplay",
            width: 470,
            height: 394,
          },
          links: [
            {
              label: "More Reading",
              href: "https://medium.com/@sampeck/taming-gpt-part-2-lessons-from-three-false-starts-in-generative-ai-gaming-839ed68e6533",
            },
          ],
        },
      ],
    },

    {
      id: "select-pitches",
      title: "Select Game Pitches",
      intro: `I didn't make these, but I thought about making these. All pitches can be browsed [here](${PITCH_DOC}#heading=h.au5cmtcprylg).`,
      entries: [
        {
          title: "Breakpoint",
          blurb: "JRPG played by visual scripting.",
          media: {
            src: "/media/breakpoint.png",
            alt: "Breakpoint pitch sketch",
            width: 1232,
            height: 1118,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.dbc0jnktcdub` }],
        },
        {
          title: "Blackjack RPG",
          blurb: "Character RPG with blackjack as the primary combat mechanic.",
          media: {
            src: "/media/blackjack-rpg.png",
            alt: "Blackjack RPG pitch sketch",
            width: 860,
            height: 596,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.ssobxia7kgog` }],
        },
        {
          title: "Octopus Crafter",
          blurb:
            "A survival crafter where you make progress without clicking anything.",
          media: {
            src: "/media/octopus-crafter.png",
            alt: "Octopus Crafter pitch sketch",
            width: 990,
            height: 948,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.obivr8z1lyrw` }],
        },
        {
          title: "Mass Gathering",
          blurb:
            "Place audio/visual accoutrement in a public space to inspire, provoke, excite, or terrorize hundreds of characters.",
          media: {
            src: "/media/mass-gathering.png",
            alt: "Mass Gathering pitch sketch",
            width: 740,
            height: 620,
          },
          links: [{ label: "Pitch (Request Access)", href: `${PITCH_DOC}#heading=h.k6eu8mnrs6pr` }],
        },
      ],
    },

    {
      id: "non-games",
      title: "Sam Makes Non-Games Too",
      entries: [
        {
          title: "Podcast: The Multiplayer Project",
          blurb:
            "Sam and friends talk about coordinating online play in a casual, no-prep podcast.",
          media: {
            src: "/media/podcast-multiplayer-project.png",
            alt: "The Multiplayer Project podcast cover art",
            width: 456,
            height: 456,
          },
          links: [
            {
              label: "Spotify",
              href: "https://open.spotify.com/show/67HYjLGQybtab3LHcK0ZHA",
            },
          ],
        },
        {
          title: "Book: Notebook Doodles of a a Future Genious [sic]",
          blurb:
            'Sam wrote and published on Amazon a snarky book. One of the top 761,588 sellers in January 2021 of titles called "Notebook Doodles".',
          media: {
            src: "/media/book-notebook-doodles.png",
            alt: "Notebook Doodles of a a Future Genious book cover",
            width: 1162,
            height: 1160,
          },
          links: [
            {
              label: "Amazon",
              href: "https://www.amazon.com/Notebook-Doodles-Future-Genious-engineering/dp/B08RRJ8ZNT/",
            },
          ],
        },
        {
          title: "House Projects",
          blurb: "Sam works on non-screen projects around the house.",
          media: {
            src: "/media/house-projects.png",
            alt: "A house project in progress",
            width: 854,
            height: 1022,
          },
          links: [
            {
              label: "Google Docs, Request Access",
              href: "https://docs.google.com/document/d/1qd-4YzgNOol0LzYEhxbhsUYfpU2MWBjj2zrLObIo-J8/edit",
            },
          ],
          note: "no doxxing plz",
        },
        {
          title: "Youtube Channel",
          blurb: "Mostly personal / travel stuff.",
          media: {
            src: "/media/youtube-channel.png",
            alt: "Sam's YouTube channel",
            width: 1538,
            height: 1328,
          },
          links: [
            { label: "Youtube", href: "https://www.youtube.com/@sampeck26" },
          ],
        },
      ],
    },

    {
      id: "contact",
      title: "Contact",
      intro: "See a game you're interested in? Want to build something? Let's chat!",
      outro: `[Sam's LinkedIn](${LINKEDIN})`,
      entries: [],
    },

    {
      id: "secret-dogs",
      title: "Secret Dogs",
      intro:
        "Congratulations, you found the secret dogs. Your next game project will be a hit.",
      outro:
        "([joke explainer](https://twitter.com/kniivila/status/872184989902876672))",
      variant: "gallery",
      hideFromNav: true,
      entries: [
        {
          title: "Blep Dog (Benji)",
          blurb: "",
          media: {
            src: "/media/dog-benji.jpg",
            alt: "Benji, a black dog lying on a bed with his tongue out",
            width: 1802,
            height: 1602,
          },
        },
        {
          title: "Nap Dog (Wendy)",
          blurb: "",
          media: {
            src: "/media/dog-wendy.jpg",
            alt: "Wendy, a dog asleep on the grass next to a tennis ball",
            width: 1236,
            height: 1067,
          },
        },
        {
          title: "Small Angry Dog (Tucker)",
          blurb: "",
          media: {
            src: "/media/dog-tucker.jpg",
            alt: "Tucker, a black cat stretched out on a wooden floor",
            width: 1615,
            height: 1577,
          },
        },
      ],
    },
  ],
};

export default home;
