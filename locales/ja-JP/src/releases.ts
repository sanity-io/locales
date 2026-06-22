import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'ドキュメントを追加',
  /** Action text for archiving a release */
  'action.archive': 'リリースをアーカイブ',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'アーカイブするにはこのリリースのスケジュールを解除してください',
  /** Action text for showing the archived releases */
  'action.archived': 'アーカイブ済み',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'リリースIDをコピー',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'リリースURLをコピー',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'リリースタイトルをコピー',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'コピー',
  /** Action text for staging a new revert release */
  'action.create-revert-release': '新しいリリースを作成',
  /** Action text for deleting a release */
  'action.delete-release': 'リリースを削除',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'スケジュール済み下書き',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'リリースを複製',
  /** Action text for editing a release */
  'action.edit': 'リリースを編集',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': '今すぐ元に戻す',
  /** Action text for opening a release */
  'action.open': 'アクティブ',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': '一時停止中',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'リリースを実行',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'リリース',
  /** Action text for reverting a release */
  'action.revert': 'リリースを元に戻す',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'リリース時の非公開を元に戻す',
  /** Text for the review changes button in release tool */
  'action.review': '変更をレビュー',
  /** Action text for scheduling a release */
  'action.schedule': 'リリースをスケジュール...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': '非公開をスケジュール',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    '非公開をスケジュールするにはドキュメントが公開されている必要があります',
  /** Label for unarchiving a release */
  'action.unarchive': 'リリースのアーカイブを解除',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': '非公開にする',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'リリース時に非公開にする',
  /** Action text for unscheduling a release */
  'action.unschedule': 'リリースのスケジュールを解除する',

  /** Text for the summary button in release tool */
  'actions.summary': 'サマリー',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'ドキュメントバージョンを追加しました',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': '<strong>{{releaseTitle}}</strong> リリースをアーカイブしました',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    '<strong>{{releaseTitle}}</strong> リリースを作成しました <ScheduleTarget>ターゲット: </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'ドキュメントバージョンを破棄しました',
  'activity.event.edit': 'リリース時刻を <ScheduleTarget></ScheduleTarget> に設定しました',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'できるだけ早く',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': '未定',
  /* The text for the activity event when the release is published */
  'activity.event.publish': '<strong>{{releaseTitle}}</strong> リリースを公開しました',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'スケジュール済みとしてマークしました',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive':
    '<strong>{{releaseTitle}}</strong> リリースのアーカイブを解除しました',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'スケジュール解除済みとしてマークしました',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'リリースアクティビティの取得中にエラーが発生しました',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'リリースアクティビティを読み込んでいます',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'アクティビティ',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'はい、リリースをアーカイブします',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    '{{count}} 件のドキュメントバージョンがアーカイブされます。',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'このリリースをアーカイブしてもよろしいですか？',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    '<strong>「{{title}}」</strong> リリースをアーカイブしてもよろしいですか？',

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    '{{retentionDays}} 日間利用可能で、{{removalDate}} に自動的に削除されます。<Link>保持ポリシーについて詳しく見る</Link>。',
  /** Title for information card on a archived release */
  'archive-info.title': 'このリリースはアーカイブされています',

  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'スケジュール確認が必要なスケジュール済みドラフトが {{count}} 件あります',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'スケジュールを再開',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'すべてのスケジュールを再開',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'draftsモードは無効になりましたが、まだ公開予定のscheduled draftsが残っています。',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'このreleaseは見つかりませんでした',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': '閉じる',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled draftsは無効になりましたが、まだ公開予定のscheduled draftsが残っています。',

  /** Title for changes to published documents */
  'changes-published-docs.title': '公開済みドキュメントへの変更',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'スケジュールを確認',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    '一時停止中のすべてのScheduled Draftsを、意図した公開日にスケジュールします',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    '一部のScheduled Draftsは過去の日付にスケジュールされています。スケジュールを確認すると、それらのドキュメントのバージョンが即座に公開されます。',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Scheduled Draftsを再開',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'コピー',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'はい、Draftを上書きします',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'このドキュメントのdraftバージョンはすでに存在します。現在のバージョンをdraftにコピーし、既存のdraftバージョンを上書きします。',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Draftバージョンはすでに存在します',

  /** Text for when a release / document was created */
  created: '<RelativeTime/>に作成',

  /** Activity inspector button text */
  'dashboard.details.activity': 'アクティビティ',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'releaseをstudioにピン留め',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': '公開済み',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': '{{date}}に公開',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'releaseをstudioからピン留め解除',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'はい、releaseを削除します',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    '{{count}}件のドキュメントバージョンが削除されます。',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'このreleaseを削除してもよろしいですか？',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' releaseは削除されました",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': '変更リストは空です。ドキュメントを参照してください',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': '変更なし',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'これにより、このドキュメントに加えられたすべての変更が完全に削除されます。この操作は元に戻せません。',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    'これにより、「<strong>{{releaseTitle}}</strong>」リリース内でこのドキュメントに加えられたすべての変更が完全に削除されます。この操作は元に戻せません。',
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': '下書きを破棄しますか？',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    '「<strong>{{releaseTitle}}</strong>」リリースからドキュメントを削除しますか？',
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': '下書きを破棄',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'リリースから削除',

  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} 件のバリデーションエラー',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'はい、リリースを複製します',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'これにより、リリースと {{count}} 件のドキュメントバージョンが複製されます。',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'このリリースを複製してもよろしいですか？',

  /** Title text displayed for technical error details */
  'error-details-title': 'エラーの詳細',

  /** Title text when error during release update */
  'failed-edit-title': '変更の保存に失敗しました',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': '公開に失敗しました',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'スケジュールに失敗しました',

  /** Filter tab label for all documents */
  'filter-tab.all': 'すべて',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'エラー',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'アーカイブ済み',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': '作成済み',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': '編集済み',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': '公開済み',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'アーカイブ解除済み',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'リリースを読み込んでいます',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'ドキュメントを読み込んでいます',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'このリリースのドキュメントを読み込めません。後でもう一度お試しください。',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': '問題が発生しました',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'リリース時',
  /** Label for the release menu */
  'menu.label': 'リリースメニュー',
  /** Tooltip for the release menu */
  'menu.tooltip': 'アクション',

  /** Text for when no archived releases are found */
  'no-archived-release': 'アーカイブ済みのリリースはありません',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': '一時停止中のスケジュール済み下書きはありません',

  /** Text for when no releases are found */
  'no-releases': 'リリースはありません',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'スケジュール済み下書きはありません',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'ドキュメント',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'カレンダーを表示',
  /** Description for the release tool */
  'overview.description':
    'リリースとは、まとめて管理・スケジュール・ロールバックできるドキュメント変更のコレクションです。',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'リリースを検索',
  /** Title for the release tool */
  'overview.title': 'リリース',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'このリリースは予定された公開日を過ぎています',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'この下書きは予定された公開日を過ぎています',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    '現在のロールにより、このリリースで表示できる内容が制限されています。このリリースを公開またはスケジュールすることはできません。',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'アクセスが制限されています',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'このリリースをアーカイブする権限がありません',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'このリリースを削除する権限がありません',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'このバージョンを破棄する権限がありません',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'このリリースを複製する権限がありません',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'このリリースのアーカイブを解除する権限がありません',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'このドキュメントの公開を取り消す権限がありません',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} が現在「{{releaseTitle}}」リリースでこのドキュメントを編集しています',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': '公開するドキュメントがありません',

  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "'<strong>{{title}}</strong>' リリースとその {{releaseDocumentsLength}} 件のドキュメントが公開されます。",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'リリースとすべてのドキュメントバージョンを公開してもよろしいですか？',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': '一部のドキュメントにバリデーションエラーがあります',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'ドキュメントを検証中...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': '公開する権限がありません',

  /** Title for information card on a published release */
  'publish-info.title': 'このリリースは正常に公開されました。',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': '無題',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    '{{releaseDocumentsLength}} 件のドキュメントバージョンが元に戻されます。',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'リリースを即座に元に戻す',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "'{{title}}' リリースを元に戻してもよろしいですか？",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'このリリースのドキュメントは公開後に変更されました。元に戻すと、これらの変更が上書きされます。',

  /** Description of a reverted release */
  'revert-release.description': '「{{title}}」のドキュメントバージョンへの変更を元に戻します。',
  /** Title of a reverted release */
  'revert-release.title': '「{{title}}」を元に戻しています',

  /** Description for the review changes button in release tool */
  'review.description': '変更をレビューするには、このリリースにドキュメントを追加してください',
  /** Text for when a document is edited */
  'review.edited': '<RelativeTime/> に編集済み',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'スケジュールするドキュメントがありません',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'このリリースはすでにスケジュールされています',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': '一部のドキュメントにバリデーションエラーがあります',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'ドキュメントを検証中...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'スケジュールする権限がありません',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'リリースのスケジュールを解除してもよろしいですか？',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'はい、スケジュールする',
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    '<strong>{{title}}</strong> リリースとその {{count}} 件のドキュメントバージョンがスケジュールされます。',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'リリースをスケジュールする',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': '将来の日時でスケジュールしてください。',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'スケジュール日時',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': '非公開をスケジュール',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'このドキュメントを非公開にする日時を選択してください。',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': '非公開のドラフトをスケジュール',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'ドキュメントを検索',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found':
    'すべてのドキュメントが検証されました。問題が見つかりました',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'すべてのドキュメントが検証されました。問題はありません',
  /** Text for when the release was created */
  'summary.created': '<RelativeTime/>に作成されました',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} 件のドキュメント',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'リリースを公開またはスケジュールするには、ドキュメント内で見つかった問題を解決してください',
  /** Text for when the release has no documents */
  'summary.no-documents': 'ドキュメントなし',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'このスケジュール済みドラフトにはドキュメントが含まれていません。削除された可能性があります。',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'このリリースにドキュメントがありません',
  /** Text for when the release has not published */
  'summary.not-published': '未公開',
  /** Text for when the release was published */
  'summary.published': '<RelativeTime/>に公開されました',
  /** Text for when the release has validated documents */
  'summary.validated-documents':
    '{{totalCount}} 件中 {{validatedCount}} 件のドキュメントが検証されました',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'ドキュメントを検証中: {{totalCount}} 件中 {{validatedCount}} 件',

  /** add action type that will be shown in the table*/
  'table-body.action.add': '追加',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': '変更',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': '非公開',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'アクション',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'アーカイブ済み',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': '貢献者',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': '作成者',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'ドキュメント',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'ドキュメント',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': '編集済み',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': '対象',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': '公開済み',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': '公開済み',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': '公開日時',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'スケジュール日時',
  /** Header for the document table in the release tool - time */
  'table-header.time': '時刻',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'リリース',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'タイプ',
  /** Header for the document table in the release tool - when */
  'table-header.when': '日時',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': '推定',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'スケジュール済み',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "'<strong>{{title}}</strong>' のアーカイブに失敗しました: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error':
    '下書きのスケジュール設定に失敗しました: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'リリースIDをクリップボードにコピーしました',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'リリースリンクをクリップボードにコピーしました',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'リリースタイトルをクリップボードにコピーしました',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'リリースへのドキュメントの追加に失敗しました: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "'<strong>{{title}}</strong>' の削除に失敗しました: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "'<strong>{{title}}</strong>' リリースが正常に削除されました",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "'<strong>{{title}}</strong>' の複製に失敗しました: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "'<strong>{{title}}</strong>' リリースが複製されました。<Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': '複製されたリリースを表示',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': '「{{title}}」リリースは正常に元に戻されました',
  /** Text for toast when release failed to publish */
  'toast.publish.error': "'<strong>{{title}}</strong>' の公開に失敗しました: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': '「{{title}}」のリリースの取り消しが正常に作成されました。<Link/>',
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': '取り消しリリースを表示',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'リリースの取り消しに失敗しました: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error':
    "'<strong>{{title}}</strong>' のスケジュール設定に失敗しました: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': '「<strong>{{title}}</strong>」リリースがスケジュールされました。',
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "'<strong>{{title}}</strong>' のアーカイブ解除に失敗しました: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "'<strong>{{title}}</strong>' のスケジュール解除に失敗しました: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled':
    'リリースはスケジュール済みです。タイプを変更するにはスケジュールを解除してください',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'キャンセル',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'はい、リリース時に非公開にする',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'このドキュメントバージョンに加えられた変更はすべて失われます。',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'これにより、<Label>{{title}}</Label> リリースの一部としてドキュメントが非公開になり、リリース時に下書きが存在しない場合は下書きが作成されます。',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header': 'リリース時にこのドキュメントを非公開にしてもよろしいですか？',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'このドキュメントはすでに非公開です。',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'このドキュメントの公開済みバージョンは存在しません。',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'リリースはスケジュールされた日時に公開されなくなります',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'リリースのスケジュールを解除してもよろしいですか？',
})
