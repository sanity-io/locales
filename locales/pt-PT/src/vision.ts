import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Label for action "Copy to clipboard", tied to the "Query URL" field. Also used for accessibility purposes on button */
  'action.copy-url-to-clipboard': 'Copiar para a área de transferência',
  /** Label for deleting a query */
  'action.delete': 'Excluir',
  /** Label for editing a query's title */
  'action.edit-title': 'Editar título',
  /** Label for stopping an ongoing listen operation */
  'action.listen-cancel': 'Parar',
  /** Label for setting up a listener */
  'action.listen-execute': 'Ouvir',
  /** Label for query loading table */
  'action.load-queries': 'Carregar consultas',
  /** Label for loading a query */
  'action.load-query': 'Carregar consulta',
  /** Label for cancelling an ongoing query */
  'action.query-cancel': 'Cancelar',
  /** Label for executing the query, eg doing a fetch */
  'action.query-execute': 'Buscar',
  /** Label for saving a query */
  'action.save-query': 'Salvar consulta',
  /** Label for updating a query */
  'action.update': 'Atualizar',

  /** Label for actions user can take */
  'label.actions': 'Ações',
  /** Label for saved queries that have been edited */
  'label.edited': 'Editado',
  /**
   * Some features has a "New" label indicating that the feature was recently introduced.
   * This defines what the text of that label is. Keep it short and sweet.
   */
  'label.new': 'Novo',
  /** Label for query type "personal" */
  'label.personal': 'Pessoal',
  /** Label for savedAt date */
  'label.saved-at': 'Salvo em',
  /** Saved queries */
  'label.saved-queries': 'Consultas salvas',
  /** Search queries */
  'label.search-queries': 'Pesquisar consultas',
  /** Share query */
  'label.share': 'Compartilhar',
  /** Label for saved query type "team" */
  'label.team': 'Equipe',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Os parâmetros não são um JSON válido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parâmetros',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Coluna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linha',
  /** Label for "Query" editor/input */
  'query.label': 'Consulta',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL da Consulta',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'Tempo de início ao fim',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Tempo de execução',
  /** Label for "Result" explorer/view */
  'result.label': 'Resultado',
  /** Tooltip text shown when the query result is not encodable as CSV */
  'result.save-result-as-csv.not-csv-encodable': 'O resultado não pode ser codificado como CSV',
  /** Label for "Save result as" result action */
  'result.save-result-as-format': 'Salvar resultado como <SaveResultButtons/>',
  /**
   * "Not applicable" message for when there is no Execution time or End to End time information
   * available for the query (eg when the query has not been executed, or errored)
   */
  'result.timing-not-applicable': 'n/a',

  /** Query already saved error label */
  'save-query.already-saved': 'Consulta já salva',
  /** Save error label */
  'save-query.error': 'Erro ao salvar consulta',
  /** Save success label */
  'save-query.success': 'Consulta salva',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versão da API',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versão da API personalizada',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Conjunto de dados',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versão da API inválida',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Outra',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspectiva',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'A perspectiva "<code>previewDrafts</code>" foi renomeada para "<code>drafts</code>" e agora está obsoleta. Esta mudança é efetiva para todas as versões com suporte a perspectivas (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Ler documentação',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Sem perspectiva (padrão da API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'As perspectivas permitem que sua consulta seja executada contra diferentes "visões" do conteúdo no seu conjunto de dados',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'A perspectiva padrão mudará de "<code>raw</code>" para "<code>published</code>" em uma versão futura da API. Por favor, consulte a documentação para mais detalhes.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Versão fixada',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Rascunhos agendados',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectivas',
})
