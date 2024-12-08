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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Miután összekapcsolták, a szerkesztései valós időben jelennek meg itt.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Összekapcsolás a Sanity Create-tel',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Menjen vissza a Sanity Create-be. A dokumentuma automatikusan szinkronizálódik (általában néhány másodpercet vesz igénybe).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Az összekapcsolás késik?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Ellenőrizze, hogy a Sanity Create ablaka még nyitva van-e, vagy hogy a folyamat elakadt-e. Ha a problémák továbbra is fennállnak, próbálja meg frissíteni a Studiót és próbálkozzon újra.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Kezdés a Sanity Create-ben',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Folytatás',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Tudj meg többet',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Ez egy új ablakban nyílik meg, közvetlenül ehhez a dokumentumhoz kapcsolva.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Ne emlékeztessen újra',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'Nem sikerült meghatározni a Sanity Create URL-t.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Írjon természetesen, publikáljon strukturáltan',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Hozzon létre tartalmat a maga módján egy AI által hajtott szerkesztőben. Az írása automatikusan a megfelelő mezőkhöz rendelődik a Sanity Studio-ban, ahogy ír.',

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
