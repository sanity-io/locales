import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'คัดลอกไปยังคลิปบอร์ด',
  /** Label for deleting a query */
  'action.delete': 'ลบ',
  /** Label for editing a query's title */
  'action.edit-title': 'แก้ไขชื่อ',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'หยุด',
  /** Label for setting up a listener */
  'action.listen-execute': 'ฟัง',
  /** Label for query loading table */
  'action.load-queries': 'โหลดคำถาม',
  /** Label for loading a query */
  'action.load-query': 'โหลดคำถาม',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'ยกเลิก',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'ดึงข้อมูล',
  /** Label for saving a query */
  'action.save-query': 'บันทึกคำถาม',
  /** Label for updating a query */
  'action.update': 'อัปเดต',

  /** Label for actions user can take */
  'label.actions': 'การกระทำ',
  /** Label for saved queries that have been edited */
  'label.edited': 'ที่แก้ไขแล้ว',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'ใหม่',
  /** Label for query type "personal" */
  'label.personal': 'ส่วนตัว',
  /** Label for savedAt date */
  'label.saved-at': 'บันทึกเมื่อ',
  /** Saved queries */
  'label.saved-queries': 'คำถามที่บันทึกไว้',
  /** Search queries */
  'label.search-queries': 'ค้นหาคำถาม',
  /** Share query */
  'label.share': 'แชร์',
  /** Label for saved query type "team" */
  'label.team': 'ทีม',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'พารามิเตอร์ไม่ใช่ JSON ที่ถูกต้อง',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'พารามิเตอร์',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'คอลัมน์',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'บรรทัด',
  /** Label for "Query" editor/input */
  'query.label': 'คิวรี',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL คิวรี',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'เวลาจากต้นจนจบ',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'เวลาในการประมวลผล',
  /** Label for "Result" explorer/view */
  'result.label': 'ผลลัพธ์',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'ไม่สามารถเข้ารหัสผลลัพธ์เป็น CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'บันทึกผลลัพธ์เป็น <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'ไม่มีข้อมูล',

  /** Query already saved error label */
  'save-query.already-saved': 'คำถามถูกบันทึกไว้แล้ว',
  /** Save error label */
  'save-query.error': 'เกิดข้อผิดพลาดในการบันทึกคำถาม',
  /** Save success label */
  'save-query.success': 'คำถามถูกบันทึกแล้ว',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'เวอร์ชัน API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'เวอร์ชัน API ที่กำหนดเอง',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'เวอร์ชัน API ไม่ถูกต้อง',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'อื่นๆ',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'แง่มุม "<code>previewDrafts</code>" ได้เปลี่ยนชื่อเป็น "<code>drafts</code>" และไม่ได้ใช้งานแล้ว การเปลี่ยนแปลงนี้มีผลกับทุกเวอร์ชันที่รองรับแง่มุม (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'อ่านเอกสาร',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'ไม่มีแง่มุม (ค่าเริ่มต้น API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives ช่วยให้คุณสามารถทำคิวรีกับ "มุมมอง" ที่แตกต่างกันของเนื้อหาใน dataset ของคุณ',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'แง่มุมเริ่มต้นจะเปลี่ยนจาก "<code>raw</code>" เป็น "<code>published</code>" ในเวอร์ชัน API ที่จะมาถึง กรุณาดูเอกสารเพิ่มเติมสำหรับรายละเอียด.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'ปักหมุดรีลีส',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': undefined, // 'Scheduled drafts'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
