import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Aðgerð ekki tilbúin',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Þetta skjal er ekki til eða þegar eytt',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Eyða',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Eyði…',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Ertu viss um að þú viljir henda öllum breytingum síðan síðast var birt?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'Þetta skjal hefur engar óbirtar breytingar',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Þetta skjal er ekki birt',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Aðgerð ekki tilbúin',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Henda breytingum',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Aðgerð ekki tilbúin',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Þetta skjal er ekki til svo það er ekkert að afrita',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Afrita',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Afritun…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Nú þegar birt',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Birt fyrir {{timeSincePublished}} síðan',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Aðgerð ekki tilbúin',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Birta',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Birta',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Get ekki birt þar sem Live Edit er virkt fyrir þessa skjalategund',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Live Edit er virkt fyrir þessa efni tegund og birting gerist sjálfkrafa þegar þú gerir breytingar',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Engar óbirtar breytingar',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Birt',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Birti…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Það eru staðfestingarvillur sem þarf að laga áður en hægt er að birta þetta skjal',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Bíð eftir að verkefni klárist áður en birt er',
  /** Message prompting the user to confirm that they want to restore to an earlier version*/
  'action.restore.confirm.message': 'Ertu viss um að þú viljir endurheimta þetta skjal?',
  /** Fallback tooltip for when user is looking at the initial version */
  'action.restore.disabled.cannot-restore-initial': 'Þú getur ekki endurheimt upphaflegu útgáfuna',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Endurheimta',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Endurheimta þessa útgáfu',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Þetta skjal er ekki birt',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Aðgerð ekki tilbúin',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Afturkalla birtingu',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Þetta skjal hefur beina ritun virkjaða og getur ekki verið afturkallað',

  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Endurheimta nýjustu útgáfuna',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Þetta skjal hefur verið eytt.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Þessi skjaltýpa er úrelt.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Hlutverk þitt <Roles/> hefur ekki heimildir til að búa til þetta skjal.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_create_other':
    'Hlutverk þín <Roles/> hafa ekki heimildir til að búa til þetta skjal.',
  /** The text for the permission check banner if the user only has one role, and it does not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Hlutverk þitt <Roles/> hefur ekki heimildir til að uppfæra þetta skjal.',
  /** The text for the permission check banner if the user only has multiple roles, but they do not allow updating this document */
  'banners.permission-check-banner.missing-permission_update_other':
    'Hlutverk þín <Roles/> hafa ekki heimildir til að uppfæra þetta skjal.',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Endurhlaða tilvísun',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Þessi tilvísun hefur breyst síðan þú opnaðir hana.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Loka tilvísun',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Þessi tilvísun hefur verið fjarlægð síðan þú opnaðir hana.',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Nýtt {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Ótitlað',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Opna skjalaðgerðir',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Aðgerðir skjals',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Kljúfa glugga til hægri',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Kljúfa glugga til hægri',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Loka kljúfðum glugga',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Loka gluggahópi',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Hætta við',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 skjal',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} skjöl',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Dataset: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasets: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Ófáanlegt dataset',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Ófáanleg datasets',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} í öðru dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} í {{count}} datasets',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Afrita auðkenni á klippiborð',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'Skjal auðkenni',
  /** The toast title when the copy button has been clicked */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title': 'Afritað skjal auðkenni á klippiborð!',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'Verkefni auðkenni',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Eyða samt',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Afbirta samt',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Eyða núna',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Afbirta núna',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Ertu viss um að þú viljir eyða „<DocumentTitle/>“?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Ertu viss um að þú viljir afbirta „<DocumentTitle/>“?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text': 'Villa kom upp við hleðslu vísandi skjala.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Reyna aftur',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Villa',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Eyða skjali?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Afbirta skjal?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Leita að vísandi skjölum…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 önnur tilvísun ekki sýnd',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_other':
    '{{count}} aðrar tilvísanir ekki sýndar',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Við getum ekki birt upplýsingar um þessar tilvísanir vegna vantar aðgangstokens fyrir tengd gagnasett.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Forskoðun ekki í boði',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Ef þú eyðir þessu skjali munu skjöl sem vísa í það ekki lengur geta nálgast það.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Ef þú afturkallar birtingu þessa skjals munu skjöl sem vísa í það ekki lengur geta nálgast það.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one': '1 skjal vísar í “<DocumentTitle/>”',
  /** Tells the user the count of how many other referring documents there are before listing them. (plural) */
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} skjöl vísa í “<DocumentTitle/>”',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Þú gætir ekki getað eytt “<DocumentTitle/>” þar sem eftirfarandi skjöl vísa í það:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Þú gætir ekki getað afturkallað birtingu “<DocumentTitle/>” þar sem eftirfarandi skjöl vísa í það:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Hætta við',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Staðfesta',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Efni',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Villa: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Ótitlað',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Óþekkt skema tegund: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Loka',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Skoða <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Engin gildi',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Skoða',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Leita',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Greindur',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Hrátt JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Þessi eyðublað er falið',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Titilllaus',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Hleð skjali…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Vinsamlegast bíddu á meðan skjalið er samstillt. Þetta gerist venjulega strax eftir að skjalið hefur verið birt, og ætti ekki að taka meira en nokkrar sekúndur',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Samstilli skjal…',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Hleður…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Aðgerðir',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Skipulag',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Röðun',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Þjappað útlit',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Ítarlegt útlit',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Raða eftir stofnun',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Raða eftir síðast breytt',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Lærðu hvernig á að bæta við skjalategund →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Vinsamlegast skilgreindu að minnsta kosti eina skjalgert í skemanu þínu.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Engar skjalgertir',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Til baka',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Sýna valmynd',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Búa til',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Búa til nýtt skjal',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Ófullnægjandi heimildir',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Breytt <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Engar óbirtar breytingar',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Skjal: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Engin skema fundin fyrir tegund <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Birt <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Engar óbirtar breytingar',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Villa: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Nýtt {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Ótitlað',
  /** The text for the retry button on the document list pane */
  'panes.document-list-pane.error.retry-button.text': 'Reyna aftur',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Villa: <Code>{{error}}</Code>',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Gat ekki sótt lista yfir atriði',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Birtir hámark af {{limit}} skjölum',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Engin skjöl af þessari tegund',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Engar niðurstöður fundust',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text': 'Engin passandi skjöl',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Leita í lista',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Leita í lista',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Upplýsingar',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Villa kom upp við {{context}}',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Villa kom upp við tilraun til að eyða þessu skjali. Þetta þýðir yfirleitt að aðrar skjöl vísa til þess.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Villa kom upp við tilraun til að afturkalla birtingu þessa skjals. Þetta þýðir yfirleitt að aðrar skjöl vísa til þess.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success': 'Aðgerð {{context}} á skjali tókst',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Skjalinu var eytt',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Öllum breytingum síðan síðast var birt hefur nú verið hent. Hægt er að endurheimta hent drögin úr sögunni',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Skjalið var birt',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore': undefined, // '<Strong>{{title}}</Strong> was restored'
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Birtingu skjalsins var afturkallað. Drög hafa verið búin til úr síðustu birtu útgáfu.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Ótitlað',
  /** The title of the reconnecting toast */
  'panes.document-pane-provider.reconnecting.title': 'Tenging rofnaði. Endurtengi…',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Hleð skjali…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Skjalategundin er ekki skilgreind, og ekki tókst að finna skjal með auðkennið <Code>{{id}}</Code>.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Skjalið fannst ekki',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Þetta skjal hefur skjematýpuna <Code>{{documentType}}</Code>, sem er ekki skilgreind sem týpa í staðbundnu efni stúdíó skemanu.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Óþekkt skjalategund: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Þetta skjal er ekki til, og engin skjematýpa var tilgreind fyrir það.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Hleður…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Enn að hlaða…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Byggingaratriði vantar nauðsynlega <Code>type</Code> eign.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Óþekkt gluggategund',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    'Byggingaratriði af gerðinni <Code>{{type}}</Code> er ekki þekkt eining.',

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Opna forskoðun',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Vistað',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Er að vista...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label': 'Síðast birt {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': 'Síðast birt <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Síðast uppfært {{relativeTime}}',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Síðast uppfært <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Fara yfir breytingar',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Vistað!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Vistar...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Breytingar vistaðar',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Fara yfir breytingar',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Skoða skjölun',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Villa',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Villa kom upp við að lesa uppbyggingu',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Endurhlaða',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Slóð uppbyggingar',
})
