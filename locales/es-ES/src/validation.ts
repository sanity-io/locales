import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Array must have exactly "$wantedLength" items, but has more/less */
  'array.exact-length': 'Debe tener exactamente {{wantedLength}} elementos',
  /** Portable Text array must have exactly "$wantedLength" blocks, but has more/less */
  'array.exact-length_blocks': 'Debe tener exactamente {{wantedLength}} bloques',
  /** Array item is a duplicate, but array wants only unique items */
  'array.item-duplicate': 'No puede ser un duplicado',
  /** Array has more than the maximum of "$maxLength" items */
  'array.maximum-length': 'Debe tener como máximo {{maxLength}} elementos',
  /** Portable Text array has more than the maximum of "$maxLength" items */
  'array.maximum-length_blocks': 'Debe tener como máximo {{maxLength}} bloques',
  /** Array has less than the minimum of "$minLength" items */
  'array.minimum-length': 'Debe tener al menos {{minLength}} elementos',
  /** Portable Text array has less than the minimum of "$minLength" blocks */
  'array.minimum-length_blocks': 'Debe tener al menos {{minLength}} bloques',

  /** Date is not valid or not in the correct format (ISO-8601) */
  'date.invalid-format': 'Debe ser una cadena de fecha con formato ISO-8601 válido',
  /** Date is later than the given maximum date "$maxDate" */
  'date.maximum': 'Debe ser en o antes de {{maxDate}}',
  /** Date is earlier than the given minimum date "$minDate" */
  'date.minimum': 'Debe ser en o después de {{minDate}}',

  /** A value of incorrect type is found, eg found `number` instead of `string` */
  'generic.incorrect-type': 'Se esperaba el tipo "{{expectedType}}", se obtuvo "{{actualType}}"',
  /** Value is not one of the values specifically allowed */
  'generic.not-allowed': 'El valor no coincide con ninguno de los valores permitidos',
  /** Value "$givenValue" is not one of the values specifically allowed */
  'generic.not-allowed_hint':
    'El valor "{{hint}}" no coincide con ninguno de los valores permitidos',
  /** A value is expected, but none is provided */
  'generic.required': 'Requerido',

  /** Number is less than the given minimum threshold value "$threshold" */
  'number.greater-than': 'Debe ser mayor que {{threshold}}',
  /** Number is greater than the given maximum threshold value "$threshold" */
  'number.less-than': 'Debe ser menor que {{threshold}}',
  /** Number is higher than the given maximum value "$maxNumber" */
  'number.maximum': 'Debe ser menor o igual a {{maxNumber}}',
  /** Number has more precision (decimals) than the allowed "$limit" */
  'number.maximum-precision': 'La máxima precisión es {{limit}}',
  /** Number is lower than the given minimum value "$minNumber" */
  'number.minimum': 'Debe ser mayor o igual a {{minNumber}}',
  /** Number is not an integer ("whole number") */
  'number.non-integer': 'Debe ser un número entero',

  /** Object is missing a reference to an asset document in its `asset` field */
  'object.asset-required': 'Se requiere un archivo',
  /** Object is missing a reference to a file asset document in its `asset` field */
  'object.asset-required_file': 'Se requiere un archivo',
  /** Object is missing a reference to an image asset document in its `asset` field */
  'object.asset-required_image': 'Se requiere una imagen',
  /** Media can't be found in the Media Library */
  'object.media-not-found': undefined, // 'The asset could not found in the Media Library'
  /** Media object is missing a reference to a document in its `_ref` field */
  'object.not-media-library-asset': undefined, // 'Must be a reference to a Media Library asset'
  /** Object is not a reference to a document (eg `{_ref: 'documentId'}`) */
  'object.not-reference': 'Debe ser una referencia a un documento',
  /** Object references a document which is not published */
  'object.reference-not-published': 'El documento referenciado debe estar publicado',

  /** Accessibility label for closing the validation panel */
  'panel.close-button-aria-label': 'Cerrar validación',
  /** Message shown when the validation panel is opened but there are no errors/warnings */
  'panel.no-errors-message': 'No hay errores de validación',
  /** Title for the actual "Validation" panel/feature */
  'panel.title': 'Validación',
  /** Message shown when the validation panel is opened but the document is going to unpublish */
  'panel.unpublish-message': undefined, // 'Document is going to unpublish, no validation errors are shown'

  /** Slug is an object, but is missing a `current` string property */
  'slug.missing-current': 'El slug debe tener un valor',
  /** Slug is not an object (eg `{current: 'some-slug'}`) */
  'slug.not-object': 'El slug debe ser un objeto',
  /** Slug is already in use somewhere else, but needs to be unique */
  'slug.not-unique': 'El slug ya está en uso',

  /** String is not a valid email address */
  'string.email': 'Debe ser una dirección de correo electrónico válida',
  /** String has a different character length than the exact number "$wantedLength" */
  'string.exact-length': 'Debe tener exactamente {{wantedLength}} caracteres de longitud',
  /** String contains characters that are not in lowercase  */
  'string.lowercase': 'Debe estar en minúsculas',
  /** String is longer than the limit of "$maxLength" characters */
  'string.maximum-length': 'Debe tener como máximo {{maxLength}} caracteres de longitud',
  /** String is shorter than the limit of "$minLength" characters */
  'string.minimum-length': 'Debe tener al menos {{minLength}} caracteres de longitud',
  /** String does not match the given regular expression, but should */
  'string.regex-does-not-match': 'No coincide con el patrón "{{name}}"',
  /** String matches the given regular expression, but should not */
  'string.regex-match': 'No debe coincidir con el patrón "{{name}}"',
  /** String contains characters that are not in uppercase */
  'string.uppercase': 'Debe estar en mayúsculas',
  /** String contains a protocol/scheme that is not allowed, eg (`ftp`, `mailto`…) */
  'string.url.disallowed-scheme': 'No coincide con los protocolos/esquemas permitidos',
  /** String contains a URL with a username or password specified before the host */
  'string.url.includes-credentials': 'No se permite nombre de usuario/contraseña',
  /** String is not a valid URL */
  'string.url.invalid': 'No es una URL válida',
  /** String is not an absolute URL (eg it is missing a protocol/host) */
  'string.url.not-absolute': 'No se permiten URLs relativas',
  /** String is not a relative URL (eg it contains a protocol/host) */
  'string.url.not-relative': 'Solo se permiten URLs relativas',
})
