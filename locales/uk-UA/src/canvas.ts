import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Редагувати в Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Посилання на Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Будь ласка, зачекайте, поки початкові значення документа будуть визначені',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    "У вас немає дозволів для зв'язування цього документа з Canvas",
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    "Відкрийте цей документ в Dashboard, щоб зв'язати з Canvas",
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Документи версій ще не підтримуються в Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': "Від'єднати від Canvas",

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Редагувати в Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': "Цей документ зв'язаний з Canvas",

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Скасувати',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Прийняти та продовжити',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Цей документ потрібно оновити, щоб він був сумісний з Canvas.\n Існуючий вміст може бути відредагований або видалений в рамках цього процесу.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    "Ви можете в будь-який час від'єднатися від Canvas",
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Підтвердіть зміни документа',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': "Не вдалося зв'язати з Canvas",
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': "Перенаправлення в Canvas для завершення зв'язування...",
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': "Зв'язати з Canvas",
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Перевірка',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Скасувати',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    "Після від'єднання його можна буде редагувати тут, і майбутні редагування в Canvas більше не будуть автоматично відображатися в цьому документі.",
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': "Не вдалося від'єднати від Canvas",
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': "Від'єднано від Canvas",
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': "Від'єднати від Canvas",
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': "Від'єднати зараз",
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    "Ви від'єднуєте <strong>“{{documentTitle}}”</strong> від Canvas.",

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Відсутні дозволи для переходу до Canvas',
})
