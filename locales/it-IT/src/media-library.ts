import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Il valore di questo campo non è un video valido. Reimpostando questo campo potrai scegliere un nuovo video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Reimposta valore',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valore video non valido',

  /** Video error fallback description */
  'video-error.description': 'Caricamento del video non riuscito',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Riprova',
})
