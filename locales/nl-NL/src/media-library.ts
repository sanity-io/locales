import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'De waarde van dit veld is geen geldige video. Dit veld resetten laat je een nieuwe video kiezen.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Waarde resetten',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ongeldige videowaarde',

  /** Video error fallback description */
  'video-error.description': 'Laden van video mislukt',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Opnieuw proberen',
})
