import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Ennek a mezőnek az értéke nem érvényes videó. A mező visszaállításával új videót választhat.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Érték visszaállítása',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Érvénytelen videóérték',

  /** Video error fallback description */
  'video-error.description': 'A videó betöltése sikertelen',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Újrapróbálás',
})
