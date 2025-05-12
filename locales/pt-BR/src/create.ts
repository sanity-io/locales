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

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Saiba mais',

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
