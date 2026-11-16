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
  'action.save-personal-copy': 'Enregistrer une copie personnelle',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Enregistrer comme personnel',
  /** Label for saving a query */
  'action.save-query': 'Enregistrer la requête',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Enregistrer comme partagé',
  /** Label for unsharing a query */
  'action.unshare': 'Ne plus partager',
  /** Label for updating a query */
  'action.update': 'Mettre à jour',

  /** Label for actions user can take */
  'label.actions': 'Actions',
  /** Label for all saved queries */
  'label.all': 'Tout',
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
  /** Label for query type "shared" */
  'label.shared': 'Partagé',
  /** Label for saved query type "team" */
  'label.team': 'Équipe',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Sans titre',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Les paramètres ne sont pas un JSON valide',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Paramètres',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Colonne',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Ligne',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    "Cette version de l'API ne prend pas en charge les perspectives complexes. Utilisez {{apiVersion}} ou une version ultérieure.",
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    "Cette version de l'API ne prend pas en charge les variantes de contenu. Utilisez la version expérimentale de l'API ({{apiVersion}}).",
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
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Copie personnelle enregistrée',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'Les requêtes partagées sont stockées en tant que documents dans votre dataset et sont comptabilisées dans votre quota de documents.',
  /** Save shared query success label */
  'save-query.shared-success': 'Requête partagée enregistrée',
  /** Save success label */
  'save-query.success': 'Requête enregistrée',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Requête déplacée vers les personnelles',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Version de l’API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    "Lorsqu'une variante est sélectionnée, la version de l'API doit être vX.",
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

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Utilise un crédit IA par requête',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} crédit(s) IA sur {{quota}} restant(s) ce mois-ci.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} crédits IA utilisés ce mois-ci, soit {{deficit}} de plus que les {{quota}} inclus.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    "Votre organisation a utilisé {{used}} de ses {{quota}} crédits IA ce mois-ci. Les Sanity Agent Actions sont donc suspendues jusqu'au mois prochain ou jusqu'à ce que la limite de dépenses soit relevée.",
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    "Votre organisation a atteint sa limite de dépenses en crédits IA. Les Sanity Agent Actions sont donc suspendues jusqu'au mois prochain ou jusqu'à ce que la limite soit relevée.",
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Comment fonctionnent les crédits IA',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Gérer les crédits IA',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Plus de crédits IA',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': "Utilisation de l'IA",
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} crédits IA utilisés ce mois-ci.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': "Version d'API inachevée",
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    "Les requêtes s'exécutent avec la version d'API {{version}}. Sélectionnez pour la modifier dans Options.",
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    "Les requêtes s'exécutent via l'API CDN avec la version d'API {{version}}. Sélectionnez pour la modifier dans Options.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    "Les requêtes s'exécutent via l'API avec la version d'API {{version}}, et non via l'API CDN : celle-ci ne dessert pas la perspective {{perspective}}. Sélectionnez pour la modifier dans Options.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    "La version d'API dans Options est inachevée, aucune donnée ne peut donc être récupérée tant qu'elle n'est pas complète.",
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    "Les requêtes s'exécutent avec la version d'API {{version}}, requise par la variante sélectionnée.",
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Après',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Avant',
  /** What the Delta panel does */
  'vision.delta.description':
    "Exécute la requête en mode delta, comme le font les webhooks, les écouteurs et les Sanity Functions propulsés par GROQ : before() et after() représentent le document avant et après une modification, @ est le document après celle-ci, et delta::changedAny() les compare. Elle s'exécute dans le navigateur avec groq-js. Un côté vide signifie qu'il n'y a pas de document : la modification le crée ou le supprime.",
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID du document',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    "Chargez l'historique d'un document, ou écrivez les documents dans Avant et Après.",
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': "La requête n'a pas pu être exécutée en mode delta : {{message}}",
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': "Après n'est pas un JSON valide : {{message}}",
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': "Before n'est pas un JSON valide : {{message}}",
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': "Charger l'historique",
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': "L'historique n'a pas pu être chargé : {{message}}",
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    "Correspond : un webhook ou une fonction avec ce filtre s'exécute pour ce changement.",
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    "Ne correspond pas : un webhook ou une fonction avec ce filtre ne s'exécute pas pour ce changement.",
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': "Corrigez la requête et ses paramètres pour l'exécuter en mode delta.",
  /** Heading of the delta result */
  'vision.delta.result': 'Résultat',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Rien : le changement supprime le document',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Rien : le changement crée le document',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Fermer le panneau',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    "Le plan de requête correspond à la façon dont le Content Lake exécute la requête : ce qu'il lit, filtre et trie pendant la lecture, et ce qui est laissé pour les étapes suivantes. « Explique-moi ceci » fait appel aux Sanity Agent Actions pour décrire la requête et son plan en termes simples, ce qui utilise un crédit IA.",
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': "Écrivez une requête pour l'expliquer.",
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Explique-moi ceci',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': "La requête n'a pas pu être expliquée : {{message}}",
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': "Compté dans l'index, sans lire les documents.",
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    "La sous-requête s'exécute une seule fois pour tous les documents, en une seule récupération groupée, et non une fois par document.",
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    "Une partie du filtre s'exécute en mémoire, après la lecture : chaque document laissé passer par l'index est d'abord lu, ce qui ralentit sur de grands jeux de données. Les jointures (->) et les fonctions dans un filtre ne peuvent pas utiliser l'index.",
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    "L'index trie et limite les documents pendant leur lecture.",
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'La tranche est effectuée en mémoire après la lecture, et non comme une limite pendant la lecture.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    "Le tri se fait en mémoire, après avoir lu toutes les correspondances. Triez par des attributs que l'index peut trier.",
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'GROQ haute performance',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'Ce qui se démarque',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Afficher le plan de requête',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': "Le plan de requête n'a pas pu être récupéré : {{message}}",
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plan de requête',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Extrait copié dans le presse-papiers',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': "Copier l'extrait",
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    "Exécutez cette requête en dehors du studio avec l'un de ces extraits.",
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    "La requête et les paramètres totalisent {{size}} caractères en tant que paramètres de recherche ; à partir de {{limit}}, @sanity/client les envoie sous forme de corps JSON plutôt que dans l'URL, l'extrait fait donc de même.",
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Exporter la requête',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    "Les jeux de données privés nécessitent un jeton API. Les jeux de données publics peuvent omettre l'en-tête Authorization.",
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Code copié dans le presse-papiers',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Copier le code',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    "Exécutez d'abord la requête pour obtenir un résultat à partir duquel déduire les types.",
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': "Échec de l'évaluation du schéma : {{message}}",
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    "Déduit à partir du résultat récupéré, car la requête n'a pas pu être évaluée par rapport au schéma de l'espace de travail.",
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    "Déduit à partir du schéma de l'espace de travail, de la même manière que sanity typegen le fait.",
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    "Le résultat affiché a été récupéré pour une requête ou des paramètres différents. Exécutez d'abord la requête actuelle pour obtenir un résultat à partir duquel déduire les types.",
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Exporter TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Exporter Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Ajouter à la requête',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'Dans cette requête',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'La déclarer',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': "Nécessite la version d'API {{version}} ou ultérieure",
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'dans cette requête',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'de votre bibliothèque',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Fonction personnalisée, déclarée à la ligne {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Fonctionne uniquement en mode delta, là où les webhooks et les Sanity Functions exécutent leurs filtres',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extraire en fonction',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'Dans votre bibliothèque de fonctions, non déclarée dans cette requête',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Référence des fonctions GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    "Conservées dans ce navigateur pour chaque dataset du projet. Les complétions proposent ces fonctions, et le lint propose d'en déclarer une appelée par la requête.",
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    "Enregistrez une fonction déclarée par la requête pour l'utiliser dans d'autres requêtes.",
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Bibliothèque',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    "Déclarez des fonctions personnalisées en haut de la requête, ou placez le curseur dans une projection, comme author->{name}, et appuyez sur le bouton d'extraction au-dessus de l'éditeur ({{shortcut}}).",
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'Dans cette requête',
  /** Removes a function from the library */
  'vision.functions.remove': 'Retirer de la bibliothèque',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Remplacer dans la requête',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': "Afficher {{name}} dans l'éditeur",
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Enregistrer dans la bibliothèque',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Enregistré',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Mettre à jour la bibliothèque',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Générer une requête',
  /** Closes the generate query bar */
  'vision.generate.close': 'Fermer',
  /** Explanation under the generate query field */
  'vision.generate.description':
    "Les Agent Actions de Sanity rédigent le GROQ à partir de votre description et des types de documents, et le Content Lake vérifie chaque tentative ; chaque tentative utilise un crédit IA. Cela remplace la requête de cet onglet et l'exécute ; annuler dans l'éditeur restaure la requête précédente.",
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': "La requête n'a pas pu être générée",
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'Que doit récupérer la requête ?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Ouvrir la dernière tentative',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'Les 10 auteurs les plus récents, triés par nom de famille puis par prénom',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Rédaction de la requête…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Correction de la requête (tentative {{attempt}} sur {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Générer',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Succès du cache CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Modifié',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Modifications',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': "Les modifications n'ont pas pu être affichées.",
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Réessayer',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Comparé avec la requête de {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Paramètres',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Requête',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Seul le formatage a changé',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Résultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL de la requête',
  /** Empty state of the history panel */
  'vision.history.empty': "Rien n'a encore été récupéré",
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Échoué',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Les masquer',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Masque {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Seuls les champs masqués ont changé',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Requête générée',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Lien ouvert',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Mise à jour en direct',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Connexion en direct redémarrée',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Récupération en direct démarrée',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Requête chargée',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Bouton de récupération',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutations appliquées',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Options modifiées',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'URL collée',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Nouvelle récupération automatique reprise',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Raccourci clavier',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Même résultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Les afficher',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Affichage de {{fields}}, masqués par défaut',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Trop volumineux pour être comparé',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Aucun changement',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    "Aucun résultat du linter. Les problèmes détectés par le linter GROQ dans la requête s'affichent ici au fur et à mesure que vous tapez ; sélectionnez-en un pour le choisir dans l'éditeur.",
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Ligne {{line}}, colonne {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Erreur',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Indice',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Avertissement',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Utiliser {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'En direct',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Récupération en direct',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Récupérer, puis récupérer à nouveau chaque fois que les documents du résultat changent',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    "Arrêter la récupération lorsque les documents du résultat changent. La récupération manuelle reste possible, pour les résultats qu'aucun changement de document n'affecte, comme now()",
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Mises à jour en direct déconnectées : {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Arrêter le direct',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Ajouter une mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Créer un document',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Supprimer un document',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Supprimer les documents du résultat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Modifier un document',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Patcher les documents du résultat',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Appliquer à {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': "Les mutations n'ont pas été appliquées",
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    "Appliquer envoie ce qu'une simulation a montré : exécutez-en une d'abord.",
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': "Ajouter une _key aux éléments de tableau qui n'en ont pas",
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    "Le studio a besoin d'une _key sur chaque élément de tableau pour pouvoir le modifier.",
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Modifications',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': "Les modifications n'ont pas pu être affichées.",
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Réessayer',
  /** What the Mutate panel does */
  'vision.mutate.description':
    "Écrivez les mutations telles que l'API Mutations les attend, sous forme de liste : create, createOrReplace, createIfNotExists, delete et patch, par ID ou par requête GROQ. Une simulation montre ce qu'elles feraient à chaque document sans rien modifier ; Appliquer les écrit ensuite dans le dataset en une seule transaction, avec votre compte.",
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutation {{index}} : {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Générer des mutations',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    "Les Agent Actions de Sanity écrivent les mutations à partir de votre description, des documents du résultat et de leurs types, et une simulation vérifie chaque tentative ; chaque tentative consomme un crédit IA. Elles remplacent les mutations ici, où annuler les restaure ; rien n'est écrit tant qu'elles ne sont pas appliquées.",
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': "Les mutations n'ont pas pu être générées",
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'Que doivent faire les mutations ?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Changer le titre des documents du résultat en foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Écriture des mutations…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Correction des mutations (tentative {{attempt}} sur {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': "Les modifications omettent {{fields}}, comme le fait l'Historique.",
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'Les mutations ne sont pas un JSON valide : {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'La mutation {{index}} doit comporter exactement un seul élément parmi create, createOrReplace, createIfNotExists, delete ou patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutations',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'Les mutations ne touchent aucun document.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Écrivez une liste de mutations, une seule mutation, ou un corps de requête contenant une liste de mutations.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Créer',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Supprimer',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Aucun changement',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Mettre à jour',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Essai à blanc',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': "L'essai à blanc a échoué",
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Essai à blanc',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'Les mutations, le dataset ou les options ont changé depuis cet essai à blanc. Relancez-le pour les appliquer.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Modifiés : {{changed}} · Inchangés : {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Touché',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    "Le CDN a répondu avec une réponse qu'il avait mise en cache, depuis un emplacement proche de vous ; la requête n'a pas atteint l'API.",
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Manqué, pour autant que cette session puisse le dire',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': "Aucun, l'API répond à chaque requête avec un contenu actualisé",
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    "Exécutez la requête pour voir quel point de terminaison y a répondu, si c'était depuis un cache, et où elle s'est exécutée.",
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Répondu par',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': "CDN de l'API",
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Méthode',
  /** The query and its params went in the URL */
  'vision.network.method.get': "GET, avec la requête et les paramètres dans l'URL",
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, avec la requête et les paramètres sous forme de corps JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    "La requête et les paramètres totalisent {{size}} caractères en tant que paramètres de recherche ; à partir de {{limit}}, @sanity/client les envoie sous forme de corps JSON, car l'API limite la longueur d'une URL. Les options restent dans l'URL.",
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Requête exécutée dans',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Non signalé',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Temps',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': "{{e2e}}ms d'aller-retour, {{server}}ms sur le serveur",
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID de trace',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    "Activez « Utiliser le CDN de l'API » dans les options pour envoyer les requêtes via le CDN.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Vous',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': "Suit l'espace de travail",
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Épingler un jeu de données',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned':
    "Épinglé ; l'espace de travail peut utiliser un autre jeu de données",
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': "Utiliser le jeu de données de l'espace de travail",
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Inclure la content source map',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    "Ajoute resultSourceMap à la réponse, affiché dans l'onglet Content Source Map.",
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': "Utiliser le CDN de l'API",
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    "Cet espace de travail vous connecte à l'aide d'un cookie, que le CDN de l'API ne reçoit jamais : il répond comme il le ferait pour un visiteur anonyme, avec ce qu'affiche un jeu de données public.",
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    "Le CDN de l'API ne sert pas les brouillons ni les releases, donc les requêtes avec la perspective {{perspective}} passent par l'API. Avec « published » ou « raw », elles utilisent le CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': "Les requêtes passent par l'API, pas par le CDN",
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    "Envoie la requête au CDN de l'API, comme useCdn: true dans @sanity/client, avec les perspectives published et raw : les brouillons et les releases passent toujours par l'API. Ses réponses sont mises en cache pendant une minute maximum ; le panneau Réseau indique quand une réponse provient du cache.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Utiliser la perspective published',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (aucune sélectionnée)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Aucune',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Réduire le panneau',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Développer le panneau',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Explain',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Fonctions',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Historique',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Muter',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Réseau',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Options',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Réponse',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Content Source Map',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Ajouter un élément',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    "N'importe quelle valeur JSON ; tout autre texte est envoyé sous forme de chaîne",
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    "La requête n'utilise aucun paramètre. Chaque $nom qui y figure obtient un champ ici.",
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Les paramètres ne sont pas un JSON valide. Corrigez-les dans la vue JSON pour les modifier ici.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Ni vrai ni faux ; envoyé comme {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    "N'est pas un type de document de cet espace de travail ; envoyé quand même",
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer':
    "N'est pas un nombre entier, ce dont les tranches ont besoin",
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': "N'est pas une liste ; envoyé comme {{value}}",
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': "N'est pas un nombre ; envoyé comme texte",
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Ne fait pas partie des valeurs connues ; envoyé quand même',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': "N'est pas du texte ; envoyé comme {{value}}",
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, élément {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Élément',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing':
    "Non défini : la requête échoue tant qu'une valeur n'est pas fournie",
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    "Les types proviennent uniquement de la requête : le schéma de l'espace de travail n'a pas pu être lu.",
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Non défini',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Maintenant',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Supprimer',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': "Supprimer l'élément",
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'La requête ne peut pas être analysée, ses paramètres sont donc listés sans types.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'toute valeur JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'vrai ou faux',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'date et heure (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID de document',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'type de document',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'nombre entier',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'liste, chaque élément {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'nombre',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'texte',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Non utilisé par la requête',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Utilisé dans',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Ajusté au contenu, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Redimensionner les paramètres : faites glisser ou utilisez les touches fléchées ; double-cliquez ou appuyez sur Entrée pour ajuster à nouveau au contenu',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formulaire',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Modifier les paramètres en tant que',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': "Requête chargée depuis l'URL collée",
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Requête chargée depuis la commande cURL collée',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    "L'URL collée utilisait la variante « {{variant}} » ; sélectionnez-la dans la barre de navigation pour exécuter la requête avec celle-ci.",
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    "Le dataset « {{dataset}} » de l'URL collée n'est pas disponible ici, le dataset actuel est conservé.",
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    "La perspective de l'URL collée n'est pas prise en charge ici, la perspective actuelle est conservée.",
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    "L'URL collée utilisait la variante « {{variant}} » ; cet espace de travail a désactivé les variantes, donc la requête s'exécute sans elle.",
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Actions de la requête',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    "La re-récupération automatique nécessite la version d'API v2021-03-25 ou ultérieure.",
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Requête copiée dans le presse-papiers',
  /** Menu item copying the query text */
  'vision.query.copy': 'Copier la requête',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Exporter la requête…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formater la requête',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Impossible de formater la requête',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Enregistrer la requête',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Arrêter',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Arrêter la récupération',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    "Vous utilisez la version repensée de l'outil Vision. Revenir en arrière conserve vos onglets et paramètres dans ce navigateur pour la prochaine fois que vous l'essaierez.",
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision repensé (bêta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Revenir à Vision classique',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Essayer maintenant',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Onglets de requêtes, re-récupération en direct, détails des réponses et exports. Vous pouvez revenir en arrière à tout moment.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Pas maintenant',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Essayez le Vision repensé',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Essayer la refonte',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Passez au Vision repensé, en bêta. Vous pouvez revenir en arrière à tout moment depuis sa barre latérale.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': "Rien n'a encore été récupéré",
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Taille de la charge utile',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Balises de synchronisation',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Aucune balise de synchronisation dans la réponse',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Envoyé en tant que corps POST : la requête et les paramètres sont trop longs pour une URL, donc @sanity/client les a envoyés en JSON. Coller cette URL dans Vision charge quand même la requête.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Actions sur le résultat',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Résultat copié dans le presse-papiers',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} copié',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Copier le résultat',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Copier la valeur',
  /** Empty state of the result view */
  'vision.result.empty': 'Exécutez la requête pour voir son résultat ici',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Exporter en CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Exporter en JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Exporter en TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Exporter en Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': "Masquer ce qu'il contient",
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Ajuster à la vue',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Graphe du résultat : faites glisser pour déplacer, faites défiler pour zoomer ; une fois le focus actif, les flèches déplacent, + et - zooment, 0 ajuste',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'Les vues arborescence et JSON le montrent en entier.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit':
    'Seuls les {{nodes}} premiers objets et tableaux sont dessinés.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial':
    'Seules les {{rows}} premières entrées sont listées pour {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} entrées)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'résultat',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Zoomer',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Dézoomer',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Graphe',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Vue du résultat',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Arborescence',
  /** Empty state of the saved queries panel */
  'vision.saved.empty':
    'Aucune requête enregistrée pour le moment. Enregistrez la requête actuelle avec le bouton +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Aucune requête ne correspond à votre recherche',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': "Charger dans l'onglet actuel",
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Ouvrir dans un nouvel onglet',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Renommer',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Enregistrer la requête actuelle',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Cette requête enregistrée utilisait la variante "{{variant}}" ; sélectionnez-la dans la barre de navigation pour exécuter la requête avec elle.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'Le dataset "{{dataset}}" de cette requête enregistrée n\'est pas disponible ici, le dataset actuel est conservé.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Cette requête enregistrée utilisait la variante "{{variant}}" ; cet espace de travail a désactivé les variantes, la requête s\'exécute donc sans elle.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Effacer le stockage',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Oui, effacer le stockage',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    "Supprime vos requêtes enregistrées personnelles et la bibliothèque de fonctions, réinitialise les onglets ouverts et ces valeurs par défaut dans ce navigateur, et revient à l'outil Vision classique. Les requêtes partagées sont conservées.",
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': "Impossible d'effacer les requêtes enregistrées",
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Stockage effacé',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Valeurs par défaut pour les nouveaux onglets. Les onglets ouverts conservent leurs propres options.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    "Un chemin de champ par ligne. Un chemin correspond à n'importe quelle profondeur d'un résultat, donc _rev masque la révision de chaque document qu'il contient. Chaque diff peut quand même les afficher.",
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Réinitialiser aux valeurs par défaut',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': "Champs masqués des diffs d'historique",
  /** Title of the settings dialog */
  'vision.settings.title': 'Paramètres',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Aucune requête partagée pour le moment. Partagez une requête enregistrée pour la rendre disponible à tous les utilisateurs de ce dataset.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Fermer les boîtes de dialogue et les menus',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Compléter un nom de fonction',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Copier la requête',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function':
    'Extraire la projection au niveau du curseur vers une fonction',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Exécuter la requête',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': "Aller au prochain résultat d'analyse (lint)",
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Mettre en forme la requête',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Raccourcis clavier',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Réduire la barre latérale',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Développer la barre latérale',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Barre latérale Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Requêtes enregistrées',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Paramètres',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Requêtes partagées',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Raccourcis clavier',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Aucune carte source de contenu dans la réponse. Activez « Inclure la carte source de contenu » dans Options et récupérez à nouveau.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Redimensionner le panneau des détails de la réponse : faites glisser ou utilisez les touches fléchées ; Origine et Fin pour atteindre les limites, Entrée pour réinitialiser',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Redimensionner les panneaux de requête et de réponse : faites glisser ou utilisez les touches fléchées ; Origine et Fin pour atteindre les limites, Entrée pour réinitialiser',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': "Fermer l'onglet",
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Onglets de requête',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nouvel onglet',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': "Titre de l'onglet",
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Requête sans titre',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Vérifier une requête GROQ dans Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Décrire le schéma dans Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Expliquer une requête GROQ dans Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': "Lire l'onglet Vision ouvert",
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Ouvrir une requête GROQ dans Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Prévisualiser les mutations dans Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Exécuter une requête GROQ dans Vision',
})
