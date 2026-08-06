# AGENTS.md

## Cursor Cloud specific instructions

This is the [Sanity Studio Locales](https://github.com/sanity-io/locales) monorepo: community locale packages under `locales/*`, plus a demo Studio at `apps/studio` that loads every locale as a workspace.

### Runtime

- Requires **Node `>=24.18.0`** (`package.json` `engines`) and **pnpm** (`packageManager`: `pnpm@10.29.2`). Prefer a login shell so nvm’s default Node 24 is on `PATH` ahead of any older system Node shim.
- Standard commands are in root `package.json` / `CONTRIBUTING.md`: `pnpm install`, `pnpm check:lint`, `pnpm test`, `pnpm build`, `pnpm dev`.

### Services

| Service | Command | Notes |
| --- | --- | --- |
| i18n demo Studio | `pnpm dev` (from repo root) | Serves at `http://localhost:3333`. Uses Sanity project `ppsg7ml5` / dataset `test`. Vite aliases locale packages to their `src/` so you can edit translations without rebuilding. |

### Studio auth (cloud / local)

- The Studio requires a Sanity session. In this environment, authenticate by opening:

  ```bash
  node -e "const t=process.env.SANITY_TEST_STUDIO_AUTH_TOKEN; console.log('http://localhost:3333/<locale>#token=' + encodeURIComponent(t))"
  ```

  Example locale paths: `en-US`, `de-DE`, `ja-JP`. Always `encodeURIComponent` the token. Do not commit or log the token.
- Secret name: `SANITY_TEST_STUDIO_AUTH_TOKEN`.
- Pre-auth chrome (login / workspace picker) often stays on a default locale; **full UI translation is visible after auth** inside a locale workspace. That is expected.

### Lint / test / build caveats

- CI (`.github/workflows/test.yaml`) runs `pnpm check:lint`, `pnpm test`, and `pnpm build --filter=./locales/*`. It does **not** run `pnpm check:types`.
- `pnpm check:types` currently fails on main (root `tsconfig` uses `moduleResolution: "node"` vs studio package exports). Treat lint + test as the gate unless you are specifically fixing types.
- Locale package builds via `@sanity/pkg-utils` v11 have been failing on main (api-extractor / `moduleResolution=node10` under TypeScript 5.9). Reproducing that failure locally is expected until fixed upstream in the repo; do not treat it as an environment misconfiguration.
- `pnpm install` may warn that esbuild’s build script was ignored; the `@esbuild/linux-x64` binary is still present and `sanity dev` / Vite work without approving builds.

### Hello-world check

After `pnpm dev`, open an auth URL for a non-English workspace (e.g. `de-DE`), confirm German Studio chrome (e.g. **Entwurf**, **Veröffentlichen**), and create/save a **Localization test** draft.

### Bugbot Autofix

Repo Autofix mode is **Create New Branch** (not commit-to-existing). See `.cursor/BUGBOT.md`. PR approval routing for autotranslate locales lives under `.cursor/approval-policies/`.
