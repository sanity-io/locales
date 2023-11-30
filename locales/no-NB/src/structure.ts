import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  'action.publish.disabled.not-ready': 'Operasjonen er ikke klar',
  'action.publish.draft.label': 'Publiser',
  'action.publish.running.label': 'Publiserer…',
  'action.publish.published.label': 'Publisert',
  'action.publish.live-edit.label': 'Publiser',
  'action.publish.live-edit.tooltip':
    '"Live Edit" er skrudd på for denne dokumenttypen og publisering skjer automatisk når du gjør endringer',
  'action.publish.live-edit.publish-disabled':
    'Kan ikke publisere fordi "Live Edit" er skrudd på for denne dokumenttypen.',
  'action.publish.validation-issues.tooltip': 'Valideringsfeil må rettes før det kan publiseres',
  'action.publish.already-published.tooltip': 'Publisert for {{timeSincePublished}} siden',
  'action.publish.already-published.no-time-ago.tooltip': 'Allerede publisert',
  'action.publish.no-changes.tooltip': 'Ingen upubliserte endringer',
  'action.publish.waiting': 'Venter på at andre oppgaver skal fullføre',
  'action.delete.disabled.not-ready': 'Operasjonen er ikke klar',
  'action.delete.disabled.nothing-to-delete':
    'Dette dokumentet eksisterer ikke eller har allerede blitt slettet',
  'action.delete.label': 'Slett',
  'action.delete.running.label': 'Sletter…',
  'action.discard-changes.disabled.not-ready': 'Operasjonen er ikke klar',
  'action.discard-changes.label': 'Forkast endringer',
  'action.discard-changes.disabled.no-change': 'Dette dokumentet har ingen endringer',
  'action.discard-changes.disabled.not-published': 'Dette dokumentet er ikke publisert',
  'action.discard-changes.confirm-dialog.confirm-discard-changes':
    'Er du sikker på at du vil forkaste alle endringer siden forrige gang dette dokumentet ble publisert?',
  'action.duplicate.disabled.not-ready': 'Operasjonen er ikke klar',
  'action.duplicate.disabled.nothing-to-duplicate':
    'Dette dokumentet er tomt og kan ikke dupliseres',
  'action.duplicate.label': 'Dupliser',
  'action.duplicate.running.label': 'Dupliserer…',
  'action.unpublish.disabled.not-ready': 'Operasjonen er ikke klar',
  'action.unpublish.label': 'Avpubliser',
  'action.unpublish.disabled.not-published': 'Dette dokumentet er ikke publisert',
  'action.unpublish.live-edit.disabled':
    'Dette dokumentet har "Live Edit" skrudd på og kan ikke avpubliseres',
  'action.restore.label': 'Gjenopprett',
  'action.restore.disabled.cannot-restore-initial': 'Kan ikke gjenopprette til første version',
  'action.restore.tooltip': 'Gjenopprett til denne versjonen',
  'action.restore.confirm-dialog.confirm-discard-changes':
    'Er du sikker på at du vil gjenopprette til valgte versjon?',
  'status-bar.publish-status-button.last-updated-time.aria-label':
    'Sist oppdatert {{relativeTime}}',
  'status-bar.publish-status-button.last-published-time.aria-label':
    'Sist publisert {{relativeTime}}',
  'status-bar.publish-status-button.last-updated-time.tooltip': 'Sist oppdatert <RelativeTime/>',
  'status-bar.publish-status-button.last-published-time.tooltip': 'Sist publisert <RelativeTime/>',
  'status-bar.review-changes-button.status.syncing.text': 'Lagrer...',
  'status-bar.review-changes-button.status.saved.text': 'Lagret!',
  'status-bar.review-changes-button.tooltip.text': 'Se endringer',
  'status-bar.review-changes-button.tooltip.changes-saved': 'Endringer lagret',
  'status-bar.review-changes-button.aria-label': 'Se endringer',
  'document-inspector.menu-item.title': 'Inspiser',
  'document-inspector.dialog.title': 'Inspiserer <DocumentTitle/>',
  'document-inspector.dialog.title-no-value': 'Ingen verdi',
  'document-inspector.view-mode.parsed': 'Behandlet',
  'document-inspector.view-mode.raw-json': 'Rå JSON',
  'production-preview.menu-item.title': 'Åpne forhåndsvisning',
  'buttons.split-pane-button.tooltip': 'Del panel til høyre',
  'buttons.split-pane-button.aria-label': 'Del panel til høyre',
  'buttons.split-pane-close-button.title': 'Lukk delt panel',
  'buttons.split-pane-close-group-button.title': 'Lukk panelgruppe',
  'banners.deleted-document-banner.text': 'Dette dokumentet har blitt slettet.',
  'banners.deleted-document-banner.restore-button.text': 'Gjenopprett nyeste versjon',
  'banners.reference-changed-banner.reason-changed.text':
    'Denne referansen har endret seg siden du åpnet den.',
  'banners.reference-changed-banner.reason-changed.reload-button.text':
    'Last inn referansen på nytt',
  'banners.reference-changed-banner.reason-removed.text':
    'Denne referansen har blitt fjernet siden du åpnet den.',
  'banners.reference-changed-banner.reason-removed.close-button.text': 'Lukk referansen',
  'banners.permission-check-banner.singular-role.text':
    'Din rolle {{roles}} har ikke tillatelser til å {{requiredPermission}} dette dokumentet.',
  'banners.permission-check-banner.plural-roles.text':
    'Dine roller {{roles}} har ikke tillatelser til å {{requiredPermission}} dette dokumentet.',
  'document-view.form-view.form-hidden': 'Dette skjemaet er skjult',
  'document-view.form-view.loading': 'Laster dokument…',
  'document-view.form-view.sync-lock-toast.title': 'Synkroniserer dokument…',
  'document-view.form-view.sync-lock-toast.description':
    'Vennligst vent mens dokumentet synkroniseres. Dette skjer vanligvis rett etter at dokumentet har blitt publisert, og det bør ikke ta mer enn noen få sekunder',
  'panes.document-pane-provider.reconnecting.title': 'Forbindelse mistet. Kobler til på nytt…',
  'panes.document-pane.document-not-found.loading': 'Laster dokument…',
  'panes.document-pane.document-not-found.title': 'Dokumentet ble ikke funnet',
  'panes.document-pane.document-not-found.text':
    'Dokumenttypen er ikke definert, og et dokument med identifikatoren <Code>{{id}}</Code> kunne ikke bli funnet.',
  'panes.document-pane.document-unknown-type.title':
    'Ukjent dokumenttype: <Code>{{documentType}}</Code>',
  'panes.document-pane.document-unknown-type.text':
    'Dette dokumentet har skjematypen <Code>{{documentType}}</Code>, som ikke er definert som en type i det lokale innholdsstudioets skjema.',
  'panes.document-pane.document-unknown-type.without-schema.text':
    'Dette dokumentet eksisterer ikke, og ingen skjematype ble spesifisert for det.',
  'panes.document-list-pane.max-items.text': 'Viser maksimalt {{limit}} dokumenter',
  'panes.document-list-pane.no-documents.text': 'Ingen resultater funnet',
  'panes.document-list-pane.no-matching-documents.text': 'Ingen dokumenter funnet som samsvarer',
  'panes.document-list-pane.no-documents-of-type.text': 'Ingen dokumenter av denne typen',
  'panes.document-list-pane.error.title': 'Kunne ikke hente listeobjekter',
  'panes.document-list-pane.error.text': 'Feil: <Code>{{error}}</Code>',
  'panes.document-list-pane.error.retry-button.text': 'Prøv på nytt',
  'panes.document-operation-results.error.summary.title': 'Detaljer',
  'panes.document-operation-results.operation-error_delete':
    'En feil oppstod under forsøket på å slette dette dokumentet. Dette betyr vanligvis at det er andre dokumenter som refererer til det.',
  'panes.document-operation-results.operation-error_unpublish':
    'En feil oppstod under forsøket på å avpublisere dette dokumentet. Dette betyr vanligvis at det er andre dokumenter som refererer til det.',
  'panes.document-operation-results.operation-error': 'En feil oppstod under {{context}}',
  'panes.document-operation-results.operation-success_publish': 'Dokumentet ble publisert',
  'panes.document-operation-results.operation-success_unpublish':
    'Dokumentet ble avpublisert. Et utkast har blitt opprettet fra den siste publiserte versjonen.',
  'panes.document-operation-results.operation-success_discardChanges':
    'Alle endringer siden siste publisering har nå blitt forkastet. Det forkastede utkastet kan fortsatt gjenopprettes fra historikken',
  'panes.document-operation-results.operation-success_delete': 'Dokumentet ble slettet',
  'panes.document-operation-results.operation-success': 'Utførte {{context}} på dokumentet',
  'panes.document-header-title.new.text': 'Ny {{schemaType}}',
  'panes.document-header-title.error.text': 'Feil: {{error}}',
  'panes.document-header-title.untitled.text': 'Uten tittel',
  'panes.document-list-pane.search-input.aria-label': 'Søk i liste',
  'panes.document-list-pane.search-input.placeholder': 'Søk i liste',
  'buttons.action-menu-button.aria-label': 'Åpne dokumenthandlinger',
  'inputs.inspect-dialog.search.placeholder': 'Søk',
  'panes.unknown-pane-type.missing-type.text':
    'Strukturelement mangler påkrevd <Code>type</Code>-egenskap.',
  'panes.unknown-pane-type.unknown-type.text':
    'Strukturelement av type <Code>{{type}}</Code> er ikke en kjent enhet.',
  'panes.unknown-pane-type.title': 'Ukjent paneltype',
  'doc-title.unknown-schema-type.text': 'Ukjent skjematype: {{schemaType}}',
  'doc-title.error.text': 'Feil: {{errorMessage}}',
  'doc-title.fallback.text': 'Uten tittel',
  'pane-item.draft-status.has-draft.tooltip': 'Redigert <RelativeTime/>',
  'pane-item.draft-status.no-draft.tooltip': 'Ingen upubliserte endringer',
  'pane-item.published-status.has-published.tooltip': 'Publisert <RelativeTime/>',
  'pane-item.published-status.no-published.tooltip': 'Ingen publiserte endringer',
  'pane-item.missing-schema-type.title':
    'Ingen skjema funnet for type <Code>{{documentType}}</Code>',
  'pane-item.missing-schema-type.subtitle': 'Dokument: <Code>{{documentId}}</Code>',
  'confirm-delete-dialog.header.text_delete': 'Slett dokument?',
  'confirm-delete-dialog.header.text_unpublish': 'Avpubliser dokument?',
  'confirm-delete-dialog.loading.text': 'Ser etter refererende dokumenter…',
  'confirm-delete-dialog.cancel-button.text': 'Avbryt',
  'confirm-delete-dialog.confirm-button.text_delete': 'Slett nå',
  'confirm-delete-dialog.confirm-button.text_unpublish': 'Avpubliser nå',
  'confirm-delete-dialog.confirm-anyway-button.text_delete': 'Slett uansett',
  'confirm-delete-dialog.confirm-anyway-button.text_unpublish': 'Avpubliser uansett',
  'confirm-delete-dialog.confirmation.text_delete':
    'Er du sikker på at du vil slette «<DocumentTitle/>»?',
  'confirm-delete-dialog.confirmation.text_unpublish':
    'Er du sikker på at du vil avpublisere «<DocumentTitle/>»?',
  'confirm-delete-dialog.referring-document-count.text_one':
    '1 dokument refererer til «<DocumentTitle/>»',
  'confirm-delete-dialog.referring-document-count.text_other':
    '{{count}} dokumenter refererer til «<DocumentTitle/>»',
  'confirm-delete-dialog.referring-documents-descriptor.text_delete':
    'Du kan kanskje ikke slette «<DocumentTitle/>» fordi de følgende dokumentene refererer til det:',
  'confirm-delete-dialog.referring-documents-descriptor.text_unpublish':
    'Du kan kanskje ikke avpublisere «<DocumentTitle/>» fordi de følgende dokumentene refererer til det:',
  'confirm-delete-dialog.referential-integrity-disclaimer.text_delete':
    'Hvis du sletter dette dokumentet, vil dokumenter som refererer til det ikke lenger kunne få tilgang til det.',
  'confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish':
    'Hvis du avpubliserer dette dokumentet, vil dokumenter som refererer til det ikke lenger kunne få tilgang til det.',
  'confirm-delete-dialog.cdr-table.project-id.label': 'Prosjekt-ID',
  'confirm-delete-dialog.cdr-table.dataset.label': 'Datasett',
  'confirm-delete-dialog.cdr-table.document-id.label': 'Dokument-ID',
  'confirm-delete-dialog.cdr-table.copy-id-button.tooltip': 'Kopier ID til utklippstavlen',
  'confirm-delete-dialog.cdr-table.id-copied-toast.title':
    'Kopierte dokument-ID til utklippstavlen!',
  'confirm-delete-dialog.preview-item.preview-unavailable.title':
    'Forhåndsvisning ikke tilgjengelig',
  'confirm-delete-dialog.preview-item.preview-unavailable.subtitle': 'ID: {{documentId}}',
  'confirm-delete-dialog.cdr-summary.title_one': '{{documentCount}} i et annet datasett',
  'confirm-delete-dialog.cdr-summary.title_other': '{{documentCount}} i {{count}} datasett',
  'confirm-delete-dialog.cdr-summary.document-count_one': '1 dokument',
  'confirm-delete-dialog.cdr-summary.document-count_other': '{{count}} dokumenter',
  'confirm-delete-dialog.cdr-summary.subtitle_one': 'Datasett: {{datasets}}',
  'confirm-delete-dialog.cdr-summary.subtitle_other': 'Datasett: {{datasets}}',
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_one': 'Utilgjengelig datasett',
  'confirm-delete-dialog.cdr-summary.subtitle_unavailable_other': 'Utilgjengelige datasett',
  'confirm-delete-dialog.other-reference-count.title_one': '1 annen referanse ikke vist',
  'confirm-delete-dialog.other-reference-count.title_other': '{{count}} andre referanser ikke vist',
  'confirm-delete-dialog.other-reference-count.tooltip':
    'Vi kan ikke vise metadata for disse referansene på grunn av en manglende tilgang til de relaterte datasettene.',
  'confirm-delete-dialog.error.title.text': 'Feil',
  'confirm-delete-dialog.error.retry-button.text': 'Prøv på nytt',
  'confirm-delete-dialog.error.message.text':
    'En feil oppsto mens refererende dokumenter ble lastet inn.',
  'no-document-types-screen.title': 'Ingen dokumenttyper',
  'no-document-types-screen.subtitle': 'Vennligst definer minst én dokumenttype i ditt skjema.',
  'no-document-types-screen.link-text': 'Lær hvordan du legger til en dokumenttype →',
  'structure-error.header.text': 'Oppdaget en feil mens strukturen ble lest',
  'structure-error.structure-path.label': 'Strukturvei',
  'structure-error.error.label': 'Feil',
  'structure-error.docs-link.text': 'Vis dokumentasjon',
  'structure-error.reload-button.text': 'Last på nytt',
  'pane-header.context-menu-button.tooltip': 'Vis meny',
  'pane-header.disabled-created-button.aria-label': 'Utilstrekkelig tilgang',
  'pane-header.create-menu.label': 'Opprett',
  'insufficient-permissions-message-tooltip.loading-text': 'Laster…',
})
