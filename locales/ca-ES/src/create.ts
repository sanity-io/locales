import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Accés anticipat',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Autoria amb prioritat a la idea',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    "Escriu de manera natural en un editor potenciat per IA. El teu contingut es mapeja automàticament als camps de l'Estudi mentre escrius.",

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Aprèn més',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Edita amb Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Aprèn més.',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Aquest document està vinculat a Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Desvincula',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Cancel·la',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Sense títol',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Estàs desvinculant “<strong>{{title}}</strong>” de Sanity Create perquè pugui ser editat aquí.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': "Vols canviar l'edició a l'Estudi?",
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Mantindràs el teu contingut en ambdós llocs. Qualsevol canvi nou a Sanity Create deixarà de sincronitzar-se amb aquest Estudi.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Desvincula ara',
})
