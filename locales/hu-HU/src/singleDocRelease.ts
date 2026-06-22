import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Közzététel ütemezése',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Nem sikerült ütemezni a közzétételt',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'A dokumentum közzétételre van ütemezve',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'A közzététel ütemezve: {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Ehhez a dokumentumhoz már létezik egy ütemezett piszkozat.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Nem lehet ütemezni a piszkozatot, mert az aktuális piszkozatban érvényesítési hibák vannak.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Tudjon meg többet az ütemezésről',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Ütemezze és zárolja a piszkozat dokumentumokat egy jövőbeli dátumra és időpontra való közzétételhez.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Ütemezett piszkozatok',
})
