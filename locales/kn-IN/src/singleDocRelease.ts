import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for scheduling publish of a draft document */
  'action.schedule-publish': 'ಪ್ರಕಟಣೆಯನ್ನು ನಿಗದಿಪಡಿಸಿ',
  /** Tooltip text for when schedule publish fails */
  'action.schedule-publish-error': 'ಪ್ರಕಟಣೆಯನ್ನು ನಿಗದಿಪಡಿಸಲು ವಿಫಲವಾಗಿದೆ',
  /** Tooltip text for when a document is scheduled for publishing */
  'action.schedule-publish-success': 'ಪ್ರಕಟಣೆಗಾಗಿ ದಾಖಲೆಯನ್ನು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ',
  /** Tooltip description for when a document is scheduled for publishing */
  'action.schedule-publish-success-description': '{{publishAt}} ಗಾಗಿ ಪ್ರಕಟಣೆಯನ್ನು ನಿಗದಿಪಡಿಸಲಾಗಿದೆ',
  /** Tooltip text for when schedule publish is disabled due to cardinality one releases */
  'action.schedule-publish.disabled.cardinality-one':
    'ಈ ದಾಖಲೆಗಾಗಿ ನಿಗದಿತ Draft ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.',
  /** Tooltip text for when schedule publish is disabled due to validation errors */
  'action.schedule-publish.disabled.validation-issues':
    'ಪ್ರಸ್ತುತ draft ನಲ್ಲಿ ಮೌಲ್ಯೀಕರಣ ದೋಷಗಳಿರುವ ಕಾರಣ Draft ಅನ್ನು ನಿಗದಿಪಡಿಸಲು ಸಾಧ್ಯವಿಲ್ಲ.',

  /** Empty state action documentation for scheduled drafts */
  'empty-state.action.documentation': 'ನಿಗದಿಪಡಿಸುವಿಕೆಯ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ',
  /** Empty state description for scheduled drafts */
  'empty-state.description':
    'ಭವಿಷ್ಯದ ದಿನಾಂಕ ಮತ್ತು ಸಮಯದಲ್ಲಿ ಪ್ರಕಟಣೆಗಾಗಿ draft ದಾಖಲೆಗಳನ್ನು ನಿಗದಿಪಡಿಸಿ ಮತ್ತು ಲಾಕ್ ಮಾಡಿ.',
  /** Empty state title for scheduled drafts */
  'empty-state.title': 'ನಿಗದಿತ Drafts',
})
