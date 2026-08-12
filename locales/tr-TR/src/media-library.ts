import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Bu alanın değeri geçerli bir video değil. Bu alanı sıfırlamak yeni bir video seçmenize olanak tanır.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Değeri Sıfırla',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Geçersiz video değeri',

  /** Video error fallback description */
  'video-error.description': 'Video yüklenemedi',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Yeniden Dene',
})
