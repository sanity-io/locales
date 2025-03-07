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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'После связывания ваши изменения будут отображаться здесь в реальном времени.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Связывание с Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Вернитесь в Sanity Create. Ваш документ будет синхронизироваться автоматически (обычно это занимает несколько секунд).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Задержка связывания?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Проверьте, открыто ли окно Sanity Create, или кажется ли процесс застопорившимся. Если проблемы не исчезают, попробуйте обновить Studio и попробуйте снова.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Свободный редактор с поддержкой ИИ, который синхронизируется напрямую с вашими документами в Studio.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Начните работу с Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Ранний доступ',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Узнать больше',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Не удалось определить URL Sanity Create.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Начать в Create',

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
