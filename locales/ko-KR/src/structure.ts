import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': '문서 URL 복사',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': '작업 준비되지 않음',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': '이 문서는 아직 존재하지 않거나 이미 삭제되었습니다',
  /** Label for the "Delete" document action button */
  'action.delete.label': '삭제',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': '삭제 중…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Canvas에 연결된 문서에 대해 일부 문서 작업이 비활성화되었습니다',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    '마지막으로 발행된 이후의 모든 변경 사항을 버리시겠습니까?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': '이 문서에는 발행되지 않은 변경 사항이 없습니다',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': '이 문서는 발행되지 않았습니다',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': '작업 준비가 되지 않았습니다',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': '변경 사항 버리기',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': '작업 준비가 되지 않았습니다',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    '이 문서는 아직 존재하지 않아 복제할 것이 없습니다',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': '복제',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': '복제 중…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': '이미 게시됨',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': '{{timeSincePublished}} 전에 게시됨',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': '작업 준비되지 않음',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': '게시',
  /** Label for the "Publish" document action */
  'action.publish.label': '게시',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': '게시',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    '이 문서 유형에 라이브 편집이 활성화되어 있어 게시할 수 없습니다',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    '이 콘텐츠 유형에 대해 라이브 편집이 활성화되어 있으며 변경 사항을 만들 때 자동으로 게시됩니다',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': '게시되지 않은 변경 사항 없음',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': '게시됨',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': '게시 중…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    '게시하기 전에 수정해야 할 유효성 검사 오류가 있습니다',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': '게시하기 전에 작업이 완료될 때까지 기다리는 중',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': '이 문서를 복원하시겠습니까?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': '초기 버전으로 복원할 수 없습니다',
  /** Label for the "Restore" document action */
  'action.restore.label': '복원',
  /** Default tooltip for the action */
  'action.restore.tooltip': '이 버전으로 복원',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': '이 문서는 발행되지 않았습니다',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': '작업 준비가 되지 않았습니다',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': '발행 취소',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    '이 문서는 라이브 편집이 활성화되어 있어서 비공개 처리할 수 없습니다',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    '아카이브된 <VersionBadge>릴리스</VersionBadge>의 일부로서 읽기 전용 문서를 보고 있습니다. 편집할 수 없습니다',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    '초안 문서를 생성할 수 없습니다.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    '게시된 문서를 생성할 수 없습니다.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination': '이 문서의 목적지를 선택하세요:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    '<VersionBadge>{{title}}</VersionBadge> 릴리스가 활성화되어 있지 않습니다.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': '가장 최근 버전 복원',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': '이 문서는 삭제되었습니다.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': '이 문서 유형은 더 이상 사용되지 않습니다.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': '초안 버리기',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': '편집을 계속하려면 게시',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    '타입 <strong>{{schemaType}}</strong>에 <code>liveEdit</code>가 활성화되어 있지만, 이 문서의 초안 버전이 존재합니다. 라이브 편집을 계속하려면 초안을 게시하거나 버려야 합니다.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': '초안 비교',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': '초안 버리기',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': '초안 게시',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    '워크스페이스에는 초안이 활성화되어 있지 않지만, 이 문서의 초안 버전이 존재합니다.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    '귀하의 역할 <Roles/>은 이 문서를 생성할 권한이 없습니다.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    '귀하의 역할 <Roles/>은 이 문서를 업데이트할 권한이 없습니다.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': '편집 요청이 전송되었습니다',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': '편집 요청하기',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    '<VersionBadge>릴리스</VersionBadge>의 일부로서 발행된 읽기 전용 문서를 보고 있습니다. 편집할 수 없습니다',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': '참조 다시 불러오기',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    '이 참조는 당신이 열었을 때부터 변경되었습니다.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': '참조 닫기',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    '이 참조는 당신이 열었을 때부터 제거되었습니다.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': '릴리스에 추가',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': '릴리스를 열어 편집하기',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    '릴리스에 문서를 추가하는 동안 오류가 발생했습니다: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': '릴리스에 문서 추가 오류',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': '문서는 오직',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': '릴리스에만 존재합니다',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    '이 문서는 <VersionBadge/> 릴리스의 일부이며 {{count}}개의 릴리스가 더 있습니다',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    '이 문서는 <VersionBadge/> 릴리스의 일부입니다',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': '<Label>{{title}}</Label> 릴리스에 포함되지 않았습니다.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    '릴리스에 문서가 추가될 때까지 잠시만 기다려 주십시오. 몇 초 이상 걸리지 않을 것입니다.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': '릴리스에 문서 추가 중…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    '선택한 문서 리비전을 찾을 수 없습니다. 기록 목록에서 다른 항목을 선택해 주세요.',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    '이 문서는 <VersionBadge>{{title}}</VersionBadge> 릴리스의 일부로 발행 취소될 예정입니다',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    '현재 <strong>게시된</strong> 버전을 표시합니다:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': '새로운 {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': '제목 없음',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': '문서 작업 열기',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': '문서 작업',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': '오른쪽으로 창 분할',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': '오른쪽으로 창 분할',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': '분할 창 닫기',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': '창 그룹 닫기',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Canvas에서 편집',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': '이 초안 문서는 Canvas에 연결되어 있습니다',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': '이 실시간 문서는 Canvas에 연결되어 있습니다',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': '이 버전 문서는 Canvas에 연결되어 있습니다',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': '더 알아보기',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas는 자유 형식의 편집기에서 작성을 하면서 자동으로 스튜디오로 구조화된 콘텐츠로 매핑되게 해주는 기능입니다 - 입력하는 대로.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': '아이디어 우선 작성',

  /** The description for the changes banner */
  'changes.banner.description':
    '이 문서의 <strong>{{perspective}}</strong> 버전에 대한 기록을 보여줍니다.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    '이 뷰는 이 문서의 특정 버전에서 발생한 변경 사항을 보여줍니다. 다른 버전을 선택하여 해당 변경 사항을 확인하세요',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': '에서',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': '역사',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': '변경 사항 검토',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': '까지',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam': '"{{input}}"는 지원되지 않는 문서 비교 모드입니다.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': '다음 문서 매개변수가 유효하지 않습니다.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': '문서 비교 불가',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': '이전 문서 매개변수가 유효하지 않습니다.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason': '비교할 이 문서의 다른 버전이 없습니다.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': '버전 비교',
  /** The string used to label draft documents */
  'compare-versions.status.draft': '초안',
  /** The string used to label published documents */
  'compare-versions.status.published': '게시됨',
  /** The title used when comparing versions of a document */
  'compare-versions.title': '버전 비교',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': '취소',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1개의 문서',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}}개의 문서',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': '데이터셋: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': '데이터셋: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': '사용할 수 없는 데이터셋',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': '사용할 수 없는 데이터셋들',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '다른 데이터셋에 있는 {{documentCount}}',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other':
    '{{count}}개의 데이터셋에 있는 {{documentCount}}',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': '클립보드에 ID 복사',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': '데이터셋',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': '문서 ID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed': '문서 ID 복사 실패',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': '프로젝트 ID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': '그래도 삭제하기',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': '그래도 발행 취소하기',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': '지금 삭제하기',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': '지금 발행 취소하기',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    '“<DocumentTitle/>”을(를) 정말로 삭제하시겠습니까?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    '“<DocumentTitle/>”의 발행을 정말로 취소하시겠습니까?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': '참조 문서를 로딩하는 동안 오류가 발생했습니다.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': '재시도',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': '오류',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': '문서를 삭제하시겠습니까?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': '문서 발행을 취소하시겠습니까?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': '참조 중인 문서를 검색하는 중…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '표시되지 않는 1개의 다른 참조',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '표시되지 않는 {{count}}개의 다른 참조들',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    '관련 데이터셋에 대한 액세스 토큰이 누락되어 이 참조들의 메타데이터를 표시할 수 없습니다.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': '미리보기를 사용할 수 없음',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    '이 문서를 삭제하면, 이 문서를 참조하는 다른 문서들은 더 이상 접근할 수 없게 됩니다.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    '이 문서의 발행을 취소하면, 이 문서를 참조하는 다른 문서들은 더 이상 접근할 수 없게 됩니다.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1개의 문서가 “<DocumentTitle/>”을(를) 참조하고 있습니다',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}}개의 문서가 “<DocumentTitle/>”을(를) 참조하고 있습니다',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    '다음 문서들이 “<DocumentTitle/>”을(를) 참조하고 있기 때문에 삭제가 불가능할 수 있습니다:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    '다음 문서들이 “<DocumentTitle/>”을(를) 참조하고 있기 때문에 발행 취소가 불가능할 수 있습니다:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': '취소',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': '확인',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': '콘텐츠',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': '오류: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': '제목 없음',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': '알 수 없는 스키마 유형: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': '닫기',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '<DocumentTitle/> 검사 중',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': '값 없음',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': '검사',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': '검색',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': '파싱됨',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': '원시 JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': '이 양식은 숨겨져 있습니다',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': '제목 없음',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': '문서를 불러오는 중…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    '문서가 동기화되는 동안 잠시만 기다려 주세요. 이는 보통 문서가 게시된 직후에 발생하며, 몇 초 이상 걸리지 않아야 합니다',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': '문서 동기화 중…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': '즐겨찾기에 추가',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': '즐겨찾기에서 제거',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    '문서 변경 사항을 불러올 수 없습니다. 아마도 귀하의 플랜의 기록 보존 정책 때문일 것입니다. 이것은 <strong>{{version}}</strong> 버전이 <strong>published</strong> 버전과 어떻게 비교되는지 보여줍니다.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': '발행된 것과 비교',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': '<VersionBadge>{{releaseTitle}}</VersionBadge> 문서 검사',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': '<VersionBadge>드래프트</VersionBadge> 문서 열기',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': '<VersionBadge>{{releaseTitle}}</VersionBadge> 릴리스 열기',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': '로딩 중…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': '액션',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': '레이아웃',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': '정렬',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': '간략한 보기',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': '상세 보기',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': '생성 순으로 정렬',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': '마지막 편집 순으로 정렬',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': '문서 유형 추가하는 방법 알아보기 →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle': '스키마에 최소한 하나의 문서 유형을 정의해 주세요.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': '문서 유형 없음',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': '뒤로',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': '메뉴 보기',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': '생성',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': '새 문서 만들기',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': '권한 부족',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '<RelativeTime/>에 편집됨',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': '발행되지 않은 편집 없음',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': '문서: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    '해당 타입에 대한 스키마를 찾을 수 없음 <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': '<RelativeTime/>에 발행됨',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': '발행된 편집 없음',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': '오류: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': '새로운 {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': '제목 없음',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': '재시도 중...',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': '오류: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': '오류: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': '인터넷 연결이 오프라인 상태인 것 같습니다.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': '목록 항목을 가져오지 못했습니다',
  'panes.document-list-pane.error.will-retry-automatically_other': '재시도 중... (#{{count}}).',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': '최대 {{limit}}개의 문서를 표시합니다',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': '이 유형의 문서가 없습니다',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': '결과가 없습니다',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': '일치하는 문서가 없습니다',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': '연결을 시도 중...',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': '목록 검색',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': '목록 검색',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': '세부 정보',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': '{{context}} 동안 오류가 발생했습니다',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    '이 문서를 삭제하려고 시도하는 중에 오류가 발생했습니다. 이는 다른 문서가 이 문서를 참조하고 있음을 의미합니다.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    '이 문서의 발행 취소를 시도하는 중에 오류가 발생했습니다. 이는 다른 문서가 이 문서를 참조하고 있음을 의미합니다.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    '문서에 {{context}}를 성공적으로 수행했습니다',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    '문서 URL이 클립보드에 복사되었습니다',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong>가 릴리스에 추가되었습니다',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': '문서가 성공적으로 삭제되었습니다',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    '마지막 발행 이후의 모든 변경 사항이 이제 폐기되었습니다. 폐기된 초안은 여전히 기록에서 복구할 수 있습니다',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    '문서가 성공적으로 복제되었습니다',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': '문서가 발행되었습니다',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong>이(가) 복원되었습니다',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    '문서의 발행이 취소되었습니다. 최신 발행 버전에서 초안이 생성되었습니다.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': '제목 없음',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': '문서를 불러오는 중…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    '문서 유형이 정의되지 않았으며, <Code>{{id}}</Code> 식별자를 가진 문서를 찾을 수 없습니다.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': '문서를 찾을 수 없습니다',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    '이 문서는 <Code>{{documentType}}</Code> 스키마 유형을 가지고 있으며, 이는 로컬 콘텐츠 스튜디오 스키마에 유형으로 정의되어 있지 않습니다.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    '알 수 없는 문서 유형: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    '이 문서는 존재하지 않으며, 이에 대한 스키마 유형이 지정되지 않았습니다.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': '로딩 중…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': '여전히 로딩 중…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    '구조 항목에 필요한 <Code>type</Code> 속성이 누락되었습니다.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': '알 수 없는 패널 유형',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    '알려지지 않은 엔티티인 <Code>{{type}}</Code> 유형의 구조 항목입니다.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': '미리보기 열기',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': '요청 보내기',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    '귀하의 요청은 프로젝트 관리자에게 전송될 것입니다. 원한다면, 메모를 추가할 수도 있습니다',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': '편집 접근 요청하기',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': '원한다면, 메모를 추가할 수 있습니다',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': '메모 추가...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text': '이 프로젝트에 대한 접근 요청이 거부되었습니다.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    '모든 프로젝트에 대한 역할 요청 한도에 도달했습니다. 더 많은 요청을 하기 전에 기다리거나 관리자에게 도움을 요청하세요.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': '저장됨',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': '저장 중...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': '마지막 발행 {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': '마지막 발행 <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    '마지막 업데이트 {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': '마지막 업데이트 <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': '변경 사항 검토',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': '저장됨!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': '저장 중...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': '변경 사항 저장됨',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': '변경 사항 검토',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': '문서 보기',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': '오류',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': '구조를 읽는 동안 오류가 발생했습니다',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': '다시 로드',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': '구조 경로',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': '작업 메뉴 열기',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': '작업',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': '접기',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': '펼치기',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip':
    '아이디 "{{releaseId}}"를 가진 릴리스를 찾을 수 없습니다',
})
