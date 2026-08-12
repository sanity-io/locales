import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Canvas-ში რედაქტირება',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Canvas-თან დაკავშირება',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'დაელოდეთ, სანამ დოკუმენტის საწყისი მნიშვნელობები განიხილება',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'თქვენ არ გაქვთ ნებართვა დააკავშიროთ ეს დოკუმენტი Canvas-თან',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'გახსენით ეს დოკუმენტი Dashboard-ში, რათა დააკავშიროთ Canvas-თან',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document':
    'ვერსიის დოკუმენტები ჯერ არ მხარდაჭერია Canvas-ში',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Canvas-დან გამორთვა',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Canvas-ში რედაქტირება',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'ეს დოკუმენტი Canvas-თანაა დაკავშირებული',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'გაუქმება',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'დამტკიცება და გაგრძელება',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'ამ დოკუმენტს საჭიროა განახლება, რათა იყოს თანამედროვე Canvas-თან.\n არსებული შინაარსი შეიცვლება ან წაიშლება ამ პროცესის ნაწილად.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'თქვენ შეგიძლიათ Canvas-დან გამორთოთ როდისმე',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'დოკუმენტის ცვლილებების დადასტურება',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Canvas-თან დაკავშირება ვერ მოხერხდა',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'გადაგიყვანთ Canvas-ზე დაკავშირების დასრულებას...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Canvas-თან დაკავშირება',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'ვალიდაცია',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'გაუქმება',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'გამორთვის შემდეგ, იგი აქ შეიცვლება და მომავალში Canvas-ში გაკეთებული რედაქტირებები აღარ გადაიტანება ამ დოკუმენტზე.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Canvas-დან გამორთვა ვერ მოხერხდა',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Canvas-დან გამორთულია',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Canvas-დან გამორთვა',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'ახლავე გამორთეთ',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'თქვენ გამორთავთ <strong>“{{documentTitle}}”</strong> Canvas-დან.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions': 'Canvas-ზე გადასვლისთვის ნებართვა აკლია',
})
