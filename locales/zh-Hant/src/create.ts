import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': '早期訪問',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': '以想法為先的創作',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    '在一個由AI驅動的編輯器中自然書寫。您輸入的內容會自動映射到Studio欄位。',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': '了解更多',

  /** Edit in Create button text */
  'edit-in-create-button.text': '用Sanity Create編輯',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '了解更多',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': '此文檔已連結到Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': '取消連結',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': '取消',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': '無標題',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    '您正在取消“<strong>{{title}}</strong>”與Sanity Create的連結，以便在這裡編輯。',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': '切換到Studio編輯？',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    '您將在兩個地方保留您的內容。任何在Sanity Create中的新變更將停止同步到這個Studio。',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': '立即取消連結',
})
