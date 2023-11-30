/* eslint sort-keys: "error" */
export default {
  /** Action to delete a single test document */
  'test-documents.action.delete-test-documents_one': 'Slett testdokumentet',

  /** Action to delete multiple test documents */
  'test-documents.action.delete-test-documents_other': 'Slett {{count}} testdokumenter',

  /** Delete test documents confirmation prompt header */
  'test-documents.confirmation-title': 'Er du sikker?',

  /** Loading the amount of test documents */
  'test-documents.loading-document-count': 'Laster antall dokumenter…',

  /** The number of test documents in the dataset is one */
  'test-documents.test-document-count_one':
    'Det er ett lokaliseringstestdokument (eller utkast) i datasettet <code>{{dataset}}</code>.',

  /** The number of test documents in the dataset is more than one */
  'test-documents.test-document-count_other':
    'Det er {{count}} lokaliseringstestdokumenter (inkludert utkast) i datasettet <code>{{dataset}}</code>.',

  /** The number of test documents in the dataset is zero */
  'test-documents.test-document-count_zero': 'Det er ingen lokaliseringstestdokumenter',

  /** Text explaining what the test documents actually are, and that they should be safe to delete */
  'test-documents.test-document-description':
    'Testdokumentene har typenavnet <code>{{schemaTypeName}}</code>, og en attributt <code>{{propName}}</code> satt til <code>true</code>. Derfor bør man kunne anta at dokumentene trygt kan slettes.',
}
