import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Action text for adding a document to release */
  'action.add-document': 'Adicionar documento',
  /** Action text for archiving a release */
  'action.archive': 'Arquivar release',
  /** Tooltip for when the archive release action is disabled due to release being scheduled  */
  'action.archive.tooltip': 'Cancele o agendamento desta release para arquivá-la',
  /** Action text for showing the archived releases */
  'action.archived': 'Arquivadas',
  /** Menu item label for copying release ID */
  'action.copy-release-id.label': 'Copiar ID da release',
  /** Menu item label for copying release URL */
  'action.copy-release-link.label': 'Copiar URL da release',
  /** Menu item label for copying release title */
  'action.copy-release-title.label': 'Copiar título da release',
  /** Tooltip for copy release actions button */
  'action.copy-release.label': 'Copiar',
  /** Action text for staging a new revert release */
  'action.create-revert-release': 'Criar uma nova release',
  /** Action text for deleting a release */
  'action.delete-release': 'Excluir release',
  /** Menu item label for showing scheduled drafts */
  'action.drafts': 'Rascunhos agendados',
  /** Action text for duplicating a release */
  'action.duplicate-release': 'Duplicar release',
  /** Action text for editing a release */
  'action.edit': 'Editar release',
  /** Action text for reverting a release immediately without staging changes */
  'action.immediate-revert-release': 'Reverter agora',
  /** Action text for opening a release */
  'action.open': 'Ativa',
  /** Action text for showing the paused scheduled drafts */
  'action.paused': 'Pausadas',
  /** Action text for publishing all documents in a release (and the release itself) */
  'action.publish-all-documents': 'Executar release',
  /** Menu item label for showing releases (multi-document releases) */
  'action.releases': 'Releases',
  /** Action text for reverting a release */
  'action.revert': 'Reverter release',
  /** Action message for when document is scheduled for unpublishing a document and you want to no longer unpublish it */
  'action.revert-unpublish-actions': 'Reverter despublicação ao lançar',
  /** Text for the review changes button in release tool */
  'action.review': 'Revisar alterações',
  /** Action text for scheduling a release */
  'action.schedule': 'Agendar release...',
  /** Action text for scheduling unpublish of a draft document */
  'action.schedule-unpublish': 'Agendar despublicação',
  /** Tooltip text for when schedule unpublish is disabled because document is not published */
  'action.schedule-unpublish.disabled.not-published':
    'O documento deve estar publicado para agendar a despublicação',
  /** Label for unarchiving a release */
  'action.unarchive': 'Desarquivar release',
  /** Action text for unpublishing a document in a release in the context menu */
  'action.unpublish': 'Cancelar publicação',
  /** Action message for scheduling an unpublished of a document  */
  'action.unpublish-doc-actions': 'Cancelar publicação ao lançar',
  /** Action text for unscheduling a release */
  'action.unschedule': 'Cancelar agendamento do release',

  /** Text for the summary button in release tool */
  'actions.summary': 'Resumo',

  /* The text for the activity event when a document is added to a release */
  'activity.event.add-document': 'Adicionou uma versão de documento',
  /* The text for the activity event when the release is archived */
  'activity.event.archive': 'Arquivou o release <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is created */
  'activity.event.create':
    'Criou o release <strong>{{releaseTitle}}</strong> <ScheduleTarget>com destino </ScheduleTarget>',
  /* The text for the activity event when a document is removed from a release */
  'activity.event.discard-document': 'Descartou uma versão de documento',
  'activity.event.edit': 'Definiu o horário do release para <ScheduleTarget></ScheduleTarget>',
  /**The text to display in the changes when the release type changes to asap */
  'activity.event.edit-time-asap': 'O mais rápido possível',
  /**The text to display in the changes when the release type changes to undecided */
  'activity.event.edit-time-undecided': 'Indefinido',
  /* The text for the activity event when the release is published */
  'activity.event.publish': 'Publicou o release <strong>{{releaseTitle}}</strong>',
  /* The text for the activity event when the release is scheduled */
  'activity.event.schedule': 'Marcado como agendado',
  /** The text for the activity event when the release is unarchived */
  'activity.event.unarchive': 'Desarquivou o release <strong>{{releaseTitle}}</strong>',
  /** The text for the activity event when the release is unscheduled */
  'activity.event.unschedule': 'Marcado como não agendado',
  /** The loading text for when releases are loading */
  'activity.panel.error': 'Ocorreu um erro ao obter a atividade do release',
  /** The loading text for when releases are loading */
  'activity.panel.loading': 'Carregando atividade do release',
  /** The title for the activity panel shown in the releases detail screen */
  'activity.panel.title': 'Atividade',

  /** Label for the button to proceed with archiving a release */
  'archive-dialog.confirm-archive-button': 'Sim, arquivar release',
  /** Description for the dialog confirming the archive of a release with one document */
  'archive-dialog.confirm-archive-description_one': 'Isso arquivará 1 versão de documento.',
  /** Description for the dialog confirming the archive of a release with more than one document */
  'archive-dialog.confirm-archive-description_other':
    'Isso arquivará {{count}} versões de documentos.',
  /** Header for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-header': 'Tem certeza de que deseja arquivar este release?',
  /** Title for the dialog confirming the archive of a release */
  'archive-dialog.confirm-archive-title':
    "Tem certeza de que deseja arquivar o release <strong>'{{title}}'</strong>?",

  /** Description for information card on a published or archived release to description retention effects */
  'archive-info.description':
    'Ele ficará disponível por {{retentionDays}} dias e será removido automaticamente em {{removalDate}}. <Link>Saiba mais sobre retenção</Link>.',
  /** Title for information card on a archived release */
  'archive-info.title': 'Este release está arquivado',

  /** Banner text showing count of active scheduled drafts requiring confirmation with one draft */
  'banner.confirm-active-scheduled-drafts_one':
    'Há {{count}} Scheduled Draft que requer confirmação de agendamento',
  /** Banner text showing count of active scheduled drafts requiring confirmation with multiple drafts */
  'banner.confirm-active-scheduled-drafts_other':
    'Há {{count}} Scheduled Drafts que requerem confirmação de agendamento',
  /** Button text for confirming scheduling of active drafts */
  'banner.confirm-active-scheduled-drafts.button': 'Retomar agendamento',
  /** Button text when confirming schedules from paused mode */
  'banner.confirm-active-scheduled-drafts.button-paused': 'Retomar todos os agendamentos',
  /** Banner text shown when drafts mode is disabled but there are still scheduled drafts */
  'banner.drafts-mode-disabled':
    'O modo de rascunhos foi desativado, mas ainda há Scheduled Drafts a serem publicados.',
  /** Banner text shown when navigating to a release that does not exist */
  'banner.release-not-found': 'Esta versão não pôde ser encontrada',
  /** Tooltip for the dismiss button in the release not found banner */
  'banner.release-not-found.dismiss': 'Dispensar',
  /** Banner text shown when scheduled drafts feature is disabled but there are still scheduled drafts */
  'banner.scheduled-drafts-disabled':
    'Os Scheduled Drafts foram desativados, mas ainda há Scheduled Drafts a serem publicados.',

  /** Title for changes to published documents */
  'changes-published-docs.title': 'Alterações em documentos publicados',

  /** Dialog confirm button text for confirming all scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.confirm-button': 'Confirmar agendamentos',
  /** Dialog description for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.description':
    'Agendar todos os Scheduled Drafts pausados para suas datas de publicação pretendidas',
  /** Dialog warning when some scheduled drafts have past dates */
  'confirm-active-scheduled-drafts-dialog.past-dates-warning':
    'Alguns destes Scheduled Drafts estão agendados para datas passadas. Confirmar os agendamentos publicará imediatamente essas versões dos documentos.',
  /** Dialog title for confirming active scheduled drafts */
  'confirm-active-scheduled-drafts-dialog.title': 'Retomar Scheduled Drafts',

  /** Suffix for when a release is a copy of another release */
  'copy-suffix': 'Cópia',

  /** Confirm button text for overriding existing draft */
  'copy-to-draft-dialog.confirm-button': 'Sim, substituir o rascunho',
  /** Description for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.description':
    'Já existe uma versão de rascunho deste documento. Copie a versão atual para o rascunho e substitua a versão de rascunho existente.',
  /** Title for dialog when copying version to draft that already exists */
  'copy-to-draft-dialog.title': 'Versão de rascunho já existe',

  /** Text for when a release / document was created */
  created: 'Criado <RelativeTime/>',

  /** Activity inspector button text */
  'dashboard.details.activity': 'Atividade',
  /** Text for the releases detail screen in the pin release button. */
  'dashboard.details.pin-release': 'Fixar versão no estúdio',
  /** Text for the releases detail screen when a release was published ASAP */
  'dashboard.details.published-asap': 'Publicado',
  /** Text for the releases detail screen when a release was published from scheduling */
  'dashboard.details.published-on': 'Publicado em {{date}}',
  /** Text for the releases detail screen in the unpin release button. */
  'dashboard.details.unpin-release': 'Desafixar versão do estúdio',

  /** Label for the button to proceed deleting a release */
  'delete-dialog.confirm-delete-button': 'Sim, excluir versão',
  /** Description for the dialog confirming the deleting of a release with one document */
  'delete-dialog.confirm-delete-description_one': 'Isso excluirá 1 versão do documento.',
  /** Description for the dialog confirming the deleting of a release with more than one document */
  'delete-dialog.confirm-delete-description_other':
    'Isso excluirá {{count}} versões de documentos.',
  /** Header for deleting a release dialog */
  'delete-dialog.confirm-delete.header': 'Tem certeza de que deseja excluir este release?',

  /** Label when a release has been deleted by a different user */
  'deleted-release': "O release '<strong>{{title}}</strong>' foi excluído",

  /** Text for when there's no changes in a release diff */
  'diff.list-empty': 'A lista de alterações está vazia, consulte o documento',
  /** Text for when there's no changes in a release diff */
  'diff.no-changes': 'Sem alterações',

  /** Description for discarding a draft of a document dialog */
  'discard-version-dialog.description-draft':
    'Isso removerá permanentemente todas as alterações feitas neste documento. Esta ação não pode ser desfeita.',
  /** Description for discarding a version of a document dialog */
  'discard-version-dialog.description-release':
    "Isso removerá permanentemente todas as alterações feitas neste documento dentro do release '<strong>{{releaseTitle}}</strong>'. Esta ação não pode ser desfeita.",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.header-draft': 'Descartar rascunho?',
  /** Header for discarding a version from a release of a document dialog */
  'discard-version-dialog.header-release':
    "Remover documento do release '<strong>{{releaseTitle}}</strong>'?",
  /** Title for dialog for discarding a draft of a document */
  'discard-version-dialog.title-draft': 'Descartar rascunho',
  /** Title for dialog for discarding a version of a document */
  'discard-version-dialog.title-release': 'Remover do release',

  /** Label for when a document in a release has a single validation warning */
  'document-validation.error_one': '{{count}} erro de validação',
  /** Label for when a document in a release has multiple validation warnings */
  'document-validation.error_other': '{{count}} erros de validação',

  /** Label for the button to proceed with duplicating a release */
  'duplicate-dialog.confirm-duplicate-button': 'Sim, duplicar release',
  /** Description for the dialog confirming the duplicate of a release with one document */
  'duplicate-dialog.confirm-duplicate-description_one':
    'Isso duplicará o release e a 1 versão do documento.',
  /** Description for the dialog confirming the duplicate of a release with more than one document */
  'duplicate-dialog.confirm-duplicate-description_other':
    'Isso duplicará o release e as {{count}} versões de documentos.',
  /** Header for the dialog confirming the duplicate of a release */
  'duplicate-dialog.confirm-duplicate-header': 'Tem certeza de que deseja duplicar este release?',

  /** Title text displayed for technical error details */
  'error-details-title': 'Detalhes do erro',

  /** Title text when error during release update */
  'failed-edit-title': 'Falha ao salvar alterações',

  /** Title text displayed for releases that failed to publish  */
  'failed-publish-title': 'Falha ao publicar',

  /** Title text displayed for releases that failed to schedule  */
  'failed-schedule-title': 'Falha ao agendar',

  /** Filter tab label for all documents */
  'filter-tab.all': 'Todos',
  /** Filter tab label for documents with validation errors */
  'filter-tab.errors': 'Erros',

  /**The text that will be shown in the footer to indicate the time the release was archived */
  'footer.status.archived': 'Arquivado',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.created': 'Criado',
  /**The text that will be shown in the footer to indicate the time the release was created */
  'footer.status.edited': 'Editado',
  /**The text that will be shown in the footer to indicate the time the release was published */
  'footer.status.published': 'Publicado',
  /**The text that will be shown in the footer to indicate the time the release was unarchived */
  'footer.status.unarchived': 'Desarquivado',

  /** Label text for the loading state whilst release is being loaded */
  'loading-release': 'Carregando release',

  /** Text for when documents of a release are loading */
  'loading-release-documents': 'Carregando documentos',
  /** Description text for when loading documents on a release failed */
  'loading-release-documents.error.description':
    'Não foi possível carregar os documentos desta release. Por favor, tente novamente mais tarde.',
  /** Title text for when loading documents on a release failed */
  'loading-release-documents.error.title': 'Algo deu errado',

  /** Label for title of actions for "when releasing" */
  'menu.group.when-releasing': 'Ao publicar a release',
  /** Label for the release menu */
  'menu.label': 'Menu da release',
  /** Tooltip for the release menu */
  'menu.tooltip': 'Ações',

  /** Text for when no archived releases are found */
  'no-archived-release': 'Nenhuma release arquivada',

  /** Tooltip text when there are no paused scheduled drafts */
  'no-paused-release': 'Nenhum rascunho agendado pausado',

  /** Text for when no releases are found */
  'no-releases': 'Nenhuma release',

  /** Text for when no scheduled drafts are found */
  'no-scheduled-drafts': 'Nenhum rascunho agendado',

  /** Text for the button name for the release tool */
  'overview.action.documentation': 'Documentação',
  /** Tooltip for the calendar button in the release overview */
  'overview.calendar.tooltip': 'Ver calendário',
  /** Description for the release tool */
  'overview.description':
    'Releases são coleções de alterações de documentos que podem ser gerenciadas, agendadas e revertidas em conjunto.',
  /** Text for the placeholder in the search release input  */
  'overview.search-releases-placeholder': 'Pesquisar releases',
  /** Title for the release tool */
  'overview.title': 'Releases',

  /** Tooltip text for releases that have passed their intended publish date */
  'passed-intended-publish-date': 'Esta release ultrapassou sua data de publicação prevista',

  /** Tooltip text for scheduled drafts that have passed their intended publish date */
  'passed-intended-publish-date-draft': 'Este rascunho ultrapassou sua data de publicação prevista',

  /** Description for when a user doesn't have publish or schedule releases */
  'permission-missing-description':
    'Sua função atualmente limita o que você pode ver nesta release. Você não pode publicar nem agendar esta release.',

  /** Text for when a user doesn't have publish or schedule releases */
  'permission-missing-title': 'Acesso limitado',

  /** Tooltip label when the user doesn't have permission to archive release */
  'permissions.error.archive': 'Você não tem permissão para arquivar esta release',
  /** Tooltip label when the user doesn't have permission to delete release */
  'permissions.error.delete': 'Você não tem permissão para excluir esta release',
  /** Tooltip label when the user doesn't have permission for discarding a version */
  'permissions.error.discard-version': 'Você não tem permissão para descartar esta versão',
  /** Tooltip label when the user doesn't have permission to duplicate release */
  'permissions.error.duplicate': 'Você não tem permissão para duplicar este release',
  /** Tooltip label when the user doesn't have permission to unarchive release */
  'permissions.error.unarchive': 'Você não tem permissão para desarquivar este release',
  /** Tooltip label when the user doesn't have permission for unpublishing a document */
  'permissions.error.unpublish':
    'Você não tem permissão para cancelar a publicação deste documento',

  /** Tooltip text for when one user is editing a document in a release */
  'presence.tooltip.one':
    '{{displayName}} está editando este documento no release "{{releaseTitle}}" agora',

  /** Tooltip text for publish release action when there are no documents */
  'publish-action.validation.no-documents': 'Não há documentos para publicar',

  /** Description for the dialog confirming the publish of a release with one document */
  'publish-dialog.confirm-publish-description_one':
    "O release '<strong>{{title}}</strong>' e seu documento serão publicados.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'publish-dialog.confirm-publish-description_other':
    "O release '<strong>{{title}}</strong>' e seus {{releaseDocumentsLength}} documentos serão publicados.",
  /** Title for the dialog confirming the publish of a release */
  'publish-dialog.confirm-publish.title':
    'Tem certeza de que deseja publicar o release e todas as versões dos documentos?',
  /** Label for when documents in release have validation errors */
  'publish-dialog.validation.error': 'Alguns documentos têm erros de validação',
  /** Label for when documents are being validated */
  'publish-dialog.validation.loading': 'Validando documentos...',
  /** Label for the button when the user doesn't have permissions to publish a release */
  'publish-dialog.validation.no-permission': 'Você não tem permissão para publicar',

  /** Title for information card on a published release */
  'publish-info.title': 'Este release foi publicado com sucesso.',

  /** Placeholder title for a release with no title */
  'release-placeholder.title': 'Sem título',

  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_one':
    'Isso reverterá {{releaseDocumentsLength}} versão do documento.',
  /** Description for the dialog confirming the revert of a release with multiple documents */
  'revert-dialog.confirm-revert-description_other':
    'Isso reverterá {{releaseDocumentsLength}} versões de documentos.',
  /** Checkbox label to confirm whether to create a staged release for revert or immediately revert */
  'revert-dialog.confirm-revert.stage-revert-checkbox-label': 'Reverter o release imediatamente',
  /** Title for the dialog confirming the revert of a release */
  'revert-dialog.confirm-revert.title': "Tem certeza de que deseja reverter o release '{{title}}'?",
  /** Warning card text for when immediately revert a release with history */
  'revert-dialog.confirm-revert.warning-card':
    'Alterações foram feitas em documentos neste release após a publicação. A reversão substituirá essas alterações.',

  /** Description of a reverted release */
  'revert-release.description': 'Reverter alterações nas versões dos documentos em "{{title}}".',
  /** Title of a reverted release */
  'revert-release.title': 'Revertendo "{{title}}"',

  /** Description for the review changes button in release tool */
  'review.description': 'Adicione documentos a este release para revisar as alterações',
  /** Text for when a document is edited */
  'review.edited': 'Editado <RelativeTime/>',

  /** Schedule release button tooltip when there are no documents to schedule */
  'schedule-action.validation.no-documents': 'Não há documentos para agendar',

  /** Schedule release button tooltip when the release is already scheduled */
  'schedule-button-tooltip.already-scheduled': 'Este release já está agendado',
  /** Schedule release button tooltip when there are validation errors */
  'schedule-button-tooltip.validation.error': 'Alguns documentos têm erros de validação',
  /** Schedule release button tooltip when validation is loading */
  'schedule-button-tooltip.validation.loading': 'Validando documentos...',
  /** Schedule release button tooltip when user has no permissions to schedule */
  'schedule-button-tooltip.validation.no-permission': 'Você não tem permissão para agendar',

  /** Title of unschedule release dialog */
  'schedule-button.tooltip': 'Tem certeza de que deseja cancelar o agendamento do release?',

  /** Description for the confirm button for scheduling a release */
  'schedule-dialog.confirm-button': 'Sim, agendar',
  /** Description shown in unschedule relaease dialog */
  'schedule-dialog.confirm-description_one':
    "O release '<strong>{{title}}</strong>' e seu documento serão publicados na data selecionada.",
  /** Description for the dialog confirming the publish of a release with multiple documents */
  'schedule-dialog.confirm-description_other':
    'O release <strong>{{title}}</strong> e suas {{count}} versões de documento serão agendados.',
  /** Title for unschedule release dialog */
  'schedule-dialog.confirm-title': 'Agendar o release',
  /** Description for warning that the published schedule time is in the past */
  'schedule-dialog.publish-date-in-past-warning': 'Agende para uma data e hora futura.',
  /** Label for date picker when scheduling a release */
  'schedule-dialog.select-publish-date-label': 'Agendar em',

  /** Confirm button text for the schedule unpublish dialog */
  'schedule-unpublish-dialog.confirm': 'Agendar despublicação',
  /** Description for the schedule unpublish dialog */
  'schedule-unpublish-dialog.description': 'Selecione quando este documento deve ser despublicado.',
  /** Header for the schedule unpublish dialog */
  'schedule-unpublish-dialog.header': 'Agendar rascunho para despublicação',

  /** Placeholder for search of documents in a release */
  'search-documents-placeholder': 'Pesquisar documentos',

  /** Text for when the release has no errors found */
  'summary.all-documents-errors-found': 'Todos os documentos validados, problemas encontrados',
  /** Text for when the release has validated all documents */
  'summary.all-documents-validated': 'Todos os documentos validados, nenhum problema encontrado',
  /** Text for when the release was created */
  'summary.created': 'Criado <RelativeTime/>',
  /** Text for when the release is composed of one document */
  'summary.document-count_one': '{{count}} documento',
  /** Text for when the release is composed of multiple documents */
  'summary.document-count_other': '{{count}} documentos',
  /** Text for when the release has some errors found */
  'summary.errors-found':
    'Para publicar ou agendar o release, resolva os problemas encontrados nos documentos',
  /** Text for when the release has no documents */
  'summary.no-documents': 'Nenhum documento',
  /** Description for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.description':
    'Este rascunho agendado não contém um documento. Ele pode ter sido removido.',
  /** Title for the empty state when a cardinality-one release has no documents */
  'summary.no-documents-cardinality-one.title': 'Nenhum documento neste release',
  /** Text for when the release has not published */
  'summary.not-published': 'Não publicado',
  /** Text for when the release was published */
  'summary.published': 'Publicado <RelativeTime/>',
  /** Text for when the release has validated documents */
  'summary.validated-documents': '{{validatedCount}} de {{totalCount}} documentos validados',
  /** Text for validation loading indicator */
  'summary.validating-documents': 'Validando documentos: {{validatedCount}} de {{totalCount}}',

  /** add action type that will be shown in the table*/
  'table-body.action.add': 'Adicionar',
  /** Change action type that will be shown in the table*/
  'table-body.action.change': 'Alterar',
  /** Change action type that will be shown in the table*/
  'table-body.action.unpublish': 'Despublicar',

  /** Header for the document table in the release tool - action */
  'table-header.action': 'Ação',
  /** Header for the document table in the release tool - Archived */
  'table-header.archivedAt': 'Arquivado',
  /** Header for the document table in the release tool - contributors */
  'table-header.contributors': 'Colaboradores',
  /** Header for the document table in the release tool - created by */
  'table-header.created-by': 'Criado por',
  /** Header for the document table in the release tool - document preview */
  'table-header.document': 'Documento',
  /** Header for the document table in the release tool - title */
  'table-header.documents': 'Documentos',
  /** Header for the document table in the release tool - edited */
  'table-header.edited': 'Editado',
  /** Header for the paused scheduled drafts table - intended for */
  'table-header.intended-for': 'Destinado a',
  /** Header for the document table in the release tool - Published */
  'table-header.published-at': 'Publicado',
  /** Header for the document table in the release tool - Published */
  'table-header.publishedAt': 'Publicado',
  /** Header for the scheduled drafts document table in the release tool - published at */
  'table-header.scheduled-draft.published-at': 'Publicado em',
  /** Header for the scheduled drafts document table in the release tool - scheduled for */
  'table-header.scheduled-for': 'Agendado para',
  /** Header for the document table in the release tool - time */
  'table-header.time': 'Hora',
  /** Header for the  document table in the release tool - release title */
  'table-header.title': 'Release',
  /** Header for the document table in the release tool - type */
  'table-header.type': 'Tipo',
  /** Header for the document table in the release tool - when */
  'table-header.when': 'Quando',

  /** Text for the release time label for scheduled releases  which has not been scheduled yet*/
  'time.estimated': 'Estimado',
  /** Text for the release time label for scheduled releases  which has been scheduled*/
  'time.scheduled': 'Agendado',

  /** Text for toast when release failed to archive */
  'toast.archive.error': "Falha ao arquivar '<strong>{{title}}</strong>': {{error}}",
  /** Toast error message when bulk scheduling of active drafts fails */
  'toast.confirm-active-scheduled-drafts.error': 'Falha ao agendar rascunhos: {{error}}',
  /** Toast message after copying release ID */
  'toast.copy-release-id.success': 'ID do release copiado para a área de transferência',
  /** Toast message after copying release link */
  'toast.copy-release-link.success': 'Link do release copiado para a área de transferência',
  /** Toast message after copying release title */
  'toast.copy-release-title.success': 'Título do release copiado para a área de transferência',
  /** Description for toast when creating new version of document in release failed */
  'toast.create-version.error': 'Falha ao adicionar documento ao release: {{error}}',
  /** Description for toast when release deletion failed */
  'toast.delete.error': "Falha ao excluir '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully deleted */
  'toast.delete.success': "O release '<strong>{{title}}</strong>' foi excluído com sucesso",
  /** Description for toast when release duplication failed */
  'toast.duplicate.error': "Falha ao duplicar '<strong>{{title}}</strong>': {{error}}",
  /** Description for toast when release is successfully duplicated */
  'toast.duplicate.success': "O release '<strong>{{title}}</strong>' foi duplicado. <Link/>",
  /** Link text for toast link to the duplicated release */
  'toast.duplicate.success-link': 'Ver release duplicado',
  /** Text for toast when release has been reverted immediately */
  'toast.immediate-revert.success': "O release '{{title}}' foi revertido com sucesso",
  /** Text for toast when release failed to publish */
  'toast.publish.error': "Falha ao publicar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has reverted release successfully staged */
  'toast.revert-stage.success':
    "O release de reversão para '{{title}}' foi criado com sucesso. <Link/>",
  /** Link text for toast link to the generated revert release */
  'toast.revert-stage.success-link': 'Ver release de reversão',
  /** Text for toast when release failed to revert */
  'toast.revert.error': 'Falha ao reverter o release: {{error}}',
  /** Text for toast when release failed to schedule */
  'toast.schedule.error': "Falha ao agendar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release has been scheduled */
  'toast.schedule.success': "O release '<strong>{{title}}</strong>' foi agendado.",
  /** Text for toast when release failed to unarchive */
  'toast.unarchive.error': "Falha ao desarquivar '<strong>{{title}}</strong>': {{error}}",
  /** Text for toast when release failed to unschedule */
  'toast.unschedule.error': "Falha ao desagendar '<strong>{{title}}</strong>': {{error}}",

  /** Text for tooltip when a release has been scheduled */
  'type-picker.tooltip.scheduled': 'O release está agendado; desagende-o para alterar o tipo',

  /** Text action in unpublish dialog to cancel */
  'unpublish-dialog.action.cancel': 'Cancelar',
  /** Text action in unpublish dialog to unpublish */
  'unpublish-dialog.action.unpublish': 'Sim, cancelar publicação ao lançar',
  /** Description for unpublish dialog, explaining that all changes made to this document will be lost */
  'unpublish-dialog.description.lost-changes':
    'Quaisquer alterações feitas nesta versão do documento serão perdidas.',
  /** Description for the unpublish dialog, explaining that it will create a draft if no draft exists at time of release */
  'unpublish-dialog.description.to-draft':
    'Isso cancelará a publicação do documento como parte do release <Label>{{title}}</Label> e criará um rascunho caso nenhum exista no momento do lançamento.',
  /** Title for the dialog confirming the unpublish of a release */
  'unpublish-dialog.header':
    'Tem certeza de que deseja cancelar a publicação deste documento ao lançar?',

  /** Text for when a document is unpublished */
  'unpublish.already-unpublished': 'Este documento já está com a publicação cancelada.',
  /** Tooltip label for when a document is unpublished */
  'unpublish.no-published-version': 'Não há versão publicada deste documento.',

  /** Description shown in unschedule relaease dialog */
  'unschedule-dialog.confirm-description': 'O release não será mais publicado na data agendada',
  /** Title for unschedule release dialog */
  'unschedule-dialog.confirm-title': 'Tem certeza de que deseja cancelar o agendamento do release?',
})
