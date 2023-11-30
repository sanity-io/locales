import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  'relative-time.just-now': 'akkurat nå',
  'calendar.action.go-to-next-month': 'Gå til neste måned',
  'calendar.action.go-to-previous-month': 'Gå til forrige måned',
  'calendar.action.go-to-next-year': 'Gå til neste år',
  'calendar.action.go-to-previous-year': 'Gå til forrige år',
  'calendar.action.set-to-current-time': 'Sett til nå',
  'calendar.action.select-hour': 'Velg time',
  'calendar.action.select-minute': 'Velg minutt',
  'calendar.month-names.january': 'Januar',
  'calendar.month-names.february': 'Februar',
  'calendar.month-names.march': 'Mars',
  'calendar.month-names.april': 'April',
  'calendar.month-names.may': 'Mai',
  'calendar.month-names.june': 'Juni',
  'calendar.month-names.july': 'Juli',
  'calendar.month-names.august': 'August',
  'calendar.month-names.september': 'September',
  'calendar.month-names.october': 'Oktober',
  'calendar.month-names.november': 'November',
  'calendar.month-names.december': 'Desember',
  'calendar.weekday-names.short.monday': 'Man',
  'calendar.weekday-names.short.tuesday': 'Tir',
  'calendar.weekday-names.short.wednesday': 'Ons',
  'calendar.weekday-names.short.thursday': 'Tor',
  'calendar.weekday-names.short.friday': 'Fre',
  'calendar.weekday-names.short.saturday': 'Lør',
  'calendar.weekday-names.short.sunday': 'Søn',
  'calendar.action.go-to-today': 'I dag',
  'calendar.action.go-to-today-aria-label': 'Gå til i dag',
  'calendar.action.go-to-yesterday': 'I går',
  'calendar.action.go-to-tomorrow': 'I morgen',
  'calendar.action.set-to-time-preset': '{{time}} on {{date, datetime}}',
  'calendar.action.include-time-label': 'Med klokkeslett',
  'calendar.error.must-be-in-format': 'Må være i formatet <Emphasis>{{exampleDate}}</Emphasis>',
  'changes.title': 'Se endringer',
  'changes.action.close-label': 'Lukk gjennomgang av endringer',
  'changes.change-bar.aria-label': 'Se endringer',
  'changes.changes-by-author': 'Endringer av',
  'changes.loading-changes': 'Laster endringer…',
  'changes.no-changes-title': 'Det er ingen endringer',
  'changes.no-changes-description':
    'Rediger dokumentet eller velg en eldre versjon i tidslinjen for å se en liste over endringer i dette panelet.',
  'changes.removed-label': 'Fjernet',
  'changes.added-label': 'Lagt til',
  'changes.changed-label': 'Endret',
  'changes.action.revert-all-description': `Er du sikker på at du vil angre alle {{count}} endringer?`,
  'changes.action.revert-all-cancel': `Avbryt`,
  'changes.action.revert-all-confirm': `Angre alle`,
  'changes.loading-author': 'Laster…',
  'changes.array.item-added-in-position': 'Lagt til i posisjon {{position}}',
  'changes.array.item-removed-from-position': 'Fjernet fra posisjon {{position}}',
  'changes.array.item-moved_up_one': 'Flyttet {{count}} posisjon opp',
  'changes.array.item-moved_up_other': 'Flyttet {{count}} posisjoner opp',
  'changes.array.item-moved_down_one': 'Flyttet {{count}} posisjon ned',
  'changes.array.item-moved_down_other': 'Flyttet {{count}} posisjoner ned',
  'changes.portable-text.empty-text_removed': 'Fjernet tomt avsnitt',
  'changes.portable-text.empty-text_added': 'La til tomt avsnitt',
  'changes.portable-text.empty-text_changed': 'Endret tomt avsnitt',
  'changes.portable-text.text_added': 'La til tekst',
  'changes.portable-text.text_removed': 'Fjernet tekst',
  'changes.portable-text.annotation_added': 'La til berikelse',
  'changes.portable-text.annotation_removed': 'Fjernet berikelse',
  'changes.portable-text.annotation_changed': 'Endret berikelse',
  'changes.portable-text.annotation_unchanged': 'Uendret berikelse',
  'changes.portable-text.inline-object_added': 'La til inline objekt',
  'changes.portable-text.inline-object_removed': 'Fjernet inline objekt',
  'changes.portable-text.inline-object_changed': 'Endet inline objekt',
  'changes.portable-text.inline-object_unchanged': 'Uendret inline object',
  'changes.portable-text.changed-formatting': 'Endret formattering',
  'changes.portable-text.block-style-changed':
    'Endret blokkstil fra "{{fromStyle}}" til "{{toStyle}}"',
  'changes.portable-text.unknown-annotation-schema-type': 'Ukjent skjematype',
  'changes.portable-text.unknown-inline-object-schema-type': 'Ukjent skjematype',
  'changes.portable-text.empty-object-annotation': 'Tom {{annotationType}}',
  'changes.portable-text.empty-inline-object': 'Tom {{inlineObjectType}}',
  'changes.file.meta-info-fallback-title': 'Navnløs fil',
  'changes.image.crop-changed': 'Beskjæring endret',
  'changes.image.hotspot-changed': 'Fokuspunkt endret',
  'changes.image.no-asset-set': 'Bilde ikke satt',
  'changes.image.no-image-placeholder': '(ingen bilde)',
  'changes.image.meta-info-fallback-title': 'Navnløst bilde',
  'changes.image.deleted': 'Bilde slettet',
  'changes.image.error-loading-image': 'Feil under lasting av bilde',
  'changes.action.revert-changes-description': `Er du sikker på at du vil angre endringene?`,
  'changes.action.revert-changes-description_one': `Er du sikker på at du vil angre endringen?`,
  'changes.action.revert-changes-confirm-change_one': `Angre endring`,
  'changes.action.revert-changes-confirm-change_other': `Angre endringer`,
  'changes.error-boundary.title': 'En feil oppsto under visning av endringer',
  'changes.error-boundary.developer-info':
    'Sjekk konsollen i utviklerverktøyet for mer informasjon',
  'changes.inspector.meta-label': 'Meta',
  'changes.inspector.from-label': 'Fra',
  'changes.inspector.to-label': 'Til',
  'changes.error.incorrect-type-message':
    'Verdifeil: Vedien har typen «<code>{{actualType}}</code>», forventet «<code>{{expectedType}}</code>»',
  'timeline.error.unable-to-load-revision': 'Kan ikke laste revisjon',
  'timeline.latest-version': 'Siste versjon',
  'timeline.loading-history': 'Laster historikk…',
  'timeline.list.aria-label': 'Dokumentrevisjoner',
  'timeline.since': 'Siden: {{timestamp, datetime}}',
  'timeline.since-version-missing': 'Siden: ukjent versjon',
  'timeline.error.load-document-changes-title':
    'En feil oppstod under henting av dokumentendringer.',
  'timeline.error.load-document-changes-description': 'Historikk har ikke blitt påvirket.',
  'timeline.error.no-document-history-title': 'Ingen historikk',
  'timeline.error.no-document-history-description':
    'Når du endrer innholdet i dokumentet, vil dokumentversjonene vises i denne menyen.',
  'timeline.latest': 'Siste',
  'timeline.create': 'Opprettet',
  'timeline.delete': 'Slettet',
  'timeline.discardDraft': 'Utkast forkastet',
  'timeline.initial': 'Opprettet',
  'timeline.editDraft': 'Redigert',
  'timeline.editLive': 'Live redigert',
  'timeline.publish': 'Publisert',
  'timeline.unpublish': 'Avpublisert',
  'inputs.slug.error.missing-source':
    'Kilde mangler. Sjekk `source` på skjematypen «{{schemaType}}»',
  'inputs.slug.action.generating': `Genererer…`,
  'inputs.slug.action.generate': `Generer`,
  'inputs.image.actions-menu.edit-details.aria-label': 'Åpne bilderedigeringsdialog',
  'inputs.image.actions-menu.options.aria-label': 'Åpne bildeinnstillingsmeny',
  'inputs.file.actions-menu.file-options.aria-label': 'Åpne filinnstillingsmeny',
  'inputs.image.actions-menu.crop-image-tooltip': 'Beskjær bilde',
  'inputs.image.upload-error.description':
    'Opplastingen kunne ikke fullføres på dette tidspunktet.',
  'inputs.image.upload-error.title': 'Opplasting mislyktes',
  'inputs.image.hotspot-dialog.title': 'Rediger fokuspunkt og beskjær',
  'inputs.image.preview-uploaded-image': 'Forhåndsvisning av opplastet bilde',
  'inputs.image.drag-overlay.cannot-upload-here': 'Kan ikke laste opp denne filen her',
  'inputs.image.drag-overlay.this-field-is-read-only': 'Dette feltet er skrivebeskyttet',
  'inputs.image.drag-overlay.drop-to-upload-image': 'Slipp bilde for å laste opp',
  'inputs.image.invalid-image-warning.title': 'Ugyldig bildeverdi',
  'inputs.image.invalid-image-warning.description':
    'Verdien i dette feltet er ikke et gyldig bilde. Ved å tilbakestille dette feltet kan du velge et nytt bilde.',
  'inputs.image.invalid-image-warning.reset-button.text': 'Nullstill verdi',
  'inputs.image.browse-menu.text': 'Velg',
  'inputs.image.error.unknown-member-kind': 'Ukjent medlemstype: {{kind}}',
  'inputs.files.common.actions-menu.notification.url-copied':
    'URL-en er kopiert til utklippstavlen',
  'inputs.files.common.actions-menu.replace.label': 'Erstatt',
  'inputs.files.common.actions-menu.upload.label': 'Last opp',
  'inputs.files.common.actions-menu.download.label': 'Last ned',
  'inputs.files.common.actions-menu.copy-url.label': 'Kopier URL',
  'inputs.files.common.actions-menu.clear-field.label': 'Tøm felt',
  'inputs.files.common.placeholder.upload-not-supported': 'Kan ikke laste opp filer her',
  'inputs.files.common.placeholder.read-only': 'Skrivebeskyttet',
  'inputs.files.common.placeholder.drop-to-upload_file': 'Slipp for å laste opp fil',
  'inputs.files.common.placeholder.drop-to-upload_image': 'Slipp for å laste opp bilde',
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Kan ikke laste opp fil',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Kan ikke laste opp {{count}} filer',
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Dra eller lim inn fil her',
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Dra eller lim inn bilde her',
  'inputs.files.common.drop-message.drop-to-upload': 'Slipp for å laste opp',
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Slipp for å laste opp {{count}} fil',
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Slipp for å laste opp {{count}} filer',
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one': `{{count}} fil kan ikke bli lastet opp her`,
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other': `{{count}} filer kan ikke bli lastet opp her`,
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one': `Kan ikke laste opp denne filen her`,
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other': `Kan ikke laste opp noen av disse filene her`,
  'input.files.common.upload-progress': 'Laster opp <FileName/>',
  'input.files.common.upload-placeholder.file-input-button.text': 'Last opp',
  'inputs.files.common.stale-upload-warning.title': 'Ufullstendig opplasting',
  'inputs.files.common.stale-upload-warning.description':
    'En opplasting har ikke gjort fremskritt på minst {{staleThresholdMinutes}} minutter og ble sannsynligvis avbrutt. Du kan trygt fjerne den ufullstendige opplastingen og prøve å laste opp på nytt.',
  'inputs.files.common.stale-upload-warning.clear': 'Fjern opplasting',
  'inputs.imagetool.title': 'Fokuspunkt & beskjæring',
  'inputs.imagetool.description':
    'Juster rektangelet for å beskjære bildet. Juster sirkelen for å spesifisere området som alltid skal være synlig.',
  'inputs.imagetool.loading': 'Laster bilde…',
  'inputs.imagetool.load-error': 'Feil: {{errorMessage}}',
  'inputs.file.dialog.title': 'Velg fil',
  'inputs.file.browse-button.text': 'Bla gjennom',
  'inputs.file.multi-browse-button.text': 'Velg',
  'inputs.file.error.unknown-member-kind': 'Ukjent medlemstype: {{kind}}',
  'inputs.file.invalid-file-warning.title': 'Ugyldig filverdi',
  'inputs.file.invalid-file-warning.description':
    'Verdien i dette feltet er ikke en gyldig fil. Ved å nullstille verdien vil du kunne velge en ny fil.',
  'inputs.file.invalid-file-warning.reset-button.text': 'Nullstill verdi',
  'inputs.file.upload-failed.description': 'Opplastingen kunne ikke fullføres akkurat nå.',
  'inputs.file.upload-failed.title': 'Opplasting mislykkes',
  'inputs.reference.error.search-failed-title': `Referansesøk mislyktes`,
  'inputs.reference.error.nonexistent-document-title': 'Ikke funnet',
  'inputs.reference.error.nonexistent-document-description': `Det refererte dokumentet eksisterer ikke (ID: <code>{{documentId}}</code>). Du kan enten fjerne referansen eller erstatte den med et annet dokument.`,
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Tøm',
  'inputs.reference.error.failed-to-load-document-title': 'Kunne ikke laste referert dokument',
  'inputs.reference.error.missing-read-permissions-title': 'Manglende tillatelser',
  'inputs.reference.error.missing-read-permissions-description':
    'Det refererte dokumentet kunne ikke åpnes på grunn av manglende tillatelser',
  'inputs.reference.error.document-unavailable-title': 'Dokument ikke tilgjengelig',
  'inputs.reference.error.invalid-search-result-type-title': `Søket returnerte en type som ikke er gyldig for denne referansen: "{{returnedType}}"`,
  'inputs.reference.error.invalid-type-title': 'Dokument av ugyldig type',
  'inputs.reference.error.invalid-type-description': `Referert dokument (<code>{{documentId}}</code>) er av type <code>{{actualType}}</code>. Ifølge skjemaet kan refererte dokumenter bare være av type <AllowedTypes />.`,
  'inputs.reference.search-placeholder': 'Skriv for å søke',
  'inputs.reference.no-results-for-query': 'Ingen resultater for <strong>«{{searchTerm}}»</strong>',
  'inputs.reference.action.create-new-document': 'Opprett ny',
  'inputs.reference.action-create-new-document-select': 'Opprett ny…',
  'inputs.reference.action.clear': 'Tøm',
  'inputs.reference.action.replace': 'Erstatt',
  'inputs.reference.action.remove': 'Fjern',
  'inputs.reference.action.duplicate': 'Dupliser',
  'inputs.reference.action.replace-cancel': 'Avbryt erstatning',
  'inputs.reference.action.open-in-new-tab': 'Åpne i ny fane',
  'inputs.reference.preview.published-at-time': 'Publisert <RelativeTime/>',
  'inputs.reference.preview.not-published': 'Ikke publisert',
  'inputs.reference.preview.is-published-aria-label': 'Publisert',
  'inputs.reference.preview.is-not-published-aria-label': 'Ikke publisert',
  'inputs.reference.preview.edited-at-time': 'Redigert <RelativeTime/>',
  'inputs.reference.preview.no-unpublished-edits': 'Ingen upubliserte endringer',
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Redigert',
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Ingen upubliserte endringer',
  'inputs.reference.incomplete-reference.finalize-action-title': 'Fullfør referanse',
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> er publisert og denne referansen bør nå fullføres.',
  'inputs.reference.incomplete-reference.strengthen-action-title': 'Gjør om til sterk referanse',
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> er publisert og denne referansen bør nå gjøres om til en sterk referanse.',
  'inputs.reference.incomplete-reference.strengthen-button-label': 'Gjør om til sterk referanse',
  'inputs.reference.strength-mismatch.title': 'Avvik i referansestyrke',
  'inputs.reference.strength-mismatch.is-strong-description':
    'Denne referansen er <em>sterk</em>, men ifølge gjeldende skjema skal den være <em>svak</em>.',
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Det vil ikke være mulig å slette det refererte dokumentet uten først å fjerne denne referansen eller gjøre den om til en svak referanse.',
  'inputs.reference.strength-mismatch.is-weak-description':
    'Denne referansen er <em>svak</em>, men ifølge gjeldende skjema skal den være <em>sterk</em>.',
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Dette gjør det mulig å slette det refererte dokumentet uten å først fjerne denne referansen, noe som etterlater dette feltet som en tom peker.',
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Gjør om til sterk referanse',
  'inputs.reference.strength-mismatch.weaken-button-label': 'Gjør om til svak referanse',
  'inputs.reference.metadata-error.title': 'Kan ikke laste metadata for referansen',
  'inputs.reference.metadata-error.retry-button-label': 'Prøv på nytt',
  'inputs.reference.resolving-initial-value': 'Finner startverdi…',
  'inputs.reference.image-preview-alt-text': 'Forhåndsvisning av referert dokument',
  'inputs.reference.referenced-document-does-not-exist':
    'Det refererte dokumentet finnes ikke lenger og kan være slettet (dokument-ID: <code>{{documentId}}</code>).',
  'inputs.reference.referenced-document-insufficient-permissions':
    'Det refererte dokumentet kunne ikke lastes på grunn av manglende tilgang',
  'inputs.reference.document-opens-in-new-tab': 'Dokumentet åpnes i ny fane',
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Dokumentet kan ikke åpnes (kunne ikke finne URL til Studio)',
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Funksjon utilgjengelig: Referanser på tvers av datasett',
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Denne funksjonen har blitt deaktivert. Les hvordan den kan reaktivere den <DocumentationLink>i dokumentasjonen</DocumentationLink>.',
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Du kan fremdeles tømme feltets referanse, men det kan ikke endres til et annet dokument så lenge funksjonen er deaktivert.',
  'inputs.reference.cross-dataset.invalid-type':
    'Det referte dokumentet har ugyldig type ({{typeName}}) <JsonValue/>',
  'inputs.array.no-items-label': 'Ingen elementer',
  'inputs.array.resolving-initial-value': 'Finner startverdi…',
  'inputs.array.read-only-label': 'Dette feltet er skrivebeskyttet',
  'inputs.array.action.remove': 'Fjern',
  'inputs.array.action.remove-invalid-item': 'Fjern',
  'inputs.array.action.duplicate': 'Dupliser',
  'inputs.array.action.view': 'Se {{itemTypeTitle}}',
  'inputs.array.action.edit': 'Rediger {{itemTypeTitle}}',
  'inputs.array.action.add-item': 'Legg til',
  'inputs.array.action.add-item-select-type': 'Legg til...',
  'inputs.array.action.add-before': 'Legg til før',
  'inputs.array.action.add-after': 'Legg til etter',
  'inputs.array.error.unexpected-error': `Uventet feil: {{error}}`,
  'inputs.array.error.type-is-incompatible-title': 'Hvorfor skjer dette?',
  'inputs.array.error.type-is-incompatible-prompt': `Typen <code>{{typeName}}</code> er ikke gyldig for denne listen`,
  'inputs.array.error.current-schema-not-declare-description':
    'Den nåværende skjemaet erklærer ikke typen <code>{{typeName}}</code> som gyldig for denne listen. Dette kan bety at typen har blitt fjernet som en gyldig type, eller at noen andre har lagt den til i sitt eget lokale skjema som ennå ikke er distribuert.',
  'inputs.array.error.can-delete-but-no-edit-description':
    'Du kan fortsatt flytte eller slette dette elementet, men det kan ikke redigeres siden skjemadefinisjonen for typen ikke finnes.',
  'inputs.array.error.json-representation-description': 'JSON-representasjon av dette elementet:',
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'Følgende element kan ikke lastes opp fordi det ikke finnes noen kjent konvertering fra innholdstypen til element i listen:',
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Følgende elementer kan ikke lastes opp fordi det ikke finnes noen kjent konvertering fra innholdstypene til element i listen:',
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Kan ikke finne startverdi for type: {{schemaTypeTitle}}: {{errorMessage}}.',
  'inputs.object.unknown-fields.warning.title_one': 'Ukjent felt funnet',
  'inputs.object.unknown-fields.warning.title_other': 'Ukjente felter funnet',
  'inputs.object.unknown-fields.warning.description_one':
    'Møtte på {{count}} felt som ikke er definert i skjemaet.',
  'inputs.object.unknown-fields.warning.description_other':
    'Møtte på {{count}} felter som ikke er definert i skjemaet.',
  'inputs.object.unknown-fields.warning.details.title': 'Utviklerinfo',
  'inputs.object.unknown-fields.warning.details.description_one':
    'Dette feltet er ikke definert i dokumentets skjema, noe som kan bety at feltdefinisjonen har blitt fjernet eller at noen andre har lagt det til i sitt eget lokale prosjekt og ennå ikke har distribuert endringene sine.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Disse feltene er ikke definert i dokumentets skjema, noe som kan bety at feltdefinisjonene har blitt fjernet eller at noen andre har lagt dem til i sitt eget lokale prosjekt og ennå ikke har distribuert endringene sine.',
  'inputs.object.unknown-fields.read-only.description':
    'Dette feltet er markert som <strong>skrivebeskyttet</strong> i skjemadefinisjonen, og kan ikke bli nullstillt. Hvis du ønsker å kunne fjerne verdien i studioet, må <code>readOnly</code> innstillingen fjernes eller settes til <code>false</code> i feltdefinisjonen.',
  'inputs.object.unknown-fields.remove-field-button.text': 'Fjern felt',
  'inputs.object.field-group-tabs.aria-label': 'Feltgrupper',
  'inputs.portable-text.empty-placeholder': 'Tom',
  'inputs.portable-text.action.collapse-editor': 'Reduser',
  'inputs.portable-text.action.expand-editor': 'Utvid',
  'inputs.portable-text.action.edit-annotation': 'Rediger merknad',
  'inputs.portable-text.action.remove-annotation': 'Fjern merknad',
  'inputs.portable-text.action.insert-inline-object': 'Sett inn {{typeName}}',
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Sett inn {{typeName}} (i linjen)',
  'inputs.portable-text.action.insert-block': 'Sett inn {{typeName}}',
  'inputs.portable-text.action.insert-block-aria-label': 'Sett inn {{typeName}} (blokk)',
  'inputs.portable-text.block.open-menu-aria-label': 'Åpne meny',
  'inputs.portable-text.block.open-reference': 'Åpne referanse',
  'inputs.portable-text.block.view': 'Vis',
  'inputs.portable-text.block.edit': 'Rediger',
  'inputs.portable-text.block.remove': 'Fjern',
  'inputs.portable-text.inline-object.edit': 'Rediger objekt',
  'inputs.portable-text.inline-object.remove': 'Fjern objekt',
  'inputs.portable-text.annotation-editor.title': 'Rediger {{schemaType}}',
  'inputs.portable-text.list-type.bullet': 'Punktliste',
  'inputs.portable-text.list-type.number': 'Nummerert liste',
  'inputs.portable-text.style.normal': 'Normal',
  'inputs.portable-text.style.h1': 'Overskrift 1',
  'inputs.portable-text.style.h2': 'Overskrift 2',
  'inputs.portable-text.style.h3': 'Overskrift 3',
  'inputs.portable-text.style.h4': 'Overskrift 4',
  'inputs.portable-text.style.h5': 'Overskrift 5',
  'inputs.portable-text.style.h6': 'Overskrift 6',
  'inputs.portable-text.style.quote': 'Sitat',
  'inputs.portable-text.style.none': 'Ingen stil',
  'inputs.portable-text.style.multiple': 'Flere',
  'inputs.portable-text.decorator.strong': 'Fet',
  'inputs.portable-text.decorator.emphasis': 'Kursiv',
  'inputs.portable-text.decorator.code': 'Kode',
  'inputs.portable-text.decorator.underline': 'Understreket',
  'inputs.portable-text.decorator.strike-through': 'Gjennomstreket',
  'inputs.portable-text.annotation.link': 'Lenke',
  'inputs.portable-text.invalid-value.title': 'Ugyldig verdi',
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorer',
  'inputs.portable-text.invalid-value.action-disclaimer':
    'MERK: Det er generelt sett trygt å utføre handlingen over, men om du er i tvil, ta kontakt med de som er ansvarlige for konfigurasjon av studioet.',
  'inputs.portable-text.invalid-value.not-an-array.description':
    'Verdien må være et array av Portable Text-blokker, eller undefined.',
  'inputs.portable-text.invalid-value.not-an-array.action': 'Nullstill',
  'inputs.portable-text.invalid-value.not-an-object.description':
    'Elementet med posisjon <code>{{index}}</code> er ikke et objekt.',
  'inputs.portable-text.invalid-value.not-an-object.action': 'Fjern elementet',
  'inputs.portable-text.invalid-value.missing-key.description':
    'Blokken med posisjon <code>{{index}}</code> mangler den nødvendige <code>_key</code>-attributten.',
  'inputs.portable-text.invalid-value.missing-key.action': 'Sett tilfeldig nøkkel',
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'Blokk med nøkkel <code>{{key}}</code> har et ugyldig typenavn. Ifølge skjemaet skal det være <code>{{expectedTypeName}}</code>.',
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Bruk type <code>{{expectedTypeName}}</code>',
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'Blokk med nøkkel <code>{{key}}</code> mangler et typenavn. Ifølge skjemaet skal det være <code>{{expectedTypeName}}</code>.',
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Bruk type <code>{{expectedTypeName}}</code>',
  'inputs.portable-text.invalid-value.missing-type.description':
    'Blokk med nøkkel <code>{{key}}</code> mangler et typenavn.',
  'inputs.portable-text.invalid-value.missing-type.action': 'Fjern blokken',
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'Blokk med nøkkel <code>{{key}}</code> er av typen <code>{{typeName}}</code>, som ikke er tillatt av skjemaet.',
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Fjern blokken',
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har en ugyldig eller manglende <code>children</code>-attributt.',
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Fjern blokken',
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har en ugyldig eller manglende <code>markDefs</code>-attributt.',
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Legg til attributt',
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> inneholder merknader <code>({{orphanedMarks, list}})</code> som ikke er tillatt av skjemaet.',
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Fjern ugyldige merknader',
  'inputs.portable-text.invalid-value.empty-children.description':
    'Tekstblokk med nøkkel <code>{{key}}</code> har ingen <code>text</code>-attributt.',
  'inputs.portable-text.invalid-value.empty-children.action': 'Sett inn tomt tekstfelt',
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Element med posisjon <code>{{index}}</code> i blokk med nøkkel <code>{{key}}</code> er ikke et objekt.',
  'inputs.portable-text.invalid-value.non-object-child.action': 'Fjern elementet',
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Element med posisjon <code>{{index}}</code> i blokk med nøkkel <code>{{key}}</code> mangler <code>_key</code>-attributten.',
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Sett tilfeldig nøkkel',
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Element med nøkkel <code>{{childKey}} i blokk med nøkkel <code>{{key}}</code> mangler <code>_type</code>-attributten.',
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Fjern objektet',
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Element med nøkkel <code>{{childKey}} i blokk med nøkkel <code>{{key}}</code> er av typen <code>{{childType}}</code>, som ikke er tillatt av skjemaet.',
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Fjern objektet',
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Element med nøkkel <code>{{childKey}} i blokk med nøkkel <code>{{key}}</code> har en manglende eller ugyldig <code>text</code>-attributt.',
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Nullstill tekst',
  'inputs.invalid-value.reset-button.text': 'Nullstill verdi',
  'inputs.invalid-value.title': 'Ugyldig verdi',
  'inputs.invalid-value.details.title': 'Utviklerinfo',
  'inputs.invalid-value.description':
    'Verdien til dette feltet er lagret som en verdi som ikke samsvarer med den forventede typen.',
  'inputs.invalid-value.details.description':
    'Verdien av dette feltet må være av typen <code>{{validType}}</code> i henhold til skjemaet.',
  'inputs.invalid-value.details.possible-reason':
    'Denne typen feil oppstår vanligvis når skjemaet nylig har blitt endret.',
  'inputs.invalid-value.details.multi-type-description':
    'Bare følgende typer er gyldige her i henhold til skjemaet:',
  'inputs.invalid-value.current-type': 'Den nåværende verdien (<code>{{actualType}}</code>)',
  'inputs.invalid-value.convert-button.text': 'Konverter til <code>{{targetType}}</code>',
  'inputs.untyped-value.convert-button.text': 'Konverter til <code>{{targetType}}</code>',
  'inputs.untyped-value.unset-item-button.text': 'Fjern verdi',
  'inputs.untyped-value.title': 'Verdi mangler <code>_type</code>',
  'inputs.untyped-value.details.title': 'Utviklerinfo',
  'inputs.untyped-value.description': 'Møtte på en objektverdi uten <code>_type</code>-attributt.',
  'inputs.untyped-value.details.description':
    'Enten fjern <code>name</code>-attributtet fra objektdefinisjonen, eller sett <code>_type</code>-attributtet på elementene.',
  'inputs.untyped-value.details.multi-type-description':
    'Følgende typer er gyldige her i henhold til skjemaet:',
  'inputs.untyped-value.details.json-dump-prefix': 'Nåværende verdi (<code>object</code>):',
  'member-field-error.unexpected-error': 'Uforventet feil: {{error}}',
  'form.error.mixed-array-alert.remove-button.text': 'Fjern verdier som ikke er objekter',
  'form.error.mixed-array-alert.title': 'Ugyldig listeverdier',
  'form.error.mixed-array-alert.summary':
    'Noen elementer i denne listen er ikke objekter. Dette må fikses før du kan redigere listen.',
  'form.error.mixed-array-alert.details.title': 'Utviklerinfo',
  'form.error.mixed-array-alert.details.description':
    'Dette kan skje når elementer er laget gjennom en API-klient, eller ved bruk av en tilpasset/ikke-standard input-komponent som har lagt til ugyldig data i listen.',
  'form.error.missing-keys-alert.add-button.text': 'Legg til manglende nøkler',
  'form.error.missing-keys-alert.title': 'Manglende nøkler',
  'form.error.missing-keys-alert.summary':
    'Noen element i listen mangler nøkler. Dette må rettes før listen kan redigeres.',
  'form.error.missing-keys-alert.details.title': 'Utviklerinfo',
  'form.error.missing-keys-alert.details.description':
    'Dette kan skje når elementer er laget gjennom en API-klient, og <code>_key</code>-attributten ikke har blitt satt.',
  'form.error.missing-keys-alert.details.additional-description':
    'Verdien av <code>_key</code>-attributten må være en unik strengverdi.',
  'form.error.duplicate-keys-alert.generate-button.text': 'Lag unike nøkler',
  'form.error.duplicate-keys-alert.title': 'Ikke-unike nøkler',
  'form.error.duplicate-keys-alert.summary':
    'Flere elementer i listen deler sammen nøkkel. Hvert element må ha en unik nøkkel.',
  'form.error.duplicate-keys-alert.details.title': 'Utviklerinfo',
  'form.error.duplicate-keys-alert.details.description':
    'Dette kan skje når elementer er laget gjennom en API-klient, og <code>_key</code>-attributten på de ulike elementene har blitt laget uten å ta unikhet i betraktning.',
  'form.error.duplicate-keys-alert.details.additional-description':
    'Verdien av <code>_key</code>-attributten må være en unik strengverdi.',
  'form.field.untitled-field-label': 'Uten navn',
  'form.field.untitled-fieldset-label': 'Uten navn',
  'form.error.no-array-item-at-key':
    'Ingen element med `_key` <code>"{{key}}"</code> funnet i stien <code>{{path}}</code>',
  'form.error.no-array-item-at-index':
    'Ingen element med posisjon <code>{{index}}</code> funnet i stien <code>{{path}}</code>',
  'form.error.field-not-found': `Feltet "{{fieldName}}" ble ikke funnet som mulighet – sjekk at det er definert i skjemaet, og at det ikke er skjult.`,
  'form.validation.has-error-aria-label': 'Har feil',
  'form.validation.has-warning-aria-label': 'Har advarsel',
  'form.validation.has-info-aria-label': 'Har informasjon',
  'form.validation.summary.errors-count_one': '{{count}} feil',
  'form.validation.summary.errors-count_other': '{{count}} feil',
  'form.validation.summary.warnings-count_one': '{{count}} advarsel',
  'form.validation.summary.warnings-count_other': '{{count}} advarsler',
  'asset-source.image.title': 'Opplastede bilder',
  'asset-source.file.title': 'Opplastede filer',
  'asset-source.dialog.default-title_file': 'Velg fil',
  'asset-source.dialog.default-title_image': 'Velg bilde',
  'asset-source.dialog.load-more': 'Last inn flere',
  'asset-source.dialog.accept-message':
    'Viser kun media av godkjente typer: <strong>{{acceptTypes}}</strong>',
  'asset-source.dialog.no-assets_image': 'Ingen bilder',
  'asset-source.dialog.no-assets_file': 'Ingen filer',
  'asset-source.asset-list.menu.show-usage': 'Vis bruk',
  'asset-source.asset-list.menu.delete': 'Slett',
  'asset-source.usage-list.documents-using-image_named_zero':
    'Ingen dokumenter bruker bildet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_one':
    'Ett dokument bruker bildet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} dokumenter bruker bildet <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Ingen dokumenter bruker dette bildet',
  'asset-source.usage-list.documents-using-image_unnamed_one': 'Ett dokument bruker dette bildet',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} dokumenter bruker dette bildet',
  'asset-source.usage-list.documents-using-file_named_zero':
    'Ingen dokumenter bruker filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_one':
    'Ett dokument bruker filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} dokumenter bruker filen <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Ingen dokumenter bruker denne filen',
  'asset-source.usage-list.documents-using-file_unnamed_one': 'Ett dokument bruker denne filen',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} dokumenter bruker denne filen',
  'asset-source.asset-usage-dialog.header_image': 'Dokumenter som bruker bildet',
  'asset-source.asset-usage-dialog.header_file': 'Dokumenter som bruker filen',
  'asset-source.asset-usage-dialog.loading': 'Laster…',
  'asset-source.delete-dialog.header_image': 'Slett bilde',
  'asset-source.delete-dialog.header_file': 'Slett fil',
  'asset-source.delete-dialog.loading': 'Laster…',
  'asset-source.delete-dialog.action.cancel': 'Avbryt',
  'asset-source.delete-dialog.action.delete': 'Slett',
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} kan ikke slettes fordi det er i bruk. For å slette denne filen må du først fjerne all bruk av den.',
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Denne filen kan ikke slettes fordi den er i bruk. For å slette må du først fjerne all bruk av den.',
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} kan ikke slettes fordi det er i bruk. For å slette dette bildet må du først fjerne all bruk av det.',
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Dette bildet kan ikke slettes fordi det er i bruk. For å slette må du først fjerne all bruk av det.',
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Forhåndsvisning av bildet',
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Du er i ferd med å slette filen <strong>{{filename}}}</strong> med tilhørende metadata. Er du sikker?',
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Du er i ferd med å slette filen med tilhørende metadata. Er du sikker?',
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Du er i ferd med å slette bildet <strong>{{filename}}</strong> med tilhørende metadata. Er du sikker?',
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Du er i ferd med å slette bildet og tilhørende metadata. Er du sikker?',
  'asset-source.image.asset-list.delete-successful': 'Bildet slettet',
  'asset-source.image.asset-list.delete-failed': 'Bildet kunne ikke bli slettet',
  'asset-source.file.asset-list.header.filename': 'Filnavn',
  'asset-source.file.asset-list.header.size': 'Størrelse',
  'asset-source.file.asset-list.header.type': 'Type',
  'asset-source.file.asset-list.header.date-added': 'Dato lagt til',
  'asset-source.file.asset-list.action.select-file.title': 'Velg filen {{filename}}',
  'asset-source.file.asset-list.action.delete.text': 'Slett',
  'asset-source.file.asset-list.action.delete.title': 'Slett fil',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Kan ikke slette nåværende valgt fil',
  'asset-source.file.asset-list.delete-successful': 'Fil slettet',
  'asset-source.file.asset-list.delete-failed': 'Fil kunne ikke bli slettet',
  'workspaces.title': 'Arbeidsområder',
  'workspaces.select-workspace-aria-label': 'Velg arbeidsområde',
  'workspaces.select-workspace-label': 'Velg arbeidsområde',
  'workspaces.choose-your-workspace-label': 'Velg ditt arbeidsområde',
  'workspaces.action.choose-another-workspace': 'Velg et annet arbeidsområde',
  'workspaces.action.add-workspace': 'Legg til arbeidsområde',
  'new-document.filter-placeholder': 'Filtrér',
  'new-document.loading': 'Laster…',
  'new-document.title': 'Opprett nytt dokument',
  'new-document.open-dialog-aria-label': 'Opprett nytt dokument',
  'new-document.no-document-types-label': 'Ingen dokumenttyper',
  'new-document.create-new-document-label': 'Nytt dokument…',
  'new-document.no-results': 'Ingen resultater for <strong>«{{searchQuery}}»</strong>',
  'new-document.no-document-types-found': 'Ingen dokumenttyper funnet',
  'new-document.new-document-aria-label': 'Nytt dokument',
  'search.placeholder': 'Søk',
  'search.action-open-aria-label': 'Åpne søk',
  'search.search-results-aria-label': 'Søkeresultater',
  'search.recent-searches-aria-label': 'Nylige søk',
  'search.recent-searches-label': 'Nylige søk',
  'search.action.clear-filters': 'Fjern filtre',
  'search.action.filter-by-document-type-aria-label': 'Filtrer etter dokumenttype',
  'search.filters-aria-label_one': 'Filter',
  'search.filters-aria-label_other': 'Filtre',
  'search.filter-placeholder': 'Filtrer',
  'search.filter-no-matches-found': `Ingen treff for «{{filter}}»`,
  'search.document-types-aria-label': 'Dokumenttyper',
  'search.document-types-no-matches-found': 'Ingen dokumenttyper funnet',
  'search.ordering.best-match-label': 'Beste treff',
  'search.ordering.created-ascending-label': 'Opprettet: Eldste først',
  'search.ordering.created-descending-label': 'Opprettet: Nyeste først',
  'search.ordering.updated-ascending-label': 'Oppdatert: Eldste først',
  'search.ordering.updated-descending-label': 'Oppdatert: Nyeste først',
  'search.action.clear-type-filters-aria-label': 'Fjern valgte filtre',
  'search.action.clear-type-filters-label': 'Fjern',
  'search.action.remove-filter-aria-label': 'Fjern filter',
  'search.action.add-filter': 'Legg til filter',
  'search.filter-by-title-aria-label': 'Filtrer etter tittel',
  'search.filter-field-tooltip-name': 'Feltnavn',
  'search.filter-field-tooltip-description': 'Feltbeskrivelse',
  'search.filter-field-tooltip-used-in-document-types': 'Brukt i dokumenttyper',
  'search.filter-all-fields-header': 'Alle felter',
  'search.filter-shared-fields-header': 'Delte felter',
  'search.filter-boolean-true': 'Sant',
  'search.filter-boolean-false': 'Usant',
  'search.filter-string-value-placeholder': 'Verdi',
  'search.filter-number-value-placeholder': 'Verdi',
  'search.filter-number-min-value-placeholder': 'Minimumverdi',
  'search.filter-number-max-value-placeholder': 'Maksverdi',
  'search.filter-string-value-select-predefined-value': 'Velg…',
  'search.filter-asset-clear': 'Fjern',
  'search.filter-asset-change_image': 'Bytt bilde',
  'search.filter-asset-change_file': 'Bytt fil',
  'search.filter-asset-select_image': 'Velg bilde',
  'search.filter-asset-select_file': 'Velg fil',
  'search.filter-reference-clear': 'Fjern',
  'search.filter-date-range-start-date-aria-label': 'Fra dato',
  'search.filter-date-range-end-date-aria-label': 'Til dato',
  'search.filter-date-value-aria-label': 'Enhetsverdi',
  'search.filter-date-unit-aria-label': 'Velg enhet',
  'search.filter-date-aria-label': 'Dato',
  'search.filter-date-unit_days': 'Dager',
  'search.filter-date-unit_months': 'Måneder',
  'search.filter-date-unit_years': 'År',
  'search.operator.array-count-equal.name': 'antall er',
  'search.operator.array-count-equal.description_one':
    '<Field/> <Operator>har</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>har</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-gt.name': 'antall større enn',
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>har ></Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-gte.name': 'antall større enn eller lik',
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>har ≥</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-lt.name': 'antall mindre enn',
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>har <</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-lte.name': 'antall mindre enn eller lik',
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>har ≤</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-not-equal.name': 'antall er ikke',
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>antall er ikke</Operator> <Value>{{count}} element</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>antall er ikke</Operator> <Value>{{count}} elementer</Value>',
  'search.operator.array-count-range.name': 'antall er mellom',
  'search.operator.array-count-range.description':
    '<Field/> <Operator>har mellom</Operator> <Value>{{from}} → {{to}} elementer</Value>',
  'search.operator.array-list-includes.name': 'inneholder',
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'inneholder ikke',
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inneholder',
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'inneholder ikke',
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'er',
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'er ikke',
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'er',
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'er ikke',
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'er',
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'etter',
  'search.operator.date-after.description':
    '<Field/> <Operator>er etter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'før',
  'search.operator.date-before.description':
    '<Field/> <Operator>er før</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'er',
  'search.operator.date-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'siste',
  'search.operator.date-last.description':
    '<Field/> <Operator>er innenfor siste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'er ikke',
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.date-range.name': 'er mellom',
  'search.operator.date-range.description': '<Field/> <Operator>er mellom</Operator> <Value/>',
  'search.operator.date-time-after.name': 'etter',
  'search.operator.date-time-after.description':
    '<Field/> <Operator>er etter</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'før',
  'search.operator.date-time-before.description':
    '<Field/> <Operator>er før</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'er',
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'siste',
  'search.operator.date-time-last.description':
    '<Field/> <Operator>er innenfor siste</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'er ikke',
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-range.name': 'er mellom',
  'search.operator.date-time-range.description': '<Field/> <Operator>er mellom</Operator> <Value/>',
  'search.operator.defined.name': 'er definert',
  'search.operator.defined.description': '<Field/> <Operator>er</Operator> <Value>definert</Value>',
  'search.operator.not-defined.name': 'ikke definert',
  'search.operator.not-defined.description':
    '<Field/> <Operator>er</Operator> <Value>ikke definert</Value>',
  'search.operator.number-equal.name': 'er',
  'search.operator.number-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'større enn',
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'større enn eller lik',
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'mindre enn',
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'mindre enn eller lik',
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'er ikke',
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.number-range.name': 'er mellom',
  'search.operator.number-range.description':
    '<Field/> <Operator>er mellom</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.portable-text-equal.name': 'er',
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'inneholder',
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'er ikke',
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'inneholder ikke',
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'er',
  'search.operator.reference-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'er ikke',
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'fil',
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'bilde',
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'dokument',
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'er',
  'search.operator.slug-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'inneholder',
  'search.operator.slug-contains.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'er ikke',
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'inneholder ikke',
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'er',
  'search.operator.string-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'er',
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>er</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'er ikke',
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'inneholder',
  'search.operator.string-contains.description':
    '<Field/> <Operator>inneholder</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'er ikke',
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>er ikke</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'inneholder ikke',
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>inneholder ikke</Operator> <Value>{{value}}</Value>',
  'search.no-results-title': 'Ingen resultater funnet',
  'search.no-results-help-description': 'Prøv et annet nøkkelord eller juster filtrene dine',
  'search.error.unspecified-error-title': 'Noe gikk galt under søket',
  'search.error.unspecified-error-help-description':
    'Vennligst prøv igjen eller sjekk tilkoblingen din',
  'search.error.no-valid-asset-source-title': 'Ingen gyldige kilder funnet.',
  'search.error.no-valid-asset-source-only-default-description':
    'For øyeblikket støttes bare standardkilden for bilder/filer.',
  'search.error.no-valid-asset-source-check-config-description': `Vennligst forsikre deg om at den er aktivert i studioets konfigurasjonsfil.`,
  'search.error.display-filter-title': 'En feil oppstod under visning av dette filteret.',
  'search.error.display-filter-description':
    'Dette kan indikere ugyldige alternativer definert i skjemaet ditt.',
  'search.action.clear-recent-searches': 'Fjern nylige søk',
  'search.action.select-asset': 'Velg element',
  'search.action.select-asset_image': 'Velg bilde',
  'search.action.select-asset_file': 'Velg fil',
  'search.action.search-all-types': 'Søk i alle dokumenter',
  'search.action.search-specific-types': `Søk etter {{types, list}}`,
  'search.action.search-specific-types-truncated': `Søk etter {{types, list}} +{{count}} flere`,
  'search.document-type-list-all-types': 'Alle typer',
  'search.document-type-list': `{{types, list}}`,
  'search.document-type-list-truncated': `{{types, list}} +{{count}} flere`,
  'search.action.close-search-aria-label': 'Lukk søk',
  'search.action.toggle-filters-aria-label_hide': 'Skjul filtre',
  'search.action.toggle-filters-aria-label_show': 'Vis filtre',
  'search.instructions': 'Bruk <ControlsIcon/> for å rafinere søket.',
  'help-resources.title': 'Hjelp og ressurser',
  'help-resources.studio-version': `Sanity Studio versjon {{studioVersion}}`,
  'help-resources.latest-sanity-version': `Siste versjon er {{latestVersion}}`,
  'help-resources.action.join-our-community': `Bli med i vårt community`,
  'help-resources.action.help-and-support': `Hjelp og støtte`,
  'help-resources.action.contact-sales': `Kontakt salg`,
  'user-menu.close-menu': 'Lukk meny',
  'user-menu.login-provider': `Logget inn med {{providerTitle}}`,
  'user-menu.action.manage-project': 'Administrer prosjekt',
  'user-menu.action.manage-project-aria-label': 'Administrer prosjekt',
  'user-menu.action.invite-members': 'Inviter medlemmer',
  'user-menu.action.invite-members-aria-label': 'Inviter medlemmer',
  'user-menu.action.sign-out': 'Logg ut',
  'user-menu.appearance-title': 'Utseende',
  'user-menu.color-scheme.system-title': 'System',
  'user-menu.color-scheme.system-description': 'Bruk systemutseende',
  'user-menu.color-scheme.dark-title': 'Mørk',
  'user-menu.color-scheme.dark-description': 'Bruk mørkt utseende',
  'user-menu.color-scheme.light-title': 'Lys',
  'user-menu.color-scheme.light-description': 'Bruk lyst utseende',
  'user-menu.locale-title': 'Språk',
  'presence.no-one-else-title': 'Ingen andre er her',
  'presence.no-one-else-description': 'Inviter folk til prosjektet for å se deres onlinestatus.',
  'presence.action.manage-members': 'Administrer medlemmer',
  'presence.not-in-a-document': 'Ikke i et dokument',
  'presence.aria-label': 'Hvem er her',
  'preview.default.title-fallback': 'Uten navn',
  'preview.fallback.no-value': '(ingen verdi)',
  'preview.image.file-is-being-uploaded.alt-text': 'Bildet blir lastet opp',
  'insufficient-permissions-message.title': 'Utilstrekkelig tilgang',
  'insufficient-permissions-message.not-authorized-explanation':
    'Du har ikke tilgang til denne funksjonen.',
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Du har ikke tilgang til å opprette en ny referanse.',
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Du har ikke tilgang til å opprette denne typen dokument.',
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Du har ikke tilgang til å opprette et dokument.',
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Du har ikke tilgang til å opprette dette dokumentet.',
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Du har ikke tilgang til å slette dette dokumentet.',
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Du har ikke tilgang til å forkaste endringer i dette dokumentet.',
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Du har ikke tilgang til å duplisere dette dokumentet.',
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Du har ikke tilgang til å publisere dette dokumentet.',
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Du har ikke tilgang til å avpublisere dette dokumentet.',
  'insufficient-permissions-message.roles': 'Dine roller: <Roles/>',
})
