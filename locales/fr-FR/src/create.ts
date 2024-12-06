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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Une fois lié, vos modifications apparaîtront ici en temps réel.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Liaison à Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Retournez à Sanity Create. Votre document se synchronisera automatiquement (cela prend généralement quelques secondes).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Liaison retardée ?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Vérifiez si votre fenêtre Sanity Create est toujours ouverte, ou si le processus semble bloqué. Si les problèmes persistent, essayez de rafraîchir le Studio et réessayez.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Commencer dans Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Continuer',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'En savoir plus',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    "Cela s'ouvre dans une nouvelle fenêtre, directement liée à ce document.",
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Ne me le rappelle plus',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    "Impossible de déterminer l'URL de Sanity Create.",
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Écrivez naturellement, publiez de manière structurée',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    "Créez du contenu à votre manière dans un éditeur alimenté par l'IA. Votre écriture se cartographie automatiquement aux bons champs dans Sanity Studio pendant que vous tapez.",

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
