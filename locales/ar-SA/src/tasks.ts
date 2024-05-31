import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'إنشاء مهمة جديدة',
  /** The label for the open tasks panel action */
  'actions.open.text': 'المهام',

  /** The label for the button to create a new task */
  'buttons.create.text': 'إنشاء مهمة',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'تجاهل',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'مسودة',
  /** The label for the button to create a new task */
  'buttons.new.text': 'مهمة جديدة',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'الانتقال إلى المهمة التالية',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'الانتقال إلى المهمة السابقة',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'هل أنت متأكد من أنك تريد حذف هذه المهمة؟',
  /** Text for the remove task dialog clarifying that deletion is permanent */
  'dialog.remove-task.body2': 'بمجرد الحذف، لا يمكن استعادتها.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'إلغاء',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'إزالة',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'إزالة المهمة',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'فتح المهمة',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} مهمة مفتوحة',

  'empty-state.list.assigned.heading': 'لم يتم تعيين أي مهام لك',
  'empty-state.list.assigned.text': 'بمجرد تعيين المهام لك، ستظهر هنا',
  'empty-state.list.create-new': 'إنشاء مهمة جديدة',
  'empty-state.list.document.heading': 'هذا المستند لا يحتوي على أي مهام بعد',
  'empty-state.list.document.text': 'بمجرد أن يكون للمستند مهام متصلة، سيتم عرضها هنا.',
  'empty-state.list.subscribed.heading': 'لم تشترك في أي مهام',
  'empty-state.list.subscribed.text':
    'عندما تقوم بإنشاء، تعديل، أو التعليق على مهمة سوف تشترك تلقائيًا',
  'empty-state.status.list.closed.assigned.heading': 'لا توجد مهام مكتملة',
  'empty-state.status.list.closed.assigned.text': 'سوف تظهر مهامك المعلمة كمنجزة هنا',
  'empty-state.status.list.closed.document.heading': 'لا توجد مهام مكتملة',
  'empty-state.status.list.closed.subscribed.heading': 'لا توجد مهام مكتملة',
  'empty-state.status.list.closed.subscribed.text':
    'المهام التي تشترك فيها والمعلمة كمكتملة ستظهر هنا',
  'empty-state.status.list.open.assigned.heading': 'لقد انتهيت من كل شيء',
  'empty-state.status.list.open.assigned.text': 'المهام الجديدة المُسندة إليك ستظهر هنا',
  'empty-state.status.list.open.document.heading': 'لا توجد مهام على هذا المستند',
  'empty-state.status.list.open.subscribed.heading': 'لا توجد مهام مشترك فيها',
  'empty-state.status.list.open.subscribed.text': 'المهام التي تشترك فيها ستظهر هنا',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'غير مُسند',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'لم يتم العثور على مستخدمين',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'اختر اسم المستخدم',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'غير مصرح',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'المستخدم غير موجود',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'إنشاء المزيد',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'إزالة',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'أضف وصفًا',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'إزالة المحتوى المستهدف',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'لم يتم العثور على المخطط',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'اختر مستند',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'عنوان المهمة',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'العنوان مطلوب',
  /** The status message upon successful creation of a task */
  'form.status.success': 'تم إنشاء المهمة',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'لا توجد مهام',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'نسخ رابط المهمة',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'حذف المهمة',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'تكرار المهمة',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'أنشأ هذه المهمة',
  /** The title of the activity section of the task */
  'panel.activity.title': 'النشاط',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'مستخدم غير معروف',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'إغلاق الشريط الجانبي',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'أضف تعليقًا...',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'إنشاء',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'المسودات',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'فتح المهام',
  /** Title of the Tasks panel   */
  'panel.title': 'المهام',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'المُعينة',
  /** Label for the Active Document Tab */
  'tab.document.label': 'الوثيقة النشطة',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'المشتركة',
})
