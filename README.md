# sampeck.de

Portfolio site for Sam Peck — games, tools, and unlisted per-application cover
letters. Next.js (App Router) + Tailwind, deployed on Vercel.

Replaces the old Gamma deck that `sampeck.de` used to redirect to.

## Running it

Needs Node 20.9+ (this machine defaults to Node 22 via nvm).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — run this before pushing
```

## Adding content

**You never edit a component to add content.** Everything on the site comes from
data files in `content/`.

### A new game, tool, or project

Open `content/home.ts` (or `content/tools.ts`), find the section you want, and
copy an existing entry:

```ts
{
  title: "My New Game",
  blurb: "One or two sentences. [Links look like this](https://example.com).",
  media: {
    src: "/media/my-new-game.gif",   // drop the file in public/media/
    alt: "My New Game gameplay",
    width: 640,                       // native pixel size — prevents layout shift
    height: 480,
  },
  links: [{ label: "Play", href: "https://..." }],
  note: "(optional grey text after the links)",
}
```

Image dimensions matter — they reserve space so the page doesn't jump while
loading. To read them off a file:

```bash
sips -g pixelWidth -g pixelHeight public/media/my-new-game.png
```

### A new section

Add an object to the `sections` array in the same file:

```ts
{
  id: "my-section",         // becomes the #anchor and the jump-link
  title: "My Section",
  intro: "Optional lede. Supports [links](https://example.com).",
  outro: "Optional closing line.",
  columns: 3,               // 2 or 3; defaults to 3
  variant: "cards",         // or "gallery" for captioned photos (see Secret Dogs)
  entries: [ /* ... */ ],
}
```

### A new cover letter

1. Copy `content/coverLetters/founders-school.ts` to
   `content/coverLetters/your-company.ts`.
2. Edit the fields. `slug` becomes the URL, so keep it lowercase-with-hyphens.
3. Register it in `content/coverLetters/index.ts`.

It's live at `/cl/your-company` on the next deploy.

These pages are **unlisted, not private** — not linked from anywhere on the site,
`noindex`'d, excluded from `robots.txt` and `sitemap.xml`. Anyone with the link
can read it, so don't put anything in there you wouldn't want forwarded.

`/?cl=your_company` also works (old URL shape) and redirects to the canonical
`/cl/your-company`. Underscores are converted to hyphens automatically.

## Layout

```
app/
  layout.tsx          dark shell, fonts, nav, footer
  page.tsx            home    -> content/home.ts
  games/page.tsx      /games  -> content/games.ts
  tools/page.tsx      /tools  -> content/tools.ts   (placeholder content)
  cl/[slug]/page.tsx  unlisted cover letters
  robots.ts           excludes /cl/
  sitemap.ts          public pages only
middleware.ts         cover-letter URL normalisation
components/           PageShell, Hero, Section, EntryCard, Nav, Footer, RichText
content/              all copy and asset references live here
public/media/         images and GIFs, harvested from the original Gamma deck
```

`RichText` supports exactly one piece of inline markup: `[label](href)`. That's
deliberate — it's not Markdown, and it doesn't need to be.

## Deploying

Pushing to `main` deploys to production via Vercel. Pull requests get preview
URLs automatically.

## Colour and type

Sampled from the original Gamma deck so the site still reads as the same person's:

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#f2f0f4` | headings |
| `paper-muted` | `#dcd7e5` | body copy |
| `accent` | `#a17de8` | links |
| `ink-950` | `#08060f` | page background |

Headings are Montserrat Light, body is Heebo.
