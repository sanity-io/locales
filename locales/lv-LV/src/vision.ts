import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopēt starpliktuvē',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Apturēt',
  /** Label for setting up a listener */
  'action.listen-execute': 'Klausīties',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Atcelt',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Ienest',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Jauns',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametri nav derīgs JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolonna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Līnija',
  /** Label for "Query" editor/input */
  'query.label': 'Vaicājums',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Vaicājuma URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'No gala līdz galam',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Izpildes laiks',
  /** Label for "Result" explorer/view */
  'result.label': 'Rezultāts',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Rezultātu nevar kodēt kā CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Saglabāt rezultātu kā <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/p',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API versija',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Pielāgota API versija',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Nederīga API versija',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Cita',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektīva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektīva "<code>previewDrafts</code>" ir pārdēvēta par "<code>drafts</code>" un tagad ir novecojusi. Šī izmaiņa ir spēkā visām versijām, kurās ir atbalstīta perspektīva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lasīt dokumentāciju',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nav perspektīvas (API noklusējums)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektīvas ļauj jūsu vaicājumam izpildīties pret dažādiem "skatiem" uz saturu jūsu datu kopā',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Noklusējuma perspektīva mainīsies no "<code>raw</code>" uz "<code>published</code>" gaidāmā API versijā. Lūdzu, konsultējieties ar dokumentāciju, lai iegūtu vairāk informācijas.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Piesprausts laidienā',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektīvas',
})
