import {removeUndefinedLocaleResources} from 'sanity'

export default removeUndefinedLocaleResources({
  /** Text in badge above header in Create Link info popover */
  'create-link-info-popover.eyebrow-badge': '초기 접근',
  /** Text above header in Create Link info popover */
  'create-link-info-popover.eyebrow-title': 'Sanity Create',
  /** Header in Create Link info popover */
  'create-link-info-popover.header': '아이디어 중심 저작',
  /** Informational text in Create Link info popover */
  'create-link-info-popover.text':
    'AI 기반 편집기에서 자연스럽게 작성하세요. 내용이 입력하면서 자동으로 Studio 필드에 매핑됩니다.',

  /** Tooltip for Create Link button */
  'create-link-info.tooltip': '더 알아보기',

  /** Edit in Create button text */
  'edit-in-create-button.text': 'Sanity Create로 편집',

  /** Details for the "Linking in progress" dialog */
  'linking-in-progress-dialog.details':
    '링크가 완료되면, 편집 내용이 여기에 실시간으로 표시됩니다.',
  /** Header of the "Linking in progress" dialog */
  'linking-in-progress-dialog.header': 'Sanity Create에 연결 중',
  /** Lede text for the "Linking in progress" dialog */
  'linking-in-progress-dialog.lede':
    'Sanity Create로 돌아가세요. 문서가 자동으로 동기화됩니다(보통 몇 초 걸립니다).',
  /** "Linking in progress" troubleshooting button title */
  'linking-in-progress-dialog.troubleshooting.button.title': '링크 지연?',
  /** "Linking in progress" troubleshooting content */
  'linking-in-progress-dialog.troubleshooting.content':
    'Sanity Create 창이 여전히 열려 있는지, 또는 프로세스가 멈춘 것 같은지 확인하세요. 문제가 지속되면, Studio를 새로고침하고 다시 시도하세요.',

  /** Subtitle of the "Start writing in Create" banner */
  'start-in-create-banner.subtitle':
    '스튜디오 문서와 직접 동기화되는 자유 형식의 AI 기반 편집기입니다.',
  /** Header of the "Start writing in Create" banner */
  'start-in-create-banner.title': 'Sanity Create 시작하기',
  /** Header badge of the "Start writing in Create" banner */
  'start-in-create-banner.title-badge': '초기 접근',

  /** CTA in "Start writing in Create" dialog: Learn more */
  'start-in-create-dialog.cta.learn-more': '더 알아보기',
  /** Toast error message when we dont have a resolved Sanity Create url*/
  'start-in-create-dialog.error-toast.unresolved-url': 'Sanity Create URL을 확인할 수 없습니다.',

  /** "Start in Sanity Create" link button text */
  'start-in-create-link.label': 'Create에서 시작하기',

  /** Text for the document pane banner informing users that the document is linked to Sanity Create */
  'studio-create-link-banner.text': '이 문서는 Sanity Create에 연결되어 있습니다',

  /** Unlink document from Sanity Create button text */
  'unlink-from-create-button.text': '연결 해제',

  /** Unlink from Create dialog: Cancel button text */
  'unlink-from-create-dialog.cancel.text': '취소',
  /** Unlink from Create dialog: Document title used if no other title can be determined */
  'unlink-from-create-dialog.document.untitled.text': '제목 없음',
  /** Unlink from Create dialog – first informational paragraph */
  'unlink-from-create-dialog.first-paragraph':
    '“<strong>{{title}}</strong>”의 Sanity Create 연결을 해제하여 여기에서 편집할 수 있습니다.',
  /** Unlink from Create dialog header */
  'unlink-from-create-dialog.header': 'Studio에서 편집으로 전환하시겠습니까?',
  /** Unlink from Create dialog – second informational paragraph */
  'unlink-from-create-dialog.second-paragraph':
    '두 곳 모두에서 콘텐츠를 유지하게 됩니다. Sanity Create에서의 새로운 변경 사항은 이 Studio와 동기화되지 않을 것입니다.',
  /** Unlink from Create dialog: Unlink button text */
  'unlink-from-create-dialog.unlink.text': '지금 연결 해제',
})
