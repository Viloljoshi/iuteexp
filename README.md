# Iute Insurance Product Lead interview artifact

A static, outside-in product case for a hiring-manager discussion. It has three deliberate modes:

- `/brief/`: a two-page, print-optimised executive brief.
- `/deep-dive/`: an interactive case with eight core decisions and a practitioner appendix.
- `/discussion/`: a six-minute, keyboard-ready hiring-manager route.

Live site: [viloljoshi.github.io/iuteexp](https://viloljoshi.github.io/iuteexp/)

All Iute-specific claims are sourced to public Iute material. All commercial model inputs are explicitly illustrative and editable; none are presented as internal Iute data.

## Run locally

```bash
npm install
npm run dev
```

## Verify and export

```bash
npm run lint
npm test
npm run build
```

Open `/brief/`, choose Print, and use A4, default scale, no browser headers/footers. The print stylesheet fixes the brief to exactly two pages.

## Deployment

Pushing to `main` runs the Pages workflow, verifies the project, builds the static export and deploys the generated `out` directory. GitHub Pages must use **GitHub Actions** as its publishing source, not `main / (root)`.
