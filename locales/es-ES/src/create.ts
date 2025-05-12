import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Acceso anticipado',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Autoría basada en ideas',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Escribe de forma natural en un editor potenciado por IA. Tu contenido se mapea automáticamente a los campos del Studio mientras escribes.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Aprender más',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Editar con Sanity Create',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Aprender más',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Este documento está enlazado a Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Desvincular',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Cancelar',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Sin título',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Estás desvinculando “<strong>{{title}}</strong>” de Sanity Create para que pueda ser editado aquí.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': '¿Cambiar la edición a Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Mantendrás tu contenido en ambos lugares. Cualquier cambio nuevo en Sanity Create dejará de sincronizarse con este Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Desvincular ahora',
})
