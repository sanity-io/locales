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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details': '連結後，您的編輯將即時顯示在這裡。',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': '正在連結到Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede': '回到Sanity Create。您的文檔將自動同步（通常需要幾秒鐘）。',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': '連結延遲？',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    '檢查您的Sanity Create窗口是否仍然開著，或者進程是否看起來卡住了。如果問題持續存在，請嘗試刷新Studio然後再試一次。',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': '在Sanity Create中開始',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': '繼續',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '了解更多',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details': '這將在新窗口中打開，直接連結到此文檔。',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': '不要再提醒我',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': '無法確定Sanity Create的URL。',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': '自然書寫，結構化發布',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    '在一個由AI驅動的編輯器中以您喜歡的方式創建內容。您的寫作會自動映射到Sanity Studio中的正確欄位。',

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
