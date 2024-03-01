import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Supprimer',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': "Afficher l'utilisation",
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Documents utilisant le fichier',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documents utilisant l’image',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Chargement…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Annuler',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Supprimer',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Supprimer le fichier',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Supprimer l’image',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Chargement…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Vous êtes sur le point de supprimer le fichier <strong>{{filename}}}</strong> et ses métadonnées. Êtes-vous sûr ?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Vous êtes sur le point de supprimer le fichier et ses métadonnées. Êtes-vous sûr ?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Vous êtes sur le point de supprimer l’image <strong>{{filename}}</strong> et ses métadonnées. Êtes-vous sûr ?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Vous êtes sur le point de supprimer l’image et ses métadonnées. Êtes-vous sûr ?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Aperçu de l’image',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    "{{filename}} ne peut pas être supprimé car il est en cours d'utilisation. Pour supprimer ce fichier, vous devez d'abord retirer toutes ses utilisations.",
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    "Ce fichier ne peut pas être supprimé car il est en cours d'utilisation. Pour le supprimer, vous devez d'abord retirer toutes ses utilisations.",
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    "{{filename}} ne peut pas être supprimé car il est en cours d'utilisation. Pour supprimer cette image, vous devez d'abord retirer toutes ses utilisations.",
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    "Cette image ne peut pas être supprimée car elle est en cours d'utilisation. Pour la supprimer, vous devez d'abord retirer toutes ses utilisations.",
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Affichage uniquement des actifs des types acceptés : <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Sélectionner un fichier',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Sélectionner une image',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Charger plus',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Pas de fichier',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': "Pas d'image",
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Impossible de supprimer le fichier actuellement sélectionné',
  'asset-source.file.asset-list.action.delete.text': 'Supprimer',
  'asset-source.file.asset-list.action.delete.title': 'Supprimer le fichier',
  'asset-source.file.asset-list.action.select-file.title': 'Sélectionnez le fichier {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': "Afficher l'utilisation",
  'asset-source.file.asset-list.delete-failed': 'Le fichier n’a pas pu être supprimé',
  'asset-source.file.asset-list.delete-successful': 'Le fichier a été supprimé',
  'asset-source.file.asset-list.header.date-added': 'Date d’ajout',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nom de fichier',
  'asset-source.file.asset-list.header.size': 'Taille',
  'asset-source.file.asset-list.header.type': 'Type',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Fichiers téléchargés',
  'asset-source.image.asset-list.delete-failed': 'L’image n’a pas pu être supprimée',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'L’image a été supprimée',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Images téléchargées',
  'asset-source.usage-list.documents-using-file_named_one':
    'Un document utilise le fichier <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} documents utilisent le fichier <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    "Aucun document n'utilise le fichier <code>{{filename}}</code>",
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Un document utilise ce fichier',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} documents utilisent ce fichier',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Aucun document n’utilise ce fichier',
  'asset-source.usage-list.documents-using-image_named_one':
    "Un document utilise l'image <code>{{filename}}</code>",
  'asset-source.usage-list.documents-using-image_named_other':
    "{{count}} documents utilisent l'image <code>{{filename}}</code>",
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    "Aucun document n'utilise l'image <code>{{filename}}</code>",
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Un document utilise cette image',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} documents utilisent cette image',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    "Aucun document n'utilise cette image",

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Aller au mois suivant',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Aller à l’année suivante',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Aller au mois précédent',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Aller à l’année précédente',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Aujourd’hui',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Aller à aujourd’hui',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Demain',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Hier',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Inclure l’heure',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Sélectionner l’heure',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Sélectionner la minute',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Régler sur l’heure actuelle',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} le {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Doit être au format <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Avril',
  /** Month name for August */
  'calendar.month-names.august': 'Août',
  /** Month name for December */
  'calendar.month-names.december': 'Décembre',
  /** Month name for February */
  'calendar.month-names.february': 'Février',
  /** Month name for January */
  'calendar.month-names.january': 'Janvier',
  /** Month name for July */
  'calendar.month-names.july': 'Juillet',
  /** Month name for June */
  'calendar.month-names.june': 'Juin',
  /** Month name for March */
  'calendar.month-names.march': 'Mars',
  /** Month name for May */
  'calendar.month-names.may': 'Mai',
  /** Month name for November */
  'calendar.month-names.november': 'Novembre',
  /** Month name for October */
  'calendar.month-names.october': 'Octobre',
  /** Month name for September */
  'calendar.month-names.september': 'Septembre',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Ven',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Lun',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sam',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Dim',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Jeu',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Mar',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Mer',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Fermer la révision des changements',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Annuler',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Annuler tout',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description':
    'Êtes-vous sûr de vouloir annuler les {{count}} modifications ?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Annuler la modification',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Annuler les modifications',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description':
    'Êtes-vous sûr de vouloir annuler les modifications ?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Êtes-vous sûr de vouloir annuler la modification ?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Ajouté',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Ajouté à la position {{position}}',
  'changes.array.item-moved_down_one': 'Déplacé d’une position vers le bas',
  'changes.array.item-moved_down_other': 'Déplacé de {{count}} positions vers le bas',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Déplacé d’une position vers le haut',
  'changes.array.item-moved_up_other': 'Déplacé de {{count}} positions vers le haut',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Retiré de la position {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Réviser les changements',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Modifié',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Changements par',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Consultez la console développeur pour plus d’informations',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Le rendu des modifications de ce champ a provoqué une erreur',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Erreur de valeur : La valeur est de type "<code>{{actualType}}</code>", attendu "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Sans titre',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Recadrage modifié',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Image supprimée',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Erreur lors du chargement de l’image',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Point chaud modifié',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Sans titre',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Image non définie',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(pas d’image)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'De',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Méta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'À',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Chargement…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Chargement des changements…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Modifiez le document ou sélectionnez une version antérieure dans la chronologie pour voir une liste de changements apparaître dans ce panneau.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Il n’y a pas de changements',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Annotation ajoutée',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Annotation modifiée',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Annotation supprimée',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Annotation inchangée',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Style de bloc modifié de "{{fromStyle}}" à "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Formatage du texte modifié',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '{{inlineObjectType}} vide',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '{{annotationType}} vide',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Texte vide ajouté',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Texte vide modifié',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Texte vide supprimé',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Objet en ligne ajouté',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Objet en ligne modifié',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Objet en ligne supprimé',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Objet en ligne inchangé',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Texte ajouté',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Texte supprimé',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Type de schéma inconnu',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Type de schéma inconnu',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Supprimé',
  /** Title for the Review Changes pane */
  'changes.title': 'Réviser les changements',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Afficher plus',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Annuler',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Confirmer',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Chargement',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Problèmes de configuration trouvés',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Trier par {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Trier par légende',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Trier par description',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Trier par en-tête',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Trier par rubrique',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Trier par étiquette',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Trier par nom',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Trier par titre',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Édité {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Non publié',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publié {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'La valeur de la propriété <code>_key</code> doit être une chaîne unique.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Cela arrive généralement lorsque des éléments sont créés en utilisant un client API, et que la propriété <code>_key</code> de chaque élément a été générée de manière non unique.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informations pour les développeurs',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Générer des clés uniques',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Plusieurs éléments de cette liste partagent le même identifiant (clé). Chaque élément doit avoir un identifiant unique.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Clés non uniques',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    "Champ \"{{fieldName}}\" introuvable parmi les membres – vérifiez qu'il est défini dans le schéma et qu'il n'a pas été conditionnellement masqué.",
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Ajouter les clés manquantes',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'La valeur de la propriété <code>_key</code> doit être une chaîne de caractères unique.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    "Cela arrive généralement lorsque des éléments sont créés à l'aide d'un client API, et que la propriété <code>_key</code> n'a pas été incluse.",
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Infos développeur',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Certains éléments de la liste manquent de leurs clés. Cela doit être corrigé afin de pouvoir éditer la liste.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Clés manquantes',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    "Cela arrive généralement lorsque des éléments sont créés à l'aide d'un client API, ou lorsqu'un composant d'entrée personnalisé a ajouté des données invalides à la liste.",
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Infos développeur',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Supprimer les valeurs non-objet',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Certains éléments de cette liste ne sont pas des objets. Cela doit être corrigé afin de pouvoir éditer la liste.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Valeurs de liste invalides',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Aucun élément de tableau à l’indice <code>{{index}}</code> trouvé au chemin <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Aucun élément de tableau avec `_key` <code>"{{key}}"</code> trouvé au chemin <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'obsolète',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Sans titre',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Sans titre',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Contient une erreur',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Contient une information',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Contient un avertissement',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} erreur',
  'form.validation.summary.errors-count_other': '{{count}} erreurs',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} avertissement',
  'form.validation.summary.warnings-count_other': '{{count}} avertissements',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': "{{count}} jour restant d'essai",
  'free-trial.tooltip.days-count_other': "{{count}} jours restants d'essai",
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Mettez à niveau votre projet',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contacter les ventes',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Aide et support',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Rejoignez notre communauté',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'La dernière version est {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Version de Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Aide et ressources',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Annuler',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Télécharger',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Téléchargement de <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Ce document ne peut pas être ouvert (impossible de résoudre l’URL vers le Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Ajouter un élément après',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Ajouter un élément avant',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Ajouter un élément',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Ajouter un élément...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Glisser pour réorganiser',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Dupliquer',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Modifier {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Supprimer',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Supprimer',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Voir {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Vous pouvez toujours déplacer ou supprimer cet élément, mais il ne peut pas être modifié puisque la définition du schéma pour son type est introuvable.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Impossible de résoudre la valeur initiale pour le type : {{schemaTypeTitle}} : {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    "L'élément suivant ne peut pas être téléchargé car aucune conversion connue du type de contenu en élément de tableau n'est possible :",
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    "Les éléments suivants ne peuvent pas être téléchargés car aucune conversion connue des types de contenu en élément de tableau n'est possible :",
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    "Le schéma actuel ne déclare pas les éléments de type <code>{{typeName}}</code> comme valides pour cette liste. Cela pourrait signifier que le type a été retiré en tant qu'élément valide, ou que quelqu'un d'autre l'a ajouté à son propre schéma local qui n'est pas encore déployé.",
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Représentation JSON de cet élément :',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Élément de type <code>{{typeName}}</code> non valide pour cette liste',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Pourquoi cela se produit-il ?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Erreur inattendue : {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Aucun élément',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Ce champ est en lecture seule',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Résolution de la valeur initiale…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'par ex. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Ouvrir le menu des options de fichier',
  /** Browse */
  'inputs.file.browse-button.text': 'Parcourir',
  /** Select file */
  'inputs.file.dialog.title': 'Sélectionner un fichier',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Type de membre inconnu : {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    "La valeur de ce champ n'est pas un fichier valide. Réinitialiser ce champ vous permettra de choisir un nouveau fichier.",
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Réinitialiser la valeur',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Valeur de fichier invalide',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Sélectionner',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description':
    "Le téléchargement n'a pas pu être complété pour le moment.",
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Échec du téléchargement',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Effacer le champ',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': "Copier l'URL",
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Télécharger',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    "L'URL est copiée dans le presse-papiers",
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Remplacer',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Téléverser',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Déposez pour téléverser',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Déposez pour télécharger {{count}} fichier',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Déposez pour télécharger {{count}} fichiers',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Impossible de télécharger ce fichier ici',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Impossible de télécharger ces fichiers ici',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} fichier ne peut pas être téléchargé ici',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} fichiers ne peuvent pas être téléchargés ici',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one':
    'Impossible de téléverser le fichier',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Impossible de téléverser {{count}} fichiers',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file':
    'Glissez ou collez le fichier ici',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Glissez ou collez l’image ici',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Déposez pour téléverser un fichier',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Déposez pour téléverser une image',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Lecture seule',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported':
    'Impossible de téléverser des fichiers ici',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Effacer le téléchargement',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Un téléchargement n’a fait aucun progrès depuis au moins {{staleThresholdMinutes}} minutes et a probablement été interrompu. Vous pouvez effacer en toute sécurité le téléchargement incomplet et essayer de télécharger à nouveau.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Téléchargement incomplet',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Rogner l’image',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label':
    'Ouvrir la boîte de dialogue d’édition d’image',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Ouvrir le menu des options d’image',
  /** Select */
  'inputs.image.browse-menu.text': 'Sélectionner',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Impossible de télécharger ce fichier ici',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Déposez l’image pour la télécharger',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Ce champ est en lecture seule',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Type de membre inconnu : {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Modifier le point chaud et rogner',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'La valeur de ce champ n’est pas une image valide. Réinitialiser ce champ vous permettra de choisir une nouvelle image.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Réinitialiser la valeur',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Valeur d’image invalide',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Aperçu de l’image téléchargée',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description':
    'Le téléchargement n’a pas pu être complété pour le moment.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Échec du téléchargement',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Ajustez le rectangle pour recadrer l’image. Ajustez le cercle pour spécifier la zone qui devrait toujours être visible.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Erreur : {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Convertir en <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'La valeur actuelle (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'La valeur de la propriété est stockée en tant que type de valeur qui ne correspond pas au type attendu.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'La valeur de cette propriété doit être du type <code>{{validType}}</code> selon le schéma.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Seuls les types suivants sont valides ici selon le schéma :',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Des types de valeurs non correspondants surviennent généralement lorsque le schéma a récemment été modifié.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Infos développeur',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Réinitialiser la valeur',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Valeur de propriété invalide',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Groupes de champs',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Ce champ est <strong>en lecture seule</strong> selon le schéma du document et ne peut pas être désactivé. Si vous souhaitez pouvoir le désactiver dans le Studio, assurez-vous de retirer le champ <code>readOnly</code> du type englobant dans le schéma.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Supprimer le champ',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Rencontré un champ qui n’est pas défini dans le schéma.',
  'inputs.object.unknown-fields.warning.description_other':
    'Rencontré {{count}} champs qui ne sont pas définis dans le schéma.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Ce champ n’est pas défini dans le schéma, ce qui pourrait signifier que la définition du champ a été supprimée ou que quelqu’un d’autre l’a ajouté à son propre projet local et n’a pas encore déployé ses modifications.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Ces champs ne sont pas définis dans le schéma du document, ce qui pourrait signifier que les définitions des champs ont été supprimées ou que quelqu’un d’autre les a ajoutés à son propre projet local et n’a pas encore déployé ses modifications.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Infos développeur',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Champ inconnu trouvé',
  'inputs.object.unknown-fields.warning.title_other': 'Champs inconnus trouvés',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Réduire l’éditeur',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': "Modifier l'annotation",
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Agrandir l’éditeur',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Insérer {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Insérer {{typeName}} (bloc)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Insérer {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Insérer {{typeName}} (en ligne)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': "Supprimer l'annotation",
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Cliquez pour activer',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Cliquez ou appuyez sur espace pour activer',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Tapez pour activer',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': "Objet d'annotation",
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Modifier {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Lien',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Objet de bloc',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Modifier',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Ouvrir le menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Ouvrir la référence',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Supprimer',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Voir',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Code',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Italique',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Barré',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Gras',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Souligné',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Vide',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Objet en ligne',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Modifier l’objet',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': "Modifier l'objet",
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Supprimer l’objet',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': "Supprimer l'objet",
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'REMARQUE : Il est généralement sûr d’effectuer l’action ci-dessus, mais en cas de doute, contactez les responsables de la configuration de votre studio.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': "Supprimer l'objet",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    "Enfant avec la clé {{childKey}} du bloc avec la clé <code>{{key}}</code> est de type <code>{{childType}}</code>, ce qui n'est pas autorisé par le schéma.",
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Supprimer le bloc',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Le bloc avec la clé <code>{{key}}</code> est de type <code>{{typeName}}</code>, ce qui n’est pas autorisé par le schéma.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Insérer un segment de texte vide',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    "Bloc de texte avec la clé <code>{{key}}</code> n'a pas de segments de texte.",
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorer',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Utiliser le type <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Le bloc avec la clé <code>{{key}}</code> a un nom de type invalide. Selon le schéma, il devrait être <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Définir une valeur de texte vide',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Portée avec la clé {{childKey}} du bloc avec la clé <code>{{key}}</code> a une propriété <code>text</code> manquante ou invalide.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Utiliser le type <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Le bloc avec la clé <code>{{key}}</code> manque d’un nom de type. Selon le schéma, il devrait être <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Attribuer une clé aléatoire',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    "Enfant à l'indice <code>{{index}}</code> du bloc avec la clé <code>{{key}}</code> manque la propriété <code>_key</code>.",
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': "Supprimer l'objet",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Enfant avec la clé {{childKey}} du bloc avec la clé <code>{{key}}</code> manque la propriété <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Attribuer une clé aléatoire',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Le bloc à l’indice <code>{{index}}</code> manque de la propriété requise <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Supprimer le bloc',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Bloc de texte avec la clé <code>{{key}}</code> a une propriété `children` invalide ou manquante.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Ajouter la propriété',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Bloc de texte avec la clé <code>{{key}}</code> a une propriété `markDefs` invalide ou manquante.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Supprimer le bloc',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Le bloc avec la clé <code>{{key}}</code> manque d’un nom de type.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': "Supprimer l'élément",
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    "Enfant à l'indice <code>{{index}}</code> du bloc avec la clé <code>{{key}}</code> n'est pas un objet.",
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Désaffecter la valeur',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'La valeur doit être un tableau de blocs de Portable Text, ou non définie.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Supprimer l’élément',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'L’élément à <code>{{index}}</code> n’est pas un objet.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action':
    'Supprimer les marques non autorisées',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Bloc de texte avec la clé <code>{{key}}</code> contient des marques <code>({{orphanedMarks, list}})</code> qui ne sont pas autorisées par le schéma.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Valeur de Portable Text invalide',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Liste à puces',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Liste numérotée',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Titre 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Titre 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Titre 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Titre 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Titre 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Titre 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Multiples',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Pas de style',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citation',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Effacer',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Créer nouveau',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Créer nouveau…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Dupliquer',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Ouvrir dans un nouvel onglet',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Retirer',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Remplacer',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Annuler le remplacement',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Vous pouvez toujours effacer la référence existante de ce champ, mais il ne peut pas être changé pour un document différent tant que la fonctionnalité est désactivée.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Cette fonctionnalité a été désactivée. Lisez comment l’activer dans <DocumentationLink>la documentation</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Fonctionnalité indisponible : Référence entre datasets',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Le document référencé est d’un type invalide ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Ce document s’ouvre dans un nouvel onglet',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Document indisponible',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Échec du chargement du document référencé',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'La recherche a retourné un type qui n\'est pas valide pour cette référence : "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Le document référencé (<code>{{documentId}}</code>) est de type <code>{{actualType}}</code>. Selon le schéma, les documents référencés ne peuvent être que de type <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Document de type invalide',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    "Le document référencé n'a pas pu être accédé en raison de permissions insuffisantes",
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Permissions insuffisantes',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    "Le document référencé n'existe pas (ID : <code>{{documentId}}</code>). Vous pouvez soit supprimer la référence, soit la remplacer par un autre document.",
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Non trouvé',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Effacer',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Échec de la recherche de référence',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Aperçu de l’image du document référencé',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> est publié et cette référence devrait maintenant être finalisée.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finaliser la référence',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> est publié et cette référence devrait maintenant être convertie en référence forte.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Convertir en référence forte',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Convertir en référence forte',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Réessayer',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Impossible de charger les métadonnées de référence',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Aucun résultat pour <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Modifié <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Aucune modification non publiée',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Modifié',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Non publié',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publié',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Aucune modification non publiée',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Non publié',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publié <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Le document référencé n’existe plus et a peut-être été supprimé (ID du document : <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Le document référencé n’a pas pu être accédé en raison de permissions insuffisantes',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Résolution de la valeur initiale…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Tapez pour rechercher',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    "Il ne sera pas possible de supprimer le document référencé sans d'abord retirer cette référence ou la convertir en faible.",
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Cette référence est <em>forte</em>, mais selon le schéma actuel, elle devrait être <em>faible</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Cela permet de supprimer le document référencé sans avoir à supprimer cette référence au préalable, laissant ce champ référencer un document inexistant.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Cette référence est <em>faible</em>, mais selon le schéma actuel, elle devrait être <em>forte</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Convertir en référence forte',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Incohérence de la force de la référence',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Convertir en référence faible',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Générer',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Génération en cours…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'La source est manquante. Vérifiez la source du type {{schemaType}} dans le schéma',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Entrez un tag et appuyez sur ENTRÉE…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Entrez un tag…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Convertir en <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Rencontré une valeur d’objet sans propriété <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Supprimez soit la propriété <code>name</code> de la déclaration de l’objet, soit définissez la propriété <code>_type</code> sur les éléments.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Valeur actuelle (<code>object</code>) :',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Les types suivants sont valides ici selon le schéma :',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Infos développeur',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Valeur de propriété manquante <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Désaffecter la valeur',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Vous n’avez pas la permission d’accéder à cette fonctionnalité.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Vous n’avez pas la permission de créer un document.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Vous n’avez pas la permission de créer ce document.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Vous n’avez pas la permission de créer ce type de document.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Vous n’avez pas la permission de créer une nouvelle référence.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Vous n’avez pas la permission de supprimer ce document.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Vous n’avez pas la permission d’abandonner les modifications dans ce document.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Vous n’avez pas la permission de dupliquer ce document.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Vous n’avez pas la permission de publier ce document.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Vous n’avez pas la permission de dépublier ce document.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Vos rôles : <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Permissions insuffisantes',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Erreur inattendue : {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Créer',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Nouveau document…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtrer',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Chargement…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Nouveau document',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Aucun type de document trouvé',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Aucun type de document',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Aucun résultat pour <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Créer un nouveau document',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Créer un nouveau document',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Gérer les membres',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Qui est là',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Invitez des personnes au projet pour voir leur statut en ligne.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Personne d’autre n’est là',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Pas dans un document',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Qui est là',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Sans titre',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(pas de valeur)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'L’image en cours de téléchargement',

  /* Relative time, just now */
  'relative-time.just-now': 'à l’instant',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Ouvrir la recherche',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Ajouter un filtre',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Effacer les filtres',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Effacer les recherches récentes',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Effacer les filtres cochés',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Effacer',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Fermer la recherche',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrer par type de document',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Supprimer le filtre',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Rechercher tous les documents',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Rechercher {{types, list}}',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated': 'Rechercher {{types, list}} +{{count}} de plus',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Sélectionner un actif',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Sélectionner un fichier',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Sélectionner une image',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Masquer les filtres',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Afficher les filtres',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Masquer les filtres',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Afficher les filtres',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Rechercher',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Tous les types',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}} de plus',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Types de documents',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Aucune correspondance pour {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Cela peut indiquer des options invalides définies dans votre schéma.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title':
    'Une erreur s’est produite lors de l’affichage de ce filtre.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    "Veuillez vous assurer qu'elle est activée dans votre fichier de configuration de studio.",
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Actuellement, seule la source d’actif par défaut est prise en charge.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Aucune source d’actif valide trouvée.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Veuillez réessayer ou vérifier votre connexion',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Un problème est survenu lors de la recherche',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Tous les champs',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Changer de fichier',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Changer d’image',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Effacer',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Sélectionner un fichier',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Sélectionner une image',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Faux',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Vrai',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrer par titre',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Date',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Date de fin',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Date de début',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Jours',
  'search.filter-date-unit_months': 'Mois',
  'search.filter-date-unit_years': 'Années',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Sélectionner l’unité',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Valeur de l’unité',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Description du champ',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nom du champ',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Utilisé dans les types de documents',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Aucune correspondance pour {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Valeur max',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Valeur min',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Valeur',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrer',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Effacer',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Champs partagés',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Valeur',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Sélectionner…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtre',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtres',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Utilisez <ControlsIcon/> pour affiner votre recherche',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Essayez un autre mot-clé ou ajustez vos filtres',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Aucun résultat trouvé',
  /**
   * Individual search operators.
   *
   * The `name` variant is the form we use when the user is building a query, and selecting from a
   * list of available operators for a field. Keep in mind that since the user knows what the field
   * represents, we do not need to contextualize too much, and that the user may not be a developer
   * eg prefer "quantity is" over "array has length". Additionally, (if applicable in language) use
   * lowercased names.
   *
   * The `description` variant is the form shown once the filter has enough information to apply,
   * and is shown in the list of applied filters. It is passed components that _should_ be used to
   * compose the filter string, and to format them correctly:
   *
   * `<Field/>` - eg "Bird species", "Category", "Date of birth"
   * `<Operator>operator text</Operator>` - eg "has ≤", "includes", "is"
   * `<Value>{{value}}</Value>` - eg "Hawk", "Sparrow", "Eagle"
   *
   * Where applicable, a `count` is passed, allowing you to pluralize where needed, by using
   * suffixes such as `_zero`, `_one`, `_other` etc.
   *
   * Prefer (reasonable) brevity since many filters may be applied. For instance:
   * `<Field/> has ≤ <Value/>` may be better than
   * `<Field/> has less than or equal to <Value/>`
   **/
  /* Array should have a count the given filter value */
  'search.operator.array-count-equal.description_one':
    '<Field/> <Operator>a</Operator> <Value>{{count}} élément</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>a</Operator> <Value>{{count}} éléments</Value>',
  'search.operator.array-count-equal.name': 'quantité est',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>a ></Operator> <Value>{{count}} élément</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>a ></Operator> <Value>{{count}} éléments</Value>',
  'search.operator.array-count-gt.name': 'quantité supérieure à',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>a ≥</Operator> <Value>{{count}} élément</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>a ≥</Operator> <Value>{{count}} éléments</Value>',
  'search.operator.array-count-gte.name': 'quantité supérieure ou égale à',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>a <</Operator> <Value>{{count}} élément</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>a <</Operator> <Value>{{count}} éléments</Value>',
  'search.operator.array-count-lt.name': 'quantité inférieure à',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>a ≤</Operator> <Value>{{count}} élément</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>a ≤</Operator> <Value>{{count}} éléments</Value>',
  'search.operator.array-count-lte.name': 'quantité inférieure ou égale à',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>n’a pas</Operator> <Value>{{count}} élément</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>n’a pas</Operator> <Value>{{count}} éléments</Value>',
  'search.operator.array-count-not-equal.name': 'quantité n’est pas',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>a entre</Operator> <Value>{{from}} → {{to}} éléments</Value>',
  'search.operator.array-count-range.name': 'quantité est entre',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inclut</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inclut',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>n’inclut pas</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'n’inclut pas',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inclut</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inclut',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>n’inclut pas</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'n’inclut pas',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'est',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'n’est pas',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'est',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'n’est pas',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'est',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>est après</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'après',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>est avant</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'avant',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'est',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>est dans le dernier</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'dernier',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'n’est pas',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>est entre</Operator> <Value/>',
  'search.operator.date-range.name': 'est entre',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>est après</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'après',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>est avant</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'avant',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'est',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>est dans le dernier</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'dernier',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'n’est pas',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description': '<Field/> <Operator>est entre</Operator> <Value/>',
  'search.operator.date-time-range.name': 'est entre',
  /* Value should be defined */
  'search.operator.defined.description':
    '<Field/> <Operator>est</Operator> <Value>non vide</Value>',
  'search.operator.defined.name': 'non vide',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>est</Operator> <Value>vide</Value>',
  'search.operator.not-defined.name': 'vide',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'est',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'supérieur à',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'supérieur ou égal à',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'inférieur à',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'inférieur ou égal à',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'n’est pas',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>est entre</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'est entre',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>contient</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'contient',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'est',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>ne contient pas</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'ne contient pas',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'n’est pas',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fichier',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'image',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'document',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'est',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'n’est pas',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>contient</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'contient',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'est',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>ne contient pas</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'ne contient pas',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'n’est pas',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>contient</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'contient',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'est',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>est</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'est',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'n’est pas',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>ne contient pas</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'ne contient pas',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>n’est pas</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'n’est pas',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Meilleure correspondance',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Créé : Le plus ancien en premier',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Créé : Le plus récent en premier',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Mis à jour : Le plus ancien en premier',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Mis à jour : Le plus récent en premier',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Rechercher',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Recherches récentes',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Recherches récentes',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Résultats de recherche',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Statut de la configuration',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Les transactions de l’historique du document n’ont pas été affectées.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Une erreur s’est produite lors de la récupération des modifications du document.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Lors de la modification du contenu du document, les versions du document apparaîtront dans ce menu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Pas d’historique du document',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Impossible de charger la révision',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Le plus récent',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Dernière version',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Révisions du document',
  /** Label for loading history */
  'timeline.loading-history': 'Chargement de l’historique…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Créé',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Créé : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Créé',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Créé : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Supprimé',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Supprimé : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Brouillon rejeté',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Brouillon rejeté : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Édité',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Édité : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Édité en direct',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Édité en direct : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publié',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publié : {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Non publié',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Non publié : {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Depuis : {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Depuis : version inconnue',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': "{{count}} jour restant dans l'essai",
  'user-menu.action.free-trial_other': "{{count}} jours restants dans l'essai",
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Passer de la version gratuite',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Inviter des membres',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Inviter des membres',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Gérer le projet',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Gérer le projet',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    "Impossible d'appliquer {{name}} à un bloc vide",
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    "Impossible d'appliquer {{name}} à plusieurs blocs",
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Se déconnecter',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Apparence',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Fermer le menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Utiliser l’apparence sombre',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Sombre',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Utiliser une apparence claire',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Clair',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Utiliser l’apparence du système',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Système',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Langue',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Connecté avec {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Ouvrir le menu',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Ajouter un espace de travail',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Choisissez un autre espace de travail',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Choisissez votre espace de travail',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Sélectionnez un espace de travail',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Sélectionnez un espace de travail',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': "Sélectionner l'espace de travail",
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Espaces de travail',
})
