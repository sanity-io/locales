# Sanity studio locales

## Todo

- [ ] Studio with all locales installed, a schema/structure utilizing as many features as we have localized
- [ ] Figure out auth story for allowing people into the studio, or configuring it to their own project
- [ ] Script for generating locales packages from JSON metadata file
  - [ ] Write file in apps/studio that imports them
- [ ] Pre-commit + CI step for prettier + eslint
- [ ] Script for erroring on unknown files in locales
- [ ] Script for validating shape of locales
- [ ] Script for generating new locale
  - [ ] Validate locale name etc
  - [ ] Add to `maintainers.json`? Could be splatted into the `maintainers` array of package.json files + thank you's on readmes.
  - [ ] Add to CODEOWNERS if we can look up GitHub username (https://api.github.com/search/users?q=e@mail.com - pluck out `items[0].login` if items.length is 0)
- [ ] Script for generating status of each locale (how complete they are)
- [ ] Metadata file for annotating which locales are considered "official"
- [ ] Prepare script that nullifies/resets the `package.json` files (to avoid unwanted changes, and to keep them in sync with the original)
- [ ] Pre-publish script that generates readme for locale
  - [ ] Status at time of publishing (coverage etc)
  - [ ] Official vs community contributed
  - [ ] Date of publish and the latest version of Sanity at the time of publishing
  - [ ] Credits list
- [ ] Make a (CI) versioning and publish workflow
- [ ] Make GitHub contribution PR template with checklist
