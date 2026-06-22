import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'กำหนดเวลาเผยแพร่',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'ไม่สามารถกำหนดเวลาเผยแพร่ได้',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'เอกสารถูกกำหนดเวลาสำหรับการเผยแพร่แล้ว',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'กำหนดการเผยแพร่ในวันที่ {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one': 'มี Scheduled Draft สำหรับเอกสารนี้อยู่แล้ว',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'ไม่สามารถกำหนดเวลา Draft ได้ เนื่องจากมีข้อผิดพลาดในการตรวจสอบใน draft ปัจจุบัน',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'เรียนรู้เกี่ยวกับการกำหนดเวลา',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'กำหนดเวลาและล็อกเอกสาร draft สำหรับการเผยแพร่ในวันและเวลาที่กำหนดในอนาคต',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Scheduled Drafts',
})
