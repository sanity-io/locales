import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Valoarea acestui câmp nu este un videoclip valid. Resetarea acestui câmp vă va permite să alegeți un nou videoclip.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Resetează valoarea',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valoare videoclip invalidă',

  /** Video error fallback description */
  'video-error.description': 'Încărcarea videoclipului a eșuat',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Reîncearcă',
})
