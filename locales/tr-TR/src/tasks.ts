import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Yeni görev oluştur',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Görevler',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Görev Oluştur',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'İptal Et',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Taslak',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Yeni görev',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Görev oluşturmak için yükseltme yapın',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Sonraki göreve git',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Önceki göreve git',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Bu görevi silmek istediğinizden emin misiniz?',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'İptal',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Kaldır',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Görevi Kaldır',

  /** The text used as a placeholder for the footer action in a document with a single task */
  'document.footer.open-tasks.placeholder_one': 'Görevi aç',
  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Görevleri aç',
  /** The label used in the button in the footer action in a document with a single task */
  'document.footer.open-tasks.text_one': '{{count}} açık görev',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} açık görev',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Henüz bir göreve atanmadınız',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Atandığınız görevler burada gösterilecek',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Yeni görev oluştur',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Bu belgenin henüz bir görevi yok',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text': 'Bir belgeye görevler bağlandığında, burada gösterilecekler.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Görevini görmek için bir belge açın',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text': 'Aktif belgenizdeki görevler burada gösterilecek.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Herhangi bir göreve abone olmadınız',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Bir görev oluşturduğunuzda, değiştirdiğinizde veya yorum yaptığınızda otomatik olarak abone olursunuz',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Tamamlanmış görev yok',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text': 'Tamamlanan görevleriniz burada gösterilecek',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Tamamlanan görev yok',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Tamamlanan görev yok',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Abone olduğunuz ve tamamlanan görevler burada gösterilecek',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Her şey güncel',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text': 'Size atanan yeni görevler burada gösterilecek',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Bu belgede görev yok',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Abone olunan görev yok',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Abone olduğunuz görevler burada gösterilecek',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Atanmamış',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Atanan kişiyi belirleyin',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Kullanıcı bulunamadı',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Kullanıcı adı seçin',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Yetkisiz',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Atanan kişiyi değiştirin',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Kullanıcı bulunamadı',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Daha fazla oluştur',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Bitiş tarihini belirleyin',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Kaldır',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Bitiş tarihini değiştirin',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Açıklama ekleyin',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Durumu değiştirin',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Hedef içeriği kaldır',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Şema bulunamadı',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Belge seçin',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Görev başlığı',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Başlık gereklidir',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Görev oluşturuldu',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Görev yok',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text': 'Bize yardımcı olun, <Link>Görevler hakkında geri bildirim paylaşın</Link>',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Göreve bağlantıyı kopyala',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Görevi sil',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Görevi kopyala',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Görevleri çoğaltmak için yükseltme yapın',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'bu görevi oluşturdu',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivite',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Bilinmeyen kullanıcı',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Kenar çubuğunu kapat',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Yorum ekle...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Görevler hakkında yorum yapmak için yükseltme yapın',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Oluştur',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Taslaklar',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Görevleri aç',
  /** Title of the Tasks panel   */
  'panel.title': 'Görevler',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Atanan',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Aktif Belge',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Abone Olunan',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': undefined, // 'Tasks'
})
