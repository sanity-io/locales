import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': '새 작업 생성',
  /** The label for the open tasks panel action */
  'actions.open.text': '작업',

  /** The label for the button to create a new task */
  'buttons.create.text': '작업 생성',
  /** The label for the button to discard changes */
  'buttons.discard.text': '취소',
  /** The label for the button to open the draft */
  'buttons.draft.text': '초안',
  /** The label for the button to create a new task */
  'buttons.new.text': '새 작업',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': undefined, // 'Upgrade to create tasks'
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': '다음 작업으로 이동',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': '이전 작업으로 이동',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': '이 작업을 삭제하시겠습니까?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': '취소',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': '제거',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': '작업 제거',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': '작업 열기',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}}개의 열린 작업',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': '할당된 작업이 없습니다',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': '할당된 작업이 있으면 여기에 표시됩니다',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': '새 작업 생성',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': '이 문서에는 아직 작업이 없습니다',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': '문서에 연결된 작업이 있으면 여기에 표시됩니다.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': undefined, // 'Open a document to see it\'s task'
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': undefined, // 'Tasks on your active document will be shown here.'
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': '구독한 작업이 없습니다',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text': '작업을 생성, 수정 또는 댓글을 달면 자동으로 구독됩니다',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': '완료된 작업 없음',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text': '완료로 표시된 작업이 여기에 표시됩니다',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': '완료된 작업 없음',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': '완료된 작업 없음',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    '구독한 작업 중 완료된 작업이 여기에 표시됩니다',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': '모든 작업을 마쳤습니다',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': '당신에게 할당된 새 작업이 여기에 표시될 것입니다',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': '이 문서에 대한 작업 없음',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': '구독한 작업 없음',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': '구독한 작업이 여기에 표시될 것입니다',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': '할당되지 않음',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': undefined, // 'Set assignee'
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': '사용자를 찾을 수 없음',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': '사용자 이름 선택',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': '권한 없음',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': undefined, // 'Change assignee'
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': '사용자를 찾을 수 없음',
  /** The label used in the create more toggle */
  'form.input.create-more.text': '더 생성하기',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': undefined, // 'Set due date'
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': '제거하기',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': undefined, // 'Change due date'
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': '설명 추가',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': undefined, // 'Change status'
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': '대상 콘텐츠 제거',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': '스키마를 찾을 수 없음',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': '문서 선택',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': '작업 제목',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': '제목이 필요합니다',
  /** The status message upon successful creation of a task */
  'form.status.success': '작업 생성됨',

  /** The text displayed when no tasks are found */
  'list.empty.text': '작업 없음',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': undefined, // 'Help us improve, <Link>share feedback on Tasks</Link> '

  /** The label for the copy link menu item */
  'menuitem.copylink.text': '작업에 대한 링크 복사',
  /** The label for the delete task menu item */
  'menuitem.delete.text': '작업 삭제',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': '작업 복제',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': undefined, // 'Upgrade to duplicate tasks'

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': '이 작업을 생성함',
  /** The title of the activity section of the task */
  'panel.activity.title': '활동',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': '알 수 없는 사용자',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': '사이드바 닫기',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': '댓글 추가...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': undefined, // 'Upgrade to comment on tasks'
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': '생성',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': '초안',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': '작업 열기',
  /** Title of the Tasks panel   */
  'panel.title': '작업',

  /** Label for the Assigned Tab */
  'tab.assigned.label': '할당됨',
  /** Label for the Active Document Tab */
  'tab.document.label': '활성 문서',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': '구독됨',
})
