import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Menu item for deleting the asset */
  'asset-source.asset-list.menu.delete': 'Excluir',
  /** Menu item for showing where a particular asset is used */
  'asset-source.asset-list.menu.show-usage': 'Mostrar uso',
  /** Header in usage dialog for file assets */
  'asset-source.asset-usage-dialog.header_file': 'Documentos usando arquivo',
  /** Header in usage dialog for image assets */
  'asset-source.asset-usage-dialog.header_image': 'Documentos usando imagem',
  /** Text shown in usage dialog when loading documents using the selected asset */
  'asset-source.asset-usage-dialog.loading': 'Carregando…',
  /** Text for cancel action in delete-asset dialog */
  'asset-source.delete-dialog.action.cancel': 'Cancelar',
  /** Text for "confirm delete" action in delete-asset dialog */
  'asset-source.delete-dialog.action.delete': 'Excluir',
  /** Dialog header for delete-asset dialog when deleting a file */
  'asset-source.delete-dialog.header_file': 'Excluir arquivo',
  /** Dialog header for delete-asset dialog when deleting an image */
  'asset-source.delete-dialog.header_image': 'Excluir imagem',
  /** Text shown in delete dialog when loading documents using the selected asset */
  'asset-source.delete-dialog.loading': 'Carregando…',
  /** Message confirming to delete *named* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_named':
    'Você está prestes a excluir o arquivo <strong>{{filename}}}</strong> e seus metadados. Tem certeza?',
  /** Message confirming to delete *unnamed* file */
  'asset-source.delete-dialog.usage-list.confirm-delete-file_unnamed':
    'Você está prestes a excluir o arquivo e seus metadados. Tem certeza?',
  /** Message confirming to delete *named* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_named':
    'Você está prestes a excluir a imagem <strong>{{filename}}</strong> e seus metadados. Tem certeza?',
  /** Message confirming to delete *unnamed* image */
  'asset-source.delete-dialog.usage-list.confirm-delete-image_unnamed':
    'Você está prestes a excluir a imagem e seus metadados. Tem certeza?',
  /** Alt text showing on image preview in delete asset dialog  */
  'asset-source.delete-dialog.usage-list.image-preview-alt': 'Pré-visualização da imagem',
  /** Warning message showing when *named* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_named':
    '{{filename}} não pode ser excluído porque está em uso. Para excluir este arquivo, você precisa remover todos os usos dele.',
  /** Warning message showing when *unnamed* file can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-file-is-in-use_unnamed':
    'Este arquivo não pode ser excluído porque está em uso. Para excluí-lo, você precisa remover todos os usos dele.',
  /** Warning message showing when *named* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_named':
    '{{filename}} não pode ser excluída porque está em uso. Para excluir esta imagem, você precisa remover todos os usos dela.',
  /** Warning message showing when *unnamed* image can't be deleted because it is in use */
  'asset-source.delete-dialog.usage-list.warning-image-is-in-use_unnamed':
    'Esta imagem não pode ser excluída porque está em uso. Para excluí-la, você precisa remover todos os usos dela.',
  /** Text shown when the list of assets only include a specific set of types */
  'asset-source.dialog.accept-message':
    'Mostrando apenas ativos dos tipos aceitos: <strong>{{acceptTypes}}</strong>',
  /** Keys shared between both image asset source and file asset source */
  /** Select asset dialog title for files */
  'asset-source.dialog.default-title_file': 'Selecionar arquivo',
  /** Select asset dialog title for images */
  'asset-source.dialog.default-title_image': 'Selecionar imagem',
  /** Select asset dialog load more items */
  'asset-source.dialog.load-more': 'Carregar mais',
  /** Text shown when selecting a file but there's no files to select from */
  'asset-source.dialog.no-assets_file': 'Sem arquivos',
  /** Text shown when selecting an image but there's no images to select from */
  'asset-source.dialog.no-assets_image': 'Sem imagens',
  'asset-source.file.asset-list.action.delete.disabled-cannot-delete-current-file':
    'Não é possível excluir o arquivo selecionado atualmente',
  'asset-source.file.asset-list.action.delete.text': 'Excluir',
  'asset-source.file.asset-list.action.delete.title': 'Excluir arquivo',
  'asset-source.file.asset-list.action.select-file.title': 'Selecione o arquivo {{filename}}',
  'asset-source.file.asset-list.action.show-usage.title': 'Mostrar utilização',
  'asset-source.file.asset-list.delete-failed': 'Arquivo não pôde ser excluído',
  'asset-source.file.asset-list.delete-successful': 'Arquivo foi excluído',
  'asset-source.file.asset-list.header.date-added': 'Data de adição',
  /** File asset source */
  'asset-source.file.asset-list.header.filename': 'Nome do arquivo',
  'asset-source.file.asset-list.header.size': 'Tamanho',
  'asset-source.file.asset-list.header.type': 'Tipo',
  /** Text displayed on button or menu invoking the file asset source */
  'asset-source.file.title': 'Arquivos carregados',
  'asset-source.image.asset-list.delete-failed': 'Imagem não pôde ser excluída',
  /** Image asset source */
  'asset-source.image.asset-list.delete-successful': 'Imagem foi excluída',
  /** Text displayed on button or menu invoking the image asset source */
  'asset-source.image.title': 'Imagens carregadas',
  'asset-source.usage-list.documents-using-file_named_one':
    'Um documento está usando o arquivo <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_named_other':
    '{{count}} documentos estão usando o arquivo <code>{{filename}}</code>',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *named* file **/
  'asset-source.usage-list.documents-using-file_named_zero':
    'Nenhum documento está usando o arquivo <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-file_unnamed_one':
    'Um documento está usando este arquivo',
  'asset-source.usage-list.documents-using-file_unnamed_other':
    '{{count}} documentos estão usando este arquivo',
  /** Text shown in usage dialog for a file asset when there are zero, one or more documents using the *unnamed* file **/
  'asset-source.usage-list.documents-using-file_unnamed_zero':
    'Nenhum documento está usando este arquivo',
  'asset-source.usage-list.documents-using-image_named_one':
    'Um documento está usando a imagem <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_named_other':
    '{{count}} documentos estão usando a imagem <code>{{filename}}</code>',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *named* image **/
  'asset-source.usage-list.documents-using-image_named_zero':
    'Nenhum documento está usando a imagem <code>{{filename}}</code>',
  'asset-source.usage-list.documents-using-image_unnamed_one':
    'Um documento está usando esta imagem',
  'asset-source.usage-list.documents-using-image_unnamed_other':
    '{{count}} documentos estão usando esta imagem',
  /** Text shown in usage dialog for an image asset when there are zero, one or more documents using the *unnamed* image **/
  'asset-source.usage-list.documents-using-image_unnamed_zero':
    'Nenhum documento está usando esta imagem',

  /** Action message for navigating to next month */
  'calendar.action.go-to-next-month': 'Ir para o próximo mês',
  /** Action message for navigating to next year */
  'calendar.action.go-to-next-year': 'Ir para o próximo ano',
  /** Action message for navigating to previous month */
  'calendar.action.go-to-previous-month': 'Ir para o mês anterior',
  /** Action message for navigating to previous year */
  'calendar.action.go-to-previous-year': 'Ir para o ano anterior',
  /* Label for navigating the calendar to "today", without _selecting_ today. Short form, eg `Today`, not `Go to today` */
  'calendar.action.go-to-today': 'Hoje',
  /* Accessibility label for navigating the calendar to "today", without _selecting_ today */
  'calendar.action.go-to-today-aria-label': 'Ir para hoje',
  /* Label for navigating the calendar to "tomorrow", without _selecting_ tomorrow. Short form, eg `Tomorrow`, not `Go to tomorrow` */
  'calendar.action.go-to-tomorrow': 'Amanhã',
  /* Label for navigating the calendar to "yesterday", without _selecting_ yesterday. Short form, eg `Yesterday`, not `Go to yesterday` */
  'calendar.action.go-to-yesterday': 'Ontem',
  /** Label for switch that controls whether or not to include time in given timestamp */
  'calendar.action.include-time-label': 'Incluir hora',
  /** Action message for selecting the hour */
  'calendar.action.select-hour': 'Selecionar hora',
  /** Action message for selecting the minute */
  'calendar.action.select-minute': 'Selecionar minuto',
  /** Action message for setting to the current time */
  'calendar.action.set-to-current-time': 'Definir para o horário atual',
  /** Label for selecting an hour preset. Receives a `time` param as a string on hh:mm format and a `date` param as a Date instance denoting the preset date */
  'calendar.action.set-to-time-preset': '{{time}} em {{date, datetime}}',
  /** Error message displayed in calendar when entered date is not the correct format */
  'calendar.error.must-be-in-format': 'Deve estar no formato <Emphasis>{{exampleDate}}</Emphasis>',
  /** Month name for April */
  'calendar.month-names.april': 'Abril',
  /** Month name for August */
  'calendar.month-names.august': 'Agosto',
  /** Month name for December */
  'calendar.month-names.december': 'Dezembro',
  /** Month name for February */
  'calendar.month-names.february': 'Fevereiro',
  /** Month name for January */
  'calendar.month-names.january': 'Janeiro',
  /** Month name for July */
  'calendar.month-names.july': 'Julho',
  /** Month name for June */
  'calendar.month-names.june': 'Junho',
  /** Month name for March */
  'calendar.month-names.march': 'Março',
  /** Month name for May */
  'calendar.month-names.may': 'Maio',
  /** Month name for November */
  'calendar.month-names.november': 'Novembro',
  /** Month name for October */
  'calendar.month-names.october': 'Outubro',
  /** Month name for September */
  'calendar.month-names.september': 'Setembro',
  /** Short weekday name for Friday */
  'calendar.weekday-names.short.friday': 'Sex',
  /** Short weekday name for Monday */
  'calendar.weekday-names.short.monday': 'Seg',
  /** Short weekday name for Saturdayday */
  'calendar.weekday-names.short.saturday': 'Sáb',
  /** Short weekday name for Sunday */
  'calendar.weekday-names.short.sunday': 'Dom',
  /** Short weekday name for Thursday */
  'calendar.weekday-names.short.thursday': 'Qui',
  /** Short weekday name for Tuesday */
  'calendar.weekday-names.short.tuesday': 'Ter',
  /** Short weekday name for Wednesday */
  'calendar.weekday-names.short.wednesday': 'Qua',

  /** Label for the close button label in Review Changes pane */
  'changes.action.close-label': 'Fechar revisão de alterações',
  /** Cancel label for revert button prompt action */
  'changes.action.revert-all-cancel': 'Cancelar',
  /** Revert all confirm label for revert button action - used on prompt button + review changes pane */
  'changes.action.revert-all-confirm': 'Reverter tudo',
  /** Prompt for reverting all changes in document in Review Changes pane. Includes a count of changes. */
  'changes.action.revert-all-description':
    'Tem certeza de que deseja reverter todas as {{count}} alterações?',
  /** Prompt for confirming revert change (singular) label for field change action */
  'changes.action.revert-changes-confirm-change_one': 'Reverter alteração',
  /** Revert for confirming revert (plural) label for field change action */
  'changes.action.revert-changes-confirm-change_other': 'Reverter alterações',
  /** Prompt for reverting changes for a field change */
  'changes.action.revert-changes-description': 'Tem certeza de que deseja reverter as alterações?',
  /** Prompt for reverting changes for a group change, eg multiple changes */
  'changes.action.revert-changes-description_one':
    'Tem certeza de que deseja reverter a alteração?',
  /** Label for when the action of the change was to set something that was previously empty, eg a field was given a value, an array item was added, an asset was selected or similar */
  'changes.added-label': 'Adicionado',
  /** Array diff: An item was added in a given position (`{{position}}`) */
  'changes.array.item-added-in-position': 'Adicionado na posição {{position}}',
  'changes.array.item-moved_down_one': 'Movido {{count}} posição para baixo',
  'changes.array.item-moved_down_other': 'Movido {{count}} posições para baixo',
  /**
   * Array diff: An item was moved within the array.
   * Receives `{{count}}` representing number of positions it moved.
   * Context is the direction of the move, either `up` or `down`.
   */
  'changes.array.item-moved_up_one': 'Movido {{count}} posição para cima',
  'changes.array.item-moved_up_other': 'Movido {{count}} posições para cima',
  /** Array diff: An item was removed from a given position (`{{position}}`) */
  'changes.array.item-removed-from-position': 'Removido da posição {{position}}',
  /** Accessibility label for the "change bar" shown when there are edits on a field-level */
  'changes.change-bar.aria-label': 'Revisar alterações',
  /** Label for when the action of the change was _not_ an add/remove, eg a text field changed value, an image was changed from one asset to another or similar */
  'changes.changed-label': 'Alterado',
  /** Label and text for tooltip that indicates the authors of the changes */
  'changes.changes-by-author': 'Alterações por',
  /** Additional text shown in development mode when a diff component crashes during rendering */
  'changes.error-boundary.developer-info':
    'Verifique o console do desenvolvedor para mais informações',
  /** Text shown when a diff component crashes during rendering, triggering the error boundary */
  'changes.error-boundary.title': 'Renderizar as alterações neste campo causou um erro',
  /** Error message shown when the value of a field is not the expected one */
  'changes.error.incorrect-type-message':
    'Erro de valor: O valor é do tipo "<code>{{actualType}}</code>", esperado "<code>{{expectedType}}</code>"',
  /** File diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.file.meta-info-fallback-title': 'Sem título',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.crop-changed': 'Corte alterado',
  /** Image diff: Text shown if the previous image asset was deleted (shouldn't theoretically happen) */
  'changes.image.deleted': 'Imagem excluída',
  /** Image diff: Text shown if the image failed to be loaded when previewing it */
  'changes.image.error-loading-image': 'Erro ao carregar imagem',
  /** Image diff: Text shown in tooltip when hovering hotspot that has changed in diff view */
  'changes.image.hotspot-changed': 'Hotspot alterado',
  /** Image diff: Fallback title for the meta info section when there is no original filename to use  */
  'changes.image.meta-info-fallback-title': 'Sem título',
  /** Image diff: Text shown if no asset has been set for the field (but has metadata changes) */
  'changes.image.no-asset-set': 'Imagem não definida',
  /** Image diff: Text shown when the from/to state has/had no image */
  'changes.image.no-image-placeholder': '(sem imagem)',
  /** Label for the "from" value in the change inspector */
  'changes.inspector.from-label': 'De',
  /** Label for the "meta" (field path, action etc) information in the change inspector */
  'changes.inspector.meta-label': 'Meta',
  /** Label for the "to" value in the change inspector */
  'changes.inspector.to-label': 'Para',
  /** Loading author of change in the differences tooltip in the review changes pane */
  'changes.loading-author': 'Carregando…',
  /** Loading changes in Review Changes Pane */
  'changes.loading-changes': 'Carregando alterações…',
  /** No Changes description in the Review Changes pane */
  'changes.no-changes-description':
    'Edite o documento ou selecione uma versão mais antiga na linha do tempo para ver uma lista de alterações aparecer neste painel.',
  /** No Changes title in the Review Changes pane */
  'changes.no-changes-title': 'Não há alterações',
  /** Portable Text diff: An annotation was added */
  'changes.portable-text.annotation_added': 'Anotação adicionada',
  /** Portable Text diff: An annotation was changed */
  'changes.portable-text.annotation_changed': 'Anotação alterada',
  /** Portable Text diff: An annotation was removed */
  'changes.portable-text.annotation_removed': 'Anotação removida',
  /** Portable Text diff: An annotation was left unchanged */
  'changes.portable-text.annotation_unchanged': 'Anotação inalterada',
  /** Portable Text diff: A block changed from one style to another (eg `normal` to `h1` or similar) */
  'changes.portable-text.block-style-changed':
    'Estilo de bloco alterado de "{{fromStyle}}" para "{{toStyle}}"',
  /** Portable Text diff: Change formatting of text (setting/unsetting marks, eg bold/italic etc) */
  'changes.portable-text.changed-formatting': 'Formatação alterada',
  /** Portable Text diff: An empty inline object is part of a change */
  'changes.portable-text.empty-inline-object': '{{inlineObjectType}} vazio',
  /** Portable Text diff: An empty object is the result of adding/removing an annotation */
  'changes.portable-text.empty-object-annotation': '{{annotationType}} vazio',
  /** Portable Text diff: Added a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_added': 'Texto vazio adicionado',
  /** Portable Text diff: Changed a block that contained no text (eg empty block) */
  'changes.portable-text.empty-text_changed': 'Texto vazio alterado',
  /** Portable Text diff: Removed a block containing no text (eg empty block) */
  'changes.portable-text.empty-text_removed': 'Texto vazio removido',
  /** Portable Text diff: An inline object was added */
  'changes.portable-text.inline-object_added': 'Objeto inline adicionado',
  /** Portable Text diff: An inline object was changed */
  'changes.portable-text.inline-object_changed': 'Objeto inline alterado',
  /** Portable Text diff: An inline object was removed */
  'changes.portable-text.inline-object_removed': 'Objeto inline removido',
  /** Portable Text diff: An inline object was left unchanged */
  'changes.portable-text.inline-object_unchanged': 'Objeto inline inalterado',
  /** Portable Text diff: Added a chunk of text */
  'changes.portable-text.text_added': 'Texto adicionado',
  /** Portable Text diff: Removed a chunk of text */
  'changes.portable-text.text_removed': 'Texto removido',
  /** Portable Text diff: Annotation has an unknown schema type */
  'changes.portable-text.unknown-annotation-schema-type': 'Tipo de esquema desconhecido',
  /** Portable Text diff: Inline object has an unknown schema type */
  'changes.portable-text.unknown-inline-object-schema-type': 'Tipo de esquema desconhecido',
  /** Label for when the action of the change was a removal, eg a field was cleared, an array item was removed, an asset was deselected or similar */
  'changes.removed-label': 'Removido',
  /** Title for the Review Changes pane */
  'changes.title': 'Revisar alterações',

  /** --- Common components --- */
  /** Tooltip text for context menu buttons */
  'common.context-menu-button.tooltip': 'Mostrar mais',
  /** Default text for dialog cancel button */
  'common.dialog.cancel-button.text': 'Cancelar',
  /** Default text for dialog confirm button */
  'common.dialog.confirm-button.text': 'Confirmar',
  /** Default text in shared loader text / spinner lockup */
  'common.loading': 'Carregando',

  /** --- Configuration issues --- */
  /** Tooltip displayed on configuration issues button */
  'configuration-issues.button.tooltip': 'Foram encontrados problemas de configuração',

  /** The fallback title for an ordering menu item if no localized titles are provided. */
  'default-menu-item.fallback-title': 'Ordenar por {{title}}',

  /** Title for the default ordering/SortOrder if no orderings are provided and the caption field is found */
  'default-orderings.caption': 'Ordenar por Legenda',
  /** Title for the default ordering/SortOrder if no orderings are provided and the description field is found */
  'default-orderings.description': 'Ordenar por Descrição',
  /** Title for the default ordering/SortOrder if no orderings are provided and the header field is found */
  'default-orderings.header': 'Ordenar por Cabeçalho',
  /** Title for the default ordering/SortOrder if no orderings are provided and the heading field is found */
  'default-orderings.heading': 'Ordenar por Título',
  /** Title for the default ordering/SortOrder if no orderings are provided and the label field is found */
  'default-orderings.label': 'Ordenar por Etiqueta',
  /** Title for the default ordering/SortOrder if no orderings are provided and the name field is found */
  'default-orderings.name': 'Ordenar por Nome',
  /** Title for the default ordering/SortOrder if no orderings are provided and the title field is found */
  'default-orderings.title': 'Ordenar por Título',

  /** Label to show in the document footer indicating the last edited date of the document */
  'document-status.edited': 'Editado {{date}}',
  /** Label to show in the document footer indicating the document is not published*/
  'document-status.not-published': 'Não publicado',
  /** Label to show in the document footer indicating the published date of the document */
  'document-status.published': 'Publicado {{date}}',

  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.duplicate-keys-alert.details.additional-description':
    'O valor da propriedade <code>_key</code> deve ser uma string única.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property of each elements has been generated non-uniquely. */
  'form.error.duplicate-keys-alert.details.description':
    'Isso geralmente acontece quando os itens são criados usando um cliente de API, e a propriedade <code>_key</code> de cada elemento foi gerada de forma não única.',
  /** Developer info */
  'form.error.duplicate-keys-alert.details.title': 'Informações para desenvolvedores',
  /** Generate unique keys */
  'form.error.duplicate-keys-alert.generate-button.text': 'Gerar chaves únicas',
  /** Several items in this list share the same identifier (key). Every item must have an unique identifier. */
  'form.error.duplicate-keys-alert.summary':
    'Vários itens nesta lista compartilham o mesmo identificador (chave). Cada item deve ter um identificador único.',
  /** Non-unique keys */
  'form.error.duplicate-keys-alert.title': 'Chaves não únicas',
  /** Error text shown when a field with a given name cannot be found in the schema or is conditionally hidden but explicitly told to render  */
  'form.error.field-not-found':
    'Campo "{{fieldName}}" não encontrado entre os membros – verifique se está definido no esquema e que não foi ocultado condicionalmente.',
  /** Add missing keys */
  'form.error.missing-keys-alert.add-button.text': 'Adicionar chaves faltantes',
  /** The value of the <code>_key</code> property must be a unique string. */
  'form.error.missing-keys-alert.details.additional-description':
    'O valor da propriedade <code>_key</code> deve ser uma string única.',
  /** This usually happens when items are created using an API client, and the <code>_key</code> property has not been included. */
  'form.error.missing-keys-alert.details.description':
    'Isso geralmente acontece quando os itens são criados usando um cliente de API, e a propriedade <code>_key</code> não foi incluída.',
  /** Developer info */
  'form.error.missing-keys-alert.details.title': 'Informações para desenvolvedores',
  /** Some items in the list are missing their keys. This must be fixed in order to edit the list. */
  'form.error.missing-keys-alert.summary':
    'Alguns itens na lista estão faltando suas chaves. Isso precisa ser corrigido para poder editar a lista.',
  /** Missing keys */
  'form.error.missing-keys-alert.title': 'Chaves faltantes',
  /** This usually happens when items are created using an API client, or when a custom input component has added invalid data to the list. */
  'form.error.mixed-array-alert.details.description':
    'Isso geralmente acontece quando os itens são criados usando um cliente de API, ou quando um componente de entrada personalizado adicionou dados inválidos à lista.',
  /** Developer info */
  'form.error.mixed-array-alert.details.title': 'Informações para desenvolvedores',
  /**  Remove non-object values */
  'form.error.mixed-array-alert.remove-button.text': 'Remover valores que não são objetos',
  /** Some items in this list are not objects. This must be fixed in order to edit the list. */
  'form.error.mixed-array-alert.summary':
    'Alguns itens nesta lista não são objetos. Isso precisa ser corrigido para poder editar a lista.',
  /** Invalid list values */
  'form.error.mixed-array-alert.title': 'Valores de lista inválidos',
  /** Error text shown when form is unable to find an array item at a given indexed path */
  'form.error.no-array-item-at-index':
    'Nenhum item de array no índice <code>{{index}}</code> encontrado no caminho <code>{{path}}</code>',
  /** Error text shown when form is unable to find an array item at a given keyed path */
  'form.error.no-array-item-at-key':
    'Nenhum item de array com `_key` <code>"{{key}}"</code> encontrado no caminho <code>{{path}}</code>',
  /** Form field deprecated label */
  'form.field.deprecated-label': undefined, // 'deprecated'
  /** Fallback title shown above field if it has no defined title */
  'form.field.untitled-field-label': 'Sem título',
  /** Fallback title shown above fieldset if it has no defined title */
  'form.field.untitled-fieldset-label': 'Sem título',
  /** Accessibility label for the icon that indicates the field has a validation error */
  'form.validation.has-error-aria-label': 'Possui erro',
  /** Accessibility label for the icon that indicates the field has validation information */
  'form.validation.has-info-aria-label': 'Possui informação',
  /** Accessibility label for the icon that indicates the field has a validation warning */
  'form.validation.has-warning-aria-label': 'Possui aviso',
  /** Text shown when summarizing validation information, when the field has one or more errors */
  'form.validation.summary.errors-count_one': '{{count}} erro',
  'form.validation.summary.errors-count_other': '{{count}} erros',
  /** Text shown when summarizing validation information, when the field has one or more warnings */
  'form.validation.summary.warnings-count_one': '{{count}} aviso',
  'form.validation.summary.warnings-count_other': '{{count}} avisos',

  /** Tooltip for free trial navbar button indicating remaining days */
  'free-trial.tooltip.days-count_one': undefined, // '{{count}} day left in trial'
  'free-trial.tooltip.days-count_other': undefined, // '{{count}} days left in trial'
  /** Tooltip for free trial navbar button, once trial has ended */
  'free-trial.tooltip.trial-finished': undefined, // 'Upgrade your project'

  /**
   * Label for "contact sales" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.contact-sales': 'Contactar vendas',
  /**
   * Label for "help and support" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.help-and-support': 'Ajuda e suporte',
  /**
   * Label for "join our community" call to action
   * These are titles for fallback links in the event the help & resources endpoint isn't able to be fetched
   */
  'help-resources.action.join-our-community': 'Junte-se à nossa comunidade',
  /** Information for what the latest sanity version is */
  'help-resources.latest-sanity-version': 'A última versão é {{latestVersion}}',
  /** Information for what studio version the current studio is running */
  'help-resources.studio-version': 'Versão do Sanity Studio {{studioVersion}}',
  /** Title for help and resources menus */
  'help-resources.title': 'Ajuda e recursos',

  /** Text for button to cancel an ongoing upload */
  'input.files.common.cancel-upload': 'Cancelar',
  /** Text for file input button in upload placeholder */
  'input.files.common.upload-placeholder.file-input-button.text': 'Carregar',
  /** Uploading <FileName/> */
  'input.files.common.upload-progress': 'Carregando <FileName/>',
  /** The referenced document cannot be opened, because the URL failed to be resolved */
  'input.reference.document-cannot-be-opened.failed-to-resolve-url':
    'Este documento não pode ser aberto (não foi possível resolver a URL para o Studio)',

  /** Label for adding item after a specific array item */
  'inputs.array.action.add-after': 'Adicionar item depois',
  /** Label for adding item before a specific array item */
  'inputs.array.action.add-before': 'Adicionar item antes',
  /** Label for adding array item action when the schema allows for only one schema type */
  'inputs.array.action.add-item': 'Adicionar item',
  /**
   * Label for adding one array item action when the schema allows for multiple schema types,
   * eg. will prompt the user to select a type once triggered
   */
  'inputs.array.action.add-item-select-type': 'Adicionar item...',
  /** Array drag handle button tooltip */
  'inputs.array.action.drag.tooltip': 'Arraste para reordenar',
  /** Label for duplicating an array item  */
  'inputs.array.action.duplicate': 'Duplicar',
  /** Label for editing the item of a specific type, eg "Edit Person" */
  'inputs.array.action.edit': 'Editar {{itemTypeTitle}}',
  /** Label for removing an array item action  */
  'inputs.array.action.remove': 'Remover',
  /** Label for removing action when an array item has an error  */
  'inputs.array.action.remove-invalid-item': 'Remover',
  /** Label for viewing the item of a specific type, eg "View Person" */
  'inputs.array.action.view': 'Ver {{itemTypeTitle}}',
  /** Error description for the array item tooltip that explains that the current item can still be moved or deleted but not edited since the schema definition is not found */
  'inputs.array.error.can-delete-but-no-edit-description':
    'Você ainda pode mover ou deletar este item, mas ele não pode ser editado já que a definição do esquema para o seu tipo não foi encontrada.',
  /** Error label for toast when array could not resolve the initial value */
  'inputs.array.error.cannot-resolve-initial-value-title':
    'Não foi possível resolver o valor inicial para o tipo: {{schemaTypeTitle}}: {{errorMessage}}.',
  /** Error label for toast when trying to upload one array item of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_one':
    'O seguinte item não pode ser carregado porque não há conversão conhecida de tipo de conteúdo para item de array:',
  /** Error label for toast when trying to upload multiple array items of a type that cannot be converted to array */
  'inputs.array.error.cannot-upload-unable-to-convert_other':
    'Os seguintes itens não podem ser carregados porque não há conversão conhecida de tipos de conteúdo para item de array:',
  /** Error description for the array item tooltip that explains that the current type item is not valid for the list  */
  'inputs.array.error.current-schema-not-declare-description':
    'O esquema atual não declara itens do tipo <code>{{typeName}}</code> como válidos para esta lista. Isso pode significar que o tipo foi removido como um item válido, ou que alguém adicionou ao seu próprio esquema local que ainda não está implantado.',
  /** Error description to show how the item is being represented in the json format */
  'inputs.array.error.json-representation-description': 'Representação JSON deste item:',
  /** Error description for the array item tooltip that explains what the error means with more context */
  'inputs.array.error.type-is-incompatible-prompt':
    'Item do tipo <code>{{typeName}}</code> não é válido para esta lista',
  /** Error title for when an item type within an array input is incompatible, used in the tooltip */
  'inputs.array.error.type-is-incompatible-title': 'Por que isto está acontecendo?',
  /** Error label for unexpected errors in the Array Input */
  'inputs.array.error.unexpected-error': 'Erro Inesperado: {{error}}',
  /** Label for when the array input doesn't have any items */
  'inputs.array.no-items-label': 'Sem itens',
  /** Label for read only array fields */
  'inputs.array.read-only-label': 'Este campo é somente leitura',
  /** Label for when the array input is resolving the initial value for the item */
  'inputs.array.resolving-initial-value': 'Resolvendo valor inicial…',
  /** Placeholder value for datetime input */
  'inputs.datetime.placeholder': 'ex.: {{example}}',
  /** Acessibility label for button to open file options menu */
  'inputs.file.actions-menu.file-options.aria-label': 'Abrir menu de opções de arquivo',
  /** Browse */
  'inputs.file.browse-button.text': 'Procurar',
  /** Select file */
  'inputs.file.dialog.title': 'Selecionar arquivo',
  /** Unknown member kind: `{{kind}}` */
  'inputs.file.error.unknown-member-kind': 'Tipo de membro desconhecido: {{kind}}',
  /** The value of this field is not a valid file. Resetting this field will let you choose a new file. */
  'inputs.file.invalid-file-warning.description':
    'O valor deste campo não é um arquivo válido. Redefinir este campo permitirá que você escolha um novo arquivo.',
  /** Reset value */
  'inputs.file.invalid-file-warning.reset-button.text': 'Redefinir valor',
  /** Invalid file value */
  'inputs.file.invalid-file-warning.title': 'Valor de arquivo inválido',
  /** Select */
  'inputs.file.multi-browse-button.text': 'Selecionar',
  /** The upload could not be completed at this time. */
  'inputs.file.upload-failed.description': 'O upload não pôde ser concluído neste momento.',
  /** Upload failed */
  'inputs.file.upload-failed.title': 'Falha no upload',
  /** Clear field */
  'inputs.files.common.actions-menu.clear-field.label': 'Limpar campo',
  /** Copy URL */
  'inputs.files.common.actions-menu.copy-url.label': 'Copiar URL',
  /** Download */
  'inputs.files.common.actions-menu.download.label': 'Baixar',
  /** The URL is copied to the clipboard */
  'inputs.files.common.actions-menu.notification.url-copied':
    'A URL foi copiada para a área de transferência',
  /** Replace */
  'inputs.files.common.actions-menu.replace.label': 'Substituir',
  /** Upload */
  'inputs.files.common.actions-menu.upload.label': 'Carregar',
  /** Drop to upload */
  'inputs.files.common.drop-message.drop-to-upload': 'Solte para carregar',
  /** Drop to upload `{{count}}` file */
  'inputs.files.common.drop-message.drop-to-upload-multi_one':
    'Solte para carregar {{count}} arquivo',
  /** Drop to upload `{{count}}` files */
  'inputs.files.common.drop-message.drop-to-upload-multi_other':
    'Solte para carregar {{count}} arquivos',
  /** Can't upload this file here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_one':
    'Não é possível carregar este arquivo aqui',
  /** Can't upload any of these files here */
  'inputs.files.common.drop-message.drop-to-upload.no-accepted-file-message_other':
    'Não é possível carregar nenhum desses arquivos aqui',
  /** `{{count}}` file can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_one':
    '{{count}} arquivo não pode ser carregado aqui',
  /** `{{count}}` files can't be uploaded here */
  'inputs.files.common.drop-message.drop-to-upload.rejected-file-message_other':
    '{{count}} arquivos não podem ser carregados aqui',
  /** Cannot upload `{{count}}` files */
  'inputs.files.common.placeholder.cannot-upload-some-files_one': 'Não é possível carregar arquivo',
  'inputs.files.common.placeholder.cannot-upload-some-files_other':
    'Não é possível carregar {{count}} arquivos',
  /** Drag or paste type here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_file': 'Arraste ou cole o arquivo aqui',
  /** Drag or paste image here */
  'inputs.files.common.placeholder.drag-or-paste-to-upload_image': 'Arraste ou cole a imagem aqui',
  /** Drop to upload file */
  'inputs.files.common.placeholder.drop-to-upload_file': 'Solte para carregar arquivo',
  /** Drop to upload image */
  'inputs.files.common.placeholder.drop-to-upload_image': 'Solte para carregar imagem',
  /** Read only */
  'inputs.files.common.placeholder.read-only': 'Somente leitura',
  /** Can't upload files here */
  'inputs.files.common.placeholder.upload-not-supported': 'Não é possível carregar arquivos aqui',
  /** Clear upload */
  'inputs.files.common.stale-upload-warning.clear': 'Limpar carregamento',
  /** An upload has made no progress for at least `{{staleThresholdMinutes}}` minutes and likely got interrupted. You can safely clear the incomplete upload and try uploading again. */
  'inputs.files.common.stale-upload-warning.description':
    'Um carregamento não teve progresso por pelo menos {{staleThresholdMinutes}} minutos e provavelmente foi interrompido. Você pode limpar o carregamento incompleto com segurança e tentar carregar novamente.',
  /** Incomplete upload */
  'inputs.files.common.stale-upload-warning.title': 'Carregamento incompleto',
  /** Tooltip text for action to crop image */
  'inputs.image.actions-menu.crop-image-tooltip': 'Cortar imagem',
  /** Accessibility label for button to open image edit dialog */
  'inputs.image.actions-menu.edit-details.aria-label': 'Abrir diálogo de edição de imagem',
  /** Accessibility label for button to open image options menu */
  'inputs.image.actions-menu.options.aria-label': 'Abrir menu de opções de imagem',
  /** Select */
  'inputs.image.browse-menu.text': 'Selecionar',
  /** Cannot upload this file here */
  'inputs.image.drag-overlay.cannot-upload-here': 'Não é possível carregar este arquivo aqui',
  /** Drop image to upload */
  'inputs.image.drag-overlay.drop-to-upload-image': 'Solte a imagem para carregar',
  /** This field is read only */
  'inputs.image.drag-overlay.this-field-is-read-only': 'Este campo é somente leitura',
  /** Unknown member kind: `{{kind}}` */
  'inputs.image.error.unknown-member-kind': 'Tipo de membro desconhecido: {{kind}}',
  /** Edit hotspot and crop */
  'inputs.image.hotspot-dialog.title': 'Editar ponto focal e cortar',
  /** The value of this field is not a valid image. Resetting this field will let you choose a new image. */
  'inputs.image.invalid-image-warning.description':
    'O valor deste campo não é uma imagem válida. Redefinir este campo permitirá que você escolha uma nova imagem.',
  /** Reset value */
  'inputs.image.invalid-image-warning.reset-button.text': 'Redefinir valor',
  /** Invalid image value */
  'inputs.image.invalid-image-warning.title': 'Valor de imagem inválido',
  /** Preview of uploaded image */
  'inputs.image.preview-uploaded-image': 'Pré-visualização da imagem carregada',
  /** The upload could not be completed at this time. */
  'inputs.image.upload-error.description': 'Não foi possível completar o upload neste momento.',
  /** Upload failed */
  'inputs.image.upload-error.title': 'Falha no upload',
  /** Adjust the rectangle to crop image. Adjust the circle to specify the area that should always be visible. */
  'inputs.imagetool.description':
    'Ajuste o retângulo para recortar a imagem. Ajuste o círculo para especificar a área que sempre deve estar visível.',
  /** Error: `{{errorMessage}}` */
  'inputs.imagetool.load-error': 'Erro: {{errorMessage}}',
  /** Hotspot & Crop */
  'inputs.imagetool.title': 'Hotspot & Crop',
  /** Convert to `{{targetType}}` */
  'inputs.invalid-value.convert-button.text': 'Converter para <code>{{targetType}}</code>',
  /** The current value (<code>`{{actualType}}`</code>) */
  'inputs.invalid-value.current-type': 'O valor atual (<code>{{actualType}}</code>)',
  /** The property value is stored as a value type that does not match the expected type. */
  'inputs.invalid-value.description':
    'O valor da propriedade está armazenado como um tipo de valor que não corresponde ao tipo esperado.',
  /** The value of this property must be of type <code>`{{validType}}`</code> according to the schema. */
  'inputs.invalid-value.details.description':
    'O valor desta propriedade deve ser do tipo <code>{{validType}}</code> de acordo com o esquema.',
  /** Only the following types are valid here according to schema: */
  'inputs.invalid-value.details.multi-type-description':
    'Apenas os seguintes tipos são válidos aqui de acordo com o esquema:',
  /** Mismatching value types typically occur when the schema has recently been changed. */
  'inputs.invalid-value.details.possible-reason':
    'Tipos de valor incompatíveis geralmente ocorrem quando o esquema foi recentemente alterado.',
  /** Developer info */
  'inputs.invalid-value.details.title': 'Informações para desenvolvedores',
  /** -- Invalid Value Input -- */
  /** Reset value */
  'inputs.invalid-value.reset-button.text': 'Resetar valor',
  /** Invalid property value */
  'inputs.invalid-value.title': 'Valor de propriedade inválido',
  /** Field groups */
  'inputs.object.field-group-tabs.aria-label': 'Grupos de campos',
  /** Read-only field description */
  'inputs.object.unknown-fields.read-only.description':
    'Este campo é <strong>somente leitura</strong> de acordo com o esquema do documento e não pode ser desmarcado. Se você deseja poder desmarcar isso no Studio, certifique-se de remover o campo <code>readOnly</code> do tipo que o envolve no esquema.',
  /** Remove field */
  'inputs.object.unknown-fields.remove-field-button.text': 'Remover campo',
  /** Encountered `{{count}}` fields that are not defined in the schema. */
  'inputs.object.unknown-fields.warning.description_one':
    'Encontrado um campo que não está definido no esquema.',
  'inputs.object.unknown-fields.warning.description_other':
    'Encontrados {{count}} campos que não estão definidos no esquema.',
  /** Detailed description of unknown field warning */
  'inputs.object.unknown-fields.warning.details.description_one':
    'Este campo não está definido no esquema, o que pode significar que a definição do campo foi removida ou que alguém adicionou ao seu próprio projeto local e ainda não implantou as mudanças.',
  'inputs.object.unknown-fields.warning.details.description_other':
    'Estes campos não estão definidos no esquema do documento, o que pode significar que as definições dos campos foram removidas ou que alguém os adicionou ao seu próprio projeto local e ainda não implantou as mudanças.',
  /** Developer info */
  'inputs.object.unknown-fields.warning.details.title': 'Informação para desenvolvedores',
  /** Unknown field found */
  'inputs.object.unknown-fields.warning.title_one': 'Campo desconhecido encontrado',
  'inputs.object.unknown-fields.warning.title_other': 'Campos desconhecidos encontrados',
  /** Collapse the editor to save screen space  */
  'inputs.portable-text.action.collapse-editor': 'Recolher editor',
  /** Aria label for action to edit an existing annotation */
  'inputs.portable-text.action.edit-annotation-aria-label': undefined, // 'Edit annotation'
  /** Expand the editor to give more editing space */
  'inputs.portable-text.action.expand-editor': 'Expandir editor',
  /** Label label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block': 'Inserir {{typeName}}',
  /** Accessibility label for action to insert a block of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-block-aria-label': 'Inserir {{typeName}} (bloco)',
  /** Label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object': 'Inserir {{typeName}}',
  /** Accessibility label for action to insert an inline object of a given type (`{{typeName}}`) */
  'inputs.portable-text.action.insert-inline-object-aria-label': 'Inserir {{typeName}} (em linha)',
  /** Aria label for action to remove an annotation */
  'inputs.portable-text.action.remove-annotation-aria-label': undefined, // 'Remove annotation'
  /** Label for activate on focus with context of click and not focused */
  'inputs.portable-text.activate-on-focus-message_click': 'Clique para ativar',
  /** Label for activate on focus with context of click and focused */
  'inputs.portable-text.activate-on-focus-message_click-focused':
    'Clique ou pressione espaço para ativar',
  /** Label for activate on focus with context of tap and not focused */
  'inputs.portable-text.activate-on-focus-message_tap': 'Toque para ativar',
  /**Aria label for the annotation object */
  'inputs.portable-text.annotation-aria-label': undefined, // 'Annotation object'
  /** Title for dialog that allows editing an annotation */
  'inputs.portable-text.annotation-editor.title': 'Editar {{schemaType}}',
  /** Title of the default "link" annotation */
  'inputs.portable-text.annotation.link': 'Link',
  /**Aria label for the block object */
  'inputs.portable-text.block.aria-label': undefined, // 'Block object'
  /** Label for action to edit a block item, in the case where it is editable */
  'inputs.portable-text.block.edit': 'Editar',
  /** Accessibility label for the button that opens the actions menu on blocks */
  'inputs.portable-text.block.open-menu-aria-label': 'Abrir menu',
  /** Label for action to open a reference, in the case of block-level reference types */
  'inputs.portable-text.block.open-reference': 'Abrir referência',
  /** Label for action to remove a block item */
  'inputs.portable-text.block.remove': 'Remover',
  /** Label for action to view a block item, in the case where it is read-only and thus cannot be edited */
  'inputs.portable-text.block.view': 'Visualizar',
  /** Title of the "code" decorator */
  'inputs.portable-text.decorator.code': 'Código',
  /** Title of the "em" (emphasis) decorator */
  'inputs.portable-text.decorator.emphasis': 'Itálico',
  /** Title of the "strike-through" decorator */
  'inputs.portable-text.decorator.strike-through': 'Riscado',
  /** Title of the "strong" decorator */
  'inputs.portable-text.decorator.strong': 'Negrito',
  /** Title of the "underline" decorator */
  'inputs.portable-text.decorator.underline': 'Sublinhado',
  /** Placeholder text for when the editor is empty */
  'inputs.portable-text.empty-placeholder': 'Vazio',
  /**Aria label for the block object */
  'inputs.portable-text.inline-block.aria-label': undefined, // 'Inline object'
  /** Label for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit': 'Editar objeto',
  /** Aria label for icon for action to edit an inline object item */
  'inputs.portable-text.inline-object.edit-aria-label': undefined, // 'Edit object'
  /** Label for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove': 'Remover objeto',
  /** Aria label for icon for action to remove an inline object item */
  'inputs.portable-text.inline-object.remove-aria-label': undefined, // 'Remove object'
  /** Disclaimer text shown on invalid Portable Text value, when an action is available to unblock the user, but it is not guaranteed to be safe */
  'inputs.portable-text.invalid-value.action-disclaimer':
    'NOTA: Geralmente é seguro realizar a ação acima, mas se você estiver em dúvida, entre em contato com os responsáveis pela configuração do seu estúdio.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.action': 'Remova o objeto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` of type `{{childType}}` which is not allowed by the schema definition */
  'inputs.portable-text.invalid-value.disallowed-child-type.description':
    'Criança com a chave {{childKey}} do bloco com a chave <code>{{key}}</code> é do tipo <code>{{childType}}</code>, o que não é permitido pelo esquema.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.action': 'Remover o bloco',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a type (`{{typeName}}`) that is not an allowed block type for this field */
  'inputs.portable-text.invalid-value.disallowed-type.description':
    'O bloco com a chave <code>{{key}}</code> é do tipo <code>{{typeName}}</code>, que não é permitido pelo esquema.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.action': 'Insira um intervalo de texto vazio',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains no children */
  'inputs.portable-text.invalid-value.empty-children.description':
    'Bloco de texto com a chave <code>{{key}}</code> não tem intervalos de texto.',
  /** Label for the button to ignore invalid values in the Portable Text editor */
  'inputs.portable-text.invalid-value.ignore-button.text': 'Ignorar',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.action':
    'Usar tipo <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a `_type` property that is set to `block`, but the block type defined in schema has a different name (`{{expectedTypeName}}`) */
  'inputs.portable-text.invalid-value.incorrect-block-type.description':
    'O bloco com a chave <code>{{key}}</code> tem um nome de tipo inválido. De acordo com o esquema, deveria ser <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.action': 'Defina um valor de texto vazio',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a span with key `{{childKey}}` that has a missing or invalid `text` property */
  'inputs.portable-text.invalid-value.invalid-span-text.description':
    'Intervalo com a chave {{childKey}} do bloco com a chave <code>{{key}}</code> tem uma propriedade <code>text</code> ausente ou inválida.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.action':
    'Usar tipo <code>{{expectedTypeName}}</code>',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property, but seems to be a block of type `{{expectedTypeName}}` */
  'inputs.portable-text.invalid-value.missing-block-type.description':
    'O bloco com a chave <code>{{key}}</code> está faltando um nome de tipo. De acordo com o esquema, deveria ser <code>{{expectedTypeName}}</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.action': 'Atribua uma chave aleatória',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child at `{{index}}` which is missing `_key` property */
  'inputs.portable-text.invalid-value.missing-child-key.description':
    'Criança no índice <code>{{index}}</code> do bloco com a chave <code>{{key}}</code> está faltando a propriedade <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.action': 'Remova o objeto',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` has a child with key `{{childKey}}` which is missing a `_type` property */
  'inputs.portable-text.invalid-value.missing-child-type.description':
    'Criança com a chave {{childKey}} do bloco com a chave <code>{{key}}</code> está faltando a propriedade <code>_type</code>.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.action': 'Atribuir chave aleatória',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is missing the required `_key` property */
  'inputs.portable-text.invalid-value.missing-key.description':
    'O bloco no índice <code>{{index}}</code> está faltando a propriedade obrigatória <code>_key</code>.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.action': 'Remova o bloco',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `children` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-children.description':
    'Bloco de texto com a chave <code>{{key}}</code> tem uma propriedade `children` inválida ou ausente.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.action': 'Adicione a propriedade',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` has a missing or invalid `markDefs` property */
  'inputs.portable-text.invalid-value.missing-or-invalid-markdefs.description':
    'Bloco de texto com a chave <code>{{key}}</code> tem uma propriedade `markDefs` inválida ou ausente.',
  /** Action presented when the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.action': 'Remover o bloco',
  /** Text explaining that the Portable Text field value is invalid, when child with key `{{key}}` is missing a `_type` property  */
  'inputs.portable-text.invalid-value.missing-type.description':
    'O bloco com a chave <code>{{key}}</code> está faltando um nome de tipo.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.action': 'Remova o item',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains a non-object child at index `{{index}}` */
  'inputs.portable-text.invalid-value.non-object-child.description':
    'Criança no índice <code>{{index}}</code> do bloco com a chave <code>{{key}}</code> não é um objeto.',
  /** Action presented when the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.action': 'Desconfigurar o valor',
  /** Text explaining that the Portable Text field value is invalid, when the Portable Text field is not an array, or the array is empty */
  'inputs.portable-text.invalid-value.not-an-array.description':
    'O valor deve ser um array de blocos de Portable Text, ou indefinido.',
  /** Action presented when the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.action': 'Remover item',
  /** Text explaining that the Portable Text field value is invalid, when child at `{{index}}` is not an object */
  'inputs.portable-text.invalid-value.not-an-object.description':
    'O item em <code>{{index}}</code> não é um objeto.',
  /** Action presented when the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.action': 'Remova as marcas não permitidas',
  /** Text explaining that the Portable Text field value is invalid, when block with key `{{key}}` contains marks (`{{orphanedMarks}}`) that are not supported by the current schema */
  'inputs.portable-text.invalid-value.orphaned-marks.description':
    'Bloco de texto com a chave <code>{{key}}</code> contém marcas <code>({{orphanedMarks, list}})</code> que não são permitidas pelo esquema.',
  /** Title for the alert indicating that the Portable Text field has an invalid value */
  'inputs.portable-text.invalid-value.title': 'Valor inválido de Portable Text',
  /** Title of "bulleted" list type */
  'inputs.portable-text.list-type.bullet': 'Lista com marcadores',
  /** Title of numbered list type */
  'inputs.portable-text.list-type.number': 'Lista numerada',
  /** Title of the "h1" block style */
  'inputs.portable-text.style.h1': 'Cabeçalho 1',
  /** Title of the "h2" block style */
  'inputs.portable-text.style.h2': 'Cabeçalho 2',
  /** Title of the "h3" block style */
  'inputs.portable-text.style.h3': 'Cabeçalho 3',
  /** Title of the "h4" block style */
  'inputs.portable-text.style.h4': 'Cabeçalho 4',
  /** Title of the "h5" block style */
  'inputs.portable-text.style.h5': 'Cabeçalho 5',
  /** Title of the "h6" block style */
  'inputs.portable-text.style.h6': 'Cabeçalho 6',
  /** Title shown when multiple blocks of varying styles is selected */
  'inputs.portable-text.style.multiple': 'Múltiplos',
  /** Title of fallback when no style is given for a block */
  'inputs.portable-text.style.none': 'Sem estilo',
  /** Title of the "normal" block style */
  'inputs.portable-text.style.normal': 'Normal',
  /** Title of the "quote" block style */
  'inputs.portable-text.style.quote': 'Citação',
  /** Label for action to clear the current value of the reference field */
  'inputs.reference.action.clear': 'Limpar',
  /** Label for action to create a new document from the reference input */
  'inputs.reference.action.create-new-document': 'Criar novo',
  /** Label for action to create a new document from the reference input, when there are multiple templates or document types to choose from */
  'inputs.reference.action.create-new-document-select': 'Criar novo…',
  /** Label for action to duplicate the current item to a new item (used within arrays) */
  'inputs.reference.action.duplicate': 'Duplicar',
  /** Label for action that opens the referenced document in a new tab */
  'inputs.reference.action.open-in-new-tab': 'Abrir em nova aba',
  /** Label for action to remove the reference from an array */
  'inputs.reference.action.remove': 'Remover',
  /** Label for action to replace the current value of the field */
  'inputs.reference.action.replace': 'Substituir',
  /** Label for action to cancel a previously initiated replace action  */
  'inputs.reference.action.replace-cancel': 'Cancelar substituição',
  /** The cross-dataset reference field currently has a reference, but the feature has been disabled since it was created. This explains what can/cannot be done in its current state. */
  'inputs.reference.cross-dataset.feature-disabled-actions':
    'Você ainda pode limpar a referência existente deste campo, mas não poderá ser alterada para um documento diferente enquanto o recurso estiver desativado.',
  /** A cross-dataset reference field exists but the feature has been disabled. A <DocumentationLink> component is available. */
  'inputs.reference.cross-dataset.feature-disabled-description':
    'Este recurso foi desativado. Leia como ativá-lo em <DocumentationLink>a documentação</DocumentationLink>.',
  /** Title for a warning telling the user that the current project does not have the "cross dataset references" feature */
  'inputs.reference.cross-dataset.feature-unavailable-title':
    'Recurso indisponível: Referência entre datasets',
  /** The cross-dataset reference points to a document with an invalid type  */
  'inputs.reference.cross-dataset.invalid-type':
    'O documento referenciado é de um tipo inválido ({{typeName}}) <JsonValue/>',
  /** The referenced document will open in a new tab (due to external studio) */
  'inputs.reference.document-opens-in-new-tab': 'Este documento será aberto em uma nova aba',
  /** Error title for when the document is unavailable (for any possible reason) */
  'inputs.reference.error.document-unavailable-title': 'Documento indisponível',
  /** Error title for when the referenced document failed to be loaded */
  'inputs.reference.error.failed-to-load-document-title':
    'Falha ao carregar o documento referenciado',
  /** Error title for when the reference search returned a document that is not an allowed type for the field */
  'inputs.reference.error.invalid-search-result-type-title':
    'A pesquisa retornou um tipo que não é válido para esta referência: "{{returnedType}}"',
  /** Error description for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-description':
    'O documento referenciado (<code>{{documentId}}</code>) é do tipo <code>{{actualType}}</code>. De acordo com o esquema, os documentos referenciados só podem ser do tipo <AllowedTypes />.',
  /** Error title for when the document referenced is not one of the types declared as allowed target types in schema */
  'inputs.reference.error.invalid-type-title': 'Documento de tipo inválido',
  /** Error description for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-description':
    'O documento referenciado não pôde ser acessado devido a permissões insuficientes',
  /** Error title for when the user does not have permissions to read the referenced document */
  'inputs.reference.error.missing-read-permissions-title': 'Permissões insuficientes',
  /** Error description for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-description':
    'O documento referenciado não existe (ID: <code>{{documentId}}</code>). Você pode remover a referência ou substituí-la por outro documento.',
  /** Error title for when the current reference value points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document-title': 'Não encontrado',
  /** Label for button that clears the reference when it points to a document that does not exist (on weak references) */
  'inputs.reference.error.nonexistent-document.clear-button-label': 'Limpar',
  /** Error title for when the search for a reference failed. Note that the message sent by the backend may not be localized. */
  'inputs.reference.error.search-failed-title': 'Falha na busca de referência',
  /** Alternative text for the image shown in cross-dataset reference input */
  'inputs.reference.image-preview-alt-text': 'Pré-visualização da imagem do documento referenciado',
  /** Description for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-description':
    '<strong>{{referencedDocument}}</strong> está publicado e esta referência deve agora ser finalizada.',
  /** Title for alert shown when a reference in a live-edit document is marked as being weak, the referenced document exists, AND the reference is supposed to be have been strengthened on publish */
  'inputs.reference.incomplete-reference.finalize-action-title': 'Finalizar referência',
  /** Description for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-description':
    '<strong>{{referencedDocument}}</strong> está publicado e esta referência deve agora ser convertida para uma referência forte.',
  /** Title for alert shown when a reference in a live-edit document points to a document that exists and has been published, but the reference is still marked as weak */
  'inputs.reference.incomplete-reference.strengthen-action-title':
    'Converter para referência forte',
  /** Label for button that triggers the action that strengthen a reference */
  'inputs.reference.incomplete-reference.strengthen-button-label':
    'Converter para referência forte',
  /** Label for button that triggers a retry attempt for reference metadata  */
  'inputs.reference.metadata-error.retry-button-label': 'Tentar novamente',
  /** Title for alert shown when reference metadata fails to be loaded */
  'inputs.reference.metadata-error.title': 'Não foi possível carregar os metadados da referência',
  /** Message shown when no documents were found that matched the given search string */
  'inputs.reference.no-results-for-query':
    'Nenhum resultado para <strong>“{{searchTerm}}”</strong>',
  /** Text for tooltip showing when a document was edited, using relative time (eg "how long ago was it edited?") */
  'inputs.reference.preview.edited-at-time': 'Editado <RelativeTime/>',
  /** Accessibility label for icon indicating that document does _not_ have any unpublished changes */
  'inputs.reference.preview.has-no-unpublished-changes-aria-label': 'Sem edições não publicadas',
  /** Accessibility label for icon indicating that document has unpublished changes */
  'inputs.reference.preview.has-unpublished-changes-aria-label': 'Editado',
  /** Accessibility label for icon indicating that document does _not_ have a published version */
  'inputs.reference.preview.is-not-published-aria-label': 'Não publicado',
  /** Accessibility label for icon indicating that document has a published version */
  'inputs.reference.preview.is-published-aria-label': 'Publicado',
  /** Text for tooltip indicating that a document has no unpublished edits */
  'inputs.reference.preview.no-unpublished-edits': 'Sem edições não publicadas',
  /** Text for tooltip indicating that a document has not yet been published */
  'inputs.reference.preview.not-published': 'Não publicado',
  /** Text for tooltip showing when a document was published, using relative time (eg "how long ago was it published?") */
  'inputs.reference.preview.published-at-time': 'Publicado <RelativeTime/>',
  /** The referenced document no longer exist and might have been deleted (for weak references) */
  'inputs.reference.referenced-document-does-not-exist':
    'O documento referenciado já não existe e pode ter sido excluído (ID do documento: <code>{{documentId}}</code>).',
  /** The referenced document could not be displayed to the user because of insufficient permissions */
  'inputs.reference.referenced-document-insufficient-permissions':
    'O documento referenciado não pôde ser acessado devido a permissões insuficientes',
  /** Label for when the reference input is resolving the initial value for an item */
  'inputs.reference.resolving-initial-value': 'Resolvendo valor inicial…',
  /** Placeholder shown in a reference input with no current value */
  'inputs.reference.search-placeholder': 'Digite para pesquisar',
  /** Explanation of the consequences of leaving the reference as strong instead of weak */
  'inputs.reference.strength-mismatch.is-strong-consquences':
    'Não será possível excluir o documento de referência sem antes remover esta referência ou convertê-la para fraca.',
  /** Description for alert shown when a reference is supposed to be weak, but the actual value is strong */
  'inputs.reference.strength-mismatch.is-strong-description':
    'Esta referência é <em>forte</em>, mas de acordo com o esquema atual deveria ser <em>fraca</em>.',
  /** Explanation of the consequences of leaving the reference as weak instead of strong */
  'inputs.reference.strength-mismatch.is-weak-consquences':
    'Isso torna possível excluir o documento referenciado sem antes excluir esta referência, deixando este campo referenciando um documento inexistente.',
  /** Description for alert shown when a reference is supposed to be strong, but the actual value is weak */
  'inputs.reference.strength-mismatch.is-weak-description':
    'Esta referência é <em>fraca</em>, mas de acordo com o esquema atual deveria ser <em>forte</em>.',
  /** Label for button that triggers the action that strengthens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.strengthen-button-label': 'Converter para referência forte',
  /** Title for alert shown when a reference is supposed to be weak/strong, but the actual value is the opposite of what it is supposed to be */
  'inputs.reference.strength-mismatch.title': 'Incompatibilidade de força da referência',
  /** Label for button that triggers the action that weakens a reference on strength mismatch */
  'inputs.reference.strength-mismatch.weaken-button-label': 'Converter para referência fraca',
  /** Action message for generating the slug */
  'inputs.slug.action.generate': 'Gerar',
  /** Loading message for when the input is actively generating a slug */
  'inputs.slug.action.generating': 'Gerando…',
  /** Error message for when the source to generate a slug from is missing */
  'inputs.slug.error.missing-source':
    'Fonte ausente. Verifique a fonte no tipo {{schemaType}} no esquema',
  /** Placeholder for an empty tag input */
  'inputs.tags.placeholder': 'Digite a tag e pressione ENTER…',
  /** Placeholder for an empty tag input on touch devices */
  'inputs.tags.placeholder_touch': 'Digite a tag…',
  /** Convert to `{{targetType}}` */
  'inputs.untyped-value.convert-button.text': 'Converter para <code>{{targetType}}</code>',
  /** Encountered an object value without a <code>_type</code> property. */
  'inputs.untyped-value.description':
    'Encontrado um valor de objeto sem a propriedade <code>_type</code>.',
  /** Either remove the <code>name</code> property of the object declaration, or set <code>_type</code> property on items. */
  'inputs.untyped-value.details.description':
    'Remova a propriedade <code>name</code> da declaração do objeto, ou defina a propriedade <code>_type</code> nos itens.',
  /** Current value (<code>object</code>): */
  'inputs.untyped-value.details.json-dump-prefix': 'Valor atual (<code>object</code>):',
  /** The following types are valid here according to schema: */
  'inputs.untyped-value.details.multi-type-description':
    'Os seguintes tipos são válidos aqui de acordo com o esquema:',
  /** Developer info */
  'inputs.untyped-value.details.title': 'Informações para desenvolvedores',
  /** Property value missing <code>_type</code> */
  'inputs.untyped-value.title': 'Valor da propriedade faltando <code>_type</code>',
  /** Unset value */
  'inputs.untyped-value.unset-item-button.text': 'Desconfigurar valor',

  /** The fallback explanation if no context is provided */
  'insufficient-permissions-message.not-authorized-explanation':
    'Você não tem permissão para acessar este recurso.',
  /** The explanation when unable to create any document at all */
  'insufficient-permissions-message.not-authorized-explanation_create-any-document':
    'Você não tem permissão para criar um documento.',
  /** The explanation when unable to create a particular document */
  'insufficient-permissions-message.not-authorized-explanation_create-document':
    'Você não tem permissão para criar este documento.',
  /** The explanation when unable to create a particular type of document */
  'insufficient-permissions-message.not-authorized-explanation_create-document-type':
    'Você não tem permissão para criar este tipo de documento.',
  /** The explanation when unable to create a new reference in a document */
  'insufficient-permissions-message.not-authorized-explanation_create-new-reference':
    'Você não tem permissão para criar uma nova referência.',
  /** The explanation when unable to delete a particular document */
  'insufficient-permissions-message.not-authorized-explanation_delete-document':
    'Você não tem permissão para excluir este documento.',
  /** The explanation when unable to discard changes in a particular document */
  'insufficient-permissions-message.not-authorized-explanation_discard-changes':
    'Você não tem permissão para descartar as alterações neste documento.',
  /** The explanation when unable to duplicate a particular document */
  'insufficient-permissions-message.not-authorized-explanation_duplicate-document':
    'Você não tem permissão para duplicar este documento.',
  /** The explanation when unable to publish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_publish-document':
    'Você não tem permissão para publicar este documento.',
  /** The explanation when unable to unpublish a particular document */
  'insufficient-permissions-message.not-authorized-explanation_unpublish-document':
    'Você não tem permissão para despublicar este documento.',
  /** Appears after the not-authorized message. Lists the current roles. */
  'insufficient-permissions-message.roles': 'Seus papéis: <Roles/>',
  /** The title for the insufficient permissions message component */
  'insufficient-permissions-message.title': 'Permissões insuficientes',

  /** Unexpected error: `{{error}}` */
  'member-field-error.unexpected-error': 'Erro inesperado: {{error}}',

  /** Button label for "Create new document" button */
  'new-document.button': 'Criar',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are templates/types available for creation
   */
  'new-document.create-new-document-label': 'Novo documento…',
  /** Placeholder for the "filter" input within the new document menu */
  'new-document.filter-placeholder': 'Filtrar',
  /** Loading indicator text within the new document menu */
  'new-document.loading': 'Carregando…',
  /** Accessibility label for the list displaying options in the new document menu */
  'new-document.new-document-aria-label': 'Novo documento',
  /** Message for when there are no document type options in the new document menu */
  'new-document.no-document-types-found': 'Nenhum tipo de documento encontrado',
  /**
   * Tooltip message displayed when hovering/activating the "Create new document" action,
   * when there are no templates/types to create from
   */
  'new-document.no-document-types-label': 'Sem tipos de documento',
  /** Message for when no results are found for a specific search query in the new document menu */
  'new-document.no-results': 'Nenhum resultado para <strong>{{searchQuery}}</strong>',
  /** Aria label for the button that opens the "Create new document" popover/dialog */
  'new-document.open-dialog-aria-label': 'Criar novo documento',
  /** Title for "Create new document" dialog */
  'new-document.title': 'Criar novo documento',

  /** Label for action to manage members of the current studio project */
  'presence.action.manage-members': 'Gerenciar membros',
  /** Accessibility label for presence menu button */
  'presence.aria-label': 'Quem está aqui',
  /** Message description for when no one else is currently present */
  'presence.no-one-else-description':
    'Convide pessoas para o projeto para ver o status online delas.',
  /** Message title for when no one else is currently present */
  'presence.no-one-else-title': 'Ninguém mais está aqui',
  /** Message for when a user is not in a document (displayed in the global presence menu) */
  'presence.not-in-a-document': 'Não está em um documento',
  /** Tooltip content text for presence menu button */
  'presence.tooltip-content': undefined, // 'Who is here'

  /** Fallback title shown when a preview does not provide a title */
  'preview.default.title-fallback': 'Sem título',
  /** Fallback preview value for types that have "no value" (eg null, undefined) */
  'preview.fallback.no-value': '(sem valor)',
  /** Alternative text for image being shown while image is being uploaded, in previews */
  'preview.image.file-is-being-uploaded.alt-text': 'A imagem está sendo carregada',

  /* Relative time, just now */
  'relative-time.just-now': 'agora mesmo',

  /** Accessibility label to open search action when the search would go fullscreen (eg on narrower screens) */
  'search.action-open-aria-label': 'Abrir pesquisa',
  /** Action label for adding a search filter */
  'search.action.add-filter': 'Adicionar filtro',
  /** Action label for clearing search filters */
  'search.action.clear-filters': 'Limpar filtros',
  /** Label for action to clear recent searches */
  'search.action.clear-recent-searches': 'Limpar pesquisas recentes',
  /** Accessibility label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-aria-label': 'Limpar filtros marcados',
  /** Label for action to clear all currently applied document type filters */
  'search.action.clear-type-filters-label': 'Limpar',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to close the search */
  'search.action.close-search-aria-label': 'Fechar pesquisa',
  /** Accessibility label for filtering by document type */
  'search.action.filter-by-document-type-aria-label': 'Filtrar por tipo de documento',
  /** Accessibility action label for removing an already applied search filter */
  'search.action.remove-filter-aria-label': 'Remover filtro',
  /**
   * Text displayed when either no document type(s) have been selected, or we need a fallback,
   * eg "Search for all types".
   */
  'search.action.search-all-types': 'Pesquisar todos os documentos',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, and can fit within the space assigned by the design.
   */
  'search.action.search-specific-types': 'Pesquisar por {{types, list}}',
  /**
   * Text displayed when we are able to determine one or more document types that will be used for
   * searching, but cannot list them all within the space assigned by the design, so we need an
   * additional "and X more" suffix. Allows using pluralization suffixes, eg `_one`, `_other` etc.
   */
  'search.action.search-specific-types-truncated':
    'Pesquisar por {{types, list}} +{{count}} a mais',
  /** Dialog title for action to select an asset of unknown type */
  'search.action.select-asset': 'Selecionar ativo',
  /** Dialog title for action to select a file asset */
  'search.action.select-asset_file': 'Selecionar arquivo',
  /** Dialog title for action to select an image asset */
  'search.action.select-asset_image': 'Selecionar imagem',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-aria-label_hide': 'Ocultar filtros',
  /** Accessibility label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-aria-label_show': 'Mostrar filtros',
  /** Label for when the search is full screen (on narrow screens) and you want to hide filters */
  'search.action.toggle-filters-label_hide': 'Ocultar filtros',
  /** Label for when the search is full screen (on narrow screens) and you want to show filters */
  'search.action.toggle-filters-label_show': 'Mostrar filtros',
  /** Tooltip text for the global search button */
  'search.button.tooltip': 'Pesquisar',
  /**
   * A list of provided types (use `list` formatter preferably).
   */
  'search.document-type-list': '{{types, list}}',
  /**
   * In the context of a list of document types - no filtering selection has been done,
   * thus the default is "all types".
   */
  'search.document-type-list-all-types': 'Todos os tipos',
  /**
   * A list of provided types that has been truncated - more types are included but not displayed,
   * thus we need to indicate that there are more. Allows using pluralization suffixes,
   * eg `_one`, `_other` etc.
   */
  'search.document-type-list-truncated': '{{types, list}} +{{count}} a mais',
  /** Accessibility label for list displaying the available document types */
  'search.document-types-aria-label': 'Tipos de documento',
  /** Label for when no document types matching the filter are found */
  'search.document-types-no-matches-found': 'Nenhum resultado para {{filter}}',
  /** Description for error when a filter cannot be displayed, describes that you should check the schema */
  'search.error.display-filter-description':
    'Isso pode indicar opções inválidas definidas em seu esquema.',
  /** Title for error when a filter cannot be displayed (mainly a developer-oriented error) */
  'search.error.display-filter-title': 'Ocorreu um erro ao exibir este filtro.',
  /** Description for error when no valid asset source is found, describes that you should check the the current studio config */
  'search.error.no-valid-asset-source-check-config-description':
    'Por favor, certifique-se de que está habilitado no arquivo de configuração do seu estúdio.',
  /** Description for error when no valid asset source is found, describes that only the default asset is supported */
  'search.error.no-valid-asset-source-only-default-description':
    'Atualmente, apenas a fonte de ativos padrão é suportada.',
  /** Title for error when no valid asset sources found */
  'search.error.no-valid-asset-source-title': 'Nenhuma fonte de ativos válida encontrada.',
  /** Helpful description for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-help-description':
    'Por favor, tente novamente ou verifique sua conexão',
  /** Title label for when search returned an error that we are not able to describe in detail */
  'search.error.unspecified-error-title': 'Algo deu errado durante a pesquisa',
  /**
   * Label for "All fields", a label that appears above the list of available fields when filtering.
   * If one or more document type has been chosen as filter, this label is replaced with a group of
   * fields per selected document type
   */
  'search.filter-all-fields-header': 'Todos os campos',
  /** Label for the action of changing from one file to a different file in asset search filter */
  'search.filter-asset-change_file': 'Alterar arquivo',
  /** Label for the action of changing from one image to a different image in asset search filter */
  'search.filter-asset-change_image': 'Alterar imagem',
  /** Label for the action of clearing the currently selected asset in an image/file filter */
  'search.filter-asset-clear': 'Limpar',
  /** Label for the action of selecting a file in asset search filter */
  'search.filter-asset-select_file': 'Selecionar arquivo',
  /** Label for the action of selecting an image in asset search filter */
  'search.filter-asset-select_image': 'Selecionar imagem',
  /** Label for boolean filter - false */
  'search.filter-boolean-false': 'Falso',
  /** Label for boolean filter - true */
  'search.filter-boolean-true': 'Verdadeiro',
  /** Accessibility label for list that lets you filter fields by title, when adding a new filter in search */
  'search.filter-by-title-aria-label': 'Filtrar por título',
  /** Accessibility label for date filter input */
  'search.filter-date-aria-label': 'Data',
  /** Accessibility label for selecting end date on the date range search filter */
  'search.filter-date-range-end-date-aria-label': 'Data de término',
  /** Accessibility label for selecting start date on the date range search filter */
  'search.filter-date-range-start-date-aria-label': 'Data de início',
  /**
   * Label for "Days"/"Months"/"Years" when selecting it as unit in "X days ago" search filter.
   * Capitalized, as it would be listed in a dropdown.
   */
  'search.filter-date-unit_days': 'Dias',
  'search.filter-date-unit_months': 'Meses',
  'search.filter-date-unit_years': 'Anos',
  /** Accessibility label for selecting the unit (day/month/year) when adding "X days ago" search filter */
  'search.filter-date-unit-aria-label': 'Selecionar unidade',
  /** Accessibility label for the input value (days/months/years) when adding "X days ago" search filter */
  'search.filter-date-value-aria-label': 'Valor da unidade',
  /** Label for "field description" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-description': 'Descrição do campo',
  /** Label for "field name" shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-name': 'Nome do campo',
  /** Label for "Used in document types", a list of the document types a field appears in. Shown in tooltip when navigating list of possible fields to filter */
  'search.filter-field-tooltip-used-in-document-types': 'Usado em tipos de documento',
  /** Label for when no fields/filters are found for the given term */
  'search.filter-no-matches-found': 'Nenhum resultado para {{filter}}',
  /** Placeholder value for maximum numeric value filter */
  'search.filter-number-max-value-placeholder': 'Valor máximo',
  /** Placeholder value for minimum numeric value filter */
  'search.filter-number-min-value-placeholder': 'Valor mínimo',
  /** Placeholder value for the number filter */
  'search.filter-number-value-placeholder': 'Valor',
  /** Placeholder for the "Filter" input, when narrowing possible fields/filters */
  'search.filter-placeholder': 'Filtrar',
  /** Label for the action of clearing the currently selected document in a reference filter */
  'search.filter-reference-clear': 'Limpar',
  /**
   * Label for "shared fields", a label that appears above a list of fields that all filtered types
   * have in common, when adding a new filter. For instance, if "book" and "employee" both have a
   * "title" field, this field would be listed under "shared fields".
   * */
  'search.filter-shared-fields-header': 'Campos compartilhados',
  /** Placeholder value for the string filter */
  'search.filter-string-value-placeholder': 'Valor',
  /** Label/placeholder prompting user to select one of the predefined, allowed values for a string field */
  'search.filter-string-value-select-predefined-value': 'Selecionar…',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (singular) */
  'search.filters-aria-label_one': 'Filtro',
  /** Accessibility label for the "Filters" list, that is shown when using "Add filter" in search (plural) */
  'search.filters-aria-label_other': 'Filtros',
  /** Label for instructions on how to use the search - displayed when no recent searches are available */
  'search.instructions': 'Use <ControlsIcon/> para refinar sua pesquisa',
  /** Helpful description for when no search results are found */
  'search.no-results-help-description': 'Tente outra palavra-chave ou ajuste seus filtros',
  /** Title label for when no search results are found */
  'search.no-results-title': 'Nenhum resultado encontrado',
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
    '<Field/> <Operator>tem</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-equal.description_other':
    '<Field/> <Operator>tem</Operator> <Value>{{count}} itens</Value>',
  'search.operator.array-count-equal.name': 'quantidade é',
  /* Array should have a count greater than given filter value */
  'search.operator.array-count-gt.description_one':
    '<Field/> <Operator>tem ></Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-gt.description_other':
    '<Field/> <Operator>tem ></Operator> <Value>{{count}} itens</Value>',
  'search.operator.array-count-gt.name': 'quantidade maior que',
  /* Array should have a count greater than or equal to the given filter value */
  'search.operator.array-count-gte.description_one':
    '<Field/> <Operator>tem ≥</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-gte.description_other':
    '<Field/> <Operator>tem ≥</Operator> <Value>{{count}} itens</Value>',
  'search.operator.array-count-gte.name': 'quantidade maior ou igual a',
  /* Array should have a count less than given filter value */
  'search.operator.array-count-lt.description_one':
    '<Field/> <Operator>tem <</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-lt.description_other':
    '<Field/> <Operator>tem <</Operator> <Value>{{count}} itens</Value>',
  'search.operator.array-count-lt.name': 'quantidade menor que',
  /* Array should have a count less than or equal to the given filter value */
  'search.operator.array-count-lte.description_one':
    '<Field/> <Operator>tem ≤</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-lte.description_other':
    '<Field/> <Operator>tem ≤</Operator> <Value>{{count}} itens</Value>',
  'search.operator.array-count-lte.name': 'quantidade menor ou igual a',
  /* Array should have a count that is not equal to the given filter value */
  'search.operator.array-count-not-equal.description_one':
    '<Field/> <Operator>não tem</Operator> <Value>{{count}} item</Value>',
  'search.operator.array-count-not-equal.description_other':
    '<Field/> <Operator>não tem</Operator> <Value>{{count}} itens</Value>',
  'search.operator.array-count-not-equal.name': 'quantidade não é',
  /**
   * Array should have a count within the range of given filter values.
   * Gets passed `{{from}}` and `{{to}}` values.
   **/
  'search.operator.array-count-range.description':
    '<Field/> <Operator>tem entre</Operator> <Value>{{from}} → {{to}} itens</Value>',
  'search.operator.array-count-range.name': 'quantidade está entre',
  /* Array should include the given value */
  'search.operator.array-list-includes.description':
    '<Field/> <Operator>inclui</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-includes.name': 'inclui',
  /* Array should not include the given value */
  'search.operator.array-list-not-includes.description':
    '<Field/> <Operator>não inclui</Operator> <Value>{{value}}</Value>',
  'search.operator.array-list-not-includes.name': 'não inclui',
  /* Array should include the given reference */
  'search.operator.array-reference-includes.description':
    '<Field/> <Operator>inclui</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-includes.name': 'inclui',
  /* Array should not include the given reference */
  'search.operator.array-reference-not-includes.description':
    '<Field/> <Operator>não inclui</Operator> <Value>{{value}}</Value>',
  'search.operator.array-reference-not-includes.name': 'não inclui',
  /* Asset (file) should be the selected asset */
  'search.operator.asset-file-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-equal.name': 'é',
  /* Asset (file) should not be the selected asset */
  'search.operator.asset-file-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-file-not-equal.name': 'não é',
  /* Asset (image) should be the selected asset */
  'search.operator.asset-image-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-equal.name': 'é',
  /* Asset (image) should not be the selected asset */
  'search.operator.asset-image-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.asset-image-not-equal.name': 'não é',
  /**
   * Boolean value should be the given filter value (true/false).
   * Context passed is `true` and `false`, allowing for more specific translations:
   * - `search.operator.boolean-equal.description_true`
   * - `search.operator.boolean-equal.description_false`
   */
  'search.operator.boolean-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.boolean-equal.name': 'é',
  /* Date should be after (later than) given filter value */
  'search.operator.date-after.description':
    '<Field/> <Operator>é depois</Operator> <Value>{{value}}</Value>',
  'search.operator.date-after.name': 'depois',
  /* Date should be before (earlier than) given filter value */
  'search.operator.date-before.description':
    '<Field/> <Operator>é antes</Operator> <Value>{{value}}</Value>',
  'search.operator.date-before.name': 'antes',
  /* Date should be the given filter value */
  'search.operator.date-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.date-equal.name': 'é',
  /* Date should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-last.description':
    '<Field/> <Operator>está nos últimos</Operator> <Value>{{value}}</Value>',
  'search.operator.date-last.name': 'último',
  /* Date should not be the given filter value */
  'search.operator.date-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.date-not-equal.name': 'não é',
  /* Date should be within the range of given filter values */
  'search.operator.date-range.description': '<Field/> <Operator>está entre</Operator> <Value/>',
  'search.operator.date-range.name': 'está entre',
  /* Date and time should be after (later than) given filter value */
  'search.operator.date-time-after.description':
    '<Field/> <Operator>é depois</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-after.name': 'depois',
  /* Date and time should be before (earlier than) given filter value */
  'search.operator.date-time-before.description':
    '<Field/> <Operator>é antes</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-before.name': 'antes',
  /* Date and time should be the given filter value */
  'search.operator.date-time-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-equal.name': 'é',
  /* Date and time should be within the given filter value range (eg "within the last X days") */
  'search.operator.date-time-last.description':
    '<Field/> <Operator>está nos últimos</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-last.name': 'último',
  /* Date and time should not be the given filter value */
  'search.operator.date-time-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.date-time-not-equal.name': 'não é',
  /* Date and time should be within the range of given filter values */
  'search.operator.date-time-range.description':
    '<Field/> <Operator>está entre</Operator> <Value/>',
  'search.operator.date-time-range.name': 'está entre',
  /* Value should be defined */
  'search.operator.defined.description': '<Field/> <Operator>é</Operator> <Value>não vazio</Value>',
  'search.operator.defined.name': 'não vazio',
  /* Value should not be defined */
  'search.operator.not-defined.description': '<Field/> <Operator>é</Operator> <Value>vazio</Value>',
  'search.operator.not-defined.name': 'vazio',
  /* Number should be the given filter value */
  'search.operator.number-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.number-equal.name': 'é',
  /* Number should be greater than given filter value */
  'search.operator.number-gt.description':
    '<Field/> <Operator>></Operator> <Value>{{value}}</Value>',
  'search.operator.number-gt.name': 'maior que',
  /* Number should be greater than or the given filter value */
  'search.operator.number-gte.description':
    '<Field/> <Operator>≥</Operator> <Value>{{value}}</Value>',
  'search.operator.number-gte.name': 'maior ou igual a',
  /* Number should be less than given filter value */
  'search.operator.number-lt.description':
    '<Field/> <Operator><</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lt.name': 'menor que',
  /* Number should be less than or the given filter value */
  'search.operator.number-lte.description':
    '<Field/> <Operator>≤</Operator> <Value>{{value}}</Value>',
  'search.operator.number-lte.name': 'menor ou igual a',
  /* Number should not be the given filter value */
  'search.operator.number-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.number-not-equal.name': 'não é',
  /* Number should be within the range of given filter values */
  'search.operator.number-range.description':
    '<Field/> <Operator>está entre</Operator> <Value>{{from}} → {{to}}</Value>',
  'search.operator.number-range.name': 'está entre',
  /* Portable Text should contain the given filter value */
  'search.operator.portable-text-contains.description':
    '<Field/> <Operator>contém</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-contains.name': 'contém',
  /* Portable Text should be the given filter value */
  'search.operator.portable-text-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-equal.name': 'é',
  /* Portable Text should not contain the given filter value */
  'search.operator.portable-text-not-contains.description':
    '<Field/> <Operator>não contém</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-contains.name': 'não contém',
  /* Portable Text should not be the given filter value */
  'search.operator.portable-text-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.portable-text-not-equal.name': 'não é',
  /* References the given asset (file) */
  'search.operator.reference-asset-file.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-file.name': 'arquivo',
  /* References the given asset (image) */
  'search.operator.reference-asset-image.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-asset-image.name': 'imagem',
  /* References the given document */
  'search.operator.reference-document.description':
    '<Field/> <Operator>→</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-document.name': 'documento',
  /* Reference should be the given document */
  'search.operator.reference-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-equal.name': 'é',
  /* Reference should not be the given document */
  'search.operator.reference-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.reference-not-equal.name': 'não é',
  /* Slug contains the given value */
  'search.operator.slug-contains.description':
    '<Field/> <Operator>contém</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-contains.name': 'contém',
  /* Slug equals the given filter value */
  'search.operator.slug-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-equal.name': 'é',
  /* Slug does not contain the given value */
  'search.operator.slug-not-contains.description':
    '<Field/> <Operator>não contém</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-contains.name': 'não contém',
  /* Slug does not equal the given filter value */
  'search.operator.slug-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.slug-not-equal.name': 'não é',
  /* String contains the given filter value */
  'search.operator.string-contains.description':
    '<Field/> <Operator>contém</Operator> <Value>{{value}}</Value>',
  'search.operator.string-contains.name': 'contém',
  /* String equals the given filter value */
  'search.operator.string-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.string-equal.name': 'é',
  /* String equals one of the predefined allowed values */
  'search.operator.string-list-equal.description':
    '<Field/> <Operator>é</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-equal.name': 'é',
  /* String does not equal one of the predefined allowed values */
  'search.operator.string-list-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.string-list-not-equal.name': 'não é',
  /* String does not contain the given filter value */
  'search.operator.string-not-contains.description':
    '<Field/> <Operator>não contém</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-contains.name': 'não contém',
  /* String does not equal the given filter value */
  'search.operator.string-not-equal.description':
    '<Field/> <Operator>não é</Operator> <Value>{{value}}</Value>',
  'search.operator.string-not-equal.name': 'não é',
  /** Label for the "Best match" search ordering type */
  'search.ordering.best-match-label': 'Melhor correspondência',
  /** Label for the "Created: Oldest first" search ordering type */
  'search.ordering.created-ascending-label': 'Criado: Mais antigos primeiro',
  /** Label for the "Created: Newest first" search ordering type */
  'search.ordering.created-descending-label': 'Criado: Mais recentes primeiro',
  /** Label for the "Updated: Oldest first" search ordering type */
  'search.ordering.updated-ascending-label': 'Atualizado: Mais antigos primeiro',
  /** Label for the "Updated: Newest first" search ordering type */
  'search.ordering.updated-descending-label': 'Atualizado: Mais recentes primeiro',
  /** Placeholder text for the global search input field */
  'search.placeholder': 'Pesquisar',
  /** Accessibility label for the recent searches section, shown when no valid search terms has been given */
  'search.recent-searches-aria-label': 'Pesquisas recentes',
  /** Label/heading shown for the recent searches section */
  'search.recent-searches-label': 'Pesquisas recentes',
  /** Accessibility label for the search results section, shown when the user has typed valid terms */
  'search.search-results-aria-label': 'Resultados da pesquisa',

  /** Accessibility label for the navbar status button */
  'status-button.aria-label': undefined, // 'Configuration status'

  /** Description for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-description':
    'As transações do histórico do documento não foram afetadas.',
  /** Title for error when the timeline for the given document can't be loaded */
  'timeline.error.load-document-changes-title':
    'Ocorreu um erro ao recuperar as alterações do documento.',
  /** Error description for when the document doesn't have history */
  'timeline.error.no-document-history-description':
    'Ao alterar o conteúdo do documento, as versões do documento aparecerão neste menu.',
  /** Error title for when the document doesn't have history */
  'timeline.error.no-document-history-title': 'Sem histórico do documento',
  /** Error prompt when revision cannot be loaded */
  'timeline.error.unable-to-load-revision': 'Não foi possível carregar a revisão',
  /** Label for when the timeline item is the latest in the history */
  'timeline.latest': 'Mais recente',
  /** Label for latest version for timeline menu dropdown */
  'timeline.latest-version': 'Última versão',
  /** The aria-label for the list of revisions in the timeline */
  'timeline.list.aria-label': 'Revisões do documento',
  /** Label for loading history */
  'timeline.loading-history': 'Carregando histórico…',
  /** Label shown in review changes timeline when a document has been created */
  'timeline.operation.created': 'Criado',
  /** Label shown in review changes timeline when a document has been created, with a timestamp */
  'timeline.operation.created_timestamp': 'Criado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was initially created */
  'timeline.operation.created-initial': 'Criado',
  /** Label shown in review changes timeline when a document was initially created, with a timestamp */
  'timeline.operation.created-initial_timestamp': 'Criado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been deleted */
  'timeline.operation.deleted': 'Eliminado',
  /** Label shown in review changes timeline when a document has been deleted, with a timestamp */
  'timeline.operation.deleted_timestamp': 'Eliminado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been discarded */
  'timeline.operation.draft-discarded': 'Rascunho descartado',
  /** Label shown in review changes timeline when a draft has been discarded, with a timestamp */
  'timeline.operation.draft-discarded_timestamp': 'Rascunho descartado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a draft has been edited */
  'timeline.operation.edited-draft': 'Editado',
  /** Label shown in review changes timeline when a draft has been edited, with a timestamp */
  'timeline.operation.edited-draft_timestamp': 'Editado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document has been edited live */
  'timeline.operation.edited-live': 'Editado ao vivo',
  /** Label shown in review changes timeline when a document has been edited live, with a timestamp */
  'timeline.operation.edited-live_timestamp': 'Editado ao vivo: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was published */
  'timeline.operation.published': 'Publicado',
  /** Label shown in review changes timeline when a document was published, with a timestamp */
  'timeline.operation.published_timestamp': 'Publicado: {{timestamp, datetime}}',
  /** Label shown in review changes timeline when a document was unpublished */
  'timeline.operation.unpublished': 'Não publicado',
  /** Label shown in review changes timeline when a document was unpublished, with a timestamp */
  'timeline.operation.unpublished_timestamp': 'Não publicado: {{timestamp, datetime}}',
  /**
   * Label for determining since which version the changes for timeline menu dropdown are showing.
   * Receives the time label as a parameter (`timestamp`).
   */
  'timeline.since': 'Desde: {{timestamp, datetime}}',
  /** Label for missing change version for timeline menu dropdown are showing */
  'timeline.since-version-missing': 'Desde: versão desconhecida',

  /**Aria label for the action buttons in the PTE toolbar */
  'toolbar.portable-text.action-button-aria-label': undefined, // '{{action}}'

  /** Label for button showing the free trial days left */
  'user-menu.action.free-trial_one': '{{count}} dia restante no teste',
  'user-menu.action.free-trial_other': '{{count}} dias restantes no teste',
  /** Label for the button showed after trial ended */
  'user-menu.action.free-trial-finished': 'Atualizar a partir do gratuito',
  /** Label for action to invite members to the current sanity project */
  'user-menu.action.invite-members': 'Convidar membros',
  /** Accessibility label for action to invite members to the current sanity project */
  'user-menu.action.invite-members-aria-label': 'Convidar membros',
  /** Label for action to manage the current sanity project */
  'user-menu.action.manage-project': 'Gerenciar projeto',
  /** Accessibility label for the action to manage the current project */
  'user-menu.action.manage-project-aria-label': 'Gerenciar projeto',
  /** Tooltip helper text when portable text annotation is disabled for empty block*/
  'user-menu.action.portable-text.annotation-disabled_empty-block':
    'Não é possível aplicar {{name}} em bloco vazio',
  /** Tooltip helper text when portable text annotation is disabled for multiple blocks */
  'user-menu.action.portable-text.annotation-disabled_multiple-blocks':
    'Não é possível aplicar {{name}} em múltiplos blocos',
  /** Label for action to sign out of the current sanity project */
  'user-menu.action.sign-out': 'Sair',
  /** Title for appearance section for the current studio (dark / light / system scheme) */
  'user-menu.appearance-title': 'Aparência',
  /** Label for close menu button for user menu */
  'user-menu.close-menu': 'Fechar menu',
  /** Description for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-description': 'Usar aparência escura',
  /** Title for using the "dark theme" in the appearance user menu */
  'user-menu.color-scheme.dark-title': 'Escuro',
  /** Description for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-description': 'Usar aparência clara',
  /** Title for using the "light theme" in the appearance user menu */
  'user-menu.color-scheme.light-title': 'Claro',
  /** Description for using "system apparence" in the appearance user menu */
  'user-menu.color-scheme.system-description': 'Usar aparência do sistema',
  /** Title for using system apparence in the appearance user menu */
  'user-menu.color-scheme.system-title': 'Sistema',
  /** Title for locale section for the current studio */
  'user-menu.locale-title': 'Idioma',
  /** Label for tooltip to show which provider the currently logged in user is using */
  'user-menu.login-provider': 'Conectado com {{providerTitle}}',
  /** Label for open menu button for user menu */
  'user-menu.open-menu': undefined, // 'Open menu'

  /**
   * Label for action to add a workspace (currently a developer-oriented action, as this will
   * lead to the documentation on workspace configuration)
   */
  'workspaces.action.add-workspace': 'Adicionar espaço de trabalho',
  /**
   * Label for action to choose a different workspace, in the case where you are not logged in,
   * have selected a workspace, and are faced with the authentication options for the selected
   * workspace. In other words, label for the action shown when you have reconsidered which
   * workspace to authenticate in.
   */
  'workspaces.action.choose-another-workspace': 'Escolher outro espaço de trabalho',
  /** Label for heading that indicates that you can choose your workspace */
  'workspaces.choose-your-workspace-label': 'Escolha seu espaço de trabalho',
  /** Label for the workspace menu */
  'workspaces.select-workspace-aria-label': 'Selecionar espaço de trabalho',
  /** Button label for opening the workspace switcher */
  'workspaces.select-workspace-label': 'Selecionar espaço de trabalho',
  /** Tooltip for the workspace menu */
  'workspaces.select-workspace-tooltip': undefined, // 'Select workspace'
  /** Title for Workplaces dropdown menu */
  'workspaces.title': 'Espaços de trabalho',
})
