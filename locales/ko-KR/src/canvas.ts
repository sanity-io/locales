import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Canvas에서 편집',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Canvas에 링크',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    '문서 초기 값이 해결될 때까지 기다려 주세요',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions': '이 문서를 Canvas에 링크할 권한이 없습니다',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    '대시보드에서 이 문서를 열어 Canvas에 링크하세요',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': '버전 문서는 아직 Canvas에서 지원되지 않습니다',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Canvas의 링크 해제',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Canvas에서 편집',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': '이 문서는 Canvas에 연결되어 있습니다',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': '취소',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': '수락하고 계속',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    '이 문서는 Canvas와 호환되도록 업데이트해야 합니다.\n이 과정에서 기존 콘텐츠가 편집되거나 제거될 수 있습니다.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    '언제든지 Canvas의 링크를 해제할 수 있습니다',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': '문서 변경 사항 확인',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Canvas에 링크하는 데 실패했습니다',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': '링크를 완료하기 위해 Canvas로 이동 중...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Canvas에 링크',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': '검증 중',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': '취소',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    '링크 해제되면 여기에서 편집할 수 있고 Canvas에서의 향후 편집이 이 문서에 자동으로 매핑되지 않습니다.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Canvas의 링크 해제에 실패했습니다',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Canvas의 링크가 해제되었습니다',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Canvas의 링크 해제',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': '지금 링크 해제',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Canvas에서 <strong>“{{documentTitle}}”</strong>의 링크를 해제하고 있습니다.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Canvas로 이동하는 데 필요한 권한이 없습니다',
})
