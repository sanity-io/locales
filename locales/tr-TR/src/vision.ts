import { removeUndefinedLocaleResources } from "sanity";

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  "action.copy-url-to-clipboard": "Panoya kopyala",
  /** Label for stopping an ongoing listen operation */
  "action.listen-cancel": "Durdur",
  /** Label for setting up a listener */
  "action.listen-execute": "Dinle",
  /** Label for cancelling an ongoing query */
  "action.query-cancel": "İptal",
  /** Label for executing the query, eg doing a fetch */
  "action.query-execute": "Getir",

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  "label.new": "Yeni",

  /** Error message for when the "Params" input are not a valid json */
  "params.error.params-invalid-json": "Parametreler geçerli bir JSON değil",
  /** Label for "Params" (parameters) editor/input */
  "params.label": "Parametreler",

  /** Label for 'Column' indicator when there is an error within the query */
  "query.error.column": "Sütun",
  /** Label for 'Line' indicator when there is an error within the query */
  "query.error.line": "Satır",
  /** Label for "Query" editor/input */
  "query.label": "Sorgu",
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  "query.url": "Sorgu URL'si",

  /** Label for "End to End time" information of the fetched query */
  "result.end-to-end-time-label": "Uçtan uca",
  /** Label for "Execution time" information of the fetched query */
  "result.execution-time-label": "Yürütme",
  /** Label for "Result" explorer/view */
  "result.label": "Sonuç",
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  "result.timing-not-applicable": "u/u",

  /** Label for the "API version" dropdown in settings */
  "settings.api-version-label": "API sürümü",
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  "settings.custom-api-version-label": "Özel API sürümü",
  /** Label for the "Dataset" dropdown in vision settings */
  "settings.dataset-label": "Dataset",
  /** Error label for when the API version in 'Custom API version' input is invalid */
  "settings.error.invalid-api-version": "Geçersiz API sürümü",
  /** Label for the "other" versions within the "API version" dropdown */
  "settings.other-api-version-label": "Diğer",
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  "settings.perspective-label": "Perspective",
  /** Call to action to read the docs related to "Perspectives" */
  "settings.perspectives.action.docs-link": "Dokümanları oku",
  /** Description for popover that explains what "Perspectives" are */
  "settings.perspectives.description":
    'Perspectives, sorgunuzun dataset\'inizdeki içeriğin farklı "görünümlerine" karşı çalışmasına izin verir',
  /** Title for popover that explains what "Perspectives" are */
  "settings.perspectives.title": "Perspectives",
});
