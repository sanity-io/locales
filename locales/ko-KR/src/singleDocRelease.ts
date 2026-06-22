import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': '게시 예약',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': '게시 예약에 실패했습니다',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': '문서가 게시 예약되었습니다',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': '{{publishAt}}에 게시가 예약되었습니다',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    '이 문서에 대한 예약된 초안이 이미 존재합니다.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    '현재 초안의 유효성 검사 오류로 인해 초안을 예약할 수 없습니다.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': '예약에 대해 알아보기',
  /** Empty state description for scheduled drafts */
  'empty-state.description': '초안 문서를 미래의 날짜와 시간에 게시되도록 예약하고 잠급니다.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': '예약된 초안',
})
