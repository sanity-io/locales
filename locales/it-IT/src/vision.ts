import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copia negli appunti',
  /** Label for deleting a query */
  'action.delete': 'Elimina',
  /** Label for editing a query's title */
  'action.edit-title': 'Modifica titolo',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Ferma',
  /** Label for setting up a listener */
  'action.listen-execute': 'Ascolta',
  /** Label for query loading table */
  'action.load-queries': 'Carica query',
  /** Label for loading a query */
  'action.load-query': 'Carica query',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annulla',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Esegui',
  /** Label for saving a query */
  'action.save-query': 'Salva query',
  /** Label for updating a query */
  'action.update': 'Aggiorna',

  /** Label for actions user can take */
  'label.actions': 'Azioni',
  /** Label for saved queries that have been edited */
  'label.edited': 'Modificato',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nuovo',
  /** Label for query type "personal" */
  'label.personal': 'Personale',
  /** Label for savedAt date */
  'label.saved-at': 'Salvato il',
  /** Saved queries */
  'label.saved-queries': 'Query salvate',
  /** Search queries */
  'label.search-queries': 'Cerca query',
  /** Share query */
  'label.share': 'Condividi',
  /** Label for saved query type "team" */
  'label.team': 'Squadra',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'I parametri non sono un JSON valido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Colonna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linea',
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL della Query',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Tempo inizio-fine',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Esecuzione',
  /** Label for "Result" explorer/view */
  'result.label': 'Risultato',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Il risultato non può essere codificato come CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Salva il risultato come <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/d',

  /** Query already saved error label */
  'save-query.already-saved': 'Query già salvata',
  /** Save error label */
  'save-query.error': 'Errore nel salvataggio della query',
  /** Save success label */
  'save-query.success': 'Query salvata',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versione API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versione API personalizzata',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versione API non valida',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Altro',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'La prospettiva "<code>previewDrafts</code>" è stata rinominata in "<code>drafts</code>" ed è ora deprecata. Questo cambiamento è effettivo per tutte le versioni con supporto alla prospettiva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Leggi la documentazione',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nessuna prospettiva (default API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Le Perspectives consentono alla tua query di essere eseguita contro diverse "visualizzazioni" dei contenuti nel tuo dataset',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'La prospettiva predefinita cambierà da "<code>raw</code>" a "<code>published</code>" in una futura versione dell\'API. Si prega di consultare la documentazione per maggiori dettagli.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Rilascio fissato',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
