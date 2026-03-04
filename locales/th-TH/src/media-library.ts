import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'ค่าของฟิลด์นี้ไม่ใช่วิดีโอที่ถูกต้อง การรีเซ็ตฟิลด์นี้จะช่วยให้คุณเลือกวิดีโอใหม่',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'รีเซ็ตค่า',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'ค่าวิดีโอไม่ถูกต้อง',

  /** Video error fallback description */
  'video-error.description': 'ไม่สามารถโหลดวิดีโอได้',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'ลองใหม่',
})
