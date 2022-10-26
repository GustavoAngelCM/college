import { NextPage } from "next"
import { useRouter } from "next/router"
import { ADJUSTMENT_ICO, COURSE_ICO, NOTE_ICO, REPORT_ICO, SEARCH_ICO, STUDENT_ICO, TEACHER_ICO } from "../components/ico"
import { CARD_B2_P1_M2, FLEX_JICENTER, FLEX_WRAP_AROUND_ICENTER, FOOTER_APP, HEADER_APP, H_28_W_28, H_4_W_5__6, ITEM_MENU_VIOLET, SCREEN, SCROLLBAR_RED, SCROLLBAR_VIOLET, SCROLL_Y, TXT_CENTER_B, TXT_CENTER_P4, TXT_UP_SM_SB, WFULL } from "../data/design"
import { TRANSITION_ALL } from './../data/design'

const Dashboard: NextPage = () => {
  const router = useRouter()

  const toTEACHER_ICO = () => router.push('teacher')

  const toCOURSE_ICO = () => router.push('course')

  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <header className={`${TXT_UP_SM_SB} ${WFULL} ${TXT_CENTER_P4} ${HEADER_APP} bg-violet-600 text-white`}>
        <h1>{`CK - APPS - COLLEGE`}</h1>
      </header>
      <div className={`${FLEX_WRAP_AROUND_ICENTER} ${SCROLL_Y} ${SCROLLBAR_VIOLET} ${H_4_W_5__6} md:w-2/6`}>
        <div onClick={toTEACHER_ICO} className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><TEACHER_ICO  /></span>
          <p className='truncate'>Docentes</p>
        </div>
        <div onClick={toCOURSE_ICO} className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><COURSE_ICO   /></span>
          <p className='truncate'>Cursos</p>
        </div>
        <div className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><STUDENT_ICO   /></span>
          <p className='truncate'>Estudiantes</p>
        </div>
        <div className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><SEARCH_ICO   /></span>
          <p className='truncate'>Buscar</p>
        </div>
        <div className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><NOTE_ICO   /></span>
          <p className='truncate'>Notas</p>
        </div>
        <div className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><REPORT_ICO   /></span>
          <p className='truncate'>Reportes</p>
        </div>
        <div className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
          <span className="h-16 w-16"><ADJUSTMENT_ICO   /></span>
          <p className='truncate'>Ajustes</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard