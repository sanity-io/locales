import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  "action.copy-url-to-clipboard": "คัดลอกไปยังคลิปบอร์ด",
  /** Label for stopping an ongoing listen operation */
  "action.listen-cancel": "หยุด",
  /** Label for setting up a listener */
  "action.listen-execute": "ฟัง",
  /** Label for cancelling an ongoing query */
  "action.query-cancel": "ยกเลิก",
  /** Label for executing the query, eg doing a fetch */
  "action.query-execute": "ดึงข้อมูล",

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  "label.new": "ใหม่",

  /** Error message for when the "Params" input are not a valid json */
  "params.error.params-invalid-json": "พารามิเตอร์ไม่ใช่ JSON ที่ถูกต้อง",
  /** Label for "Params" (parameters) editor/input */
  "params.label": "พารามิเตอร์",

  /** Label for 'Column' indicator when there is an error within the query */
  "query.error.column": "คอลัมน์",
  /** Label for 'Line' indicator when there is an error within the query */
  "query.error.line": "บรรทัด",
  /** Label for "Query" editor/input */
  "query.label": "คิวรี",
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  "query.url": "URL คิวรี",

  /** Label for "End to End time" information of the fetched query */
  "result.end-to-end-time-label": "เวลาจากต้นจนจบ",
  /** Label for "Execution time" information of the fetched query */
  "result.execution-time-label": "เวลาในการประมวลผล",
  /** Label for "Result" explorer/view */
  "result.label": "ผลลัพธ์",
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  "result.timing-not-applicable": "ไม่มีข้อมูล",

  /** Label for the "API version" dropdown in settings */
  "settings.api-version-label": "เวอร์ชัน API",
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  "settings.custom-api-version-label": "เวอร์ชัน API ที่กำหนดเอง",
  /** Label for the "Dataset" dropdown in vision settings */
  "settings.dataset-label": "Dataset",
  /** Error label for when the API version in 'Custom API version' input is invalid */
  "settings.error.invalid-api-version": "เวอร์ชัน API ไม่ถูกต้อง",
  /** Label for the "other" versions within the "API version" dropdown */
  "settings.other-api-version-label": "อื่นๆ",
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  "settings.perspective-label": "Perspective",
  /** Call to action to read the docs related to "Perspectives" */
  "settings.perspectives.action.docs-link": "อ่านเอกสาร",
  /** Description for popover that explains what "Perspectives" are */
  "settings.perspectives.description":
    'Perspectives ช่วยให้คุณสามารถทำคิวรีกับ "มุมมอง" ที่แตกต่างกันของเนื้อหาใน dataset ของคุณ',
  /** Title for popover that explains what "Perspectives" are */
  "settings.perspectives.title": "Perspectives",
});
