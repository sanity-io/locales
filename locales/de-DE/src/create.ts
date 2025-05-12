import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Früher Zugang',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Ideenorientiertes Schreiben',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Schreiben Sie natürlich in einem KI-gesteuerten Editor. Ihr Inhalt wird automatisch zugeordnet, während Sie tippen.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Erfahren Sie mehr',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Mit Sanity Create bearbeiten',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Erfahren Sie mehr',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Dieses Dokument ist mit Sanity Create verknüpft',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Verknüpfung aufheben',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Abbrechen',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Unbenannt',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Sie lösen die Verknüpfung von „<strong>{{title}}</strong>“ mit Sanity Create, damit es hier bearbeitet werden kann.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Für Bearbeitung zum Studio wechseln?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Ihr Inhalt bleibt an beiden Orten erhalten. Neue Änderungen in Sanity Create werden nicht mehr mit diesem Studio synchronisiert.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Jetzt trennen',
})
