import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Zaplanuj publikację',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Nie udało się zaplanować publikacji',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument zaplanowany do publikacji',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publikacja zaplanowana na {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Zaplanowany szkic dla tego dokumentu już istnieje.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Nie można zaplanować szkicu z powodu błędów walidacji w bieżącym szkicu.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Dowiedz się więcej o planowaniu',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Planuj i blokuj szkice dokumentów do publikacji w przyszłej dacie i godzinie.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Zaplanowane szkice',
})
