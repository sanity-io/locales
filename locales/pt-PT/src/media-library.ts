import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'O valor deste campo não é um vídeo válido. Redefinir este campo permitirá que você escolha um novo vídeo.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Redefinir valor',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valor de vídeo inválido',

  /** Video error fallback description */
  'video-error.description': 'Falha ao carregar vídeo',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Tentar novamente',
})
