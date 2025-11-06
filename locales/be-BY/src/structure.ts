import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for the "Copy Document URL" document action */
  'action.copy-document-url.label': 'Капіяваць URL дакумента',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.delete.disabled.not-ready': 'Аперацыя не гатова',
  /** Tooltip when action button is disabled because the document does not exist */
  'action.delete.disabled.nothing-to-delete': 'Гэты дакумент яшчэ не існуе або ўжо выдалены',
  /** Label for the "Delete" document action button */
  'action.delete.label': 'Выдаліць',
  /** Label for the "Delete" document action while the document is being deleted */
  'action.delete.running.label': 'Выдаленне…',
  /** Tooltip when action is disabled because the document is linked to Canvas */
  'action.disabled-by-canvas.tooltip':
    'Некаторыя дзеянні з дакументамі адключаны для дакументаў, звязаных з Canvas',
  /** Message prompting the user to confirm discarding changes */
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Вы ўпэўнены, што хочаце адмяніць усе змены з моманту апошняй публікацыі?',
  /** Tooltip when action is disabled because the document has no unpublished changes */
  'action.discard-changes.disabled.no-change': 'У гэтым дакуменце няма неапублікаваных зменаў',
  /** Tooltip when action is disabled because the document is not published */
  'action.discard-changes.disabled.not-published': 'Гэты дакумент не апублікаваны',
  /** Tooltip when action button is disabled because the operation is not ready   */
  'action.discard-changes.disabled.not-ready': 'Аперацыя не гатова',
  /** Label for the "Discard changes" document action */
  'action.discard-changes.label': 'Адмяніць змены',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.duplicate.disabled.not-ready': 'Аперацыя не гатова',
  /** Tooltip when action is disabled because the document doesn't exist */
  'action.duplicate.disabled.nothing-to-duplicate':
    'Гэты дакумент яшчэ не існуе, таму няма чаго дубляваць',
  /** Label for the "Duplicate" document action */
  'action.duplicate.label': 'Дубляваць',
  /** Label for the "Duplicate" document action while the document is being duplicated */
  'action.duplicate.running.label': 'Дубляванне…',
  /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/
  'action.publish.already-published.no-time-ago.tooltip': 'Ужо апублікаваны',
  /** Tooltip when publish button is disabled because the document is already published.*/
  'action.publish.already-published.tooltip': 'Апублікавана {{timeSincePublished}} таму',
  /** Tooltip when action is disabled because the studio is not ready.*/
  'action.publish.disabled.not-ready': 'Аперацыя не гатова',
  /** Label for action when there are pending changes.*/
  'action.publish.draft.label': 'Апублікаваць',
  /** Label for the "Publish" document action */
  'action.publish.label': 'Апублікаваць',
  /** Label for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.label': 'Апублікаваць',
  /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/
  'action.publish.live-edit.publish-disabled':
    'Немагчыма апублікаваць, паколькі для гэтага тыпу дакумента ўключаны рэжым Live Edit',
  /** Tooltip for the "Publish" document action when the document has live edit enabled.*/
  'action.publish.live-edit.tooltip':
    'Для гэтага тыпу кантэнту ўключаны рэжым Live Edit, і публікацыя адбываецца аўтаматычна, калі вы робіце змены',
  /** Tooltip when publish button is disabled because there are no changes.*/
  'action.publish.no-changes.tooltip': 'Няма неапублікаваных зменаў',
  /** Label for the "Publish" document action when there are no changes.*/
  'action.publish.published.label': 'Апублікаваны',
  /** Label for the "Publish" document action while publish is being executed.*/
  'action.publish.running.label': 'Публікацыя…',
  /** Tooltip when the "Publish" document action is disabled due to validation issues */
  'action.publish.validation-issues.tooltip':
    'Ёсць памылкі праверкі, якія трэба выправіць перад публікацыяй гэтага дакумента',
  /** Tooltip when publish button is waiting for validation and async tasks to complete.*/
  'action.publish.waiting': 'Чаканне завяршэння задач перад публікацыяй',
  /** Message prompting the user to confirm that they want to restore to an earlier revision*/
  'action.restore.confirm.message': 'Вы ўпэўнены, што хочаце аднавіць гэты дакумент?',
  /** Fallback tooltip for when user is looking at the initial revision */
  'action.restore.disabled.cannot-restore-initial': 'Вы не можаце аднавіць пачатковую версію',
  /** Label for the "Restore" document action */
  'action.restore.label': 'Аднавіць',
  /** Default tooltip for the action */
  'action.restore.tooltip': 'Аднавіць да гэтай версіі',
  /** Tooltip when action is disabled because the document is not already published */
  'action.unpublish.disabled.not-published': 'Гэты дакумент не апублікаваны',
  /** Tooltip when action is disabled because the operation is not ready   */
  'action.unpublish.disabled.not-ready': 'Аперацыя не гатова',
  /** Label for the "Unpublish" document action */
  'action.unpublish.label': 'Зняць з публікацыі',
  /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/
  'action.unpublish.live-edit.disabled':
    'Гэты дакумент мае ўключаны рэжым Live Edit і не можа быць зняты з публікацыі',

  /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */
  'banners.archived-release.description':
    'Вы глядзіце на дакумент толькі для чытання, які быў архіваваны як частка <VersionBadge>{{title}}</VersionBadge>. Яго нельга рэдагаваць',
  /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */
  'banners.archived-scheduled-draft.description': undefined, // 'This scheduled draft is archived'
  /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */
  'banners.choose-new-document-destination.cannot-create-draft-document':
    'Немагчыма стварыць чарнавік дакумента.',
  /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */
  'banners.choose-new-document-destination.cannot-create-published-document':
    'Немагчыма стварыць апублікаваны дакумент.',
  /** The prompt displayed when a user must select a different perspective in order to create a document */
  'banners.choose-new-document-destination.choose-destination':
    'Абярыце месца для гэтага дакумента:',
  /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */
  'banners.choose-new-document-destination.release-inactive':
    '<VersionBadge>{{title}}</VersionBadge> рэліз не актыўны.',
  /** The text for the restore button on the deleted document banner */
  'banners.deleted-document-banner.restore-button.text': 'Аднавіць апошнюю версію',
  /** The text content for the deleted document banner */
  'banners.deleted-document-banner.text': 'Гэты дакумент быў выдалены.',
  /** The text content for the deprecated document type banner */
  'banners.deprecated-document-type-banner.text': 'Гэты тып дакумента застарэў.',
  /** The text for publish action for discarding the version */
  'banners.live-edit-draft-banner.discard.tooltip': 'Адхіліць чарнавік',
  /** The text for publish action for the draft banner */
  'banners.live-edit-draft-banner.publish.tooltip': 'Апублікаваць, каб працягнуць рэдагаванне',
  /** The text content for the live edit document when it's a draft */
  'banners.live-edit-draft-banner.text':
    'Тып <strong>{{schemaType}}</strong> мае <code>liveEdit</code> уключаны, але існуе чарнавіковая версія гэтага дакумента. Апублікуйце або адхіліце чарнавік, каб працягнуць яго рэдагаванне.',
  /** The label for the "compare draft" action */
  'banners.obsolete-draft.actions.compare-draft.text': 'Параўнаць чарнавік',
  /** The label for the "discard draft" action */
  'banners.obsolete-draft.actions.discard-draft.text': 'Адхіліць чарнавік',
  /** The label for the "publish draft" action */
  'banners.obsolete-draft.actions.publish-draft.text': 'Апублікаваць чарнавік',
  /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */
  'banners.obsolete-draft.draft-model-inactive.text':
    'У прасторы працы не ўключаны чарнавікі, але існуе чарнавіковая версія гэтага дакумента.',
  /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */
  'banners.permission-check-banner.missing-permission_create_one':
    'Ваша роля <Roles/> не мае дазволу на стварэнне гэтага дакумента.',
  /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */
  'banners.permission-check-banner.missing-permission_update_one':
    'Ваша роля <Roles/> не мае дазволу на абнаўленне гэтага дакумента.',
  /** The pending text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.sent': 'Запыт рэдактара адпраўлены',
  /** The text for the request permission button that appears for viewer roles */
  'banners.permission-check-banner.request-permission-button.text':
    'Запытаць дазвол на рэдагаванне',
  /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */
  'banners.published-release.description':
    'Вы глядзіце на дакумент толькі для чытання, які быў апублікаваны як частка <VersionBadge>{{title}}</VersionBadge>. Яго нельга рэдагаваць',
  /** The text for the reload button */
  'banners.reference-changed-banner.reason-changed.reload-button.text': 'Перазагрузіць спасылку',
  /** The text for the reference change banner if the reason is that the reference has been changed */
  'banners.reference-changed-banner.reason-changed.text':
    'Гэтая спасылка змянілася з моманту, як вы яе адкрылі.',
  /** The text for the close button */
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Закрыць спасылку',
  /** The text for the reference change banner if the reason is that the reference has been deleted */
  'banners.reference-changed-banner.reason-removed.text':
    'Гэтая спасылка была выдалена з моманту, як вы яе адкрылі.',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.add-to-release': 'Дадаць у выпуск',
  /** The text that appears for the action button to add the current document to the global release */
  'banners.release.action.open-to-edit': 'Адкрыць выпуск для рэдагавання',
  /** Toast description in case an error occurs when adding a document to a release  */
  'banners.release.error.description':
    'Пры даданні дакумента ў выпуск адбылася памылка: {{message}}',
  /** Toast title in case an error occurs when adding a document to a release  */
  'banners.release.error.title': 'Памылка дадання дакумента ў выпуск',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description': 'Дакумент існуе толькі ў',
  /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-end_one': 'выпуску',
  /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */
  'banners.release.navigate-to-edit-description-multiple_one':
    "Гэты дакумент з'яўляецца часткай <VersionBadge/> выпуску і яшчэ {{count}} выпуску.",
  /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */
  'banners.release.navigate-to-edit-description-single':
    "Гэты дакумент з'яўляецца часткай <VersionBadge/> выпуску",
  /** The text for the banner that appears when a document is not in the current global release */
  'banners.release.not-in-release': 'Не ў <VersionBadge>{{title}}</VersionBadge> выпуску.',
  /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.description':
    'Калі ласка, пачакайце, пакуль дакумент будзе дададзены ў выпуск. Гэта не павінна заняць больш за некалькі секунд.',
  /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */
  'banners.release.waiting.title': 'Даданне дакумента ў выпуск…',
  /** The text for the revision not found banner */
  'banners.revision-not-found.description':
    'Мы не змаглі знайсці выбраную версію дакумента, калі ласка, выберыце іншы запіс з гісторыі.',
  /** The text content for the scheduled draft override banner */
  'banners.scheduled-draft-override-banner.text': undefined, // 'A scheduled draft for this document exists. If you publish changes now they will be overwritten when the schedule runs.'
  /** The text content for the unpublished document banner when is part of a release */
  'banners.unpublished-release-banner.text':
    'Гэты дакумент будзе зняты з публікацыі як частка <VersionBadge>{{title}}</VersionBadge> выпуску',
  /** The text content for the unpublished document banner letting the user know that the current published version is being shown */
  'banners.unpublished-release-banner.text-with-published':
    'Паказваецца бягучая <strong>апублікаваная</strong> версія:',

  /** Browser/tab title when creating a new document of a given type */
  'browser-document-title.new-document': 'Новы {{schemaType}}',
  /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */
  'browser-document-title.untitled-document': 'Бяз назвы',

  /** The action menu button aria-label */
  'buttons.action-menu-button.aria-label': 'Адкрыць дзеянні дакумента',
  /** The action menu button tooltip */
  'buttons.action-menu-button.tooltip': 'Дзеянні дакумента',
  /** The aria-label for the split pane button on the document panel header */
  'buttons.split-pane-button.aria-label': 'Раздзяліць панэль праваруч',
  /** The tool tip for the split pane button on the document panel header */
  'buttons.split-pane-button.tooltip': 'Раздзяліць панэль праваруч',
  /** The title for the close button on the split pane on the document panel header */
  'buttons.split-pane-close-button.title': 'Зачыніць раздзеленую панэль',
  /** The title for the close group button on the split pane on the document panel header */
  'buttons.split-pane-close-group-button.title': 'Зачыніць групу панэляў',

  /** The text for the canvas linked banner action button */
  'canvas.banner.edit-in-canvas-action': 'Рэдагаваць у Canvas',
  /** The text for the canvas linked banner when the document is a draft */
  'canvas.banner.linked-text.draft': 'Гэты чарнавік дакумента звязаны з Canvas',
  /** The text for the canvas linked banner when the document is a live document */
  'canvas.banner.linked-text.published': 'Гэты жывы дакумент звязаны з Canvas',
  /** The text for the canvas linked banner when the document is a version document */
  'canvas.banner.linked-text.version': 'Гэты версійны дакумент звязаны з Canvas',
  /** The text for the canvas linked banner popover button */
  'canvas.banner.popover-button-text': 'Даведацца больш',
  /** The description for the canvas linked banner popover */
  'canvas.banner.popover-description':
    'Canvas дазваляе ствараць кантэнт у рэдактары свабоднай формы, які аўтаматычна адлюстроўваецца ў Studio як структураваны кантэнт падчас набору тэксту.',
  /** The heading for the canvas linked banner popover */
  'canvas.banner.popover-heading': 'Аўтарства з ідэяй на першым месцы',

  /** The description for the changes banner */
  'changes.banner.description':
    'Паказана гісторыя для версіі <strong>{{perspective}}</strong> гэтага дакумента.',
  /** The tooltip for the changes banner */
  'changes.banner.tooltip':
    'Гэты прагляд паказвае змены, якія адбыліся ў канкрэтнай версіі гэтага дакумента. Выберыце іншую версію, каб убачыць яе змены',
  /** The label used in the changes inspector for the from selector */
  'changes.from.label': 'Ад',
  /* The label for the history tab in the changes inspector*/
  'changes.tab.history': 'Гісторыя',
  /* The label for the review tab in the changes inspector*/
  'changes.tab.review-changes': 'Прагляд зменаў',
  /** The label used in the changes inspector for the to selector */
  'changes.to.label': 'Да',

  /** The error message shown when the specified document comparison mode is not supported */
  'compare-version.error.invalidModeParam':
    '"{{input}}" не з\'яўляецца падтрымліваемым рэжымам параўнання дакументаў.',
  /** The error message shown when the next document for comparison could not be extracted from the URL */
  'compare-version.error.invalidNextDocumentParam': 'Параметр наступнага дакумента недапушчальны.',
  /** The error message shown when the document comparison URL could not be parsed */
  'compare-version.error.invalidParams.title': 'Немагчыма параўнаць дакументы',
  /** The error message shown when the previous document for comparison could not be extracted from the URL */
  'compare-version.error.invalidPreviousDocumentParam':
    'Параметр папярэдняга дакумента недапушчальны.',

  /** The text for the tooltip when the "Compare versions" action for a document is disabled */
  'compare-versions.menu-item.disabled-reason':
    'Няма іншых версій гэтага дакумента для параўнання.',
  /** The text for the "Compare versions" action for a document */
  'compare-versions.menu-item.title': 'Параўнаць версіі',
  /** The string used to label draft documents */
  'compare-versions.status.draft': 'Чарнавік',
  /** The string used to label published documents */
  'compare-versions.status.published': 'Апублікаваны',
  /** The title used when comparing versions of a document */
  'compare-versions.title': 'Параўнанне версій',

  /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */
  'confirm-delete-dialog.cancel-button.text': 'Адмяніць',
  /** Used in `confirm-delete-dialog.cdr-summary.title` */
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 дакумент',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Набор дадзеных: {{datasets}}',
  /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Недаступны dataset',
  /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} ў іншым dataset',
  /** Appears when hovering over the copy button to copy */
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Скапіяваць ID ў буфер абмену',
  /** The header for the dataset column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.dataset.label': 'Dataset',
  /** The header for the document ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.document-id.label': 'ID дакумента',
  /** The toast title when the copy button has been clicked but copying failed */
  'confirm-delete-dialog.cdr-table.id-copied-toast.title-failed':
    'Не атрымалася скапіяваць ідэнтыфікатар дакумента',
  /** The header for the project ID column in the list of cross-dataset references found */
  'confirm-delete-dialog.cdr-table.project-id.label': 'ID праекта',
  /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Выдаліць усё роўна',
  /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Зняць з публікацыі ўсё роўна',
  /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_delete': 'Выдаліць зараз',
  /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Зняць з публікацыі зараз',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_delete':
    'Вы ўпэўнены, што хочаце выдаліць “<DocumentTitle/>”?',
  /** If no referring documents are found, this text appears above the cancel and confirmation buttons */
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Вы ўпэўнены, што хочаце зняць з публікацыі “<DocumentTitle/>”?',
  /** The text body of the error dialog. */
  'confirm-delete-dialog.error.message.text':
    'Падчас загрузкі дакументаў, якія спасылаюцца, адбылася памылка.',
  /** The text in the retry button of the confirm delete dialog if an error occurred. */
  'confirm-delete-dialog.error.retry-button.text': 'Паспрабаваць зноў',
  /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */
  'confirm-delete-dialog.error.title.text': 'Памылка',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_delete': 'Выдаліць дакумент?',
  /** The header of the confirm delete dialog */
  'confirm-delete-dialog.header.text_unpublish': 'Зняць дакумент з публікацыі?',
  /** The text that appears while the referring documents are queried */
  'confirm-delete-dialog.loading.text': 'Пошук дакументаў, якія спасылаюцца…',
  /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */
  'confirm-delete-dialog.other-reference-count.title_one': '1 іншая спасылка не паказана',
  /** Text in the tooltip of this component if hovering over the info icon */
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Мы не можам паказаць метададзеныя для гэтых спасылак з-за адсутнасці токена доступу для звязаных datasets.',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  /** Appears when unable to render a document preview in the referring document list */
  'confirm-delete-dialog.preview-item.preview-unavailable.title': 'Папярэдні прагляд недаступны',
  /** Warns the user of affects to other documents if the action is confirmed (delete) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Калі вы выдаліце гэты дакумент, дакументы, якія на яго спасылаюцца, больш не змогуць атрымаць да яго доступ.',
  /** Warns the user of affects to other documents if the action is confirmed (unpublish) */
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Калі вы здымеце гэты дакумент з публікацыі, дакументы, якія на яго спасылаюцца, больш не змогуць атрымаць да яго доступ.',
  /** Tells the user the count of how many other referring documents there are before listing them. (singular) */
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 дакумент спасылаецца на «<DocumentTitle/>»',
  /** Describes the list of documents that refer to the one trying to be deleted (delete) */
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Вы можаце не мець магчымасці выдаліць «<DocumentTitle/>», таму што наступныя дакументы спасылаюцца на яго:',
  /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Вы можаце не мець магчымасці апублікаваць «<DocumentTitle/>», таму што наступныя дакументы спасылаюцца на яго:',

  /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.cancel-button.fallback-text': 'Адмяніць',
  /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */
  'confirm-dialog.confirm-button.fallback-text': 'Пацвердзіць',

  /** For the default structure definition, the title for the "Content" pane */
  'default-definition.content-title': 'Змесціва',

  /** The text shown if there was an error while getting the document's title via a preview value */
  'doc-title.error.text': 'Памылка: {{errorMessage}}',
  /** The text shown if the preview value for a document is non-existent or empty */
  'doc-title.fallback.text': 'Без назвы',
  /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */
  'doc-title.unknown-schema-type.text': 'Невядомы тып схемы: {{schemaType}}',

  /** Tooltip text shown for the close button of the document inspector */
  'document-inspector.close-button.tooltip': 'Зачыніць',
  /** The title shown in the dialog header, when inspecting a valid document */
  'document-inspector.dialog.title': 'Інспекцыя <DocumentTitle/>',
  /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */
  'document-inspector.dialog.title-no-value': 'Няма значэння',
  /** Title shown for menu item that opens the "Inspect" dialog */
  'document-inspector.menu-item.title': 'Інспекцыя',
  /** the placeholder text for the search input on the inspect dialog */
  'document-inspector.search.placeholder': 'Пошук',
  /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */
  'document-inspector.view-mode.parsed': 'Разабраны',
  /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */
  'document-inspector.view-mode.raw-json': 'Сыры JSON',

  /** The text for when a form is hidden */
  'document-view.form-view.form-hidden': 'Гэтая форма схаваная',
  /** Fallback title shown when a form title is not provided */
  'document-view.form-view.form-title-fallback': 'Без назвы',
  /** The text for when the form view is loading a document */
  'document-view.form-view.loading': 'Загрузка дакумента…',
  /** The description of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.description':
    'Калі ласка, пачакайце, пакуль дакумент будзе сінхранізаваны. Гэта звычайна адбываецца адразу пасля публікацыі дакумента і не павінна заняць больш за некалькі секунд',
  /** The title of the sync lock toast on the form view */
  'document-view.form-view.sync-lock-toast.title': 'Сінхранізацыя дакумента…',

  /** The description for the document favorite action */
  'document.favorites.add-to-favorites': 'Дадаць у абранае',
  /** The description for the document unfavorite action */
  'document.favorites.remove-from-favorites': 'Выдаліць з абранага',

  /** The description for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.description':
    'Мы не можам загрузіць змены для гэтага дакумента, верагодна, з-за палітыкі захавання гісторыі вашага плана, гэта паказвае, як версія <strong>{{version}}</strong> параўноўваецца з версіяй <strong>published</strong>.',
  /** The title for the events inspector when we can't load the document so we default to compare with published */
  'events.compare-with-published.title': 'Параўнанне з апублікаваным',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */
  'events.inspect.release': 'Праверыць <VersionBadge>{{releaseTitle}}</VersionBadge> дакумент',
  /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/
  'events.open.draft': 'Адкрыць <VersionBadge>чарнавік</VersionBadge> дакумент',
  /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/
  'events.open.release': 'Адкрыць <VersionBadge>{{releaseTitle}}</VersionBadge> выпуск',

  /** The loading messaging for when the tooltip is still loading permission info */
  'insufficient-permissions-message-tooltip.loading-text': 'Загрузка…',

  /** --- Menu items --- */
  /** The menu item group title to use for the Action menu items */
  'menu-item-groups.actions-group': 'Дзеянні',
  /** The menu item group title to use for the Layout menu items */
  'menu-item-groups.layout-group': 'Макет',
  /** The menu item group title to use for the Sort menu items */
  'menu-item-groups.sorting-group': 'Сартаванне',

  /** The menu item title to use the compact view */
  'menu-items.layout.compact-view': 'Кампактны выгляд',
  /** The menu item title to use the detailed view */
  'menu-items.layout.detailed-view': 'Падрабязны выгляд',
  /** The menu item title to Sort by Created */
  'menu-items.sort-by.created': 'Сартаваць па даце стварэння',
  /** The menu item title to Sort by Last Edited */
  'menu-items.sort-by.last-edited': 'Сартаваць па апошнім рэдагаванні',

  /** The link text of the no document type screen that appears directly below the subtitle */
  'no-document-types-screen.link-text': 'Даведайцеся, як дадаць тып дакумента →',
  /** The subtitle of the no document type screen that appears directly below the title */
  'no-document-types-screen.subtitle':
    'Калі ласка, вызначце хаця б адзін тып дакумента ў вашай схеме.',
  /** The title of the no document type screen */
  'no-document-types-screen.title': 'Няма тыпаў дакументаў',

  /** Text shown on back button visible on smaller breakpoints */
  'pane-header.back-button.text': 'Назад',
  /** tooltip text (via `title` attribute) for the menu button */
  'pane-header.context-menu-button.tooltip': 'Паказаць меню',
  /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */
  'pane-header.create-menu.label': 'Стварыць',
  /** Tooltip displayed on the create new button in document lists */
  'pane-header.create-new-button.tooltip': 'Стварыць новы дакумент',
  /** The `aria-label` for the disabled button in the pane header if create permissions are granted */
  'pane-header.disabled-created-button.aria-label': 'Недастаткова правоў',

  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.draft-status.has-draft.tooltip': 'Адрэдагавана <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.draft-status.no-draft.tooltip': 'Няма неапублікаваных рэдагаванняў',
  /** The subtitle tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.subtitle': 'Дакумент: <Code>{{documentId}}</Code>',
  /** The title tor pane item previews if there isn't a matching schema type found */
  'pane-item.missing-schema-type.title':
    'Схема не знойдзена для тыпу <Code>{{documentType}}</Code>',
  /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */
  'pane-item.published-status.has-published.tooltip': 'Апублікавана <RelativeTime/>',
  /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */
  'pane-item.published-status.no-published.tooltip': 'Няма неапублікаваных рэдагаванняў',

  /** The text used in the document header title if there is an error */
  'panes.document-header-title.error.text': 'Памылка: {{error}}',
  /** The text used in the document header title if creating a new item */
  'panes.document-header-title.new.text': 'Новы {{schemaType}}',
  /** The text used in the document header title if no other title can be determined */
  'panes.document-header-title.untitled.text': 'Без назвы',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.retrying': 'Паўторная спроба…',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text': 'Памылка: <Code>{{error}}</Code>',
  /** The error text on the document list pane */
  'panes.document-list-pane.error.text.dev': 'Памылка: <Code>{{error}}</Code>',
  /** The error text on the document list pane if the browser appears to be offlline */
  'panes.document-list-pane.error.text.offline': 'Здаецца, інтэрнэт-злучэнне не працуе.',
  /** The error title on the document list pane */
  'panes.document-list-pane.error.title': 'Не ўдалося атрымаць элементы спісу',
  /** The help text saying that we'll retry fetching the document list */
  'panes.document-list-pane.error.will-retry-automatically_one': 'Паўторная спроба…',
  /** The text of the document list pane if more than a maximum number of documents are returned */
  'panes.document-list-pane.max-items.text': 'Паказана максімум {{limit}} дакументаў',
  /** The text of the document list pane if no documents are found for a specified type */
  'panes.document-list-pane.no-documents-of-type.text': 'Няма дакументаў гэтага тыпу',
  /** The text of the document list pane if no documents are found */
  'panes.document-list-pane.no-documents.text': 'Вынікі не знойдзены',
  /** The text of the document list pane if no documents are found matching specified criteria */
  'panes.document-list-pane.no-matching-documents.text':
    'Няма дакументаў, якія адпавядаюць крытэрам',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.reconnecting': 'Спроба ўсталяваць злучэнне…',
  /** The aria-label for the search input on the document list pane */
  'panes.document-list-pane.search-input.aria-label': 'Пошук у спісе',
  /** The search input for the search input on the document list pane */
  'panes.document-list-pane.search-input.placeholder': 'Пошук у спісе',
  /** The summary title when displaying an error for a document operation result */
  'panes.document-operation-results.error.summary.title': 'Падрабязнасці',
  /** The text when a generic operation failed (fallback, generally not shown)  */
  'panes.document-operation-results.operation-error': 'Падчас {{context}} адбылася памылка',
  /** The text when a delete operation failed  */
  'panes.document-operation-results.operation-error_delete':
    'Падчас спробы выдаліць гэты дакумент адбылася памылка. Звычайна гэта азначае, што ёсць іншыя дакументы, якія на яго спасылаюцца.',
  /** The text when an unpublish operation failed  */
  'panes.document-operation-results.operation-error_unpublish':
    'Падчас спробы зняць гэты дакумент з публікацыі адбылася памылка. Звычайна гэта азначае, што ёсць іншыя дакументы, якія на яго спасылаюцца.',
  /** The text when a generic operation succeeded (fallback, generally not shown)  */
  'panes.document-operation-results.operation-success':
    'Паспяхова выканана {{context}} над дакументам',
  /** The text when copy URL operation succeeded  */
  'panes.document-operation-results.operation-success_copy-url':
    'URL дакумента скапіяваны ў буфер абмену',
  /**  */
  'panes.document-operation-results.operation-success_createVersion':
    '<Strong>{{title}}</Strong> быў дададзены да выпуску',
  /** The text when a delete operation succeeded  */
  'panes.document-operation-results.operation-success_delete': 'Дакумент быў паспяхова выдалены',
  /** The text when a discard changes operation succeeded  */
  'panes.document-operation-results.operation-success_discardChanges':
    'Усе змены з моманту апошняй публікацыі былі адменены. Адхілены чарнавік яшчэ можна аднавіць з гісторыі',
  /** The text when a duplicate operation succeeded  */
  'panes.document-operation-results.operation-success_duplicate':
    'Дакумент быў паспяхова дубляваны',
  /** The text when a publish operation succeeded  */
  'panes.document-operation-results.operation-success_publish': 'Дакумент быў апублікаваны',
  /** The text when a restore operation succeeded  */
  'panes.document-operation-results.operation-success_restore':
    '<Strong>{{title}}</Strong> быў адноўлены',
  /** The text when an unpublish operation succeeded  */
  'panes.document-operation-results.operation-success_unpublish':
    'Дакумент быў зняты з публікацыі. Чарнавік быў створаны з апошняй апублікаванай версіі.',
  /** The document title shown when document title is "undefined" in operation message */
  'panes.document-operation-results.operation-undefined-title': 'Без назвы',
  /** The loading message for the document not found pane */
  'panes.document-pane.document-not-found.loading': 'Загрузка дакумента…',
  /** The text of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.text':
    'Тып дакумента не вызначаны, і дакумент з ідэнтыфікатарам <Code>{{id}}</Code> не быў знойдзены.',
  /** The title of the document not found pane if the schema is known */
  'panes.document-pane.document-not-found.title': 'Дакумент не знойдзены',
  /** The text of the document not found pane if the schema is not found */
  'panes.document-pane.document-unknown-type.text':
    'Гэты дакумент мае тып схемы <Code>{{documentType}}</Code>, які не вызначаны як тып у лакальнай схеме кантэнт-студыі.',
  /** The title of the document not found pane if the schema is not found or unknown */
  'panes.document-pane.document-unknown-type.title':
    'Невядомы тып дакумента: <Code>{{documentType}}</Code>',
  /** The title of the document not found pane if the schema is unknown */
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Гэты дакумент не існуе, і для яго не быў вызначаны тып схемы.',
  /** Default message shown while resolving the structure definition for an asynchronous node */
  'panes.resolving.default-message': 'Загрузка…',
  /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */
  'panes.resolving.slow-resolve-message': 'Яшчэ загружаецца…',
  /** The text to display when type is missing */
  'panes.unknown-pane-type.missing-type.text':
    'Элемент структуры не мае неабходнай уласцівасці <Code>type</Code>.',
  /** The title of the unknown pane */
  'panes.unknown-pane-type.title': 'Невядомы тып панэлі',
  /** The text to display when type is unknown */
  'panes.unknown-pane-type.unknown-type.text':
    "Элемент структуры тыпу <Code>{{type}}</Code> не з'яўляецца вядомай адзінкай.",

  /** The text for the "Open preview" action for a document */
  'production-preview.menu-item.title': 'Адкрыць прагляд',

  /** The text for the confirm button in the request permission dialog used in the permissions banner */
  'request-permission-dialog.confirm-button.text': 'Адправіць запыт',
  /** The description text for the request permission dialog used in the permissions banner */
  'request-permission-dialog.description.text':
    'Ваш запыт будзе адпраўлены адміністратарам(ам) праекта. Калі жадаеце, вы таксама можаце дадаць нататку',
  /** The header/title for the request permission dialog used in the permissions banner */
  'request-permission-dialog.header.text': 'Запытаць доступ да рэдагавання',
  /** The text describing the note input for the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.description.text': 'Калі жадаеце, вы можаце дадаць нататку',
  /** The placeholder for the note input in the request permission dialog used in the permissions banner */
  'request-permission-dialog.note-input.placeholder.text': 'Дадаць нататку...',
  /** The error/warning text in the request permission dialog when the user's request has been declined */
  'request-permission-dialog.warning.denied.text':
    'Ваш запыт на доступ да гэтага праекта быў адхілены.',
  /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */
  'request-permission-dialog.warning.limit-reached.text':
    'Вы дасягнулі ліміту запытаў на ролі па ўсіх праектах. Калі ласка, пачакайце перад тым, як падаваць больш запытаў, або звяжыцеся з адміністратарам за дапамогай.',

  /** Label for button when status is saved */
  'status-bar.document-status-pulse.status.saved.text': 'Захавана',
  /** Label for button when status is syncing */
  'status-bar.document-status-pulse.status.syncing.text': 'Захоўваецца...',
  /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Апублікавана {{relativeTime}} таму',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */
  'status-bar.publish-status-button.last-published-time.tooltip': 'Апублікавана <RelativeTime/>',
  /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Апошняе абнаўленне {{relativeTime}} таму',
  /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */
  'status-bar.publish-status-button.last-updated-time.tooltip':
    'Апошняе абнаўленне <RelativeTime/>',
  /** Aria label for the button */
  'status-bar.review-changes-button.aria-label': 'Прагляд зменаў',
  /** Label for button when status is saved */
  'status-bar.review-changes-button.status.saved.text': 'Захавана!',
  /** Label for button when status is syncing */
  'status-bar.review-changes-button.status.syncing.text': 'Захаванне...',
  /** Text for the secondary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.changes-saved': 'Змены захаваны',
  /** Primary text for tooltip for the button */
  'status-bar.review-changes-button.tooltip.text': 'Прагляд зменаў',

  /** The text that appears in side the documentation link */
  'structure-error.docs-link.text': 'Прагляд дакументацыі',
  /** Labels the error message or error stack of the structure error screen */
  'structure-error.error.label': 'Памылка',
  /** The header that appears at the top of the error screen */
  'structure-error.header.text': 'Узнікла памылка пры чытанні структуры',
  /** The text in the reload button to retry rendering the structure */
  'structure-error.reload-button.text': 'Перазагрузіць',
  /** Labels the structure path of the structure error screen */
  'structure-error.structure-path.label': 'Структура',

  /** The aria label for the menu button in the timeline item */
  'timeline-item.menu-button.aria-label': 'Адкрыць меню дзеянняў',
  /** The text for the tooltip in menu button the timeline item */
  'timeline-item.menu-button.tooltip': 'Дзеянні',
  /** The text for the collapse action in the timeline item menu */
  'timeline-item.menu.action-collapse': 'Згарнуць',
  /** The text for the expand action in the timeline item menu */
  'timeline-item.menu.action-expand': 'Разгарнуць',
  /** The text for the published event menu tooltip when the release is not found */
  'timeline-item.not-found-release.tooltip': 'Рэліз з ідэнтыфікатарам "{{releaseId}}" не знойдзены',

  /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */
  'toggle-inline-changes.menu-item.title': undefined, // 'Inline changes'
})
