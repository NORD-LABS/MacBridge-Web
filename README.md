# MacBridge-Web

The website for **MacBridge**, independent systems research by NORD LABS:
<https://macbridge.iso-nord.tech>

Static [Astro](https://astro.build) site with Tailwind CSS 4. No database, no analytics, no tracking.

## Develop

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # static output in dist/
pnpm check:links  # after build: every internal route exists, every external URL answers 2xx
```

## Content

Every claim on the site is taken from the public research documentation in
[NORD-LABS/MacBridge-Project](https://github.com/NORD-LABS/MacBridge-Project). Keep it that way:
if a result is not in that repository, it does not go on the site.

- Pages live in `src/pages/` (`index`, `research`, `first-contact`, `roadmap`, `docs`, `404`).
- All outbound links come from `src/config.ts`. The documentation currently links to the
  `docs/northstar-project-atlas` branch (open PR #1). When that PR is merged, set `DOCS_REF = 'main'`.
- Status labels use the vocabulary defined in the project's `ROADMAP.md` and `docs/evidence.md`.

## Deploy

Pushes to `main` deploy to production through the Vercel Git integration.

## License

Copyright © 2026 Théodore Beaupré, operating as ISO NORD CA. All rights reserved.
No license is granted for this repository's contents. See the project's
[LICENSE.md](https://github.com/NORD-LABS/MacBridge-Project/blob/main/LICENSE.md).
