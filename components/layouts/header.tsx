import { useRouter } from "next/router"
import { HEADER_APP, TXT_UP_SM_SB, WFULL } from "../../data/design"
import { BACK_ICO, HOME_ICO, RELOAD_ICO, USER_ICO } from "../ico"

const HeaderAPP = () => {
  const { push, back, reload } = useRouter()

  const toHome = () => push('dashboard')

  const toBack = () => back()

  const toReload = () => reload()

  return (
    <header className={`${TXT_UP_SM_SB} ${WFULL} ${HEADER_APP} flex justify-between items-center p-4 bg-violet-600 text-white`}>
      <h1>
        <button className="mx-2 px-2 py-2 bg-orange-500 rounded-md">[3/3] 2022</button>
      </h1>
      <button className="mx-2 px-2 py-2 bg-violet-500 rounded-full" onClick={toBack}>
        <span className="flex items-center h-7 w-7"><BACK_ICO /></span>
      </button>
      <button className="mx-2 px-2 py-2 border-b-violet-500 border-b-2 shadow-md rounded-md" onClick={toHome}>
        <span className="flex items-center h-7 w-7"><HOME_ICO /></span>
      </button>
      <button className="mx-2 px-2 py-2 bg-violet-500 rounded-full">
        <span className="flex items-center h-7 w-7"><RELOAD_ICO /></span>
      </button>
      <button className="flex items-center mx-2 px-4 py-2">
        <span className="mr-1">crgt</span>
        <span className="flex items-center h-7 w-7"><USER_ICO /></span>
      </button>
    </header>
  )
}

export default HeaderAPP