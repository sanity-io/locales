import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copiați în clipboard',
  /** Label for deleting a query */
  'action.delete': 'Șterge',
  /** Label for editing a query's title */
  'action.edit-title': 'Editează titlul',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Oprire',
  /** Label for setting up a listener */
  'action.listen-execute': 'Ascultă',
  /** Label for query loading table */
  'action.load-queries': 'Încarcă interogările',
  /** Label for loading a query */
  'action.load-query': 'Încarcă interogarea',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Anulează',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Interoghează',
  /** Label for saving a query */
  'action.save-query': 'Salvează interogarea',
  /** Label for updating a query */
  'action.update': 'Actualizează',

  /** Label for actions user can take */
  'label.actions': 'Acțiuni',
  /** Label for saved queries that have been edited */
  'label.edited': 'Editat',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nou',
  /** Label for query type "personal" */
  'label.personal': 'Personal',
  /** Label for savedAt date */
  'label.saved-at': 'Salvat la',
  /** Saved queries */
  'label.saved-queries': 'Interogări salvate',
  /** Search queries */
  'label.search-queries': 'Caută interogări',
  /** Share query */
  'label.share': 'Partajează',
  /** Label for saved query type "team" */
  'label.team': 'Echipă',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametrii nu sunt JSON valid',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Coloană',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linie',
  /** Label for "Query" editor/input */
  'query.label': 'Interogare',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL interogare',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Execuție',
  /** Label for "Result" explorer/view */
  'result.label': 'Rezultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Rezultatul nu poate fi codificat ca CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Salvează rezultatul ca <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'Interogarea a fost deja salvată',
  /** Save error label */
  'save-query.error': 'Eroare la salvarea interogării',
  /** Save success label */
  'save-query.success': 'Interogarea a fost salvată',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versiunea API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versiunea API personalizată',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versiunea API invalidă',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altă',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspectiva "<code>previewDrafts</code>" a fost redenumită în "<code>drafts</code>" și este acum învechită. Această schimbare este efectivă pentru toate versiunile cu suport de perspective (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Citiți documentația',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Fără perspectivă (implicit API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectivele permit interogarea diferitelor "vederi" ale conținutului din dataset-ul dvs.',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Perspectiva implicită se va schimba de la "<code>raw</code>" la "<code>published</code>" într-o versiune viitoare a API-ului. Vă rugăm să consultați documentația pentru mai multe detalii.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Lansare fixată',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Schițe programate',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspective',
})
