import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Gildi þessa reits er ekki gilt myndband. Með því að endurstilla þennan reit getur þú valið nýtt myndband.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Endurstilla gildi',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Ógilt myndbandgildi',

  /** Video error fallback description */
  'video-error.description': 'Mistókst að hlaða myndbandi',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Reyna aftur',
})
