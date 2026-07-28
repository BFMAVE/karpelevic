# Karpelevic — paper website

Offline development site for:

> **Critical Invariant Polygons and the Farey–Ito Boundary of Stochastic
> Spectra**
>
> Brecht Verbeken and Vincent Ginis

The approved public release replaces the original GitHub Pages placeholder at
<https://bfmave.github.io/paper-project-site/>.

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

The default preview is <http://localhost:3000>.

## Checks

```bash
npm run lint
npm test
```

`npm test` creates a production Vinext build and verifies the rendered Home,
History, and My Journey pages plus the bundled PDF asset.

## Project record

- [`PROJECT_STATUS.md`](./PROJECT_STATUS.md) is the living progress and review
  record.
- [`PHASE_1_DISCOVERY.md`](./PHASE_1_DISCOVERY.md) contains the original
  content audit, architecture proposal, visual tokens, and source inventory.

`npm run build:pages` creates and verifies the static `pages-out/` artifact
under the repository base path. The GitHub Actions workflow checks out full
history so each page can derive its visible timestamp from the latest commit
that touched its source content.
