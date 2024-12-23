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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'リンクが完了すると、編集内容がリアルタイムでここに表示されます。',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Sanity Createへのリンク中',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Sanity Createに戻ってください。ドキュメントは自動的に同期されます（通常は数秒かかります）。',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'リンキングが遅れていますか？',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Sanity Createウィンドウがまだ開いているか、プロセスが停止しているかを確認してください。問題が解決しない場合は、スタジオを更新して再試行してください。',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'スタジオドキュメントと直接同期する自由形式のAIパワードエディター。',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Sanity Createで始めよう',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'アーリーアクセス',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '詳細を学ぶ',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Sanity CreateのURLを特定できません。',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Createで始める',

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
