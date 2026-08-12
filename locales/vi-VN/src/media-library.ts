import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Giá trị của trường này không phải là một video hợp lệ. Đặt lại trường này sẽ cho phép bạn chọn một video mới.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Đặt lại giá trị',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Giá trị video không hợp lệ',

  /** Video error fallback description */
  'video-error.description': 'Không thể tải video',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Thử lại',
})
