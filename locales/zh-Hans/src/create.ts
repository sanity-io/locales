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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details': '链接完成后，您的编辑将实时显示在这里。',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': '正在链接到Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede': '返回Sanity Create。您的文档将自动同步（通常需要几秒钟）。',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': '链接延迟？',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    '检查您的Sanity Create窗口是否仍然打开，或者进程是否看起来卡住了。如果问题持续存在，请尝试刷新Studio然后再试。',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    '一个自由形式的、AI驱动的编辑器，可以直接与您的Studio文档同步。',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': '开始使用Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': '早期访问',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '了解更多',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': '无法确定Sanity Create的URL。',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': '在Create中开始',

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
