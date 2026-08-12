import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Hodnota tohoto pole není platné video. Resetováním tohoto pole vám umožní vybrat nové video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Resetovat hodnotu',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Neplatná hodnota videa',

  /** Video error fallback description */
  'video-error.description': 'Nepodařilo se načíst video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Zkusit znovu',
})
