import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Значение этого поля не является допустимым видео. Сброс этого поля позволит вам выбрать новое видео.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Сбросить значение',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Недопустимое значение видео',

  /** Video error fallback description */
  'video-error.description': 'Не удалось загрузить видео',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Повторить',
})
