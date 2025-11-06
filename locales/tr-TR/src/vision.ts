import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Panoya kopyala',
  /** Label for deleting a query */
  'action.delete': 'Sil',
  /** Label for editing a query's title */
  'action.edit-title': 'Başlığı Düzenle',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Durdur',
  /** Label for setting up a listener */
  'action.listen-execute': 'Dinle',
  /** Label for query loading table */
  'action.load-queries': 'Sorguları Yükle',
  /** Label for loading a query */
  'action.load-query': 'Sorguyu Yükle',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'İptal',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Getir',
  /** Label for saving a query */
  'action.save-query': 'Sorguyu Kaydet',
  /** Label for updating a query */
  'action.update': 'Güncelle',

  /** Label for actions user can take */
  'label.actions': 'Eylemler',
  /** Label for saved queries that have been edited */
  'label.edited': 'Düzenlendi',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Yeni',
  /** Label for query type "personal" */
  'label.personal': 'Kişisel',
  /** Label for savedAt date */
  'label.saved-at': 'Kaydedildiği Zaman',
  /** Saved queries */
  'label.saved-queries': 'Kaydedilen Sorgular',
  /** Search queries */
  'label.search-queries': 'Sorguları Ara',
  /** Share query */
  'label.share': 'Paylaş',
  /** Label for saved query type "team" */
  'label.team': 'Takım',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Parametreler geçerli bir JSON değil',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parametreler',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Sütun',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Satır',
  /** Label for "Query" editor/input */
  'query.label': 'Sorgu',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': "Sorgu URL'si",

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Uçtan uca',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Yürütme',
  /** Label for "Result" explorer/view */
  'result.label': 'Sonuç',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Sonuç CSV olarak kodlanamaz',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Sonucu şu şekilde kaydet <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'u/u',

  /** Query already saved error label */
  'save-query.already-saved': 'Sorgu zaten kaydedildi',
  /** Save error label */
  'save-query.error': 'Sorgu kaydedilirken hata oluştu',
  /** Save success label */
  'save-query.success': 'Sorgu kaydedildi',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API sürümü',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Özel API sürümü',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Geçersiz API sürümü',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Diğer',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    '"<code>previewDrafts</code>" perspektifi "<code>drafts</code>" olarak yeniden adlandırıldı ve artık kullanımdan kaldırılmıştır. Bu değişiklik, perspektif desteği olan tüm sürümlerde geçerlidir (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Dokümanları oku',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Perspektif yok (API varsayılanı)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives, sorgunuzun dataset\'inizdeki içeriğin farklı "görünümlerine" karşı çalışmasına izin verir',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'Varsayılan perspektif, yaklaşan bir API sürümünde "<code>raw</code>"\'dan "<code>published</code>"\'e değişecek. Daha fazla detay için lütfen dokümanlara danışın.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Sabitlenmiş sürüm',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': undefined, // 'Scheduled drafts'
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
