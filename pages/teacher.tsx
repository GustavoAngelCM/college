import { useState } from "react"
import { NextPage } from "next"
import { DATA_TEACHERS } from "../data/college"
import { FLEX_JICENTER, FLEX_WRAP_AROUND_ICENTER, H_4_W_5__6, SCREEN, SCROLLBAR_VIOLET, SCROLL_Y } from "../data/design"
import HeaderAPP from "../components/layouts/header"
import FooterAPP from "../components/layouts/footer"

const Teacher: NextPage = () => {
  const [teachersF, setTeachersF] = useState(DATA_TEACHERS())
  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <HeaderAPP />

      <div className={`${FLEX_WRAP_AROUND_ICENTER} ${H_4_W_5__6} flex-col`}>
        <div className="shadow-lg p-4 rounded-lg"><h1 className="text-lg font-thin">Lista de profesores Gestion-2022</h1></div>
        <div className={`${SCROLL_Y} ${SCROLLBAR_VIOLET} h-2/3 w-full md:w-6/12`}>
          <table className="w-full bg-violet-50">
            <thead className="sticky top-0">
              <tr className="bg-violet-700 text-white">
                <th className="p-2">Nro</th>
                <th className="p-2">Apellidos y nombres</th>
                <th className="p-2">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {
                teachersF.map((_teacher, i) => (
                  <tr key={_teacher.uid}>
                    <td className="p-2">{ i + 1 }</td>
                    <td className="p-2">{_teacher.fullName}</td>
                    <td className="p-2 flex justify-evenly">
                      <button>
                        <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button>
                        <svg className="h-8 w-8 text-yellow-500" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />  <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />  <line x1="16" y1="5" x2="19" y2="8" /></svg>
                      </button>
                      <button>
                        <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      <FooterAPP/>
    </div>
  )
}

export default Teacher