import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Acesso antecipado',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Autoria orientada por ideias',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Escreva naturalmente em um editor potencializado por IA. Seu conteúdo mapeia automaticamente para os campos do Studio enquanto você digita.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Saiba mais',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Editar com Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Uma vez vinculado, suas edições aparecerão aqui em tempo real.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Vinculando ao Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Volte para o Sanity Create. Seu documento será sincronizado automaticamente (geralmente leva alguns segundos).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Vinculação atrasada?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Verifique se a janela do Sanity Create ainda está aberta, ou se o processo parece estar travado. Se os problemas persistirem, tente atualizar o Studio e tente novamente.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Começar no Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Continuar',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Saiba mais',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details':
    'Isso abre em uma nova janela, vinculada diretamente a este documento.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Não me lembre novamente',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url':
    'Não foi possível determinar a URL do Sanity Create.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Escreva naturalmente, publique de forma estruturada',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Crie conteúdo do seu jeito em um editor potencializado por IA. O que você escreve mapeia automaticamente para os campos certos no Sanity Studio enquanto digita.',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Este documento está vinculado ao Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Desvincular',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Cancelar',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Sem título',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Você está desvinculando “<strong>{{title}}</strong>” do Sanity Create para que possa ser editado aqui.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Alterar edição para o Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Você manterá seu conteúdo em ambos os lugares. Quaisquer novas alterações no Sanity Create deixarão de sincronizar com este Studio.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Desvincular agora',
})
