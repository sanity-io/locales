import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Ранній доступ',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Авторство з ідеї',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Пишіть природно в редакторі з підтримкою штучного інтелекту. Ваш контент автоматично відображатиметься у полях Studio, коли ви пишете.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Дізнатися більше',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Редагувати за допомогою Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    "Після з'єднання ваші редагування з'являться тут у режимі реального часу.",
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': "З'єднання з Sanity Create",
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Поверніться до Sanity Create. Ваш документ буде синхронізовано автоматично (зазвичай це займає кілька секунд).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': "Затримка з'єднання?",
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Перевірте, чи вікно Sanity Create все ще відкрите, або чи процес здається застряглим. Якщо проблеми не зникають, спробуйте оновити Studio та спробуйте знову.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Почати в Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Продовжити',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Дізнатися більше',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    "Це відкриється у новому вікні, прямо пов'язаному з цим документом.",
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Більше не нагадувати',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Не вдалося визначити URL Sanity Create.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Пишіть природно, публікуйте структуровано',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Створюйте контент своїм шляхом в редакторі з підтримкою штучного інтелекту. Ваші тексти автоматично відображатимуться у відповідних полях в Sanity Studio, коли ви пишете.',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': "Цей документ зв'язаний з Sanity Create",

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': "Від'єднати",

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Скасувати',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Без назви',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    "Ви від'єднуєте «<strong>{{title}}</strong>» від Sanity Create, щоб його можна було редагувати тут.",
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Переключити редагування на Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Ваш вміст залишиться в обох місцях. Будь-які нові зміни в Sanity Create перестануть синхронізуватися з цією студією.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': "Від'єднати зараз",
})
