import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The status of the channel connection */
  'channel.status_connected': 'Connecté',
  /** The status of the channel connection */
  'channel.status_connecting': 'Connexion en cours',
  /** The status of the channel connection */
  'channel.status_disconnected': 'Déconnecté',
  /** The status of the channel connection */
  'channel.status_reconnecting': 'Reconnexion en cours',

  /** The title shown above the document list */
  'document-list-pane.document-list.title': 'Documents sur cette page',
  /** The text shown if the document list is unable to render */
  'document-list-pane.error.text': "Impossible d'afficher la liste des documents",

  /** The text shown if the document editor is unable to render */
  'document-pane.error.text': "Impossible d'afficher l'éditeur de document",

  /** The text shown on the button for bypassing after a connection has failed */
  'error-card.continue-button.text': 'Continuer quand même',
  /** The text shown on the button for retrying after a connection has failed */
  'error-card.retry-button.text': 'Réessayer',
  /** The title on the card shown after a connection has failed */
  'error-card.title': "Une erreur s'est produite",

  /** The text shown when the document is used in a single location */
  'locations-banner.locations-count_one': 'Utilisé sur une page',
  /** The text shown when the document is used in multiple locations */
  'locations-banner.locations-count_other': 'Utilisé sur {{count}} pages',
  /** The text shown when a resolver exists but the document is not used in any locations */
  'locations-banner.locations-count_zero': 'Non utilisé sur aucune page',
  /** The text shown whilst the locations resolver is executing */
  'locations-banner.resolving.text': 'Résolution des emplacements...',

  /** The label shown on a main document in the list pane */
  'main-document.label': 'Document principal',
  /** The warning message text shown when a defined resolver fails to return a main document */
  'main-document.missing.text': 'Document principal manquant pour <Code>{{path}}</Code>',

  /** The label for the tab that shows the document editor at narrow viewports */
  'narrow-tabs.content-tab.label': 'Structure',
  /** The label for the tab that shows the navigator at narrow viewports */
  'narrow-tabs.navigator-tab.label': 'Navigateur',
  /** The label for the tab that shows the preview at narrow viewports */
  'narrow-tabs.preview-tab.label': 'Présentation',

  /** The label for a generic error message */
  'presentation-error.label': "Message d'erreur",

  /** The toast description for the error message explaining that the iframe is blocked from loading due to a security mismatch. */
  'preview-frame.configuration.error.description':
    "L'iframe de prévisualisation est configurée pour charger <Code>{{targetOrigin}}</Code>, mais l'origine signalée est <Code>{{reportedOrigin}}</Code>. Le Presentation Tool est incapable de se connecter à des origines inconnues pour des raisons de sécurité. Mettez à jour votre configuration <Code>presentationTool.allowOrigins</Code> pour autoriser la connexion à Visual Editing et aux Loaders.",
  /** The title of the error toast that shows when the preview iframe times out while waiting for a connection over comlink to establish, and the root cause is discovered to be that the iframe is loading on an URL origin that's not in the allow list. */
  'preview-frame.configuration.error.title':
    "Incompatibilité d'origine de l'URL de prévisualisation",
  /** The text shown when the preview frame cannot connect to Presentation */
  'preview-frame.connection.error.text': 'Impossible de se connecter à la prévisualisation',
  /** The text shown on the button for dismissing the error overlay after a timeout */
  'preview-frame.continue-button.text': 'Continuer quand même',
  /** The label for the loader's connection status */
  'preview-frame.loader.connection-status.label': 'Statut de connexion du Loader',
  /** The `aria-label` for the navigator toggle button */
  'preview-frame.navigator.toggle-button.aria-label': 'Basculer le navigateur',
  /** The tooltip text for the navigator toggle button */
  'preview-frame.navigator.toggle-button.tooltip': 'Basculer le navigateur',
  /** The label for the overlay's connection status */
  'preview-frame.overlay.connection-status.label': "État de la connexion de l'overlay",
  /** The text shown on the overlay toggle button */
  'preview-frame.overlay.toggle-button.text': 'Modifier',
  /** The text shown on the overlay toggle tooltip when overlays are enabled */
  'preview-frame.overlay.toggle-button.tooltip_disable': "Désactiver l'overlay de modification",
  /** The text shown on the overlay toggle tooltip when overlays are disabled */
  'preview-frame.overlay.toggle-button.tooltip_enable': "Activer l'overlay de modification",
  /** The text description for the published perspective switcher menu item */
  'preview-frame.perspective.published.text': 'Afficher cette page avec le contenu publié',
  /** The `aria-label` for the refresh button */
  'preview-frame.refresh-button.aria-label': "Actualiser l'aperçu",
  /** The tooltip text for the refresh button */
  'preview-frame.refresh-button.tooltip': "Actualiser l'aperçu",
  /** The `aria-label` for the button that opens the share menu */
  'preview-frame.share-button.aria-label': 'Partager cet aperçu',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_connecting': 'Connexion en cours.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_loading': 'Chargement en cours.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_refreshing': 'Actualisation en cours.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_reloading': 'Actualisation en cours.',
  /** Text describing the current status of the preview frame */
  'preview-frame.status_timeout':
    "Impossible de se connecter, consultez la console du navigateur pour plus d'informations.",
  /** The `aria-label` for the button that switches viewport size */
  'preview-frame.viewport-button.aria-label': "Basculer la taille de la fenêtre d'affichage",
  /** The viewport size button tooltip text when switching to a full width viewport */
  'preview-frame.viewport-button.tooltip_full': "Passer à la fenêtre d'affichage complète",
  /** The viewport size button tooltip text when switching to a narrow viewport */
  'preview-frame.viewport-button.tooltip_narrow': "Passer à la fenêtre d'affichage étroite",

  /** The validation error message shown when the preview location input is missing an origin */
  'preview-location-input.error_missing-origin': "L'URL doit commencer par {{origin}}",
  /** The validation error message shown when the preview location input's base path matches that of the studio */
  'preview-location-input.error_same-base-path':
    "L'URL ne peut pas avoir le même chemin de base que le Studio {{basePath}}",

  /** The toast description for the error message explaining that the iframe won't navigate to the new preview URL due to an URL origin security mismatch. */
  'preview-search-param.configuration.error.description':
    "Le routeur souhaite naviguer vers <Code>{{previewSearchParam}}</Code>, mais l'origine <Code>{{blockedOrigin}}</Code> n'est pas autorisée. Mettez à jour votre configuration <Code>presentationTool.allowOrigins</Code> pour l'autoriser.",
  /** The title of the error toast that shows when attempting to navigate to a preview URL origin that's not in the allow list. */
  'preview-search-param.configuration.error.title': "URL d'aperçu bloquée",

  /** Error toast that notifies that URL Preview Secrets can't be generated as the user lacks ACL grants */
  'preview-url-secret.missing-grants':
    "Vous n'avez pas la permission de créer des URL Preview Secrets. Cela risque d'empêcher le chargement de l'aperçu.",

  /** Menu item in the share preview menu that allows copying the current preview URL, if sharing is enabled */
  'share-preview-menu.copy-url.text': "Copier le lien d'aperçu",
  /** Fallback message shown when the current user is not permitted to share previews */
  'share-preview-menu.error_missing-grants':
    "Vous n'avez pas la permission de partager des aperçus. ",
  /** Error message toast that shows the current user does not have permission to toggle sharing of the current preview */
  'share-preview-menu.error_toggle-sharing':
    "Vous n'avez pas la permission d'activer ou de désactiver le partage de cet aperçu",
  /** The text show below the QR Code SVG, with instructions on how to use it */
  'share-preview-menu.qr-code.instructions':
    "Scannez le QR Code pour ouvrir l'aperçu sur votre téléphone.",
  /** Placeholder message for the QR Code SVG when sharing is yet to be enabled */
  'share-preview-menu.qr-code.placeholder': 'Le QR Code apparaîtra ici',
  /** The <title> for the QR Code SVG that shows a link to the current preview */
  'share-preview-menu.qr-code.title': "Un QR Code qui encode l'URL : {{url}}",
  /** The first line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_first-line': 'Partager cet aperçu',
  /** The second line of the label that renders next to the sharing toggle, it renders on two rows */
  'share-preview-menu.toggle-button.label_second-line': 'avec toute personne ayant le lien',
  /** The text shown on the sharing toggle tooltip when sharing is enabled */
  'share-preview-menu.toggle-button.tooltip_disable': 'Désactiver le partage',
  /** The text shown on the sharing toggle tooltip when sharing is disabled */
  'share-preview-menu.toggle-button.tooltip_enable': 'Activer le partage',

  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_copying': "Copie de l'URL dans le presse-papiers…",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_failed': 'Échec de la copie',
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_success': "L'URL a été copiée dans le presse-papiers",
  /** The status of the clipboard operation when copying a URL */
  'share-url.clipboard.status_unsupported': 'Presse-papiers non pris en charge',
  /** The share URL menu item text for opening a preview window */
  'share-url.menu-item.open.text': "Ouvrir l'aperçu",
})
