import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'დაკოპირებულია',
  /** Label for deleting a query */
  'action.delete': 'წაშლა',
  /** Label for editing a query's title */
  'action.edit-title': 'სათაურის რედაქტირება',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'შეჩერება',
  /** Label for setting up a listener */
  'action.listen-execute': 'მოსმენა',
  /** Label for query loading table */
  'action.load-queries': 'მოთხოვნების ჩატვირთვა',
  /** Label for loading a query */
  'action.load-query': 'მოთხოვნის ჩატვირთვა',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'გაუქმება',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'მოძებნა',
  /** Label for saving a query */
  'action.save-personal-copy': 'პირადი ასლის შენახვა',
  /** Label for saving a personal query */
  'action.save-personal-query': 'პირადად შენახვა',
  /** Label for saving a query */
  'action.save-query': 'მოთხოვნის შენახვა',
  /** Label for saving a shared query */
  'action.save-shared-query': 'საზიაროდ შენახვა',
  /** Label for unsharing a query */
  'action.unshare': 'გაზიარების გაუქმება',
  /** Label for updating a query */
  'action.update': 'განახლება',

  /** Label for actions user can take */
  'label.actions': 'ქმედებები',
  /** Label for all saved queries */
  'label.all': 'ყველა',
  /** Label for saved queries that have been edited */
  'label.edited': 'რედაქტირებული',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'ახალი',
  /** Label for query type "personal" */
  'label.personal': 'პირადი',
  /** Label for savedAt date */
  'label.saved-at': 'შენახულია',
  /** Saved queries */
  'label.saved-queries': 'შენახული მოთხოვნები',
  /** Search queries */
  'label.search-queries': 'მოთხოვნების ძიება',
  /** Share query */
  'label.share': 'გაზიარება',
  /** Label for query type "shared" */
  'label.shared': 'გაზიარებული',
  /** Label for saved query type "team" */
  'label.team': 'გუნდი',
  /** Label for untitled query fallback */
  'label.untitled-query': 'უსათაურო',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'პარამეტრები არ არის მართებული JSON',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'პარამეტრები',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'სვეტი',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'ხაზი',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'ეს API-ის ვერსია არ უჭერს მხარს კომპლექსურ პერსპექტივებს. გამოიყენეთ {{apiVersion}} ან უფრო ახალი ვერსია.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'ეს API-ის ვერსია არ უჭერს მხარს კონტენტის ვარიანტებს. გამოიყენეთ ექსპერიმენტული API-ის ვერსია ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'მოძებნა',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'მოძებნის URL',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'დასრულების დრო',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'შესრულების დრო',
  /** Label for "Result" explorer/view */
  'result.label': 'შედეგი',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'შედეგი ვერ კოდირდება CSV ფორმატში',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'შეინახე შედეგი როგორც <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'არ არის მიმართულება',

  /** Query already saved error label */
  'save-query.already-saved': 'მოთხოვნა უკვე შენახულია',
  /** Save error label */
  'save-query.error': 'მოთხოვნის შენახვის შეცდომა',
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'პირადი ასლი შენახულია',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'გაზიარებული მოთხოვნები ინახება დოკუმენტებად თქვენს dataset-ში და ითვლება თქვენი დოკუმენტების კვოტაში.',
  /** Save shared query success label */
  'save-query.shared-success': 'გაზიარებული მოთხოვნა შენახულია',
  /** Save success label */
  'save-query.success': 'მოთხოვნა შენახულია',
  /** Save unshared query success label */
  'save-query.unshared-success': 'მოთხოვნა გადაიტანა პირადში',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'API ვერსია',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'როდესაც არჩეულია ვარიანტი, API-ის ვერსია უნდა იყოს vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'საკუთარი API ვერსია',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'არასწორი API ვერსია',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'სხვა',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'პერსპექტივა "<code>previewDrafts</code>" გადარქმევა "<code>drafts</code>"-ად და ახლა გაუქმებულია. ეს ცვლილება ძალაშია ყველა ვერსიაში, სადაც არის პერსპექტივის მხარდაჭერა (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'დოკუმენტაციის წაკითხვა',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'პერსპექტივა არ არის (API სტანდარტი)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'Perspectives გაძლევთ შესაძლებლობას გაუშვათ თქვენი მოძებნა სხვადასხვა "ხედვებიდან" თქვენი dataset-ის კონტენტზე',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'სტანდარტული პერსპექტივა შეიცვლება "<code>raw</code>"-დან "<code>published</code>"-ზე მომავალ API ვერსიაში. გთხოვთ, დახედეთ დოკუმენტაციას უფრო დეტალურად.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'მიმაგრებული გამოშვება',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'დაგეგმილი ჩანაწერები',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'მოთხოვნაზე იყენებს ერთ AI კრედიტს',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': 'ამ თვეში დარჩენილია {{balance}} AI კრედიტი {{quota}}-დან.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    'ამ თვეში გამოყენებულია {{used}} AI კრედიტი, რაც {{deficit}}-ით მეტია ჩართულ {{quota}}-ზე.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'თქვენმა ორგანიზაციამ ამ თვეში უკვე გამოიყენა {{used}} თავისი {{quota}} AI კრედიტიდან, ამიტომ Sanity Agent Actions შეჩერებულია შემდეგ თვემდე ან ხარჯვის ლიმიტის გაზრდამდე.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'თქვენმა ორგანიზაციამ მიაღწია AI კრედიტების ხარჯვის ლიმიტს, ამიტომ Sanity Agent Actions შეჩერებულია შემდეგ თვემდე ან ლიმიტის გაზრდამდე.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'როგორ მუშაობს AI კრედიტები',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'AI კრედიტების მართვა',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'AI კრედიტები ამოიწურა',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'AI გამოყენება',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': 'ამ თვეში გამოყენებულია {{used}} AI კრედიტი.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'დაუსრულებელი API ვერსია',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'მოთხოვნები სრულდება API ვერსია {{version}}-ზე. აირჩიეთ ცვლილებისთვის პარამეტრებში.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'მოთხოვნები სრულდება API CDN-ზე API ვერსიით {{version}}. აირჩიეთ ცვლილებისთვის პარამეტრებში.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'მოთხოვნები სრულდება API-ზე API ვერსიით {{version}}, არა API CDN-ზე: იგი არ ემსახურება {{perspective}} პერსპექტივას. აირჩიეთ ცვლილებისთვის პარამეტრებში.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'პარამეტრებში მითითებული API ვერსია დაუსრულებელია, ამიტომ ვერაფერი ჩაიტვირთება, სანამ ის არ იქნება სრულყოფილი.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'მოთხოვნები სრულდება API ვერსია {{version}}-ზე, რომელიც საჭიროა არჩეული ვარიანტისთვის.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'შემდეგ',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'მანამდე',
  /** What the Delta panel does */
  'vision.delta.description':
    'უშვებს მოთხოვნას დელტა რეჟიმში, ისევე როგორც GROQ-ზე მომუშავე ვებჰუკები, მსმენელები და Sanity Functions: before() და after() არის დოკუმენტი ცვლილებამდე და ცვლილების შემდეგ, @ არის დოკუმენტი ცვლილების შემდეგ, ხოლო delta::changedAny() ადარებს მათ. ის მუშაობს ბრაუზერში groq-js-ის მეშვეობით. ცარიელი მხარე ნიშნავს, რომ დოკუმენტი არ არსებობს: ცვლილება ქმნის ან შლის მას.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'დოკუმენტის ID',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'ჩატვირთეთ დოკუმენტის ისტორია, ან ჩაწერეთ დოკუმენტები ველებში „მანამდე“ და „შემდეგ“.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'მოთხოვნის დელტა რეჟიმში გაშვება ვერ მოხერხდა: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': '„შემდეგ“ არ არის ვალიდური JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before არ არის სწორი JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'ისტორიის ჩატვირთვა',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'ისტორიის ჩატვირთვა ვერ მოხერხდა: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'ემთხვევა: ამ ფილტრის მქონე webhook ან ფუნქცია გაეშვება ამ ცვლილებისთვის.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'არ ემთხვევა: ამ ფილტრის მქონე webhook ან ფუნქცია არ გაეშვება ამ ცვლილებისთვის.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request': 'შეასწორეთ მოთხოვნა და მისი პარამეტრები, რათა გაუშვათ delta რეჟიმში.',
  /** Heading of the delta result */
  'vision.delta.result': 'შედეგი',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'არაფერი: ცვლილება შლის დოკუმენტს',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'არაფერი: ცვლილება ქმნის დოკუმენტს',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'პანელის დახურვა',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'მოთხოვნის გეგმა არის ის, თუ როგორ ასრულებს Content Lake მოთხოვნას: რას კითხულობს, ფილტრავს და ალაგებს კითხვისას და რა რჩება შემდეგი ეტაპებისთვის. „ამიხსენი ეს“ ფუნქცია სთხოვს Sanity Agent Actions-ს აღწეროს მოთხოვნა და მისი გეგმა მარტივი სიტყვებით, რაც იყენებს ერთ AI კრედიტს.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'დაწერეთ მოთხოვნა მისი ასახსნელად.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'ამიხსენი ეს',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'მოთხოვნის ახსნა ვერ მოხერხდა: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'დათვლილია ინდექსში, დოკუმენტების წაკითხვის გარეშე.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'ქვემოთხოვნა ერთხელ სრულდება ყველა დოკუმენტისთვის, ერთი ერთიანი მოთხოვნით, და არა თითო დოკუმენტზე ცალ-ცალკე.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'ფილტრის ნაწილი სრულდება მეხსიერებაში, წაკითხვის შემდეგ: ინდექსის მიერ გატარებული ყველა დოკუმენტი ჯერ იკითხება, რაც დიდ მონაცემთა ბაზებზე ანელებს პროცესს. შეერთებები (->) და ფუნქციები ფილტრში ვერ იყენებენ ინდექსს.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit': 'ინდექსი ალაგებს და ზღუდავს დოკუმენტებს წაკითხვისას.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'ნაწილი (slice) აღებულია მეხსიერებაში წაკითხვის შემდეგ და არა როგორც ზღვარი წაკითხვისას.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'დალაგება ხდება მეხსიერებაში, ყველა დამთხვევის წაკითხვის შემდეგ. დაალაგეთ ატრიბუტებით, რომლებიც ინდექსს შეუძლია დაალაგოს.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'მაღალი წარმადობის GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'რაც გამოირჩევა',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'მოთხოვნის გეგმის ჩვენება',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'მოთხოვნის გეგმის მიღება ვერ მოხერხდა: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'მოთხოვნის გეგმა',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'ფრაგმენტი კლიპბორდში დაკოპირდა',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'ფრაგმენტის კოპირება',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description':
    'გაუშვით ეს მოთხოვნა სტუდიის გარეთ ერთ-ერთი ამ ფრაგმენტის გამოყენებით.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'მოთხოვნა და პარამეტრები შეადგენს {{size}} სიმბოლოს საძიებო პარამეტრების სახით; {{limit}}-დან დაწყებული, @sanity/client აგზავნის მათ JSON სხეულის სახით URL-ის ნაცვლად, ამიტომ ფრაგმენტიც იგივეს აკეთებს.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'მოთხოვნის ექსპორტი',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'პირად მონაცემთა ბაზებს სჭირდება API ტოკენი. საჯარო მონაცემთა ბაზებისთვის Authorization სათაურის გამოტოვება შეიძლება.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'კოდი კლიპბორდში დაკოპირდა',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'კოდის კოპირება',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'ჯერ გაუშვით მოთხოვნა, რათა არსებობდეს შედეგი, საიდანაც ტიპები გამოიყვანება.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'სქემის შეფასება ვერ მოხერხდა: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'გამოყვანილია მოძიებული შედეგიდან, ვინაიდან მოთხოვნის შეფასება სამუშაო სივრცის სქემასთან მიმართებით ვერ მოხერხდა.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'გამოყვანილია სამუშაო სივრცის სქემიდან, ისევე როგორც ეს sanity typegen-ს აკეთებს.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'ნაჩვენები შედეგი მოძიებულია სხვა მოთხოვნისთვის ან პარამეტრებისთვის. ჯერ გაუშვით მიმდინარე მოთხოვნა, რათა არსებობდეს შედეგი, საიდანაც ტიპები გამოიყვანება.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'TypeScript-ის ექსპორტი',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Zod-ის ექსპორტი',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'დამატება მოთხოვნაში',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'ამ მოთხოვნაში',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'გამოაცხადეთ ის',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'საჭიროებს API ვერსიას {{version}} ან უფრო ახალს',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'ამ მოთხოვნაში',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'თქვენი ბიბლიოთეკიდან',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'საკუთარი ფუნქცია, გამოცხადებულია სტრიქონზე {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'მუშაობს მხოლოდ delta რეჟიმში, სადაც webhook-ები და Sanity Functions უშვებენ თავიანთ ფილტრებს',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'ფუნქციად გამოყოფა',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'თქვენს ფუნქციების ბიბლიოთეკაში, არ არის დეკლარირებული ამ მოთხოვნაში',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'GROQ ფუნქციების საცნობარო მასალა',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'ინახება ამ ბრაუზერში პროექტის ყველა მონაცემთაბაზისთვის. დასრულებები გთავაზობთ ამ ფუნქციებს, ხოლო lint გთავაზობთ იმ ფუნქციის დეკლარირებას, რომელსაც მოთხოვნა იძახებს.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'შეინახეთ ფუნქცია, რომელსაც მოთხოვნა აცხადებს, რათა გამოიყენოთ იგი სხვა მოთხოვნებში.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'ბიბლიოთეკა',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'დეკლარირეთ მორგებული ფუნქციები მოთხოვნის თავში, ან დააყენეთ კურსორი პროექციაში, მაგალითად author->{name}, და დააჭირეთ ამოღების ღილაკს რედაქტორის ზემოთ ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'ამ მოთხოვნაში',
  /** Removes a function from the library */
  'vision.functions.remove': 'ბიბლიოთეკიდან ამოშლა',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'მოთხოვნაში ჩანაცვლება',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': '{{name}}-ის ჩვენება რედაქტორში',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'ბიბლიოთეკაში შენახვა',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'შენახულია',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'ბიბლიოთეკის განახლება',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'მოთხოვნის გენერირება',
  /** Closes the generate query bar */
  'vision.generate.close': 'დახურვა',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'Sanity Agent Actions წერს GROQ-ს თქვენი აღწერილობისა და დოკუმენტის ტიპების მიხედვით, ხოლო Content Lake ამოწმებს თითოეულ მცდელობას; ყოველი მცდელობა მოიხმარს ერთ AI კრედიტს. ეს ანაცვლებს ამ ჩანართის მოთხოვნას და უშვებს მას; რედაქტორში გაუქმება წინა მოთხოვნას დააბრუნებს.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'მოთხოვნის გენერირება ვერ მოხერხდა',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'რა უნდა მოიძიოს მოთხოვნამ?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'ბოლო მცდელობის გახსნა',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'ბოლო 10 ავტორი, დალაგებული გვარის მიხედვით, შემდეგ სახელის მიხედვით',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'მოთხოვნის წერა…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'მოთხოვნის გასწორება (მცდელობა {{attempt}}, {{max}}-დან)…',
  /** Button generating the query */
  'vision.generate.submit': 'გენერირება',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'CDN ქეშის დამთხვევა',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'შეცვლილია',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'ცვლილებები',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'ცვლილებების ჩვენება ვერ მოხერხდა.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'სცადეთ ხელახლა',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'შედარებულია {{time}}-ზე მოთხოვნილ მონაცემებთან',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'პარამეტრები',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'მოთხოვნა',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'შეიცვალა მხოლოდ ფორმატირება',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'შედეგი',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'მოთხოვნის URL',
  /** Empty state of the history panel */
  'vision.history.empty': 'ჯერ არაფერია მოთხოვნილი',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'ვერ შესრულდა',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'დამალვა',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'დამალულია {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'შეიცვალა მხოლოდ დამალული ველები',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'გენერირებული მოთხოვნა',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'გახსნილი ბმული',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'რეალურ დროში განახლება',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'რეალურ დროში კავშირი გადაიტვირთა',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'დაიწყო რეალურ დროში მოთხოვნა',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'მოთხოვნა ჩაიტვირთა',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'მოთხოვნის ღილაკი',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'გადასხვაფერებები გამოყენებულია',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'პარამეტრები შეიცვალა',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'ჩასმული URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'ავტომატური ხელახალი მოთხოვნა განახლდა',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'კლავიატურის მალსახმობი',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'იგივე შედეგი',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'აჩვენე ისინი',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'ნაჩვენებია {{fields}}, ნაგულისხმევად დამალული',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'შედარებისთვის ძალიან დიდია',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'ცვლილებები არ არის',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'ლინტის მიგნებები არ არის. პრობლემები, რომლებსაც GROQ ლინტერი აღმოაჩენს მოთხოვნაში, აქ ჩამოითვლება თქვენი ბეჭდვისას; აირჩიეთ ერთ-ერთი, რომ ის რედაქტორში მონიშნოთ.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'ხაზი {{line}}, სვეტი {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'შეცდომა',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'მინიშნება',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'ინფორმაცია',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'გაფრთხილება',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'გამოიყენე {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'ცოცხალი',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'ცოცხალი მოთხოვნა',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'მოითხოვე, შემდეგ ხელახლა მოითხოვე, როდესაც შედეგში არსებული დოკუმენტები შეიცვლება',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'შეაჩერე ხელახალი მოთხოვნა, როდესაც შედეგში არსებული დოკუმენტები იცვლება. მოთხოვნა კვლავაც გამოითხოვება მოთხოვნისას იმ შედეგებისთვის, რომლებსაც არც ერთი დოკუმენტის ცვლილება არ ეხება, როგორიცაა now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'ცოცხალი განახლებები გათიშულია: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'შეაჩერე ცოცხალი რეჟიმი',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'დაამატე მუტაცია',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'შექმენი დოკუმენტი',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'წაშალე დოკუმენტი',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'წაშალე შედეგში არსებული დოკუმენტები',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'დააპატჩე დოკუმენტი',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'დააპატჩეთ დოკუმენტები შედეგში',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'გამოყენება {{dataset}}-ზე',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'მუტაციები ვერ გამოყენებულ იქნა',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'გამოყენება აგზავნის იმას, რაც საცდელმა გაშვებამ აჩვენა: ჯერ გაუშვით ერთი.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'დაამატეთ _key მასივის ელემენტებს, რომლებსაც არ აქვთ',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'სტუდიას სჭირდება ეს ყველა მასივის ელემენტზე მის რედაქტირებისთვის.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'ცვლილებები',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'ცვლილებების ჩვენება ვერ მოხერხდა.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'ხელახლა ცდა',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'დაწერეთ მუტაციები ისე, როგორც Mutations API-ს სჭირდება, სიის სახით: create, createOrReplace, createIfNotExists, delete და patch, ID-ით ან GROQ მოთხოვნით. საცდელი გაშვება აჩვენებს რას გააკეთებდნენ ისინი თითოეულ დოკუმენტზე ყოველგვარი ცვლილების გარეშე; შემდეგ გამოყენება ჩაწერს მათ მონაცემთა ბაზაში ერთ ტრანზაქციაში, თქვენი ანგარიშით.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'მუტაცია {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'მუტაციების გენერირება',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'Sanity Agent Actions წერს მუტაციებს თქვენი აღწერილობის, შედეგში არსებული დოკუმენტებისა და მათი ტიპების მიხედვით, ხოლო საცდელი გაშვება ამოწმებს თითოეულ მცდელობას; ყოველი მცდელობა იყენებს ერთ AI კრედიტს. ისინი ანაცვლებენ აქ არსებულ მუტაციებს, სადაც გაუქმება მათ უკან აბრუნებს; არაფერი ჩაიწერება, სანამ არ გამოიყენებთ.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'მუტაციების გენერირება ვერ მოხერხდა',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'რა უნდა გააკეთონ მუტაციებმა?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'შეცვალეთ შედეგში არსებული დოკუმენტების სათაური foobar-ად',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'მუტაციების წერა…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'მუტაციების გასწორება (მცდელობა {{attempt}}, სულ {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'ცვლილებები გამოტოვებს {{fields}}-ს, ისევე როგორც History.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'მუტაციები არ წარმოადგენს ვალიდურ JSON-ს: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'მუტაციას {{index}} სჭირდება ზუსტად ერთი შემდეგთაგანი: create, createOrReplace, createIfNotExists, delete ან patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'მუტაციები',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'მუტაციები არცერთ დოკუმენტს არ ეხება.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'დაწერეთ მუტაციების სია, ერთი მუტაცია, ან მოთხოვნის სხეული მუტაციების სიით.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'შექმნა',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'წაშლა',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'ცვლილება არ არის',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'განახლება',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'საცდელი გაშვება',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'საცდელი გაშვება ვერ შესრულდა',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'საცდელი გაშვება',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'მუტაციები, მონაცემთა ბაზა ან პარამეტრები შეიცვალა ამ საცდელი გაშვების შემდეგ. გაუშვით ხელახლა, რათა გამოიყენოთ ისინი.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'შეცვლილია: {{changed}} · უცვლელი: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'ქეში',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'მოხვედრა',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'CDN-მა უპასუხა თავისი ქეშირებული პასუხით, თქვენთან ახლომდებარე ადგილიდან; მოთხოვნა API-მდე არ მისულა.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'ასლი არ არსებობდა, რამდენადაც ამ სესიას შეუძლია დაადასტუროს',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'არცერთი, API ყოველ მოთხოვნას პასუხობს ახალი კონტენტით',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'გაუშვით მოთხოვნა, რომ ნახოთ რომელმა საბოლოო წერტილმა უპასუხა მას, ქეშიდან იყო თუ არა, და სად შესრულდა.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'უპასუხა',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'მეთოდი',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, მოთხოვნითა და პარამეტრებით URL-ში',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, მოთხოვნითა და პარამეტრებით JSON სხეულის სახით',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'მოთხოვნა და პარამეტრები შეადგენს {{size}} სიმბოლოს ძიების პარამეტრების სახით; {{limit}}-დან დაწყებული, @sanity/client აგზავნის მათ JSON სხეულის სახით, რადგან API ზღუდავს URL-ის სიგრძეს. პარამეტრები რჩება URL-ში.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'მოთხოვნა შესრულდა',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'არ არის მოხსენებული',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'დრო',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}მწმ მთლიანი მგზავრობა, {{server}}მწმ სერვერზე',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'Trace ID',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'ჩართეთ „გამოიყენეთ API CDN“ პარამეტრებში, რათა მოთხოვნები გაიგზავნოს CDN-ის მეშვეობით.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'თქვენ',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'მიჰყვება სამუშაო სივრცეს',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'დააპინეთ dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'დაპინულია; სამუშაო სივრცემ შეიძლება გამოიყენოს სხვა dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'გამოიყენეთ სამუშაო სივრცის dataset',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'შეიცავდეს content source map-ს',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'პასუხს ამატებს resultSourceMap-ს, რომელიც ჩანს Content Source Map ჩანართში.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'გლობალური ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'გამოიყენეთ API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'ეს studio გაგიცნობთ ქუქი-ფაილით, რომელსაც API CDN ვერასდროს იღებს: ის პასუხობს ისე, როგორც ანონიმურ სტუმარს — იმით, რასაც საჯარო dataset აჩვენებს.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'API CDN არ ემსახურება draft-ებს ან release-ებს, ამიტომ მოთხოვნები {{perspective}} perspective-ით API-ში იგზავნება. გამოქვეყნებული (published) ან raw perspective-ით ისინი იყენებენ CDN-ს.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'მოთხოვნები იგზავნება API-ში, არა CDN-ში',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'აგზავნის მოთხოვნას API CDN-ში, როგორც useCdn: true @sanity/client-ში, published და raw perspective-ებით: draft-ები და release-ები ყოველთვის API-ში იგზავნება. პასუხები ქეშირდება ერთ წუთამდე; ქსელის პანელი აჩვენებს, როცა პასუხი ქეშიდან მოვიდა.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'გამოიყენეთ published perspective',
  /** Label of the variant field */
  'vision.options.variant-label': 'ვარიანტი',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'გლობალური ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'გლობალური (არაფერია არჩეული)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'არცერთი',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'პანელის ჩაკეცვა',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'პანელის გაშლა',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'ახსნა',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'ფუნქციები',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'ისტორია',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'ლინტი',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'მუტაცია',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'ქსელი',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'პარამეტრები',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'პასუხი',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'შინაარსის წყაროს რუკა',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'ელემენტის დამატება',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder':
    'ნებისმიერი JSON მნიშვნელობა; სხვა ტექსტი იგზავნება როგორც სტრიქონი',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'მოთხოვნა არ იყენებს პარამეტრებს. თითოეული $name მასში მიიღებს აქ ველს.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'პარამეტრები არ არის სწორი JSON. შეასწორეთ ისინი JSON ხედში, რომ შეძლოთ აქ რედაქტირება.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'არ არის true ან false; იგზავნება როგორც {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'არ არის დოკუმენტის ტიპი ამ სამუშაო სივრცეში; მაინც იგზავნება',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'არ არის მთელი რიცხვი, რაც საჭიროა ნაწილებისთვის',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'არ არის სია; იგზავნება როგორც {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'არ არის რიცხვი; იგზავნება როგორც ტექსტი',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'არ არის ცნობილ მნიშვნელობათაგანი; მაინც იგზავნება',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'არ არის ტექსტი; იგზავნება როგორც {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, ელემენტი {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'ელემენტი',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing':
    'არ არის დაყენებული: მოთხოვნა ვერ შესრულდება, სანამ მას არ ექნება მნიშვნელობა',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'ტიპები მოდის მხოლოდ მოთხოვნიდან: სამუშაო სივრცის სქემის წაკითხვა ვერ მოხერხდა.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'არ არის დაყენებული',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'ახლა',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'წაშლა',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'წაშალეთ ელემენტი',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'მოთხოვნა ვერ დამუშავდა, ამიტომ მისი პარამეტრები ჩამოთვლილია ტიპების გარეშე.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'ნებისმიერი JSON მნიშვნელობა',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'true ან false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'თარიღი და დრო (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'დოკუმენტის ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'დოკუმენტის ტიპი',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'მთელი რიცხვი',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'სია, თითოეული {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'რიცხვი',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'ტექსტი',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'მოთხოვნაში არ გამოიყენება',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'გამოყენებულია',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'მორგებულია შიგთავსზე, {{height}} პიქსელი',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'პარამეტრების ზომის შეცვლა: გადაათრიეთ ან გამოიყენეთ ისრის კლავიშები; ორჯერ დააწკაპუნეთ ან დააჭირეთ Enter-ს შიგთავსზე ხელახლა მოსარგებად',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'ფორმა',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'პარამეტრების რედაქტირება როგორც',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'მოთხოვნა ჩაიტვირთა ჩასმული URL-დან',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'მოთხოვნა ჩაიტვირთა ჩასმული cURL ბრძანებიდან',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'ჩასმულმა URL-მა გამოიყენა "{{variant}}" ვარიანტი; აირჩიეთ ის ნავიგაციის პანელში, რომ გაუშვათ მოთხოვნა მასთან ერთად.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'ჩასმულ URL-ში მითითებული დატასეტი "{{dataset}}" აქ მიუწვდომელია, ინარჩუნებთ მიმდინარეს.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'ჩასმულ URL-ში მითითებული პერსპექტივა აქ არ არის მხარდაჭერილი, ინარჩუნებთ მიმდინარეს.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'ჩასმულმა URL-მა გამოიყენა "{{variant}}" ვარიანტი; ამ სამუშაო სივრცეში ვარიანტები გამორთულია, ამიტომ მოთხოვნა სრულდება მის გარეშე.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'მოთხოვნის მოქმედებები',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'ავტომატური ხელახალი მოთხოვნისთვის საჭიროა API ვერსია v2021-03-25 ან უფრო გვიანდელი.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'მოთხოვნა დაკოპირებულია ბუფერში',
  /** Menu item copying the query text */
  'vision.query.copy': 'მოთხოვნის კოპირება',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'მოთხოვნის ექსპორტი…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'მოთხოვნის დალამაზება',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'მოთხოვნის დალამაზება ვერ მოხერხდა',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'მოთხოვნის შენახვა',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'შეჩერება',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'მოთხოვნის შეჩერება',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'თქვენ იყენებთ Vision ხელსაწყოს განახლებულ ვერსიას. ძველზე დაბრუნება შეინარჩუნებს თქვენს ჩანართებსა და პარამეტრებს ამ ბრაუზერში შემდეგი ცდისთვის.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'განახლებული Vision (ბეტა)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'კლასიკურ Vision-ზე გადასვლა',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'სცადეთ ახლავე',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'მოთხოვნის ჩანართები, ცოცხალი ხელახალი მოთხოვნა, პასუხის დეტალები და ექსპორტი. შეგიძლიათ ნებისმიერ დროს დაბრუნდეთ.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'ახლა არა',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'სცადეთ განახლებული Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'სცადეთ განახლებული ვერსია',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'გადადით განახლებულ Vision-ზე, ბეტა ვერსიაში. ნებისმიერ დროს შეგიძლიათ დაბრუნდეთ მისი გვერდითი პანელიდან.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'ჯერ არაფერია მოთხოვნილი',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'მონაცემების ზომა',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'სინქრონიზაციის ტეგები',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'პასუხში სინქრონიზაციის ტეგები არ არის',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'გაგზავნილია როგორც POST მოთხოვნის სხეული: მოთხოვნა და პარამეტრები ძალიან გრძელია URL-სთვის, ამიტომ @sanity/client-მა ისინი JSON-ის სახით გააგზავნა. ამ URL-ის Vision-ში ჩასმა მაინც ჩატვირთავს მოთხოვნას.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'შედეგის მოქმედებები',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'შედეგი დაკოპირებულია ბუფერში',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} დაკოპირდა',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'შედეგის კოპირება',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'მნიშვნელობის კოპირება',
  /** Empty state of the result view */
  'vision.result.empty': 'გაუშვით მოთხოვნა, რომ აქ ნახოთ შედეგი',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'CSV-ის ექსპორტი',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'JSON-ის ექსპორტი',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'TypeScript-ის ექსპორტი…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Zod-ის ექსპორტი…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'დამალე, რასაც შეიცავს',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'ხედში ჩატევა',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'შედეგის გრაფიკი: გადასაადგილებლად გადაათრიეთ, გასადიდებლად გადაახვიეთ; ფოკუსისას ისრის ღილაკები ანაცვლებს, + და - ადიდებს/ამცირებს, 0 — ჩატევა',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'ხის და JSON ხედებში ყველაფერი ჩანს.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit': 'ნაჩვენებია მხოლოდ პირველი {{nodes}} ობიექტი და მასივი.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial': '{{nodes}}-ისთვის ნაჩვენებია მხოლოდ პირველი {{rows}} ჩანაწერი.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} ჩანაწერი)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'შედეგი',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'გადიდება',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'დაპატარავება',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'გრაფიკი',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'შედეგის ხედი',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'ხე',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'ჯერ არ არის შენახული მოთხოვნები. შეინახეთ მიმდინარე მოთხოვნა + ღილაკით.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'თქვენს ძიებას მოთხოვნები არ ემთხვევა',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'ჩატვირთვა მიმდინარე ჩანართში',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'ახალ ჩანართში გახსნა',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'გადარქმევა',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'მიმდინარე მოთხოვნის შენახვა',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'ეს შენახული მოთხოვნა იყენებდა "{{variant}}" ვარიანტს; აირჩიეთ ის ნავიგაციის ზოლში, რათა მოთხოვნა მასთან ერთად გაუშვათ.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'ამ შენახული მოთხოვნის დატასეტი "{{dataset}}" აქ მიუწვდომელია, მიმდინარე დატასეტი ინარჩუნებს ძალას.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'ეს შენახული მოთხოვნა იყენებდა "{{variant}}" ვარიანტს; ამ სამუშაო სივრცეში ვარიანტები გამორთულია, ამიტომ მოთხოვნა მის გარეშე სრულდება.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'საცავის გასუფთავება',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'დიახ, გაასუფთავე საცავი',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'შლის თქვენს პირადად შენახულ მოთხოვნებს და ფუნქციების ბიბლიოთეკას, აღადგენს გახსნილ ჩანართებს და ამ ნაგულისხმევ პარამეტრებს ამ ბრაუზერში და აბრუნებს კლასიკურ Vision ხელსაწყოზე. გაზიარებული მოთხოვნები შენარჩუნდება.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'შენახული მოთხოვნების გასუფთავება ვერ მოხერხდა',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'საცავი გასუფთავებულია',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'ნაგულისხმევი პარამეტრები ახალი ჩანართებისთვის. გახსნილი ჩანართები ინარჩუნებენ საკუთარ პარამეტრებს.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'ერთი ველის მისამართი თითო ხაზზე. მისამართი ემთხვევა შედეგის ნებისმიერ სიღრმეს, ასე რომ _rev მალავს ყველა დოკუმენტის ვერსიას მასში. თითოეულ დიფს მაინც შეუძლია მათი ჩვენება.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'ნაგულისხმევზე დაბრუნება',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'ისტორიის დიფებიდან დამალული ველები',
  /** Title of the settings dialog */
  'vision.settings.title': 'პარამეტრები',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'ჯერ არ არის გაზიარებული მოთხოვნები. გააზიარეთ შენახული მოთხოვნა, რათა ის ხელმისაწვდომი გახდეს ყველასთვის, ვინც იყენებს ამ დატასეტს.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'დიალოგებისა და მენიუების დახურვა',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'ფუნქციის სახელის დასრულება',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'მოთხოვნის კოპირება',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'კურსორთან არსებული პროექციის ფუნქციად გარდაქმნა',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'მოთხოვნის გაშვება',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'შემდეგ ლინთის აღმოჩენაზე გადასვლა',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'მოთხოვნის დალამაზება',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'კლავიატურის მალსახმობები',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'გვერდითი პანელის ჩაკეცვა',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'გვერდითი პანელის გაშლა',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Vision-ის გვერდითი პანელი',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'შენახული მოთხოვნები',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'პარამეტრები',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'გაზიარებული მოთხოვნები',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'კლავიატურის მალსახმობები',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'პასუხში არ არის კონტენტის წყაროს რუკა. ჩართეთ „შეიცავდეს კონტენტის წყაროს რუკას“ პარამეტრებში და თავიდან მოითხოვეთ.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'პასუხის დეტალების პანელის ზომის შეცვლა: გადაათრიეთ ან გამოიყენეთ ისრების კლავიშები; Home და End მიდის საზღვრებამდე, Enter აბრუნებს საწყის მდგომარეობას',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'მოთხოვნისა და პასუხის პანელების ზომის შეცვლა: გადაათრიეთ ან გამოიყენეთ ისრების კლავიშები; Home და End მიდის საზღვრებამდე, Enter აბრუნებს საწყის მდგომარეობას',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'ჩანართის დახურვა',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'მოთხოვნის ჩანართები',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'ახალი ჩანართი',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'ჩანართის სათაური',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'უსათაურო მოთხოვნა',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'GROQ მოთხოვნის შემოწმება Vision-ში',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'სამუშაო სივრცის სქემის აღწერა Vision-ში',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'GROQ მოთხოვნის ახსნა Vision-ში',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'ღია Vision ჩანართის წაკითხვა',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'GROQ მოთხოვნის გახსნა Vision-ში',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'მუტაციების გადახედვა Vision-ში',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'GROQ მოთხოვნის გაშვება Vision-ში',
})
