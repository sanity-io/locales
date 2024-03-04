import {platform} from 'node:os'
import {pathToFileURL} from 'node:url'
import {describe, test} from 'node:test'
import {expect} from 'expect'
import type {LocaleDefinition, LocaleResourceRecord, PluginOptions} from 'sanity'
import {getLocaleRegistry} from '../src/api/registry'
import {getBaseNamespaces} from '../src/util/getBaseNamespaces'

describe('locales', async () => {
  const locales = await getLocaleRegistry()

  for (const {id, name, englishName, path, exportName} of locales) {
    await test(`${id} (${englishName})`, async (t) => {
      const filePath = `${path}/src/index.ts`
      const importPath = platform() === 'win32' ? pathToFileURL(filePath).href : filePath
      const mod = await import(importPath)

      // These functions are for typing only
      const getPlugin = (): PluginOptions => mod[exportName]()
      const getLocale = (): LocaleDefinition => {
        const plug = getPlugin()
        if (!plug.i18n) throw new Error('No i18n')
        if (!plug.i18n.locales) throw new Error('No locales')
        if (!Array.isArray(plug.i18n.locales)) throw new Error('Locales not an array')
        return plug.i18n.locales[0]
      }
      const isDefaultRecord = (theMod: any): theMod is {default: LocaleResourceRecord} =>
        'default' in theMod

      // The tests!
      await t.test('has correct export name', () => {
        expect(typeof mod[exportName]).toBe('function')
      })

      await t.test('returns single locale in i18n.locales', () => {
        const plugin = getPlugin()
        expect(plugin).toHaveProperty('i18n.locales')
        expect(plugin.i18n?.locales).toHaveLength(1)
      })

      await t.test('locale has correct id, name', () => {
        const locale = getLocale()
        expect(locale.id).toBe(id)
        expect(locale.title).toBe(name)
      })

      await t.test('exports bundles for all known namespaces', async () => {
        const locale = getLocale()
        expect(locale.bundles?.map((bundle) => bundle.namespace)).toEqual(await getBaseNamespaces())
      })

      await t.test('bundle resources are all lazy-loaded (function syntax)', () => {
        const locale = getLocale()
        for (const bundle of locale.bundles ?? []) {
          expect(typeof bundle.resources).toBe('function')
        }
      })

      await t.test('bundle resources can be loaded, contain only defined strings', async () => {
        const locale = getLocale()
        for (const bundle of locale.bundles ?? []) {
          const resourcesResult =
            typeof bundle.resources === 'function' ? await bundle.resources() : {}

          if (!isDefaultRecord(resourcesResult)) {
            throw new Error(`No default export in ${bundle.namespace}`)
          }

          const resources = resourcesResult.default
          expect(typeof resources).toBe('object')

          for (const key of Object.keys(resources)) {
            expect(typeof key).toBe('string')
            expect(typeof resources[key]).toBe('string')
          }
        }
      })
    })
  }
})
