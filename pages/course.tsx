import { NextPage } from "next"
import FooterAPP from "../components/layouts/footer"
import HeaderAPP from "../components/layouts/header"
import { CARD_B2_P1_M2, FLEX_JICENTER, FLEX_WRAP_AROUND_ICENTER, H_28_W_28, H_4_W_5__6, ITEM_MENU_VIOLET, SCREEN, SCROLLBAR_VIOLET, SCROLL_Y, TRANSITION_ALL, TXT_CENTER_B } from "../data/design"
import { DATA_COURSES } from './../data/college';

const Course: NextPage = () => {
  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <HeaderAPP />
        <div className={`${FLEX_WRAP_AROUND_ICENTER} ${SCROLL_Y} ${SCROLLBAR_VIOLET} ${H_4_W_5__6} md:w-2/6`}>
          {
            DATA_COURSES.slice(0, 13).map((course, i) => (
              <div key={i} className={`${CARD_B2_P1_M2} ${H_28_W_28} ${TXT_CENTER_B} ${TRANSITION_ALL} ${ITEM_MENU_VIOLET} cursor-pointer`}>
                <span className="h-16 w-16 text-5xl">{ course.course }</span>
                <p className='truncate'>{course.grade}</p>
              </div>
            ))
          }
        </div>
      <FooterAPP />
    </div>
  )
}

export default Course