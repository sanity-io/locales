import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Verdien i dette feltet er ikkje ein gyldig video. Ved å tilbakestille dette feltet kan du velje ein ny video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Tilbakestill verdi',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ugyldig videoverdi',

  /** Video error fallback description */
  'video-error.description': 'Klarte ikkje å laste inn video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Prøv på nytt',
})
