import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'გამოქვეყნების დაგეგმვა',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'გამოქვეყნების დაგეგმვა ვერ მოხერხდა',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'დოკუმენტი დაგეგმილია გამოქვეყნებისთვის',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': 'გამოქვეყნება დაგეგმილია {{publishAt}}-ზე',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'ამ დოკუმენტისთვის უკვე არსებობს დაგეგმილი Draft.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'Draft-ის დაგეგმვა შეუძლებელია მიმდინარე draft-ში არსებული ვალიდაციის შეცდომების გამო.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'შეიტყვეთ დაგეგმვის შესახებ',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'დაგეგმეთ და დაბლოკეთ draft დოკუმენტები მომავალ თარიღსა და დროს გამოქვეყნებისთვის.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'დაგეგმილი Drafts',
})
