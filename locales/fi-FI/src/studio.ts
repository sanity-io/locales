import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Poista',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Näytä käyttö',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Tiedostoa käyttävät dokumentit',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Kuvaa käyttävät dokumentit',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Ladataan…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Peruuta',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Poista',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Poista tiedosto',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Poista kuva',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Ladataan…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Olet poistamassa tiedostoa <strong>{{filename}}}</strong> ja sen metatietoja. Oletko varma?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Olet poistamassa tiedostoa ja sen metatietoja. Oletko varma?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Olet poistamassa kuvaa <strong>{{filename}}</strong> ja sen metatietoja. Oletko varma?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Olet poistamassa kuvaa ja sen metatietoja. Oletko varma?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Kuvan esikatselu',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} ei voida poistaa, koska sitä käytetään. Poistaaksesi tämän tiedoston, sinun on ensin poistettava kaikki sen käyttökerrat.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Tätä tiedostoa ei voida poistaa, koska sitä käytetään. Poistaaksesi sen, sinun on ensin poistettava kaikki sen käyttökerrat.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} ei voida poistaa, koska sitä käytetään. Poistaaksesi tämän kuvan, sinun on ensin poistettava kaikki sen käyttökerrat.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Tätä kuvaa ei voida poistaa, koska sitä käytetään. Poistaaksesi sen, sinun on ensin poistettava kaikki sen käyttökerrat.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Näytetään vain hyväksyttyjen tyyppien omaisuutta: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Valitse tiedosto',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Valitse kuva',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Lataa lisää',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Ei tiedostoja',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Ei kuvia',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Ei voi poistaa tällä hetkellä valittua tiedostoa',
  'asset-source.file.asset-list.action.delete.text': 'Poista',
  'asset-source.file.asset-list.action.delete.title': 'Poista tiedosto',
  'asset-source.file.asset-list.action.select-file.title': 'Valitse tiedosto {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Näytä käyttö',
  'asset-source.file.asset-list.delete-failed': 'Tiedostoa ei voitu poistaa',
  'asset-source.file.asset-list.delete-successful': 'Tiedosto poistettiin',
  'asset-source.file.asset-list.header.date-added': 'Lisäyspäivämäärä',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Tiedostonimi',
  'asset-source.file.asset-list.header.size': 'Koko',
  'asset-source.file.asset-list.header.type': 'Tyyppi',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Ladatut tiedostot',
  'asset-source.image.asset-list.delete-failed': 'Kuvaa ei voitu poistaa',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Kuva poistettiin',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Ladatut kuvat',
  'asset-source.usage-list.documents-using-file_named_one':
    'Yksi asiakirja käyttää tiedostoa <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} asiakirjaa käyttää tiedostoa <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Yhtään asiakirjaa ei käytä tiedostoa <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Yksi asiakirja käyttää tätä tiedostoa',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} asiakirjaa käyttää tätä tiedostoa',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Yhtään asiakirjaa ei käytä tätä tiedostoa',
  'asset-source.usage-list.documents-using-image_named_one':
    'Yksi asiakirja käyttää kuvaa <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} asiakirjaa käyttää kuvaa <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Yhtään asiakirjaa ei käytä kuvaa <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Yksi asiakirja käyttää tätä kuvaa',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} asiakirjaa käyttää tätä kuvaa',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Yhtään asiakirjaa ei käytä tätä kuvaa',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Siirry seuraavaan kuukauteen',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Siirry seuraavaan vuoteen',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Siirry edelliseen kuukauteen',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Siirry edelliseen vuoteen',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Tänään',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Siirry tähän päivään',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Huomenna',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Eilen',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Sisällytä aika',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Valitse tunti',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Valitse minuutti',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Aseta nykyiseen aikaan',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Täytyy olla muodossa <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'huhtikuu',
  /** Month name for August */
  'calendar.month-names.august': 'elokuu',
  /** Month name for December */
  'calendar.month-names.december': 'joulukuu',
  /** Month name for February */
  'calendar.month-names.february': 'helmikuu',
  /** Month name for January */
  'calendar.month-names.january': 'tammikuu',
  /** Month name for July */
  'calendar.month-names.july': 'heinäkuu',
  /** Month name for June */
  'calendar.month-names.june': 'kesäkuu',
  /** Month name for March */
  'calendar.month-names.march': 'maaliskuu',
  /** Month name for May */
  'calendar.month-names.may': 'toukokuu',
  /** Month name for November */
  'calendar.month-names.november': 'Marraskuu',
  /** Month name for October */
  'calendar.month-names.october': 'Lokakuu',
  /** Month name for September */
  'calendar.month-names.september': 'Syyskuu',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Pe',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Ma',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'La',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Su',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'To',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Ti',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Ke',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Sulje muutosten katselu',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Peruuta',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Palauta kaikki',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Palauta muutos',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Palauta muutokset',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Oletko varma, että haluat palauttaa muutokset?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one': 'Oletko varma, että haluat palauttaa muutoksen?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Lisätty',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Lisätty sijaintiin {{position}}',
  'changes.array.item-moved_down_one': 'Siirretty {{count}} sijainti alas',
  'changes.array.item-moved_down_other': 'Siirretty {{count}} sijaintia alas',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Siirretty {{count}} sijainti ylös',
  'changes.array.item-moved_up_other': 'Siirretty {{count}} sijaintia ylös',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Poistettu sijainnista {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Tarkastele muutoksia',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Muuttunut',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Muutokset tekijältä',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info': 'Tarkista kehittäjän konsoli saadaksesi lisätietoja',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Tämän kentän muutosten renderöinti aiheutti virheen',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Arvovirhe: Arvon tyyppi on "<code>{{actualType}}</code>", odotettiin "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Nimetön',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Rajaus muuttunut',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Kuva poistettu',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Virhe kuvan latauksessa',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Kohdistuspiste muuttunut',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Nimetön',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Kuvaa ei asetettu',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(ei kuvaa)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'Alkaen',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Kohteeseen',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Ladataan…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Ladataan muutoksia…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Muokkaa asiakirjaa tai valitse vanhempi versio aikajanalta nähdäksesi muutoslistan tässä paneelissa.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Ei muutoksia',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Lisätty huomautus',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Muutettu huomautus',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Poistettu huomautus',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Muuttumaton huomautus',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Muutettu lohkotyyliä "{{fromStyle}}" to "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Muotoilu muutettu',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': 'Tyhjä {{inlineObjectType}}',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': 'Tyhjä {{annotationType}}',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Lisätty tyhjä teksti',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Muutettu tyhjä teksti',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Poistettu tyhjä teksti',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Lisätty sisäkkäinen objekti',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Muutettu sisäkkäinen objekti',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Poistettu sisäkkäinen objekti',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Muuttumaton sisäkkäinen objekti',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Lisätty tekstiä',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Poistettu tekstiä',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Tuntematon skeeman tyyppi',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Tuntematon skeeman tyyppi',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Poistettu',
  /** Title for the Review Changes pane */
  'changes.title': 'Tarkista muutokset',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Näytä lisää',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Peruuta',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Vahvista',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Ladataan',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Löydetty konfiguraatio-ongelmia',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Lajittele {{title}} mukaan',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Lajittele kuvatekstin mukaan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Lajittele kuvauksen mukaan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Lajittele otsikon mukaan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Lajittele otsakkeen mukaan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Lajittele etiketin mukaan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Lajittele nimen mukaan',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Lajittele otsikon mukaan',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Muokattu {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Ei julkaistu',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Julkaistu {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'Arvon <code>_key</code> täytyy olla uniikki merkkijono.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Tämä tapahtuu yleensä, kun kohteita luodaan käyttäen API-asiakasohjelmaa, ja jokaisen elementin <code>_key</code> arvo on luotu ei-uniikisti.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Kehittäjän tiedot',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Luo uniikit avaimet',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Useat kohteet tässä listassa jakavat saman tunnisteen (avain). Jokaisella kohteella täytyy olla uniikki tunniste.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Ei-uniikit avaimet',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Kenttää "{{fieldName}}" ei löydy jäsenten joukosta – varmista, että se on määritelty skeemassa ja ettei sitä ole ehdollisesti piilotettu.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Lisää puuttuvat avaimet',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'Arvon <code>_key</code> täytyy olla uniikki merkkijono.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Tämä tapahtuu yleensä, kun kohteita luodaan käyttäen API-asiakasohjelmaa, eikä <code>_key</code>-ominaisuutta ole sisällytetty.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Kehittäjän tiedot',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Joiltakin listan kohteilta puuttuvat avaimet. Tämä on korjattava, jotta listaa voidaan muokata.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Puuttuvat avaimet',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Tämä tapahtuu yleensä, kun kohteita luodaan käyttäen API-asiakasohjelmaa, tai kun mukautettu syöttökomponentti on lisännyt virheellisiä tietoja listaan.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Kehittäjän tiedot',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Poista ei-olioarvot',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Joissakin tämän listan kohteissa ei ole olioita. Tämä on korjattava, jotta listaa voidaan muokata.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Virheelliset listan arvot',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Ei löydy taulukon kohdetta indeksissä <code>{{index}}</code> polussa <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Ei löydy taulukon kohdetta, jolla on `_key` <code>"{{key}}"</code> polussa <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': 'vanhentunut',
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Nimeämätön',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Nimeämätön',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Sisältää virheen',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Sisältää tiedon',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Sisältää varoituksen',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} virhe',
  'form.validation.summary.errors-count_other': '{{count}} virhettä',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} varoitus',
  'form.validation.summary.warnings-count_other': '{{count}} varoitusta',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': '{{count}} päivä jäljellä kokeilussa',
  'free-trial.tooltip.days-count_other': '{{count}} päivää jäljellä kokeilussa',
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': 'Päivitä projektisi',

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Ota yhteyttä myyntiin',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Apua ja tukea',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Liity yhteisöömme',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'Uusin versio on {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Sanity Studio versio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Apua ja resursseja',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Peruuta',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Lataa',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Ladataan <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Tätä asiakirjaa ei voi avata (Studio-URL-osoitetta ei voi selvittää)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Lisää kohde jälkeen',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Lisää kohde ennen',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Lisää kohde',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Lisää kohde...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Vedä järjestääksesi uudelleen',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Kopioi',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Muokkaa {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Poista',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Poista',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Näytä {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Voit siirtää tai poistaa tämän kohteen, mutta sitä ei voi muokata, koska sen tyypin skeemamäärittelyä ei löydy mistään.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Alkuarvoa ei voi selvittää tyypille: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Seuraavaa kohdetta ei voi ladata, koska sisältötyypistä taulukon kohteeksi ei ole tunnettua konversiota:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Seuraavia kohteita ei voi ladata, koska sisältötyypeistä taulukon kohteeksi ei ole tunnettua konversiota:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'Nykyinen skeema ei ilmoita kohteita tyypiltään <code>{{typeName}}</code> kelvollisiksi tähän listaan. Tämä voi tarkoittaa, että tyyppi on poistettu kelvollisten kohteiden joukosta, tai että joku muu on lisännyt sen omaan paikalliseen skeemaansa, jota ei ole vielä otettu käyttöön.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Tämän kohteen JSON-esitys:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Kohde tyypiltään <code>{{typeName}}</code> ei kelpaa tähän listaan',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Miksi näin tapahtuu?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Odottamaton virhe: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Ei kohteita',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Tämä kenttä on vain luku -muodossa',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Selvitetään alkuperäistä arvoa…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'esim. {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Avaa tiedoston asetusvalikko',
  /** Browse */
  'inputs.file.browse-button.text': 'Selaa',
  /** Select file */
  'inputs.file.dialog.title': 'Valitse tiedosto',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Tuntematon jäsenen tyyppi: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'Tämän kentän arvo ei ole kelvollinen tiedosto. Kentän nollaaminen antaa sinun valita uuden tiedoston.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Nollaa arvo',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Kelvoton tiedostoarvo',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Valitse',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'Latausta ei voitu suorittaa tällä hetkellä.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Lataus epäonnistui',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Tyhjennä kenttä',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Kopioi URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Lataa',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied': 'URL on kopioitu leikepöydälle',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Korvaa',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Lataa',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Pudota ladataksesi',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Pudota ladataksesi {{count}} tiedosto',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Pudota ladataksesi {{count}} tiedostoa',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Tätä tiedostoa ei voi ladata tänne',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Yhtäkään näistä tiedostoista ei voi ladata tänne',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} tiedostoa ei voi ladata tänne',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} tiedostoa ei voi ladata tänne',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Tiedostoa ei voi ladata',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Ei voi ladata {{count}} tiedostoa',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Vedä tai liitä tiedosto tähän',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Vedä tai liitä kuva tähän',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Pudota ladataksesi tiedoston',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Pudota ladataksesi kuvan',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Vain luku',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Tiedostoja ei voi ladata tähän',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Tyhjennä lataus',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Lataus ei ole edennyt vähintään {{staleThresholdMinutes}} minuuttiin ja on todennäköisesti keskeytynyt. Voit turvallisesti tyhjentää keskeneräisen latauksen ja yrittää ladata uudelleen.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Keskeneräinen lataus',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Rajaa kuva',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Avaa kuvan muokkausdialogi',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Avaa kuvan asetusvalikko',
  /** Select */
  'inputs.image.browse-menu.text': 'Valitse',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Tätä tiedostoa ei voi ladata tähän',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Pudota kuva ladataksesi sen',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Tämä kenttä on vain luku',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Tuntematon jäsenen tyyppi: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Muokkaa hotspotia ja rajaa',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'Tämän kentän arvo ei ole kelvollinen kuva. Kentän nollaaminen antaa sinun valita uuden kuvan.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Nollaa arvo',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Kelvoton kuvan arvo',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Esikatselu ladatusta kuvasta',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Latausta ei voitu suorittaa loppuun tällä hetkellä.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Lataus epäonnistui',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Säädä suorakulmiota kuvan rajaukseen. Säädä ympyrää määrittääksesi alueen, joka tulisi aina olla näkyvissä.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Virhe: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Muunna koodiksi <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'Nykyinen arvo (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'Ominaisuuden arvo on tallennettu arvotyypiksi, joka ei vastaa odotettua tyyppiä.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'Tämän ominaisuuden arvon on oltava tyyppiä <code>{{validType}}</code> skeeman mukaan.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Vain seuraavat tyypit ovat kelvollisia tässä skeeman mukaan:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Vääränlaiset arvotyypit ilmenevät tyypillisesti, kun skeemaa on äskettäin muutettu.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Kehittäjän tiedot',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Nollaa arvo',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Virheellinen ominaisuuden arvo',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Kenttäryhmät',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Tämä kenttä on <strong>luettavissa vain</strong> asiakirjan skeeman mukaan eikä sitä voi poistaa. Jos haluat pystyä poistamaan tämän Studiosta, varmista, että poistat <code>readOnly</code> kentän ympäröivästä tyypistä skeemassa.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Poista kenttä',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Kohdattu kenttä, jota ei ole määritelty skeemassa.',
  'inputs.object.unknown-fields.warning.description_other':
    'Kohdattu {{count}} kenttää, joita ei ole määritelty skeemassa.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Tätä kenttää ei ole määritelty skeemassa, mikä voi tarkoittaa, että kentän määrittely on poistettu tai että joku muu on lisännyt sen omaan paikalliseen projektiinsa eikä ole vielä julkaissut muutoksiaan.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Näitä kenttiä ei ole määritelty asiakirjan skeemassa, mikä voi tarkoittaa, että kenttien määrittelyt on poistettu tai että joku muu on lisännyt ne omaan paikalliseen projektiinsa eikä ole vielä julkaissut muutoksiaan.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Kehittäjän tiedot',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Tuntematon kenttä löydetty',
  'inputs.object.unknown-fields.warning.title_other': 'Tuntemattomia kenttiä löydetty',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Pienennä editori säästääksesi näyttötilaa',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': 'Muokkaa huomautusta',
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Laajenna editori',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Lisää {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Lisää {{typeName}} (lohko)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Lisää {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Lisää {{typeName}} (inline)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': 'Poista huomautus',
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Klikkaa aktivoidaksesi',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Klikkaa tai paina välilyöntiä aktivoidaksesi',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Napauta aktivoidaksesi',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': 'Huomautusobjekti',
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Muokkaa {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Linkki',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': 'Lohko-objekti',
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Muokkaa',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Avaa valikko',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Avaa viite',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Poista',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Näytä',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Koodi',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Kursiivi',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Yliviivaus',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Lihavoitu',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Alleviivaus',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Tyhjä',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': 'Sisäkkäinen objekti',
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Muokkaa objektia',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': 'Muokkaa objektia',
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Poista objekti',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': 'Poista objekti',
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'HUOM: Toiminnon suorittaminen yllä on yleensä turvallista, mutta jos olet epävarma, ota yhteyttä studion konfiguroinnista vastaaviin henkilöihin.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Poista objekti',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Lohkon <code>{{key}}</code> lapsi, jonka avain on {{childKey}}, on tyyppiä <code>{{childType}}</code>, joka ei ole sallittu skeeman määritelmän mukaan.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Poista lohko',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Lohkon, jonka avain on <code>{{key}}</code>, tyyppi on <code>{{typeName}}</code>, joka ei ole sallittu tässä kentässä.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Lisää tyhjä tekstispani',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstilohkolla, jonka avain on <code>{{key}}</code>, ei ole tekstispania.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ohita',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Käytä tyyppiä <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Lohkolla, jonka avain on <code>{{key}}</code>, on virheellinen tyyppinimi. Skeeman mukaan sen tulisi olla <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Aseta tyhjä tekstiarvo',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Spanilla, jonka avain on {{childKey}} lohkossa, jonka avain on <code>{{key}}</code>, on puuttuva tai virheellinen <code>text</code> ominaisuus.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Käytä tyyppiä <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Lohkolla, jonka avain on <code>{{key}}</code>, puuttuu tyyppinimi. Skeeman mukaan sen tulisi olla <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Anna satunnainen avain',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Lohkon <code>{{key}}</code> lapsella indeksissä <code>{{index}}</code> puuttuu <code>_key</code> ominaisuus.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Poista objekti',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Lohkon <code>{{key}}</code> lapsella, jonka avain on {{childKey}}, puuttuu <code>_type</code> ominaisuus.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Anna satunnainen avain',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'Lohkolla indeksissä <code>{{index}}</code> puuttuu vaadittu <code>_key</code> ominaisuus.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Poista lohko',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstilohkolla, jonka avain on <code>{{key}}</code>, on virheellinen tai puuttuva `children` ominaisuus.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Lisää ominaisuus',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstilohkolla, jonka avain on <code>{{key}}</code>, on virheellinen tai puuttuva `markDefs` ominaisuus.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Poista lohko',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'Lohkolla, jonka avain on <code>{{key}}</code>, puuttuu tyyppinimi.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Poista kohde',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Kohde indeksissä <code>{{index}}</code> lohkossa, jonka avain on <code>{{key}}</code>, ei ole objekti.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Poista arvo',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Arvon on oltava taulukko Portable Text -lohkoja tai määrittelemätön.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Poista kohde',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Kohde <code>{{index}}</code> ei ole objekti.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Poista sallimattomat merkinnät',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstilohko, jonka avain on <code>{{key}}</code>, sisältää merkintöjä <code>({{orphanedMarks, list}})</code>, jotka eivät ole sallittuja kaaviossa.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Virheellinen Portable Text -arvo',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Luettelomerkit',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Numeroitu lista',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Otsikko 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Otsikko 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Otsikko 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Otsikko 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Otsikko 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Otsikko 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Useita',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Ei tyyliä',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normaali',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Lainaus',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Tyhjennä',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Luo uusi',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Luo uusi…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Kopioi',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Avaa uudessa välilehdessä',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Poista',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Korvaa',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Peruuta korvaaminen',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Voit edelleen tyhjentää tämän kentän olemassa olevan viittauksen, mutta sitä ei voi muuttaa toiseen asiakirjaan niin kauan kuin ominaisuus on poistettu käytöstä.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Tämä ominaisuus on poistettu käytöstä. Lue, miten se otetaan käyttöön <DocumentationLink>dokumentaatiossa</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Saatavilla olematon ominaisuus: Ristiin dataset viittaus',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'Viitattu asiakirja on virheellistä tyyppiä ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Tämä asiakirja avautuu uudessa välilehdessä',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Asiakirja ei ole saatavilla',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Viitatun asiakirjan lataaminen epäonnistui',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'Haku palautti tyypin, joka ei kelpaa tälle viitteelle: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'Viitattu asiakirja (<code>{{documentId}}</code>) on tyyppiä <code>{{actualType}}</code>. Scheman mukaan viitatut asiakirjat voivat olla vain tyyppiä <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Asiakirja virheellistä tyyppiä',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'Viitattuun asiakirjaan ei päästy käsiksi riittämättömien oikeuksien vuoksi',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Riittämättömät oikeudet',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'Viitattua asiakirjaa ei ole olemassa (ID: <code>{{documentId}}</code>). Voit joko poistaa viittauksen tai korvata sen toisella asiakirjalla.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Ei löytynyt',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Tyhjennä',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Viitteen haku epäonnistui',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Viitatun asiakirjan kuvan esikatselu',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> on julkaistu ja tämä viittaus tulisi nyt viimeistellä.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Viimeistele viittaus',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> on julkaistu ja tämä viittaus tulisi nyt muuttaa vahvaksi viittaukseksi.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Muunna vahvaksi viittaukseksi',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Muunna vahvaksi viitteeksi',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Yritä uudelleen',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Viitteen metatietoja ei voitu ladata',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query': 'Ei tuloksia haulle <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Muokattu <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label':
    'Ei julkaisemattomia muokkauksia',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Muokattu',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Ei julkaistu',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Julkaistu',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Ei julkaisemattomia muokkauksia',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Ei julkaistu',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Julkaistu <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'Viitattu asiakirja ei ole enää olemassa ja se on saattanut tulla poistetuksi (asiakirjan ID: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'Viitattua asiakirjaa ei voitu näyttää käyttäjälle riittämättömien oikeuksien vuoksi',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Ratkaistaan alkuperäistä arvoa…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Kirjoita etsiäksesi',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Viitattua asiakirjaa ei voi poistaa ennen tämän viitteen poistamista tai muuttamista heikoksi.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Tämä viite on <em>vahva</em>, mutta nykyisen kaavion mukaan sen pitäisi olla <em>heikko</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Tämä mahdollistaa viitatun asiakirjan poistamisen ennen tämän viitteen poistamista, jättäen tämän kentän viittaamaan olemattomaan asiakirjaan.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Tämä viite on <em>heikko</em>, mutta nykyisen kaavion mukaan sen pitäisi olla <em>vahva</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Muunna vahvaksi viitteeksi',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Viitteen vahvuuden epäjohdonmukaisuus',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Muunna heikoksi viitteeksi',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Luo',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Luodaan…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Lähde puuttuu. Tarkista lähde tyypille {{schemaType}} skeemassa',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Syötä tagi ja paina ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Syötä tagi…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Muunna <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Kohdattiin objektin arvo ilman <code>_type</code> ominaisuutta.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Poista objektin määrittelyn <code>name</code> ominaisuus tai aseta <code>_type</code> ominaisuus kohteille.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Nykyinen arvo (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Seuraavat tyypit ovat kelvollisia tässä skeeman mukaan:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Kehittäjän tiedot',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Ominaisuuden arvo puuttuu <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Poista arvo',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Sinulla ei ole oikeuksia päästä käsiksi tähän ominaisuuteen.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Sinulla ei ole oikeuksia luoda asiakirjaa.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Sinulla ei ole oikeuksia luoda tätä asiakirjaa.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Sinulla ei ole oikeuksia luoda tämän tyyppistä asiakirjaa.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Sinulla ei ole oikeuksia luoda uutta viittausta.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Sinulla ei ole oikeuksia poistaa tätä asiakirjaa.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Sinulla ei ole oikeuksia hylätä muutoksia tässä asiakirjassa.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Sinulla ei ole oikeuksia kopioida tätä asiakirjaa.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Sinulla ei ole oikeuksia julkaista tätä asiakirjaa.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Sinulla ei ole oikeuksia poistaa tämän asiakirjan julkaisua.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Roolisi: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Riittämättömät oikeudet',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Odottamaton virhe: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Luo',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Uusi asiakirja…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Suodata',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Ladataan…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Uusi asiakirja',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Asiakirjatyyppejä ei löytynyt',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Asiakirjatyyppejä ei ole',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Ei tuloksia haulle <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Luo uusi asiakirja',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Luo uusi asiakirja',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Hallitse jäseniä',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Kuka on paikalla',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description': 'Kutsu ihmisiä projektiin nähdäksesi heidän online-tilansa.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Kukaan muu ei ole täällä',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Ei asiakirjassa',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': 'Kuka on täällä',

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Nimetön',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(ei arvoa)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'Kuvaa parhaillaan lähetetään',

  /* Relative time, just now */
  'relative-time.just-now': 'juuri nyt',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Avaa haku',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Lisää suodatin',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Tyhjennä suodattimet',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Tyhjennä viimeisimmät haut',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Tyhjennä valitut suodattimet',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Tyhjennä',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Sulje haku',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Suodata asiakirjatyypin mukaan',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Poista suodatin',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Hae kaikista asiakirjoista',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Etsi kohteita {{types, list}}',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Valitse omaisuuserä',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Valitse tiedosto',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Valitse kuva',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Piilota suodattimet',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Näytä suodattimet',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Piilota suodattimet',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Näytä suodattimet',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Etsi',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Kaikki tyypit',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Asiakirjatyypit',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Ei osumia haulle {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Tämä voi viitata virheellisiin vaihtoehtoihin skeemassasi.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Suodattimen näyttämisessä tapahtui virhe.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Varmista, että se on otettu käyttöön studion konfiguraatiotiedostossasi.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Tällä hetkellä vain oletusomaisuuslähde on tuettu.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Kelpaavia omaisuuslähteitä ei löytynyt.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description': 'Yritä uudelleen tai tarkista yhteytesi',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Hakemisen aikana tapahtui virhe',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Kaikki kentät',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Vaihda tiedostoa',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Vaihda kuvaa',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Tyhjennä',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Valitse tiedosto',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Valitse kuva',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Epätosi',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Tosi',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Suodata otsikon mukaan',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Päivämäärä',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Loppupäivä',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Alkupäivä',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Päivät',
  'search.filter-date-unit_months': 'Kuukaudet',
  'search.filter-date-unit_years': 'Vuodet',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Valitse yksikkö',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Yksikön arvo',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Kentän kuvaus',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Kentän nimi',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Käytetty asiakirjatyypeissä',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Ei osumia kohteelle {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Suurin arvo',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Pienin arvo',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Arvo',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Suodata',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Tyhjennä',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Jaetut kentät',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Arvo',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Valitse…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Suodatin',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Suodattimet',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Käytä <ControlsIcon/> hienosäätääksesi hakua',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Kokeile toista hakusanaa tai säädä suodattimiasi',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Tuloksia ei löytynyt',
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
    '<Field/> <Operator>on</Operator> <Value>{{count}} kohde</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>on</Operator> <Value>{{count}} kohdetta</Value>',
  'search.operator.array-count-equal.name': 'määrä on',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>on ></Operator> <Value>{{count}} kohde</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>on ></Operator> <Value>{{count}} kohdetta</Value>',
  'search.operator.array-count-gt.name': 'määrä suurempi kuin',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>on ≥</Operator> <Value>{{count}} kohde</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>on ≥</Operator> <Value>{{count}} kohdetta</Value>',
  'search.operator.array-count-gte.name': 'määrä suurempi tai yhtä suuri kuin',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>on <</Operator> <Value>{{count}} kohde</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>on <</Operator> <Value>{{count}} kohdetta</Value>',
  'search.operator.array-count-lt.name': 'määrä pienempi kuin',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>on ≤</Operator> <Value>{{count}} kohde</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>on ≤</Operator> <Value>{{count}} kohdetta</Value>',
  'search.operator.array-count-lte.name': 'määrä pienempi tai yhtä suuri kuin',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>ei ole</Operator> <Value>{{count}} kohde</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>ei ole</Operator> <Value>{{count}} kohdetta</Value>',
  'search.operator.array-count-not-equal.name': 'määrä ei ole',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>on välillä</Operator> <Value>{{from}} → {{to}} kohdetta</Value>',
  'search.operator.array-count-range.name': 'määrä on välillä',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>sisältää</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'sisältää',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>ei sisällä</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'ei sisällä',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>sisältää</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'sisältää',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>ei sisällä</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'ei sisällä',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'on',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'ei ole',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'on',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'ei ole',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'on',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>on jälkeen</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'jälkeen',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>on ennen</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'ennen',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'on',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>on viimeisen</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'viimeinen',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'ei ole',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>on välillä</Operator> <Value/>',
  'search.operator.date-range.name': 'on välillä',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>on jälkeen</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'jälkeen',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>on ennen</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'ennen',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'on',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>on viimeisen</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'viimeinen',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'ei ole',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>on välillä</Operator> <Value/>',
  'search.operator.date-time-range.name': 'on välillä',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>on</Operator> <Value>ei tyhjä</Value>',
  'search.operator.defined.name': 'ei tyhjä',
  /* Value should not be defined */
  'search.operator.not-defined.description':
    '<Field/> <Operator>on</Operator> <Value>tyhjä</Value>',
  'search.operator.not-defined.name': 'tyhjä',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'on',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'suurempi kuin',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'suurempi tai yhtä suuri kuin',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'pienempi kuin',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'pienempi tai yhtä suuri kuin',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'ei ole',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>on välillä</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'on välillä',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>sisältää</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'sisältää',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'on',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>ei sisällä</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'ei sisällä',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'ei ole',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'tiedosto',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'kuva',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'asiakirja',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'on',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'ei ole',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>sisältää</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'sisältää',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'on',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>ei sisällä</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'ei sisällä',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'ei ole',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>sisältää</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'sisältää',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'on',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>on</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'on',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'ei ole',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>ei sisällä</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'ei sisällä',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>ei ole</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'ei ole',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Paras osuma',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Luotu: Vanhimmat ensin',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Luotu: Uusimmat ensin',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Päivitetty: Vanhimmat ensin',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Päivitetty: Uusimmat ensin',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Hae',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Viimeisimmät haut',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Viimeisimmät haut',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Hakutulokset',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': 'Konfiguraation tila',

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'Asiakirjan historian transaktioita ei ole vaikuttanut.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title': 'Virhe tapahtui asiakirjan muutosten noutamisessa.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Asiakirjan sisällön muuttamisen yhteydessä asiakirjan versiot ilmestyvät tähän valikkoon.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Ei asiakirjan historiaa',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Versiota ei voi ladata',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Uusin',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Uusin versio',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Asiakirjan versiot',
  /** Label for loading history */
  'timeline.loading-history': 'Ladataan historiaa…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Luotu',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Luotu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Luotu',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Luotu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Poistettu',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Poistettu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Luonnos hylätty',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Luonnos hylätty: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Muokattu',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Muokattu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Muokattu livenä',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Muokattu livenä: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Julkaistu',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Julkaistu: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Julkaisematon',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Julkaisematon: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Alkaen: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Alkaen: tuntematon versio',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': '{{action}}',

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} päivä jäljellä kokeiluajassa',
  'user-menu.action.free-trial_other': '{{count}} päivää jäljellä kokeiluajassa',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Päivitä ilmaisesta',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Kutsu jäseniä',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Kutsu jäseniä',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Hallinnoi projektia',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Hallinnoi projektia',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Ei voi soveltaa {{name}} tyhjään lohkoon',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Ei voi soveltaa {{name}} useisiin lohkoihin',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Kirjaudu ulos',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Ulkoasu',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Sulje valikko',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Käytä tummaa ulkoasua',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Tumma',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Käytä vaaleaa ulkoasua',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Vaalea',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Käytä järjestelmän ulkoasua',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Järjestelmä',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Kieli',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Kirjauduttu sisään palvelun {{providerTitle}} kautta',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': 'Avaa valikko',

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Lisää työtila',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Valitse toinen työtila',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Valitse työtilasi',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Valitse työtila',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Valitse työtila',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': 'Valitse työtila',
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Työtilat',
})
