# DNS cutover — completed 2026-07-27

`sampeck.de` now serves this site. Kept as a record of what the setup actually
is, and of one wrong assumption worth not repeating.

## Final state

| Host | Record | Proxy |
| --- | --- | --- |
| `sampeck.de` | `CNAME → b1f8f73f12d73700.vercel-dns-017.com` | **DNS only (grey cloud)** |
| `www.sampeck.de` | `CNAME → b1f8f73f12d73700.vercel-dns-017.com` | **DNS only (grey cloud)** |
| `kangaroo-court.sampeck.de` | `CNAME → e23474fccbf2ca14.vercel-dns-017.com` | DNS only — *separate project, don't touch* |

DNS is at Cloudflare. Hosting is Vercel project `sampeck-de` in team
`rodd-hammersteins-projects`, auto-deploying from `main`.

Proxy must stay **off**. Vercel's certificate uses an `http-01` challenge that
has to reach Vercel; orange-clouding breaks renewal.

Because Cloudflare flattens apex CNAMEs, `dig +short sampeck.de` returns Vercel
*IPs* (`64.29.17.65` / `216.198.79.65`), not the hostname. Only `www` shows the
hostname. That's expected, not a misconfiguration.

## The wrong assumption

The original runbook said a **Cloudflare Redirect Rule** was sending traffic to
the old Gamma deck, and that deleting it was step one. There was no such rule —
the Rules page was empty.

The 302 came from a **Squarespace origin** that Cloudflare was proxying to:
apex was `A → 198.49.23.145`, `www` was `CNAME → ext-sq.squarespace.com`, both
orange-clouded.

The evidence was in headers collected on day one and read past:

- `cf-cache-status: DYNAMIC` — proves an origin was contacted. An edge rule
  terminates *before* origin and cannot emit this.
- `set-cookie: crumb=…` and `x-contextid:` — both Squarespace-generated.

**A proxied 302 doesn't tell you where the redirect came from. The headers do.**
Check for origin fingerprints before hunting for a rule.

Consequence: rollback is DNS restoration, not re-enabling a rule. The full
pre-change 12-record snapshot lives at `~/sampeck-de-dns-rollback.md` —
deliberately **outside this repo**, because it contains MX and TXT records for
email and this repo is public.

## Two gotchas

- **Cloudflare won't change a record's Type on edit.** Converting the apex `A`
  to a `CNAME` needs delete-then-add.
- **Vercel didn't auto-issue the certificate**, even with DNS correct and both
  domains `verified: true`. TLS reset at Client Hello (`SSL_ERROR_SYSCALL`)
  while port 80 already served fine. It needed an explicit nudge —
  `POST /v3/certs` with `{"cns":[...]}`, equivalent to the dashboard's domain
  Refresh button.

## Loose end

Squarespace is still configured to serve this domain, and a `_domainconnect`
CNAME remains. Harmless while DNS points at Vercel, but re-running a
domain-connect flow there could rewrite records. Worth cancelling once you're
sure you're done with Squarespace.

## Verifying

Local DNS caches the old NXDOMAIN for a while. To check the real thing:

```bash
IP=$(dig +short sampeck.de | grep -E '^[0-9]' | head -1)
curl -sI --resolve "sampeck.de:443:$IP" https://sampeck.de/ | head -3
curl -s  --resolve "sampeck.de:443:$IP" https://sampeck.de/ | grep -o '<title>[^<]*</title>'
```
