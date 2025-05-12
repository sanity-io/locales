import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Korai hozzáférés',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Ötletközpontú szerkesztés',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Írjon természetesen egy AI által hajtott szerkesztőben. A tartalma automatikusan a Studio mezőkhöz rendelődik, ahogy ír.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Tudj meg többet',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Szerkesztés a Sanity Create-ben',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Tudj meg többet',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Ez a dokumentum a Sanity Create-hez van kapcsolva',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Leválasztás',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Mégse',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Cím nélkül',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Leválasztja a(z) „<strong>{{title}}</strong>” dokumentumot a Sanity Create-től, hogy itt szerkeszthető legyen.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Szerkesztés váltása a Studióra?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'A tartalmat mindkét helyen megőrzi. A Sanity Create-ben végzett új változtatások nem szinkronizálódnak többé ezzel a Stúdióval.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Leválasztás most',
})
