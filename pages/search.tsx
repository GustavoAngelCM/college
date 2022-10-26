import { useState } from "react"
import { NextPage } from "next"
import FooterAPP from "../components/layouts/footer"
import HeaderAPP from "../components/layouts/header"
import { FLEX_JICENTER, SCREEN } from "../data/design"

const Search: NextPage = () => {

  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <HeaderAPP />

      <div>
        Buscar estudiantes o docentes
      </div>

      <FooterAPP />
    </div>
  )
}

export default Search