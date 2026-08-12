import {isRecord, type LocaleDefinition} from 'sanity'

import {weekInfoSchema} from '../../schemas'
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

  let info: unknown = {}
  if ('getWeekInfo' in locale && typeof locale.getWeekInfo === 'function') {
    info = locale.getWeekInfo()
  } else if ('weekInfo' in locale && isRecord(locale.weekInfo)) {
    info = locale.weekInfo
  }

  const result = weekInfoSchema.safeParse(info)
  if (!result.success) {
    throw new Error(`Unable to determine week info for locale "${localeId}"`, {
      cause: result.error,
    })
  }

  const {firstDay, minimalDays = 1, weekend} = result.data
  // oxlint-disable-next-line typescript/no-deprecated -- deprecated upstream, but still emitted for backwards compatibility with older studios
  return {firstDay, minimalDays, weekend}
}
