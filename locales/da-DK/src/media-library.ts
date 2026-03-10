import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Værdien af dette felt er ikke en gyldig video. Nulstilling af dette felt vil lade dig vælge en ny video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Nulstil værdi',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ugyldig videoværdi',

  /** Video error fallback description */
  'video-error.description': 'Kunne ikke indlæse video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Prøv igen',
})
