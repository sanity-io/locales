import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copier dans le presse-papiers',
  /** Label for deleting a query */
  'action.delete': 'Supprimer',
  /** Label for editing a query's title */
  'action.edit-title': 'Modifier le titre',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Arrêter',
  /** Label for setting up a listener */
  'action.listen-execute': 'Écouter',
  /** Label for query loading table */
  'action.load-queries': 'Charger les requêtes',
  /** Label for loading a query */
  'action.load-query': 'Charger la requête',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Annuler',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Récupérer',
  /** Label for saving a query */
  'action.save-query': 'Enregistrer la requête',
  /** Label for updating a query */
  'action.update': 'Mettre à jour',

  /** Label for actions user can take */
  'label.actions': 'Actions',
  /** Label for saved queries that have been edited */
  'label.edited': 'Modifié',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Nouveau',
  /** Label for query type "personal" */
  'label.personal': 'Personnel',
  /** Label for savedAt date */
  'label.saved-at': 'Enregistré le',
  /** Saved queries */
  'label.saved-queries': 'Requêtes enregistrées',
  /** Search queries */
  'label.search-queries': 'Rechercher des requêtes',
  /** Share query */
  'label.share': 'Partager',
  /** Label for saved query type "team" */
  'label.team': 'Équipe',

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

  /** Query already saved error label */
  'save-query.already-saved': 'Requête déjà enregistrée',
  /** Save error label */
  'save-query.error': "Erreur lors de l'enregistrement de la requête",
  /** Save success label */
  'save-query.success': 'Requête enregistrée',

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
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'La perspective "<code>previewDrafts</code>" a été renommée en "<code>drafts</code>" et est maintenant obsolète. Ce changement est effectif pour toutes les versions prenant en charge la perspective (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Lire la documentation',
  /** Option for selecting default perspective */
  'settings.perspectives.default': "Aucune perspective (défaut de l'API)",
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Les perspectives vous permettent d\'exécuter vos requêtes à partir d\'une autre "vue" des documents de votre ensemble de données.',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'La perspective par défaut passera de "<code>raw</code>" à "<code>published</code>" dans une version future de l\'API. Veuillez consulter la documentation pour plus de détails.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Version épinglée',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Brouillons planifiés',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',
})
