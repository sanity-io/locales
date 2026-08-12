import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Warning description for invalid video value */
  'invalid-video-warning.description':
    "La valeur de ce champ n'est pas une vidéo valide. Réinitialiser ce champ vous permettra de choisir une nouvelle vidéo.",
  /** Reset button text for invalid video warning */
  'invalid-video-warning.reset-button.text': 'Réinitialiser la valeur',
  /** Warning title for invalid video value */
  'invalid-video-warning.title': 'Valeur vidéo invalide',

  /** Video error fallback description */
  'video-error.description': 'Échec du chargement de la vidéo',
  /** Retry button text for video loading errors */
  'video-error.retry-button.text': 'Réessayer',
})
