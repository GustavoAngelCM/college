import { useState } from "react"
import { NextPage } from "next"
import FooterAPP from "../components/layouts/footer"
import HeaderAPP from "../components/layouts/header"
import { BUTTON_PURPLE, BUTTON_PY2_PX4_MB4, FLEX_JICENTER, INPUT_PURPLE, INPUT_PY2_MB4, SCREEN, TXT_UP_LG_M, WFULL } from "../data/design"
import { SEARCH_ICO } from "../components/ico"

const Search: NextPage = () => {

  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <HeaderAPP />

      <div className="w-11/12 md:w-7/12">
        <div className="shadow-lg p-4 rounded-lg mb-2 mx-12"><h1 className="text-lg font-thin text-center">Buscar estudiantes o docentes</h1></div>
        <div className="flex flex-row">
          <input placeholder='Nombre o numero de carnet' type='text' className={`${WFULL} ${INPUT_PY2_MB4} ${INPUT_PURPLE} text-center`} />
          <button className={`${BUTTON_PY2_PX4_MB4} ${BUTTON_PURPLE} ${TXT_UP_LG_M} text-white`}>
            <span className="flex items-center w-8 h-8">
              <SEARCH_ICO/>
            </span>
          </button>
        </div>
      </div>

      <FooterAPP />
    </div>
  )
}

export default Search