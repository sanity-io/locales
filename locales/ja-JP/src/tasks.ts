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
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': '次のタスクに進む',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': '前のタスクに戻る',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'このタスクを削除してもよろしいですか？',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': '一度削除すると、復元することはできません。',
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

  'empty-state.list.assigned.heading': 'あなたに割り当てられたタスクはありません',
  'empty-state.list.assigned.text': 'タスクが割り当てられると、ここに表示されます',
  'empty-state.list.create-new': '新しいタスクを作成',
  'empty-state.list.document.heading': 'このドキュメントにはまだタスクがありません',
  'empty-state.list.document.text': 'ドキュメントに関連するタスクがある場合、ここに表示されます。',
  'empty-state.list.subscribed.heading': 'あなたはどのタスクにも購読していません',
  'empty-state.list.subscribed.text':
    'タスクを作成、変更、またはコメントすると自動的に購読されます',
  'empty-state.status.list.closed.assigned.heading': '完了したタスクはありません',
  'empty-state.status.list.closed.assigned.text': '完了とマークされたタスクはここに表示されます',
  'empty-state.status.list.closed.document.heading': '完了したタスクはありません',
  'empty-state.status.list.closed.subscribed.heading': '完了したタスクはありません',
  'empty-state.status.list.closed.subscribed.text':
    '完了とマークされた購読しているタスクがここに表示されます',
  'empty-state.status.list.open.assigned.heading': 'すべてのタスクが完了しました',
  'empty-state.status.list.open.assigned.text':
    'あなたに割り当てられた新しいタスクがここに表示されます',
  'empty-state.status.list.open.document.heading': 'このドキュメントにタスクはありません',
  'empty-state.status.list.open.subscribed.heading': '購読しているタスクはありません',
  'empty-state.status.list.open.subscribed.text': '購読しているタスクがここに表示されます',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': '割り当てられていません',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'ユーザーが見つかりません',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'ユーザー名を選択',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': '許可されていません',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'ユーザーが見つかりません',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'さらに作成',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': '削除',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': '説明を追加',
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

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'タスクへのリンクをコピー',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'タスクを削除',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'タスクを複製',

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
})
