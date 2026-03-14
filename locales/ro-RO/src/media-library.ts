import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Valoarea acestui câmp nu este un video valid. Resetarea acestui câmp vă va permite să alegeți un nou video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Resetați valoarea',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valoare video invalidă',

  /** Video error fallback description */
  'video-error.description': 'Încărcarea video a eșuat',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Reîncercați',
})
