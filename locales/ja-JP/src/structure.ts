import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'ドキュメントのURLをコピー',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': '操作は準備ができていません',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete':
    'このドキュメントはまだ存在していないか、すでに削除されています',
  /** Label for the "Delete" document action button */
  'action.delete.label': '削除',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': '削除中…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'ドキュメントがキャンバスにリンクされているため、一部のドキュメントアクションは無効です',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    '最後に公開してからのすべての変更を破棄してもよろしいですか？',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'このドキュメントには未公開の変更がありません',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'このドキュメントは公開されていません',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': '操作は準備ができていません',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': '変更を破棄',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': '操作は準備ができていません',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'このドキュメントはまだ存在していないので、複製するものがありません',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': '複製',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': '複製中…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': '既に公開済み',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': '{{timeSincePublished}}前に公開済み',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': '操作は準備ができていません',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': '公開',
  /** Label for the "Publish" document action */
  'action.publish.label': '公開',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': '公開',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'このドキュメントタイプではライブ編集が有効になっているため、公開することはできません',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'このコンテンツタイプではライブ編集が有効になっており、変更を加えると自動的に公開されます',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': '未公開の変更はありません',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': '公開済み',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': '公開中…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    '公開する前に修正する必要があるバリデーションエラーがあります',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': '公開する前にタスクが完了するのを待っています',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'このドキュメントを復元してもよろしいですか？',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': '初期バージョンには復元できません',
  /** Label for the "Restore" document action */
  'action.restore.label': '復元',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'このバージョンに復元',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'このドキュメントは公開されていません',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': '操作は準備ができていません',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': '公開取り消し',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'このドキュメントはライブ編集が有効になっており、非公開にすることはできません',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'アーカイブされた<VersionBadge>リリース</VersionBadge>の一部として表示されている読み取り専用のドキュメントです。編集することはできません',
  /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */
  'banners.archived-scheduled-draft.description':
    'このスケジュールされたドラフトはアーカイブされています',
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'ドラフトドキュメントを作成できません。',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    '公開ドキュメントを作成できません。',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'このドキュメントの行き先を選択してください：',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    '<VersionBadge>{{title}}</VersionBadge>リリースはアクティブではありません。',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': '最新バージョンを復元',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'このドキュメントは削除されました。',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'このドキュメントタイプは非推奨になりました。',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': '下書きを破棄',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': '編集を続けるために公開する',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    '<strong>{{schemaType}}</strong>のタイプは<code>liveEdit</code>が有効になっていますが、このドキュメントの下書きバージョンが存在します。ライブ編集を続けるためには、下書きを公開するか破棄してください。',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'ドラフトを比較する',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'ドラフトを破棄する',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'ドラフトを公開する',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'ワークスペースはドラフトを有効にしていませんが、このドキュメントのドラフトバージョンが存在します。',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'あなたの役割<Roles/>はこのドキュメントを作成する権限がありません。',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'あなたの役割<Roles/>はこのドキュメントを作成する権限がありません。',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'あなたの役割<Roles/>はこのドキュメントを更新する権限がありません。',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'あなたの役割<Roles/>はこのドキュメントを更新する権限がありません。',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent':
    '編集リクエストが送信されました',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text': '編集を依頼する',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    '公開された<VersionBadge>リリース</VersionBadge>の一部として表示されている読み取り専用のドキュメントです。編集することはできません',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'リファレンスを再読み込み',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'このリファレンスは開いた時から変更されています。',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'リファレンスを閉じる',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'このリファレンスは開いた時から削除されています。',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'リリースに追加する',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': '編集のためにリリースを開く',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'ドキュメントをリリースに追加する際にエラーが発生しました：{{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'ドキュメントをリリースに追加する際のエラー',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'このドキュメントは現在',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_other': 'リリースにのみ存在します',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */
  'banners.release.navigate-to-edit-description-multiple_other':
    'このドキュメントは<VersionBadge/>リリースの一部であり、さらに{{count}}つのリリースにも含まれています',
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    'このドキュメントは<VersionBadge/>リリースの一部です',
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': '<Label>{{title}}</Label>リリースに含まれていません。',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'ドキュメントがリリースに追加されるのをお待ちください。数秒以内に完了するはずです。',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'ドキュメントをリリースに追加しています…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    '選択されたドキュメントのリビジョンが見つかりませんでした。履歴リストから別のエントリを選択してください。',
  /** The text content for the scheduled draft override banner */
  'banners.scheduled-draft-override-banner.text':
    'このドキュメントにはスケジュールされたドラフトが存在します。今変更を公開すると、スケジュールが実行されるときに上書きされます。',
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'このドキュメントは<VersionBadge>{{title}}</VersionBadge>リリースの一部として非公開になります',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    '現在の<strong>公開</strong>バージョンを表示しています：',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': '新しい {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': '無題',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'ドキュメントアクションを開く',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'ドキュメントアクション',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': '右にペインを分割',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': '右にペインを分割',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': '分割ペインを閉じる',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'ペイングループを閉じる',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'キャンバスで編集',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'このドラフトドキュメントはキャンバスにリンクされています',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'このライブドキュメントはキャンバスにリンクされています',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'このバージョンドキュメントはキャンバスにリンクされています',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': '詳しくはこちら',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvasを使用すると、自由形式のエディターで執筆しながら、入力すると同時にStudioに構造化されたコンテンツとして自動的にマッピングされます。',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'アイデア優先の執筆',

  /** The description for the changes banner */
  'changes.banner.description':
    'このドキュメントの<strong>{{perspective}}</strong>バージョンの履歴を表示しています。',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'このビューは、このドキュメントの特定のバージョンで発生した変更を表示します。異なるバージョンを選択して、その変更を見てください',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'から',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': '履歴',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': '変更をレビュー',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'まで',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}"はサポートされていないドキュメント比較モードです。',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': '次のドキュメントパラメータが無効です。',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'ドキュメントを比較できません',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam': '前のドキュメントパラメータが無効です。',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    '比較する他のバージョンのドキュメントがありません。',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'バージョンを比較する',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'ドラフト',
  /** The string used to label published documents */
  'compare-versions.status.published': '公開済み',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'バージョンを比較する',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'キャンセル',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1つのドキュメント',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}}ドキュメント',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'データセット: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'データセット: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': '利用不可のデータセット',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': '利用不可のデータセット',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '別のデータセットに{{documentCount}}',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{count}}のデータセットに{{documentCount}}',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'クリップボードにIDをコピー',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'データセット',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ドキュメントID',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'ドキュメントIDのコピーに失敗しました',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'プロジェクトID',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'それでも削除',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'それでも公開を取り消す',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': '今すぐ削除',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': '今すぐ公開を取り消す',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete': '本当に“<DocumentTitle/>”を削除しますか？',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    '本当に“<DocumentTitle/>”の公開を取り消しますか？',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    '参照中のドキュメントを読み込む際にエラーが発生しました。',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': '再試行',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'エラー',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'ドキュメントを削除しますか？',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'ドキュメントの公開を取り消しますか？',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': '参照しているドキュメントを探しています…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '表示されない1つのその他の参照',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other': '表示されない{{count}}のその他の参照',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    '関連するデータセットのアクセストークンが不足しているため、これらの参照のメタデータを表示できません。',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'プレビュー利用不可',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'このドキュメントを削除すると、それを参照しているドキュメントはアクセスできなくなります。',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'このドキュメントの公開を取り消すと、それを参照しているドキュメントはアクセスできなくなります。',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1つのドキュメントが“<DocumentTitle/>”を参照しています',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}}つのドキュメントが“<DocumentTitle/>”を参照しています',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    '以下のドキュメントが“<DocumentTitle/>”を参照しているため、削除できない可能性があります:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    '以下のドキュメントが“<DocumentTitle/>”を参照しているため、公開を取り消すことができない可能性があります:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'キャンセル',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': '確認',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'コンテンツ',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'エラー: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'タイトルなし',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': '未知のスキーマタイプ: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': '閉じる',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': '<DocumentTitle/>の検査中',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': '値なし',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': '検査',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': '検索',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'パース済み',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': '生のJSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'このフォームは非表示です',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': '無題',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'ドキュメントを読み込んでいます…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'ドキュメントが同期される間、しばらくお待ちください。これは通常、ドキュメントが公開された直後に行われ、数秒以上かかることはありません',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'ドキュメントを同期中…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'お気に入りに追加',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'お気に入りから削除',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'プランの履歴保持ポリシーにより、このドキュメントの変更を読み込むことができないため、<strong>{{version}}</strong>バージョンが<strong>公開</strong>バージョンとどのように比較されるかを表示しています。',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': '公開されたものと比較',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': '<VersionBadge>{{releaseTitle}}</VersionBadge>ドキュメントを検査する',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': '<VersionBadge>ドラフト</VersionBadge>ドキュメントを開く',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': '<VersionBadge>{{releaseTitle}}</VersionBadge>リリースを開く',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': '読み込み中…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'アクション',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'レイアウト',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'ソート',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'コンパクトビュー',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': '詳細ビュー',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': '作成日で並び替え',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': '最終編集で並び替え',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'ドキュメントタイプの追加方法を学ぶ →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'スキーマに少なくとも1つのドキュメントタイプを定義してください。',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'ドキュメントタイプがありません',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': '戻る',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'メニューを表示',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': '作成',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': '新しいドキュメントを作成する',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': '権限が不十分です',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': '編集済み <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': '未公開の編集はありません',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'ドキュメント: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'スキーマが見つかりませんでした <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': '公開済み <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': '公開された編集はありません',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'エラー: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': '新しい{{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'タイトルなし',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': '再試行中…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'エラー: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'エラー: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'インターネット接続がオフラインのようです。',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'リストアイテムを取得できませんでした',
  'panes.document-list-pane.error.will-retry-automatically_other': '再試行中… (#{{count}})。',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': '{{limit}}ドキュメントまで表示します',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'このタイプのドキュメントはありません',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': '結果が見つかりません',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': '一致するドキュメントがありません',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': '接続を試みています…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'リストを検索',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'リストを検索',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': '詳細',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': '{{context}}中にエラーが発生しました',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'このドキュメントを削除しようとした際にエラーが発生しました。これは通常、他のドキュメントがそれを参照していることを意味します。',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'このドキュメントの公開を取り消そうとした際にエラーが発生しました。これは通常、他のドキュメントがそれを参照していることを意味します。',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'ドキュメントに{{context}}を成功させました',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'ドキュメントのURLがクリップボードにコピーされました',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong>がリリースに追加されました',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'ドキュメントは正常に削除されました',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    '最後の公開以降のすべての変更が破棄されました。破棄されたドラフトは履歴から回復することができます',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'ドキュメントは正常に複製されました',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'ドキュメントが公開されました',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong>が復元されました',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'ドキュメントの公開が取り消されました。最新の公開バージョンからドラフトが作成されました。',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': '無題',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'ドキュメントを読み込んでいます…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'ドキュメントタイプが定義されておらず、<Code>{{id}}</Code>識別子を持つドキュメントが見つかりませんでした。',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'ドキュメントが見つかりませんでした',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'このドキュメントはスキーマタイプ<Code>{{documentType}}</Code>を持っていますが、ローカルのコンテンツスタジオスキーマでタイプとして定義されていません。',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    '不明なドキュメントタイプ: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'このドキュメントは存在せず、それに対するスキーマタイプも指定されていません。',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': '読み込み中…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'まだ読み込み中…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Structure item is missing required <Code>type</Code> property.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': '未知のペインタイプ',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Structure item of type <Code>{{type}}</Code> is not a known entity.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'プレビューを開く',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'リクエストを送る',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'あなたのリクエストはプロジェクト管理者に送信されます。必要であれば、メモを追加することもできます',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': '編集アクセスを依頼する',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': '必要であれば、メモを追加できます',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'メモを追加...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'このプロジェクトへのアクセスリクエストが拒否されました。',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'すべてのプロジェクトにわたる役割リクエストの限界に達しました。さらにリクエストを送信する前にお待ちいただくか、管理者に連絡して支援を求めてください。',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': '保存済み',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': '保存中...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': '最終公開 {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': '最終公開 <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label': '最終更新 {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': '最終更新 <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': '変更を確認',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': '保存完了！',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': '保存中...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': '変更を保存しました',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': '変更を確認',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'ドキュメントを見る',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'エラー',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': '構造を読み取る際にエラーが発生しました',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': '再読み込み',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': '構造パス',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'アクションメニューを開く',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'アクション',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': '折りたたむ',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': '展開',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'ID "{{releaseId}}" のリリースが見つかりません',

  /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */
  'toggle-inline-changes.menu-item.title': 'インライン変更',
})
