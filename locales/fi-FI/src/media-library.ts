import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Tämän kentän arvo ei ole kelvollinen video. Kentän nollaaminen antaa sinun valita uuden videon.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Nollaa arvo',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Kelvoton videon arvo',

  /** Video error fallback description */
  'video-error.description': 'Videon lataus epäonnistui',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Yritä uudelleen',
})
