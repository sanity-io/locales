import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Редактировать в Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Ссылка на Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Пожалуйста, подождите, пока не будут разрешены начальные значения документа',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'У вас нет разрешений для связывания этого документа с Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Откройте этот документ в Dashboard, чтобы связать с Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Документы версий пока не поддерживаются в Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Отвязать от Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Редактировать в Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Этот документ связан с Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Отмена',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Принять и продолжить',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Этот документ необходимо обновить для совместимости с Canvas.\n Существующее содержимое может быть отредактировано или удалено в рамках этого процесса.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Вы можете в любой момент отвязать от Canvas',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Подтвердите изменения документа',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Не удалось связать с Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Перенаправляем вас в Canvas для завершения связывания...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Связать с Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Проверка',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Отмена',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'После отвязки он будет доступен для редактирования здесь, и будущие изменения в Canvas больше не будут автоматически отображаться в этом документе.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Не удалось отвязать от Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Отвязано от Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Отвязать от Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Отвязать сейчас',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Вы отвязываете <strong>«{{documentTitle}}»</strong> от Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Отсутствуют разрешения для перехода к Canvas',
})
