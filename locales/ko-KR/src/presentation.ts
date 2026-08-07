import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': '연결됨',
  /** The status of the channel connection */
  'channel.status_connecting': '연결 중',
  /** The status of the channel connection */
  'channel.status_disconnected': '연결 끊김',
  /** The status of the channel connection */
  'channel.status_reconnecting': '재연결 중',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': '이 페이지의 문서',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': '문서 목록을 렌더링할 수 없습니다',
  /** The label for the ordering that lists documents in the order they appear on the page */
  'document-list-pane.ordering.by-appearance': undefined, // 'By appearance'
  /** The label for the ordering that lists documents by when they were last edited */
  'document-list-pane.ordering.last-edited': undefined, // 'Last edited'

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': '문서 편집기를 렌더링할 수 없습니다',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': '그래도 계속하기',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': '다시 시도',
  /** The title on the card shown after a connection has failed */
  'error-card.title': '오류가 발생했습니다',

  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': '{{count}}개 페이지에서 사용 중',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': '어떤 페이지에서도 사용되지 않음',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': '위치 확인 중...',

  /** The label shown on a main document in the list pane */
  'main-document.label': '기본 문서',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': '<Code>{{path}}</Code>에 대한 기본 문서가 없습니다',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': '구조',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': '내비게이터',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': '오류 메시지',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    '미리보기 iframe이 <Code>{{targetOrigin}}</Code>을(를) 로드하도록 구성되어 있지만, 보고된 출처는 <Code>{{reportedOrigin}}</Code>입니다. Presentation Tool은 보안상의 이유로 알 수 없는 출처에 연결할 수 없습니다. Visual Editing 및 Loader에 대한 연결을 허용하려면 <Code>presentationTool.allowOrigins</Code> 구성을 업데이트하세요.',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': '미리보기 URL 출처 불일치',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': '미리보기에 연결할 수 없습니다',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': '그래도 계속하기',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Loader 연결 상태',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': '내비게이터 토글',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': '내비게이터 토글',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': '오버레이 연결 상태',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': '편집',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': '편집 오버레이 비활성화',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': '편집 오버레이 활성화',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': '게시된 콘텐츠로 이 페이지 보기',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': '미리보기 새로 고침',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': '미리보기 새로 고침',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': '이 미리보기 공유',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': '연결 중.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': '로딩 중.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': '새로 고침 중.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': '새로 고침 중.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout': '연결할 수 없습니다. 자세한 내용은 브라우저 콘솔을 확인하세요.',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': '뷰포트 크기 토글',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': '전체 뷰포트로 전환',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': '좁은 뷰포트로 전환',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL은 {{origin}}(으)로 시작해야 합니다',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL은 Studio {{basePath}}와 동일한 기본 경로를 가질 수 없습니다',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    '라우터가 <Code>{{previewSearchParam}}</Code>(으)로 이동하려 하지만, 출처 <Code>{{blockedOrigin}}</Code>은(는) 허용되지 않습니다. 허용하려면 <Code>presentationTool.allowOrigins</Code> 설정을 업데이트하세요.',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': '차단된 미리보기 URL',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'URL Preview Secrets를 생성할 권한이 없습니다. 이로 인해 미리보기 로딩이 실패할 수 있습니다.',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': '미리보기 링크 복사',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': '미리보기를 공유할 권한이 없습니다.',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': '이 미리보기의 공유를 토글할 권한이 없습니다',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': 'QR 코드를 스캔하여 휴대폰에서 미리보기를 여세요.',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR 코드가 여기에 표시됩니다',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'URL을 인코딩한 QR 코드: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': '이 미리보기 공유',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': '링크가 있는 모든 사람과',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': '공유 비활성화',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': '공유 활성화',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'URL을 클립보드에 복사하는 중…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': '복사 실패',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'URL이 클립보드에 복사되었습니다',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': '클립보드가 지원되지 않습니다',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': '미리보기 열기',
})
