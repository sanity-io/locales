import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    "El valor d'aquest camp no és un vídeo vàlid. Restablir aquest camp us permetrà triar un nou vídeo.",
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Restableix el valor',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valor de vídeo no vàlid',

  /** Video error fallback description */
  'video-error.description': "No s'ha pogut carregar el vídeo",
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Torna-ho a intentar',
})
