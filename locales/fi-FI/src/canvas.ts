import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** The text for the "Edit in Canvas" action. */
  'action.edit-document': 'Muokkaa Canvasissa',
  /** The text for the "Link to Canvas" action. */
  'action.link-document': 'Linkitä Canvasiin',
  /** The text for the "Link to Canvas" action when the document is not yet resolved. */
  'action.link-document-disabled.initial-value-not-resolved':
    'Odota, kunnes asiakirjan alkuperäiset arvot on selvitetty',
  /** The text for the "Link to Canvas" action when the user doesn't have permissions to link the document to Canvas. */
  'action.link-document-disabled.missing-permissions':
    'Sinulla ei ole oikeuksia linkittää tätä asiakirjaa Canvasiin',
  /** The text for the "Link to Canvas" action when the document is not in the dashboard. */
  'action.link-document-disabled.not-in-dashboard':
    'Avaa tämä asiakirja kojelaudassa linkittääksesi sen Canvasiin',
  /** The text for the "Link to Canvas" action when the document is a version document. */
  'action.link-document-disabled.version-document': 'Versioasiakirjoja ei vielä tueta Canvasissa',
  /** The text for the "Unlink from Canvas" action. */
  'action.unlink-document': 'Poista linkitys Canvasista',

  /** The text for the action button in the banner when the document is linked to Canvas. */
  'banner.edit-document-in-canvas': 'Muokkaa Canvasissa',
  /** The text for the banner when the document is linked to Canvas. */
  'banner.linked-to-canvas': 'Tämä asiakirja on linkitetty Canvasiin',

  /** The text for the "Confirm document changes" dialog cancel button. */
  'dialog.confirm-document-changes.cancel': 'Peruuta',
  /** The text for the "Confirm document changes" dialog confirm button. */
  'dialog.confirm-document-changes.confirm': 'Hyväksy ja jatka',
  /** The description for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.description':
    'Tämän asiakirjan on päivitettävä yhteensopivaksi Canvasin kanssa.\nOlemassa olevaa sisältöä voidaan muokata tai poistaa tämän prosessin osana.',
  /** The description for the "Confirm document changes" dialog footer. */
  'dialog.confirm-document-changes.footer-description':
    'Voit poistaa linkityksen Canvasista milloin tahansa',
  /** The title for the "Confirm document changes" dialog. */
  'dialog.confirm-document-changes.title': 'Vahvista asiakirjan muutokset',
  /** The text for the Link to Canvas dialog when there is a error. */
  'dialog.link-to-canvas.error': 'Linkitys Canvasiin epäonnistui',
  /** The text for the "Link to Canvas" dialog when the document is being redirected. */
  'dialog.link-to-canvas.redirecting': 'Viedään sinut Canvasiin viimeistelemään linkitys...',
  /** The title for the "Link to Canvas" dialog. */
  'dialog.link-to-canvas.title': 'Linkitä Canvasiin',
  /** The text for the "Link to Canvas" dialog when the document is being validated. */
  'dialog.link-to-canvas.validating': 'Validoidaan',
  /** The text for the "Unlink from Canvas" dialog cancel button. */
  'dialog.unlink-from-canvas.cancel': 'Peruuta',
  /** The text for the "Unlink from Canvas" dialog description. */
  'dialog.unlink-from-canvas.description':
    'Kun linkitys on poistettu, sitä voidaan muokata täällä ja tulevat muokkaukset Canvasissa eivät enää automaattisesti päivity tähän asiakirjaan.',
  /** The text for the "Unlink from Canvas" dialog error message. */
  'dialog.unlink-from-canvas.error': 'Linkityksen poisto Canvasista epäonnistui',
  /** The text for the "Unlink from Canvas" dialog success message. */
  'dialog.unlink-from-canvas.success': 'Linkitys Canvasista poistettu',
  /** The title for the "Unlink from Canvas" dialog. */
  'dialog.unlink-from-canvas.title': 'Poista linkitys Canvasista',
  /** The text for the "Unlink from Canvas" dialog unlink button. */
  'dialog.unlink-from-canvas.unlink-action': 'Poista linkitys nyt',
  /** The text for the "Unlink from Canvas" dialog when the document is being unlinked. */
  'dialog.unlink-from-canvas.unlinking':
    'Olet poistamassa linkityksen <strong>“{{documentTitle}}”</strong> Canvasista.',

  /** The text for the "Navigate to Canvas" dialog error message. */
  'navigate-to-canvas-doc.error.missing-permissions':
    'Oikeudet Canvas-näkymään siirtymiseen puuttuvat',
})
