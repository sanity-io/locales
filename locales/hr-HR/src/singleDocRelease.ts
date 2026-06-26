import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'Zakaži objavu',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'Zakazivanje objave nije uspjelo',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'Dokument je zakazan za objavu',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'Objava zakazana za {{publishAt}}',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'Zakazana skica za ovaj dokument već postoji.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Nije moguće zakazati skicu zbog grešaka u provjeri valjanosti trenutne skice.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'Saznajte više o zakazivanju',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'Zakažite i zaključajte skice dokumenata za objavu na budući datum i vrijeme.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'Zakazane skice',
})
