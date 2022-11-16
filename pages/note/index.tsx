import { useState } from "react"
import { NextPage } from "next"
import FooterAPP from "../../components/layouts/footer"
import HeaderAPP from "../../components/layouts/header"
import { FLEX_JICENTER, SCREEN } from "../../data/design"
import { setDoc, updateDoc, useCollection } from 'swr-firestore-v9'
import { faker } from "@faker-js/faker"
import { ENDPOINT_TEST } from "../../utils/firebase"

const Note: NextPage = () => {
  const [endPointCourse, setEndPointCourse] = useState('')
  const { data } = useCollection(ENDPOINT_TEST, { listen: true })
  const { data: materies } = useCollection(endPointCourse, { listen: true })

  const onSaveTest = async () => {
    let maxLimit = 50;
    let fatherOrReference = null;
    let courseReference = '';
    // let slugCourse = true;
    let objCourse = {};
    let refFather = Math.random() * (maxLimit - 0) + 0;

    let parallelLimit = 3;
    let parallelCount = 0;
    let parallels = ['A', 'B', 'C'];

    let sectionLimit = 2;
    let sectionCount = 0;
    let sections = ['primaria', 'secundaria'];

    let coursesLimit = 6;
    let courseCount = 0;

    await Promise.all(Array.from({length: 792}, (_, i) => {
      const _uidChild = faker.datatype.uuid();
      const _uidFather = faker.datatype.uuid();
      const _sexFather: string = faker.name.sex();
      const _sexChild: string = faker.name.sex();
      const _fullNameChild: string = faker.name.fullName({ sex: _sexChild as "female" | "male" });

      if (i % 22 === 0) {
        parallelCount++;
        sectionCount++;
        courseCount++;
        courseReference = faker.datatype.uuid();
        objCourse = {
          uid: courseReference,
          parallel: parallels[parallelCount - 1],
          section: sections[sectionCount - 1],
          course: courseCount
        }
        // await setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/courses/' + courseReference, {
        //   uid: courseReference,
        //   parallel: parallels[parallelCount - 1],
        //   section: sections[sectionCount- 1],
        //   course: courseCount
        // })
        if (parallelCount === parallelLimit) {
          parallelCount = 0;
        }
        if (sectionCount === sectionLimit) {
          sectionCount = 0;
        }
        if (courseCount === coursesLimit) {
          courseCount = 0;
        }
      }

      if (refFather === i) {
        fatherOrReference = _uidFather;
        refFather = Math.random() * ((maxLimit + (Math.random() * (50 - 0) + 0)) - i) + i;
        return Promise.all([
          (i % 22 === 0) ? setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/courses/' + courseReference, objCourse) : null,
          setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/students', {
            uid: _uidChild,
            fullName: _fullNameChild,
            sex: _sexChild,
            direction: faker.address.streetAddress(),
            dateOfBirth: faker.date.birthdate({ min: 4, max: 18, mode: 'age' }),
            email: faker.internet.exampleEmail(),
            rude: faker.datatype.uuid(),
            priestTheTutor: _uidFather
          }),
          setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/courses/' + courseReference + '/students', {
            uid: _uidChild,
            fullName: _fullNameChild,
          })
        ])
      }

      return Promise.all([
        (i % 22 === 0) ? setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/courses/' + courseReference, objCourse) : null,
        setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/fathers', {
          uid: _uidFather,
          fullName: faker.name.fullName({ sex: _sexFather as "female" | "male" }),
          sex: _sexFather,
          direction: faker.address.streetAddress(),
          phone: faker.phone.number('+591 ### ## ###'),
          dateOfBirth: faker.date.birthdate({ min: 19, max: 80, mode: 'age' }),
          job: faker.name.jobTitle(),
          email: faker.internet.exampleEmail()
        }),
        setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/students', {
          uid: _uidChild,
          fullName: _fullNameChild,
          sex: _sexChild,
          direction: faker.address.streetAddress(),
          dateOfBirth: faker.date.birthdate({ min: 4, max: 18, mode: 'age' }),
          email: faker.internet.exampleEmail(),
          rude: faker.datatype.uuid(),
          priestTheTutor: _uidFather
        }),
        setDoc('entityManagement/2uBjsvdlOfC6Nlez8jaM/schoolManagement/QgUOCRzmz4vtS0SmzX3l/courses/' + courseReference + '/students', {
          uid: _uidChild,
          fullName: _fullNameChild,
        })
      ])

    }))
    alert('sucess submit data')

    // setDoc('courses', {
    //   uid: faker.datatype.uuid(),
    //   name: faker.name.jobArea()
    // })

  }

  const onSaveMatter = () => {
    setDoc(endPointCourse, {
      uid: faker.datatype.uuid(),
      name: faker.name.jobArea()
    })
  }

  const selectCourse = (id: string) => {
    setEndPointCourse(`${ENDPOINT_TEST}/${id}/materies`)
  }

  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      <HeaderAPP />
      <div className="flex w-screen h-5/6 bg-red-500">
        <div className="bg-orange-400 w-2/12 py-4">
          <div className="relative bg-amber-500 h-3/6">
            cursos--
            <button onClick={onSaveTest}>add students and fathers</button>
            <ul className="h-5/6 overflow-y-auto">
              {
                data?.map((item, i) => (
                  <li key={i} className="truncate cursor-pointer hover:bg-white hover:text-orange-500" onClick={() => selectCourse(item.id)}>{item.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="relative bg-sky-500 h-3/6">
            materia--
            <button onClick={onSaveMatter}>add</button>
            <ul className="h-5/6 overflow-y-auto">
              {
                materies?.map((item, i) => (
                  <li key={i} className="truncate">{item.name}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div className="bg-green-400 w-8/12 py-4">
          hola
        </div>
        <div className="bg-violet-400 w-2/12 py-4">
          hola
        </div>
      </div>
      {/* <div className="flex flex-row flex-wrap justify-evenly w-screen absolute top-24 py-2 border-2 rounded-lg border-violet-700">
        <div className="w-full pl-8">
          <div className="w-auto absolute bg-white px-2 text-2xl font-thin text-violet-800 rounded-md" style={{top: -20}}>Filtros de nota</div>
        </div>
        <div className="mt-4">
          <table>
            <thead>
              <tr>
                <th className=" text-xs font-light p-2 border-2 border-violet-900">Nro</th>
                <th className=" text-xs font-light p-2 border-2 border-violet-900">Nombre completo</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">1 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">2 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">3 Tarea</th>
                <th className=" text-xs font-light p-2 border-2 border-violet-900">Ser</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">1 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">2 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">3 Tarea</th>
                <th className=" text-xs font-light p-2 border-2 border-violet-900">Saber</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">1 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">2 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">3 Tarea</th>
                <th className=" text-xs font-light p-2 border-2 border-violet-900">Hacer</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">La estacion espacial de estados unidos</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">2 Tarea</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">3 Tarea</th>
                <th className=" text-xs font-light p-2 border-2 border-violet-900">Decidir</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">Auto Evaluacio SER</th>
                <th className="transform -rotate-180 [writing-mode:vertical-lr] text-xs font-light p-2 border-2 border-violet-900 max-h-32">Auto Evaluacio DECIDIR</th>
              </tr>
            </thead>
          </table>
        </div>
        <FilterNote/>
      </div> */}
      {/* <div>
        <input placeholder='Nota' type='text' className={`${WFULL} ${INPUT_PY2_MB4} ${INPUT_PURPLE} text-center`} />
      </div> */}
      {/* <div className="absolute right-5 bottom-24 z-10">
        <button className="w-10 h-10 bg-orange-500 text-white rounded-full shadow-2xl"><TASK_ICO/></button>
      </div> */}

      <FooterAPP />
    </div>
  )
}

export default Note