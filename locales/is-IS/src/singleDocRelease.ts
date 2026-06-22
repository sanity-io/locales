import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Tímasetja útgáfu',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Mistókst að tímasetja útgáfu',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Skjal tímasett til útgáfu',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Útgáfa tímasett fyrir {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Tímasett drög fyrir þetta skjal eru þegar til.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Ekki er hægt að tímasetja drög vegna villna í villuleit í núverandi drögum.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Lærðu um tímasetningu',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Tímasettu og læstu drögum að skjölum til útgáfu á tiltekinni dagsetningu og tíma í framtíðinni.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Tímasett drög',
})
