# Contributing

Contributions are always welcome!

## Getting started

Before contributing, please read our [code of conduct](https://github.com/sanity-io/locales/blob/main/CODE_OF_CONDUCT.md).

Then make sure you have [Node.js](https://nodejs.org/en) _version 18.3 or newer_, as well as [pnpm](https://pnpm.io/).

```sh
git clone git@github.com:sanity-io/locales.git
cd locales
pnpm install
pnpm run build
```

## Adding a new locale

Hooray! We appreciate your contribution and love seeing new locales added!

1. Create a new branch for your work (`git checkout -b feat/add-locale-<locale-id>`).
2. Edit `locales/registry.ts` and add a new entry to the `registry` array
   - The `id` property should be a [BCP 47](https://tools.ietf.org/html/bcp47) language tag
   - Add your GitHub username to the `maintainers` and `contributors` arrays.
3. From the root of the repository, run `pnpm run reconcile`
4. Open up the newly created folder (matching the `id` property of the entry you put into `locales/registry.ts`) and inspect the contents.
   - The `src` folder will hold all the resources (strings) that need to be translated - one file per _namespace_.
   - Properties should have an `undefined` value, followed by a comment that holds the English (default) value. This makes it easier to spot what is missing translations.
     - Searching for `: undefined,` should give you a good indicator if any is missing.
     - You can also run `pnpm run check:missing --locale <locale>` to get a list of missing translations (if running with npm, you may need to run `npm run check:missing -- --locale <locale>` - note the double-dash).
5. Add and make changes to the translations! You can use the `pnpm run dev` command to start up a local studio with your changes.
6. Add your changes to git (`git add .`) and commit (`git commit -m "feat(<locale-id>): add <locale name> locale"`). We use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for our commit messages.
   - Note: The reconciliation script will make changes to `pnpm-lock.yaml`, `apps/studio` and possibly `locales/registry.ts` (if not sorted correctly). This is expected, and should be commited.
7. Push your changes to a fork and send a pull request!

## Troubleshooting

If you run into build issues, you might want to try deleting `node_modules` folders and reinstalling dependencies with `pnpm install`.
