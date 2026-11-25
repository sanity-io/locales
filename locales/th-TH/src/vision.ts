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
  'action.load-queries': 'โหลดคิวรี',
  /** Label for loading a query */
  'action.load-query': 'โหลดคิวรี',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'ยกเลิก',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'ดึงข้อมูล',
  /** Label for saving a query */
  'action.save-personal-copy': 'บันทึกสำเนาส่วนตัว',
  /** Label for saving a personal query */
  'action.save-personal-query': 'บันทึกเป็นส่วนตัว',
  /** Label for saving a query */
  'action.save-query': 'บันทึกคิวรี',
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
  'label.saved-queries': 'คิวรีที่บันทึกไว้',
  /** Search queries */
  'label.search-queries': 'ค้นหาคิวรี',
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
    'API เวอร์ชันนี้ไม่รองรับ content variant โปรดใช้ {{apiVersion}} หรือใหม่กว่า',
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
  'save-query.already-saved': 'คิวรีถูกบันทึกไว้แล้ว',
  /** Save error label */
  'save-query.error': 'เกิดข้อผิดพลาดในการบันทึกคิวรี',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'บันทึกสำเนาส่วนตัวแล้ว',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'คิวรีที่แชร์จะถูกจัดเก็บเป็นเอกสารใน dataset ของคุณ และนับรวมในโควตาเอกสารของคุณ',
  /** Save shared query success label */
  'save-query.shared-success': 'บันทึกคิวรีที่แชร์แล้ว',
  /** Save success label */
  'save-query.success': 'คิวรีถูกบันทึกแล้ว',
  /** Save unshared query success label */
  'save-query.unshared-success': 'ย้ายคิวรีไปยังส่วนตัวแล้ว',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'เวอร์ชัน API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'เมื่อเลือก variant แล้ว เวอร์ชัน API จะต้องเป็น {{apiVersion}}',
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
    'perspective "<code>previewDrafts</code>" ได้เปลี่ยนชื่อเป็น "<code>drafts</code>" และเลิกใช้งานแล้ว การเปลี่ยนแปลงนี้มีผลกับทุกเวอร์ชันที่รองรับ perspective (>= v2021-03-25)',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'อ่านเอกสาร',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'ไม่มี perspective (ค่าเริ่มต้นของ API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives ช่วยให้คุณสามารถทำคิวรีกับ "มุมมอง" ที่แตกต่างกันของเนื้อหาใน dataset ของคุณ',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'perspective เริ่มต้นจะเปลี่ยนจาก "<code>raw</code>" เป็น "<code>published</code>" ในเวอร์ชัน API ที่จะมาถึง โปรดดูรายละเอียดเพิ่มเติมในเอกสาร',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'ปักหมุดรีลีส',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'แบบร่างที่กำหนดการไว้',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'ใช้เครดิต AI หนึ่งหน่วยต่อคำขอ',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'เหลือเครดิต AI {{balance}} จาก {{quota}} หน่วยในเดือนนี้',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'ใช้เครดิต AI ไปแล้ว {{used}} หน่วยในเดือนนี้ ซึ่งเกินจาก {{quota}} หน่วยที่รวมอยู่ในแพ็กเกจ {{deficit}} หน่วย',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'องค์กรของคุณใช้เครดิต AI ไปแล้ว {{used}} จาก {{quota}} หน่วยในเดือนนี้ ดังนั้น Sanity Agent Actions จึงถูกระงับไว้จนถึงเดือนถัดไป หรือจนกว่าจะมีการปรับเพิ่มวงเงินการใช้จ่าย',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'องค์กรของคุณถึงวงเงินการใช้จ่ายเครดิต AI แล้ว ดังนั้น Sanity Agent Actions จึงถูกระงับไว้จนถึงเดือนถัดไป หรือจนกว่าจะมีการปรับเพิ่มวงเงิน',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'เครดิต AI ทำงานอย่างไร',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'จัดการเครดิต AI',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'เครดิต AI หมด',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'การใช้งาน AI',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'ใช้เครดิต AI ไปแล้ว {{used}} หน่วยในเดือนนี้',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'เวอร์ชัน API ยังไม่สมบูรณ์',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip': 'คิวรีรันกับ API เวอร์ชัน {{version}} เลือกเพื่อเปลี่ยนในตัวเลือก',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'คิวรีรันผ่าน API CDN ด้วย API เวอร์ชัน {{version}} เลือกเพื่อเปลี่ยนในตัวเลือก',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'คิวรีรันกับ API เวอร์ชัน {{version}} ไม่ใช่ API CDN เนื่องจากไม่รองรับ perspective {{perspective}} เลือกเพื่อเปลี่ยนในตัวเลือก',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'เวอร์ชัน API ในตัวเลือกยังไม่สมบูรณ์ จึงไม่สามารถดึงข้อมูลได้จนกว่าจะกรอกให้ครบถ้วน',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked': 'คิวรีรันกับ API เวอร์ชัน {{version}} ซึ่ง variant ที่เลือกต้องการ',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'หลัง',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'ก่อน',
  /** What the Delta panel does */
  'vision.delta.description':
    'เรียกใช้คิวรีในโหมดเดลต้า เช่นเดียวกับที่ webhook, listener และ Sanity Functions ที่ขับเคลื่อนด้วย GROQ ทำงาน: before() และ after() คือเอกสารก่อนและหลังการเปลี่ยนแปลง @ คือเอกสารหลังการเปลี่ยนแปลง และ delta::changedAny() ใช้เปรียบเทียบทั้งสอง การทำงานนี้เกิดขึ้นในเบราว์เซอร์ด้วย groq-js หากฝั่งใดว่างเปล่าหมายถึงไม่มีเอกสาร: การเปลี่ยนแปลงนั้นสร้างหรือลบเอกสารนั้น',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'รหัสเอกสาร',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty': 'โหลดประวัติของเอกสาร หรือเขียนเอกสารลงในช่องก่อนและหลัง',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'ไม่สามารถเรียกใช้คิวรีในโหมดเดลต้าได้: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'After ไม่ใช่ JSON ที่ถูกต้อง: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before ไม่ใช่ JSON ที่ถูกต้อง: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'โหลดประวัติ',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'ไม่สามารถโหลดประวัติได้: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches': 'ตรงกัน: webhook หรือ function ที่มีตัวกรองนี้จะทำงานสำหรับการเปลี่ยนแปลงนี้',
  /** A delta filter that is false for the change */
  'vision.delta.no-match': 'ไม่ตรงกัน: webhook หรือ function ที่มีตัวกรองนี้จะไม่ทำงานสำหรับการเปลี่ยนแปลงนี้',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'แก้ไขคิวรีและพารามิเตอร์เพื่อรันในโหมดเดลต้า',
  /** Heading of the delta result */
  'vision.delta.result': 'ผลลัพธ์',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'ไม่มี: การเปลี่ยนแปลงนี้ลบเอกสาร',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'ไม่มี: การเปลี่ยนแปลงนี้สร้างเอกสาร',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'ปิดแผง',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'แผนการ query คือวิธีที่ Content Lake รัน query นั้น ได้แก่ สิ่งที่อ่าน กรอง และจัดเรียงระหว่างการอ่าน และสิ่งที่เหลือไว้สำหรับขั้นตอนถัดไป ปุ่ม Explain this to me จะให้ Sanity Agent Actions อธิบาย query และแผนการของมันด้วยถ้อยคำง่ายๆ ซึ่งจะใช้เครดิต AI หนึ่งหน่วย',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'เขียนคิวรีเพื่ออธิบาย',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'อธิบายให้ฉันฟัง',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'ไม่สามารถอธิบายคิวรีได้: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'นับจากดัชนีโดยไม่ต้องอ่านเอกสาร',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'subquery นี้รันเพียงครั้งเดียวสำหรับเอกสารทั้งหมด ในการดึงข้อมูลแบบรวมชุดเดียว ไม่ใช่รันทีละเอกสาร',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'ตัวกรองบางส่วนทำงานในหน่วยความจำหลังการอ่าน: เอกสารทุกฉบับที่ดัชนีปล่อยผ่านจะถูกอ่านก่อน ซึ่งจะช้าลงเมื่อชุดข้อมูลมีขนาดใหญ่ การ join (->) และฟังก์ชันในตัวกรองไม่สามารถใช้ดัชนีได้',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit': 'ดัชนีจะจัดเรียงและจำกัดจำนวนเอกสารระหว่างการอ่าน',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'การตัดส่วนข้อมูล (slice) ทำในหน่วยความจำหลังการอ่าน ไม่ใช่เป็นการจำกัดระหว่างการอ่าน',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'การจัดเรียงเกิดขึ้นในหน่วยความจำหลังจากอ่านทุกรายการที่ตรงกันแล้ว ควรจัดเรียงตามแอตทริบิวต์ที่ดัชนีสามารถจัดเรียงได้',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'GROQ ประสิทธิภาพสูง',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'สิ่งที่น่าสนใจ',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'แสดงแผนการคิวรี',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'ไม่สามารถดึงแผนการคิวรีได้: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'แผนการคิวรี',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'คัดลอกโค้ดตัวอย่างไปยังคลิปบอร์ดแล้ว',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'คัดลอกโค้ดตัวอย่าง',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description': 'เรียกใช้คิวรีนี้นอก studio ด้วยโค้ดตัวอย่างใดตัวอย่างหนึ่งต่อไปนี้',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'คิวรีและพารามิเตอร์มีความยาว {{size}} ตัวอักษรในรูปแบบ search params; เมื่อถึง {{limit}} ตัวอักษรขึ้นไป @sanity/client จะส่งข้อมูลเหล่านี้เป็น JSON body แทนที่จะใส่ใน URL ดังนั้นโค้ดตัวอย่างจึงทำแบบเดียวกัน',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'ส่งออกคิวรี',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'ชุดข้อมูล (dataset) ส่วนตัวต้องใช้ API token ส่วนชุดข้อมูลสาธารณะสามารถตัด Authorization header ออกได้',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'คัดลอกโค้ดไปยังคลิปบอร์ดแล้ว',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'คัดลอกโค้ด',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty': 'โปรดเรียกใช้คิวรีก่อนเพื่อให้มีผลลัพธ์สำหรับใช้สร้างชนิดข้อมูล',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'การประเมินสคีมาล้มเหลว: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'อนุมานจากผลลัพธ์ที่ดึงมา เนื่องจากไม่สามารถประเมินคิวรีกับสคีมาของพื้นที่ทำงานได้',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema': 'อนุมานจากสคีมาของพื้นที่ทำงาน ด้วยวิธีเดียวกับที่ sanity typegen ใช้',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'ผลลัพธ์ที่แสดงนี้ถูกดึงมาสำหรับคิวรีหรือพารามิเตอร์ชุดอื่น โปรดเรียกใช้คิวรีปัจจุบันก่อนเพื่อให้มีผลลัพธ์สำหรับใช้สร้างชนิดข้อมูล',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'ส่งออก TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'ส่งออก Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'เพิ่มลงในคิวรี',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'อยู่ในคิวรีนี้',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'ประกาศไว้',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'ต้องใช้ API เวอร์ชัน {{version}} ขึ้นไป',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'ในคิวรีนี้',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'จากไลบรารีของคุณ',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'ฟังก์ชันที่กำหนดเอง ประกาศไว้ที่บรรทัด {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'ใช้งานได้เฉพาะในโหมด delta ซึ่งเป็นที่ที่ webhook และ Sanity Functions รันตัวกรองของตนเอง',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'แยกเป็นฟังก์ชัน',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library': 'อยู่ในไลบรารีฟังก์ชันของคุณ ไม่ได้ประกาศไว้ในคิวรีนี้',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'ข้อมูลอ้างอิงฟังก์ชัน GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'เก็บไว้ในเบราว์เซอร์นี้สำหรับทุกชุดข้อมูลของโปรเจกต์ การเติมข้อความอัตโนมัติจะเสนอฟังก์ชันเหล่านี้ และการตรวจสอบ lint จะเสนอให้ประกาศฟังก์ชันที่คิวรีเรียกใช้',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty': 'บันทึกฟังก์ชันที่คิวรีประกาศไว้เพื่อใช้ในคิวรีอื่น',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'ไลบรารี',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'ประกาศฟังก์ชันที่กำหนดเองไว้ที่ด้านบนของคิวรี หรือวางเคอร์เซอร์ไว้ในโปรเจกชัน เช่น author->{name} แล้วกดปุ่มแยก (extract) เหนือตัวแก้ไข ({{shortcut}})',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'ในคิวรีนี้',
  /** Removes a function from the library */
  'vision.functions.remove': 'ลบออกจากไลบรารี',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'แทนที่ในคิวรี',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'แสดง {{name}} ในตัวแก้ไข',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'บันทึกลงไลบรารี',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'บันทึกแล้ว',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'อัปเดตไลบรารี',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'สร้างคิวรี',
  /** Closes the generate query bar */
  'vision.generate.close': 'ปิด',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions จะเขียน GROQ จากคำอธิบายของคุณและประเภทเอกสาร และ Content Lake จะตรวจสอบทุกความพยายาม แต่ละความพยายามใช้ 1 เครดิต AI โดยจะแทนที่คิวรีของแท็บนี้และรันทันที หากยกเลิก (undo) ในตัวแก้ไขจะนำคิวรีก่อนหน้ากลับมา',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'ไม่สามารถสร้างคิวรีได้',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'คิวรีควรดึงข้อมูลอะไร?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'เปิดความพยายามล่าสุด',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder': 'ผู้เขียน 10 คนล่าสุด เรียงตามนามสกุลแล้วตามด้วยชื่อ',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'กำลังเขียนคิวรี…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'กำลังแก้ไขคิวรี (ความพยายามที่ {{attempt}} จาก {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'สร้าง',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'พบใน CDN cache',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'เปลี่ยนแปลงแล้ว',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'การเปลี่ยนแปลง',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'ไม่สามารถแสดงการเปลี่ยนแปลงได้',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'ลองใหม่',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'เปรียบเทียบกับการดึงข้อมูลเมื่อ {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'พารามิเตอร์',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'คิวรี',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'มีการเปลี่ยนแปลงเฉพาะการจัดรูปแบบเท่านั้น',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'ผลลัพธ์',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL คำขอ',
  /** Empty state of the history panel */
  'vision.history.empty': 'ยังไม่มีการดึงข้อมูล',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'ล้มเหลว',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'ซ่อนไว้',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'กำลังซ่อน {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'มีการเปลี่ยนแปลงเฉพาะฟิลด์ที่ซ่อนอยู่เท่านั้น',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'คิวรีที่สร้างขึ้น',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'ลิงก์ที่เปิด',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'อัปเดตแบบเรียลไทม์',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'การเชื่อมต่อแบบเรียลไทม์เริ่มต้นใหม่',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'เริ่มการดึงข้อมูลแบบเรียลไทม์',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'โหลดคิวรีแล้ว',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'ปุ่มดึงข้อมูล',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'มีการใช้การเปลี่ยนแปลงข้อมูล (Mutations)',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'ตัวเลือกมีการเปลี่ยนแปลง',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'วาง URL แล้ว',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'การดึงข้อมูลใหม่อัตโนมัติเริ่มทำงานต่อ',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'แป้นพิมพ์ลัด',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'ผลลัพธ์เหมือนเดิม',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'แสดง',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'กำลังแสดง {{fields}} ซึ่งถูกซ่อนไว้โดยค่าเริ่มต้น',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'ใหญ่เกินกว่าจะเปรียบเทียบได้',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'ไม่มีการเปลี่ยนแปลง',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'ไม่พบปัญหาจากการตรวจสอบ ปัญหาที่ GROQ linter ตรวจพบในคิวรีจะแสดงที่นี่ขณะที่คุณพิมพ์ เลือกรายการใดรายการหนึ่งเพื่อเลือกในตัวแก้ไข',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'บรรทัดที่ {{line}} คอลัมน์ที่ {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'ข้อผิดพลาด',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'คำแนะนำ',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'ข้อมูล',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'คำเตือน',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'ใช้ {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'สด',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'ดึงข้อมูลแบบสด',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start': 'ดึงข้อมูล จากนั้นดึงข้อมูลอีกครั้งเมื่อเอกสารในผลลัพธ์มีการเปลี่ยนแปลง',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'หยุดการดึงข้อมูลเมื่อเอกสารในผลลัพธ์มีการเปลี่ยนแปลง การดึงข้อมูลยังคงทำงานได้ตามต้องการ สำหรับผลลัพธ์ที่ไม่มีการเปลี่ยนแปลงของเอกสารใด ๆ เช่น now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'การอัปเดตแบบสดถูกตัดการเชื่อมต่อ: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'หยุดการดึงข้อมูลสด',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'เพิ่ม mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'สร้างเอกสาร',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'ลบเอกสาร',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'ลบเอกสารในผลลัพธ์',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'แก้ไขเอกสาร',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'แพตช์เอกสารในผลลัพธ์',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'นำไปใช้กับ {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'ไม่สามารถนำ mutations ไปใช้ได้',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview': 'การนำไปใช้จะส่งสิ่งที่การรันแบบ dry run แสดงไว้: ให้รันก่อนหนึ่งครั้ง',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'เพิ่ม _key ให้กับรายการในอาร์เรย์ที่ยังไม่มี',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description': 'สตูดิโอต้องการ _key บนทุกรายการในอาร์เรย์เพื่อที่จะแก้ไขมันได้',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'การเปลี่ยนแปลง',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'ไม่สามารถแสดงการเปลี่ยนแปลงได้',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'ลองใหม่',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'เขียน mutations ตามรูปแบบที่ Mutations API รับ ในรูปแบบรายการ: create, createOrReplace, createIfNotExists, delete และ patch โดยใช้ ID หรือ GROQ query การรันแบบ dry run จะแสดงให้เห็นว่ามันจะส่งผลต่อแต่ละเอกสารอย่างไรโดยไม่มีการเปลี่ยนแปลงใด ๆ จากนั้นการนำไปใช้จะเขียนลงใน dataset ในหนึ่งธุรกรรม ด้วยบัญชีของคุณ',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutation {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'สร้าง mutations',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions จะเขียน mutations จากคำอธิบายของคุณ เอกสารในผลลัพธ์และประเภทของมัน และการรันแบบ dry run จะตรวจสอบแต่ละความพยายาม โดยทุกความพยายามจะใช้เครดิต AI หนึ่งหน่วย สิ่งเหล่านี้จะแทนที่ mutations ที่นี่ ซึ่งการยกเลิกจะนำสิ่งเหล่านี้กลับมา จะไม่มีการเขียนสิ่งใดจนกว่าคุณจะนำไปใช้',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'ไม่สามารถสร้าง mutations ได้',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'ต้องการให้ mutations ทำอะไร?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'เปลี่ยนชื่อเรื่องของเอกสารในผลลัพธ์เป็น foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'กำลังเขียน mutations…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'กำลังแก้ไข mutations (ความพยายามที่ {{attempt}} จาก {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'การเปลี่ยนแปลงไม่รวม {{fields}} เช่นเดียวกับ History',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'mutations ไม่ใช่ JSON ที่ถูกต้อง: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'Mutation {{index}} ต้องมีอย่างใดอย่างหนึ่งเท่านั้นระหว่าง create, createOrReplace, createIfNotExists, delete หรือ patch',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutations',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'mutations ไม่มีผลต่อเอกสารใด ๆ',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'เขียนรายการของ mutations, mutation เดียว หรือ request body ที่มีรายการของ mutations',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'สร้าง',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'ลบ',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'ไม่มีการเปลี่ยนแปลง',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'อัปเดต',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'ทดลองรัน',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'การทดลองรันล้มเหลว',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'ทดลองรัน',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'mutations ชุดข้อมูล หรือตัวเลือกมีการเปลี่ยนแปลงหลังจากการทดลองรันนี้ กรุณารันอีกครั้งเพื่อนำไปใช้',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'เปลี่ยนแปลง: {{changed}} · ไม่เปลี่ยนแปลง: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'แคช',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'พบในแคช',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained': 'CDN ตอบกลับด้วยคำตอบที่ถูกแคชไว้จากตำแหน่งใกล้คุณ คิวรีไม่ได้ไปถึง API',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'ไม่พบในแคช เท่าที่เซสชันนี้ตรวจพบได้',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'ไม่มีการแคช เนื่องจาก API ตอบกลับทุกคำขอด้วยเนื้อหาใหม่เสมอ',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty': 'ดึงข้อมูลคิวรีเพื่อดูว่าปลายทางใดตอบกลับ ตอบจากแคชหรือไม่ และรันที่ไหน',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'ตอบกลับโดย',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'วิธีการ',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET โดยมีคิวรีและพารามิเตอร์อยู่ใน URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST โดยมีคิวรีและพารามิเตอร์เป็น JSON body',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'คิวรีและพารามิเตอร์มีความยาว {{size}} อักขระในรูปแบบ search params; ตั้งแต่ {{limit}} เป็นต้นไป @sanity/client จะส่งเป็น JSON body แทน เนื่องจาก API จำกัดความยาวของ URL ส่วนตัวเลือกยังคงอยู่ใน URL',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'คิวรีรันที่',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'ไม่มีการรายงาน',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'เวลา',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': 'ใช้เวลาไปกลับ {{e2e}}ms, ใช้เวลาบนเซิร์ฟเวอร์ {{server}}ms',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'รหัสการติดตาม (Trace ID)',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint': 'เปิดใช้งาน Use the API CDN ในตัวเลือก เพื่อส่งคำสั่งสืบค้นผ่าน CDN',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'คุณ',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'ตามพื้นที่ทำงาน (workspace)',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'ปักหมุดชุดข้อมูล (dataset)',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'ปักหมุดแล้ว; พื้นที่ทำงานอาจใช้ชุดข้อมูลอื่น',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'ใช้ชุดข้อมูลของพื้นที่ทำงาน',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'รวม content source map',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'เพิ่ม resultSourceMap ในการตอบกลับ ซึ่งแสดงในแท็บ Content Source Map',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'ใช้ API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'สตูดิโอนี้ลงชื่อเข้าใช้คุณด้วยคุกกี้ ซึ่ง API CDN จะไม่ได้รับข้อมูลนี้เลย: มันจะตอบกลับเหมือนกับผู้เยี่ยมชมที่ไม่ระบุตัวตน ด้วยสิ่งที่ชุดข้อมูลสาธารณะแสดง',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN ไม่ให้บริการ drafts หรือ releases ดังนั้นคิวรีที่ใช้ perspective {{perspective}} จะถูกส่งไปยัง API ส่วนคิวรีที่ใช้ published หรือ raw จะใช้ CDN',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'คิวรีถูกส่งไปยัง API ไม่ใช่ CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'ส่งคิวรีไปยัง API CDN เช่นเดียวกับ useCdn: true ใน @sanity/client โดยใช้ perspective แบบ published และ raw: ส่วน drafts และ releases จะถูกส่งไปยัง API เสมอ คำตอบจะถูกแคชไว้นานสูงสุดหนึ่งนาที; แผงเครือข่าย (Network panel) จะแสดงเมื่อคำตอบมาจากแคช',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'ใช้ perspective แบบ published',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variant',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (ไม่ได้เลือก)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'ไม่มี',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'ยุบแผง',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'ขยายแผง',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'อธิบาย',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'ฟังก์ชัน',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'ประวัติ',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'เครือข่าย',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'ตัวเลือก',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'การตอบกลับ',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'เพิ่มรายการ',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'ค่า JSON ใดๆ ข้อความอื่นจะถูกส่งเป็นสตริง',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty': 'คิวรีนี้ไม่ได้ใช้พารามิเตอร์ใดๆ แต่ละ $name ในคิวรีจะมีช่องให้กรอกที่นี่',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json': 'พารามิเตอร์ไม่ใช่ JSON ที่ถูกต้อง แก้ไขในมุมมอง JSON เพื่อแก้ไขที่นี่',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'ไม่ใช่ true หรือ false; ถูกส่งเป็น {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type': 'ไม่ใช่ประเภทเอกสารในพื้นที่ทำงานนี้; ส่งไปอยู่ดี',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'ไม่ใช่จำนวนเต็ม ซึ่ง slice ต้องการ',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'ไม่ใช่รายการ; ถูกส่งเป็น {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'ไม่ใช่ตัวเลข; ถูกส่งเป็นข้อความ',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'ไม่ใช่ค่าที่รู้จัก; ส่งไปอยู่ดี',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'ไม่ใช่ข้อความ; ถูกส่งเป็น {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, รายการที่ {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'รายการ',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'ยังไม่ได้ตั้งค่า: คิวรีจะล้มเหลวจนกว่าจะมีค่า',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema': 'ประเภทข้อมูลมาจากคิวรีเพียงอย่างเดียว: ไม่สามารถอ่านสคีมาของพื้นที่ทำงานได้',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'ยังไม่ได้ตั้งค่า',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'ตอนนี้',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'ลบ',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'ลบรายการ',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error': 'คิวรีนี้ไม่สามารถแยกวิเคราะห์ได้ พารามิเตอร์จึงถูกแสดงโดยไม่มีประเภท',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'ค่า JSON ใดก็ได้',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true หรือ false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'วันที่และเวลา (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'รหัสเอกสาร',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'ประเภทเอกสาร',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'จำนวนเต็ม',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'รายการ แต่ละ {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'ตัวเลข',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'ข้อความ',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'ไม่ได้ใช้โดยคิวรี',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'ใช้ใน',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'ปรับขนาดตามเนื้อหา {{height}} พิกเซล',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'ปรับขนาดพารามิเตอร์: ลากหรือใช้ปุ่มลูกศร; ดับเบิลคลิกหรือกด Enter เพื่อปรับขนาดให้พอดีกับเนื้อหาอีกครั้ง',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'ฟอร์ม',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'แก้ไขพารามิเตอร์เป็น',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'โหลดคิวรีจาก URL ที่วางแล้ว',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'โหลดคิวรีจากคำสั่ง cURL ที่วางแล้ว',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'URL ที่วางใช้ตัวแปรเนื้อหา "{{variant}}" โปรดเลือกในแถบนำทางเพื่อรันคิวรีด้วยตัวแปรนี้',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'ชุดข้อมูล "{{dataset}}" ใน URL ที่วางไม่สามารถใช้งานได้ที่นี่ จึงยังคงใช้ชุดข้อมูลปัจจุบัน',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective': 'มุมมองใน URL ที่วางไม่รองรับที่นี่ จึงยังคงใช้มุมมองปัจจุบัน',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'URL ที่วางใช้ตัวแปรเนื้อหา "{{variant}}" แต่พื้นที่ทำงานนี้ปิดการใช้งานตัวแปรไว้ คิวรีจึงรันโดยไม่มีตัวแปรนี้',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'การดำเนินการคิวรี',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'การดึงข้อมูลซ้ำโดยอัตโนมัติต้องใช้ API เวอร์ชัน v2021-03-25 หรือใหม่กว่า',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'คัดลอกคิวรีไปยังคลิปบอร์ดแล้ว',
  /** Menu item copying the query text */
  'vision.query.copy': 'คัดลอกคิวรี',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'ส่งออกคิวรี…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'จัดรูปแบบคิวรีให้สวยงาม',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'ไม่สามารถจัดรูปแบบคิวรีได้',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'บันทึกคิวรี',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'หยุด',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'หยุดการดึงข้อมูล',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'คุณกำลังใช้เครื่องมือ Vision ที่ออกแบบใหม่ การเปลี่ยนกลับจะยังคงแท็บและการตั้งค่าของคุณไว้ในเบราว์เซอร์นี้สำหรับครั้งต่อไปที่คุณลองใช้',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision ที่ออกแบบใหม่ (เบต้า)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'เปลี่ยนกลับไปใช้ Vision แบบดั้งเดิม',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'ลองใช้เลย',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'แท็บคิวรี การดึงข้อมูลแบบสด รายละเอียดการตอบกลับ และการส่งออก คุณสามารถเปลี่ยนกลับได้ทุกเมื่อ',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'ไม่ใช่ตอนนี้',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'ลองใช้ Vision ที่ออกแบบใหม่',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'ลองใช้แบบออกแบบใหม่',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'เปลี่ยนไปใช้ Vision ที่ออกแบบใหม่ ซึ่งอยู่ในช่วงเบต้า คุณสามารถเปลี่ยนกลับได้ทุกเมื่อจากแถบด้านข้างของมัน',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'ยังไม่มีการดึงข้อมูลใด ๆ',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'ขนาดเพย์โหลด',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'แท็กการซิงค์',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'ไม่มีแท็กการซิงค์ในการตอบกลับ',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'ส่งเป็น POST body: คิวรีและพารามิเตอร์ยาวเกินไปสำหรับ URL ดังนั้น @sanity/client จึงส่งเป็น JSON แทน การวาง URL นี้ลงใน Vision ยังคงโหลดคิวรีได้ตามปกติ',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'การดำเนินการของผลลัพธ์',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'คัดลอกผลลัพธ์ไปยังคลิปบอร์ดแล้ว',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': 'คัดลอก {{path}} แล้ว',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'คัดลอกผลลัพธ์',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'คัดลอกค่า',
  /** Empty state of the result view */
  'vision.result.empty': 'เรียกใช้คิวรีเพื่อดูผลลัพธ์ที่นี่',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'ส่งออก CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'ส่งออก JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'ส่งออก TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'ส่งออก Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'ซ่อนสิ่งที่บรรจุอยู่',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'ปรับให้พอดีกับมุมมอง',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'กราฟผลลัพธ์: ลากเพื่อย้าย เลื่อนเพื่อซูม เมื่อโฟกัสอยู่ ปุ่มลูกศรใช้เลื่อน + และ - ใช้ซูม 0 ใช้ปรับให้พอดี',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'มุมมองแบบต้นไม้และ JSON แสดงข้อมูลทั้งหมด',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'วาดเฉพาะ {{nodes}} อ็อบเจ็กต์และอาร์เรย์แรกเท่านั้น',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': 'แสดงเฉพาะ {{rows}} รายการแรกสำหรับ {{nodes}}',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} รายการ)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'ผลลัพธ์',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'ซูมเข้า',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'ซูมออก',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'กราฟ',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'มุมมองผลลัพธ์',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'ต้นไม้',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'ยังไม่มีคิวรีที่บันทึกไว้ บันทึกคิวรีปัจจุบันด้วยปุ่ม +',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'ไม่พบคิวรีที่ตรงกับการค้นหาของคุณ',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'โหลดเข้าแท็บปัจจุบัน',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'เปิดในแท็บใหม่',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'เปลี่ยนชื่อ',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'บันทึกคิวรีปัจจุบัน',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'คิวรีที่บันทึกไว้นี้ใช้ variant "{{variant}}" โปรดเลือกใน navbar เพื่อรันคิวรีด้วย variant นี้',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'ชุดข้อมูล "{{dataset}}" ของคิวรีที่บันทึกไว้นี้ไม่พร้อมใช้งานที่นี่ จึงยังคงใช้ชุดข้อมูลปัจจุบัน',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'คิวรีที่บันทึกไว้นี้ใช้ variant "{{variant}}" แต่พื้นที่ทำงานนี้ปิดใช้งาน variant ไว้ คิวรีจึงรันโดยไม่มี variant นี้',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'ล้างพื้นที่จัดเก็บข้อมูล',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'ใช่ ล้างพื้นที่จัดเก็บข้อมูล',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'ลบคิวรีที่บันทึกไว้ส่วนตัวของคุณและคลังฟังก์ชัน รีเซ็ตแท็บที่เปิดอยู่และค่าเริ่มต้นเหล่านี้ในเบราว์เซอร์นี้ และกลับไปใช้เครื่องมือ Vision แบบคลาสสิก คิวรีที่แชร์ไว้จะยังคงอยู่',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'ไม่สามารถล้างคิวรีที่บันทึกไว้ได้',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'ล้างพื้นที่จัดเก็บข้อมูลแล้ว',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description': 'ค่าเริ่มต้นสำหรับแท็บใหม่ แท็บที่เปิดอยู่จะยังคงใช้ตัวเลือกของตนเอง',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'หนึ่งเส้นทางฟิลด์ต่อบรรทัด เส้นทางจะจับคู่ที่ระดับความลึกใดก็ได้ของผลลัพธ์ ดังนั้น _rev จะซ่อนการแก้ไขของทุกเอกสารในนั้น แต่ละ diff ยังสามารถแสดงได้อยู่',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'รีเซ็ตเป็นค่าเริ่มต้น',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'ฟิลด์ที่ซ่อนจาก History diffs',
  /** Title of the settings dialog */
  'vision.settings.title': 'การตั้งค่า',
  /** Empty state of the shared queries panel */
  'vision.shared.empty': 'ยังไม่มีคิวรีที่แชร์ แชร์คิวรีที่บันทึกไว้เพื่อให้ทุกคนที่ใช้ชุดข้อมูลนี้สามารถใช้งานได้',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'ปิดกล่องโต้ตอบและเมนู',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'เติมชื่อฟังก์ชันให้สมบูรณ์',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'คัดลอกคิวรี',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'แยก projection ที่ตำแหน่งเคอร์เซอร์ออกเป็นฟังก์ชัน',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'ดึงข้อมูลคิวรี',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'ไปยังผลการตรวจ lint ถัดไป',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'จัดรูปแบบคิวรีให้สวยงาม',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'แป้นพิมพ์ลัด',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'ย่อแถบด้านข้าง',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'ขยายแถบด้านข้าง',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'แถบด้านข้างของ Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'คิวรีที่บันทึกไว้',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'การตั้งค่า',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'คิวรีที่แชร์',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'แป้นพิมพ์ลัด',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'ไม่มีแผนที่แหล่งที่มาเนื้อหาในการตอบกลับ เปิด "รวมแผนที่แหล่งที่มาเนื้อหา" ภายใต้ตัวเลือก แล้วดึงข้อมูลอีกครั้ง',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'ปรับขนาดแผงรายละเอียดการตอบกลับ: ลากหรือใช้ปุ่มลูกศร; Home และ End ไปยังขอบเขต, Enter รีเซ็ต',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'ปรับขนาดแผงคำขอและการตอบกลับ: ลากหรือใช้ปุ่มลูกศร; Home และ End ไปยังขอบเขต, Enter รีเซ็ต',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'ปิดแท็บ',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'แท็บคิวรี',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'แท็บใหม่',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'ชื่อแท็บ',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'คิวรีที่ไม่มีชื่อ',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'ตรวจสอบคิวรี GROQ ใน Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'อธิบายสคีมาใน Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'อธิบายแผนการทำงานของคิวรี GROQ ใน Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'อ่านแท็บ Vision ที่เปิดอยู่',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'เปิดคิวรี GROQ ใน Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'ดูตัวอย่างการเปลี่ยนแปลงข้อมูลใน Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'เรียกใช้คิวรี GROQ ใน Vision',
})
