import { useState } from "react"
// import 'react-tailwindcss-select/dist/index.css'
import Select from "react-tailwindcss-select"
import { COURSES_FOR_SELECT, DIMENSIONS_FOR_SELECT, MATTER_FOR_SELECT, STUDENTS_FOR_SELECT, WORKS_FOR_SELECT } from "../../data/design"

const FilterNote = () => {
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
    <>
      {/* <div className="w-2/5 md:w-1/6 m-1">
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
      </div> */}
    </>
  )
}

export default FilterNote