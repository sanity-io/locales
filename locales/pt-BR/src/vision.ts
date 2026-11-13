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
  'action.save-personal-copy': 'Salvar cópia pessoal',
  /** Label for saving a personal query */
  'action.save-personal-query': 'Salvar como pessoal',
  /** Label for saving a query */
  'action.save-query': 'Salvar consulta',
  /** Label for saving a shared query */
  'action.save-shared-query': 'Salvar como compartilhada',
  /** Label for unsharing a query */
  'action.unshare': 'Deixar de compartilhar',
  /** Label for updating a query */
  'action.update': 'Atualizar',

  /** Label for actions user can take */
  'label.actions': 'Ações',
  /** Label for all saved queries */
  'label.all': 'Todas',
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
  'label.search-queries': 'Buscar consultas',
  /** Share query */
  'label.share': 'Compartilhar',
  /** Label for query type "shared" */
  'label.shared': 'Compartilhada',
  /** Label for saved query type "team" */
  'label.team': 'Equipe',
  /** Label for untitled query fallback */
  'label.untitled-query': 'Sem título',

  /** Error message for when the "Params" input are not a valid json */
  'params.error.params-invalid-json': 'Os parâmetros não são um JSON válido',
  /** Label for "Params" (parameters) editor/input */
  'params.label': 'Parâmetros',

  /** Label for 'Column' indicator when there is an error within the query */
  'query.error.column': 'Coluna',
  /** Label for 'Line' indicator when there is an error within the query */
  'query.error.line': 'Linha',
  /** Extra explanation when a 400 is returned for a release perspective on an old API version */
  'query.error.unsupported-release-perspective':
    'Esta versão da API não suporta perspectivas complexas. Use {{apiVersion}} ou posterior.',
  /** Extra explanation when a 400 is returned for a variant on an incompatible API version */
  'query.error.unsupported-variant':
    'Esta versão da API não suporta variantes de conteúdo. Use a versão experimental da API ({{apiVersion}}).',
  /** Label for "Query" editor/input */
  'query.label': 'Consulta',
  /** Label for the "Query URL" field, shown after executing a query, and allows for copying */
  'query.url': 'URL da Consulta',

  /** Label for "End to End time" information of the fetched query */
  'result.end-to-end-time-label': 'De ponta a ponta',
  /** Label for "Execution time" information of the fetched query */
  'result.execution-time-label': 'Execução',
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
  /** Save personal copy success label */
  'save-query.personal-copy-success': 'Cópia pessoal salva',
  /** Warning displayed before sharing a query */
  'save-query.share-warning':
    'As consultas compartilhadas são armazenadas como documentos no seu dataset e contam para a sua cota de documentos.',
  /** Save shared query success label */
  'save-query.shared-success': 'Consulta compartilhada salva',
  /** Save success label */
  'save-query.success': 'Consulta salva',
  /** Save unshared query success label */
  'save-query.unshared-success': 'Consulta movida para pessoal',

  /** Label for the "API version" dropdown in settings */
  'settings.api-version-label': 'Versão da API',
  /** Tooltip shown when the API version selector is locked because a variant is selected */
  'settings.api-version-locked-for-variant':
    'Quando uma variante é selecionada, a versão da API precisa ser vX.',
  /** Label for the "Custom API version" input in settings, shown when "other" is chosen as API version */
  'settings.custom-api-version-label': 'Versão personalizada da API',
  /** Label for the "Dataset" dropdown in vision settings */
  'settings.dataset-label': 'Dataset',
  /** Error label for when the API version in 'Custom API version' input is invalid */
  'settings.error.invalid-api-version': 'Versão da API inválida',
  /** Label for the "other" versions within the "API version" dropdown */
  'settings.other-api-version-label': 'Outra',
  /**
   * Label for the "Perspective" dropdown in vision settings
   * @see {@link https://www.sanity.io/docs/perspectives}
   */
  'settings.perspective-label': 'Perspective',
  /** Notification about previewDrafts to drafts rename */
  'settings.perspective.preview-drafts-renamed-to-drafts.description':
    'A perspectiva "<code>previewDrafts</code>" foi renomeada para "<code>drafts</code>" e agora está obsoleta. Esta mudança é efetiva para todas as versões com suporte a perspectiva (>= v2021-03-25).',
  /** Call to action to read the docs related to "Perspectives" */
  'settings.perspectives.action.docs-link': 'Ler documentação',
  /** Option for selecting default perspective */
  'settings.perspectives.default': 'Sem perspectiva (padrão da API)',
  /** Description for popover that explains what "Perspectives" are */
  'settings.perspectives.description':
    'As perspectives permitem que sua consulta seja executada contra diferentes "visões" do conteúdo no seu conjunto de dados',
  /** Description for upcoming default perspective change */
  'settings.perspectives.new-default.description':
    'A perspectiva padrão mudará de "<code>raw</code>" para "<code>published</code>" em uma versão futura da API. Por favor, consulte a documentação para mais detalhes.',
  /** Label for the pinned release perspective */
  'settings.perspectives.pinned-release-label': 'Versão fixada',
  /** Label for the scheduled drafts perspective */
  'settings.perspectives.scheduled-drafts': 'Rascunhos agendados',
  /** Title for popover that explains what "Perspectives" are */
  'settings.perspectives.title': 'Perspectives',

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vista.agent-actions.credits': 'Usa um crédito de IA por solicitação',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vista.ai-credits.balance': 'Restam {{balance}} de {{quota}} créditos de IA neste mês.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vista.ai-credits.deficit':
    '{{used}} créditos de IA usados neste mês, {{deficit}} a mais do que os {{quota}} incluídos.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vista.ai-credits.limit.description':
    'Sua organização usou {{used}} de seus {{quota}} créditos de IA neste mês, então as Ações do Agente Sanity estão pausadas até o próximo mês ou até que o limite de gastos seja aumentado.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vista.ai-credits.limit.description-unknown':
    'Sua organização atingiu o limite de gastos de créditos de IA, então as Ações do Agente Sanity estão pausadas até o próximo mês ou até que o limite seja aumentado.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vista.ai-credits.limit.learn-more': 'Como funcionam os créditos de IA',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vista.ai-credits.limit.manage': 'Gerenciar créditos de IA',
  /** Title of the card shown where the organization is out of AI credits */
  'vista.ai-credits.limit.title': 'Sem créditos de IA',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vista.ai-credits.usage': 'Uso de IA',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vista.ai-credits.used': '{{used}} créditos de IA usados neste mês.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vista.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vista.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vista.api-version.button-invalid': 'Versão de API incompleta',
  /** Tooltip of the API version button */
  'vista.api-version.tooltip':
    'As consultas são executadas na versão da API {{version}}. Selecione para alterar isso em Opções.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vista.api-version.tooltip-cdn':
    'As consultas são executadas na API CDN com a versão da API {{version}}. Selecione para alterar isso em Opções.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vista.api-version.tooltip-cdn-blocked':
    'As consultas são executadas na API com a versão {{version}}, não na API CDN: ela não atende à perspectiva {{perspective}}. Selecione para alterar isso em Opções.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vista.api-version.tooltip-invalid':
    'A versão da API em Opções está incompleta, então nada pode ser buscado até que esteja completa.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vista.api-version.tooltip-locked':
    'As consultas são executadas na versão da API {{version}}, que a variante selecionada requer.',
  /** Label of the document after the change in the Delta panel */
  'vista.delta.after': 'Depois',
  /** Label of the document before the change in the Delta panel */
  'vista.delta.before': 'Antes',
  /** What the Delta panel does */
  'vista.delta.description':
    'Executa a consulta no modo delta, como fazem os webhooks, listeners e Sanity Functions baseados em GROQ: before() e after() são o documento antes e depois de uma mudança, @ é o documento após ela, e delta::changedAny() os compara. É executado no navegador com groq-js. Um lado vazio significa ausência de documento: a mudança o cria ou o exclui.',
  /** Label of the document ID field in the Delta panel */
  'vista.delta.document-id': 'ID do documento',
  /** Shown when there is a query but no documents to compare */
  'vista.delta.empty':
    'Carregue o histórico de um documento, ou escreva os documentos em Antes e Depois.',
  /** Shown when the query fails in delta mode */
  'vista.delta.failed': 'A consulta não pôde ser executada no modo delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vista.delta.invalid-after': 'Depois não é um JSON válido: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vista.delta.invalid-before': 'Before não é um JSON válido: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vista.delta.load': 'Carregar histórico',
  /** Shown when the history could not be loaded */
  'vista.delta.load-failed': 'Não foi possível carregar o histórico: {{message}}',
  /** A delta filter that is true for the change */
  'vista.delta.matches':
    'Corresponde: um webhook ou função com esse filtro é executado para essa alteração.',
  /** A delta filter that is false for the change */
  'vista.delta.no-match':
    'Não corresponde: um webhook ou função com esse filtro não é executado para essa alteração.',
  /** Shown while the query or its params cannot be sent */
  'vista.delta.no-request': 'Corrija a query e seus parâmetros para executá-la no modo delta.',
  /** Heading of the delta result */
  'vista.delta.result': 'Resultado',
  /** The After choice for a change that deletes the document */
  'vista.delta.revision.none-after': 'Nada: a alteração exclui o documento',
  /** The Before choice for a change that creates the document */
  'vista.delta.revision.none-before': 'Nada: a alteração cria o documento',
  /** A revision in the Before and After lists */
  'vista.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vista.drawer.close': 'Fechar painel',
  /** Explanation at the top of the Explain panel */
  'vista.explain.description':
    'O plano de query é a forma como o Content Lake executa a query: o que ele lê, filtra e ordena durante a leitura, e o que fica para as etapas seguintes. Explicar isso para mim usa as Sanity Agent Actions para descrever a query e seu plano em palavras simples, o que consome um crédito de IA.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vista.explain.empty': 'Escreva uma query para explicá-la.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vista.explain.explain': 'Explicar isso para mim',
  /** Shown when the explanation could not be written */
  'vista.explain.failed': 'Não foi possível explicar a query: {{message}}',
  /** A count the index computes without reading the documents */
  'vista.explain.insight.aggregate': 'Contado no índice, sem ler os documentos.',
  /** A subquery the plan runs once for all documents */
  'vista.explain.insight.batched-subquery':
    'A subquery é executada uma única vez para todos os documentos, em uma única busca em lote, não uma vez por documento.',
  /** Part of the filter runs in memory; the expression follows */
  'vista.explain.insight.filter-in-memory':
    'Parte do filtro é executada na memória, após a leitura: todo documento que o índice deixa passar é lido primeiro, o que fica lento em datasets grandes. Joins (->) e funções em um filtro não podem usar o índice.',
  /** The index sorts and limits while reading */
  'vista.explain.insight.index-sort-limit':
    'O índice ordena e limita os documentos durante a leitura.',
  /** The plan slices in memory */
  'vista.explain.insight.slice-in-memory':
    'O recorte (slice) é feito na memória após a leitura, e não como um limite durante a leitura.',
  /** The plan sorts in memory */
  'vista.explain.insight.sort-in-memory':
    'A ordenação acontece na memória, após a leitura de todas as correspondências. Ordene por atributos que o índice possa usar para ordenar.',
  /** Link under the plan insights to the guide on fast queries */
  'vista.explain.insights.guide': 'GROQ de alta performance',
  /** Heading of the plan insights in the Explain panel */
  'vista.explain.insights.title': 'O que se destaca',
  /** Button in the Explain panel fetching the query plan */
  'vista.explain.plan': 'Mostrar o plano de query',
  /** Shown when the query plan could not be fetched */
  'vista.explain.plan-failed': 'Não foi possível obter o plano de query: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vista.explain.plan-title': 'Plano de consulta',
  /** Toast shown after a code snippet was copied */
  'vista.export-query.copied': 'Snippet copiado para a área de transferência',
  /** Label for the button that copies a code snippet */
  'vista.export-query.copy': 'Copiar snippet',
  /** Explanation at the top of the export query dialog */
  'vista.export-query.description': 'Execute esta consulta fora do studio com um destes snippets.',
  /** Title of the dialog that exports the query as code snippets */
  'vista.export-query.title': 'Exportar consulta',
  /** Note about authentication in the export query dialog */
  'vista.export-query.token-note':
    'Datasets privados precisam de um token de API. Datasets públicos podem remover o cabeçalho Authorization.',
  /** Toast shown after the generated code was copied */
  'vista.export-types.copied': 'Código copiado para a área de transferência',
  /** Label for the button that copies the generated code */
  'vista.export-types.copy': 'Copiar código',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vista.export-types.empty':
    'Busque a consulta primeiro para que haja um resultado a partir do qual derivar os tipos.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vista.export-types.schema-error': 'Falha na avaliação do schema: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vista.export-types.source.result':
    'Inferido a partir do resultado buscado, já que a consulta não pôde ser avaliada em relação ao schema do workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vista.export-types.source.schema':
    'Inferido a partir do schema do workspace, da mesma forma que o sanity typegen faz.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vista.export-types.stale-result':
    'O resultado exibido foi buscado para uma consulta ou parâmetros diferentes. Busque a consulta atual primeiro para que haja um resultado a partir do qual derivar os tipos.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vista.export-types.title-typescript': 'Exportar TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vista.export-types.title-zod': 'Exportar Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vista.functions.add': 'Adicionar à consulta',
  /** Shown on a library function the query declares the same way */
  'vista.functions.declared': 'Nesta consulta',
  /** Lint action on a call of a library function the query does not declare */
  'vista.functions.editor.add-from-library': 'Declarar',
  /** Note in a function's hover documentation: the API version it needs */
  'vista.functions.editor.api-version': 'Requer a versão de API {{version}} ou posterior',
  /** Detail of a completion for a custom function the query declares */
  'vista.functions.editor.completion-declared': 'nesta consulta',
  /** Detail of a completion for a library function, which declares it too */
  'vista.functions.editor.completion-library': 'da sua biblioteca',
  /** Note in the hover documentation of a custom function the query declares */
  'vista.functions.editor.declared-on': 'Função personalizada, declarada na linha {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vista.functions.editor.delta-only':
    'Funciona apenas no modo delta, onde webhooks e Sanity Functions executam seus filtros',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vista.functions.editor.extract': 'Extrair para função',
  /** Note in the hover documentation of a library function the query does not declare */
  'vista.functions.editor.in-library': 'Na sua biblioteca de funções, não declarada nesta consulta',
  /** Link at the end of a built-in function's hover documentation */
  'vista.functions.editor.reference': 'Referência de funções GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vista.functions.library.description':
    'Mantido neste navegador para cada dataset do projeto. As sugestões de completar oferecem essas funções, e o lint sugere declarar uma função nas chamadas da query.',
  /** Shown in the Functions panel while the library is empty */
  'vista.functions.library.empty':
    'Salve uma função que a query declara para usá-la em outras queries.',
  /** Heading of the functions library in the Functions panel */
  'vista.functions.library.title': 'Biblioteca',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vista.functions.query.empty':
    'Declare funções personalizadas no início da query, ou posicione o cursor em uma projeção, como author->{name}, e pressione o botão de extrair sobre o editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vista.functions.query.title': 'Nesta query',
  /** Removes a function from the library */
  'vista.functions.remove': 'Remover da biblioteca',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vista.functions.replace': 'Substituir na query',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vista.functions.reveal': 'Mostrar {{name}} no editor',
  /** Button of a function the query declares that is not in the library yet */
  'vista.functions.save': 'Salvar na biblioteca',
  /** Shown on a function the query declares the way the library has it */
  'vista.functions.saved': 'Salvo',
  /** Button of a function the query declares differently from the library's version */
  'vista.functions.update': 'Atualizar biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vista.generate.button': 'Gerar query',
  /** Closes the generate query bar */
  'vista.generate.close': 'Fechar',
  /** Explanation under the generate query field */
  'vista.generate.description':
    'As Ações do Agente Sanity escrevem o GROQ a partir da sua descrição e dos tipos de documento, e o Content Lake verifica cada tentativa; cada tentativa usa um crédito de IA. Isso substitui a query desta aba e a executa; desfazer no editor traz a query anterior de volta.',
  /** Shown when no query could be generated, above the reason */
  'vista.generate.failed': 'Não foi possível gerar a query',
  /** Accessible label of the description field in the generate query bar */
  'vista.generate.label': 'O que a query deve buscar?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vista.generate.open-anyway': 'Abrir a última tentativa',
  /** Placeholder of the description field in the generate query bar */
  'vista.generate.placeholder':
    'Os 10 autores mais recentes, ordenados por sobrenome e depois pelo primeiro nome',
  /** Shown while the first attempt at a query is written */
  'vista.generate.progress': 'Escrevendo a query…',
  /** Shown while a rejected attempt is retried */
  'vista.generate.progress-retry': 'Corrigindo a query (tentativa {{attempt}} de {{max}})…',
  /** Button generating the query */
  'vista.generate.submit': 'Gerar',
  /** Badge on a history entry the API CDN answered */
  'vista.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vista.history.cdn-cache-hit': 'Acerto de cache da CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vista.history.changed': 'Alterado',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vista.history.changes': 'Alterações',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vista.history.changes-failed': 'Não foi possível mostrar as alterações.',
  /** Button retrying to show the changes of a history entry */
  'vista.history.changes-retry': 'Tentar novamente',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vista.history.compared-with': 'Comparado com a busca em {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vista.history.diff.params': 'Parâmetros',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vista.history.diff.query': 'Consulta',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vista.history.diff.query-formatting-only': 'Apenas a formatação mudou',
  /** Label of the diff of the query result in a history entry's changes */
  'vista.history.diff.result': 'Resultado',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vista.history.diff.url': 'URL da requisição',
  /** Empty state of the history panel */
  'vista.history.empty': 'Nada buscado ainda',
  /** Status label for a failed fetch in the history */
  'vista.history.failed': 'Falhou',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vista.history.hide-hidden': 'Ocultá-los',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vista.history.hiding': 'Ocultando {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vista.history.only-hidden-changed': 'Apenas campos ocultos mudaram',
  /** History reason: a tab opened with a generated query fetched it */
  'vista.history.reason.generated': 'Consulta gerada',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vista.history.reason.link': 'Link aberto',
  /** History reason: a live event matched the query's sync tags */
  'vista.history.reason.live': 'Atualização ao vivo',
  /** History reason: the live connection asked every client to refetch */
  'vista.history.reason.live-restart': 'Conexão ao vivo reiniciada',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vista.history.reason.live-start': 'Busca ao vivo iniciada',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vista.history.reason.load': 'Consulta carregada',
  /** History reason: the fetch button was pressed */
  'vista.history.reason.manual': 'Botão de busca',
  /** History reason: mutations were applied from the Mutate panel */
  'vista.history.reason.mutation': 'Mutações aplicadas',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vista.history.reason.options': 'Opções alteradas',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vista.history.reason.paste': 'URL colada',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vista.history.reason.resume': 'Busca automática retomada',
  /** History reason: the keyboard shortcut was used */
  'vista.history.reason.shortcut': 'Atalho de teclado',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vista.history.same-result': 'Mesmo resultado',
  /** Button showing the hidden fields in a history entry's changes */
  'vista.history.show-hidden': 'Mostrar',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vista.history.showing-hidden': 'Mostrando {{fields}}, ocultos por padrão',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vista.history.too-large': 'Muito grande para comparar',
  /** A history entry whose result is the same as the previous result */
  'vista.history.unchanged': 'Sem alterações',
  /** Shown in the Lint panel while the query has no lint findings */
  'vista.lint.empty':
    'Nenhum resultado de lint. Os problemas detectados pelo linter GROQ na consulta são listados aqui enquanto você digita; escolha um para selecioná-lo no editor.',
  /** Where a lint finding sits in the query, shown under its message */
  'vista.lint.position': 'Linha {{line}}, coluna {{column}}',
  /** Severity badge of a lint finding */
  'vista.lint.severity.error': 'Erro',
  /** Severity badge of a lint finding */
  'vista.lint.severity.hint': 'Dica',
  /** Severity badge of a lint finding */
  'vista.lint.severity.info': 'Informação',
  /** Severity badge of a lint finding */
  'vista.lint.severity.warning': 'Aviso',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vista.lint.use-suggestion': 'Usar {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vista.live.active': 'Ao vivo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vista.live.button': 'Busca ao vivo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vista.live.button.start':
    'Buscar e, em seguida, buscar novamente sempre que os documentos no resultado mudarem',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vista.live.button.stop':
    'Parar de buscar quando os documentos no resultado mudarem. O Buscar ainda realiza buscas sob demanda, para resultados que nenhuma alteração de documento afeta, como now()',
  /** Error shown when the live connection breaks */
  'vista.live.error': 'Atualizações ao vivo desconectadas: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vista.live.stop': 'Parar ao vivo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vista.mutate.add': 'Adicionar mutação',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vista.mutate.add.create': 'Criar um documento',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vista.mutate.add.delete': 'Excluir um documento',
  /** Adds a mutation deleting the documents of the shown result */
  'vista.mutate.add.delete-result': 'Excluir os documentos no resultado',
  /** Adds a mutation patching a document, its ID to fill in */
  'vista.mutate.add.patch': 'Corrigir um documento',
  /** Adds a mutation patching the documents of the shown result */
  'vista.mutate.add.patch-result': 'Corrigir os documentos no resultado',
  /** Button applying the mutations a dry run showed */
  'vista.mutate.apply': 'Aplicar a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vista.mutate.apply-failed': 'As mutações não foram aplicadas',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vista.mutate.apply-needs-preview':
    'Aplicar envia o que uma simulação mostrou: execute uma primeiro.',
  /** Option giving array items without a _key one */
  'vista.mutate.auto-keys': 'Adicionar uma _key aos itens de array que não possuem uma',
  /** Under the option giving array items a _key */
  'vista.mutate.auto-keys.description':
    'O studio precisa de uma em cada item de array para poder editá-lo.',
  /** Button showing a document's changes in the dry run */
  'vista.mutate.changes': 'Alterações',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vista.mutate.changes-failed': 'As alterações não puderam ser exibidas.',
  /** Button retrying to show a document's changes */
  'vista.mutate.changes-retry': 'Tentar novamente',
  /** What the Mutate panel does */
  'vista.mutate.description':
    'Escreva mutações como a Mutations API as recebe, em uma lista: create, createOrReplace, createIfNotExists, delete e patch, por ID ou por uma consulta GROQ. Uma simulação mostra o que elas fariam a cada documento sem alterar nada; Aplicar então as grava no dataset em uma única transação, com sua conta.',
  /** What the API says went wrong with one of the mutations */
  'vista.mutate.failure-item': 'Mutação {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vista.mutate.generate.button': 'Gerar mutações',
  /** Explanation under the generate mutations field */
  'vista.mutate.generate.description':
    'As Sanity Agent Actions escrevem as mutações a partir da sua descrição, dos documentos no resultado e de seus tipos, e uma simulação verifica cada tentativa; cada tentativa usa um crédito de IA. Elas substituem as mutações aqui, onde desfazer as traz de volta; nada é gravado até que você as aplique.',
  /** Shown when no mutations could be generated, above the reason */
  'vista.mutate.generate.failed': 'As mutações não puderam ser geradas',
  /** Accessible label of the description field in the generate mutations bar */
  'vista.mutate.generate.label': 'O que as mutações devem fazer?',
  /** Placeholder of the description field in the generate mutations bar */
  'vista.mutate.generate.placeholder': 'Mude o título dos documentos no resultado para foobar',
  /** Shown while the first attempt at the mutations is written */
  'vista.mutate.generate.progress': 'Escrevendo as mutações…',
  /** Shown while an attempt the dry run turned down is retried */
  'vista.mutate.generate.progress-retry':
    'Corrigindo as mutações (tentativa {{attempt}} de {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vista.mutate.hiding': 'As alterações deixam de fora {{fields}}, assim como o Histórico.',
  /** Shown when the mutations are not valid JSON */
  'vista.mutate.invalid-json': 'As mutações não são um JSON válido: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vista.mutate.invalid-mutation':
    'A mutação {{index}} precisa de exatamente um entre create, createOrReplace, createIfNotExists, delete ou patch.',
  /** Label of the mutations editor */
  'vista.mutate.mutations': 'Mutações',
  /** The dry run touched no documents */
  'vista.mutate.no-documents': 'As mutações não afetam nenhum documento.',
  /** Shown when the JSON is not a list of mutations */
  'vista.mutate.not-a-list':
    'Escreva uma lista de mutações, uma única mutação, ou um corpo de requisição com uma lista de mutações.',
  /** A document the mutations create */
  'vista.mutate.operation.create': 'Criar',
  /** A document the mutations delete */
  'vista.mutate.operation.delete': 'Excluir',
  /** A document the mutations touch without changing its content */
  'vista.mutate.operation.none': 'Sem alteração',
  /** A document the mutations change */
  'vista.mutate.operation.update': 'Atualizar',
  /** Button running the mutations as a dry run */
  'vista.mutate.preview': 'Simulação',
  /** Heading of the error shown when the dry run failed */
  'vista.mutate.preview-failed': 'A simulação falhou',
  /** Heading of the dry run's outcome */
  'vista.mutate.preview-heading': 'Simulação',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vista.mutate.stale':
    'As mutações, o dataset ou as opções mudaram após essa simulação. Execute novamente para aplicá-las.',
  /** How many documents the dry run changes and leaves as they are */
  'vista.mutate.summary': 'Alterados: {{changed}} · Inalterados: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vista.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vista.network.cache.hit': 'Acerto',
  /** Under the details of a CDN cache hit */
  'vista.network.cache.hit-explained':
    'O CDN respondeu com uma resposta que havia armazenado em cache, de um local próximo a você; a consulta não chegou à API.',
  /** The API CDN answered with a response this session had not seen */
  'vista.network.cache.miss': 'Erro, pelo que esta sessão pode identificar',
  /** The API answered, which caches nothing */
  'vista.network.cache.none': 'Nenhum, a API responde a cada solicitação com conteúdo atualizado',
  /** Shown in the Network panel while there is no response */
  'vista.network.empty':
    'Execute a consulta para ver qual endpoint a respondeu, se veio de um cache e onde foi executada.',
  /** In the Network panel: the endpoint that answered */
  'vista.network.endpoint': 'Respondido por',
  /** The live API answered */
  'vista.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vista.network.endpoint.cdn': 'CDN da API',
  /** In the Network panel: the region the query ran in */
  'vista.network.region': 'Consulta executada em',
  /** The response did not say where the query ran */
  'vista.network.region.unknown': 'Não informado',
  /** In the Network panel: the round trip and the time on the server */
  'vista.network.timing': 'Tempo',
  /** The round trip and the server's time for the query, in milliseconds */
  'vista.network.timing.value': '{{e2e}}ms de ida e volta, {{server}}ms no servidor',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vista.network.trace': 'ID de rastreamento',
  /** Hint in the Network panel while queries go to the API */
  'vista.network.use-cdn-hint':
    'Ative Usar o CDN da API em Opções para enviar consultas através do CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vista.network.you': 'Você',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vista.options.dataset.follows-workspace': 'Segue o workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vista.options.dataset.pin': 'Fixar um dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vista.options.dataset.pinned': 'Fixado; o workspace pode usar outro dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vista.options.dataset.use-workspace': 'Usar o dataset do workspace',
  /** Label for the "Include content source map" switch */
  'vista.options.include-source-map': 'Incluir mapa de origem do conteúdo',
  /** Description for the "Include content source map" switch */
  'vista.options.include-source-map.description':
    'Adiciona resultSourceMap à resposta, exibido na aba Mapa de Origem do Conteúdo.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vista.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vista.options.use-cdn': 'Usar o API CDN',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vista.options.use-cdn.anonymous':
    'Este studio autentica você com um cookie, que o API CDN nunca recebe: ele responde como responderia a um visitante anônimo, com o que um dataset público mostra.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vista.options.use-cdn.blocked':
    'O API CDN não serve drafts ou releases, então consultas com a perspective {{perspective}} vão para a API. Com published ou raw, elas usam o CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vista.options.use-cdn.blocked.title': 'As consultas vão para a API, não para o CDN',
  /** Description of the API CDN switch */
  'vista.options.use-cdn.description':
    'Envia a consulta para o API CDN, como useCdn: true no @sanity/client, com as perspectives published e raw: drafts e releases sempre vão para a API. Suas respostas são armazenadas em cache por até um minuto; o painel Network mostra quando uma veio do cache.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vista.options.use-cdn.use-published': 'Usar a perspective published',
  /** Label of the variant field */
  'vista.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vista.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vista.options.variant.global-none': 'Global (nenhuma selecionada)',
  /** Variant option sending no variant */
  'vista.options.variant.none': 'Nenhuma',
  /** Accessible label for collapsing a bottom panel */
  'vista.panel.collapse': 'Recolher painel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vista.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vista.panel.expand': 'Expandir painel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vista.panel.explain': 'Explain',
  /** Label of the Functions tab in the response panel */
  'vista.panel.functions': 'Functions',
  /** Label of the "History" tab in the response panel */
  'vista.panel.history': 'Histórico',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vista.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vista.panel.mutate': 'Mutate',
  /** Label of the Network tab in the response panel */
  'vista.panel.network': 'Network',
  /** Label of the "Options" panel in the request column */
  'vista.panel.options': 'Opções',
  /** Label of the "Response" tab in the response panel */
  'vista.panel.response': 'Resposta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vista.panel.source-map': 'Mapa de Origem de Conteúdo',
  /** Button adding an item to a list param in the params form */
  'vista.params-form.add-item': 'Adicionar item',
  /** Placeholder of a params form field that takes any JSON value */
  'vista.params-form.any-placeholder': 'Qualquer valor JSON; outro texto é enviado como string',
  /** Shown in the params form when the query uses no params */
  'vista.params-form.empty':
    'A query não usa nenhum parâmetro. Cada $nome nela recebe um campo aqui.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vista.params-form.invalid-json':
    'Os parâmetros não são um JSON válido. Corrija-os na visualização JSON para editá-los aqui.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vista.params-form.invalid.boolean': 'Não é verdadeiro ou falso; enviado como {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vista.params-form.invalid.document-type':
    'Não é um tipo de documento neste workspace; enviado mesmo assim',
  /** A whole number param (a slice bound) holds a fraction */
  'vista.params-form.invalid.integer': 'Não é um número inteiro, que os slices exigem',
  /** A list param's value is not a list; it is sent anyway */
  'vista.params-form.invalid.list': 'Não é uma lista; enviado como {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vista.params-form.invalid.number': 'Não é um número; enviado como texto',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vista.params-form.invalid.option': 'Não é um dos valores conhecidos; enviado mesmo assim',
  /** A text param's value is not text; it is sent anyway */
  'vista.params-form.invalid.string': 'Não é texto; enviado como {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vista.params-form.item-label': '${{name}}, item {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vista.params-form.item-placeholder': 'Item',
  /** Under a params form field whose param has no value */
  'vista.params-form.missing': 'Não definido: a query falha até que tenha um valor',
  /** Shown in the params form when the workspace schema could not be read */
  'vista.params-form.no-schema':
    'Os tipos vêm apenas da query: o schema do workspace não pôde ser lido.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vista.params-form.not-set': 'Não definido',
  /** Button setting a date and time param to the current time */
  'vista.params-form.now': 'Agora',
  /** Button removing a param the query does not use from the params */
  'vista.params-form.remove': 'Remover',
  /** Accessible label of the button removing an item from a list param */
  'vista.params-form.remove-item': 'Remover item',
  /** Shown in the params form when the query does not parse */
  'vista.params-form.syntax-error':
    'A query não pode ser interpretada, então seus parâmetros são listados sem tipos.',
  /** Type hint of a params form field: any JSON value */
  'vista.params-form.type.any': 'qualquer valor JSON',
  /** Type hint of a params form field: true or false */
  'vista.params-form.type.boolean': 'verdadeiro ou falso',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vista.params-form.type.datetime': 'data e hora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vista.params-form.type.document-id': 'ID do documento',
  /** Type hint of a params form field: one of the workspace's document types */
  'vista.params-form.type.document-type': 'tipo de documento',
  /** Type hint of a params form field: a whole number */
  'vista.params-form.type.integer': 'número inteiro',
  /** Type hint of a params form field: a list of values */
  'vista.params-form.type.list': 'lista, cada {{type}}',
  /** Type hint of a params form field: a number */
  'vista.params-form.type.number': 'número',
  /** Type hint of a params form field: text */
  'vista.params-form.type.string': 'texto',
  /** Heading of the params the query does not use, listed in the params form */
  'vista.params-form.unused': 'Não utilizado pela consulta',
  /** Before the expressions that use a param, in the params form */
  'vista.params-form.used-in': 'Usado em',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vista.params.fit-height': 'Dimensionado ao conteúdo, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vista.params.resize':
    'Redimensionar parâmetros: arraste ou use as teclas de seta; clique duas vezes ou pressione Enter para ajustar ao conteúdo novamente',
  /** Tab showing the params as a form inferred from the query */
  'vista.params.view.form': 'Formulário',
  /** Tab showing the params as JSON */
  'vista.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vista.params.view.label': 'Editar parâmetros como',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vista.paste.parsed': 'Consulta carregada a partir da URL colada',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vista.paste.unavailable-variant':
    'A URL colada usava a variante "{{variant}}"; selecione-a na barra de navegação para executar a consulta com ela.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vista.paste.unknown-dataset':
    'O dataset "{{dataset}}" na URL colada não está disponível aqui, mantendo o atual.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vista.paste.unsupported-perspective':
    'A perspective na URL colada não é suportada aqui, mantendo a atual.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vista.paste.variants-disabled':
    'A URL colada usava a variante "{{variant}}"; este workspace está com as variantes desativadas, então a consulta é executada sem ela.',
  /** Accessible label for the query actions menu */
  'vista.query.actions': 'Ações da consulta',
  /** Tooltip when automatic refetching is not available for the API version */
  'vista.query.auto-refetch.unsupported':
    'A atualização automática requer a versão da API v2021-03-25 ou posterior.',
  /** Toast shown after the query was copied */
  'vista.query.copied': 'Consulta copiada para a área de transferência',
  /** Menu item copying the query text */
  'vista.query.copy': 'Copiar consulta',
  /** Menu item opening the export query dialog */
  'vista.query.export': 'Exportar consulta…',
  /** Menu item reformatting the query */
  'vista.query.prettify': 'Formatar consulta',
  /** Toast shown when the query could not be reformatted */
  'vista.query.prettify.failed': 'Não foi possível formatar a consulta',
  /** Menu item saving the query to the personal saved queries */
  'vista.query.save': 'Salvar consulta',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vista.query.stop': 'Parar',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vista.query.stop.description': 'Parar busca',
  /** Explanation in the settings section about the redesigned experience */
  'vista.redesign.settings.description':
    'Você está usando a ferramenta Vision redesenhada. Voltar para a versão anterior mantém suas abas e configurações neste navegador para a próxima vez que você experimentá-la.',
  /** Title of the settings section about the redesigned experience */
  'vista.redesign.settings.title': 'Vision redesenhado (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vista.redesign.switch-to-classic': 'Mudar para o Vision clássico',
  /** Toast button that switches to the redesigned tool */
  'vista.redesign.toast.accept': 'Experimentar agora',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.description':
    'Abas de consulta, nova busca ao vivo, detalhes de resposta e exportações. Você pode voltar para a versão anterior a qualquer momento.',
  /** Toast button that hides the invitation */
  'vista.redesign.toast.dismiss': 'Agora não',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vista.redesign.toast.title': 'Experimente o Vision redesenhado',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vista.redesign.try': 'Experimentar o redesign',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vista.redesign.try.description':
    'Mude para o Vision redesenhado, em beta. Você pode voltar para a versão anterior a qualquer momento pela barra lateral.',
  /** Empty state of the response panel before anything was fetched */
  'vista.response.empty': 'Nada buscado ainda',
  /** Label for the payload size in the response tab */
  'vista.response.payload-size': 'Tamanho do payload',
  /** Label for the sync tags in the response tab */
  'vista.response.sync-tags': 'Tags de sincronização',
  /** Shown when the response carried no sync tags */
  'vista.response.sync-tags.none': 'Nenhuma tag de sincronização na resposta',
  /** Accessible label for the result actions menu */
  'vista.result.actions': 'Ações do resultado',
  /** Toast shown after the result was copied */
  'vista.result.copied': 'Resultado copiado para a área de transferência',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vista.result.copied-value': '{{path}} copiado',
  /** Menu item and button copying the result as JSON */
  'vista.result.copy': 'Copiar resultado',
  /** Button next to each property in the result tree, copying its value */
  'vista.result.copy-value': 'Copiar valor',
  /** Empty state of the result view */
  'vista.result.empty': 'Execute a consulta para ver o resultado aqui',
  /** Button exporting the result as CSV */
  'vista.result.export-csv': 'Exportar CSV',
  /** Button exporting the result as JSON */
  'vista.result.export-json': 'Exportar JSON',
  /** Menu item opening the TypeScript export dialog */
  'vista.result.export-typescript': 'Exportar TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vista.result.export-zod': 'Exportar Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vista.result.graph.collapse': 'Ocultar o que contém',
  /** Button fitting the whole graph in view */
  'vista.result.graph.fit': 'Ajustar à visualização',
  /** Accessible label of the graph, saying how to move around in it */
  'vista.result.graph.label':
    'Gráfico de resultado: arraste para mover, role para aplicar zoom; quando focado, as setas movem, + e - aplicam zoom, 0 ajusta',
  /** Ends the note on a graph that leaves part of this result out */
  'vista.result.graph.left-out-hint': 'As visualizações em árvore e JSON mostram tudo.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vista.result.graph.node-limit': 'Apenas os primeiros {{nodes}} objetos e arrays são desenhados.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vista.result.graph.partial':
    'Apenas as primeiras {{rows}} entradas são listadas para {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vista.result.graph.partial.node': '{{name}} ({{entries}} entradas)',
  /** Title of the graph node of the result itself */
  'vista.result.graph.root': 'resultado',
  /** Button zooming into the graph */
  'vista.result.graph.zoom-in': 'Aumentar zoom',
  /** Button zooming out of the graph */
  'vista.result.graph.zoom-out': 'Diminuir zoom',
  /** Tab showing the result as a graph of its objects and arrays */
  'vista.result.view.graph': 'Gráfico',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vista.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vista.result.view.label': 'Visualização de resultado',
  /** Tab showing the result as a tree to browse */
  'vista.result.view.tree': 'Árvore',
  /** Empty state of the saved queries panel */
  'vista.saved.empty': 'Ainda não há consultas salvas. Salve a consulta atual com o botão +.',
  /** Empty state of a query list when the search matches nothing */
  'vista.saved.empty-search': 'Nenhuma consulta corresponde à sua pesquisa',
  /** Menu item loading a saved query into the active tab */
  'vista.saved.load-in-current-tab': 'Carregar na aba atual',
  /** Menu item opening a saved query in a new tab */
  'vista.saved.open-in-new-tab': 'Abrir em nova aba',
  /** Menu item renaming a saved query */
  'vista.saved.rename': 'Renomear',
  /** Accessible label for the button saving the current query */
  'vista.saved.save-current': 'Salvar consulta atual',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vista.saved.unavailable-variant':
    'Esta consulta salva usava a variante "{{variant}}"; selecione-a na barra de navegação para executar a consulta com ela.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vista.saved.unknown-dataset':
    'O dataset "{{dataset}}" desta consulta salva não está disponível aqui, mantendo o atual.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vista.saved.variants-disabled':
    'Esta consulta salva usava a variante "{{variant}}"; este workspace tem as variantes desativadas, então a consulta é executada sem ela.',
  /** Button in the settings dialog that clears the stored state */
  'vista.settings.clear-storage': 'Limpar armazenamento',
  /** Confirmation button for clearing the storage */
  'vista.settings.clear-storage.confirm': 'Sim, limpar armazenamento',
  /** Explanation of what clearing the storage does */
  'vista.settings.clear-storage.description':
    'Exclui suas consultas salvas pessoais e a biblioteca de funções, redefine as abas abertas e esses padrões neste navegador, e retorna para a ferramenta Vision clássica. As consultas compartilhadas são mantidas.',
  /** Toast shown when the saved queries could not be cleared */
  'vista.settings.clear-storage.error': 'Não foi possível limpar as consultas salvas',
  /** Toast shown after the storage was cleared */
  'vista.settings.clear-storage.success': 'Armazenamento limpo',
  /** Explanation at the top of the settings dialog */
  'vista.settings.description':
    'Padrões para novas abas. As abas abertas mantêm suas próprias opções.',
  /** Explains the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.description':
    'Um caminho de campo por linha. Um caminho corresponde em qualquer profundidade de um resultado, então _rev oculta a revisão de todos os documentos nele. Cada diff ainda pode mostrá-los.',
  /** Button restoring the default fields left out of History diffs */
  'vista.settings.history-diff.reset': 'Restaurar para os padrões',
  /** Label of the setting listing the fields left out of History diffs */
  'vista.settings.history-diff.title': 'Campos ocultos dos diffs de Histórico',
  /** Title of the settings dialog */
  'vista.settings.title': 'Configurações',
  /** Empty state of the shared queries panel */
  'vista.shared.empty':
    'Ainda não há consultas compartilhadas. Compartilhe uma consulta salva para disponibilizá-la a todos que usam este dataset.',
  /** Shortcut description: close dialogs and menus */
  'vista.shortcuts.close': 'Fechar diálogos e menus',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vista.shortcuts.complete': 'Completar um nome de função',
  /** Shortcut description: copy the query */
  'vista.shortcuts.copy-query': 'Copiar a consulta',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vista.shortcuts.extract-function': 'Extrair a projeção no cursor para uma função',
  /** Shortcut description: run the query */
  'vista.shortcuts.fetch': 'Buscar a consulta',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vista.shortcuts.next-finding': 'Ir para a próxima ocorrência de lint',
  /** Shortcut description: reformat the query */
  'vista.shortcuts.prettify': 'Formatar a consulta',
  /** Title of the keyboard shortcuts dialog */
  'vista.shortcuts.title': 'Atalhos de teclado',
  /** Sidebar toggle: show icons only */
  'vista.sidebar.collapse': 'Recolher barra lateral',
  /** Sidebar toggle: show labels next to the icons */
  'vista.sidebar.expand': 'Expandir barra lateral',
  /** Accessible label for the sidebar navigation */
  'vista.sidebar.label': 'Barra lateral do Vista',
  /** Sidebar item and drawer title for personal saved queries */
  'vista.sidebar.saved-queries': 'Consultas salvas',
  /** Sidebar item opening the settings dialog */
  'vista.sidebar.settings': 'Configurações',
  /** Sidebar item and drawer title for shared queries */
  'vista.sidebar.shared-queries': 'Consultas compartilhadas',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vista.sidebar.shortcuts': 'Atalhos de teclado',
  /** Empty state of the content source map panel */
  'vista.source-map.empty':
    'Nenhum mapa de origem de conteúdo na resposta. Ative "Incluir mapa de origem de conteúdo" em Opções e busque novamente.',
  /** Accessible label of the divider between the result and the response details panel */
  'vista.split.bottom-panel':
    'Redimensione o painel de detalhes da resposta: arraste ou use as teclas de seta; Home e End vão até os limites, Enter reseta',
  /** Accessible label of the divider between the request and response panes */
  'vista.split.request-response':
    'Redimensione os painéis de requisição e resposta: arraste ou use as teclas de seta; Home e End vão até os limites, Enter reseta',
  /** Accessible label for the button closing a query tab */
  'vista.tabs.close-tab': 'Fechar aba',
  /** Accessible label for the list of query tabs */
  'vista.tabs.label': 'Abas de consulta',
  /** Accessible label for the button opening a new query tab */
  'vista.tabs.new-tab': 'Nova aba',
  /** Placeholder of the input renaming a tab */
  'vista.tabs.title-placeholder': 'Título da aba',
  /** Title of a tab whose query is still empty */
  'vista.tabs.untitled': 'Consulta sem título',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vista.webmcp.check-query': 'Verificar uma consulta GROQ no Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vista.webmcp.describe-schema': 'Descrever o schema no Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vista.webmcp.explain-query': 'Explicar uma consulta GROQ no Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vista.webmcp.get-state': 'Ler a aba aberta do Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vista.webmcp.open-query': 'Abrir uma consulta GROQ no Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vista.webmcp.preview-mutations': 'Pré-visualizar mutações no Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vista.webmcp.run-query': 'Executar uma consulta GROQ no Vision',
})
