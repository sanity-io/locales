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
  'vista.agent-actions.credits': 'Utilise un crédit IA par requête',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': '{{balance}} crédits IA restants sur {{quota}} ce mois-ci.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} crédits IA utilisés ce mois-ci, soit {{deficit}} de plus que les {{quota}} inclus.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    "Votre organisation a utilisé {{used}} de ses {{quota}} crédits IA ce mois-ci, les Agent Actions de Sanity sont donc suspendues jusqu'au mois prochain ou jusqu'à ce que sa limite de dépenses soit relevée.",
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    "Votre organisation a atteint sa limite de dépenses en crédits IA, les Agent Actions de Sanity sont donc suspendues jusqu'au mois prochain ou jusqu'à ce que la limite soit relevée.",
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Comment fonctionnent les crédits IA',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Gérer les crédits IA',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Plus de crédits IA',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': "Utilisation de l'IA",
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} crédits IA utilisés ce mois-ci.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': "Version d'API inachevée",
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    "Les requêtes s'exécutent avec la version d'API {{version}}. Sélectionnez pour la modifier dans Options.",
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    "Les requêtes s'exécutent via l'API CDN avec la version d'API {{version}}. Sélectionnez pour la modifier dans Options.",
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    "Les requêtes s'exécutent via l'API avec la version d'API {{version}}, et non via l'API CDN : celle-ci ne dessert pas la perspective {{perspective}}. Sélectionnez pour la modifier dans Options.",
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    "La version d'API dans Options est inachevée, aucune donnée ne peut donc être récupérée tant qu'elle n'est pas complète.",
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    "Les requêtes s'exécutent avec la version d'API {{version}}, requise par la variante sélectionnée.",
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Après',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Avant',
  /** What the Delta panel does */
  'vista.delta.description':
    "Exécute la requête en mode delta, comme le font les webhooks, listeners et Sanity Functions basés sur GROQ : before() et after() représentent le document avant et après une modification, @ est le document après celle-ci, et delta::changedAny() les compare. L'exécution se fait dans le navigateur avec groq-js. Un côté vide signifie l'absence de document : la modification le crée ou le supprime.",
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID du document',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    "Chargez l'historique d'un document, ou écrivez les documents dans Avant et Après.",
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': "La requête n'a pas pu être exécutée en mode delta : {{message}}",
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': "Après n'est pas un JSON valide : {{message}}",
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': "Before n'est pas un JSON valide : {{message}}",
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': "Charger l'historique",
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': "L'historique n'a pas pu être chargé : {{message}}",
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    "Correspond : un webhook ou une fonction avec ce filtre s'exécute pour ce changement.",
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    "Ne correspond pas : un webhook ou une fonction avec ce filtre ne s'exécute pas pour ce changement.",
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': "Corrigez la requête et ses paramètres pour l'exécuter en mode delta.",
  /** Heading of the delta result */
  'vista.delta.result': 'Résultat',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Rien : le changement supprime le document',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Rien : le changement crée le document',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Fermer le panneau',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    "Le plan de requête décrit comment le Content Lake exécute la requête : ce qu'il lit, filtre et trie pendant la lecture, et ce qui est laissé pour des étapes ultérieures. Expliquez-moi ceci fait appel aux Sanity Agent Actions pour décrire la requête et son plan en termes simples, ce qui consomme un crédit IA.",
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': "Écrivez une requête pour l'expliquer.",
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Expliquez-moi ceci',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': "La requête n'a pas pu être expliquée : {{message}}",
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': "Compté dans l'index, sans lire les documents.",
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    "La sous-requête s'exécute une seule fois pour tous les documents, en un seul lot, et non une fois par document.",
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    "Une partie du filtre s'exécute en mémoire, après la lecture : chaque document laissé passer par l'index est d'abord lu, ce qui ralentit sur de grands jeux de données. Les jointures (->) et les fonctions dans un filtre ne peuvent pas utiliser l'index.",
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    "L'index trie et limite les documents pendant la lecture.",
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'La tranche est prélevée en mémoire après la lecture, et non comme une limite pendant la lecture.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    "Le tri se fait en mémoire, après la lecture de toutes les correspondances. Triez selon des attributs que l'index peut utiliser pour le tri.",
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ haute performance',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'Ce qui ressort',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Afficher le plan de requête',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': "Le plan de requête n'a pas pu être récupéré : {{message}}",
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Plan de requête',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Extrait copié dans le presse-papiers',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': "Copier l'extrait",
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    "Exécutez cette requête en dehors du studio avec l'un de ces extraits.",
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exporter la requête',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    "Les datasets privés nécessitent un jeton API. Les datasets publics peuvent omettre l'en-tête Authorization.",
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Code copié dans le presse-papiers',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Copier le code',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    "Récupérez d'abord la requête afin d'avoir un résultat à partir duquel dériver les types.",
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': "Échec de l'évaluation du schéma : {{message}}",
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    "Déduit du résultat récupéré, car la requête n'a pas pu être évaluée par rapport au schéma de l'espace de travail.",
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    "Déduit du schéma de l'espace de travail, de la même manière que sanity typegen le fait.",
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    "Le résultat affiché a été récupéré pour une requête ou des paramètres différents. Récupérez d'abord la requête actuelle afin d'avoir un résultat à partir duquel dériver les types.",
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exporter TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exporter Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Ajouter à la requête',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'Dans cette requête',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'La déclarer',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': "Nécessite la version d'API {{version}} ou ultérieure",
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'dans cette requête',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'depuis votre bibliothèque',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Fonction personnalisée, déclarée à la ligne {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Fonctionne uniquement en mode delta, là où les webhooks et les Sanity Functions exécutent leurs filtres',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extraire en fonction',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'Dans votre bibliothèque de fonctions, non déclarée dans cette requête',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Référence des fonctions GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Conservées dans ce navigateur pour chaque dataset du projet. Les complétions proposent ces fonctions, et le lint propose de déclarer un appel de requête comme fonction.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    "Enregistrez une fonction déclarée par la requête pour l'utiliser dans d'autres requêtes.",
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Bibliothèque',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    "Déclarez des fonctions personnalisées en haut de la requête, ou placez le curseur dans une projection, comme author->{name}, et appuyez sur le bouton d'extraction au-dessus de l'éditeur ({{shortcut}}).",
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'Dans cette requête',
  /** Removes a function from the library */
  'vista.functions.remove': 'Retirer de la bibliothèque',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Remplacer dans la requête',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': "Afficher {{name}} dans l'éditeur",
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Enregistrer dans la bibliothèque',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Enregistré',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Mettre à jour la bibliothèque',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Générer une requête',
  /** Closes the generate query bar */
  'vista.generate.close': 'Fermer',
  /** Explanation under the generate query field */
  'vista.generate.description':
    "Les Actions d'agent Sanity écrivent le GROQ à partir de votre description et des types de documents, et le Content Lake vérifie chaque tentative ; chaque tentative utilise un crédit IA. Cela remplace la requête de cet onglet et l'exécute ; annuler dans l'éditeur restaure la requête précédente.",
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': "La requête n'a pas pu être générée",
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'Que doit récupérer la requête ?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Ouvrir la dernière tentative',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'Les 10 auteurs les plus récents, triés par nom de famille puis par prénom',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Écriture de la requête…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Correction de la requête (tentative {{attempt}} sur {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Générer',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Succès du cache CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Modifié',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Modifications',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': "Les modifications n'ont pas pu être affichées.",
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Réessayer',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Comparé avec la récupération à {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Paramètres',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Requête',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Seul le formatage a changé',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Résultat',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL de la requête',
  /** Empty state of the history panel */
  'vista.history.empty': "Rien n'a encore été récupéré",
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Échec',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Les masquer',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Masquage de {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Seuls des champs masqués ont changé',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Requête générée',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Lien ouvert',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Mise à jour en direct',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Connexion en direct redémarrée',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Récupération en direct démarrée',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Requête chargée',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Bouton de récupération',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutations appliquées',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Options modifiées',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL collée',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Récupération automatique reprise',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Raccourci clavier',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Même résultat',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Les afficher',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Affichage de {{fields}}, masqués par défaut',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Trop volumineux pour comparer',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Aucun changement',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    "Aucun résultat du linter. Les problèmes détectés par le linter GROQ dans la requête sont listés ici au fur et à mesure que vous tapez ; sélectionnez-en un pour le sélectionner dans l'éditeur.",
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Ligne {{line}}, colonne {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Erreur',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Astuce',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Info',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Avertissement',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Utiliser {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'En direct',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Récupération en direct',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Récupérer, puis récupérer à nouveau chaque fois que les documents du résultat changent',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    "Arrêter la récupération lorsque les documents du résultat changent. La récupération continue de fonctionner à la demande, pour les résultats qu'aucun changement de document n'affecte, comme now()",
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Mises à jour en direct déconnectées : {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Arrêter le direct',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Ajouter une mutation',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Créer un document',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Supprimer un document',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Supprimer les documents du résultat',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Modifier un document',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Modifier les documents du résultat',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Appliquer à {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': "Les mutations n'ont pas été appliquées",
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    "Appliquer envoie ce qu'un essai à blanc a montré : lancez-en un d'abord.",
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': "Ajouter une _key aux éléments de tableau qui n'en ont pas",
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    "Le studio a besoin d'une clé sur chaque élément de tableau pour l'éditer.",
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Modifications',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': "Les modifications n'ont pas pu être affichées.",
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Réessayer',
  /** What the Mutate panel does */
  'vista.mutate.description':
    "Écrivez les mutations comme l'API Mutations les attend, dans une liste : create, createOrReplace, createIfNotExists, delete et patch, par ID ou par une requête GROQ. Un essai à blanc montre ce qu'elles feraient à chaque document sans rien changer ; Appliquer les écrit alors dans le dataset en une seule transaction, avec votre compte.",
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutation {{index}} : {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Générer des mutations',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    "Les Agent Actions de Sanity écrivent les mutations à partir de votre description, des documents du résultat et de leurs types, et un essai à blanc vérifie chaque tentative ; chaque tentative utilise un crédit IA. Elles remplacent les mutations ici, où annuler les ramène ; rien n'est écrit tant que vous ne les appliquez pas.",
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': "Les mutations n'ont pas pu être générées",
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'Que doivent faire les mutations ?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Changer le titre des documents du résultat en foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Écriture des mutations…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Correction des mutations (tentative {{attempt}} sur {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': "Les modifications omettent {{fields}}, comme le fait l'Historique.",
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'Les mutations ne sont pas du JSON valide : {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'La mutation {{index}} doit comporter exactement un seul élément parmi create, createOrReplace, createIfNotExists, delete ou patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutations',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'Les mutations ne touchent aucun document.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Écrivez une liste de mutations, une seule mutation, ou un corps de requête contenant une liste de mutations.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Créer',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Supprimer',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Aucun changement',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Mettre à jour',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Simulation',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'La simulation a échoué',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Simulation',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'Les mutations, le dataset ou les options ont changé depuis cette simulation. Relancez-la pour les appliquer.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Modifiés : {{changed}} · Inchangés : {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Succès',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    "Le CDN a répondu avec une réponse qu'il avait mise en cache, depuis un emplacement proche de vous ; la requête n'a pas atteint l'API.",
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Échec, autant que cette session puisse le dire',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': "Aucun, l'API répond à chaque requête avec du contenu à jour",
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    "Exécutez la requête pour voir quel point de terminaison y a répondu, si c'était depuis un cache, et où elle s'est exécutée.",
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Répondu par',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': "CDN de l'API",
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Requête exécutée dans',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Non rapporté',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Temps',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}} ms aller-retour, {{server}} ms sur le serveur',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID de trace',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    "Activez Utiliser le CDN de l'API dans les Options pour envoyer les requêtes via le CDN.",
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Vous',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': "Suit l'espace de travail",
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Épingler un dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned':
    "Épinglé ; l'espace de travail peut utiliser un autre jeu de données",
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': "Utiliser le jeu de données de l'espace de travail",
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Inclure la content source map',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    "Ajoute resultSourceMap à la réponse, affiché dans l'onglet Content Source Map.",
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': "Utiliser l'API CDN",
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    "Cet espace de travail vous connecte avec un cookie, que l'API CDN ne reçoit jamais : elle répond comme elle le ferait pour un visiteur anonyme, avec ce qu'affiche un jeu de données public.",
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    "L'API CDN ne sert pas les brouillons ni les releases, donc les requêtes avec la perspective {{perspective}} passent par l'API. Avec published ou raw, elles utilisent le CDN.",
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': "Les requêtes passent par l'API, pas par le CDN",
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    "Envoie la requête à l'API CDN, comme useCdn: true dans @sanity/client, avec les perspectives published et raw : les brouillons et les releases passent toujours par l'API. Ses réponses sont mises en cache jusqu'à une minute ; le panneau Network indique quand une réponse provient du cache.",
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Utiliser la perspective published',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (aucune sélectionnée)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Aucune',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Réduire le panneau',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Agrandir le panneau',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Explain',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Functions',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Historique',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Network',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Options',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Réponse',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Plan de source du contenu',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Ajouter un élément',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'Toute valeur JSON ; tout autre texte est envoyé comme une chaîne',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    "La requête n'utilise aucun paramètre. Chaque $nom qu'elle contient obtient un champ ici.",
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Les paramètres ne sont pas du JSON valide. Corrigez-les dans la vue JSON pour les modifier ici.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Ni vrai ni faux ; envoyé comme {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    "N'est pas un type de document de cet espace de travail ; envoyé quand même",
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': "N'est pas un nombre entier, requis pour les tranches",
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': "N'est pas une liste ; envoyé comme {{value}}",
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': "N'est pas un nombre ; envoyé comme texte",
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': "N'est pas une des valeurs connues ; envoyé quand même",
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': "N'est pas du texte ; envoyé comme {{value}}",
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, élément {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Élément',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': "Non défini : la requête échoue tant qu'il n'a pas de valeur",
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    "Les types proviennent uniquement de la requête : le schéma de l'espace de travail n'a pas pu être lu.",
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Non défini',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Maintenant',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Supprimer',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': "Supprimer l'élément",
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'La requête ne peut pas être analysée, ses paramètres sont donc listés sans types.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'toute valeur JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'vrai ou faux',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'date et heure (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID de document',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'type de document',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'nombre entier',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'liste, chaque {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'nombre',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'texte',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Non utilisé par la requête',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Utilisé dans',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Ajusté au contenu, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Redimensionner les paramètres : faites glisser ou utilisez les touches fléchées ; double-cliquez ou appuyez sur Entrée pour ajuster à nouveau au contenu',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulaire',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Modifier les paramètres en tant que',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': "Requête chargée depuis l'URL collée",
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'L\'URL collée utilisait la variante "{{variant}}" ; sélectionnez-la dans la barre de navigation pour exécuter la requête avec celle-ci.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'Le jeu de données "{{dataset}}" dans l\'URL collée n\'est pas disponible ici, le jeu de données actuel est conservé.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    "La perspective de l'URL collée n'est pas prise en charge ici, la perspective actuelle est conservée.",
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'L\'URL collée utilisait la variante "{{variant}}" ; cet espace de travail a désactivé les variantes, donc la requête s\'exécute sans elle.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Actions de la requête',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    "L'actualisation automatique nécessite la version d'API v2021-03-25 ou ultérieure.",
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Requête copiée dans le presse-papiers',
  /** Menu item copying the query text */
  'vista.query.copy': 'Copier la requête',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exporter la requête…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formater la requête',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Impossible de formater la requête',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Enregistrer la requête',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Arrêter',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Arrêter la récupération',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    "Vous utilisez la version repensée de l'outil Vision. Revenir à l'ancienne version conserve vos onglets et paramètres dans ce navigateur pour la prochaine fois que vous l'essaierez.",
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision repensé (bêta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Revenir à Vision classique',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Essayer maintenant',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Onglets de requêtes, rechargement en direct, détails des réponses et exports. Vous pouvez revenir en arrière à tout moment.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Pas maintenant',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Essayez le nouveau Vision repensé',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Essayer la nouvelle version',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Passer à la version repensée de Vision, en bêta. Vous pouvez revenir en arrière à tout moment depuis sa barre latérale.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': "Rien n'a encore été récupéré",
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Taille de la charge utile',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Balises de synchronisation',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Aucune balise de synchronisation dans la réponse',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Actions sur le résultat',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Résultat copié dans le presse-papiers',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} copié',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Copier le résultat',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Copier la valeur',
  /** Empty state of the result view */
  'vista.result.empty': 'Exécutez la requête pour voir son résultat ici',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exporter en CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exporter en JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exporter en TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exporter Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': "Masquer ce qu'il contient",
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Ajuster à la vue',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Graphe du résultat : glisser pour déplacer, faire défiler pour zoomer ; une fois actif, les flèches déplacent, + et - zooment, 0 ajuste',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'Les vues arborescence et JSON le montrent en entier.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Seuls les {{nodes}} premiers objets et tableaux sont dessinés.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial':
    'Seules les {{rows}} premières entrées sont listées pour {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} entrées)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'résultat',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Zoomer',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Dézoomer',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Graphe',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Vue du résultat',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Arborescence',
  /** Empty state of the saved queries panel */
  'vista.saved.empty':
    "Aucune requête enregistrée pour l'instant. Enregistrez la requête actuelle avec le bouton +.",
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Aucune requête ne correspond à votre recherche',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': "Charger dans l'onglet actuel",
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Ouvrir dans un nouvel onglet',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Renommer',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Enregistrer la requête actuelle',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Cette requête enregistrée utilisait la variante "{{variant}}" ; sélectionnez-la dans la barre de navigation pour exécuter la requête avec elle.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'Le dataset "{{dataset}}" de cette requête enregistrée n\'est pas disponible ici, le dataset actuel est conservé.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Cette requête enregistrée utilisait la variante "{{variant}}" ; cet espace de travail a désactivé les variantes, la requête s\'exécute donc sans elle.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Vider le stockage',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Oui, vider le stockage',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    "Supprime vos requêtes enregistrées personnelles et la bibliothèque de fonctions, réinitialise les onglets ouverts et ces paramètres par défaut dans ce navigateur, et revient à l'outil Vision classique. Les requêtes partagées sont conservées.",
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Impossible de vider les requêtes enregistrées',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Stockage vidé',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Paramètres par défaut pour les nouveaux onglets. Les onglets ouverts conservent leurs propres options.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    "Un chemin de champ par ligne. Un chemin correspond à n'importe quelle profondeur d'un résultat, donc _rev masque la révision de chaque document qu'il contient. Chaque diff peut toujours les afficher.",
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Réinitialiser aux valeurs par défaut',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': "Champs masqués dans les diffs d'historique",
  /** Title of the settings dialog */
  'vista.settings.title': 'Paramètres',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Aucune requête partagée pour le moment. Partagez une requête enregistrée pour la rendre accessible à tous les utilisateurs de ce dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Fermer les boîtes de dialogue et les menus',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Compléter un nom de fonction',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Copier la requête',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function':
    'Extraire la projection au niveau du curseur vers une fonction',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Exécuter la requête',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Aller au prochain résultat du linter',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Mettre en forme la requête',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Raccourcis clavier',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Réduire la barre latérale',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Développer la barre latérale',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Barre latérale Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Requêtes enregistrées',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Paramètres',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Requêtes partagées',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Raccourcis clavier',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Aucune carte de source de contenu dans la réponse. Activez « Inclure la carte de source de contenu » dans Options et récupérez à nouveau.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Redimensionner le panneau des détails de la réponse : faites glisser ou utilisez les touches fléchées ; Origine et Fin vont aux limites, Entrée réinitialise',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Redimensionner les volets de requête et de réponse : faites glisser ou utilisez les touches fléchées ; Origine et Fin vont aux limites, Entrée réinitialise',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': "Fermer l'onglet",
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Onglets de requête',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nouvel onglet',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': "Titre de l'onglet",
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Requête sans titre',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Vérifier une requête GROQ dans Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Décrire le schéma dans Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Expliquer une requête GROQ dans Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': "Lire l'onglet Vision ouvert",
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Ouvrir une requête GROQ dans Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Prévisualiser les mutations dans Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Exécuter une requête GROQ dans Vision',
})
