import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description': '此欄位的值不是有效的影片。重置此欄位將讓您選擇新的影片。',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': '重置值',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': '影片值無效',

  /** Video error fallback description */
  'video-error.description': '影片加載失敗',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': '重試',
})
