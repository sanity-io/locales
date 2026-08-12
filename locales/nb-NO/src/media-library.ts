import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Verdien av dette feltet er ikke en gyldig video. Å tilbakestille dette feltet vil la deg velge en ny video.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Tilbakestill verdi',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ugyldig videoverdi',

  /** Video error fallback description */
  'video-error.description': 'Kunne ikke laste video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Prøv på nytt',
})
