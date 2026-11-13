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
  'action.save-personal-copy': '개인 사본 저장',
  /** Label for saving a personal query */
  'action.save-personal-query': '개인으로 저장',
  /** Label for saving a query */
  'action.save-query': '쿼리 저장',
  /** Label for saving a shared query */
  'action.save-shared-query': '공유로 저장',
  /** Label for unsharing a query */
  'action.unshare': '공유 해제',
  /** Label for updating a query */
  'action.update': '업데이트',

  /** Label for actions user can take */
  'label.actions': '액션',
  /** Label for all saved queries */
  'label.all': '전체',
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
  /** Label for query type "shared" */
  'label.shared': '공유됨',
  /** Label for saved query type "team" */
  'label.team': '팀',
  /** Label for untitled query fallback */
  'label.untitled-query': '제목 없음',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': '파라미터가 유효한 JSON이 아닙니다',
  /** Label for "Params" (parameters) editor/input */
  'params.label': '파라미터',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': '열',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': '줄',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    '이 API 버전은 복합 perspective를 지원하지 않습니다. {{apiVersion}} 이상을 사용하세요.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    '이 API 버전은 콘텐츠 variant를 지원하지 않습니다. 실험적 API 버전({{apiVersion}})을 사용하세요.',
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
  /** Save personal copy success label */
  'save-query.personal-copy-success': '개인 사본이 저장되었습니다',
  /** Warning displayed before sharing a query */
  'save-query.share-warning': '공유된 쿼리는 dataset의 문서로 저장되며 문서 할당량에 포함됩니다.',
  /** Save shared query success label */
  'save-query.shared-success': '공유 쿼리가 저장되었습니다',
  /** Save success label */
  'save-query.success': '쿼리 저장됨',
  /** Save unshared query success label */
  'save-query.unshared-success': '쿼리가 개인으로 이동되었습니다',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API 버전',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    '변형(variant)이 선택된 경우, API 버전은 vX여야 합니다.',
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
  'settings.perspectives.scheduled-drafts': '예약된 초안',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': '관점들',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': '요청당 AI 크레딧 1개를 사용합니다',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '이번 달 남은 AI 크레딧: {{quota}} 중 {{balance}}.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '이번 달 {{used}} AI 크레딧 사용, 포함된 {{quota}}보다 {{deficit}} 더 사용함.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    '조직에서 이번 달 {{quota}} AI 크레딧 중 {{used}}를 사용하여, 다음 달이 되거나 지출 한도가 상향될 때까지 Sanity Agent Actions가 일시 중지됩니다.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    '조직이 AI 크레딧 지출 한도에 도달하여, 다음 달이 되거나 한도가 상향될 때까지 Sanity Agent Actions가 일시 중지됩니다.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'AI 크레딧 작동 방식',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'AI 크레딧 관리',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI 크레딧 소진',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI 사용량',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '이번 달 {{used}} AI 크레딧 사용됨.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': '완료되지 않은 API 버전',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    '쿼리는 API 버전 {{version}}에 대해 실행됩니다. 옵션에서 변경하려면 선택하세요.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    '쿼리는 API 버전 {{version}}의 API CDN에 대해 실행됩니다. 옵션에서 변경하려면 선택하세요.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    '쿼리는 API CDN이 아닌 API 버전 {{version}}에 대해 실행됩니다. API CDN은 {{perspective}} 관점을 지원하지 않습니다. 옵션에서 변경하려면 선택하세요.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    '옵션의 API 버전이 완료되지 않아, 완료될 때까지 아무것도 가져올 수 없습니다.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    '쿼리는 선택한 변형에 필요한 API 버전 {{version}}에 대해 실행됩니다.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': '이후',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': '이전',
  /** What the Delta panel does */
  'vista.delta.description':
    'GROQ 기반 웹훅, 리스너 및 Sanity Functions처럼 델타 모드로 쿼리를 실행합니다: before()와 after()는 변경 전후의 문서이며, @는 변경 후의 문서이고, delta::changedAny()는 이들을 비교합니다. groq-js를 사용하여 브라우저에서 실행됩니다. 빈 쪽은 문서가 없음을 의미합니다: 변경이 문서를 생성하거나 삭제합니다.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': '문서 ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': '문서의 기록을 불러오거나, Before와 After에 문서를 작성하세요.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': '쿼리를 델타 모드로 실행할 수 없습니다: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'After가 유효한 JSON이 아닙니다: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before가 유효한 JSON이 아닙니다: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': '기록 불러오기',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': '기록을 불러올 수 없습니다: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    '일치함: 이 필터를 가진 webhook 또는 function이 이 변경 사항에 대해 실행됩니다.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    '일치하지 않음: 이 필터를 가진 webhook 또는 function이 이 변경 사항에 대해 실행되지 않습니다.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'delta 모드에서 실행하려면 쿼리와 해당 매개변수를 수정하세요.',
  /** Heading of the delta result */
  'vista.delta.result': '결과',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': '없음: 이 변경 사항은 문서를 삭제합니다',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': '없음: 이 변경 사항은 문서를 생성합니다',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': '패널 닫기',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    "쿼리 플랜은 Content Lake가 쿼리를 실행하는 방식입니다: 읽는 동안 무엇을 읽고, 필터링하고, 정렬하는지, 그리고 이후 단계로 남겨지는 것은 무엇인지를 보여줍니다. '이것을 설명해줘'는 Sanity Agent Actions를 사용해 쿼리와 그 플랜을 쉬운 말로 설명해주며, AI 크레딧 1개를 사용합니다.",
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': '설명할 쿼리를 작성하세요.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': '이것을 설명해줘',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': '쿼리를 설명할 수 없습니다: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': '문서를 읽지 않고 인덱스에서 개수를 계산했습니다.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    '이 서브쿼리는 문서마다 한 번씩이 아니라, 모든 문서에 대해 한 번의 일괄 조회로 실행됩니다.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    '필터의 일부는 읽은 후 메모리에서 실행됩니다: 인덱스를 통과한 모든 문서는 먼저 읽혀야 하며, 이는 대규모 데이터셋에서 느려질 수 있습니다. 조인(->)과 필터 내 함수는 인덱스를 사용할 수 없습니다.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': '인덱스는 문서를 읽는 동안 정렬하고 제한합니다.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    '슬라이스는 읽는 동안의 제한이 아니라, 읽은 후 메모리에서 수행됩니다.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    '정렬은 모든 일치 항목을 읽은 후 메모리에서 이루어집니다. 인덱스가 정렬할 수 있는 속성으로 정렬하세요.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': '고성능 GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': '주목할 점',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': '쿼리 플랜 보기',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': '쿼리 플랜을 가져올 수 없습니다: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': '쿼리 계획',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': '스니펫이 클립보드에 복사되었습니다',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': '스니펫 복사',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    '다음 스니펫 중 하나를 사용하여 스튜디오 외부에서 이 쿼리를 실행하세요.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': '쿼리 내보내기',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    '비공개 데이터셋에는 API 토큰이 필요합니다. 공개 데이터셋은 Authorization 헤더를 생략할 수 있습니다.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': '코드가 클립보드에 복사되었습니다',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': '코드 복사',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty': '타입을 유추할 결과가 있도록 먼저 쿼리를 가져오세요.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': '스키마 평가 실패: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    '쿼리를 워크스페이스 스키마에 대해 평가할 수 없었기 때문에 가져온 결과에서 유추되었습니다.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'sanity typegen과 동일한 방식으로 워크스페이스 스키마에서 유추되었습니다.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    '표시된 결과는 다른 쿼리 또는 매개변수에 대해 가져온 것입니다. 타입을 유추할 결과가 있도록 먼저 현재 쿼리를 가져오세요.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'TypeScript 내보내기',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Zod 내보내기',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': '쿼리에 추가',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': '이 쿼리에서',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': '선언하기',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'API 버전 {{version}} 이상이 필요합니다',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': '이 쿼리에서',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': '라이브러리에서',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': '사용자 지정 함수, {{line}}번째 줄에서 선언됨',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    '델타 모드에서만 작동하며, 웹훅과 Sanity 함수가 필터를 실행하는 방식입니다',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': '함수로 추출',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': '함수 라이브러리에 있지만 이 쿼리에서는 선언되지 않음',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ 함수 참조 문서',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    '프로젝트의 모든 데이터셋에 대해 이 브라우저에 보관됩니다. 자동 완성에서 이러한 함수를 제공하며, 린트는 쿼리가 호출하는 함수를 선언하도록 제안합니다.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty': '쿼리가 선언한 함수를 저장하여 다른 쿼리에서 사용하세요.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': '라이브러리',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    '쿼리 상단에서 사용자 지정 함수를 선언하거나, author->{name}과 같은 프로젝션에 커서를 놓고 편집기 위의 추출 버튼({{shortcut}})을 누르세요.',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': '이 쿼리에서',
  /** Removes a function from the library */
  'vista.functions.remove': '라이브러리에서 제거',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': '쿼리에서 교체',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': '편집기에서 {{name}} 표시',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': '라이브러리에 저장',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': '저장됨',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': '라이브러리 업데이트',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': '쿼리 생성',
  /** Closes the generate query bar */
  'vista.generate.close': '닫기',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions가 설명과 문서 타입을 바탕으로 GROQ를 작성하며, Content Lake가 각 시도를 확인합니다. 시도마다 AI 크레딧 1개가 사용됩니다. 이 탭의 쿼리를 대체하고 실행하며, 편집기에서 실행 취소하면 이전 쿼리로 돌아갑니다.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': '쿼리를 생성할 수 없습니다',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': '쿼리가 가져와야 할 내용은 무엇인가요?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': '마지막 시도 열기',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': '성, 그 다음 이름 순으로 정렬된 최근 저자 10명',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': '쿼리 작성 중…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': '쿼리 수정 중 (시도 {{attempt}}/{{max}})…',
  /** Button generating the query */
  'vista.generate.submit': '생성',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN 캐시 적중',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': '변경됨',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': '변경 사항',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': '변경 사항을 표시할 수 없습니다.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': '다시 시도',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': '{{time}}의 가져오기와 비교됨',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': '매개변수',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': '쿼리',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': '서식만 변경됨',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': '결과',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': '요청 URL',
  /** Empty state of the history panel */
  'vista.history.empty': '아직 가져온 항목이 없습니다',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': '실패',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': '숨기기',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': '{{fields}} 숨김',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': '숨겨진 필드만 변경됨',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': '생성된 쿼리',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': '링크 열림',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': '실시간 업데이트',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': '실시간 연결 재시작됨',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': '실시간 가져오기 시작됨',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': '쿼리 로드됨',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': '가져오기 버튼',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': '변형 적용됨',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': '옵션 변경됨',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': '붙여넣은 URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': '자동 다시 가져오기 재개됨',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': '키보드 단축키',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': '동일한 결과',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': '표시하기',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': '{{fields}} 표시 중, 기본적으로 숨겨져 있음',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': '비교하기에 너무 큼',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': '변경 사항 없음',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    '린트 결과가 없습니다. GROQ 린터가 쿼리에서 발견한 문제가 입력하는 동안 여기에 표시됩니다. 항목을 선택하면 편집기에서 해당 위치가 선택됩니다.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': '{{line}}번째 줄, {{column}}번째 열',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': '오류',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': '힌트',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': '정보',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': '경고',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': '{{suggestion}} 사용',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': '실시간',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': '실시간 가져오기',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': '가져온 후, 결과의 문서가 변경될 때마다 다시 가져오기',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    '결과의 문서가 변경될 때 가져오기를 중지합니다. 가져오기는 now()처럼 문서 변경과 관련 없는 결과에 대해서는 여전히 요청 시 가져옵니다',
  /** Error shown when the live connection breaks */
  'vista.live.error': '실시간 업데이트 연결이 끊어졌습니다: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': '실시간 중지',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': '뮤테이션 추가',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': '문서 생성',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': '문서 삭제',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': '결과에 있는 문서 삭제',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': '문서 패치',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': '결과에 있는 문서 패치',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': '{{dataset}}에 적용',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': '뮤테이션이 적용되지 않았습니다',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    '적용은 드라이 런이 보여준 내용을 전송합니다. 먼저 드라이 런을 실행하세요.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': '_key가 없는 배열 항목에 _key 추가',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    '스튜디오에서 배열 항목을 편집하려면 모든 항목에 _key가 있어야 합니다.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': '변경 사항',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': '변경 사항을 표시할 수 없습니다.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': '다시 시도',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Mutations API가 받아들이는 형식으로 뮤테이션을 목록으로 작성하세요: create, createOrReplace, createIfNotExists, delete, patch를 ID 또는 GROQ 쿼리로 지정할 수 있습니다. 드라이 런은 아무것도 변경하지 않고 각 문서에 어떤 영향을 미칠지 보여줍니다. 적용을 누르면 계정 권한으로 하나의 트랜잭션으로 데이터셋에 기록됩니다.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': '뮤테이션 {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': '뮤테이션 생성',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions는 작성한 설명, 결과의 문서 및 그 타입을 바탕으로 뮤테이션을 작성하며, 드라이 런이 각 시도를 검사합니다. 시도마다 AI 크레딧 1개가 사용됩니다. 생성된 뮤테이션은 여기 있는 뮤테이션을 대체하며, 실행 취소하면 이전 내용으로 되돌릴 수 있습니다. 적용하기 전까지는 아무것도 기록되지 않습니다.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': '뮤테이션을 생성할 수 없습니다',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': '뮤테이션이 무엇을 해야 하나요?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': '결과의 문서 제목을 foobar로 변경',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': '뮤테이션 작성 중…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': '뮤테이션 수정 중 (시도 {{attempt}}/{{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': '변경 사항은 기록(History)과 마찬가지로 {{fields}}을(를) 제외합니다.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': '뮤테이션이 유효한 JSON이 아닙니다: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    '뮤테이션 {{index}}은(는) create, createOrReplace, createIfNotExists, delete, patch 중 정확히 하나만 지정해야 합니다.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': '뮤테이션',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': '뮤테이션이 어떤 문서에도 영향을 미치지 않습니다.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    '뮤테이션 목록, 단일 뮤테이션 또는 뮤테이션 목록을 포함한 요청 본문을 작성하세요.',
  /** A document the mutations create */
  'vista.mutate.operation.create': '생성',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': '삭제',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': '변경 없음',
  /** A document the mutations change */
  'vista.mutate.operation.update': '업데이트',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': '드라이 런',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': '드라이 런이 실패했습니다',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': '드라이 런',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    '이 드라이 런 이후 뮤테이션, 데이터셋 또는 옵션이 변경되었습니다. 다시 실행하여 적용하세요.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': '변경됨: {{changed}} · 변경 안 됨: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': '캐시',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': '적중',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN이 사용자와 가까운 위치에서 캐시된 응답으로 답변했습니다. 쿼리는 API에 도달하지 않았습니다.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': '이 세션에서 확인한 바로는 미적중',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': '없음, API는 모든 요청에 최신 콘텐츠로 응답합니다',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    '쿼리를 가져와서 어떤 엔드포인트가 응답했는지, 캐시에서 온 것인지, 어디에서 실행되었는지 확인하세요.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': '응답자',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': '쿼리 실행 위치',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': '보고되지 않음',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': '시간',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '왕복 {{e2e}}ms, 서버에서 {{server}}ms',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': '추적 ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint': '옵션에서 API CDN 사용을 켜서 쿼리를 CDN을 통해 전송하세요.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': '나',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': '워크스페이스를 따릅니다',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': '데이터셋 고정',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': '고정됨; 워크스페이스가 다른 데이터셋을 사용할 수 있습니다',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': '워크스페이스 데이터셋 사용',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': '콘텐츠 소스 맵 포함',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    '응답에 resultSourceMap을 추가하며, 콘텐츠 소스 맵 탭에 표시됩니다.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': '전역 ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'API CDN 사용',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    '이 스튜디오는 쿠키로 로그인하며, API CDN은 이를 전혀 수신하지 않습니다: 익명 방문자에게 응답하는 것처럼, 공개 데이터셋에 표시되는 내용으로 응답합니다.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN은 드래프트나 릴리스를 제공하지 않으므로, {{perspective}} 퍼스펙티브를 사용하는 쿼리는 API로 전송됩니다. published 또는 raw를 사용하면 CDN을 사용합니다.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': '쿼리가 CDN이 아닌 API로 전송됩니다',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    '@sanity/client의 useCdn: true처럼, published 및 raw 퍼스펙티브에서 쿼리를 API CDN으로 전송합니다: 드래프트와 릴리스는 항상 API로 전송됩니다. 응답은 최대 1분간 캐시되며, 네트워크 패널에서 캐시에서 가져온 응답인지 확인할 수 있습니다.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'published 퍼스펙티브 사용',
  /** Label of the variant field */
  'vista.options.variant-label': '변형',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': '전역 ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': '전역 (선택 안 됨)',
  /** Variant option sending no variant */
  'vista.options.variant.none': '없음',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': '패널 접기',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': '패널 펼치기',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Explain',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Functions',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': '기록',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': '네트워크',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': '옵션',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': '응답',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': '콘텐츠 소스 맵',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': '항목 추가',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': '모든 JSON 값; 다른 텍스트는 문자열로 전송됩니다',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    '쿼리가 매개변수를 사용하지 않습니다. 쿼리에 있는 각 $name은 여기에 필드로 표시됩니다.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    '매개변수가 유효한 JSON이 아닙니다. JSON 보기에서 수정한 후 여기서 편집하세요.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': '참 또는 거짓이 아닙니다; {{value}}(으)로 전송됩니다',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    '이 워크스페이스의 문서 유형이 아닙니다; 그래도 전송됩니다',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': '슬라이스에 필요한 정수가 아닙니다',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': '목록이 아닙니다; {{value}}(으)로 전송됩니다',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': '숫자가 아닙니다; 텍스트로 전송됩니다',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': '알려진 값 중 하나가 아닙니다; 그래도 전송됩니다',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': '텍스트가 아닙니다; {{value}}(으)로 전송됩니다',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, 항목 {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': '항목',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': '설정되지 않음: 값이 있을 때까지 쿼리가 실패합니다',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    '유형은 쿼리에서만 가져옵니다: 워크스페이스 스키마를 읽을 수 없습니다.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': '설정되지 않음',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': '지금',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': '제거',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': '항목 제거',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error': '쿼리가 파싱되지 않아 매개변수가 유형 없이 나열됩니다.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': '모든 JSON 값',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': '참 또는 거짓',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': '날짜 및 시간 (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': '문서 ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': '문서 유형',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': '정수',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': '목록, 각 {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': '숫자',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': '텍스트',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': '쿼리에서 사용되지 않음',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': '사용 위치',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': '콘텐츠 크기에 맞춤, {{height}} 픽셀',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    '매개변수 크기 조절: 드래그하거나 화살표 키를 사용하세요. 더블 클릭하거나 Enter 키를 눌러 콘텐츠에 다시 맞춥니다',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': '양식',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': '매개변수 편집 방식',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': '붙여넣은 URL에서 쿼리를 불러왔습니다',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    '붙여넣은 URL이 "{{variant}}" 변형을 사용했습니다. 이 변형으로 쿼리를 실행하려면 내비게이션 바에서 선택하세요.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    '붙여넣은 URL의 데이터셋 "{{dataset}}"을(를) 여기서 사용할 수 없어 현재 데이터셋을 유지합니다.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    '붙여넣은 URL의 퍼스펙티브는 여기서 지원되지 않아 현재 퍼스펙티브를 유지합니다.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    '붙여넣은 URL이 "{{variant}}" 변형을 사용했습니다. 이 워크스페이스는 변형이 꺼져 있어 변형 없이 쿼리가 실행됩니다.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': '쿼리 작업',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported': '자동 재요청에는 API 버전 v2021-03-25 이상이 필요합니다.',
  /** Toast shown after the query was copied */
  'vista.query.copied': '쿼리가 클립보드에 복사되었습니다',
  /** Menu item copying the query text */
  'vista.query.copy': '쿼리 복사',
  /** Menu item opening the export query dialog */
  'vista.query.export': '쿼리 내보내기…',
  /** Menu item reformatting the query */
  'vista.query.prettify': '쿼리 정리',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': '쿼리를 정리할 수 없습니다',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': '쿼리 저장',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': '중지',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': '가져오기 중지',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    '재설계된 Vision 도구를 사용 중입니다. 클래식 버전으로 전환해도 다음에 다시 시도할 때를 위해 이 브라우저에 탭과 설정이 유지됩니다.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': '재설계된 Vision (베타)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': '클래식 Vision으로 전환',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': '지금 사용해 보기',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    '쿼리 탭, 실시간 재요청, 응답 세부 정보 및 내보내기 기능을 제공합니다. 언제든지 다시 전환할 수 있습니다.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': '나중에',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': '재설계된 Vision 사용해 보기',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': '재설계 사용해 보기',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    '베타 버전인 재설계된 Vision으로 전환합니다. 사이드바에서 언제든지 다시 전환할 수 있습니다.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': '아직 가져온 내용이 없습니다',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': '페이로드 크기',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': '동기화 태그',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': '응답에 동기화 태그가 없습니다',
  /** Accessible label for the result actions menu */
  'vista.result.actions': '결과 작업',
  /** Toast shown after the result was copied */
  'vista.result.copied': '결과가 클립보드에 복사되었습니다',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} 복사됨',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': '결과 복사',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': '값 복사',
  /** Empty state of the result view */
  'vista.result.empty': '쿼리를 실행하면 결과가 여기에 표시됩니다',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'CSV로 내보내기',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'JSON으로 내보내기',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'TypeScript로 내보내기…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Zod 내보내기…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': '포함된 항목 숨기기',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': '화면에 맞추기',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    '결과 그래프: 드래그하여 이동, 스크롤하여 확대/축소; 포커스 상태에서는 화살표 키로 이동, +와 -로 확대/축소, 0으로 맞춤',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': '트리 및 JSON 보기에는 전체가 표시됩니다.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': '처음 {{nodes}}개의 객체와 배열만 그려집니다.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': '{{nodes}}에 대해 처음 {{rows}}개의 항목만 나열됩니다.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}}개 항목)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': '결과',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': '확대',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': '축소',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': '그래프',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': '결과 보기',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': '트리',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': '저장된 쿼리가 아직 없습니다. + 버튼으로 현재 쿼리를 저장하세요.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': '검색과 일치하는 쿼리가 없습니다',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': '현재 탭에 불러오기',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': '새 탭에서 열기',
  /** Menu item renaming a saved query */
  'vista.saved.rename': '이름 바꾸기',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': '현재 쿼리 저장',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    '이 저장된 쿼리는 "{{variant}}" variant를 사용했습니다. 이 variant로 쿼리를 실행하려면 내비게이션 바에서 선택하세요.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    '이 저장된 쿼리의 데이터셋 "{{dataset}}"을(를) 여기서 사용할 수 없어 현재 데이터셋을 유지합니다.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    '이 저장된 쿼리는 "{{variant}}" variant를 사용했지만, 이 워크스페이스는 variant가 비활성화되어 있어 variant 없이 쿼리가 실행됩니다.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': '저장소 지우기',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': '네, 저장소를 지웁니다',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    '개인 저장 쿼리와 함수 라이브러리를 삭제하고, 열려 있는 탭과 이 브라우저의 기본값을 재설정하며, 클래식 Vision 도구로 돌아갑니다. 공유된 쿼리는 유지됩니다.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': '저장된 쿼리를 지울 수 없습니다',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': '저장소가 지워졌습니다',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description': '새 탭의 기본값입니다. 열려 있는 탭은 자체 옵션을 유지합니다.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    '한 줄에 하나의 필드 경로를 입력하세요. 경로는 결과의 모든 깊이에서 일치하므로, _rev는 그 안의 모든 문서의 리비전을 숨깁니다. 각 diff는 여전히 이를 표시할 수 있습니다.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': '기본값으로 재설정',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'History diff에서 숨겨진 필드',
  /** Title of the settings dialog */
  'vista.settings.title': '설정',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    '아직 공유된 쿼리가 없습니다. 저장된 쿼리를 공유하면 이 데이터세트를 사용하는 모든 사람이 사용할 수 있습니다.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': '대화 상자와 메뉴 닫기',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': '함수 이름 자동 완성',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': '쿼리 복사',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': '커서 위치의 프로젝션을 함수로 추출',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': '쿼리 가져오기',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': '다음 린트 결과로 이동',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': '쿼리 서식 정리',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': '키보드 단축키',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': '사이드바 접기',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': '사이드바 펼치기',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista 사이드바',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': '저장된 쿼리',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': '설정',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': '공유된 쿼리',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': '키보드 단축키',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    '응답에 콘텐츠 소스 맵이 없습니다. 옵션에서 "콘텐츠 소스 맵 포함"을 켜고 다시 가져오세요.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    '응답 세부 정보 패널 크기 조정: 드래그하거나 화살표 키를 사용하세요; Home과 End는 경계로 이동하고, Enter는 초기화합니다',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    '요청 및 응답 창 크기 조정: 드래그하거나 화살표 키를 사용하세요; Home과 End는 경계로 이동하고, Enter는 초기화합니다',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': '탭 닫기',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': '쿼리 탭',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': '새 탭',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': '탭 제목',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': '제목 없는 쿼리',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Vision에서 GROQ 쿼리 검사',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Vision에서 스키마 설명',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Vision에서 GROQ 쿼리 설명',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': '열려 있는 Vision 탭 읽기',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Vision에서 GROQ 쿼리 열기',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Vision에서 변경 사항 미리보기',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Vision에서 GROQ 쿼리 실행',
})
