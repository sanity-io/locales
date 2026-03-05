import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Värdet på detta fält är inte en giltig video. Att återställa detta fält låter dig välja en ny video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Återställ värde',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ogiltigt videovärde',

  /** Video error fallback description */
  'video-error.description': 'Misslyckades med att ladda video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Försök igen',
})
