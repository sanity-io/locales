import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'การเข้าถึงล่วงหน้า',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'การเขียนที่เน้นไอเดียเป็นหลัก',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'เขียนได้อย่างเป็นธรรมชาติในเครื่องมือแก้ไขที่ขับเคลื่อนด้วย AI คอนเทนต์ของคุณจะถูกจับคู่กับฟิลด์ใน Studio อัตโนมัติขณะที่คุณพิมพ์',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'เรียนรู้เพิ่มเติม',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'แก้ไขด้วย Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'เมื่อเชื่อมโยงแล้ว การแก้ไขของคุณจะปรากฏที่นี่แบบเรียลไทม์',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'กำลังเชื่อมโยงไปยัง Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'กลับไปที่ Sanity Create ของคุณ เอกสารของคุณจะซิงค์โดยอัตโนมัติ (โดยปกติจะใช้เวลาไม่กี่วินาที)',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'การเชื่อมโยงล่าช้า?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'ตรวจสอบว่าหน้าต่าง Sanity Create ของคุณยังเปิดอยู่หรือไม่ หรือถ้ากระบวนการดูเหมือนจะหยุดนิ่ง หากปัญหายังคงอยู่ ลองรีเฟรช Studio และลองอีกครั้ง',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'เริ่มใน Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'ดำเนินการต่อ',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'เรียนรู้เพิ่มเติม',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details': 'สิ่งนี้จะเปิดในหน้าต่างใหม่ โดยเชื่อมโยงโดยตรงกับเอกสารนี้',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'อย่าเตือนฉันอีก',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'ไม่สามารถกำหนด URL ของ Sanity Create ได้',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'เขียนอย่างเป็นธรรมชาติ, ประกาศเผยแพร่อย่างมีโครงสร้าง',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'สร้างคอนเทนต์ตามที่คุณต้องการในเครื่องมือแก้ไขที่ขับเคลื่อนด้วย AI การเขียนของคุณจะถูกจับคู่กับฟิลด์ที่ถูกต้องใน Sanity Studio ขณะที่คุณพิมพ์',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'เอกสารนี้ถูกเชื่อมโยงกับ Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'ยกเลิกการเชื่อมโยง',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'ยกเลิก',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'ไม่มีชื่อ',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'คุณกำลังยกเลิกการเชื่อมโยง “<strong>{{title}}</strong>” จาก Sanity Create เพื่อที่จะแก้ไขได้ที่นี่',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'เปลี่ยนการแก้ไขไปยัง Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'คุณจะเก็บเนื้อหาของคุณไว้ทั้งสองที่ การเปลี่ยนแปลงใหม่ๆ ใน Sanity Create จะหยุดการซิงค์กับ Studio นี้',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'ยกเลิกการเชื่อมต่อทันที',
})
