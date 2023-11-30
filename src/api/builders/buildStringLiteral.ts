import generateFromAst from '@babel/generator'
import {stringLiteral} from '@babel/types'

export function buildStringLiteral(value: string): string {
  return generateFromAst(stringLiteral(value), {
    jsescOption: {
      quotes: 'single',
      // prevent things like
      // `…` -> `\u2026`
      // `→` -> `\u2192` etc
      minimal: true,
    },
  }).code
}
