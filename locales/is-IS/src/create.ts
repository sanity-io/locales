import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': 'Snemmtækur aðgangur',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': 'Hugmyndasniðin ritun',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'Skrifaðu náttúrulega í gervigreindarstuddum ritli. Innihaldið þitt kortleggst sjálfkrafa á Studio reiti þegar þú skrifar.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': 'Lærðu meira',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Breyta með Sanity Create',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    'Eftir að tenging er lokið munu breytingar þínar birtast hér í rauntíma.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Tengist við Sanity Create',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Faraðu aftur í Sanity Create. Skjalið þitt mun samstillast sjálfkrafa (tekur venjulega nokkrar sekúndur).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': 'Tenging tafin?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Athugaðu hvort Sanity Create glugginn þinn er enn opinn, eða ef ferlið virðist vera fast. Ef vandamál viðvarandi, reyndu að endurnýja Studio og reyndu aftur.',

  /** "Start in Sanity Create" action button text */
  'start-in-create-action.label': 'Byrja í Sanity Create',

  /** CTA in "Start writing in Create" dialog: Continue to create */
  'start-in-create-dialog.cta.continue': 'Halda áfram',
  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': 'Lærðu meira',
  /** The details on what "Start writing in Create" implies */
  'start-in-create-dialog.details': 'Þetta opnast í nýjum glugga, tengt beint við þetta skjal.',
  /** Text for checkbox in "Start writing in Create" dialog for disabling the dialog in the future */
  'start-in-create-dialog.dont-remind-me-checkbox': 'Ekki minna mig á aftur',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Ekki hægt að ákvarða Sanity Create URL.',
  /** Header of the "Start writing in Create" dialog */
  'start-in-create-dialog.header': 'Skrifaðu eðlilega, birtu skipulagt',
  /** The lede text in the "Start writing in Create" dialog */
  'start-in-create-dialog.lede':
    'Búðu til efni á þinn hátt í gervigreindarstuddum ritli. Það sem þú skrifar kortleggst sjálfkrafa á réttu reitina í Sanity Studio þegar þú skrifar.',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': 'Þetta skjal er tengt við Sanity Create',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': 'Aftengja',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': 'Hætta við',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': 'Ótitlað',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    'Þú ert að aftengja “<strong>{{title}}</strong>” frá Sanity Create svo hægt sé að breyta því hér.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Skipta ritun yfir í Studio?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph': undefined, // 'You’ll keep your content in both places. Any new changes in Sanity Create will stop syncing to this Studio.'
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': undefined, // 'Unlink now'
})
