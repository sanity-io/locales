import registry from '../../locales/registry'

registry
  .filter((locale) => locale.maintainers.length > 0)
  .forEach((locale) => {
    console.log(`${locale.englishName}:`, locale.maintainers.join(', '))
  })
