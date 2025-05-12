import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'アーリーアクセス',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'アイデアファーストの執筆',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'AIパワードエディターで自然に書き込みます。あなたがタイプすると、コンテンツは自動的にスタジオフィールドにマッピングされます。',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': '詳細を学ぶ',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Sanity Createで編集',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '詳細を学ぶ',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'このドキュメントはSanity Createにリンクされています',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'リンク解除',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'キャンセル',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': '無題',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    '「<strong>{{title}}</strong>」のSanity Createからのリンクを解除して、ここで編集できるようにします。',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': '編集を Studio に切り替えますか？',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    '両方の場所にコンテンツが保持されます。Sanity Createでの新しい変更は、このStudioとの同期を停止します。',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': '今すぐリンク解除',
})
