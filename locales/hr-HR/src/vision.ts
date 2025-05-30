import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopiraj u međuspremnik',
  /** Label for deleting a query */
  'action.delete': 'Izbriši',
  /** Label for editing a query's title */
  'action.edit-title': 'Uredi naslov',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zaustavi',
  /** Label for setting up a listener */
  'action.listen-execute': 'Slušaj',
  /** Label for query loading table */
  'action.load-queries': 'Učitaj upite',
  /** Label for loading a query */
  'action.load-query': 'Učitaj upit',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Otkaži',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Dohvati',
  /** Label for saving a query */
  'action.save-query': 'Spremi upit',
  /** Label for updating a query */
  'action.update': 'Ažuriraj',

  /** Label for actions user can take */
  'label.actions': 'Akcije',
  /** Label for saved queries that have been edited */
  'label.edited': 'Uređeno',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Novo',
  /** Label for query type "personal" */
  'label.personal': 'Osobno',
  /** Label for savedAt date */
  'label.saved-at': 'Spremljeno u',
  /** Saved queries */
  'label.saved-queries': 'Spremljeni upiti',
  /** Search queries */
  'label.search-queries': 'Pretraži upite',
  /** Share query */
  'label.share': 'Podijeli',
  /** Label for saved query type "team" */
  'label.team': 'Tim',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametri nisu valjani JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametri',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Stupac',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linija',
  /** Label for "Query" editor/input */
  'query.label': 'Upit',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL upita',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': '"End to End" vrijeme',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Vrijeme izvršenja',
  /** Label for "Result" explorer/view */
  'result.label': 'Rezultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Rezultat se ne može kodirati kao CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Spremi rezultat kao <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'Upit je već spremljen',
  /** Save error label */
  'save-query.error': 'Greška pri spremanju upita',
  /** Save success label */
  'save-query.success': 'Upit spremljen',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Verzija API-ja',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Prilagođena verzija API-ja',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Neispravna verzija API-ja',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Ostalo',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektiva "<code>previewDrafts</code>" je preimenovana u "<code>drafts</code>" i sada je zastarjela. Ova promjena je učinkovita za sve verzije s podrškom za perspektivu (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Pročitaj dokumentaciju',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nema perspektive (zadano za API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektive omogućuju vašem upitu da se izvodi protiv različitih "pogleda" na sadržaj u vašem datasetu',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Zadana perspektiva će se promijeniti sa "<code>raw</code>" na "<code>published</code>" u nadolazećoj verziji API-ja. Molimo konzultirajte dokumentaciju za više detalja.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'pinned release',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektive',
})
