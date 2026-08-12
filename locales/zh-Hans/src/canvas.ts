import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': '在 Canvas 中编辑',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': '链接到 Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved': '请等待文档的初始值解析完成',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions': '您没有权限将此文档链接到 Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard': '在仪表板中打开此文档以链接到 Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': '版本文档尚不支持在 Canvas 中',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': '从 Canvas 中取消链接',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': '在 Canvas 中编辑',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': '此文档已链接到 Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': '取消',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': '接受并继续',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    '此文档需要更新以兼容 Canvas。\n作为此过程的一部分，现有内容可能会被编辑或删除。',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': '您可以随时取消与 Canvas 的链接',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': '确认文档更改',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': '链接到 Canvas 失败',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': '正在带您前往 Canvas 完成链接...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': '链接到 Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': '正在验证',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': '取消',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    '一旦取消链接，它将可以在这里编辑，并且将来在 Canvas 中的编辑将不再自动映射到此文档。',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': '从 Canvas 取消链接失败',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': '已从 Canvas 取消链接',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': '从 Canvas 取消链接',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': '现在取消链接',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    '您正在取消 <strong>“{{documentTitle}}”</strong> 与 Canvas 的链接。',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': '缺少导航到Canvas的权限',
})
