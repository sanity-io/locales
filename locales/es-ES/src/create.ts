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

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Una vez enlazado, tus ediciones aparecerán aquí en tiempo real.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Enlazando a Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Vuelve a Sanity Create. Tu documento se sincronizará automáticamente (generalmente toma unos segundos).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': '¿Enlace retrasado?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Comprueba si tu ventana de Sanity Create sigue abierta, o si el proceso parece atascado. Si los problemas persisten, intenta refrescar el Studio e intenta de nuevo.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Comenzar en Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Continuar',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Aprender más',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Esto se abre en una nueva ventana, enlazada directamente a este documento.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'No recordar de nuevo',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'No se puede determinar la URL de Sanity Create.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Escribe de forma natural, publica estructurado',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Crea contenido a tu manera en un editor potenciado por IA. Tu escritura se mapea automáticamente a los campos correctos en Sanity Studio mientras escribes.',

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
