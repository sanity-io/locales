import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Рэдагаваць у Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Спасылка на Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Калі ласка, пачакайце, пакуль не будуць вызначаны пачатковыя значэнні дакумента',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'У вас няма дазволаў спасылаць гэты дакумент на Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Адкрыйце гэты дакумент у Dashboard, каб спаслаць на Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'Версійныя дакументы пакуль не падтрымліваюцца ў Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Адлучыць ад Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Рэдагаваць у Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Гэты дакумент звязаны з Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Адмяніць',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Прыняць і працягнуць',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Гэты дакумент патрабуе абнаўлення, каб быць сумяшчальным з Canvas.\n Існуючы кантэнт можа быць адрэдагаваны або выдалены ў рамках гэтага працэсу.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description': 'Вы можаце адлучыць ад Canvas у любы час',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Пацвердзіць змены ў дакуменце',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Не ўдалося спаслаць на Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Перанакіроўваем вас у Canvas для завяршэння спасылкі...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Спасылка на Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Праверка',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Адмяніць',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Пасля адлучэння ён будзе даступны для рэдагавання тут, і будучыя рэдагаванні ў Canvas больш не будуць аўтаматычна адлюстроўвацца ў гэтым дакуменце.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Не ўдалося адлучыць ад Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Адлучаны ад Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Адлучыць ад Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Адлучыць зараз',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Вы адлучаеце <strong>“{{documentTitle}}”</strong> ад Canvas.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Адсутнічаюць дазволы для навігацыі ў Canvas',
})
