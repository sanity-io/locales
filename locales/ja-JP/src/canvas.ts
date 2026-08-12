import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'キャンバスで編集',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'キャンバスへのリンク',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'ドキュメントの初期値が解決されるまでお待ちください',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'このドキュメントをキャンバスにリンクする権限がありません',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'ダッシュボードでこのドキュメントを開いて、キャンバスにリンクしてください',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'バージョンドキュメントはまだキャンバスではサポートされていません',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'キャンバスのリンクを解除',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'キャンバスで編集',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'このドキュメントはキャンバスにリンクされています',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'キャンセル',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': '承認して続行',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'このドキュメントはキャンバスと互換性を持たせるために更新する必要があります。\nこのプロセスの一環として、既存のコンテンツが編集されたり削除されたりすることがあります。',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'いつでもキャンバスのリンクを解除できます',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'ドキュメントの変更を確認',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'キャンバスへのリンクに失敗しました',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'リンクを完了するためにキャンバスに移動しています...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'キャンバスへのリンク',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': '検証中',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'キャンセル',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'リンクを解除すると、ここで編集可能になり、キャンバスでの将来の編集がこのドキュメントに自動的にマッピングされることはありません。',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'キャンバスのリンク解除に失敗しました',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'キャンバスのリンクを解除しました',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'キャンバスのリンクを解除',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': '今すぐリンクを解除',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'キャンバスから<strong>「{{documentTitle}}」</strong>のリンクを解除しています。',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Canvasに移動するための権限がありません',
})
