import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'เชื่อมต่อแล้ว',
  /** The status of the channel connection */
  'channel.status_connecting': 'กำลังเชื่อมต่อ',
  /** The status of the channel connection */
  'channel.status_disconnected': 'ตัดการเชื่อมต่อแล้ว',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'กำลังเชื่อมต่อใหม่',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'เอกสารในหน้านี้',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': 'ไม่สามารถแสดงรายการเอกสารได้',

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': 'ไม่สามารถแสดงตัวแก้ไขเอกสารได้',

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'ดำเนินการต่อไปอยู่ดี',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'ลองอีกครั้ง',
  /** The title on the card shown after a connection has failed */
  'error-card.title': 'เกิดข้อผิดพลาด',

  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'ใช้งานใน {{count}} หน้า',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'ไม่ได้ใช้งานในหน้าใดเลย',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'กำลังระบุตำแหน่ง...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'เอกสารหลัก',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'ไม่พบเอกสารหลักสำหรับ <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'โครงสร้าง',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigator',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Presentation',

  /** The label for a generic error message */
  'presentation-error.label': 'ข้อความแสดงข้อผิดพลาด',

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    'iframe ตัวอย่างถูกกำหนดค่าให้โหลด <Code>{{targetOrigin}}</Code> แต่ origin ที่รายงานคือ <Code>{{reportedOrigin}}</Code> Presentation Tool ไม่สามารถเชื่อมต่อกับ origin ที่ไม่รู้จักได้เพื่อความปลอดภัย กรุณาอัปเดตการกำหนดค่า <Code>presentationTool.allowOrigins</Code> ของคุณเพื่ออนุญาตการเชื่อมต่อกับ Visual Editing และ Loaders',
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title': 'URL origin ของตัวอย่างไม่ตรงกัน',
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'ไม่สามารถเชื่อมต่อกับตัวอย่างได้',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'ดำเนินการต่อไปอยู่ดี',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'สถานะการเชื่อมต่อของ Loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'สลับ Navigator',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'สลับการแสดงผลนำทาง',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': 'สถานะการเชื่อมต่อ overlay',
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'แก้ไข',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': 'ปิดใช้งาน overlay การแก้ไข',
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': 'เปิดใช้งาน overlay การแก้ไข',
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'ดูหน้านี้พร้อมเนื้อหาที่เผยแพร่แล้ว',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': 'รีเฟรชการแสดงตัวอย่าง',
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': 'รีเฟรชการแสดงตัวอย่าง',
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'แชร์การแสดงตัวอย่างนี้',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'กำลังเชื่อมต่อ',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'กำลังโหลด',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'กำลังรีเฟรช',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'กำลังรีเฟรช',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    'ไม่สามารถเชื่อมต่อได้ โปรดตรวจสอบคอนโซลของเบราว์เซอร์เพื่อดูข้อมูลเพิ่มเติม',
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': 'สลับขนาด viewport',
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': 'เปลี่ยนเป็น viewport แบบเต็มความกว้าง',
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': 'เปลี่ยนเป็น viewport แบบแคบ',

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': 'URL ต้องเริ่มต้นด้วย {{origin}}',
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    'URL ไม่สามารถมี base path เดียวกับ Studio {{basePath}}',

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    'เราเตอร์ต้องการนำทางไปยัง <Code>{{previewSearchParam}}</Code> แต่ origin <Code>{{blockedOrigin}}</Code> ไม่ได้รับอนุญาต โปรดอัปเดตการตั้งค่า <Code>presentationTool.allowOrigins</Code> ของคุณเพื่ออนุญาต',
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': 'URL ตัวอย่างถูกบล็อก',

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    'คุณไม่มีสิทธิ์สร้าง URL Preview Secrets ซึ่งอาจทำให้การโหลดตัวอย่างล้มเหลว',

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': 'คัดลอกลิงก์ตัวอย่าง',
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants': 'คุณไม่มีสิทธิ์แชร์การแสดงตัวอย่าง',
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing': 'คุณไม่มีสิทธิ์สลับการแชร์การแสดงตัวอย่างนี้',
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions': 'สแกน QR Code เพื่อเปิดตัวอย่างบนโทรศัพท์ของคุณ',
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'QR Code จะปรากฏที่นี่',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': 'QR Code ที่เข้ารหัส URL: {{url}}',
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'แชร์ตัวอย่างนี้',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'กับทุกคนที่มีลิงก์',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'ปิดใช้งานการแชร์',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'เปิดใช้งานการแชร์',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': 'กำลังคัดลอก URL ไปยังคลิปบอร์ด…',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'การคัดลอกล้มเหลว',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': 'คัดลอก URL ไปยังคลิปบอร์ดแล้ว',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'ไม่รองรับคลิปบอร์ด',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': 'เปิดตัวอย่าง',
})
