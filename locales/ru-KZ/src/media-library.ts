import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    'Бұл өрістің мәні жарамды бейне емес. Бұл өрісті қалпына келтіру арқылы жаңа бейне таңдауға болады.',
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Мәнді қалпына келтіру',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Жарамсыз бейне мәні',

  /** Video error fallback description */
  'video-error.description': 'Бейнені жүктеу сәтсіз аяқталды',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Қайталап көру',
})
