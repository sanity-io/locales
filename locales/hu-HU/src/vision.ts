import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Másolás vágólapra',
  /** Label for deleting a query */
  'action.delete': 'Törlés',
  /** Label for editing a query's title */
  'action.edit-title': 'Cím szerkesztése',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Leállítás',
  /** Label for setting up a listener */
  'action.listen-execute': 'Figyel',
  /** Label for query loading table */
  'action.load-queries': 'Lekérdezések betöltése',
  /** Label for loading a query */
  'action.load-query': 'Lekérdezés betöltése',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Mégse',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Lekérdezés',
  /** Label for saving a query */
  'action.save-query': 'Lekérdezés mentése',
  /** Label for updating a query */
  'action.update': 'Frissítés',

  /** Label for actions user can take */
  'label.actions': 'Műveletek',
  /** Label for saved queries that have been edited */
  'label.edited': 'Szerkesztett',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Új',
  /** Label for query type "personal" */
  'label.personal': 'Személyes',
  /** Label for savedAt date */
  'label.saved-at': 'Mentve',
  /** Saved queries */
  'label.saved-queries': 'Mentett lekérdezések',
  /** Search queries */
  'label.search-queries': 'Lekérdezések keresése',
  /** Share query */
  'label.share': 'Megosztás',
  /** Label for saved query type "team" */
  'label.team': 'Csapat',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'A paraméterek nem érvényes JSON formátumúak',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Paraméterek',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Oszlop',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Sor',
  /** Label for "Query" editor/input */
  'query.label': 'Lekérdezés',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'Lekérdezés URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Végponttól végpontig',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Végrehajtás',
  /** Label for "Result" explorer/view */
  'result.label': 'Eredmény',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Az eredmény nem kódolható CSV formátumba',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Eredmény mentése mint <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'A lekérdezés már mentve van',
  /** Save error label */
  'save-query.error': 'Hiba a lekérdezés mentésekor',
  /** Save success label */
  'save-query.success': 'Lekérdezés mentve',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API verzió',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Egyéni API verzió',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Érvénytelen API verzió',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Egyéb',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'A "<code>previewDrafts</code>" nézet átnevezésre került "<code>drafts</code>" névre és most már elavult. Ez a változás minden olyan verzióra érvényes, amely támogatja a nézeteket (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Dokumentáció olvasása',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Nincs nézet (API alapértelmezés)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'A Perspectives lehetővé teszi a lekérdezés futtatását a dataset különböző "nézetei" ellen',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Az alapértelmezett nézet a "<code>raw</code>"-ról "<code>published</code>"-re fog változni egy közelgő API verzióban. Kérjük, keresse fel a dokumentációt további részletekért.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Rögzített kiadás',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Ütemezett vázlatok',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
