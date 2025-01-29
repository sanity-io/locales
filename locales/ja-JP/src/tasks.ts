import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': '新しいタスクを作成',
  /** The label for the open tasks panel action */
  'actions.open.text': 'タスク',

  /** The label for the button to create a new task */
  'buttons.create.text': 'タスクを作成',
  /** The label for the button to discard changes */
  'buttons.discard.text': '破棄',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'ドラフト',
  /** The label for the button to create a new task */
  'buttons.new.text': '新しいタスク',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'タスクを作成するにはアップグレード',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': '次のタスクに進む',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': '前のタスクに戻る',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'このタスクを削除してもよろしいですか？',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'キャンセル',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': '削除',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'タスクを削除',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'タスクを開く',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}}個の開いているタスク',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'あなたに割り当てられたタスクはありません',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'タスクが割り当てられると、ここに表示されます',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': '新しいタスクを作成',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'このドキュメントにはまだタスクがありません',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': 'ドキュメントに関連するタスクがある場合、ここに表示されます。',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'ドキュメントを開いてタスクを表示',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'アクティブなドキュメントのタスクがここに表示されます。',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'あなたはどのタスクにも購読していません',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'タスクを作成、変更、またはコメントすると自動的に購読されます',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': '完了したタスクはありません',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text': '完了とマークされたタスクはここに表示されます',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': '完了したタスクはありません',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': '完了したタスクはありません',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    '完了とマークされた購読しているタスクがここに表示されます',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'すべてのタスクが完了しました',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'あなたに割り当てられた新しいタスクがここに表示されます',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'このドキュメントにタスクはありません',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': '購読しているタスクはありません',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': '購読しているタスクがここに表示されます',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': '割り当てられていません',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': '担当者を設定',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'ユーザーが見つかりません',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'ユーザー名を選択',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': '許可されていません',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': '担当者を変更',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'ユーザーが見つかりません',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'さらに作成',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': '期日を設定',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': '削除',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': '期日を変更',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': '説明を追加',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'ステータスを変更',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'ターゲットコンテンツを削除',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'スキーマが見つかりません',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'ドキュメントを選択',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'タスクのタイトル',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'タイトルが必要です',
  /** The status message upon successful creation of a task */
  'form.status.success': 'タスクが作成されました',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'タスクはありません',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': '改善にご協力ください、<Link>タスクに関するフィードバックを共有する</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'タスクへのリンクをコピー',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'タスクを削除',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'タスクを複製',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'タスクを複製するにはアップグレード',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'このタスクを作成しました',
  /** The title of the activity section of the task */
  'panel.activity.title': 'アクティビティ',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': '不明なユーザー',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'サイドバーを閉じる',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'コメントを追加...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'タスクにコメントするにはアップグレード',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': '作成',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'ドラフト',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'タスクを開く',
  /** Title of the Tasks panel   */
  'panel.title': 'タスク',

  /** Label for the Assigned Tab */
  'tab.assigned.label': '割り当てられた',
  /** Label for the Active Document Tab */
  'tab.document.label': 'アクティブドキュメント',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': '購読中',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'タスク',
})
