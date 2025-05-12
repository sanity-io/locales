import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Accès anticipé',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Auteur priorisant les idées',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    "Écrivez naturellement dans un éditeur alimenté par l'IA. Votre contenu se cartographie automatiquement aux champs du Studio pendant que vous tapez.",

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'En savoir plus',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Modifier avec Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'En savoir plus',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Ce document est lié à Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Dissocier',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Annuler',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Sans titre',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    "Vous dissociez « <strong>{{title}}</strong> » de Sanity Create pour pouvoir l'éditer ici.",
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': "Changer l'édition pour Studio ?",
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Vous conserverez votre contenu dans les deux emplacements. Tous les nouveaux changements dans Sanity Create cesseront de se synchroniser avec ce Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Dissocier maintenant',
})
