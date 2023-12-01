/* eslint sort-keys: "error" */
export default {
  /** Action to delete a single test document */
  'test-documents.action.delete-test-documents_one': 'Delete test document',

  /** Action to delete multiple test documents */
  'test-documents.action.delete-test-documents_other': 'Delete {{count}} test documents',

  /** Delete test documents confirmation prompt header */
  'test-documents.confirmation-title': 'Are you sure?',

  /** Loading the amount of test documents */
  'test-documents.loading-document-count': 'Loading document count…',

  /** The number of test documents in the dataset is one */
  'test-documents.test-document-count_one':
    'There is currently one localization test document (or draft) in the dataset <code>{{dataset}}</code>.',

  /** The number of test documents in the dataset is more than one */
  'test-documents.test-document-count_other':
    'There are currently {{count}} localization test documents (including drafts) in the dataset <code>{{dataset}}</code>.',

  /** The number of test documents in the dataset is zero */
  'test-documents.test-document-count_zero': 'There are currently no test documents',

  /** Text explaining what the test documents actually are, and that they should be safe to delete */
  'test-documents.test-document-description':
    'Test documents have the type name <code>{{schemaTypeName}}</code>, and a property named <code>{{propName}}</code> set to true. Thus it should be safe to assume they are okay to delete.',
}
