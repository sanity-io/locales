import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'El valor de este campo no es un video válido. Restablecer este campo te permitirá elegir un nuevo video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Restablecer valor',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valor de video no válido',

  /** Video error fallback description */
  'video-error.description': 'Error al cargar el video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Reintentar',
})
