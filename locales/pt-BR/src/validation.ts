import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Deve ter exatamente {{wantedLength}} itens',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Deve ter exatamente {{wantedLength}} blocos',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'Não pode ser duplicado',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Deve ter no máximo {{maxLength}} itens',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Deve ter no máximo {{maxLength}} blocos',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Deve ter pelo menos {{minLength}} itens',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Deve ter pelo menos {{minLength}} blocos',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Deve ser uma data no formato ISO-8601 válido',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Deve ser igual ou anterior a {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Deve ser igual ou posterior a {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Tipo esperado "{{expectedType}}", encontrado "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'Valor não corresponde a nenhum dos valores permitidos',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint': 'Valor "{{hint}}" não corresponde a nenhum dos valores permitidos',
  /** A value is expected, but none is provided */
  'generic.required': 'Obrigatório',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Deve ser maior que {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Deve ser menor que {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Deve ser menor ou igual a {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'A precisão máxima é {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Deve ser maior ou igual a {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Deve ser um número inteiro',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Ativo é necessário',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Arquivo é necessário',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Imagem é necessária',
  /** Media can't be found in the Media Library */
  'object.media-not-found': 'O ativo não pôde ser encontrado na Biblioteca de Mídia',
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': 'Deve ser uma referência a um ativo da Biblioteca de Mídia',
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Deve ser uma referência a um documento',
  /** Object references a document which is not published */
  'object.reference-not-published': 'O documento referenciado deve estar publicado',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Fechar validação',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'Nenhum erro de validação',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validação',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message':
    'O documento será despublicado, nenhum erro de validação será mostrado',

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'Slug deve ter um valor',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'Slug deve ser um objeto',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'Slug já está em uso',

  /** String is not a valid email address */
  'string.email': 'Deve ser um endereço de e-mail válido',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Deve ter exatamente {{wantedLength}} caracteres',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Deve conter apenas caracteres minúsculos',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Deve ter no máximo {{maxLength}} caracteres',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Deve ter pelo menos {{minLength}} caracteres',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'Não corresponde ao padrão "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'Não deve corresponder ao padrão "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Deve conter apenas caracteres maiúsculos',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'Não corresponde aos protocolos/esquemas permitidos',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'Nome de usuário/senha não permitidos',
  /** String is not a valid URL */
  'string.url.invalid': 'Não é uma URL válida',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'URLs relativas não são permitidas',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Apenas URLs relativas são permitidas',
})
