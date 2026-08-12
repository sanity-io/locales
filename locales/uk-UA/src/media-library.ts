import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Значення цього поля не є дійсним відео. Скидання цього поля дозволить вам вибрати нове відео.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Скинути значення',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Недійсне значення відео',

  /** Video error fallback description */
  'video-error.description': 'Не вдалося завантажити відео',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Повторити',
})
