import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'แก้ไขใน Canvas',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'เชื่อมโยงไปยัง Canvas',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'โปรดรอจนกว่าค่าเริ่มต้นของเอกสารจะได้รับการแก้ไข',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'คุณไม่มีสิทธิ์ในการเชื่อมโยงเอกสารนี้ไปยัง Canvas',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'เปิดเอกสารนี้ใน Dashboard เพื่อเชื่อมโยงไปยัง Canvas',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'เอกสารเวอร์ชันยังไม่ได้รับการสนับสนุนใน Canvas',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'ยกเลิกการเชื่อมโยงจาก Canvas',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'แก้ไขใน Canvas',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'เอกสารนี้ถูกเชื่อมโยงไปยัง Canvas',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'ยกเลิก',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'ยอมรับและดำเนินการต่อ',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'เอกสารนี้ต้องได้รับการอัปเดตเพื่อให้เข้ากันได้กับ Canvas\nเนื้อหาที่มีอยู่อาจถูกแก้ไขหรือลบออกเป็นส่วนหนึ่งของกระบวนการนี้',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'คุณสามารถยกเลิกการเชื่อมโยงจาก Canvas ได้ทุกเมื่อ',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'ยืนยันการเปลี่ยนแปลงเอกสาร',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'ไม่สามารถเชื่อมโยงไปยัง Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'กำลังนำคุณไปยัง Canvas เพื่อทำการเชื่อมโยงให้เสร็จสิ้น...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'เชื่อมโยงไปยัง Canvas',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'กำลังตรวจสอบ',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'ยกเลิก',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'เมื่อยกเลิกการเชื่อมโยงแล้ว จะสามารถแก้ไขได้ที่นี่ และการแก้ไขในอนาคตใน Canvas จะไม่ถูกแมปไปยังเอกสารนี้โดยอัตโนมัติ',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'ไม่สามารถยกเลิกการเชื่อมโยงจาก Canvas',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'ยกเลิกการเชื่อมโยงจาก Canvas',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'ยกเลิกการเชื่อมโยงจาก Canvas',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'ยกเลิกการเชื่อมโยงตอนนี้',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'คุณกำลังยกเลิกการเชื่อมโยง <strong>“{{documentTitle}}”</strong> จาก Canvas',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'ไม่มีสิทธิ์ในการนำทางไปยัง Canvas',
})
