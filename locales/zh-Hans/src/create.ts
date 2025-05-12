import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': '早期访问',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': '以想法为先的创作',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    '在一个AI驱动的编辑器中自然书写。您输入的内容会自动映射到Studio字段。',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': '了解更多',

  /** Edit in Create button text */
  'edit-in-create-button.text': '用Sanity Create编辑',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '了解更多',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': '此文档已链接到Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': '取消链接',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': '取消',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': '无标题',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    '您正在取消“<strong>{{title}}</strong>”与Sanity Create的链接，以便在这里编辑。',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': '切换到Studio编辑？',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    '您将在两个地方保留您的内容。任何新的更改在Sanity Create中将停止同步到这个Studio。',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': '立即取消链接',
})
