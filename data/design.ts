import { IimageToSlide } from "../interfaces/design"
import { ADJUSTMENT_ICO, COURSE_ICO, NOTE_ICO, REPORT_ICO, SEARCH_ICO, STUDENT_ICO, TEACHER_ICO } from "../components/ico"

export const imagesHorizontal: IimageToSlide[] = [
  {
    id: "bgh1",
    src: "/bg-h-1.jpg",
    alt: "bg horizontal 1"
  },
  {
    id: "bgh2",
    src: "/bg-h-2.jpg",
    alt: "bg horizontal 2"
  },
  {
    id: "bgh3",
    src: "/bg-h-3.jpg",
    alt: "bg horizontal 3"
  },
  {
    id: "bgh4",
    src: "/bg-h-4.jpg",
    alt: "bg horizontal 4"
  },
  {
    id: "bgh5",
    src: "/bg-h-5.jpg",
    alt: "bg horizontal 5"
  },
  {
    id: "bgh6",
    src: "/bg-h-6.jpg",
    alt: "bg horizontal 6"
  },
  {
    id: "bgh7",
    src: "/bg-h-7.jpg",
    alt: "bg horizontal 7"
  }
]

export const imagesVertical: IimageToSlide[] = [
  {
    id: "bgv1",
    src: "/bg-v-1.jpg",
    alt: "bg vertical 1"
  },
  {
    id: "bgv2",
    src: "/bg-v-2.jpg",
    alt: "bg vertical 2"
  },
  {
    id: "bgv3",
    src: "/bg-v-3.jpg",
    alt: "bg vertical 3"
  },
  {
    id: "bgv4",
    src: "/bg-v-4.jpg",
    alt: "bg vertical 4"
  },
  {
    id: "bgv5",
    src: "/bg-v-5.jpg",
    alt: "bg vertical 5"
  },
  {
    id: "bgv6",
    src: "/bg-v-6.jpg",
    alt: "bg vertical 6"
  },
  {
    id: "bgv7",
    src: "/bg-v-7.jpg",
    alt: "bg vertical 7"
  }
]

export const ITEMS_MENU_GENERAL = [
  {
    name: "Docentes",
    ico: TEACHER_ICO,
    path: "/teacher"
  },
  {
    name: "Cursos",
    ico: COURSE_ICO,
    path: "/course"
  },
  {
    name: "Estudiantes",
    ico: STUDENT_ICO,
    path: "/student"
  },
  {
    name: "Buscar",
    ico: SEARCH_ICO,
    path: "/search"
  },
  {
    name: "Notas",
    ico: NOTE_ICO,
    path: "/note"
  },
  {
    name: "Reportes",
    ico: REPORT_ICO,
    path: "/report"
  },
  {
    name: "Ajustes",
    ico: ADJUSTMENT_ICO,
    path: "/adjustment"
  }
]

export const I_SCREEN = "!w-screen !h-screen"

export const SCREEN = "w-screen h-screen"

export const FLEX = "flex"

export const FLEX_ICENTER = "flex items-center"

export const FLEX_COL = "flex flex-col"

export const FLEX_ICENTERCOL = "flex items-center flex-col"

export const FLEX_JCENTER = "flex justify-center"

export const FLEX_JICENTER = "flex justify-center items-center"

export const FLEX_WRAP_AROUND_ICENTER = "flex flex-wrap items-center justify-around"

export const W_11_SM_5 = "w-11/12 sm:w-5/12"

export const H_4_W_5__6 = "h-4/6 w-5/6"

export const H_28_W_28 = "w-28 h-28"

export const WFULL = "w-full"

export const CARD_WHITE_P4 = "rounded-md bg-white p-4"

export const CARD_B2_P1_M2 = "rounded-md border-2 p-1 m-2"

export const INPUT_PY2_MB4 = "rounded-md py-2 mb-4"

export const BUTTON_PY2_PX4_MY3 = "rounded-lg py-2 px-4 my-3"

export const TXT_UP_LG_M = "uppercase text-lg font-medium"

export const TXT_UP_SM_SB = "uppercase text-sm font-semibold"

export const TXT_CENTER_B = "text-center  font-bold"

export const TXT_CENTER_P4 = "text-center p-4"

export const HEADER_APP = "absolute top-0"

export const FOOTER_APP = "absolute bottom-0"

export const INPUT_SKY = "bg-sky-200 focus:outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700 text-sky-800"

export const INPUT_PURPLE = "bg-purple-200 focus:outline-none focus:border-purple-700 focus:ring-2 focus:ring-purple-700 text-purple-800"

export const BUTTON_SKY = "bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-400"

export const BUTTON_PURPLE = "bg-purple-500 hover:bg-purple-600 active:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-400"

export const SCROLLBAR_RED = "scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-red-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"

export const SCROLLBAR_VIOLET = "scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-violet-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"

export const SCROLL_Y = "overflow-y-auto"

export const SCROLL_X = "overflow-x-auto"

export const ITEM_MENU_SKY = "text-sky-600 border-sky-600 hover:bg-sky-100"

export const ITEM_MENU_VIOLET = "text-violet-600 border-violet-600 hover:bg-violet-100"

export const TRANSITION_ALL = "transition-all duration-1000"

