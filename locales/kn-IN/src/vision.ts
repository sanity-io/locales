import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಿ',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'ನಿಲ್ಲಿಸು',
  /** Label for setting up a listener */
  'action.listen-execute': 'ಆಲಿಸು',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'ರದ್ದುಮಾಡು',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'ಫೆಚ್ ಮಾಡು',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'ಹೊಸ',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು ಮಾನ್ಯ JSON ಅಲ್ಲ',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'ಪ್ಯಾರಾಮೀಟರ್‌ಗಳು',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'ಕಾಲಮ್',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'ಸಾಲು',
  /** Label for "Query" editor/input */
  'query.label': 'ಪ್ರಶ್ನೆ',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'ಪ್ರಶ್ನೆ URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'ಅಂತ್ಯದಿಂದ ಅಂತ್ಯದವರೆಗೆ',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'ನಿರ್ವಹಣೆ',
  /** Label for "Result" explorer/view */
  'result.label': 'ಫಲಿತಾಂಶ',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'ಲಭ್ಯವಿಲ್ಲ',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API ಆವೃತ್ತಿ',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'ಕಸ್ಟಮ್ API ಆವೃತ್ತಿ',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'ಡೇಟಾಸೆಟ್',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'ಅಮಾನ್ಯ API ಆವೃತ್ತಿ',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'ಇತರೆ',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'ಪರ್ಸ್ಪೆಕ್ಟಿವ್',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'ದಾಖಲೆಗಳನ್ನು ಓದಿ',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'ಪರ್ಸ್ಪೆಕ್ಟಿವ್‌ಗಳು ನಿಮ್ಮ ಡೇಟಾಸೆಟ್‌ನಲ್ಲಿನ ವಿಷಯದ ವಿವಿಧ "ನೋಟ"ಗಳ ವಿರುದ್ಧ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಚಲಾಯಿಸಲು ಅನುಮತಿಸುತ್ತವೆ',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'ಪರ್ಸ್ಪೆಕ್ಟಿವ್‌ಗಳು',
})
