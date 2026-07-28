import type { CoverLetter } from "./index";

/**
 * TEMPLATE — live at /cl/founders-school.
 *
 * Every string below is scaffolding, not copy. Replace all of it before sending
 * the link anywhere. Copy this file to add a new application; the slug becomes
 * the URL, so keep it lowercase-with-hyphens.
 */
const foundersSchool: CoverLetter = {
  slug: "founders-school",
  company: "Founders School",
  role: "[Role title goes here]",

  isDraft: true,

  hook: "[One sentence. The single most relevant thing about you for this specific job.]",

  body: [
    "[Opening paragraph — why this company, why now. Two or three sentences. Name something specific about them so it's obvious this wasn't a mass send.]",
    "[Evidence paragraph — the one or two projects that most directly map to what they're hiring for. Link to them: the site's sections are addressable, e.g. /#generative-ai-prototypes, and games can link straight to a playable build.]",
    "[Range paragraph — what else you bring that they didn't ask for but would want. Keep it to the things that actually apply to this role.]",
  ],

  highlights: [
    {
      title: "[Strength #1]",
      detail: "[One or two sentences of concrete evidence. Prefer shipped things over adjectives.]",
    },
    {
      title: "[Strength #2]",
      detail: "[One or two sentences of concrete evidence.]",
    },
    {
      title: "[Strength #3]",
      detail: "[One or two sentences of concrete evidence.]",
    },
  ],

  closing:
    "[Closing line and how to reach you — e.g. [LinkedIn](https://www.linkedin.com/in/samuel-peck-4078b415/).]",

  links: [
    { label: "Play Rawgs to Riches", href: "https://rawgs-to-riches.fly.dev/" },
    { label: "Portfolio", href: "/" },
    { label: "Writing", href: "https://medium.com/@sampeck" },
  ],
};

export default foundersSchool;
