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
  'label.search-queries': 'Pesquisar consultas',
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

  /** Tooltip line of every control that calls Sanity Agent Actions, which bills AI credits */
  'vision.agent-actions.credits': 'Usa um crédito de IA por solicitação',
  /** Under an Agent Actions control: the organization's AI credits balance this month */
  'vision.ai-credits.balance': '{{balance}} de {{quota}} créditos de IA restantes neste mês.',
  /** Under an Agent Actions control: the credits used beyond the plan's monthly quota */
  'vision.ai-credits.deficit':
    '{{used}} créditos de IA usados neste mês, {{deficit}} a mais do que os {{quota}} incluídos.',
  /** Body of the out-of-credits card, with the credits used and the plan's monthly quota */
  'vision.ai-credits.limit.description':
    'Sua organização usou {{used}} dos seus {{quota}} créditos de IA neste mês, portanto as Ações de Agente do Sanity estão pausadas até o próximo mês ou até que o limite de gastos seja aumentado.',
  /** Body of the out-of-credits card when the usage and the quota are unknown */
  'vision.ai-credits.limit.description-unknown':
    'Sua organização atingiu seu limite de gastos com créditos de IA, portanto as Ações de Agente do Sanity estão pausadas até o próximo mês ou até que o limite seja aumentado.',
  /** Link in the out-of-credits card to the documentation of AI credits */
  'vision.ai-credits.limit.learn-more': 'Como funcionam os créditos de IA',
  /** Button in the out-of-credits card leading to the organization's spending limits in Manage */
  'vision.ai-credits.limit.manage': 'Gerenciar créditos de IA',
  /** Title of the card shown where the organization is out of AI credits */
  'vision.ai-credits.limit.title': 'Sem créditos de IA',
  /** Link after the AI credits note, to the organization's AI usage in Manage */
  'vision.ai-credits.usage': 'Uso de IA',
  /** Under an Agent Actions control: the credits used, on a plan without a quota */
  'vision.ai-credits.used': '{{used}} créditos de IA usados neste mês.',
  /** Button in the request column's action bar naming the API version requests go out with */
  'vision.api-version.button': 'API {{version}}',
  /** The API version button while queries go through the API CDN */
  'vision.api-version.button-cdn': 'API CDN {{version}}',
  /** The API version button while the "Other" API version input holds an unfinished version */
  'vision.api-version.button-invalid': 'Versão da API incompleta',
  /** Tooltip of the API version button */
  'vision.api-version.tooltip':
    'As consultas são executadas na versão {{version}} da API. Selecione para alterar isso nas Opções.',
  /** Tooltip of the API version button while queries go through the API CDN */
  'vision.api-version.tooltip-cdn':
    'As consultas são executadas na API CDN com a versão {{version}} da API. Selecione para alterar isso nas Opções.',
  /**
   * Tooltip of the API version button while the API CDN is asked for but the perspective, as the
   * perspective select names it, keeps queries on the API
   */
  'vision.api-version.tooltip-cdn-blocked':
    'As consultas são executadas na API com a versão {{version}}, não na API CDN: ela não atende à perspectiva {{perspective}}. Selecione para alterar isso nas Opções.',
  /** Tooltip of the API version button while the "Other" input holds an unfinished version */
  'vision.api-version.tooltip-invalid':
    'A versão da API nas Opções está incompleta, portanto nada pode ser buscado até que esteja completa.',
  /** Tooltip of the API version button while a selected variant forces the variants API version */
  'vision.api-version.tooltip-locked':
    'As consultas são executadas na versão {{version}} da API, que a variante selecionada requer.',
  /** Label of the document after the change in the Delta panel */
  'vision.delta.after': 'Depois',
  /** Label of the document before the change in the Delta panel */
  'vision.delta.before': 'Antes',
  /** What the Delta panel does */
  'vision.delta.description':
    'Executa a consulta no modo delta, como fazem os webhooks, listeners e Sanity Functions baseados em GROQ: before() e after() são um documento antes e depois de uma alteração, @ é o documento depois dela, e delta::changedAny() os compara. É executado no navegador com groq-js. Um lado vazio significa ausência de documento: a alteração o cria ou o exclui.',
  /** Label of the document ID field in the Delta panel */
  'vision.delta.document-id': 'ID do documento',
  /** Shown when there is a query but no documents to compare */
  'vision.delta.empty':
    'Carregue o histórico de um documento, ou escreva os documentos em Antes e Depois.',
  /** Shown when the query fails in delta mode */
  'vision.delta.failed': 'A consulta não pôde ser executada no modo delta: {{message}}',
  /** Shown when the After document is not valid JSON */
  'vision.delta.invalid-after': 'Depois não é um JSON válido: {{message}}',
  /** Shown when the Before document is not valid JSON */
  'vision.delta.invalid-before': 'Before não é um JSON válido: {{message}}',
  /** Button loading the document's revisions from the History API */
  'vision.delta.load': 'Carregar histórico',
  /** Shown when the history could not be loaded */
  'vision.delta.load-failed': 'Não foi possível carregar o histórico: {{message}}',
  /** A delta filter that is true for the change */
  'vision.delta.matches':
    'Corresponde: um webhook ou função com este filtro é executado para esta alteração.',
  /** A delta filter that is false for the change */
  'vision.delta.no-match':
    'Não corresponde: um webhook ou função com este filtro não é executado para esta alteração.',
  /** Shown while the query or its params cannot be sent */
  'vision.delta.no-request':
    'Corrija a consulta e os seus parâmetros para executá-la no modo delta.',
  /** Heading of the delta result */
  'vision.delta.result': 'Resultado',
  /** The After choice for a change that deletes the document */
  'vision.delta.revision.none-after': 'Nada: a alteração exclui o documento',
  /** The Before choice for a change that creates the document */
  'vision.delta.revision.none-before': 'Nada: a alteração cria o documento',
  /** A revision in the Before and After lists */
  'vision.delta.revision.option': '{{time}} · {{revision}}',
  /** Accessible label for the button that closes the sidebar drawer */
  'vision.drawer.close': 'Fechar painel',
  /** Explanation at the top of the Explain panel */
  'vision.explain.description':
    'O plano de consulta é a forma como o Content Lake executa a consulta: o que lê, filtra e ordena durante a leitura, e o que fica para etapas posteriores. Explicar isto para mim faz com que o Sanity Agent Actions descreva a consulta e o seu plano em palavras simples, o que utiliza um crédito de IA.',
  /** Shown in the Explain panel while there is no valid query to explain */
  'vision.explain.empty': 'Escreva uma consulta para a explicar.',
  /** Button in the Explain panel asking Agent Actions to explain the query and its plan */
  'vision.explain.explain': 'Explicar isto para mim',
  /** Shown when the explanation could not be written */
  'vision.explain.failed': 'Não foi possível explicar a consulta: {{message}}',
  /** A count the index computes without reading the documents */
  'vision.explain.insight.aggregate': 'Contado no índice, sem ler os documentos.',
  /** A subquery the plan runs once for all documents */
  'vision.explain.insight.batched-subquery':
    'A subconsulta é executada uma vez para todos os documentos, numa única busca em lote, não uma vez por documento.',
  /** Part of the filter runs in memory; the expression follows */
  'vision.explain.insight.filter-in-memory':
    'Parte do filtro é executada em memória, após a leitura: cada documento que o índice deixa passar é lido primeiro, o que se torna lento em conjuntos de dados grandes. Junções (->) e funções num filtro não podem usar o índice.',
  /** The index sorts and limits while reading */
  'vision.explain.insight.index-sort-limit':
    'O índice ordena e limita os documentos durante a leitura.',
  /** The plan slices in memory */
  'vision.explain.insight.slice-in-memory':
    'O corte é feito em memória após a leitura, não como um limite durante a leitura.',
  /** The plan sorts in memory */
  'vision.explain.insight.sort-in-memory':
    'A ordenação acontece em memória, após a leitura de todas as correspondências. Ordene por atributos pelos quais o índice consegue ordenar.',
  /** Link under the plan insights to the guide on fast queries */
  'vision.explain.insights.guide': 'GROQ de alto desempenho',
  /** Heading of the plan insights in the Explain panel */
  'vision.explain.insights.title': 'O que se destaca',
  /** Button in the Explain panel fetching the query plan */
  'vision.explain.plan': 'Mostrar o plano de consulta',
  /** Shown when the query plan could not be fetched */
  'vision.explain.plan-failed': 'Não foi possível obter o plano de consulta: {{message}}',
  /** Heading of the query plan in the Explain panel */
  'vision.explain.plan-title': 'Plano de consulta',
  /** Toast shown after a code snippet was copied */
  'vision.export-query.copied': 'Snippet copiado para a área de transferência',
  /** Label for the button that copies a code snippet */
  'vision.export-query.copy': 'Copiar snippet',
  /** Explanation at the top of the export query dialog */
  'vision.export-query.description': 'Execute esta consulta fora do studio com um destes snippets.',
  /** Note under the curl snippet when the query is sent as a request body rather than in the URL */
  'vision.export-query.post-body-note':
    'A consulta e os parâmetros totalizam {{size}} caracteres como parâmetros de pesquisa; a partir de {{limit}}, o @sanity/client os envia como um corpo JSON em vez de na URL, então o snippet faz o mesmo.',
  /** Title of the dialog that exports the query as code snippets */
  'vision.export-query.title': 'Exportar consulta',
  /** Note about authentication in the export query dialog */
  'vision.export-query.token-note':
    'Datasets privados precisam de um token de API. Datasets públicos podem omitir o cabeçalho Authorization.',
  /** Toast shown after the generated code was copied */
  'vision.export-types.copied': 'Código copiado para a área de transferência',
  /** Label for the button that copies the generated code */
  'vision.export-types.copy': 'Copiar código',
  /** Shown in the types dialog when there is neither a schema evaluation nor a result */
  'vision.export-types.empty':
    'Busque a consulta primeiro para que haja um resultado do qual derivar os tipos.',
  /** Why the workspace schema could not be used for the types; shown with the result fallback */
  'vision.export-types.schema-error': 'Falha na avaliação do schema: {{message}}',
  /** Note shown when the types were derived from the fetched result instead of the schema */
  'vision.export-types.source.result':
    'Inferido a partir do resultado buscado, já que a consulta não pôde ser avaliada em relação ao schema do workspace.',
  /** Note shown when the types were derived from the workspace schema */
  'vision.export-types.source.schema':
    'Inferido a partir do schema do workspace, da mesma forma que o sanity typegen faz.',
  /** Shown when the schema cannot be evaluated and the shown result belongs to an older query */
  'vision.export-types.stale-result':
    'O resultado mostrado foi buscado para uma consulta ou parâmetros diferentes. Busque a consulta atual primeiro para que haja um resultado do qual derivar os tipos.',
  /** Title of the dialog exporting TypeScript types for the result */
  'vision.export-types.title-typescript': 'Exportar TypeScript',
  /** Title of the dialog exporting a Zod schema for the result */
  'vision.export-types.title-zod': 'Exportar Zod',
  /** Button of a library function the query does not declare, which declares it at the top */
  'vision.functions.add': 'Adicionar à consulta',
  /** Shown on a library function the query declares the same way */
  'vision.functions.declared': 'Nesta consulta',
  /** Lint action on a call of a library function the query does not declare */
  'vision.functions.editor.add-from-library': 'Declará-la',
  /** Note in a function's hover documentation: the API version it needs */
  'vision.functions.editor.api-version': 'Requer a versão da API {{version}} ou posterior',
  /** Detail of a completion for a custom function the query declares */
  'vision.functions.editor.completion-declared': 'nesta consulta',
  /** Detail of a completion for a library function, which declares it too */
  'vision.functions.editor.completion-library': 'da sua biblioteca',
  /** Note in the hover documentation of a custom function the query declares */
  'vision.functions.editor.declared-on': 'Função personalizada, declarada na linha {{line}}',
  /** Note in the hover documentation of the functions that only work in delta mode */
  'vision.functions.editor.delta-only':
    'Funciona apenas no modo delta, onde webhooks e Sanity Functions executam seus filtros',
  /** Button over a selected projection in the query editor, turning it into a custom function */
  'vision.functions.editor.extract': 'Extrair para função',
  /** Note in the hover documentation of a library function the query does not declare */
  'vision.functions.editor.in-library':
    'Na sua biblioteca de funções, não declarada nesta consulta',
  /** Link at the end of a built-in function's hover documentation */
  'vision.functions.editor.reference': 'Referência de funções GROQ',
  /** Explanation under the library heading in the Functions panel */
  'vision.functions.library.description':
    'Mantido neste navegador para cada dataset do projeto. As sugestões de conclusão oferecem estas funções, e o lint sugere declarar uma que a consulta chama.',
  /** Shown in the Functions panel while the library is empty */
  'vision.functions.library.empty':
    'Salve uma função que a consulta declara para usá-la em outras consultas.',
  /** Heading of the functions library in the Functions panel */
  'vision.functions.library.title': 'Biblioteca',
  /** Shown in the Functions panel while the query declares no custom functions */
  'vision.functions.query.empty':
    'Declare funções personalizadas no início da consulta, ou posicione o cursor em uma projeção, como author->{name}, e pressione o botão de extrair sobre o editor ({{shortcut}}).',
  /** Heading of the functions the query declares in the Functions panel */
  'vision.functions.query.title': 'Nesta consulta',
  /** Removes a function from the library */
  'vision.functions.remove': 'Remover da biblioteca',
  /** Button of a library function the query declares differently, which puts the library's version in */
  'vision.functions.replace': 'Substituir na consulta',
  /** Accessible name of a declared function in the Functions panel, which selects it in the editor */
  'vision.functions.reveal': 'Mostrar {{name}} no editor',
  /** Button of a function the query declares that is not in the library yet */
  'vision.functions.save': 'Salvar na biblioteca',
  /** Shown on a function the query declares the way the library has it */
  'vision.functions.saved': 'Salvo',
  /** Button of a function the query declares differently from the library's version */
  'vision.functions.update': 'Atualizar biblioteca',
  /** Button over the query editor that opens the bar writing a query from a description */
  'vision.generate.button': 'Gerar consulta',
  /** Closes the generate query bar */
  'vision.generate.close': 'Fechar',
  /** Explanation under the generate query field */
  'vision.generate.description':
    'As Ações de Agente do Sanity escrevem o GROQ a partir da sua descrição e dos tipos de documento, e o Content Lake verifica cada tentativa; cada tentativa usa um crédito de IA. Isso substitui a consulta desta aba e a executa; desfazer no editor traz de volta a consulta anterior.',
  /** Shown when no query could be generated, above the reason */
  'vision.generate.failed': 'Não foi possível gerar a consulta',
  /** Accessible label of the description field in the generate query bar */
  'vision.generate.label': 'O que a consulta deve buscar?',
  /** Opens the last rejected attempt, without running it, to fix it by hand */
  'vision.generate.open-anyway': 'Abrir a última tentativa',
  /** Placeholder of the description field in the generate query bar */
  'vision.generate.placeholder':
    'Os 10 autores mais recentes, ordenados por sobrenome e depois por primeiro nome',
  /** Shown while the first attempt at a query is written */
  'vision.generate.progress': 'Escrevendo a consulta…',
  /** Shown while a rejected attempt is retried */
  'vision.generate.progress-retry': 'Corrigindo a consulta (tentativa {{attempt}} de {{max}})…',
  /** Button generating the query */
  'vision.generate.submit': 'Gerar',
  /** Badge on a history entry the API CDN answered */
  'vision.history.cdn': 'API CDN',
  /** Badge on a history entry the API CDN answered from its cache */
  'vision.history.cdn-cache-hit': 'Acerto de cache da CDN',
  /** A history entry whose result differs from the previous result, which is no longer kept */
  'vision.history.changed': 'Alterado',
  /**
   * Toggle on a history entry that shows how its request and result differ from the previous
   * successful fetch
   */
  'vision.history.changes': 'Alterações',
  /** Shown instead of the changes when they could not be loaded or rendered */
  'vision.history.changes-failed': 'Não foi possível mostrar as alterações.',
  /** Button retrying to show the changes of a history entry */
  'vision.history.changes-retry': 'Tentar novamente',
  /** Above the changes of a history entry: the fetch they are compared with */
  'vision.history.compared-with': 'Comparado com a busca em {{time}}',
  /** Label of the diff of the GROQ params in a history entry's changes */
  'vision.history.diff.params': 'Parâmetros',
  /** Label of the diff of the GROQ query in a history entry's changes */
  'vision.history.diff.query': 'Consulta',
  /** Instead of the query diff, when the two queries only differ in whitespace and line breaks */
  'vision.history.diff.query-formatting-only': 'Apenas a formatação foi alterada',
  /** Label of the diff of the query result in a history entry's changes */
  'vision.history.diff.result': 'Resultado',
  /**
   * Label of the diff of the request URL in a history entry's changes: the API host, version and
   * dataset, and options such as the perspective
   */
  'vision.history.diff.url': 'URL da solicitação',
  /** Empty state of the history panel */
  'vision.history.empty': 'Nada buscado ainda',
  /** Status label for a failed fetch in the history */
  'vision.history.failed': 'Falhou',
  /** Button putting the hidden fields back into the diff out of a history entry's changes */
  'vision.history.hide-hidden': 'Ocultá-los',
  /** Next to a history entry's changes: the fields the diff leaves out */
  'vision.history.hiding': 'Ocultando {{fields}}',
  /** A history entry whose result only differs from the previous one in hidden fields */
  'vision.history.only-hidden-changed': 'Apenas campos ocultos foram alterados',
  /** History reason: a tab opened with a generated query fetched it */
  'vision.history.reason.generated': 'Consulta gerada',
  /** History reason: a link to the tool named a query URL, which opened in a tab and ran */
  'vision.history.reason.link': 'Link aberto',
  /** History reason: a live event matched the query's sync tags */
  'vision.history.reason.live': 'Atualização ao vivo',
  /** History reason: the live connection asked every client to refetch */
  'vision.history.reason.live-restart': 'Conexão ao vivo reiniciada',
  /**
   * History reason: the Live fetch button was pressed, which fetches and then refetches
   * automatically
   */
  'vision.history.reason.live-start': 'Busca ao vivo iniciada',
  /** History reason: a saved query was loaded into a tab that refetches automatically */
  'vision.history.reason.load': 'Consulta carregada',
  /** History reason: the fetch button was pressed */
  'vision.history.reason.manual': 'Botão de busca',
  /** History reason: mutations were applied from the Mutate panel */
  'vision.history.reason.mutation': 'Mutações aplicadas',
  /** History reason: dataset, API version or perspective changed while refetching automatically */
  'vision.history.reason.options': 'Opções alteradas',
  /** History reason: a query URL was pasted into the tab, which runs it */
  'vision.history.reason.paste': 'URL colada',
  /** History reason: a tab that refetches automatically was opened again, or the studio reloaded */
  'vision.history.reason.resume': 'Nova busca automática retomada',
  /** History reason: the keyboard shortcut was used */
  'vision.history.reason.shortcut': 'Atalho de teclado',
  /** A history entry whose result is the same as the previous result, for a changed request */
  'vision.history.same-result': 'Mesmo resultado',
  /** Button showing the hidden fields in a history entry's changes */
  'vision.history.show-hidden': 'Mostrá-los',
  /** Next to a history entry's changes while the hidden fields are shown */
  'vision.history.showing-hidden': 'Mostrando {{fields}}, ocultos por padrão',
  /** A history entry whose result, or the previous one, is too large to compare */
  'vision.history.too-large': 'Muito grande para comparar',
  /** A history entry whose result is the same as the previous result */
  'vision.history.unchanged': 'Sem alterações',
  /** Shown in the Lint panel while the query has no lint findings */
  'vision.lint.empty':
    'Nenhuma descoberta de lint. Os problemas que o linter do GROQ detecta na consulta são listados aqui enquanto você digita; selecione um para marcá-lo no editor.',
  /** Where a lint finding sits in the query, shown under its message */
  'vision.lint.position': 'Linha {{line}}, coluna {{column}}',
  /** Severity badge of a lint finding */
  'vision.lint.severity.error': 'Erro',
  /** Severity badge of a lint finding */
  'vision.lint.severity.hint': 'Dica',
  /** Severity badge of a lint finding */
  'vision.lint.severity.info': 'Informação',
  /** Severity badge of a lint finding */
  'vision.lint.severity.warning': 'Aviso',
  /** Lint action writing the type, field or operator a schema finding suggests */
  'vision.lint.use-suggestion': 'Usar {{suggestion}}',
  /** Badge shown while a tab refetches automatically */
  'vision.live.active': 'Ao vivo',
  /** Button in the request column's action bar that fetches and then refetches automatically */
  'vision.live.button': 'Busca ao vivo',
  /** Tooltip of the Live button while automatic refetching is off */
  'vision.live.button.start':
    'Buscar e, em seguida, buscar novamente sempre que os documentos no resultado mudarem',
  /** Tooltip of the Stop live button, while the tab refetches automatically */
  'vision.live.button.stop':
    'Parar de buscar quando os documentos no resultado mudarem. A busca ainda ocorre sob demanda, para resultados que nenhuma alteração de documento afeta, como now()',
  /** Error shown when the live connection breaks */
  'vision.live.error': 'Atualizações ao vivo desconectadas: {{message}}',
  /** The Live fetch button while the tab refetches automatically, stopping it */
  'vision.live.stop': 'Parar ao vivo',
  /** Button in the Mutate panel adding a mutation to the list */
  'vision.mutate.add': 'Adicionar mutação',
  /** Adds a mutation creating a document, with the type of the result's first document */
  'vision.mutate.add.create': 'Criar um documento',
  /** Adds a mutation deleting a document, its ID to fill in */
  'vision.mutate.add.delete': 'Excluir um documento',
  /** Adds a mutation deleting the documents of the shown result */
  'vision.mutate.add.delete-result': 'Excluir os documentos no resultado',
  /** Adds a mutation patching a document, its ID to fill in */
  'vision.mutate.add.patch': 'Corrigir um documento',
  /** Adds a mutation patching the documents of the shown result */
  'vision.mutate.add.patch-result': 'Aplicar patch aos documentos no resultado',
  /** Button applying the mutations a dry run showed */
  'vision.mutate.apply': 'Aplicar a {{dataset}}',
  /** Heading of the error shown when applying the mutations failed */
  'vision.mutate.apply-failed': 'As mutações não foram aplicadas',
  /** Next to Apply while the mutations as they are have had no dry run */
  'vision.mutate.apply-needs-preview':
    'Aplicar envia o que uma execução de teste mostrou: execute uma primeiro.',
  /** Option giving array items without a _key one */
  'vision.mutate.auto-keys': 'Adicionar uma _key aos itens da matriz que não têm nenhuma',
  /** Under the option giving array items a _key */
  'vision.mutate.auto-keys.description':
    'O studio precisa de uma em cada item da matriz para editá-lo.',
  /** Button showing a document's changes in the dry run */
  'vision.mutate.changes': 'Alterações',
  /** Shown instead of a document's changes when they could not be loaded or rendered */
  'vision.mutate.changes-failed': 'As alterações não puderam ser mostradas.',
  /** Button retrying to show a document's changes */
  'vision.mutate.changes-retry': 'Tentar novamente',
  /** What the Mutate panel does */
  'vision.mutate.description':
    'Escreva mutações como a API de Mutações as recebe, em uma lista: create, createOrReplace, createIfNotExists, delete e patch, por ID ou por uma consulta GROQ. Uma execução de teste mostra o que elas fariam a cada documento sem alterar nada; Aplicar então as grava no dataset em uma única transação, com a sua conta.',
  /** What the API says went wrong with one of the mutations */
  'vision.mutate.failure-item': 'Mutação {{index}}: {{message}}',
  /** Tooltip and accessible label of the button opening the generate mutations field */
  'vision.mutate.generate.button': 'Gerar mutações',
  /** Explanation under the generate mutations field */
  'vision.mutate.generate.description':
    'As Ações do Agente Sanity escrevem as mutações a partir da sua descrição, dos documentos no resultado e dos seus tipos, e uma execução de teste verifica cada tentativa; cada tentativa usa um crédito de IA. Elas substituem as mutações aqui, onde desfazer as traz de volta; nada é gravado até que você as aplique.',
  /** Shown when no mutations could be generated, above the reason */
  'vision.mutate.generate.failed': 'As mutações não puderam ser geradas',
  /** Accessible label of the description field in the generate mutations bar */
  'vision.mutate.generate.label': 'O que as mutações devem fazer?',
  /** Placeholder of the description field in the generate mutations bar */
  'vision.mutate.generate.placeholder': 'Altere o título dos documentos no resultado para foobar',
  /** Shown while the first attempt at the mutations is written */
  'vision.mutate.generate.progress': 'Escrevendo as mutações…',
  /** Shown while an attempt the dry run turned down is retried */
  'vision.mutate.generate.progress-retry':
    'Corrigindo as mutações (tentativa {{attempt}} de {{max}})…',
  /** Under the dry run: the fields the diffs leave out */
  'vision.mutate.hiding': 'As alterações deixam de fora {{fields}}, assim como o Histórico.',
  /** Shown when the mutations are not valid JSON */
  'vision.mutate.invalid-json': 'As mutações não são um JSON válido: {{message}}',
  /** Shown when a mutation does not name exactly one thing to do */
  'vision.mutate.invalid-mutation':
    'A mutação {{index}} precisa de exatamente um entre create, createOrReplace, createIfNotExists, delete ou patch.',
  /** Label of the mutations editor */
  'vision.mutate.mutations': 'Mutações',
  /** The dry run touched no documents */
  'vision.mutate.no-documents': 'As mutações não afetam nenhum documento.',
  /** Shown when the JSON is not a list of mutations */
  'vision.mutate.not-a-list':
    'Escreva uma lista de mutações, uma única mutação, ou um corpo de solicitação com uma lista de mutações.',
  /** A document the mutations create */
  'vision.mutate.operation.create': 'Criar',
  /** A document the mutations delete */
  'vision.mutate.operation.delete': 'Excluir',
  /** A document the mutations touch without changing its content */
  'vision.mutate.operation.none': 'Nenhuma alteração',
  /** A document the mutations change */
  'vision.mutate.operation.update': 'Atualizar',
  /** Button running the mutations as a dry run */
  'vision.mutate.preview': 'Simulação',
  /** Heading of the error shown when the dry run failed */
  'vision.mutate.preview-failed': 'A simulação falhou',
  /** Heading of the dry run's outcome */
  'vision.mutate.preview-heading': 'Simulação',
  /** Shown over a dry run made for other mutations, another dataset or other options */
  'vision.mutate.stale':
    'As mutações, o dataset ou as opções mudaram após essa simulação. Execute-a novamente para aplicá-las.',
  /** How many documents the dry run changes and leaves as they are */
  'vision.mutate.summary': 'Alterados: {{changed}} · Inalterados: {{unchanged}}',
  /** In the Network panel: whether a cache answered the query */
  'vision.network.cache': 'Cache',
  /** The API CDN answered from its cache */
  'vision.network.cache.hit': 'Acerto',
  /** Under the details of a CDN cache hit */
  'vision.network.cache.hit-explained':
    'O CDN respondeu com uma resposta que havia armazenado em cache, de um local próximo a você; a consulta não chegou à API.',
  /** The API CDN answered with a response this session had not seen */
  'vision.network.cache.miss': 'Erro, até onde esta sessão pode verificar',
  /** The API answered, which caches nothing */
  'vision.network.cache.none': 'Nenhum, a API responde a cada solicitação com conteúdo atualizado',
  /** Shown in the Network panel while there is no response */
  'vision.network.empty':
    'Busque a consulta para ver qual endpoint a respondeu, se foi a partir de um cache e onde foi executada.',
  /** In the Network panel: the endpoint that answered */
  'vision.network.endpoint': 'Respondido por',
  /** The live API answered */
  'vision.network.endpoint.api': 'API',
  /** The API CDN answered */
  'vision.network.endpoint.cdn': 'API CDN',
  /** In the Network panel: the HTTP method the query was sent with */
  'vision.network.method': 'Método',
  /** The query and its params went in the URL */
  'vision.network.method.get': 'GET, com a consulta e os parâmetros na URL',
  /** The query and its params went in the request body */
  'vision.network.method.post': 'POST, com a consulta e os parâmetros como corpo JSON',
  /** Under the method of a POST request: why the query was not sent in the URL */
  'vision.network.method.post-explained':
    'A consulta e os parâmetros somam {{size}} caracteres como parâmetros de busca; a partir de {{limit}}, o @sanity/client os envia como corpo JSON, já que a API limita o comprimento de uma URL. As opções permanecem na URL.',
  /** In the Network panel: the region the query ran in */
  'vision.network.region': 'Consulta executada em',
  /** The response did not say where the query ran */
  'vision.network.region.unknown': 'Não informado',
  /** In the Network panel: the round trip and the time on the server */
  'vision.network.timing': 'Tempo',
  /** The round trip and the server's time for the query, in milliseconds */
  'vision.network.timing.value': '{{e2e}}ms de ida e volta, {{server}}ms no servidor',
  /** In the Network panel: the trace of the request, for Sanity support */
  'vision.network.trace': 'ID do trace',
  /** Hint in the Network panel while queries go to the API */
  'vision.network.use-cdn-hint':
    'Ative Usar o CDN da API em Opções para enviar consultas através do CDN.',
  /** Label of the browser's marker on the Network panel's globe, placed from its time zone */
  'vision.network.you': 'Você',
  /** Hint under the dataset field while the tab follows the workspace's dataset */
  'vision.options.dataset.follows-workspace': 'Segue o workspace',
  /** Button that pins the current dataset so the tab stops following the workspace */
  'vision.options.dataset.pin': 'Fixar um dataset',
  /** Hint under the dataset field while a dataset is pinned */
  'vision.options.dataset.pinned': 'Fixado; o workspace pode usar outro dataset',
  /** Button that makes the tab follow the workspace's dataset again */
  'vision.options.dataset.use-workspace': 'Usar o dataset do workspace',
  /** Label for the "Include content source map" switch */
  'vision.options.include-source-map': 'Incluir mapa de origem de conteúdo',
  /** Description for the "Include content source map" switch */
  'vision.options.include-source-map.description':
    'Adiciona resultSourceMap à resposta, exibido na aba Mapa de Origem de Conteúdo.',
  /** Perspective option following the studio navbar; the name is the release, published or drafts */
  'vision.options.perspective.global': 'Global ({{name}})',
  /** Label of the switch that sends queries to the API CDN */
  'vision.options.use-cdn': 'Usar o CDN da API',
  /** Note under the API CDN switch while the studio signs in with a cookie */
  'vision.options.use-cdn.anonymous':
    'Este studio faz seu login com um cookie, que o CDN da API nunca recebe: ele responde como responderia a um visitante anônimo, com o que um dataset público mostra.',
  /**
   * Why the API CDN is asked for but not used: the perspective is the one the perspective
   * select shows, such as "Global (drafts)"
   */
  'vision.options.use-cdn.blocked':
    'O CDN da API não serve rascunhos ou releases, então consultas com a perspectiva {{perspective}} vão para a API. Com published ou raw elas usam o CDN.',
  /** Heading of the notice shown while the perspective keeps queries off the API CDN */
  'vision.options.use-cdn.blocked.title': 'As consultas vão para a API, não para o CDN',
  /** Description of the API CDN switch */
  'vision.options.use-cdn.description':
    'Envia a consulta para o CDN da API, como useCdn: true no @sanity/client, com as perspectivas published e raw: drafts e releases sempre vão para a API. Suas respostas ficam em cache por até um minuto; o painel de Rede mostra quando uma resposta veio do cache.',
  /** Button in the API CDN notice switching the tab to the published perspective */
  'vision.options.use-cdn.use-published': 'Usar a perspectiva published',
  /** Label of the variant field */
  'vision.options.variant-label': 'Variante',
  /** Variant option sending the navbar's variant, named */
  'vision.options.variant.global': 'Global ({{name}})',
  /** Variant option sending the navbar's variant while none is selected there */
  'vision.options.variant.global-none': 'Global (nenhuma selecionada)',
  /** Variant option sending no variant */
  'vision.options.variant.none': 'Nenhuma',
  /** Accessible label for collapsing a bottom panel */
  'vision.panel.collapse': 'Recolher painel',
  /** Label of the Delta tab in the response panel, which tests the query in delta mode */
  'vision.panel.delta': 'Delta',
  /** Accessible label for expanding a bottom panel */
  'vision.panel.expand': 'Expandir painel',
  /** Label of the "Explain" tab in the response panel: the query plan and an explanation */
  'vision.panel.explain': 'Explicar',
  /** Label of the Functions tab in the response panel */
  'vision.panel.functions': 'Funções',
  /** Label of the "History" tab in the response panel */
  'vision.panel.history': 'Histórico',
  /** Label of the "Lint" tab in the response panel, listing the query's lint findings */
  'vision.panel.lint': 'Lint',
  /** Label of the Mutate tab in the response panel, which runs and applies mutations */
  'vision.panel.mutate': 'Mutar',
  /** Label of the Network tab in the response panel */
  'vision.panel.network': 'Rede',
  /** Label of the "Options" panel in the request column */
  'vision.panel.options': 'Opções',
  /** Label of the "Response" tab in the response panel */
  'vision.panel.response': 'Resposta',
  /** Label of the "Content Source Map" tab in the response panel */
  'vision.panel.source-map': 'Mapa de Origem de Conteúdo',
  /** Button adding an item to a list param in the params form */
  'vision.params-form.add-item': 'Adicionar item',
  /** Placeholder of a params form field that takes any JSON value */
  'vision.params-form.any-placeholder': 'Qualquer valor JSON; outro texto é enviado como string',
  /** Shown in the params form when the query uses no params */
  'vision.params-form.empty':
    'A consulta não usa parâmetros. Cada $nome nela recebe um campo aqui.',
  /** Shown in the params form while the params JSON cannot be parsed */
  'vision.params-form.invalid-json':
    'Os parâmetros não são um JSON válido. Corrija-os na visualização JSON para editá-los aqui.',
  /** A boolean param's value is not true or false; it is sent anyway */
  'vision.params-form.invalid.boolean': 'Não é verdadeiro ou falso; enviado como {{value}}',
  /** A document type param's value is not a document type of the workspace; it is sent anyway */
  'vision.params-form.invalid.document-type':
    'Não é um tipo de documento neste workspace; enviado mesmo assim',
  /** A whole number param (a slice bound) holds a fraction */
  'vision.params-form.invalid.integer': 'Não é um número inteiro, que os slices exigem',
  /** A list param's value is not a list; it is sent anyway */
  'vision.params-form.invalid.list': 'Não é uma lista; enviado como {{value}}',
  /** A number param's value is not a number; it is sent anyway */
  'vision.params-form.invalid.number': 'Não é um número; enviado como texto',
  /** A param's value is not one of the values the schema allows; it is sent anyway */
  'vision.params-form.invalid.option': 'Não é um dos valores conhecidos; enviado mesmo assim',
  /** A text param's value is not text; it is sent anyway */
  'vision.params-form.invalid.string': 'Não é texto; enviado como {{value}}',
  /** Accessible label of an item input of a list param in the params form */
  'vision.params-form.item-label': '${{name}}, item {{index}}',
  /** Placeholder of an item input of a list param in the params form */
  'vision.params-form.item-placeholder': 'Item',
  /** Under a params form field whose param has no value */
  'vision.params-form.missing': 'Não definido: a consulta falha até que tenha um valor',
  /** Shown in the params form when the workspace schema could not be read */
  'vision.params-form.no-schema':
    'Os tipos vêm apenas da consulta: o schema do workspace não pôde ser lido.',
  /** Placeholder of a params form field without a value, and the unset choice of a boolean */
  'vision.params-form.not-set': 'Não definido',
  /** Button setting a date and time param to the current time */
  'vision.params-form.now': 'Agora',
  /** Button removing a param the query does not use from the params */
  'vision.params-form.remove': 'Remover',
  /** Accessible label of the button removing an item from a list param */
  'vision.params-form.remove-item': 'Remover item',
  /** Shown in the params form when the query does not parse */
  'vision.params-form.syntax-error':
    'A consulta não pôde ser interpretada, então seus parâmetros são listados sem tipos.',
  /** Type hint of a params form field: any JSON value */
  'vision.params-form.type.any': 'qualquer valor JSON',
  /** Type hint of a params form field: true or false */
  'vision.params-form.type.boolean': 'verdadeiro ou falso',
  /** Type hint of a params form field: an ISO 8601 date and time */
  'vision.params-form.type.datetime': 'data e hora (ISO 8601)',
  /** Type hint of a params form field: a document ID */
  'vision.params-form.type.document-id': 'ID do documento',
  /** Type hint of a params form field: one of the workspace's document types */
  'vision.params-form.type.document-type': 'tipo de documento',
  /** Type hint of a params form field: a whole number */
  'vision.params-form.type.integer': 'número inteiro',
  /** Type hint of a params form field: a list of values */
  'vision.params-form.type.list': 'lista, cada {{type}}',
  /** Type hint of a params form field: a number */
  'vision.params-form.type.number': 'número',
  /** Type hint of a params form field: text */
  'vision.params-form.type.string': 'texto',
  /** Heading of the params the query does not use, listed in the params form */
  'vision.params-form.unused': 'Não usado pela consulta',
  /** Before the expressions that use a param, in the params form */
  'vision.params-form.used-in': 'Usado em',
  /** Value announced for the params resize handle while the panel sizes itself to its content */
  'vision.params.fit-height': 'Ajustado ao conteúdo, {{height}} pixels',
  /** Accessible label and tooltip of the handle for resizing the params panel */
  'vision.params.resize':
    'Redimensionar parâmetros: arraste ou use as teclas de seta; clique duas vezes ou pressione Enter para ajustar novamente ao conteúdo',
  /** Tab showing the params as a form inferred from the query */
  'vision.params.view.form': 'Formulário',
  /** Tab showing the params as JSON */
  'vision.params.view.json': 'JSON',
  /** Accessible label of the tabs switching how the params are edited */
  'vision.params.view.label': 'Editar parâmetros como',
  /** Toast shown after a query URL was pasted and loaded into the tab */
  'vision.paste.parsed': 'Consulta carregada a partir da URL colada',
  /** Toast shown after a curl command for a query was pasted and loaded into the tab */
  'vision.paste.parsed-curl': 'Consulta carregada a partir do comando cURL colado',
  /** Toast shown when a pasted URL used a content variant the tab does not send */
  'vision.paste.unavailable-variant':
    'A URL colada usava a variante "{{variant}}"; selecione-a na barra de navegação para executar a consulta com ela.',
  /** Toast shown when the dataset of a pasted URL is not available here */
  'vision.paste.unknown-dataset':
    'O dataset "{{dataset}}" na URL colada não está disponível aqui, mantendo o atual.',
  /** Toast shown when the perspective of a pasted URL cannot be used */
  'vision.paste.unsupported-perspective':
    'A perspective na URL colada não é suportada aqui, mantendo a atual.',
  /** Toast shown when a pasted URL used a content variant, but this workspace has variants switched off */
  'vision.paste.variants-disabled':
    'A URL colada usava a variante "{{variant}}"; este workspace tem as variantes desativadas, então a consulta é executada sem ela.',
  /** Accessible label for the query actions menu */
  'vision.query.actions': 'Ações da consulta',
  /** Tooltip when automatic refetching is not available for the API version */
  'vision.query.auto-refetch.unsupported':
    'A reexecução automática requer a versão da API v2021-03-25 ou posterior.',
  /** Toast shown after the query was copied */
  'vision.query.copied': 'Consulta copiada para a área de transferência',
  /** Menu item copying the query text */
  'vision.query.copy': 'Copiar consulta',
  /** Menu item opening the export query dialog */
  'vision.query.export': 'Exportar consulta…',
  /** Menu item reformatting the query */
  'vision.query.prettify': 'Formatar consulta',
  /** Toast shown when the query could not be reformatted */
  'vision.query.prettify.failed': 'Não foi possível formatar a consulta',
  /** Menu item saving the query to the personal saved queries */
  'vision.query.save': 'Salvar consulta',
  /** The Fetch button while a fetch is running, stopping it; paired with Stop live */
  'vision.query.stop': 'Parar',
  /** Tooltip and accessible label of the Stop button, which stops the running fetch only */
  'vision.query.stop.description': 'Parar busca',
  /** Explanation in the settings section about the redesigned experience */
  'vision.redesign.settings.description':
    'Você está usando a versão reformulada da ferramenta Vision. Voltar para a versão clássica mantém suas abas e configurações neste navegador para a próxima vez que você tentar.',
  /** Title of the settings section about the redesigned experience */
  'vision.redesign.settings.title': 'Vision reformulado (beta)',
  /** Sidebar item and settings button that return to the classic Vision tool */
  'vision.redesign.switch-to-classic': 'Voltar para o Vision clássico',
  /** Toast button that switches to the redesigned tool */
  'vision.redesign.toast.accept': 'Experimentar agora',
  /** Body of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.description':
    'Abas de consulta, reexecução ao vivo, detalhes de resposta e exportações. Você pode voltar a qualquer momento.',
  /** Toast button that hides the invitation */
  'vision.redesign.toast.dismiss': 'Agora não',
  /** Title of the toast inviting users of the classic tool to try the redesign */
  'vision.redesign.toast.title': 'Experimente o Vision reformulado',
  /** Button next to Fetch in the classic tool that switches to the redesigned one */
  'vision.redesign.try': 'Experimentar a nova versão',
  /** Tooltip of the button next to Fetch in the classic tool that switches to the redesign */
  'vision.redesign.try.description':
    'Mude para o Vision reformulado, em beta. Você pode voltar a qualquer momento pela barra lateral.',
  /** Empty state of the response panel before anything was fetched */
  'vision.response.empty': 'Nada buscado ainda',
  /** Label for the payload size in the response tab */
  'vision.response.payload-size': 'Tamanho do payload',
  /** Label for the sync tags in the response tab */
  'vision.response.sync-tags': 'Tags de sincronização',
  /** Shown when the response carried no sync tags */
  'vision.response.sync-tags.none': 'Nenhuma tag de sincronização na resposta',
  /** Under the query URL when the request went out as a POST body rather than that URL */
  'vision.response.url.sent-as-post':
    'Enviado como corpo de uma requisição POST: a consulta e os parâmetros são longos demais para uma URL, então o @sanity/client os enviou como JSON. Colar essa URL no Vision ainda carrega a consulta.',
  /** Accessible label for the result actions menu */
  'vision.result.actions': 'Ações do resultado',
  /** Toast shown after the result was copied */
  'vision.result.copied': 'Resultado copiado para a área de transferência',
  /** Toast shown after a value in the result was copied, with its path such as [0].author.name */
  'vision.result.copied-value': '{{path}} copiado',
  /** Menu item and button copying the result as JSON */
  'vision.result.copy': 'Copiar resultado',
  /** Button next to each property in the result tree, copying its value */
  'vision.result.copy-value': 'Copiar valor',
  /** Empty state of the result view */
  'vision.result.empty': 'Execute a consulta para ver o resultado aqui',
  /** Button exporting the result as CSV */
  'vision.result.export-csv': 'Exportar CSV',
  /** Button exporting the result as JSON */
  'vision.result.export-json': 'Exportar JSON',
  /** Menu item opening the TypeScript export dialog */
  'vision.result.export-typescript': 'Exportar TypeScript…',
  /** Menu item opening the Zod export dialog */
  'vision.result.export-zod': 'Exportar Zod…',
  /** Button on a graph node hiding the objects and arrays it holds */
  'vision.result.graph.collapse': 'Ocultar o que contém',
  /** Button fitting the whole graph in view */
  'vision.result.graph.fit': 'Ajustar à visualização',
  /** Accessible label of the graph, saying how to move around in it */
  'vision.result.graph.label':
    'Gráfico de resultado: arraste para mover, role para ampliar/reduzir; com foco, as setas movem, + e - ampliam/reduzem, 0 ajusta',
  /** Ends the note on a graph that leaves part of this result out */
  'vision.result.graph.left-out-hint': 'As visualizações em árvore e JSON mostram tudo.',
  /** Note on a graph of a result with more objects and arrays than it draws */
  'vision.result.graph.node-limit':
    'Apenas os primeiros {{nodes}} objetos e arrays são desenhados.',
  /**
   * Note on a graph whose objects or arrays have more entries than it lists; the nodes are the
   * ones in this result, each with its number of entries
   */
  'vision.result.graph.partial':
    'Apenas as primeiras {{rows}} entradas são listadas para {{nodes}}.',
  /** An object or array in the note, with how many entries it has (always more than listed) */
  'vision.result.graph.partial.node': '{{name}} ({{entries}} entradas)',
  /** Title of the graph node of the result itself */
  'vision.result.graph.root': 'resultado',
  /** Button zooming into the graph */
  'vision.result.graph.zoom-in': 'Ampliar',
  /** Button zooming out of the graph */
  'vision.result.graph.zoom-out': 'Reduzir',
  /** Tab showing the result as a graph of its objects and arrays */
  'vision.result.view.graph': 'Gráfico',
  /** Tab showing the result as indented JSON text, to select and copy from */
  'vision.result.view.json': 'JSON',
  /** Accessible label of the tabs that switch how the result shows */
  'vision.result.view.label': 'Visualização do resultado',
  /** Tab showing the result as a tree to browse */
  'vision.result.view.tree': 'Árvore',
  /** Empty state of the saved queries panel */
  'vision.saved.empty': 'Ainda não há consultas salvas. Salve a consulta atual com o botão +.',
  /** Empty state of a query list when the search matches nothing */
  'vision.saved.empty-search': 'Nenhuma consulta corresponde à sua pesquisa',
  /** Menu item loading a saved query into the active tab */
  'vision.saved.load-in-current-tab': 'Carregar na aba atual',
  /** Menu item opening a saved query in a new tab */
  'vision.saved.open-in-new-tab': 'Abrir em nova guia',
  /** Menu item renaming a saved query */
  'vision.saved.rename': 'Renomear',
  /** Accessible label for the button saving the current query */
  'vision.saved.save-current': 'Salvar consulta atual',
  /** Toast shown when an opened saved query used a content variant the tab does not send */
  'vision.saved.unavailable-variant':
    'Esta consulta salva usava a variante "{{variant}}"; selecione-a na barra de navegação para executar a consulta com ela.',
  /** Toast shown when an opened saved query names a dataset that is not available here */
  'vision.saved.unknown-dataset':
    'O dataset "{{dataset}}" desta consulta salva não está disponível aqui, mantendo o atual.',
  /** Toast shown when an opened saved query used a content variant, but this workspace has variants switched off */
  'vision.saved.variants-disabled':
    'Esta consulta salva usava a variante "{{variant}}"; este workspace tem as variantes desativadas, então a consulta é executada sem ela.',
  /** Button in the settings dialog that clears the stored state */
  'vision.settings.clear-storage': 'Limpar armazenamento',
  /** Confirmation button for clearing the storage */
  'vision.settings.clear-storage.confirm': 'Sim, limpar armazenamento',
  /** Explanation of what clearing the storage does */
  'vision.settings.clear-storage.description':
    'Exclui suas consultas salvas pessoais e a biblioteca de funções, redefine as guias abertas e estes padrões neste navegador, e retorna à ferramenta Vision clássica. As consultas compartilhadas são mantidas.',
  /** Toast shown when the saved queries could not be cleared */
  'vision.settings.clear-storage.error': 'Não foi possível limpar as consultas salvas',
  /** Toast shown after the storage was cleared */
  'vision.settings.clear-storage.success': 'Armazenamento limpo',
  /** Explanation at the top of the settings dialog */
  'vision.settings.description':
    'Padrões para novas guias. As guias abertas mantêm suas próprias opções.',
  /** Explains the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.description':
    'Um caminho de campo por linha. Um caminho corresponde em qualquer profundidade de um resultado, então _rev oculta a revisão de todos os documentos nele. Cada diff ainda pode mostrá-los.',
  /** Button restoring the default fields left out of History diffs */
  'vision.settings.history-diff.reset': 'Restaurar os padrões',
  /** Label of the setting listing the fields left out of History diffs */
  'vision.settings.history-diff.title': 'Campos ocultos dos diffs de histórico',
  /** Title of the settings dialog */
  'vision.settings.title': 'Configurações',
  /** Empty state of the shared queries panel */
  'vision.shared.empty':
    'Ainda não há consultas compartilhadas. Compartilhe uma consulta salva para torná-la disponível para todos que usam este dataset.',
  /** Shortcut description: close dialogs and menus */
  'vision.shortcuts.close': 'Fechar caixas de diálogo e menus',
  /** Shortcut that lists the functions matching the name being typed in the query editor */
  'vision.shortcuts.complete': 'Completar um nome de função',
  /** Shortcut description: copy the query */
  'vision.shortcuts.copy-query': 'Copiar a consulta',
  /** Shortcut that turns the selected projection, or the one around the cursor, into a custom function */
  'vision.shortcuts.extract-function': 'Extrair a projeção no cursor para uma função',
  /** Shortcut description: run the query */
  'vision.shortcuts.fetch': 'Buscar a consulta',
  /** Shortcut description: move the cursor to the next lint finding in the query editor */
  'vision.shortcuts.next-finding': 'Ir para a próxima ocorrência de lint',
  /** Shortcut description: reformat the query */
  'vision.shortcuts.prettify': 'Formatar a consulta',
  /** Title of the keyboard shortcuts dialog */
  'vision.shortcuts.title': 'Atalhos de teclado',
  /** Sidebar toggle: show icons only */
  'vision.sidebar.collapse': 'Recolher barra lateral',
  /** Sidebar toggle: show labels next to the icons */
  'vision.sidebar.expand': 'Expandir barra lateral',
  /** Accessible label for the sidebar navigation */
  'vision.sidebar.label': 'Barra lateral do Vision',
  /** Sidebar item and drawer title for personal saved queries */
  'vision.sidebar.saved-queries': 'Consultas salvas',
  /** Sidebar item opening the settings dialog */
  'vision.sidebar.settings': 'Configurações',
  /** Sidebar item and drawer title for shared queries */
  'vision.sidebar.shared-queries': 'Consultas compartilhadas',
  /** Sidebar item opening the keyboard shortcuts dialog */
  'vision.sidebar.shortcuts': 'Atalhos de teclado',
  /** Empty state of the content source map panel */
  'vision.source-map.empty':
    'Nenhum mapa de origem de conteúdo na resposta. Ative "Incluir mapa de origem de conteúdo" em Opções e busque novamente.',
  /** Accessible label of the divider between the result and the response details panel */
  'vision.split.bottom-panel':
    'Redimensionar o painel de detalhes da resposta: arraste ou use as teclas de seta; Home e End vão para os limites, Enter reinicia',
  /** Accessible label of the divider between the request and response panes */
  'vision.split.request-response':
    'Redimensionar os painéis de solicitação e resposta: arraste ou use as teclas de seta; Home e End vão para os limites, Enter reinicia',
  /** Accessible label for the button closing a query tab */
  'vision.tabs.close-tab': 'Fechar aba',
  /** Accessible label for the list of query tabs */
  'vision.tabs.label': 'Abas de consulta',
  /** Accessible label for the button opening a new query tab */
  'vision.tabs.new-tab': 'Nova aba',
  /** Placeholder of the input renaming a tab */
  'vision.tabs.title-placeholder': 'Título da aba',
  /** Title of a tab whose query is still empty */
  'vision.tabs.untitled': 'Consulta sem título',
  /** Title the browser shows for the WebMCP tool that lints a query */
  'vision.webmcp.check-query': 'Verificar uma consulta GROQ no Vision',
  /** Title the browser shows for the WebMCP tool that describes the workspace schema */
  'vision.webmcp.describe-schema': 'Descrever o esquema no Vision',
  /** Title the browser shows for the WebMCP tool that returns a query plan */
  'vision.webmcp.explain-query': 'Explicar uma consulta GROQ no Vision',
  /** Title the browser shows for the WebMCP tool that reads the active Vision tab */
  'vision.webmcp.get-state': 'Ler a aba aberta do Vision',
  /** Title the browser shows for the WebMCP tool that opens a query in a new tab */
  'vision.webmcp.open-query': 'Abrir uma consulta GROQ no Vision',
  /** Title the browser shows for the WebMCP tool that runs mutations as a dry run */
  'vision.webmcp.preview-mutations': 'Pré-visualizar mutações no Vision',
  /** Title the browser shows for the WebMCP tool that runs a query */
  'vision.webmcp.run-query': 'Executar uma consulta GROQ no Vision',
})
