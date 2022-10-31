import { NextPage } from "next"
import { useState } from "react"
import 'react-tailwindcss-select/dist/index.css'
import Select from "react-tailwindcss-select"
import FooterAPP from "../../components/layouts/footer"
import HeaderAPP from "../../components/layouts/header"
import { MenuCourse, MenuFooterMain, MenuMatter, MenuStudentes } from "../../components/menu"
import { CARD_B2_P1_M2, COURSES_FOR_SELECT, DIMENSIONS_FOR_SELECT, FLEX_JICENTER, FLEX_WRAP_AROUND_ICENTER, H_28_W_28, H_4_W_5__6, ITEM_MENU_VIOLET, MATTER_FOR_SELECT, SCREEN, SCROLLBAR_VIOLET, SCROLL_X, SCROLL_Y, STUDENTS_FOR_SELECT, TRANSITION_ALL, TXT_CENTER_B, WORKS_FOR_SELECT } from "../../data/design"
import { DATA_COURSES } from "../../data/college"
import { SEARCH_ICO } from "../../components/ico"

const Note: NextPage = () => {
  const [course, setCourse] = useState<any>(null)
  const [matter, setMatter] = useState<any>(null)
  const [student, setStudent] = useState<any>(null)
  const [dimension, setDimension] = useState<any>(null)
  const [work, setWork] = useState<any>(null)

  const handleCourse = (value: any) => setCourse(value)

  const handleMatter = (value: any) => setMatter(value)

  const handleStudent = (value: any) => setStudent(value)

  const handleDimension = (value: any) => setDimension(value)

  const handleWork = (value: any) => setWork(value)

  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <HeaderAPP />
      <div className="flex flex-row flex-wrap justify-evenly w-screen absolute top-24 py-2 border-2 rounded-lg border-violet-700">
        <div className="w-full pl-8">
          <div className="w-auto absolute bg-white px-2 text-2xl font-thin text-violet-800 rounded-md" style={{top: -20}}>Filtros de nota</div>
        </div>
        <div className="w-2/5 md:w-1/6 m-1">
          <Select
            isClearable
            isSearchable
            value={course}
            onChange={handleCourse}
            options={COURSES_FOR_SELECT}
            placeholder={"Curso"}
          />
        </div>
        <div className="w-2/5 md:w-1/6 m-1">
          <Select
            isClearable
            isSearchable
            value={matter}
            onChange={handleMatter}
            options={MATTER_FOR_SELECT}
            placeholder={"Materia"}
          />
        </div>
        <div className="w-2/5 md:w-1/6 m-1">
          <Select
            isClearable
            isSearchable
            value={student}
            onChange={handleStudent}
            options={STUDENTS_FOR_SELECT}
            placeholder={"Estudiante"}
          />
        </div>
        <div className="w-2/5 md:w-1/6 m-1">
          <Select
            isClearable
            isSearchable
            value={dimension}
            onChange={handleDimension}
            options={DIMENSIONS_FOR_SELECT}
            placeholder={"Ser, Saber..."}
          />
        </div>
        <div className="w-2/5 md:w-1/6 m-1">
          <Select
            isClearable
            isSearchable
            value={work}
            onChange={handleWork}
            options={WORKS_FOR_SELECT}
            placeholder={"Tarea"}
          />
        </div>
        {/* <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>

        </div> */}
        {/* <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>
          {MenuCourse()}
        </div>
        <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>
          {MenuMatter()}
        </div>
        <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>
          {MenuStudentes()}
        </div>
        <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>
          {MenuMatter()}
        </div>
        <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>
          {MenuMatter()}
        </div>
        <div className={`bg-violet-700 w-full ${SCROLL_X} ${SCROLLBAR_VIOLET} flex flex-row border-b-2 border-white`}>
          manera nota
        </div> */}
      </div>
      <div className="absolute right-5 bottom-24 z-10">
        <button className="w-10 h-10 bg-orange-500 text-white rounded-full"><SEARCH_ICO/></button>
      </div>
      <FooterAPP />
    </div>
  )
}

export default Note