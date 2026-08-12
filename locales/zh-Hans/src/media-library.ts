import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description': '此字段的值不是有效的视频。重置此字段将允许您选择新视频。',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': '重置值',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': '无效的视频值',

  /** Video error fallback description */
  'video-error.description': '视频加载失败',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': '重试',
})
