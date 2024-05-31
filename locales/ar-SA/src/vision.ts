import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'نسخ إلى الحافظة',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'إيقاف',
  /** Label for setting up a listener */
  'action.listen-execute': 'استمع',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'إلغاء',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'جلب',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'جديد',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'المعاملات ليست JSON صالح',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'المعاملات',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'عمود',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'سطر',
  /** Label for "Query" editor/input */
  'query.label': 'استعلام',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'رابط الاستعلام',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'نهاية إلى نهاية',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'وقت التنفيذ',
  /** Label for "Result" explorer/view */
  'result.label': 'النتيجة',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'غير متاح',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'إصدار API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'إصدار API مخصص',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'إصدار API غير صالح',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'أخرى',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'اقرأ الوثائق',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'تتيح لك الـ Perspectives تشغيل استعلامك ضد "وجهات نظر" مختلفة للمحتوى في مجموعة البيانات الخاصة بك',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
