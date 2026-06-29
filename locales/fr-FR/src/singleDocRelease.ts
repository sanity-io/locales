import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Planifier la publication',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Échec de la planification de la publication',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Document planifié pour la publication',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publication planifiée pour {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Un brouillon planifié pour ce document existe déjà.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    "Impossible de planifier le brouillon en raison d'erreurs de validation dans le brouillon actuel.",

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'En savoir plus sur la planification',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Planifiez et verrouillez des documents brouillons pour les publier à une date et une heure ultérieures.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Brouillons planifiés',
})
