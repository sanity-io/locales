import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Wartość tego pola nie jest prawidłowym wideo. Zresetowanie tego pola pozwoli Ci wybrać nowe wideo.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Zresetuj wartość',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Nieprawidłowa wartość wideo',

  /** Video error fallback description */
  'video-error.description': 'Nie udało się załadować wideo',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Ponów próbę',
})
