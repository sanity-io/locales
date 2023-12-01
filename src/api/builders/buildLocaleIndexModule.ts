import type {Locale} from '../../types'
import {getBaseNamespaces} from '../../util/getBaseNamespaces'
import {buildStringLiteral} from './buildStringLiteral'

export async function buildLocaleIndexModule(locale: Locale): Promise<string> {
  const {id, name, exportName, packageName} = locale
  const namespaces = await getBaseNamespaces()
  const bundleTemplates =
    namespaces.length > 0 ? `\n${namespaces.map(getBundleTemplate).join(',\n')},\n` : ''

  return `
    import {defineLocale, definePlugin} from 'sanity'

    const locale = defineLocale({
      id: ${buildStringLiteral(id)},
      title: ${buildStringLiteral(name)},
      bundles: [${bundleTemplates}],
    })

    /**
     * ${locale.name} locale/translation plugin for Sanity Studio
     *
     * @public
     */
    export const ${exportName} = definePlugin({
      name: ${buildStringLiteral(packageName)},
      i18n: {
        locales: [locale],
      },
    })
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
