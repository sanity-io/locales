import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    "Значэнне гэтага поля не з'яўляецца сапраўдным відэа. Скід гэтага поля дазволіць вам выбраць новае відэа.",
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Скінуць значэнне',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Несапраўднае значэнне відэа',

  /** Video error fallback description */
  'video-error.description': 'Не ўдалося загрузіць відэа',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Паспрабаваць зноў',
})
