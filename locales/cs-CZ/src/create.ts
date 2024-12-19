import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Předběžný přístup',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Autorství zaměřené na nápad',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Pište přirozeně v editoru poháněném umělou inteligencí. Váš obsah se automaticky mapuje do polí Studia, jak píšete.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Zjistit více',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Editovat pomocí Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Jakmile bude propojení dokončeno, vaše úpravy se zde objeví v reálném čase.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Propojení se Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Vraťte se zpět do Sanity Create. Váš dokument se automaticky synchronizuje (obvykle trvá několik sekund).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Zpoždění propojení?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Zkontrolujte, zda je okno Sanity Create stále otevřené, nebo zda proces není zaseknutý. Pokud problémy přetrvávají, zkuste obnovit Studio a zkuste to znovu.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    'Volně formátovatelný editor s podporou AI, který se přímo synchronizuje s vašimi dokumenty ve Studiu.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Začněte používat Sanity Create',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': 'Předběžný přístup',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Zjistit více',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Nelze určit URL Sanity Create.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Začít v Create',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Tento dokument je propojen se Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Odpojit',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Zrušit',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Bez názvu',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Odpojujete „<strong>{{title}}</strong>“ od Sanity Create, aby bylo možné jej editovat zde.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Přepnout úpravy do Studia?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    'Váš obsah zůstane na obou místech. Jakékoli nové změny v Sanity Create přestanou být synchronizovány s tímto Studiem.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': 'Odpojit nyní',
})
