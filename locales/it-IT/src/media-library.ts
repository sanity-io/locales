import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Il valore di questo campo non è un video valido. Reimpostando questo campo ti sarà possibile scegliere un nuovo video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Reimposta valore',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valore video non valido',

  /** Video error fallback description */
  'video-error.description': 'Caricamento video fallito',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Riprova',
})
