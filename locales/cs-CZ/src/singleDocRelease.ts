import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Naplánovat publikování',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Naplánování publikování se nezdařilo',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument naplánován k publikování',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Publikování naplánováno na {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Pro tento dokument již existuje naplánovaný koncept.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Nelze naplánovat koncept kvůli chybám ověření v aktuálním konceptu.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Zjistit více o plánování',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Naplánujte a uzamkněte koncepty dokumentů pro publikování k budoucímu datu a času.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Naplánované koncepty',
})
