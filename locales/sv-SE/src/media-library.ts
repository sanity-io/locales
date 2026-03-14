import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Värdet i det här fältet är inte en giltig video. Genom att återställa det här fältet kan du välja en ny video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Återställ värde',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ogiltigt videovärde',

  /** Video error fallback description */
  'video-error.description': 'Det gick inte att läsa in videon',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Försök igen',
})
