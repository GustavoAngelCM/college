import { FOOTER_APP, SCROLLBAR_VIOLET, SCROLL_X, TXT_CENTER_P4, TXT_UP_SM_SB, WFULL } from "../../data/design"
import { MenuFooterMain } from "../menu"

const FooterAPP = () => {
  return (
    <footer className={`${TXT_UP_SM_SB} ${WFULL} ${TXT_CENTER_P4} ${FOOTER_APP} ${SCROLL_X} ${SCROLLBAR_VIOLET} bg-violet-600 text-white flex justify-between flex-nowrap`}>
      {MenuFooterMain()}
    </footer>
  )
}

export default FooterAPP