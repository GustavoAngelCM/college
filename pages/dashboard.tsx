import { NextPage } from "next"

const Dashboard: NextPage = () => {

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-sky-50'>
      <header className='absolute top-0 w-full text-center p-4 bg-sky-700 text-white font-semibold text-sm uppercase'>
        <h1>Bienvenido</h1>
      </header>
      <div className="flex flex-wrap items-center justify-around h-4/6 w-5/6 overflow-y-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-red-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <p className='truncate'>Docentes</p>
        </div>
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <p className='truncate'>Cursos</p>
        </div>
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <p className='truncate'>Estudiantes</p>
        </div>
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className='truncate'>Buscar</p>
        </div>
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
            <line x1="13" y1="8" x2="15" y2="8" />
            <line x1="13" y1="12" x2="15" y2="12" />
          </svg>
          <p className='truncate'>Notas</p>
        </div>
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className='truncate'>Reportes</p>
        </div>
        <div className='border-2 border-sky-700 p-1 rounded-md m-2 cursor-pointer w-28 h-28 text-center text-sky-700 font-bold transition-all duration-1000 hover:bg-sky-200'>
          <svg className="h-16 w-16 text-sky-700 mx-auto" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          <p className='truncate'>Ajustes</p>
        </div>
      </div>
      <footer className='absolute bottom-0 w-full text-center p-4 bg-sky-700 text-white font-semibold text-sm uppercase'>
        <h5>detalles</h5>
      </footer>
    </div>
  )
}

export default Dashboard