import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copier dans le presse-papiers',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Arrêter',
  /** Label for setting up a listener */
  'action.listen-execute': 'Écouter',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuler',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Récupérer',

  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nouveau',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Les paramètres ne sont pas un JSON valide',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Paramètres',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Colonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Ligne',
  /** Label for "Query" editor/input */
  'query.label': 'Requête',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL de la requête',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Temps de bout en bout',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Exécution',
  /** Label for "Result" explorer/view */
  'result.label': 'Résultat',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'Le résultat ne peut pas être encodé en CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Enregistrer le résultat comme <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Version de l’API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Version personnalisée de l’API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Jeu de données',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Version de l’API invalide',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Autre',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lire la documentation',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Les perspectives vous permettent d\'exécuter vos requêtes à partir d\'une autre "vue" des documents de votre ensemble de données.',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
