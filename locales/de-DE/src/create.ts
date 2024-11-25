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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Sobald die Verknüpfung hergestellt ist, erscheinen Ihre Änderungen hier in Echtzeit.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Verknüpfung mit Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Kehren Sie zurück zu Sanity Create. Ihr Dokument wird automatisch synchronisiert (dauert normalerweise einige Sekunden).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Verknüpfung verzögert?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Überprüfen Sie, ob Ihr Sanity Create-Fenster noch geöffnet ist oder ob der Prozess hängt. Wenn Probleme bestehen bleiben, versuchen Sie, das Studio zu aktualisieren und es erneut zu versuchen.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'In Sanity Create beginnen',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Fortsetzen',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Erfahren Sie mehr',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Dies öffnet sich in einem neuen Fenster, das direkt mit diesem Dokument verknüpft ist.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Nicht mehr erinnern',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'Sanity Create URL konnte nicht ermittelt werden.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Natürlich schreiben, strukturiert veröffentlichen',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Erstellen Sie Inhalte auf Ihre Weise in einem KI-gesteuerten Editor. Ihr Schreiben wird automatisch den richtigen Feldern im Sanity Studio zugeordnet, während Sie tippen.',

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
