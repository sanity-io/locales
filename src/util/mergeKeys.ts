import {parseModule} from 'magicast'

export function mergeKeys(base: string, extend: string, merge: string): string {
  const baseMod = parseModule(base)
  const extendMod = parseModule(extend)
  const mergeMod = parseModule(merge)
  for (const langNamespace of Object.keys(baseMod.exports)) {
    const {commentsMap} = extractProperties(baseMod.exports[langNamespace].$ast.properties)
    const {propertiesMap: extendPropertiesMap} = extractProperties(
      extendMod.exports[langNamespace].$ast.properties,
    )
    const {propertiesMap: mergePropertiesMap} = extractProperties(
      mergeMod.exports[langNamespace].$ast.properties,
    )

    // Now lets build a new map that only contains keys that are defined in the base language, but undefined in the extend language
    const sortedKeys = Array.from(
      new Set([...extendPropertiesMap.keys(), ...mergePropertiesMap.keys()]),
    ).sort()
    const nextProperties = []
    for (const langKey of sortedKeys) {
      if (mergePropertiesMap.has(langKey)) {
        if (commentsMap.has(langKey)) {
          nextProperties.push(commentsMap.get(langKey))
        }
        nextProperties.push(`'${langKey}': '${mergePropertiesMap.get(langKey)}',`)
      } else if (extendPropertiesMap.has(langKey)) {
        if (commentsMap.has(langKey)) {
          nextProperties.push(commentsMap.get(langKey))
        }
        nextProperties.push(`'${langKey}': '${extendPropertiesMap.get(langKey)}',`)
      }
    }
  }
}

export function extractProperties(properties: any): {
  commentsMap: Map<string, string>
  propertiesMap: Map<string, string>
} {
  const propertiesMap = new Map<string, string>()
  const commentsMap = new Map<string, string>()
  for (const property of properties) {
    const nextComments = []
    if (Array.isArray(property.comments)) {
      for (const comment of property.comments as any[]) {
        nextComments.push(`/*${comment.value}*/`)
      }
      commentsMap.set(property.key.value, nextComments.join('\n'))
    }
    propertiesMap.set(property.key.value, property.value.value)
  }
  return {commentsMap, propertiesMap}
}
