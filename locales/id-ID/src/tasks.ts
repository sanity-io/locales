import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The label for the create task action */
  'actions.create.text': 'Buat tugas baru',
  /** The label for the open tasks panel action */
  'actions.open.text': 'Tugas',

  /** The label for the button to create a new task */
  'buttons.create.text': 'Buat Tugas',
  /** The label for the button to discard changes */
  'buttons.discard.text': 'Buang',
  /** The label for the button to open the draft */
  'buttons.draft.text': 'Draf',
  /** The label for the button to create a new task */
  'buttons.new.text': 'Tugas baru',
  /** The text for tooltip in the create a new task button when mode is upsell */
  'buttons.new.upsell-tooltip': 'Tingkatkan untuk membuat tugas',
  /** The label for the button that will navigate to the next task */
  'buttons.next.tooltip': 'Pergi ke tugas selanjutnya',
  /** The label for the button that will previous to the next task */
  'buttons.previous.tooltip': 'Pergi ke tugas sebelumnya',

  /** Text for the remove task dialog asking for confirmation of deletion */
  'dialog.remove-task.body': 'Setelah dihapus, tugas tidak dapat dipulihkan.',
  /** The label for the cancel button on the remove task dialog */
  'dialog.remove-task.buttons.cancel.text': 'Batal',
  /** The label for the confirmation button on the remove task dialog */
  'dialog.remove-task.buttons.confirm.text': 'Hapus',
  /** The title for the remove task dialog */
  'dialog.remove-task.title': 'Hapus tugas ini?',

  /** The text used as a placeholder for the footer action in a document with multiple tasks */
  'document.footer.open-tasks.placeholder_other': 'Buka tugas',
  /** The label used in the button in the footer action in a document with multiple tasks */
  'document.footer.open-tasks.text_other': '{{count}} tugas terbuka',

  /** The heading in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.heading': 'Anda belum ditugaskan tugas apa pun',
  /** The text in the tasks sidebar, in the assigned tab, when the user hasn't been assigned to any task*/
  'empty-state.list.assigned.text': 'Setelah Anda ditugaskan tugas, mereka akan muncul di sini',
  /** The text in the tasks sidebar button any of the empty states is rendered*/
  'empty-state.list.create-new': 'Buat tugas baru',
  /** The heading in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.heading': 'Dokumen ini belum memiliki tugas',
  /** The text in the tasks sidebar, in the document tab, when the document doesn't have any task*/
  'empty-state.list.document.text':
    'Setelah dokumen memiliki tugas yang terhubung, mereka akan ditampilkan di sini.',
  /** The heading in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.heading': 'Buka dokumen untuk melihat tugasnya',
  /** The text in the tasks sidebar, when viewing the document tab, but there is not an active document*/
  'empty-state.list.no-active-document.text':
    'Tugas pada dokumen aktif Anda akan ditampilkan di sini.',
  /** The heading in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.heading': 'Anda belum berlangganan tugas apa pun',
  /** The text in the tasks sidebar, in the subscriber tab, when the user is not subscribed to any task*/
  'empty-state.list.subscribed.text':
    'Ketika Anda membuat, memodifikasi, atau mengomentari tugas, Anda akan berlangganan secara otomatis',
  /** The heading in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.heading': 'Tidak ada tugas yang selesai',
  /** The text in the tasks sidebar, in the assigned tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.assigned.text':
    'Tugas yang Anda tandai selesai akan muncul di sini',
  /** The heading in the tasks sidebar, in the document tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.document.heading': 'Tidak ada tugas yang selesai',
  /** The heading in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.heading': 'Tidak ada tugas yang selesai',
  /** The text in the tasks sidebar, in the subscribed tab, under the closed details, when it's empty.*/
  'empty-state.status.list.closed.subscribed.text':
    'Tugas yang Anda ikuti dan tandai selesai akan muncul di sini',
  /** The heading in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.heading': 'Anda sudah menyelesaikan semuanya',
  /** The text in the tasks sidebar, in the assigned tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.assigned.text':
    'Tugas baru yang ditugaskan kepada Anda akan muncul di sini',
  /** The heading in the tasks sidebar, in the document tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.document.heading': 'Tidak ada tugas pada dokumen ini',
  /** The heading in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.heading': 'Tidak ada tugas yang diikuti',
  /** The text in the tasks sidebar, in the subscribed tab, under the open details, when it's empty.*/
  'empty-state.status.list.open.subscribed.text': 'Tugas yang Anda ikuti akan muncul di sini',

  /** Text used in the assignee input when there is no user assigned */
  'form.input.assignee.no-user-assigned.text': 'Tidak ditugaskan',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.no-user-assigned.tooltip': 'Tetapkan penugasan',
  /** Text used in the assignee input when searching and no users are found */
  'form.input.assignee.search.no-users.text': 'Tidak ada pengguna yang ditemukan',
  /** Placeholder text used in the search box in the assignee input */
  'form.input.assignee.search.placeholder': 'Pilih penugasan',
  /** Text used in the assignee input when user is not authorized */
  'form.input.assignee.unauthorized.text': 'Tidak berwenang',
  /** Text used in the assignee input tooltip when there is no user assigned */
  'form.input.assignee.user-assigned.tooltip': 'Ubah penugasan',
  /** Text used in the assignee input when user is not found */
  'form.input.assignee.user-not-found.text': 'Pengguna tidak ditemukan',
  /** The label used in the create more toggle */
  'form.input.create-more.text': 'Buat lebih banyak',
  /** The label used in the date input button tooltip when it's empty */
  'form.input.date.buttons.empty.tooltip': 'Tetapkan tanggal jatuh tempo',
  /** The label used in the date input to remove the current value */
  'form.input.date.buttons.remove.text': 'Hapus',
  /** The label used in the date input button tooltip when it has value */
  'form.input.date.buttons.tooltip': 'Ubah tanggal jatuh tempo',
  /** Placeholder text used in the description input */
  'form.input.description.placeholder': 'Tambahkan deskripsi',
  /**  Text used in the tooltip in the status change button  */
  'form.input.status.button.tooltip': 'Ubah status',
  /** The label used in the target input to remove the current value */
  'form.input.target.buttons.remove.text': 'Hapus konten target',
  /** The text used in the target input when encountering a schema error */
  'form.input.target.error.schema-not-found': 'Skema tidak ditemukan',
  /** The placeholder text used in the target input for the search component */
  'form.input.target.search.placeholder': 'Pilih dokumen target',
  /** The placeholder text for the title input */
  'form.input.title.placeholder': 'Judul tugas',
  /** The status error message presented when the user does not supply a title */
  'form.status.error.title-required': 'Judul diperlukan',
  /** The status message upon successful creation of a task */
  'form.status.success': 'Tugas telah dibuat',

  /** The text displayed when no tasks are found */
  'list.empty.text': 'Tidak ada tugas',
  /** The text displayed at the bottom of the tasks list inviting users provide feedback */
  'list.feedback.text':
    'Bantu kami untuk meningkatkan, <Link>berikan umpan balik tentang Tugas</Link> ',

  /** The label for the copy link menu item */
  'menuitem.copylink.text': 'Salin tautan ke tugas',
  /** The label for the delete task menu item */
  'menuitem.delete.text': 'Hapus tugas',
  /** The label for the duplicate task menu item */
  'menuitem.duplicate.text': 'Duplikat tugas',
  /** The text for the duplicate task menu item tooltip when mode is upsell */
  'menuitem.duplicate.upsell-tooltip': 'Tingkatkan untuk menduplikat tugas',

  /** Fragment used to construct the first entry in the activity log */
  'panel.activity.created-fragment': 'membuat tugas ini',
  /** The title of the activity section of the task */
  'panel.activity.title': 'Aktivitas',
  /** The text used in the activity log when unable to find the user */
  'panel.activity.unknown-user': 'Pengguna tidak dikenal',
  /** The tooltip for the close button for the task panel */
  'panel.close.tooltip': 'Tutup bilah sisi',
  /** The placeholder text for the comment text box */
  'panel.comment.placeholder': 'Tambahkan komentar...',
  /** The placeholder text for the comment text box when mode is upsell */
  'panel.comment.placeholder.upsell': 'Tingkatkan untuk memberikan komentar pada tugas',
  /** The title used in the task panel when showing the create task form */
  'panel.create.title': 'Buat',
  /** The title used in the drafts pulldown */
  'panel.drafts.title': 'Draf',
  /** The tooltip for the task navigation component */
  'panel.navigation.tooltip': 'Buka tugas',
  /** Title of the Tasks panel   */
  'panel.title': 'Tugas',

  /** Label for the Assigned Tab */
  'tab.assigned.label': 'Ditugaskan',
  /** Label for the Active Document Tab */
  'tab.document.label': 'Dokumen Aktif',
  /** Label for the Subscribed Tab */
  'tab.subscribed.label': 'Berlangganan',

  /** Tooltip for the tasks navbar icon */
  'toolbar.tooltip': 'Tugas',
})
