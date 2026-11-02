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
  /** Tooltip shown when the API version selector is locked to vX because a variant is selected */
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
  'vista.agent-actions.credits': 'მოთხოვნაზე იხარჯება ერთი AI კრედიტი',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'ამ თვეს დარჩენილია {{balance}} AI კრედიტი {{quota}}-დან.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    'ამ თვეს გამოყენებულია {{used}} AI კრედიტი, რაც {{deficit}}-ით მეტია ჩართული {{quota}}-ზე.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'თქვენმა ორგანიზაციამ ამ თვეს უკვე გამოიყენა {{used}} თავისი {{quota}} AI კრედიტიდან, ამიტომ Sanity Agent Actions-ები შეჩერებულია შემდეგ თვემდე ან ხარჯვის ლიმიტის გაზრდამდე.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'თქვენმა ორგანიზაციამ მიაღწია AI კრედიტების ხარჯვის ლიმიტს, ამიტომ Sanity Agent Actions-ები შეჩერებულია შემდეგ თვემდე ან ლიმიტის გაზრდამდე.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'როგორ მუშაობს AI კრედიტები',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'AI კრედიტების მართვა',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'AI კრედიტები ამოწურულია',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'AI გამოყენება',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': 'ამ თვეს გამოყენებულია {{used}} AI კრედიტი.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'დაუსრულებელი API ვერსია',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'მოთხოვნები სრულდება API ვერსია {{version}}-ით. აირჩიეთ, რომ შეცვალოთ ეს Options-ში.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'მოთხოვნები სრულდება API CDN-ზე API ვერსია {{version}}-ით. აირჩიეთ, რომ შეცვალოთ ეს Options-ში.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'მოთხოვნები სრულდება API-ზე, API ვერსია {{version}}-ით და არა API CDN-ზე: ეს არ ემსახურება {{perspective}} პერსპექტივას. აირჩიეთ, რომ შეცვალოთ ეს Options-ში.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'Options-ში API ვერსია დაუსრულებელია, ამიტომ ვერაფერი მოიძიება, სანამ ის სრულად არ იქნება მითითებული.',
  /** Tooltip of the API version button while a selected variant forces the experimental API */
  'vista.api-version.tooltip-locked':
    'მოთხოვნები სრულდება API ვერსია {{version}}-ით, რომელიც საჭიროა არჩეული ვარიანტისთვის.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'შემდეგ',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'მანამდე',
  /** What the Delta panel does */
  'vista.delta.description':
    'უშვებს მოთხოვნას დელტა რეჟიმში, ისევე როგორც ამას აკეთებენ GROQ-ზე მომუშავე webhook-ები, listener-ები და Sanity Functions: before() და after() არის დოკუმენტი ცვლილებამდე და ცვლილების შემდეგ, @ არის დოკუმენტი ცვლილების შემდეგ, ხოლო delta::changedAny() ადარებს მათ. ის მუშაობს ბრაუზერში groq-js-ის მეშვეობით. ცარიელი მხარე ნიშნავს, რომ დოკუმენტი არ არსებობს: ცვლილება ქმნის ან შლის მას.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'დოკუმენტის ID',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'ჩატვირთეთ დოკუმენტის ისტორია, ან ჩაწერეთ დოკუმენტები „მანამდე“ და „შემდეგ“ ველებში.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'მოთხოვნის გაშვება დელტა რეჟიმში ვერ მოხერხდა: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': '„შემდეგ“ არ არის სწორი JSON: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before არ არის სწორი JSON: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'ისტორიის ჩატვირთვა',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'ისტორიის ჩატვირთვა ვერ მოხერხდა: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches': 'ემთხვევა: ეს webhook ან ფუნქცია ამ ფილტრით გაეშვება ამ ცვლილებისთვის.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'არ ემთხვევა: ეს webhook ან ფუნქცია ამ ფილტრით არ გაეშვება ამ ცვლილებისთვის.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'გამართეთ მოთხოვნა და მისი პარამეტრები, რათა გაუშვათ delta რეჟიმში.',
  /** Heading of the delta result */
  'vista.delta.result': 'შედეგი',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'არაფერი: ცვლილება შლის დოკუმენტს',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'არაფერი: ცვლილება ქმნის დოკუმენტს',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'პანელის დახურვა',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'მოთხოვნის გეგმა არის ის, თუ როგორ უშვებს Content Lake მოთხოვნას: რას კითხულობს, ფილტრავს და ალაგებს კითხვისას, და რა რჩება შემდგომი ნაბიჯებისთვის. „ეს ახსენი“ იყენებს Sanity Agent Actions-ს, რათა მარტივი სიტყვებით აღწეროს მოთხოვნა და მისი გეგმა, რაც ერთ AI კრედიტს მოითხოვს.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'დაწერეთ მოთხოვნა მის ასახსნელად.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'ეს ახსენი',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'მოთხოვნის ახსნა ვერ მოხერხდა: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'დათვლილია ინდექსში, დოკუმენტების წაკითხვის გარეშე.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'ქვემოთხოვნა ერთხელ გაეშვება ყველა დოკუმენტისთვის, ერთიანი ჯგუფური მოთხოვნით, და არა თითოეული დოკუმენტისთვის ცალ-ცალკე.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'ფილტრის ნაწილი სრულდება მეხსიერებაში, წაკითხვის შემდეგ: ინდექსის მიერ გატარებული ყველა დოკუმენტი ჯერ იკითხება, რაც დიდ მონაცემთა ბაზებზე ანელებს პროცესს. შეერთებები (->) და ფუნქციები ფილტრში ინდექსს ვერ იყენებენ.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'ინდექსი ალაგებს და ზღუდავს დოკუმენტებს მათი წაკითხვისას.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'ანაწილი აღებულია მეხსიერებაში წაკითხვის შემდეგ და არა როგორც ზღვარი წაკითხვისას.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'დალაგება ხდება მეხსიერებაში, ყველა შესატყვისის წაკითხვის შემდეგ. დაალაგეთ ატრიბუტებით, რომლებითაც ინდექსს შეუძლია დალაგება.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'მაღალი წარმადობის GROQ',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'რა გამოირჩევა',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'მოთხოვნის გეგმის ჩვენება',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'მოთხოვნის გეგმის მიღება ვერ მოხერხდა: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'მოთხოვნის გეგმა',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'ნაწყვეტი დაკოპირდა ბუფერში',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'ნაწყვეტის კოპირება',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description':
    'გაუშვით ეს მოთხოვნა სტუდიის გარეთ ამ ნაწყვეტებიდან ერთ-ერთის გამოყენებით.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'მოთხოვნის ექსპორტი',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'პირად მონაცემთა ბაზებს სჭირდება API ტოკენი. საჯარო მონაცემთა ბაზებისთვის შეგიძლიათ გამოტოვოთ Authorization სათაური.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'კოდი დაკოპირდა ბუფერში',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'კოდის კოპირება',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'ჯერ ჩატვირთეთ მოთხოვნა, რომ არსებობდეს შედეგი, საიდანაც ტიპები გამოვა.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'სქემის შეფასება ვერ მოხერხდა: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'გამოტანილია ჩატვირთული შედეგიდან, ვინაიდან მოთხოვნის შეფასება სამუშაო სივრცის სქემასთან ვერ მოხერხდა.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'გამოტანილია სამუშაო სივრცის სქემიდან, ისევე როგორც sanity typegen აკეთებს.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'ნაჩვენები შედეგი სხვა მოთხოვნისთვის ან პარამეტრებისთვის იყო ჩატვირთული. ჯერ ჩატვირთეთ მიმდინარე მოთხოვნა, რომ არსებობდეს შედეგი, საიდანაც ტიპები გამოვა.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'TypeScript-ის ექსპორტი',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Zod-ის ექსპორტი',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'დამატება მოთხოვნაში',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'ამ მოთხოვნაში',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'გამოაცხადეთ იგი',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'საჭიროებს API ვერსიას {{version}} ან უფრო ახალს',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'ამ მოთხოვნაში',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'თქვენი ბიბლიოთეკიდან',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'საკუთარი ფუნქცია, გამოცხადებულია ხაზზე {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'მუშაობს მხოლოდ delta რეჟიმში, სადაც webhook-ები და Sanity Functions უშვებენ თავიანთ ფილტრებს',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'ფუნქციად გამოყოფა',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library':
    'თქვენს ფუნქციების ბიბლიოთეკაშია, მაგრამ ამ მოთხოვნაში გამოცხადებული არ არის',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'GROQ ფუნქციების საცნობარო გზამკვლევი',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'ინახება ამ ბრაუზერში პროექტის ყველა მონაცემთა ბაზისთვის (dataset). დასრულებები სთავაზობს ამ ფუნქციებს, ხოლო lint გვთავაზობს, რომ query-ის გამოძახება გამოვაცხადოთ ფუნქციად.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'შეინახეთ ფუნქცია, რომელსაც query აცხადებს, რათა გამოიყენოთ იგი სხვა query-ებში.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'ბიბლიოთეკა',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'გამოაცხადეთ მორგებული ფუნქციები query-ის დასაწყისში, ან დააყენეთ კურსორი პროექციაში, მაგალითად author->{name}, და დააჭირეთ ამოღების ღილაკს რედაქტორის თავზე ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'ამ query-ში',
  /** Removes a function from the library */
  'vista.functions.remove': 'ამოშლა ბიბლიოთეკიდან',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'შეცვლა query-ში',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': '{{name}}-ის ჩვენება რედაქტორში',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'შენახვა ბიბლიოთეკაში',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'შენახულია',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'ბიბლიოთეკის განახლება',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Query-ის გენერირება',
  /** Closes the generate query bar */
  'vista.generate.close': 'დახურვა',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'Sanity Agent Actions წერს GROQ-ს თქვენი აღწერისა და დოკუმენტის ტიპების მიხედვით, ხოლო Content Lake ამოწმებს ყოველ მცდელობას; ყოველი მცდელობა მოიხმარს ერთ AI კრედიტს. ეს ანაცვლებს ამ ჩანართის query-ს და უშვებს მას; რედაქტორში დაბრუნება (undo) წინა query-ს დაგიბრუნებთ.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Query-ის გენერირება ვერ მოხერხდა',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'რა უნდა მოიძიოს query-მ?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'ბოლო მცდელობის გახსნა',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder': 'ბოლო 10 ავტორი, დალაგებული გვარის, შემდეგ კი სახელის მიხედვით',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Query იწერება…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Query-ის გასწორება (მცდელობა {{attempt}} {{max}}-დან)…',
  /** Button generating the query */
  'vista.generate.submit': 'გენერირება',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'CDN ქეშის დამთხვევა',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'შეცვლილია',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'ცვლილებები',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'ცვლილებების ჩვენება ვერ მოხერხდა.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'ხელახლა ცდა',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'შედარებულია {{time}}-ზე მოთხოვნილ მონაცემებთან',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'პარამეტრები',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'მოთხოვნა',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'შეიცვალა მხოლოდ ფორმატირება',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'შედეგი',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'მოთხოვნის URL',
  /** Empty state of the history panel */
  'vista.history.empty': 'ჯერ არაფერია მოთხოვნილი',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'წარუმატებელი',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'დამალვა',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'იმალება {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'შეიცვალა მხოლოდ დამალული ველები',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'გენერირებული მოთხოვნა',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'გახსნილი ბმული',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'ცოცხალი განახლება',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'ცოცხალი კავშირი განახლდა',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'ცოცხალი მოთხოვნა დაიწყო',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'მოთხოვნა ჩაიტვირთა',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'მოთხოვნის ღილაკი',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'მუტაციები გამოყენებულია',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'პარამეტრები შეიცვალა',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'ჩასმული URL',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'ავტომატური ხელახალი მოთხოვნა განახლდა',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'კლავიატურის მალსახმობი',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'იგივე შედეგი',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'მათი ჩვენება',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'ნაჩვენებია {{fields}}, ნაგულისხმევად დამალული',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'ზედმეტად დიდია შედარებისთვის',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'ცვლილებები არ არის',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'ლინტის შედეგები არ მოიძებნა. პრობლემები, რომლებსაც GROQ ლინტერი აღმოაჩენს მოთხოვნაში, აქ ჩამოითვლება ტექსტის აკრეფისას; აირჩიეთ ერთ-ერთი, რომ შეარჩიოთ იგი რედაქტორში.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'ხაზი {{line}}, სვეტი {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'შეცდომა',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'მინიშნება',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'ინფორმაცია',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'გაფრთხილება',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'გამოიყენეთ {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'ლაივ',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'ლაივ მოძიება',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'მოიძიეთ, შემდეგ კვლავ მოიძიეთ, როდესაც შედეგში არსებული დოკუმენტები შეიცვლება',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'შეაჩერეთ მოძიება, როდესაც შედეგში არსებული დოკუმენტები შეიცვლება. მოძიება მაინც გაშვებული იქნება მოთხოვნისას, იმ შედეგებისთვის, რომლებზეც დოკუმენტის ცვლილება არ ზემოქმედებს, მაგალითად now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'ლაივ განახლებები გათიშულია: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'ლაივის შეჩერება',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'მუტაციის დამატება',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'დოკუმენტის შექმნა',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'დოკუმენტის წაშლა',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'შედეგში არსებული დოკუმენტების წაშლა',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'დოკუმენტის პატჩი',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'შედეგში არსებული დოკუმენტების პატჩი',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'გამოყენება {{dataset}}-ზე',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'მუტაციები ვერ გამოიყენეს',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'გამოყენება აგზავნის იმას, რაც საცდელმა გაშვებამ აჩვენა: ჯერ გაუშვით ერთი.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'დაამატეთ _key მასივის ელემენტებს, რომლებსაც არ აქვთ',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'სტუდიას ყველა მასივის ელემენტზე სჭირდება ერთი მათი რედაქტირებისთვის.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'ცვლილებები',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'ცვლილებების ჩვენება ვერ მოხერხდა.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'ხელახლა ცდა',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'დაწერეთ მუტაციები ისე, როგორც Mutations API-ი იღებს მათ, სიის სახით: create, createOrReplace, createIfNotExists, delete და patch, ID-ით ან GROQ მოთხოვნით. საცდელი გაშვება აჩვენებს, რას გააკეთებდნენ ისინი თითოეულ დოკუმენტზე, არაფრის შეცვლის გარეშე; შემდეგ გამოყენება ჩაწერს მათ dataset-ში ერთი ტრანზაქციით, თქვენი ანგარიშით.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'მუტაცია {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'მუტაციების გენერირება',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'Sanity Agent Actions წერს მუტაციებს თქვენი აღწერილობის, შედეგში არსებული დოკუმენტებისა და მათი ტიპების საფუძველზე, ხოლო საცდელი გაშვება ამოწმებს თითოეულ მცდელობას; ყოველი მცდელობა იყენებს ერთ AI კრედიტს. ისინი ანაცვლებენ აქ არსებულ მუტაციებს, სადაც გაუქმება მათ უკან აბრუნებს; არაფერი ჩაიწერება, სანამ არ გამოიყენებთ.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'მუტაციების გენერირება ვერ მოხერხდა',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'რა უნდა გააკეთონ მუტაციებმა?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'შეცვალეთ შედეგში არსებული დოკუმენტების სათაური foobar-ად',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'მუტაციების ჩაწერა…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'მუტაციების გასწორება (მცდელობა {{attempt}} {{max}}-დან)…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'ცვლილებები გამოტოვებს {{fields}}-ს, ისევე როგორც History.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'მუტაციები არ წარმოადგენს სწორ JSON-ს: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'მუტაციას {{index}} სჭირდება ზუსტად ერთი შემდეგთაგან: create, createOrReplace, createIfNotExists, delete ან patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'მუტაციები',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'მუტაციები არცერთ დოკუმენტს არ ეხება.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'დაწერეთ მუტაციების სია, ერთი მუტაცია, ან მოთხოვნის სხეული მუტაციების სიით.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'შექმნა',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'წაშლა',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'ცვლილება არ არის',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'განახლება',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'სატესტო გაშვება',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'სატესტო გაშვება ვერ შესრულდა',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'სატესტო გაშვება',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'მუტაციები, მონაცემთა ბაზა ან პარამეტრები შეიცვალა ამ სატესტო გაშვების შემდეგ. გაუშვით ხელახლა მათ გასააქტიურებლად.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'შეცვლილია: {{changed}} · უცვლელია: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'ქეში',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'მოხვედრა',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'CDN-მა უპასუხა ქეშირებული პასუხით, თქვენთან ახლომდებარე ლოკაციიდან; მოთხოვნა API-მდე არ მისულა.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'ამ სესიისთვის ცნობილი ინფორმაციით - ვერ მოხდა მოხვედრა',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'არცერთი, API ყველა მოთხოვნას ახალი კონტენტით პასუხობს',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'გაუშვით მოთხოვნა, რომ ნახოთ რომელმა საბოლოო წერტილმა უპასუხა, ქეშიდან იყო თუ არა, და სად შესრულდა.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'უპასუხა',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'მოთხოვნა შესრულდა',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'არ არის მოხსენებული',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'დრო',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}მწმ მთლიანი მოგზაურობა, {{server}}მწმ სერვერზე',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'მიკვლევის ID',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'ჩართეთ „გამოიყენე API CDN“ პარამეტრებში, რომ მოთხოვნები CDN-ის მეშვეობით გაიგზავნოს.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'თქვენ',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'მიჰყვება სამუშაო სივრცეს',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'მონაცემთა ბაზის დამაგრება',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned':
    'მიმაგრებულია; სამუშაო სივრცემ შეიძლება სხვა მონაცემთა ბაზა გამოიყენოს',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'გამოიყენეთ სამუშაო სივრცის მონაცემთა ბაზა',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'შეიცავდეს კონტენტის წყაროს რუკას',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'დაამატებს resultSourceMap-ს პასუხში, რომელიც ჩანს კონტენტის წყაროს რუკის ჩანართში.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'გლობალური ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'API CDN-ის გამოყენება',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'ეს სტუდია გაგაცნობთ cookie-ს საშუალებით, რომელსაც API CDN ვერასდროს იღებს: ის პასუხობს ისე, როგორც ანონიმურ ვიზიტორს უპასუხებდა, საჯარო მონაცემთა ბაზის მონაცემებით.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'API CDN არ ემსახურება დრაფტებს ან გამოშვებებს, ასე რომ {{perspective}} პერსპექტივით მოთხოვნები მიემართება API-ს. გამოქვეყნებული ან ნედლი პერსპექტივებით ისინი CDN-ს იყენებენ.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'მოთხოვნები მიემართება API-ს და არა CDN-ს',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'აგზავნის მოთხოვნას API CDN-ში, როგორც useCdn: true @sanity/client-ში, გამოქვეყნებული და ნედლი პერსპექტივებით: დრაფტები და გამოშვებები ყოველთვის მიემართება API-ს. მისი პასუხები კეშირდება ერთ წუთამდე; ქსელის პანელი აჩვენებს, როდესაც პასუხი კეშიდან მოვიდა.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'გამოქვეყნებული პერსპექტივის გამოყენება',
  /** Label of the variant field */
  'vista.options.variant-label': 'ვარიანტი',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'გლობალური ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'გლობალური (არ არის არჩეული)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'არცერთი',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'პანელის ჩაკეცვა',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'დელტა',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'პანელის გაშლა',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'ახსნა',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'ფუნქციები',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'ისტორია',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'ლინტი',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'მუტაცია',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'ქსელი',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'პარამეტრები',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'პასუხი',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'კონტენტის წყაროს რუკა',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'ელემენტის დამატება',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder':
    'ნებისმიერი JSON მნიშვნელობა; სხვა ტექსტი იგზავნება როგორც სტრიქონი',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'მოთხოვნა არ იყენებს პარამეტრებს. თითოეული $name მასში მიიღებს ველს აქ.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'პარამეტრები არასწორი JSON არის. გაასწორეთ ისინი JSON ხედში, რომ შეძლოთ აქ რედაქტირება.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'არ არის true ან false; იგზავნება როგორც {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'არ არის ამ სამუშაო სივრცის დოკუმენტის ტიპი; მაინც იგზავნება',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'არ არის მთელი რიცხვი, რაც საჭიროა ნაწილებისთვის',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'არ არის სია; იგზავნება როგორც {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'არ არის რიცხვი; იგზავნება როგორც ტექსტი',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'არ არის ცნობილი მნიშვნელობებიდან ერთ-ერთი; მაინც იგზავნება',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'არ არის ტექსტი; იგზავნება როგორც {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, ელემენტი {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'ელემენტი',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing':
    'არ არის დაყენებული: მოთხოვნა ვერ შესრულდება, სანამ მას არ ექნება მნიშვნელობა',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'ტიპები მოდის მხოლოდ მოთხოვნიდან: სამუშაო სივრცის სქემის წაკითხვა ვერ მოხერხდა.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'არ არის დაყენებული',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'ახლა',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'წაშლა',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'ელემენტის წაშლა',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'მოთხოვნა ვერ განიმარტება, ამიტომ მისი პარამეტრები ჩამოთვლილია ტიპების გარეშე.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'ნებისმიერი JSON მნიშვნელობა',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'true ან false',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'თარიღი და დრო (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'დოკუმენტის ID',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'დოკუმენტის ტიპი',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'მთელი რიცხვი',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'სია, თითოეული {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'რიცხვი',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'ტექსტი',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'მოთხოვნაში არ გამოიყენება',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'გამოყენებულია',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'ზომა მორგებულია შიგთავსზე, {{height}} პიქსელი',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'პარამეტრების ზომის შეცვლა: გადაათრიეთ ან გამოიყენეთ ისრების კლავიშები; ორმაგი დაწკაპუნება ან Enter-ის დაჭერა შიგთავსზე თავიდან მოსარგებად',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'ფორმა',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'პარამეტრების რედაქტირება როგორც',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'მოთხოვნა ჩაიტვირთა ჩასმული URL-დან',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'ჩასმულმა URL-მა გამოიყენა "{{variant}}" ვარიანტი; აირჩიეთ ის ნავიგაციის ზოლში, რათა მოთხოვნა მასთან ერთად გაუშვათ.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'მონაცემთა ბაზა "{{dataset}}" ჩასმულ URL-ში აქ ხელმისაწვდომი არ არის, ინარჩუნებს მიმდინარეს.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'ჩასმულ URL-ში მითითებული პერსპექტივა აქ მხარდაჭერილი არ არის, ინარჩუნებს მიმდინარეს.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'ჩასმულმა URL-მა გამოიყენა "{{variant}}" ვარიანტი; ამ სამუშაო სივრცეში ვარიანტები გამორთულია, ამიტომ მოთხოვნა მის გარეშე სრულდება.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'მოთხოვნის მოქმედებები',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'ავტომატური ხელახლა მოთხოვნისთვის საჭიროა API ვერსია v2021-03-25 ან უფრო ახალი.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'მოთხოვნა დაკოპირდა ბუფერში',
  /** Menu item copying the query text */
  'vista.query.copy': 'მოთხოვნის კოპირება',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'მოთხოვნის ექსპორტი…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'მოთხოვნის ფორმატირება',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'მოთხოვნის ფორმატირება ვერ მოხერხდა',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'შენახვის მოთხოვნა',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'გაჩერება',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'მოძიების გაჩერება',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'თქვენ იყენებთ Vision ხელსაწყოს განახლებულ ვერსიას. უკან გადართვისას თქვენი ტაბები და პარამეტრები შენარჩუნდება ამ ბრაუზერში მომდევნო ცდისთვის.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'განახლებული Vision (ბეტა)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'კლასიკურ Vision-ზე გადართვა',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'სცადეთ ახლავე',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'მოთხოვნის ტაბები, რეალურ დროში ხელახალი მოძიება, პასუხის დეტალები და ექსპორტები. შეგიძლიათ ნებისმიერ დროს დაუბრუნდეთ წინას.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'არა ახლა',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'სცადეთ განახლებული Vision',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'სცადეთ განახლებული ვერსია',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'გადართეთ განახლებულ Vision-ზე, რომელიც ბეტა რეჟიმშია. ნებისმიერ დროს შეგიძლიათ დაუბრუნდეთ წინას მისი გვერდითი პანელიდან.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'ჯერ არაფერია მოძიებული',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'მონაცემთა ზომა',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'სინქრონიზაციის ტეგები',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'პასუხში სინქრონიზაციის ტეგები არ არის',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'შედეგის ქმედებები',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'შედეგი დაკოპირდა ბუფერში',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': 'დაკოპირდა {{path}}',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'შედეგის კოპირება',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'მნიშვნელობის კოპირება',
  /** Empty state of the result view */
  'vista.result.empty': 'გაუშვით მოთხოვნა, რომ იხილოთ შედეგი აქ',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'CSV-ის ექსპორტი',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'JSON-ის ექსპორტი',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'TypeScript-ის ექსპორტი…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Zod-ის ექსპორტი…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'დამალე რასაც შეიცავს',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'ეკრანზე მოტევა',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'შედეგის გრაფი: გადასაადგილებლად გადაათრიეთ, გასადიდებლად/დასაპატარავებლად დაასქროლეთ; ფოკუსის დროს ისრის ღილაკები გადააადგილებს, + და - დააპატარავებს/გაადიდებს, 0 მოარგებს ეკრანს',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'ხის და JSON ხედები მთლიანად აჩვენებენ მას.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'ნახატზეა მხოლოდ პირველი {{nodes}} ობიექტი და მასივი.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial': '{{nodes}}-ისთვის ჩამოთვლილია მხოლოდ პირველი {{rows}} ჩანაწერი.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} ჩანაწერი)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'შედეგი',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'გადიდება',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'დაპატარავება',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'გრაფი',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'შედეგის ხედი',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'ხე',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'ჯერ არ არის შენახული მოთხოვნები. შეინახეთ მიმდინარე მოთხოვნა + ღილაკით.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'თქვენს ძიებას მოთხოვნები არ შეესაბამება',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'ჩატვირთვა მიმდინარე ჩანართში',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'გახსნა ახალ ჩანართში',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'გადარქმევა',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'მიმდინარე მოთხოვნის შენახვა',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'ამ შენახულმა მოთხოვნამ გამოიყენა ვარიანტი „{{variant}}“; აირჩიეთ იგი ნავიგაციის ზოლში, რომ მოთხოვნა მასთან ერთად გაუშვათ.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'ამ შენახული მოთხოვნის დატასეტი „{{dataset}}“ აქ ხელმისაწვდომი არ არის, ვტოვებთ მიმდინარეს.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'ამ შენახულმა მოთხოვნამ გამოიყენა ვარიანტი „{{variant}}“; ამ სამუშაო სივრცეში ვარიანტები გამორთულია, ამიტომ მოთხოვნა მის გარეშე სრულდება.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'საცავის გასუფთავება',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'დიახ, გასუფთავდეს საცავი',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'შლის თქვენს პირადად შენახულ მოთხოვნებს და ფუნქციების ბიბლიოთეკას, ანულებს გახსნილ ჩანართებს და ამ ნაგულისხმევ პარამეტრებს ამ ბრაუზერში და აბრუნებს კლასიკურ Vision ხელსაწყოს. გაზიარებული მოთხოვნები შენარჩუნებულია.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'შენახული მოთხოვნების გასუფთავება ვერ მოხერხდა',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'საცავი გასუფთავდა',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'ნაგულისხმევი პარამეტრები ახალი ჩანართებისთვის. გახსნილი ჩანართები ინარჩუნებენ საკუთარ პარამეტრებს.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'თითო ველის ბილიკი თითო ხაზზე. ბილიკი ემთხვევა შედეგის ნებისმიერ სიღრმეზე, ასე რომ _rev მალავს ყველა დოკუმენტის ვერსიას მასში. თითოეულ განსხვავებას მაინც შეუძლია მათი ჩვენება.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'ნაგულისხმევზე დაბრუნება',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'ველები, რომლებიც დამალულია ისტორიის განსხვავებებიდან',
  /** Title of the settings dialog */
  'vista.settings.title': 'პარამეტრები',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'გაზიარებული მოთხოვნები ჯერ არ არის. გააზიარეთ შენახული მოთხოვნა, რათა ის ხელმისაწვდომი გახდეს ამ მონაცემთა ბაზის ყველა მომხმარებლისთვის.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'დიალოგების და მენიუების დახურვა',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'ფუნქციის სახელის დასრულება',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'მოთხოვნის კოპირება',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'კურსორთან არსებული პროექციის ფუნქციად გარდაქმნა',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'მოთხოვნის გაშვება',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'შემდეგ ლინთის აღმოჩენაზე გადასვლა',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'მოთხოვნის დაფორმატება',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'კლავიატურის მალსახმობები',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'გვერდითი პანელის ჩაკეცვა',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'გვერდითი პანელის გაშლა',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Vista-ს გვერდითი პანელი',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'შენახული მოთხოვნები',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'პარამეტრები',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'გაზიარებული მოთხოვნები',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'კლავიატურის მალსახმობები',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'პასუხში არ არის კონტენტის წყაროს რუკა (content source map). ჩართეთ "Include content source map" პარამეტრებში და ხელახლა მოითხოვეთ.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'შეცვალეთ პასუხის დეტალების პანელის ზომა: გადაათრიეთ ან გამოიყენეთ ისრების ღილაკები; Home და End მიდის საზღვრებამდე, Enter აბრუნებს თავდაპირველ მდგომარეობას',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'შეცვალეთ მოთხოვნისა და პასუხის პანელების ზომა: გადაათრიეთ ან გამოიყენეთ ისრების ღილაკები; Home და End მიდის საზღვრებამდე, Enter აბრუნებს თავდაპირველ მდგომარეობას',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'ჩანართის დახურვა',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'მოთხოვნის ჩანართები',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'ახალი ჩანართი',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'ჩანართის სათაური',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'უსახელო მოთხოვნა',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'GROQ მოთხოვნის შემოწმება Vision-ში',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'სამუშაო სივრცის სქემის აღწერა Vision-ში',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'GROQ მოთხოვნის ახსნა Vision-ში',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'ღია Vision ჩანართის წაკითხვა',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'GROQ მოთხოვნის გახსნა Vision-ში',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'მუტაციების გადახედვა Vision-ში',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'GROQ მოთხოვნის გაშვება Vision-ში',
})
