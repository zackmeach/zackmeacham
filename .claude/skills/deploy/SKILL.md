---
name: deploy
description: Ship zackmeacham.com to production. Use when deploying the site, verifying a deploy landed, or debugging a Vercel build — covers the PR flow, pre-merge gates, post-merge live verification, and rollback.
---

# Deploying zackmeacham.com

## How deployment works (nothing to configure)

- Hosting is **Vercel**, git-integrated to `github.com/zackmeach/zackmeacham`. There is no `vercel.json`, no `.vercel/` dir, no CI workflow in the repo — Vercel auto-detects Astro and builds `npm run build` → `dist/` on its own infrastructure.
- **Every push to `main` is a production deploy.** Merging a PR is the deploy action; there is no separate deploy step to run.
- **Every PR gets a preview deploy.** The `vercel` bot comments on the PR with a Ready/Failed status and a preview URL (`zackmeacham-git-<branch>-….vercel.app`). A failed preview = the production deploy would fail too; fix before merge.
- Domain: `zackmeacham.com`, DNS at Porkbun, already pointed at Vercel. Static Astro output — no server runtime, no env vars.
- Vercel project: `zackmeacham`, personal scope `zdmeacham-2098s-projects`, projectId `prj_mX0XlZMcIMC6yZTYRScRVwRba8x1`. Note: the Vercel MCP `list_teams` returns `[]` on this personal account — pass the scope slug as `teamId` if using MCP tools, or just verify over HTTP (below).

## Ship flow

```powershell
git checkout -b <type>/<slug>
git add <files>; git commit  # conventional: fix(site): / feat(site): …
git push -u origin <branch>
gh pr create --title "…" --body "…"
gh pr merge <n> --squash --delete-branch
git checkout main; git pull --ff-only
```

Repo convention: squash-merge, PR number lands in the main-branch subject line.

## Pre-merge gates

1. `npx astro check` — must be 0 errors / 0 warnings / 0 hints.
2. `npm run build` — must complete (currently 9 pages).
3. If the change is visible in a browser: verify against the dev server (`.claude/launch.json` → `astro dev`, port 4321) before pushing. Don't claim green from the check alone.

## Post-merge verification (production really updated)

Production is live fast (observed <60s after merge), but the edge cache serves stale HTML (`X-Vercel-Cache: HIT`, nonzero `Age`) — **always cache-bust with a query param** and grep for a string only the new deploy contains:

```powershell
curl -s "https://zackmeacham.com/<path>/?cb=$(Get-Date -UFormat %s)" | Select-String "<marker from the change>"
```

A deploy is "verified" only after a marker from the actual diff appears on the live domain. Header check: `curl -sI https://zackmeacham.com` → `Server: Vercel`.

## Rollback

- Preferred: `git revert <sha>` on `main` and push — that's just another production deploy.
- Instant: Vercel dashboard → project `zackmeacham` → Deployments → promote a previous deployment ("Instant Rollback"). Use when the site is broken and a revert build would take too long.

## Gotchas

- **Astro dev caches `getStaticPaths`.** After editing `src/data/site.ts` content consumed by `/work/[slug]`, the dev server can serve stale case-study pages — restart the dev server before trusting what you see. Production builds are unaffected.
- All site copy lives in `src/data/site.ts`; its claims are reconciled against verified ground truth — edit subtractively, never invent metrics or upgrade ownership verbs.
- `dist/` and `launch.json` are gitignored; never commit build output.
