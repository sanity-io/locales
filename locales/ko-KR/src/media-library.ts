import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    '이 필드의 값이 유효한 비디오가 아닙니다. 이 필드를 재설정하면 새 비디오를 선택할 수 있습니다.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': '값 재설정',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': '유효하지 않은 비디오 값',

  /** Video error fallback description */
  'video-error.description': '비디오를 불러오는 데 실패했습니다',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': '재시도',
})
