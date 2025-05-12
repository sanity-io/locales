import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Ранний доступ',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Авторство, ориентированное на идеи',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Пишите естественно в редакторе с поддержкой искусственного интеллекта. Ваш контент автоматически отображается в полях Studio по мере ввода текста.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Узнать больше',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Редактировать с помощью Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Узнать больше',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Этот документ связан с Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Отвязать',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Отмена',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Без названия',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Вы отвязываете «<strong>{{title}}</strong>» от Sanity Create, чтобы можно было редактировать здесь.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Переключить редактирование на Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Ваше содержимое останется в обоих местах. Любые новые изменения в Sanity Create перестанут синхронизироваться с этой Студией.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Отвязать сейчас',
})
