import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'スケジュール公開',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': '公開のスケジュールに失敗しました',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'ドキュメントの公開がスケジュールされました',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': '{{publishAt}} に公開がスケジュールされました',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'このドキュメントのスケジュール済みドラフトはすでに存在します。',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    '現在のドラフトにバリデーションエラーがあるため、ドラフトをスケジュールできません。',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'スケジュール設定について学ぶ',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'ドラフトドキュメントをスケジュールしてロックし、将来の日時に公開します。',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'スケジュール済みドラフト',
})
