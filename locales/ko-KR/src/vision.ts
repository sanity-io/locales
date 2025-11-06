import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': '클립보드에 복사',
  /** Label for deleting a query */
  'action.delete': '삭제',
  /** Label for editing a query's title */
  'action.edit-title': '제목 편집',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '중지',
  /** Label for setting up a listener */
  'action.listen-execute': '듣기 설정',
  /** Label for query loading table */
  'action.load-queries': '쿼리 불러오기',
  /** Label for loading a query */
  'action.load-query': '쿼리 불러오기',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': '취소',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': '가져오기',
  /** Label for saving a query */
  'action.save-query': '쿼리 저장',
  /** Label for updating a query */
  'action.update': '업데이트',

  /** Label for actions user can take */
  'label.actions': '액션',
  /** Label for saved queries that have been edited */
  'label.edited': '편집됨',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '새로운',
  /** Label for query type "personal" */
  'label.personal': '개인',
  /** Label for savedAt date */
  'label.saved-at': '저장된 시간',
  /** Saved queries */
  'label.saved-queries': '저장된 쿼리',
  /** Search queries */
  'label.search-queries': '쿼리 검색',
  /** Share query */
  'label.share': '공유',
  /** Label for saved query type "team" */
  'label.team': '팀',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': '파라미터가 유효한 JSON이 아닙니다',
  /** Label for "Params" (parameters) editor/input */
  'params.label': '파라미터',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '열',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '줄',
  /** Label for "Query" editor/input */
  'query.label': '쿼리',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': '쿼리 URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': '종단 간 시간',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': '실행 시간',
  /** Label for "Result" explorer/view */
  'result.label': '결과',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': '결과를 CSV로 인코딩할 수 없습니다',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': '<SaveResultButtons/>로 결과 저장',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': '해당 없음',

  /** Query already saved error label */
  'save-query.already-saved': '쿼리가 이미 저장됨',
  /** Save error label */
  'save-query.error': '쿼리 저장 오류',
  /** Save success label */
  'save-query.success': '쿼리 저장됨',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API 버전',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': '사용자 정의 API 버전',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': '데이터셋',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': '잘못된 API 버전',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': '기타',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': '관점',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    '"<code>previewDrafts</code>" 관점이 "<code>drafts</code>"로 이름이 변경되었으며 이제 사용되지 않습니다. 이 변경사항은 관점 지원이 있는 모든 버전(>= v2021-03-25)에 적용됩니다.',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': '문서 읽기',
  /** Option for selecting default perspective */
  'settings.perspectives.default': '관점 없음(API 기본값)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    '관점은 여러분의 쿼리가 데이터셋의 콘텐츠에 대한 다양한 "뷰"를 대상으로 실행될 수 있게 해줍니다',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    '기본 관점이 곧 "<code>raw</code>"에서 "<code>published</code>"로 변경될 예정입니다. 자세한 내용은 문서를 참조하십시오.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': '고정된 릴리스',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': undefined, // 'Scheduled drafts'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': '관점들',
})
