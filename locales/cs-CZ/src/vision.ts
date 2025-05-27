import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Kopírovat do schránky',
  /** Label for deleting a query */
  'action.delete': 'Smazat',
  /** Label for editing a query's title */
  'action.edit-title': 'Upravit název',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Zastavit',
  /** Label for setting up a listener */
  'action.listen-execute': 'Poslouchat',
  /** Label for query loading table */
  'action.load-queries': 'Načíst dotazy',
  /** Label for loading a query */
  'action.load-query': 'Načíst dotaz',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Zrušit',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Načíst',
  /** Label for saving a query */
  'action.save-query': 'Uložit dotaz',
  /** Label for updating a query */
  'action.update': 'Aktualizovat',

  /** Label for actions user can take */
  'label.actions': 'Akce',
  /** Label for saved queries that have been edited */
  'label.edited': 'Upraveno',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nové',
  /** Label for query type "personal" */
  'label.personal': 'Osobní',
  /** Label for savedAt date */
  'label.saved-at': 'Uloženo v',
  /** Saved queries */
  'label.saved-queries': 'Uložené dotazy',
  /** Search queries */
  'label.search-queries': 'Hledat dotazy',
  /** Share query */
  'label.share': 'Sdílet',
  /** Label for saved query type "team" */
  'label.team': 'Tým',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametry nejsou platný JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametry',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Sloupec',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Řádek',
  /** Label for "Query" editor/input */
  'query.label': 'Dotaz',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL dotazu',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Celkový čas',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Doba vykonání',
  /** Label for "Result" explorer/view */
  'result.label': 'Výsledek',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Výsledek nelze zakódovat jako CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Uložit výsledek jako <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'nepoužitelné',

  /** Query already saved error label */
  'save-query.already-saved': 'Dotaz již byl uložen',
  /** Save error label */
  'save-query.error': 'Chyba při ukládání dotazu',
  /** Save success label */
  'save-query.success': 'Dotaz uložen',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Verze API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Vlastní verze API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Neplatná verze API',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Jiné',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektiva "<code>previewDrafts</code>" byla přejmenována na "<code>drafts</code>" a nyní je zastaralá. Tato změna je účinná pro všechny verze s podporou perspektivy (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Číst dokumentaci',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Žádná perspektiva (výchozí API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspektivy umožňují spouštět váš dotaz proti různým "pohledům" na obsah ve vašem datasetu',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Výchozí perspektiva se změní z "<code>raw</code>" na "<code>published</code>" v nadcházející verzi API. Pro více informací se prosím poraďte s dokumentací.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Připnuté vydání',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspektivy',
})
