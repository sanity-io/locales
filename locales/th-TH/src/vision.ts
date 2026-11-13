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
  'action.save-personal-copy': 'บันทึกสำเนาส่วนตัว',
  /** Label for saving a personal query */
  'action.save-personal-query': 'บันทึกเป็นส่วนตัว',
  /** Label for saving a query */
  'action.save-query': 'บันทึกคำถาม',
  /** Label for saving a shared query */
  'action.save-shared-query': 'บันทึกเป็นแบบแชร์',
  /** Label for unsharing a query */
  'action.unshare': 'ยกเลิกการแชร์',
  /** Label for updating a query */
  'action.update': 'อัปเดต',

  /** Label for actions user can take */
  'label.actions': 'การกระทำ',
  /** Label for all saved queries */
  'label.all': 'ทั้งหมด',
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
  /** Label for query type "shared" */
  'label.shared': 'แชร์แล้ว',
  /** Label for saved query type "team" */
  'label.team': 'ทีม',
  /** Label for untitled query fallback */
  'label.untitled-query': 'ไม่มีชื่อ',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'พารามิเตอร์ไม่ใช่ JSON ที่ถูกต้อง',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'พารามิเตอร์',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'คอลัมน์',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'บรรทัด',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'API เวอร์ชันนี้ไม่รองรับ perspective ที่ซับซ้อน โปรดใช้ {{apiVersion}} หรือใหม่กว่า',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'API เวอร์ชันนี้ไม่รองรับ content variant โปรดใช้ API เวอร์ชันทดลอง ({{apiVersion}})',
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
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'บันทึกสำเนาส่วนตัวแล้ว',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'คิวรีที่แชร์จะถูกจัดเก็บเป็นเอกสารใน dataset ของคุณ และนับรวมในโควตาเอกสารของคุณ',
  /** Save shared query success label */
  'save-query.shared-success': 'บันทึกคิวรีที่แชร์แล้ว',
  /** Save success label */
  'save-query.success': 'คำถามถูกบันทึกแล้ว',
  /** Save unshared query success label */
  'save-query.unshared-success': 'ย้ายคิวรีไปยังส่วนตัวแล้ว',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'เวอร์ชัน API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant': 'เมื่อเลือกตัวแปรแล้ว เวอร์ชัน API จะต้องเป็น vX',
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
  'settings.perspectives.scheduled-drafts': 'แบบร่างที่กำหนดการไว้',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'ใช้เครดิต AI หนึ่งเครดิตต่อคำขอ',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'เหลือเครดิต AI {{balance}} จาก {{quota}} เครดิตในเดือนนี้',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'ใช้เครดิต AI ไปแล้ว {{used}} เครดิตในเดือนนี้ ซึ่งมากกว่าโควต้า {{quota}} เครดิตอยู่ {{deficit}} เครดิต',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'องค์กรของคุณใช้เครดิต AI ไปแล้ว {{used}} จาก {{quota}} เครดิตในเดือนนี้ ดังนั้น Sanity Agent Actions จึงถูกหยุดชั่วคราวจนกว่าจะถึงเดือนถัดไปหรือจนกว่าจะมีการปรับเพิ่มวงเงินการใช้จ่าย',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'องค์กรของคุณถึงวงเงินการใช้จ่ายเครดิต AI แล้ว ดังนั้น Sanity Agent Actions จึงถูกหยุดชั่วคราวจนกว่าจะถึงเดือนถัดไปหรือจนกว่าจะมีการปรับเพิ่มวงเงิน',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'เครดิต AI ทำงานอย่างไร',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'จัดการเครดิต AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'เครดิต AI หมด',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'การใช้งาน AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'ใช้เครดิต AI ไปแล้ว {{used}} เครดิตในเดือนนี้',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'เวอร์ชัน API ที่ยังไม่สมบูรณ์',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip': 'คำสั่งค้นหาทำงานกับ API เวอร์ชัน {{version}} เลือกเพื่อเปลี่ยนแปลงในตัวเลือก',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'คำสั่งค้นหาทำงานกับ API CDN ด้วย API เวอร์ชัน {{version}} เลือกเพื่อเปลี่ยนแปลงในตัวเลือก',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'คำสั่งค้นหาทำงานกับ API เวอร์ชัน {{version}} ไม่ใช่ API CDN เนื่องจากไม่รองรับมุมมอง {{perspective}} เลือกเพื่อเปลี่ยนแปลงในตัวเลือก',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'เวอร์ชัน API ในตัวเลือกยังไม่สมบูรณ์ จึงไม่สามารถดึงข้อมูลใดๆ ได้จนกว่าจะกรอกให้ครบถ้วน',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'คำสั่งค้นหาทำงานกับ API เวอร์ชัน {{version}} ซึ่งเป็นสิ่งที่ตัวแปรที่เลือกต้องใช้',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'หลัง',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'ก่อน',
  /** What the Delta panel does */
  'vista.delta.description':
    'รันคำสั่งค้นหาในโหมดเดลต้า เช่นเดียวกับที่ webhook, listener และ Sanity Functions ที่ขับเคลื่อนด้วย GROQ ทำ: before() และ after() คือเอกสารก่อนและหลังการเปลี่ยนแปลง @ คือเอกสารหลังการเปลี่ยนแปลง และ delta::changedAny() จะเปรียบเทียบทั้งสอง โดยรันในเบราว์เซอร์ด้วย groq-js หากฝั่งใดว่างเปล่า หมายถึงไม่มีเอกสาร: การเปลี่ยนแปลงนั้นสร้างหรือลบเอกสารนั้น',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'รหัสเอกสาร',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty': 'โหลดประวัติของเอกสาร หรือเขียนเอกสารลงในช่องก่อนและหลัง',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'ไม่สามารถรันคำสั่งค้นหาในโหมดเดลต้าได้: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'หลัง ไม่ใช่ JSON ที่ถูกต้อง: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before ไม่ใช่ JSON ที่ถูกต้อง: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'โหลดประวัติ',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'ไม่สามารถโหลดประวัติได้: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': 'ตรงกัน: webhook หรือ function ที่มีตัวกรองนี้จะทำงานสำหรับการเปลี่ยนแปลงนี้',
  /** A delta filter that is false for the change */
  'vista.delta.no-match': 'ไม่ตรงกัน: webhook หรือ function ที่มีตัวกรองนี้จะไม่ทำงานสำหรับการเปลี่ยนแปลงนี้',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'แก้ไขคิวรีและพารามิเตอร์ของมันเพื่อรันในโหมด delta',
  /** Heading of the delta result */
  'vista.delta.result': 'ผลลัพธ์',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'ไม่มี: การเปลี่ยนแปลงนี้ลบเอกสาร',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'ไม่มี: การเปลี่ยนแปลงนี้สร้างเอกสาร',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'ปิดแผง',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'แผนคิวรีคือวิธีที่ Content Lake ใช้รันคิวรี: สิ่งที่มันอ่าน กรอง และจัดเรียงขณะอ่าน และสิ่งที่เหลือไว้สำหรับขั้นตอนถัดไป อธิบายให้ฉันฟังจะให้ Sanity Agent Actions อธิบายคิวรีและแผนของมันด้วยภาษาที่เข้าใจง่าย ซึ่งใช้ AI credit หนึ่งหน่วย',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'เขียนคิวรีเพื่ออธิบายมัน',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'อธิบายให้ฉันฟัง',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'ไม่สามารถอธิบายคิวรีได้: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'นับในดัชนี โดยไม่ต้องอ่านเอกสาร',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'ซับคิวรีทำงานเพียงครั้งเดียวสำหรับเอกสารทั้งหมด ในการดึงข้อมูลแบบกลุ่มเดียว ไม่ใช่ครั้งละหนึ่งเอกสาร',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'ส่วนหนึ่งของตัวกรองทำงานในหน่วยความจำหลังจากอ่านแล้ว: ทุกเอกสารที่ดัชนีปล่อยผ่านจะถูกอ่านก่อน ซึ่งจะช้าลงบนชุดข้อมูลขนาดใหญ่ การ join (->) และ function ในตัวกรองไม่สามารถใช้ดัชนีได้',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit': 'ดัชนีจัดเรียงและจำกัดเอกสารขณะที่กำลังอ่านอยู่',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'การตัดส่วน (slice) เกิดขึ้นในหน่วยความจำหลังจากอ่านแล้ว ไม่ใช่เป็นการจำกัดขณะอ่าน',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'การจัดเรียงเกิดขึ้นในหน่วยความจำหลังจากอ่านทุกรายการที่ตรงกันแล้ว จัดเรียงตามแอตทริบิวต์ที่ดัชนีสามารถจัดเรียงได้',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ ประสิทธิภาพสูง',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'สิ่งที่น่าสังเกต',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'แสดงแผนคิวรี',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'ไม่สามารถดึงแผนคิวรีได้: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'แผนการค้นหา',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'คัดลอกข้อมูลโค้ดไปยังคลิปบอร์ดแล้ว',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'คัดลอกข้อมูลโค้ด',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description': 'เรียกใช้คำค้นหานี้นอก studio ด้วยหนึ่งในข้อมูลโค้ดเหล่านี้',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'ส่งออกคำค้นหา',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'ชุดข้อมูลส่วนตัวต้องใช้โทเคน API ส่วนชุดข้อมูลสาธารณะสามารถตัดส่วนหัว Authorization ออกได้',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'คัดลอกโค้ดไปยังคลิปบอร์ดแล้ว',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'คัดลอกโค้ด',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty': 'ดึงข้อมูลคำค้นหาก่อน เพื่อให้มีผลลัพธ์สำหรับใช้สร้างประเภทข้อมูล',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'การประเมินสคีมาล้มเหลว: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'อนุมานจากผลลัพธ์ที่ดึงมา เนื่องจากไม่สามารถประเมินคำค้นหากับสคีมาของพื้นที่ทำงานได้',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema': 'อนุมานจากสคีมาของพื้นที่ทำงาน ด้วยวิธีเดียวกับที่ sanity typegen ใช้',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'ผลลัพธ์ที่แสดงถูกดึงมาสำหรับคำค้นหาหรือพารามิเตอร์อื่น ดึงข้อมูลคำค้นหาปัจจุบันก่อน เพื่อให้มีผลลัพธ์สำหรับใช้สร้างประเภทข้อมูล',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'ส่งออก TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'ส่งออก Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'เพิ่มลงในคำค้นหา',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'อยู่ในคำค้นหานี้',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'ประกาศใช้งาน',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'ต้องการ API เวอร์ชัน {{version}} ขึ้นไป',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'ในคำค้นหานี้',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'จากไลบรารีของคุณ',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'ฟังก์ชันที่กำหนดเอง ประกาศไว้ที่บรรทัด {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'ใช้งานได้เฉพาะในโหมด delta เท่านั้น ซึ่งเป็นที่ที่ webhook และ Sanity Functions รันตัวกรองของตน',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'แยกออกเป็นฟังก์ชัน',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'อยู่ในไลบรารีฟังก์ชันของคุณ ไม่ได้ประกาศไว้ในคำค้นหานี้',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'ข้อมูลอ้างอิงฟังก์ชัน GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'เก็บไว้ในเบราว์เซอร์นี้สำหรับทุกชุดข้อมูลของโปรเจ็กต์ การเติมข้อความจะแนะนำฟังก์ชันเหล่านี้ และ lint จะเสนอให้ประกาศฟังก์ชันที่คิวรีเรียกใช้',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty': 'บันทึกฟังก์ชันที่คิวรีประกาศไว้เพื่อใช้ในคิวรีอื่น',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'ไลบรารี',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'ประกาศฟังก์ชันที่กำหนดเองไว้ที่ด้านบนของคิวรี หรือวางเคอร์เซอร์ไว้ใน projection เช่น author->{name} แล้วกดปุ่มแยก (extract) เหนือตัวแก้ไข ({{shortcut}})',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'ในคิวรีนี้',
  /** Removes a function from the library */
  'vista.functions.remove': 'นำออกจากไลบรารี',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'แทนที่ในคิวรี',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'แสดง {{name}} ในตัวแก้ไข',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'บันทึกลงไลบรารี',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'บันทึกแล้ว',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'อัปเดตไลบรารี',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'สร้างคิวรี',
  /** Closes the generate query bar */
  'vista.generate.close': 'ปิด',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions จะเขียน GROQ จากคำอธิบายของคุณและประเภทเอกสาร และ Content Lake จะตรวจสอบแต่ละครั้งที่พยายาม โดยแต่ละครั้งใช้เครดิต AI หนึ่งหน่วย การดำเนินการนี้จะแทนที่คิวรีของแท็บนี้และรันทันที หากยกเลิก (undo) ในตัวแก้ไขจะนำคิวรีก่อนหน้ากลับมา',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'ไม่สามารถสร้างคิวรีได้',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'คิวรีควรดึงข้อมูลอะไร?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'เปิดความพยายามครั้งล่าสุด',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': 'ผู้เขียน 10 คนล่าสุด เรียงตามนามสกุลแล้วตามด้วยชื่อจริง',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'กำลังเขียนคิวรี…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'กำลังแก้ไขคิวรี (ครั้งที่ {{attempt}} จาก {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'สร้าง',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'พบใน CDN cache',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'เปลี่ยนแปลงแล้ว',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'การเปลี่ยนแปลง',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'ไม่สามารถแสดงการเปลี่ยนแปลงได้',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'ลองใหม่',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'เปรียบเทียบกับการดึงข้อมูลเมื่อ {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'พารามิเตอร์',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'คำสั่งคิวรี',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'มีการเปลี่ยนแปลงเฉพาะการจัดรูปแบบเท่านั้น',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'ผลลัพธ์',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL คำขอ',
  /** Empty state of the history panel */
  'vista.history.empty': 'ยังไม่มีการดึงข้อมูล',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'ล้มเหลว',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'ซ่อนไว้',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'กำลังซ่อน {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'มีการเปลี่ยนแปลงเฉพาะฟิลด์ที่ซ่อนอยู่เท่านั้น',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'คำสั่งคิวรีที่สร้างขึ้น',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'ลิงก์ที่เปิด',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'อัปเดตแบบเรียลไทม์',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'เริ่มการเชื่อมต่อแบบเรียลไทม์ใหม่',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'เริ่มการดึงข้อมูลแบบเรียลไทม์แล้ว',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'โหลดคิวรีแล้ว',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'ปุ่มดึงข้อมูล',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'มีการใช้การเปลี่ยนแปลงข้อมูล (Mutations)',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'มีการเปลี่ยนแปลงตัวเลือก',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL ที่วาง',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'กลับมาดึงข้อมูลอัตโนมัติอีกครั้ง',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'ปุ่มลัดแป้นพิมพ์',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'ผลลัพธ์เหมือนเดิม',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'แสดงรายการ',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'กำลังแสดง {{fields}} ซึ่งถูกซ่อนไว้โดยค่าเริ่มต้น',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'มีขนาดใหญ่เกินกว่าจะเปรียบเทียบได้',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'ไม่มีการเปลี่ยนแปลง',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'ไม่พบปัญหาจาก Lint ปัญหาที่ตัวตรวจสอบ GROQ linter พบในคำสั่งจะแสดงที่นี่ขณะที่คุณพิมพ์ เลือกรายการใดรายการหนึ่งเพื่อเลือกในตัวแก้ไข',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'บรรทัดที่ {{line}} คอลัมน์ {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'ข้อผิดพลาด',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'คำแนะนำ',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'ข้อมูล',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'คำเตือน',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'ใช้ {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'สด',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'ดึงข้อมูลแบบสด',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start': 'ดึงข้อมูล จากนั้นดึงข้อมูลอีกครั้งเมื่อเอกสารในผลลัพธ์มีการเปลี่ยนแปลง',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'หยุดการดึงข้อมูลเมื่อเอกสารในผลลัพธ์มีการเปลี่ยนแปลง การดึงข้อมูลยังคงทำงานได้ตามต้องการ สำหรับผลลัพธ์ที่ไม่มีการเปลี่ยนแปลงของเอกสารใดแตะต้อง เช่น now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'การอัปเดตแบบสดถูกตัดการเชื่อมต่อ: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'หยุดการแสดงผลสด',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'เพิ่มการมิวเทต',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'สร้างเอกสาร',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'ลบเอกสาร',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'ลบเอกสารในผลลัพธ์',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'แพตช์เอกสาร',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'แพตช์เอกสารในผลลัพธ์',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'นำไปใช้กับ {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'ไม่ได้มีการนำ mutation ไปใช้',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview': 'การนำไปใช้จะส่งสิ่งที่ dry run แสดงไว้ โปรดรันก่อนหนึ่งครั้ง',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'เพิ่ม _key ให้กับรายการในอาร์เรย์ที่ยังไม่มี',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description': 'สตูดิโอต้องการ _key บนทุกรายการในอาร์เรย์เพื่อแก้ไขได้',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'การเปลี่ยนแปลง',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'ไม่สามารถแสดงการเปลี่ยนแปลงได้',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'ลองอีกครั้ง',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'เขียน mutation ในรูปแบบที่ Mutations API รับ เป็นรายการ ได้แก่ create, createOrReplace, createIfNotExists, delete และ patch โดยระบุด้วย ID หรือคิวรี GROQ การรันแบบ dry run จะแสดงสิ่งที่ mutation เหล่านั้นจะทำกับแต่ละเอกสารโดยไม่เปลี่ยนแปลงอะไรจริง จากนั้นการนำไปใช้ (Apply) จะเขียนลงใน dataset ในธุรกรรมเดียว โดยใช้บัญชีของคุณ',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'สร้าง mutation',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions จะเขียน mutation จากคำอธิบายของคุณ เอกสารในผลลัพธ์และประเภทของเอกสารเหล่านั้น และ dry run จะตรวจสอบแต่ละความพยายาม โดยทุกความพยายามจะใช้เครดิต AI หนึ่งหน่วย mutation เหล่านี้จะแทนที่ mutation ที่มีอยู่ ซึ่งการยกเลิกจะนำสิ่งเหล่านี้กลับมา จะยังไม่มีการเขียนสิ่งใดจนกว่าคุณจะนำไปใช้',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'ไม่สามารถสร้าง mutation ได้',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'ต้องการให้ mutation ทำอะไร?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'เปลี่ยนชื่อเรื่องของเอกสารในผลลัพธ์เป็น foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'กำลังเขียน mutation…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry': 'กำลังแก้ไข mutation (ครั้งที่ {{attempt}} จาก {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'การเปลี่ยนแปลงไม่รวม {{fields}} เช่นเดียวกับที่ History ทำ',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'mutation ไม่ใช่ JSON ที่ถูกต้อง: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'Mutation {{index}} ต้องระบุอย่างใดอย่างหนึ่งเท่านั้นระหว่าง create, createOrReplace, createIfNotExists, delete หรือ patch',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutations',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'mutation ไม่มีผลกับเอกสารใดเลย',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'เขียนรายการของ mutation, mutation เดียว หรือ request body ที่มีรายการของ mutation',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'สร้าง',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'ลบ',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'ไม่มีการเปลี่ยนแปลง',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'อัปเดต',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'ทดลองรัน',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'การทดลองรันล้มเหลว',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'ทดลองรัน',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'มิวเทชัน ชุดข้อมูล หรือตัวเลือกมีการเปลี่ยนแปลงหลังจากการทดลองรันนี้ ให้รันอีกครั้งเพื่อใช้การเปลี่ยนแปลงเหล่านั้น',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'เปลี่ยนแปลง: {{changed}} · ไม่เปลี่ยนแปลง: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'แคช',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'ตรงกับแคช',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN ตอบกลับด้วยคำตอบที่แคชไว้จากตำแหน่งใกล้คุณ คำสั่งค้นหาไม่ได้ไปถึง API',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'ไม่ตรงกับแคช เท่าที่เซสชันนี้ทราบ',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'ไม่มี API ตอบกลับทุกคำขอด้วยเนื้อหาใหม่เสมอ',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty': 'ดึงข้อมูลคำสั่งค้นหาเพื่อดูว่าเอนด์พอยต์ใดเป็นผู้ตอบกลับ มาจากแคชหรือไม่ และรันที่ไหน',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'ตอบกลับโดย',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'คำสั่งค้นหารันที่',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'ไม่มีการรายงาน',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'เวลา',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': 'ไปกลับ {{e2e}}ms, บนเซิร์ฟเวอร์ {{server}}ms',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'รหัสการติดตาม (Trace ID)',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint': 'เปิดใช้งาน Use the API CDN ในตัวเลือก เพื่อส่งคำสั่งค้นหาผ่าน CDN',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'คุณ',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'ตามค่าของพื้นที่ทำงาน',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'ปักหมุดชุดข้อมูล',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'ปักหมุดแล้ว เวิร์กスペースอาจใช้ชุดข้อมูลอื่น',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'ใช้ชุดข้อมูลของเวิร์กスペース',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'รวม content source map',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'เพิ่ม resultSourceMap ลงในการตอบกลับ ซึ่งจะแสดงในแท็บ Content Source Map',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'ส่วนกลาง ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'ใช้ API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'สตูดิโอนี้ลงชื่อเข้าใช้คุณด้วยคุกกี้ ซึ่ง API CDN จะไม่ได้รับเลย โดยจะตอบกลับเสมือนเป็นผู้เยี่ยมชมที่ไม่ระบุตัวตน ด้วยสิ่งที่ชุดข้อมูลสาธารณะแสดง',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN ไม่ให้บริการฉบับร่างหรือรีลีส ดังนั้นคำค้นที่ใช้ perspective {{perspective}} จะไปที่ API ส่วนที่เผยแพร่แล้วหรือแบบ raw จะใช้ CDN',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'คำค้นไปที่ API ไม่ใช่ CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'ส่งคำค้นไปยัง API CDN เหมือนกับ useCdn: true ใน @sanity/client โดยใช้ perspective แบบเผยแพร่แล้วและแบบ raw: ฉบับร่างและรีลีสจะไปที่ API เสมอ คำตอบจะถูกแคชไว้นานสูงสุดหนึ่งนาที แผง Network จะแสดงเมื่อคำตอบมาจากแคช',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'ใช้ perspective ที่เผยแพร่แล้ว',
  /** Label of the variant field */
  'vista.options.variant-label': 'ตัวแปร',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'ส่วนกลาง ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'ส่วนกลาง (ไม่ได้เลือก)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'ไม่มี',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'ยุบแผง',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'ขยายแผง',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'อธิบาย',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Functions',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'ประวัติ',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Network',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'ตัวเลือก',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'การตอบกลับ',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'แผนผังแหล่งที่มาของเนื้อหา',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'เพิ่มรายการ',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'ค่า JSON ใดก็ได้; ข้อความอื่นจะถูกส่งเป็นสตริง',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty': 'คิวรีนี้ไม่มีการใช้พารามิเตอร์ แต่ละ $name ในนั้นจะมีช่องกรอกที่นี่',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json': 'พารามิเตอร์ไม่ใช่ JSON ที่ถูกต้อง แก้ไขในมุมมอง JSON เพื่อแก้ไขที่นี่',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'ไม่ใช่ true หรือ false; ส่งเป็น {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type': 'ไม่ใช่ประเภทเอกสารในเวิร์กスเปซนี้; ส่งไปอยู่ดี',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'ไม่ใช่จำนวนเต็ม ซึ่งการแบ่งส่วน (slice) ต้องการ',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'ไม่ใช่รายการ; ส่งเป็น {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'ไม่ใช่ตัวเลข; ส่งเป็นข้อความ',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'ไม่ใช่ค่าที่รู้จัก; ส่งไปอยู่ดี',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'ไม่ใช่ข้อความ; ส่งเป็น {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, รายการที่ {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'รายการ',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'ยังไม่ได้ตั้งค่า: คิวรีจะล้มเหลวจนกว่าจะมีค่า',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema': 'ประเภทข้อมูลมาจากคิวรีเพียงอย่างเดียว: ไม่สามารถอ่านสคีมาของเวิร์กスเปซได้',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'ยังไม่ได้ตั้งค่า',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'ตอนนี้',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'ลบ',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'ลบรายการ',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error': 'คิวรีไม่สามารถแยกวิเคราะห์ได้ จึงแสดงพารามิเตอร์โดยไม่มีประเภท',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'ค่า JSON ใดก็ได้',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true หรือ false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'วันที่และเวลา (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ไอดีเอกสาร',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'ประเภทเอกสาร',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'จำนวนเต็ม',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'รายการ แต่ละรายการเป็น {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'ตัวเลข',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'ข้อความ',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'ไม่ได้ใช้โดยคำสั่งค้นหา',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'ใช้ใน',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'ปรับขนาดให้พอดีกับเนื้อหา, {{height}} พิกเซล',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'ปรับขนาดพารามิเตอร์: ลากหรือใช้ปุ่มลูกศร; ดับเบิลคลิกหรือกด Enter เพื่อปรับให้พอดีกับเนื้อหาอีกครั้ง',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'แบบฟอร์ม',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'แก้ไขพารามิเตอร์เป็น',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'โหลดคำสั่งค้นหาจาก URL ที่วางแล้ว',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'URL ที่วางใช้ตัวแปร "{{variant}}" โปรดเลือกตัวแปรนี้ในแถบนำทางเพื่อรันคำสั่งค้นหาด้วยตัวแปรดังกล่าว',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'ชุดข้อมูล "{{dataset}}" ใน URL ที่วางไม่สามารถใช้งานได้ที่นี่ จึงยังคงใช้ชุดข้อมูลปัจจุบัน',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective': 'มุมมองใน URL ที่วางไม่รองรับที่นี่ จึงยังคงใช้มุมมองปัจจุบัน',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'URL ที่วางใช้ตัวแปร "{{variant}}" แต่พื้นที่ทำงานนี้ปิดใช้งานตัวแปรไว้ คำสั่งค้นหาจึงรันโดยไม่มีตัวแปรดังกล่าว',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'การดำเนินการคำสั่งค้นหา',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'การดึงข้อมูลใหม่โดยอัตโนมัติต้องใช้ API เวอร์ชัน v2021-03-25 หรือใหม่กว่า',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'คัดลอกคำสั่งค้นหาไปยังคลิปบอร์ดแล้ว',
  /** Menu item copying the query text */
  'vista.query.copy': 'คัดลอกคำสั่งค้นหา',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'ส่งออกคำสั่งค้นหา…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'จัดรูปแบบคำสั่งค้นหาให้สวยงาม',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'ไม่สามารถจัดรูปแบบคำสั่งค้นหาให้สวยงามได้',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'บันทึกคำสั่งคิวรี',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'หยุด',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'หยุดการดึงข้อมูล',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'คุณกำลังใช้เครื่องมือ Vision ที่ออกแบบใหม่ การสลับกลับจะเก็บแท็บและการตั้งค่าของคุณไว้ในเบราว์เซอร์นี้สำหรับครั้งต่อไปที่คุณลองใช้',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision ที่ออกแบบใหม่ (เบต้า)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'สลับไปใช้ Vision แบบคลาสสิก',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'ลองเลยตอนนี้',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'แท็บคิวรี การดึงข้อมูลแบบสด รายละเอียดการตอบกลับ และการส่งออก คุณสามารถสลับกลับได้ทุกเมื่อ',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'ไว้ก่อน',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'ลองใช้ Vision ที่ออกแบบใหม่',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'ลองใช้การออกแบบใหม่',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'สลับไปใช้ Vision ที่ออกแบบใหม่ ซึ่งอยู่ในเวอร์ชันเบต้า คุณสามารถสลับกลับได้ทุกเมื่อจากแถบด้านข้าง',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'ยังไม่มีการดึงข้อมูล',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'ขนาดเพย์โหลด',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'แท็กการซิงค์',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'ไม่มีแท็กการซิงค์ในการตอบกลับ',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'การดำเนินการกับผลลัพธ์',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'คัดลอกผลลัพธ์ไปยังคลิปบอร์ดแล้ว',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'คัดลอก {{path}} แล้ว',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'คัดลอกผลลัพธ์',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'คัดลอกค่า',
  /** Empty state of the result view */
  'vista.result.empty': 'เรียกใช้คิวรีเพื่อดูผลลัพธ์ที่นี่',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'ส่งออก CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'ส่งออก JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'ส่งออก TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'ส่งออก Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'ซ่อนสิ่งที่มีอยู่',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'ปรับให้พอดีกับมุมมอง',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'กราฟผลลัพธ์: ลากเพื่อเลื่อน เลื่อนล้อเพื่อซูม; เมื่ออยู่ในโฟกัส ใช้ปุ่มลูกศรเพื่อเลื่อน + และ - เพื่อซูม 0 เพื่อปรับให้พอดี',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'มุมมองแบบต้นไม้และ JSON แสดงข้อมูลทั้งหมด',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'วาดเฉพาะอ็อบเจ็กต์และอาร์เรย์ {{nodes}} รายการแรกเท่านั้น',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': 'แสดงรายการเฉพาะ {{rows}} รายการแรกสำหรับ {{nodes}}',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} รายการ)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'ผลลัพธ์',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'ซูมเข้า',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'ซูมออก',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'กราฟ',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'มุมมองผลลัพธ์',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'ต้นไม้',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'ยังไม่มีการบันทึกคิวรี บันทึกคิวรีปัจจุบันด้วยปุ่ม +',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'ไม่มีคิวรีที่ตรงกับการค้นหาของคุณ',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'โหลดลงในแท็บปัจจุบัน',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'เปิดในแท็บใหม่',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'เปลี่ยนชื่อ',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'บันทึกคิวรีปัจจุบัน',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'คิวรีที่บันทึกไว้นี้ใช้ variant "{{variant}}"; เลือก variant นี้ในแถบนำทางเพื่อรันคิวรีด้วย variant ดังกล่าว',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'ชุดข้อมูล (dataset) "{{dataset}}" ของคิวรีที่บันทึกไว้นี้ไม่สามารถใช้งานได้ที่นี่ จึงยังคงใช้ชุดข้อมูลปัจจุบัน',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'คิวรีที่บันทึกไว้นี้ใช้ variant "{{variant}}"; เวิร์กスペースนี้ปิดการใช้งาน variant ไว้ ดังนั้นคิวรีจะรันโดยไม่มี variant นั้น',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'ล้างข้อมูลที่จัดเก็บไว้',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'ใช่ ล้างที่จัดเก็บข้อมูล',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'ลบคิวรีที่บันทึกไว้ส่วนตัวของคุณและคลังฟังก์ชัน รีเซ็ตแท็บที่เปิดอยู่และค่าเริ่มต้นเหล่านี้ในเบราว์เซอร์นี้ และกลับไปยังเครื่องมือ Vision แบบคลาสสิก คิวรีที่แชร์จะยังคงอยู่',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'ไม่สามารถล้างคิวรีที่บันทึกไว้ได้',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'ล้างที่จัดเก็บข้อมูลแล้ว',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description': 'ค่าเริ่มต้นสำหรับแท็บใหม่ แท็บที่เปิดอยู่จะคงตัวเลือกของตนเองไว้',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'หนึ่งพาธของฟิลด์ต่อบรรทัด พาธจะตรงกันในทุกระดับความลึกของผลลัพธ์ ดังนั้น _rev จะซ่อนการแก้ไขของเอกสารทุกฉบับในนั้น แต่ละ diff ยังสามารถแสดงได้อยู่',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'รีเซ็ตเป็นค่าเริ่มต้น',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'ฟิลด์ที่ซ่อนจาก diff ของ History',
  /** Title of the settings dialog */
  'vista.settings.title': 'การตั้งค่า',
  /** Empty state of the shared queries panel */
  'vista.shared.empty': 'ยังไม่มีคิวรีที่แชร์ แชร์คิวรีที่บันทึกไว้เพื่อให้ทุกคนที่ใช้ชุดข้อมูลนี้สามารถใช้งานได้',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'ปิดไดอะล็อกและเมนู',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'เติมชื่อฟังก์ชันให้สมบูรณ์',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'คัดลอกคิวรี',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'แยก projection ที่ตำแหน่งเคอร์เซอร์ออกเป็นฟังก์ชัน',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'ดึงข้อมูลคิวรี',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'ไปยังผลการตรวจสอบ lint ถัดไป',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'จัดรูปแบบคิวรีให้สวยงาม',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'แป้นพิมพ์ลัด',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'ย่อแถบด้านข้าง',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'ขยายแถบด้านข้าง',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'แถบด้านข้างของ Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'คิวรีที่บันทึกไว้',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'การตั้งค่า',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'คิวรีที่แชร์',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'แป้นพิมพ์ลัด',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'ไม่มีแผนที่แหล่งที่มาของเนื้อหาในการตอบกลับ เปิดใช้งาน "Include content source map" ภายใต้ Options แล้วดึงข้อมูลอีกครั้ง',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'ปรับขนาดแผงรายละเอียดการตอบกลับ: ลากหรือใช้ปุ่มลูกศร; Home และ End ไปยังขอบเขต, Enter รีเซ็ต',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'ปรับขนาดแผงคำขอและการตอบกลับ: ลากหรือใช้ปุ่มลูกศร; Home และ End ไปยังขอบเขต, Enter รีเซ็ต',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'ปิดแท็บ',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'แท็บคำสั่งค้นหา',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'แท็บใหม่',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'ชื่อแท็บ',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'คำสั่งค้นหาที่ยังไม่มีชื่อ',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'ตรวจสอบคำสั่งค้นหา GROQ ใน Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'อธิบายสคีมาใน Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'อธิบายแผนการทำงานของคำสั่งค้นหา GROQ ใน Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'อ่านแท็บ Vision ที่เปิดอยู่',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'เปิดคำสั่งค้นหา GROQ ใน Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'แสดงตัวอย่างการเปลี่ยนแปลงข้อมูล (mutations) ใน Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'เรียกใช้คำสั่งค้นหา GROQ ใน Vision',
})
