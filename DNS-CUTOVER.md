# Prompt: point sampeck.de at the new Vercel site

Copy everything below the line into the other agent.

---

I need to repoint my domain `sampeck.de` away from a Gamma deck and onto a Vercel
project. DNS is managed at Cloudflare. I can do browser steps; you tell me
exactly what to click and verify each step from the command line.

## Current state (already verified — don't re-litigate this)

- `sampeck.de` nameservers are Cloudflare: `lennox.ns.cloudflare.com`,
  `irena.ns.cloudflare.com`.
- The apex is **Cloudflare-proxied** (resolves to `104.21.49.147` /
  `172.67.163.172`) and a **Cloudflare Redirect Rule** returns
  `302 -> https://gamma.app/public/Sam-Makes-Games-as1jrf4svrg1lj7?mode=doc`.
  Same for `www`.
- `kangaroo-court.sampeck.de` is already a working Vercel subdomain:
  `CNAME -> e23474fccbf2ca14.vercel-dns-017.com`, **DNS-only (grey cloud)**.
  Copy that pattern — it's the known-good precedent on this zone.
- The new site is Vercel project **`sampeck-de`** in team
  **`rodd-hammersteins-projects`**, live and healthy at
  <https://sampeck-de.vercel.app>. It auto-deploys from
  `github.com/drpecker26/sampeck-de` on push to `main`.
- Both `sampeck.de` and `www.sampeck.de` are **already added to the Vercel
  project and show `verified: true`**. No TXT verification record is needed.
  The only thing left is DNS.

## What needs to happen, in this order

**1. Delete (or disable) the Cloudflare Redirect Rule.**
Cloudflare dashboard -> `sampeck.de` -> **Rules -> Redirect Rules** -> find the
rule sending traffic to `gamma.app` -> delete or disable it.

This is the step that silently breaks everything if skipped. A redirect rule
runs at Cloudflare's edge *before* DNS resolution matters, so the site will keep
302'ing to Gamma no matter how correct the DNS records are. If you change DNS
and still get a 302, this rule is why.

**2. Set the DNS records.** Cloudflare -> **DNS -> Records**. Remove the
existing apex and `www` records that point at the Gamma redirect, then add:

| Type | Name | Target | Proxy |
| --- | --- | --- | --- |
| CNAME | `@` | `b1f8f73f12d73700.vercel-dns-017.com` | **DNS only (grey cloud)** |
| CNAME | `www` | `b1f8f73f12d73700.vercel-dns-017.com` | **DNS only (grey cloud)** |

Those targets came from `vercel domains verify sampeck.de`, which also returned
`disableProxy: true` — hence grey cloud, not orange. Cloudflare's CNAME
flattening handles the apex CNAME fine.

**Grey cloud matters.** Orange-cloud proxying puts Cloudflare in front of
Vercel, which double-proxies TLS and blocks Vercel from issuing its own
certificate. Symptom is a cert error or a redirect loop. Match how
`kangaroo-court` is already configured.

**Do not touch** the `kangaroo-court` record — that's a separate live game.

## Verification

Run these; don't take the dashboard's word for it.

```bash
dig +short sampeck.de
dig +short www.sampeck.de
# expect the vercel-dns-017.com target, NOT 104.21.x / 172.67.x

curl -sI https://sampeck.de/       | head -3   # want: HTTP/2 200
curl -sI https://www.sampeck.de/   | head -3   # want: 200 or a 30x to apex
curl -s  https://sampeck.de/ | grep -o '<title>[^<]*</title>'
# want: <title>Sam Makes Games</title>

curl -sI https://kangaroo-court.sampeck.de/ | head -3   # must still work
```

Success = apex returns **200**, not a 302 to gamma.app, and the title is
"Sam Makes Games".

Propagation is usually a couple of minutes on Cloudflare. Vercel issues the TLS
cert automatically once DNS resolves to it; that can take a few extra minutes,
and a cert error in that window is expected rather than a misconfiguration.

## Rollback

The Gamma deck stays live at its own URL throughout, so nothing is lost. To
revert: re-enable the redirect rule. That alone restores the old behaviour
regardless of DNS.
