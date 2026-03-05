import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'このフィールドの値は有効なビデオではありません。このフィールドをリセットすると、新しいビデオを選択できます。',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': '値をリセット',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': '無効なビデオ値',

  /** Video error fallback description */
  'video-error.description': 'ビデオの読み込みに失敗しました',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': '再試行',
})
