import {LocaleDefinition, isRecord} from 'sanity'
import type {Locale} from '../../types'
import {getBaseNamespaces} from '../../util/getBaseNamespaces'
import {buildStringLiteral} from './buildStringLiteral'

export async function buildLocaleIndexModule(locale: Locale): Promise<string> {
  const {id, name, exportName, packageName} = locale
  const namespaces = await getBaseNamespaces()
  const bundleTemplates =
    namespaces.length > 0 ? `\n${namespaces.map(getBundleTemplate).join(',\n')},\n` : ''

  return `
    import {defineLocale, definePlugin, type LocaleDefinition} from 'sanity'

    const locale = defineLocale({
      id: ${buildStringLiteral(id)},
      title: ${buildStringLiteral(name)},
      bundles: [${bundleTemplates}],
      weekInfo: ${JSON.stringify(getWeekInfo(locale), null, 2)}
    })

    /**
     * ${locale.name} / ${locale.englishName} locale/translation plugin for Sanity Studio
     *
     * @public
     */
    export const ${exportName} = definePlugin<{
      title?: string
      weekInfo?: LocaleDefinition['weekInfo']
    } | void>((config) => ({
      name: ${buildStringLiteral(packageName)},
      i18n: {
        locales: [config ? {...locale, ...config} : locale],
      },
    }))
  `.trim()
}

function getBundleTemplate(namespace: string) {
  const importPath = `./${namespace}`
  return `
    {
      namespace: ${buildStringLiteral(namespace)},
      resources: () => import(${buildStringLiteral(importPath)}),
    }`
}

function getWeekInfo(forLocale: Locale): LocaleDefinition['weekInfo'] {
  if (forLocale.weekInfo) {
    return forLocale.weekInfo
  }

  const localeId = forLocale.id
  const locale = new Intl.Locale(localeId)

  let info: Partial<LocaleDefinition['weekInfo']> = {}
  if ('getWeekInfo' in locale && typeof locale.getWeekInfo === 'function') {
    info = locale.getWeekInfo()
  } else if ('weekInfo' in locale && isRecord(locale.weekInfo)) {
    info = locale.weekInfo
  }

  if (!isRecord(info)) {
    throw new Error(`Unable to determine week info for locale "${localeId}"`)
  }

  const {firstDay, minimalDays, weekend} = info
  if (firstDay !== 1 && firstDay !== 7) {
    throw new Error(`Invalid first day of week ${firstDay} for locale "${localeId}"`)
  }

  if (typeof minimalDays !== 'number') {
    throw new Error(`Invalid minimal days in first week ${minimalDays} for locale "${localeId}"`)
  }

  if (!Array.isArray(weekend)) {
    throw new Error(
      `Invalid weekend days ${JSON.stringify(weekend, null, 2)} for locale "${localeId}"`,
    )
  }

  return {firstDay, minimalDays, weekend}
}
