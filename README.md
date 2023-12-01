# Sanity studio locales

## Next

- [ ] Figure out missing keys in terms of pluralization
- [ ] Script/process to bootstrap new locale
- [ ] Maybe AI suggested strings for missing keys?

## Todo

- [ ] Script for generating new locale
  - [ ] Validate locale name etc
  - [ ] Add to `maintainers.json`? Could be splatted into the `maintainers` array of package.json files + thank you's on readmes.
  - [ ] Add to CODEOWNERS if we can look up GitHub username (https://api.github.com/search/users?q=e@mail.com - pluck out `items[0].login` if items.length is 0)
- [ ] Figure out auth story for allowing people into the studio, or configuring it to their own project
- [ ] Pre-commit + CI step for prettier + eslint
- [ ] Script for erroring on unknown files in locales
- [ ] Script for generating status of each locale (how complete they are)
- [ ] Pre-publish script that generates readme for locale
  - [ ] Status at time of publishing (coverage etc)
  - [ ] Official vs community contributed
  - [ ] Date of publish and the latest version of Sanity at the time of publishing
  - [ ] Credits list
- [ ] Make a (CI) versioning and publish workflow
- [ ] Make GitHub contribution PR template with checklist
- [x] Studio with all locales installed, a schema/structure utilizing as many features as we have localized
- [x] Script for generating locales packages from JSON metadata file
  - [x] Write file in apps/studio that imports them
- [x] Script for validating shape of locales
- [x] Metadata file for annotating which locales are considered "official"
- [x] Prepare script that nullifies/resets the `package.json` files (to avoid unwanted changes, and to keep them in sync with the original)
