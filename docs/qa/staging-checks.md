# Staging Checks — Lighthouse + Visual

Set `STAGING_URL` before running (example: `export STAGING_URL=https://staging.example.com`).  

## Lighthouse CI
Run:

```bash
npm run lhci
```

Outputs to `.lighthouse/` and asserts accessibility ≥95.

## Playwright Visual Tests
First time (to establish baseline snapshots):

```bash
STAGING_URL=$STAGING_URL npm run test:visual:update
```

Subsequent runs:

```bash
STAGING_URL=$STAGING_URL npm run test:visual
```

Notes:
- Tests target `${STAGING_URL}/calculator` by default via `playwright.config.ts`.
- Baselines are stored under `tests/visual/__screenshots__` automatically.


