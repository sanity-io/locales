import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'დოკუმენტის დამატება',
  /** Action text for archiving a release */
  'action.archive': 'გამოშვების არქივირება',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'გააუქმეთ ამ გამოშვების განრიგი მის არქივირებამდე',
  /** Action text for showing the archived releases */
  'action.archived': 'არქივირებული',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'გამოშვების ID-ის კოპირება',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'გამოშვების URL-ის კოპირება',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'გამოშვების სათაურის კოპირება',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'კოპირება',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'ახალი გამოშვების შექმნა',
  /** Action text for deleting a release */
  'action.delete-release': 'გამოშვების წაშლა',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'დაგეგმილი მონახაზები',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'გამოშვების დუბლირება',
  /** Action text for editing a release */
  'action.edit': 'გამოშვების რედაქტირება',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'ახლავე დაბრუნება',
  /** Action text for opening a release */
  'action.open': 'აქტიური',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'შეჩერებული',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'გამოშვების გაშვება',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'გამოშვებები',
  /** Action text for reverting a release */
  'action.revert': 'გამოშვების დაბრუნება',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'გამოქვეყნების გაუქმების დაბრუნება გამოშვებისას',
  /** Text for the review changes button in release tool */
  'action.review': 'ცვლილებების მიმოხილვა',
  /** Action text for scheduling a release */
  'action.schedule': 'გამოშვების დაგეგმვა...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'გამოქვეყნების გაუქმების დაგეგმვა',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'გამოქვეყნების გაუქმების დასაგეგმად დოკუმენტი გამოქვეყნებული უნდა იყოს',
  /** Label for unarchiving a release */
  'action.unarchive': 'გამოშვების არქივიდან გამოტანა',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'გამოქვეყნების გაუქმება',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'გამოქვეყნების გაუქმება გამოშვებისას',
  /** Action text for unscheduling a release */
  'action.unschedule': 'გამოშვების დაგეგმვის გაუქმება',

  /** Text for the summary button in release tool */
  'actions.summary': 'შეჯამება',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'დაემატა დოკუმენტის ვერსია',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'დაარქივდა <strong>{{releaseTitle}}</strong> გამოშვება',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'შეიქმნა <strong>{{releaseTitle}}</strong> გამოშვება <ScheduleTarget>სამიზნით </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'წაიშალა დოკუმენტის ვერსია',
  'activity.event.edit': 'გამოშვების დრო დაყენდა <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'რაც შეიძლება მალე',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'გადაუწყვეტელი',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'გამოქვეყნდა <strong>{{releaseTitle}}</strong> გამოშვება',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'მონიშნულია როგორც დაგეგმილი',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'გაუქმდა არქივი <strong>{{releaseTitle}}</strong> გამოშვებისთვის',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'მონიშნულია როგორც დაუგეგმავი',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'გამოშვების აქტივობის მიღებისას მოხდა შეცდომა',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'იტვირთება გამოშვების აქტივობა',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'აქტივობა',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'დიახ, დაარქივე გამოშვება',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'ეს დაარქივებს 1 დოკუმენტის ვერსიას.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other': 'ეს დაარქივებს {{count}} დოკუმენტის ვერსიას.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'დარწმუნებული ხართ, რომ გსურთ ამ გამოშვების დაარქივება?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "დარწმუნებული ხართ, რომ გსურთ <strong>'{{title}}'</strong> გამოშვების დაარქივება?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'ის ხელმისაწვდომი იქნება {{retentionDays}} დღის განმავლობაში, შემდეგ კი ავტომატურად წაიშლება {{removalDate}}-ს. <Link>შეიტყვეთ შენახვის შესახებ</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'ეს გამოშვება დაარქივებულია',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'არის {{count}} დაგეგმილი მონახაზი, რომელიც საჭიროებს დაგეგმვის დადასტურებას',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'არის {{count}} დაგეგმილი მონახაზი, რომლებიც საჭიროებენ დაგეგმვის დადასტურებას',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'დაგეგმვის განახლება',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'ყველა განრიგის განახლება',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'მონახაზების რეჟიმი გამორთულია, მაგრამ კვლავ არსებობს გამოსაქვეყნებელი დაგეგმილი მონახაზები.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'ეს გამოშვება ვერ მოიძებნა',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'დახურვა',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'დაგეგმილი მონახაზები გამორთულია, მაგრამ კვლავ არსებობს გამოსაქვეყნებელი დაგეგმილი მონახაზები.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'ცვლილებები გამოქვეყნებულ დოკუმენტებში',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'განრიგების დადასტურება',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'ყველა შეჩერებული დაგეგმილი მონახაზის დაგეგმვა მათი გამოქვეყნების თარიღებისთვის',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'ამ დაგეგმილი მონახაზებიდან ზოგიერთი განკუთვნილია წარსული თარიღებისთვის. განრიგების დადასტურება დაუყოვნებლივ გამოაქვეყნებს დოკუმენტების ამ ვერსიებს.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'დაგეგმილი მონახაზების განახლება',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'ასლი',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'დიახ, გადავწეროთ მონახაზი',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'ამ დოკუმენტის მონახაზის ვერსია უკვე არსებობს. დააკოპირეთ მიმდინარე ვერსია მონახაზში და გადაწერეთ არსებული მონახაზის ვერსია.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'მონახაზის ვერსია უკვე არსებობს',

  /** Text for when a release / document was created */
  created: 'შექმნილია <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'აქტივობა',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'გამოშვების დამაგრება სტუდიოში',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'გამოქვეყნებულია',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'გამოქვეყნებულია {{date}}-ს',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'გამოშვების მოხსნა სტუდიოდან',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'დიახ, წავშალოთ გამოშვება',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'ეს წაშლის 1 დოკუმენტის ვერსიას.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other': 'ეს წაშლის {{count}} დოკუმენტის ვერსიას.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'დარწმუნებული ხართ, რომ გსურთ ამ გამოშვების წაშლა?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "'<strong>{{title}}</strong>' გამოშვება წაიშალა",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'ცვლილებების სია ცარიელია, იხილეთ დოკუმენტი',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'ცვლილებები არ არის',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'ეს სამუდამოდ წაშლის ამ დოკუმენტში შეტანილ ყველა ცვლილებას. ეს მოქმედება შეუქცევადია.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "ეს სამუდამოდ წაშლის ამ დოკუმენტში '<strong>{{releaseTitle}}</strong>' გამოშვების ფარგლებში შეტანილ ყველა ცვლილებას. ეს მოქმედება შეუქცევადია.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'გაუქმდეს პროექტი?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "წაიშალოს დოკუმენტი '<strong>{{releaseTitle}}</strong>' გამოშვებიდან?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'პროექტის გაუქმება',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'გამოშვებიდან წაშლა',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} ვალიდაციის შეცდომა',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} ვალიდაციის შეცდომა',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'დიახ, გამოშვების დუბლირება',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'ეს გაადუბლირებს გამოშვებას და 1 დოკუმენტის ვერსიას.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'ეს გაადუბლირებს გამოშვებას და {{count}} დოკუმენტის ვერსიას.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header':
    'დარწმუნებული ხართ, რომ გსურთ ამ გამოშვების დუბლირება?',

  /** Title text displayed for technical error details */
  'error-details-title': 'შეცდომის დეტალები',

  /** Title text when error during release update */
  'failed-edit-title': 'ცვლილებების შენახვა ვერ მოხერხდა',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'გამოქვეყნება ვერ მოხერხდა',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'დაგეგმვა ვერ მოხერხდა',

  /** Filter tab label for all documents */
  'filter-tab.all': 'ყველა',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'შეცდომები',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'დაარქივებულია',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'შექმნილია',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'რედაქტირებულია',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'გამოქვეყნებულია',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'არქივიდან აღდგენილია',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Release იტვირთება',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'დოკუმენტები იტვირთება',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'ვერ ვტვირთავთ ამ release-ის დოკუმენტებს. გთხოვთ, სცადოთ მოგვიანებით.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'რაღაც შეცდომა მოხდა',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'გამოქვეყნებისას',
  /** Label for the release menu */
  'menu.label': 'Release-ის მენიუ',
  /** Tooltip for the release menu */
  'menu.tooltip': 'მოქმედებები',

  /** Text for when no archived releases are found */
  'no-archived-release': 'არქივირებული release არ არის',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'შეჩერებული დაგეგმილი პროექტები არ არის',

  /** Text for when no releases are found */
  'no-releases': 'Release არ არის',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'დაგეგმილი პროექტები არ არის',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'დოკუმენტაცია',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'კალენდრის ნახვა',
  /** Description for the release tool */
  'overview.description':
    'Release-ები არის დოკუმენტის ცვლილებების კოლექციები, რომლებიც შეიძლება ერთად მართოთ, დაგეგმოთ და გააუქმოთ.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Release-ების ძიება',
  /** Title for the release tool */
  'overview.title': 'Release-ები',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'ამ release-ს გასულია გამოქვეყნების დაგეგმილი თარიღი',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'ამ პროექტს გასულია გამოქვეყნების დაგეგმილი თარიღი',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'თქვენი როლი ამჟამად ზღუდავს იმას, რასაც ამ release-ში ხედავთ. შეიძლება ვერ გამოაქვეყნოთ და ვერ დაგეგმოთ ეს release.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'შეზღუდული წვდომა',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'თქვენ არ გაქვთ ამ release-ის არქივირების უფლება',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'თქვენ არ გაქვთ ამ release-ის წაშლის უფლება',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'თქვენ არ გაქვთ ამ ვერსიის გაუქმების უფლება',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'თქვენ არ გაქვთ ამ გამოშვების დუბლიკატის შექმნის უფლება',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'თქვენ არ გაქვთ ამ გამოშვების არქივიდან აღდგენის უფლება',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish': 'თქვენ არ გაქვთ ამ დოკუმენტის გამოქვეყნების გაუქმების უფლება',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} ახლა ამ დოკუმენტს ასწორებს „{{releaseTitle}}" გამოშვებაში',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'გამოსაქვეყნებელი დოკუმენტები არ არის',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "'<strong>{{title}}</strong>' გამოშვება და მისი დოკუმენტი გამოქვეყნდება.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "'<strong>{{title}}</strong>' გამოშვება და მისი {{releaseDocumentsLength}} დოკუმენტი გამოქვეყნდება.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'დარწმუნებული ხართ, რომ გსურთ გამოშვებისა და ყველა დოკუმენტის ვერსიის გამოქვეყნება?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'ზოგიერთ დოკუმენტს აქვს ვალიდაციის შეცდომები',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'დოკუმენტების ვალიდაცია მიმდინარეობს...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'თქვენ არ გაქვთ გამოქვეყნების უფლება',

  /** Title for information card on a published release */
  'publish-info.title': 'ეს გამოშვება წარმატებით გამოქვეყნდა.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'უსათაურო',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'ეს დააბრუნებს {{releaseDocumentsLength}} დოკუმენტის ვერსიას.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'ეს დააბრუნებს {{releaseDocumentsLength}} დოკუმენტის ვერსიას.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'გამოშვების დაუყოვნებლივ დაბრუნება',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title':
    'დარწმუნებული ხართ, რომ გსურთ „{{title}}" გამოშვების დაბრუნება?',
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'გამოქვეყნების შემდეგ ამ გამოშვების დოკუმენტებში ცვლილებები განხორციელდა. დაბრუნება გადაწერს ამ ცვლილებებს.',

  /** Description of a reverted release */
  'revert-release.description': '„{{title}}"-ში დოკუმენტის ვერსიების ცვლილებების დაბრუნება.',
  /** Title of a reverted release */
  'revert-release.title': '„{{title}}" ბრუნდება',

  /** Description for the review changes button in release tool */
  'review.description': 'ცვლილებების გადასახედად ამ გამოშვებაში დოკუმენტები დაამატეთ',
  /** Text for when a document is edited */
  'review.edited': 'დარედაქტირდა <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'დასაგეგმი დოკუმენტები არ არის',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'ეს გამოშვება უკვე დაგეგმილია',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'ზოგიერთ დოკუმენტს აქვს ვალიდაციის შეცდომები',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'დოკუმენტების ვალიდაცია მიმდინარეობს...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'თქვენ არ გაქვთ დაგეგმვის უფლება',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'დარწმუნებული ხართ, რომ გსურთ გამოშვების დაგეგმვის გაუქმება?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'დიახ, დავგეგმოთ',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "'<strong>{{title}}</strong>' გამოშვება და მისი დოკუმენტი გამოქვეყნდება არჩეულ თარიღზე.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    '<strong>{{title}}</strong> გამოშვება და მისი {{count}} დოკუმენტის ვერსია დაიგეგმება.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'გამოშვების დაგეგმვა',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'დაგეგმეთ მომავალი დრო და თარიღი.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'დაგეგმვა',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'გამოქვეყნების გაუქმების დაგეგმვა',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description':
    'აირჩიეთ, როდის უნდა გაუქმდეს ამ დოკუმენტის გამოქვეყნება.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'პროექტის დაგეგმვა გამოქვეყნების გაუქმებისთვის',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'დოკუმენტების ძიება',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'ყველა დოკუმენტი შემოწმდა, აღმოჩენილია პრობლემები',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'ყველა დოკუმენტი შემოწმდა, პრობლემები არ არის',
  /** Text for when the release was created */
  'summary.created': 'შექმნილია <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} დოკუმენტი',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} დოკუმენტი',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'გამოშვების გამოქვეყნების ან დაგეგმვისთვის, გთხოვთ გადაჭრათ დოკუმენტებში აღმოჩენილი პრობლემები',
  /** Text for when the release has no documents */
  'summary.no-documents': 'დოკუმენტები არ არის',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'ეს დაგეგმილი პროექტი არ შეიცავს დოკუმენტს. შესაძლოა იგი წაშლილი იყოს.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'ამ გამოშვებაში დოკუმენტი არ არის',
  /** Text for when the release has not published */
  'summary.not-published': 'არ არის გამოქვეყნებული',
  /** Text for when the release was published */
  'summary.published': 'გამოქვეყნებულია <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} დოკუმენტიდან {{totalCount}} დადასტურებულია',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'დოკუმენტების დადასტურება: {{validatedCount}} / {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'დამატება',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'შეცვლა',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'გამოქვეყნების გაუქმება',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'მოქმედება',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'დაარქივებულია',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'წვლილის შემტანები',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'შექმნილია',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'დოკუმენტი',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'დოკუმენტები',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'რედაქტირებულია',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'განკუთვნილია',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'გამოქვეყნებულია',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'გამოქვეყნებულია',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'გამოქვეყნების თარიღი',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'დაგეგმილია',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'დრო',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'ტიპი',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'როდის',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'სავარაუდო',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'დაგეგმილია',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "ვერ მოხერხდა '<strong>{{title}}</strong>' დაარქივება: {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'ვერ მოხერხდა დრაფტების დაგეგმვა: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'Release ID კოპირებულია ბუფერში',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Release-ის ბმული კოპირებულია ბუფერში',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Release-ის სათაური კოპირებულია ბუფერში',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'დოკუმენტის release-ში დამატება ვერ მოხერხდა: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': '„<strong>{{title}}</strong>"-ის წაშლა ვერ მოხერხდა: {{error}}',
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': '„<strong>{{title}}</strong>" release წარმატებით წაიშალა',
  /** Description for toast when release duplication failed */
  'toast.duplicate.error':
    '„<strong>{{title}}</strong>"-ის დუბლიკატის შექმნა ვერ მოხერხდა: {{error}}',
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': '„<strong>{{title}}</strong>" release-ის დუბლიკატი შეიქმნა. <Link/>',
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'დუბლიკატი release-ის ნახვა',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': '„{{title}}" release წარმატებით დაბრუნდა',
  /** Text for toast when release failed to publish */
  'toast.publish.error': '„<strong>{{title}}</strong>"-ის გამოქვეყნება ვერ მოხერხდა: {{error}}',
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success': '„{{title}}"-ის დასაბრუნებელი release წარმატებით შეიქმნა. <Link/>',
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'დაბრუნების release-ის ნახვა',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Release-ის დაბრუნება ვერ მოხერხდა: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': '„<strong>{{title}}</strong>"-ის დაგეგმვა ვერ მოხერხდა: {{error}}',
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': '„<strong>{{title}}</strong>" release დაიგეგმა.',
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error':
    '„<strong>{{title}}</strong>"-ის არქივიდან გამოტანა ვერ მოხერხდა: {{error}}',
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error':
    '„<strong>{{title}}</strong>"-ის დაგეგმვის გაუქმება ვერ მოხერხდა: {{error}}',

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'Release დაგეგმილია, ტიპის შესაცვლელად გააუქმეთ დაგეგმვა',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'გაუქმება',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'დიახ, გამოქვეყნების გაუქმება release-ისას',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'ამ დოკუმენტის ვერსიაში განხორციელებული ყველა ცვლილება დაიკარგება.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'ეს გააუქმებს დოკუმენტის გამოქვეყნებას <Label>{{title}}</Label> release-ის ფარგლებში და შექმნის მონახაზს, თუ release-ის დროს მონახაზი არ არსებობს.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'დარწმუნებული ხართ, რომ გსურთ ამ დოკუმენტის გამოქვეყნების გაუქმება release-ისას?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'ეს დოკუმენტი უკვე გამოქვეყნებული არ არის.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'ამ დოკუმენტის გამოქვეყნებული ვერსია არ არსებობს.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'გამოშვება აღარ გამოქვეყნდება დაგეგმილ თარიღში',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'დარწმუნებული ხართ, რომ გსურთ გამოშვების განრიგიდან ამოღება?',
})
