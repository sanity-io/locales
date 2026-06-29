import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Browse button text */
  'feedback.attachment.browse': 'Parcourir',
  /** Drop zone text for image attachment */
  'feedback.attachment.drop-zone': 'Faites glisser ou collez le fichier ici',
  /** Error shown when attached image exceeds size limit */
  'feedback.attachment.error.size': "L'image doit être inférieure à 20 Mo",
  /** Label for the image attachment section */
  'feedback.attachment.label': 'Joindre une image',
  /** Remove attached image button text */
  'feedback.attachment.remove': 'Supprimer',
  /** Cancel button text */
  'feedback.cancel': 'Annuler',
  /** Consent disclaimer shown when the user agrees to follow up */
  'feedback.consent.disclaimer':
    "Nous aimerions en savoir plus. Sélectionner oui partage votre nom et votre adresse e-mail avec l'équipe Sanity.",
  /** Label for the contact consent toggle */
  'feedback.consent.label': 'Pouvons-nous vous contacter à propos de ce retour ?',
  /** Consent toggle: no */
  'feedback.consent.no': 'Non',
  /** Consent toggle: yes */
  'feedback.consent.yes': 'Oui',
  /** Title of the feedback dialog */
  'feedback.dialog.title': 'Partager un retour avec Sanity',
  /** Toast message after failed submission */
  'feedback.error': "Échec de l'envoi du retour avec l'erreur",
  /** Label for "send feedback" in the help resources menu */
  'feedback.menu-item': 'Envoyer un retour',
  /** Label for the message field */
  'feedback.message.label':
    "Qu'est-ce qui fonctionne bien ? Qu'est-ce qui pourrait être amélioré ?",
  /** Placeholder for the message field */
  'feedback.message.placeholder': 'Décrivez votre problème ou votre demande...',
  /** Sentiment option: happy */
  'feedback.sentiment.happy': 'Facile',
  /** Label for the sentiment question */
  'feedback.sentiment.label': 'Dans quelle mesure Sanity est-il facile ou difficile à utiliser ?',
  /** Sentiment option: neutral */
  'feedback.sentiment.neutral': 'Pas sûr(e)',
  /** Sentiment option: unhappy */
  'feedback.sentiment.unhappy': 'Difficile',
  /** Submit button text */
  'feedback.submit': 'Envoyer un retour',
  /** Toast message after successful submission */
  'feedback.success': 'Retour envoyé, merci !',
})
