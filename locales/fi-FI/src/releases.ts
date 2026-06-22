import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Lisää asiakirja',
  /** Action text for archiving a release */
  'action.archive': 'Arkistoi julkaisu',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Poista julkaisun ajastus arkistoidaksesi sen',
  /** Action text for showing the archived releases */
  'action.archived': 'Arkistoitu',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Kopioi julkaisun tunnus',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Kopioi julkaisun URL',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Kopioi julkaisun otsikko',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Kopioi',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Luo uusi julkaisu',
  /** Action text for deleting a release */
  'action.delete-release': 'Poista julkaisu',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Ajastetut luonnokset',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Kopioi julkaisu',
  /** Action text for editing a release */
  'action.edit': 'Muokkaa julkaisua',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Palauta nyt',
  /** Action text for opening a release */
  'action.open': 'Aktiivinen',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Keskeytetty',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Suorita julkaisu',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Julkaisut',
  /** Action text for reverting a release */
  'action.revert': 'Palauta julkaisu',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Palauta julkaisematta jättäminen julkaisun yhteydessä',
  /** Text for the review changes button in release tool */
  'action.review': 'Tarkista muutokset',
  /** Action text for scheduling a release */
  'action.schedule': 'Ajasta julkaisu...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Ajasta julkaisematta jättäminen',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'Asiakirja täytyy julkaista ennen kuin julkaisematta jättämisen voi ajastaa',
  /** Label for unarchiving a release */
  'action.unarchive': 'Poista julkaisu arkistosta',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Poista julkaisu',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Poista julkaisu julkaisun yhteydessä',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Peruuta julkaisun ajastus',

  /** Text for the summary button in release tool */
  'actions.summary': 'Yhteenveto',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Lisäsi dokumenttiversion',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arkistoi julkaisun <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Loi julkaisun <strong>{{releaseTitle}}</strong> <ScheduleTarget>kohdistuen </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Hylkäsi dokumenttiversion',
  'activity.event.edit': 'Asetti julkaisuajan kohteeseen <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'Mahdollisimman pian',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Päättämätön',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Julkaisi julkaisun <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Merkitty ajastetuksi',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Palautti julkaisun <strong>{{releaseTitle}}</strong> arkistosta',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Merkitty ajastamattomaksi',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Julkaisun toiminnan hakemisessa tapahtui virhe',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Ladataan julkaisun toimintaa',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Toiminta',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Kyllä, arkistoi julkaisu',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Tämä arkistoi 1 dokumenttiversion.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': 'Tämä arkistoi {{count}} dokumenttiversiota.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Haluatko varmasti arkistoida tämän julkaisun?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Haluatko varmasti arkistoida julkaisun <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Se on saatavilla {{retentionDays}} päivän ajan ja poistetaan automaattisesti {{removalDate}}. <Link>Lue säilytystiedoista</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Tämä julkaisu on arkistoitu',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'On {{count}} Scheduled Draft, joka vaatii ajoitusvahvistuksen',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'On {{count}} Scheduled Draftia, jotka vaativat ajoitusvahvistuksen',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Jatka ajoitusta',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Jatka kaikkia ajoituksia',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'Drafts-tila on poistettu käytöstä, mutta julkaistavaksi on vielä ajoitettuja luonnoksia.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Tätä julkaisua ei löydy',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Hylkää',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Scheduled drafts on poistettu käytöstä, mutta julkaistavaksi on vielä ajoitettuja luonnoksia.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Muutokset julkaistuihin dokumentteihin',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Vahvista ajoitukset',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Ajoita kaikki keskeytetyt Scheduled Draftsit niiden suunnitelluille julkaisupäiville',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Jotkut näistä Scheduled Drafteista on ajoitettu menneille päivämäärille. Ajoitusten vahvistaminen julkaisee kyseiset dokumenttiversiot välittömästi.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Jatka Scheduled Drafteja',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Kopio',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Kyllä, korvaa luonnos',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Tästä dokumentista on jo olemassa luonnosversio. Kopioi nykyinen versio luonnokseksi ja korvaa olemassa oleva luonnosversio.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Luonnosversio on jo olemassa',

  /** Text for when a release / document was created */
  created: 'Luotu <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Toiminta',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Kiinnitä julkaisu studioon',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Julkaistu',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Julkaistu {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Irrota julkaisu studiosta',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Kyllä, poista julkaisu',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Tämä poistaa 1 dokumenttiversion.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'Tämä poistaa {{count}} dokumenttiversiota.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Haluatko varmasti poistaa tämän julkaisun?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' julkaisu on poistettu",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'Muutoslista on tyhjä, katso dokumentti',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Ei muutoksia',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Tämä poistaa pysyvästi kaikki tähän dokumenttiin tehdyt muutokset. Tätä toimintoa ei voi kumota.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Tämä poistaa pysyvästi kaikki tähän dokumenttiin '<strong>{{releaseTitle}}</strong>' julkaisussa tehdyt muutokset. Tätä toimintoa ei voi kumota.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Hylätäänkö luonnos?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Poistetaanko dokumentti '<strong>{{releaseTitle}}</strong>' julkaisusta?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Hylkää luonnos',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Poista julkaisusta',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} vahvistusvirhe',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} vahvistusvirhettä',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Kyllä, kopioi julkaisu',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Tämä kopioi julkaisun ja 1 dokumenttiversion.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Tämä kopioi julkaisun ja {{count}} dokumenttiversiota.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Haluatko varmasti kopioida tämän julkaisun?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Virheen tiedot',

  /** Title text when error during release update */
  'failed-edit-title': 'Muutosten tallentaminen epäonnistui',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Julkaiseminen epäonnistui',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Ajastaminen epäonnistui',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Kaikki',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Virheet',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arkistoitu',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Luotu',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Muokattu',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Julkaistu',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Poistettu arkistosta',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Ladataan julkaisua',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Ladataan asiakirjoja',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Tämän julkaisun asiakirjoja ei voida ladata. Yritä myöhemmin uudelleen.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Jokin meni pieleen',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Julkaistaessa',
  /** Label for the release menu */
  'menu.label': 'Julkaisuvalikko',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Toiminnot',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Ei arkistoituja julkaisuja',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Ei tauotettuja ajastettuja luonnoksia',

  /** Text for when no releases are found */
  'no-releases': 'Ei julkaisuja',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Ei ajastettuja luonnoksia',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Dokumentaatio',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Näytä kalenteri',
  /** Description for the release tool */
  'overview.description':
    'Julkaisut ovat kokoelmia asiakirjamuutoksista, joita voidaan hallita, aikatauluttaa ja palauttaa yhdessä.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Hae julkaisuja',
  /** Title for the release tool */
  'overview.title': 'Julkaisut',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Tämä julkaisu on ohittanut suunnitellun julkaisupäivämääränsä',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft':
    'Tämä luonnos on ohittanut suunnitellun julkaisupäivämääränsä',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Roolisi rajoittaa tällä hetkellä sitä, mitä voit nähdä tässä julkaisussa. Et voi julkaista eikä aikatauluttaa tätä julkaisua.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Rajoitettu käyttöoikeus',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Sinulla ei ole oikeutta arkistoida tätä julkaisua',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Sinulla ei ole oikeutta poistaa tätä julkaisua',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Sinulla ei ole oikeutta hylätä tätä versiota',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Sinulla ei ole oikeutta kopioida tätä releasea',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Sinulla ei ole oikeutta poistaa tätä releasea arkistosta',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'Sinulla ei ole oikeutta peruuttaa tämän asiakirjan julkaisua',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} muokkaa tätä asiakirjaa "{{releaseTitle}}"-releaseessa juuri nyt',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Ei ole asiakirjoja julkaistavaksi',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "'<strong>{{title}}</strong>'-release ja sen asiakirja julkaistaan.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "'<strong>{{title}}</strong>'-release ja sen {{releaseDocumentsLength}} asiakirjaa julkaistaan.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Haluatko varmasti julkaista releasen ja kaikki asiakirjaversiot?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Joissakin asiakirjoissa on vahvistusvirheitä',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Vahvistetaan asiakirjoja...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Sinulla ei ole oikeutta julkaista',

  /** Title for information card on a published release */
  'publish-info.title': 'Tämä release on julkaistu onnistuneesti.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Nimetön',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Tämä palauttaa {{releaseDocumentsLength}} asiakirjaversion.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Tämä palauttaa {{releaseDocumentsLength}} asiakirjaversiota.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Palauta release välittömästi',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': 'Haluatko varmasti palauttaa "{{title}}"-releasen?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Tämän releasen asiakirjoihin tehtiin muutoksia niiden julkaisemisen jälkeen. Palauttaminen ylikirjoittaa nämä muutokset.',

  /** Description of a reverted release */
  'revert-release.description': 'Palauta asiakirjaversioiden muutokset kohteessa "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Palautetaan "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Lisää asiakirjoja tähän releaseen muutosten tarkistamiseksi',
  /** Text for when a document is edited */
  'review.edited': 'Muokattu <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Ei ole asiakirjoja aikataulutettavaksi',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Tämä release on jo aikataulutettu',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Joissakin dokumenteissa on validointivirheitä',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validoidaan dokumentteja...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Sinulla ei ole oikeutta aikatauluttaa',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Haluatko varmasti poistaa julkaisun aikataulun?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Kyllä, aikatauluta',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "Julkaisu '<strong>{{title}}</strong>' ja sen dokumentti julkaistaan valittuna päivänä.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'Julkaisu <strong>{{title}}</strong> ja sen {{count}} dokumenttiversiota aikataulutetaan.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Aikatauluta julkaisu',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Aikatauluta tulevalle ajalle ja päivämäärälle.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Aikatauluta',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Aikatauluta julkaisun poisto',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'Valitse, milloin tämä dokumentti poistetaan julkaisusta.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Aikatauluta luonnos julkaisun poistoa varten',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Hae dokumentteja',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Kaikki dokumentit validoitu, löydettiin ongelmia',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Kaikki dokumentit validoitu, ei ongelmia',
  /** Text for when the release was created */
  'summary.created': 'Luotu <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} dokumentti',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} dokumenttia',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Julkaisun julkaisemiseksi tai aikatauluttamiseksi ratkaise dokumenteissa havaitut ongelmat',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Ei dokumentteja',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Tämä aikataulutettu luonnos ei sisällä dokumenttia. Se on saatettu poistaa.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Ei dokumenttia tässä julkaisussa',
  /** Text for when the release has not published */
  'summary.not-published': 'Ei julkaistu',
  /** Text for when the release was published */
  'summary.published': 'Julkaistu <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} / {{totalCount}} dokumenttia vahvistettu',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Vahvistetaan dokumentteja: {{validatedCount}} / {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Lisää',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Muuta',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Poista julkaisu',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Toiminto',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arkistoitu',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Osallistujat',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Luonut',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Dokumentti',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Dokumentit',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Muokattu',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Tarkoitettu',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Julkaistu',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Julkaistu',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Julkaistu',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Ajastettu',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Aika',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tyyppi',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Milloin',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Arvioitu',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Ajastettu',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Arkistointi epäonnistui '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Luonnosten ajastaminen epäonnistui: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Julkaisun ID kopioitu leikepöydälle',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Julkaisun linkki kopioitu leikepöydälle',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Julkaisun otsikko kopioitu leikepöydälle',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Dokumentin lisääminen julkaisuun epäonnistui: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Kohteen '<strong>{{title}}</strong>' poistaminen epäonnistui: {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "Julkaisu '<strong>{{title}}</strong>' poistettiin onnistuneesti",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error':
    "Kohteen '<strong>{{title}}</strong>' kahdentaminen epäonnistui: {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "Julkaisu '<strong>{{title}}</strong>' kahdennettiin. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Näytä kahdennettu julkaisu',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "Julkaisu '{{title}}' palautettiin onnistuneesti",
  /** Text for toast when release failed to publish */
  'toast.publish.error':
    "Kohteen '<strong>{{title}}</strong>' julkaiseminen epäonnistui: {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': "Julkaisun '{{title}}' palautus luotiin onnistuneesti. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Näytä palautusjulkaisu',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Julkaisun palauttaminen epäonnistui: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Kohteen '<strong>{{title}}</strong>' ajastaminen epäonnistui: {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "Julkaisu '<strong>{{title}}</strong>' ajastettiin.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    "Kohteen '<strong>{{title}}</strong>' arkistoinnin purkaminen epäonnistui: {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    "Kohteen '<strong>{{title}}</strong>' ajastuksen peruuttaminen epäonnistui: {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Julkaisu on ajastettu, peruuta ajastus muuttaaksesi tyyppiä',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Peruuta',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Kyllä, poista julkaisu julkaisemisen yhteydessä',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Kaikki tähän dokumenttiversioon tehdyt muutokset menetetään.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Tämä poistaa dokumentin julkaisun osana <Label>{{title}}</Label>-julkaisua ja luo luonnoksen, jos sellaista ei ole olemassa julkaisuhetkellä.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Haluatko varmasti poistaa tämän dokumentin julkaisun julkaisemisen yhteydessä?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Tämä dokumentti on jo poistettu julkaisusta.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Tästä asiakirjasta ei ole julkaistua versiota.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'Julkaisua ei enää julkaista aikataulutettuna päivänä',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Haluatko varmasti peruuttaa julkaisun aikataulutuksen?',
})
