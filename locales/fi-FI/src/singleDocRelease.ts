import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Ajasta julkaisu',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Julkaisun ajastaminen epäonnistui',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Asiakirja ajastettu julkaistavaksi',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Julkaisu ajastettu ajankohtaan {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Tälle asiakirjalle on jo olemassa ajastettu luonnos.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Luonnosta ei voi ajastaa nykyisen luonnoksen validointivirheiden vuoksi.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Lue ajastamisesta',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Ajasta ja lukitse luonnokset julkaistavaksi tulevana päivänä ja kellonaikana.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Ajastetut luonnokset',
})
