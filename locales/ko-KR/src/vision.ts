import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': '클립보드에 복사',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': '중지',
  /** Label for setting up a listener */
  'action.listen-execute': '듣기 설정',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': '취소',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': '가져오기',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': '새로운',

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
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': '문서 읽기',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    '관점은 여러분의 쿼리가 데이터셋의 콘텐츠에 대한 다양한 "뷰"를 대상으로 실행될 수 있게 해줍니다',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': '관점들',
})
