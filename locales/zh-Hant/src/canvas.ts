import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': '在 Canvas 中編輯',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': '連結到 Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved': '請等待文檔初始值解析完成',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions': '您沒有權限將此文檔連結到 Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard': '在儀表板中打開此文檔以連結到 Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': '版本文檔尚不支持在 Canvas 中',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': '取消連結 Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': '在 Canvas 中編輯',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': '此文檔已連結到 Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': '取消',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': '接受並繼續',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    '此文檔需要更新以與 Canvas 兼容。\n 現有內容可能會在此過程中被編輯或刪除。',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': '您可以隨時取消連結 Canvas',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': '確認文檔更改',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': '連結到 Canvas 失敗',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': '正在帶您前往 Canvas 完成連結...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': '連結到 Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': '正在驗證',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': '取消',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    '一旦取消連結，它將可以在這裡編輯，並且未來在 Canvas 中的編輯將不再自動映射到此文檔。',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': '取消連結 Canvas 失敗',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': '已取消連結 Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': '取消連結 Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': '現在就取消連結',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    '您正在取消連結 <strong>“{{documentTitle}}”</strong> 與 Canvas。',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': '缺少導航至Canvas的權限',
})
