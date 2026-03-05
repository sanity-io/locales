import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description': undefined, // 'The value of this field is not a valid video. Resetting this field will let you choose a new video.'
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': undefined, // 'Reset value'
  /** Warning title for invalid video value */
  'invalid-video-warning.title': undefined, // 'Invalid video value'

  /** Video error fallback description */
  'video-error.description': undefined, // 'Failed to load video'
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': undefined, // 'Retry'
})
