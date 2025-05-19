import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Salin ke papan klip',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Berhenti',
  /** Label for setting up a listener */
  'action.listen-execute': 'Dengarkan',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Batal',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Ambil',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Baru',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parameter bukan JSON yang valid',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Params',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Kolom',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Baris',
  /** Label for "Query" editor/input */
  'query.label': 'Query',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL Query',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'End-to-end',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Eksekusi',
  /** Label for "Result" explorer/view */
  'result.label': 'Hasil',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Hasil tidak dapat dikodekan sebagai CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Simpan hasil sebagai <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versi API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versi API Kustom',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versi API tidak valid',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Lainnya',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspektif',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'Perspektif "<code>previewDrafts</code>" telah diubah namanya menjadi "<code>drafts</code>" dan sekarang sudah tidak digunakan lagi. Perubahan ini berlaku untuk semua versi yang mendukung perspektif (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Baca dokumentasi',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Tidak ada perspective (API default)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives memungkinkan query Anda dijalankan terhadap "tampilan" yang berbeda dari konten dalam dataset Anda',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Perspective default akan berubah dari "<code>raw</code>" menjadi "<code>published</code>" dalam versi API yang akan datang. Silakan konsultasi dokumentasi untuk detail lebih lanjut.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Rilis yang disematkan',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
