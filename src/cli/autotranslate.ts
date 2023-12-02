import {translateText} from '../api/ai'
import {buildResourceBundle} from '../api/builders/buildResourceBundle'
import {findMissingResources} from '../api/resources'
import {Resource} from '../types'
import {getOrderedResources} from '../util/getOrderedResources'
import {runScript} from '../util/runScript'
import {writeFormattedFile} from '../util/writeFormattedFile'

// Takes existing resources, missing key names and generates a template for the
// AI to translate. Expects the missing keys to already have values in
// indexedResources.
function templateMissingResources(
  indexedResources: Record<string, Resource | undefined>,
  missingKeys: string[],
) {
  let tpl = `// English base translation\n`
  tpl += `const i18nextKeys = {\n`
  missingKeys.forEach((key) => {
    const val = indexedResources[key]
    if (val) {
      tpl += `  // ${val.comments}\n`
      tpl += `  ${JSON.stringify(key)}: ${JSON.stringify(val.baseValue)},\n`
    }
  })
  tpl += `};\n`
  return tpl
}

async function autotranslate() {
  const {locales} = await getOrderedResources()
  for await (const locale of locales) {
    const missingResources = await findMissingResources(locale)
    for await (const entry of missingResources) {
      const ns = locale.namespaces.find((namespace) => namespace.namespace === entry.namespace)
      if (!ns) {
        continue
      }
      const tpl = templateMissingResources(ns.indexedResources, entry.missingKeys)
      const translation = JSON.parse(await translateText(tpl, locale.name))

      // set the values from translation into the ns
      entry.missingKeys.forEach((key) => {
        const val = ns.indexedResources[key]
        if (val) {
          val.value = translation[key]
        }
      })

      // write the bundle
      for (const {filePath, resources} of locale.namespaces) {
        const moduleCode = buildResourceBundle(resources)
        await writeFormattedFile(filePath, moduleCode)
      }
    }
  }
}

runScript(autotranslate)
