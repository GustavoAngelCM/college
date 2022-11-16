import { useEffect } from "react"
import { ITEMS_MENU_GENERAL } from "../../data/design"
import { useRouter } from "next/router"
import { DATA_COURSES, DATA_MATTER } from "../../data/college"
import { CLOSE_ICO } from "../ico"
import { DATA_STUDENTS } from "./../../data/college"

const MenuFooterMain = () => {
  const router = useRouter()

  const to = (pathname: string) => router.push(pathname)

  useEffect(() => {
    console.log(router.pathname)
  }, [router.pathname])

  return ITEMS_MENU_GENERAL.map((item, i) => {
    if (item.path === router.pathname) {
      return (
        <div key={i} className="mx-2 px-4 py-2 text-white flex flex-row items-center border-b-2 border-white shadow-md rounded-md">
          <span className="flex items-center h-8 w-8"><item.ico /></span>
          {item.name}
        </div>
      )
    }
    return (
      <button key={i} onClick={() => to(item.path)} className="mx-2 px-4 py-2 bg-violet-500 rounded-sm flex flex-row items-center">
        <span className="flex items-center h-8 w-8"><item.ico /></span>
        {item.name}
      </button>
    )
  })
}

export {
  MenuFooterMain
}