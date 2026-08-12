import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Der Wert dieses Feldes ist kein gültiges Video. Durch das Zurücksetzen dieses Feldes können Sie ein neues Video auswählen.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Wert zurücksetzen',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ungültiger Videowert',

  /** Video error fallback description */
  'video-error.description': 'Video konnte nicht geladen werden',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Erneut versuchen',
})
