import registry from '../../locales/registry'

export const printMaintainers = async () => {
  registry
    .filter((locale) => locale.maintainers.length > 0)
    .forEach((locale) => {
      // eslint-disable-next-line no-console
      console.log(`${locale.englishName}:`, locale.maintainers.join(', '))
    })
}
