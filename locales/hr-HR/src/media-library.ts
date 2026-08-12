import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Vrijednost ovog polja nije valjani video. Resetiranjem ovog polja moći ćete odabrati novi video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Resetiraj vrijednost',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Nevaljana vrijednost videa',

  /** Video error fallback description */
  'video-error.description': 'Učitavanje videa nije uspjelo',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Pokušaj ponovo',
})
