import type { NextPage } from 'next'
import Image from 'next/image'
import { imagesHorizontal, imagesVertical } from './../data/design'
import { useTimer } from 'use-timer'
import { useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size';
import { useRouter } from 'next/router';

const SlidesHorizontal = (time: number) => imagesHorizontal.map((image, i) => (
  <Image
    key={image.id}
    src={image.src}
    className={`${(time % 7 === i) ? '!flex' : '!hidden'} !w-screen !h-screen animate-slide`}
    layout={"fill"}
    alt={image.alt}
  />
))

const SlidesVertical = (time: number) => imagesVertical.map((image, i) => (
  <Image
    key={image.id}
    src={image.src}
    className={`${(time % 7 === i) ? '!flex' : '!hidden'} !w-screen !h-screen animate-slide`}
    layout={"fill"}
    alt={image.alt}
  />
))

const Home: NextPage = () => {
  const { time, start } = useTimer({ interval: 3000 })
  const [width, height] = useWindowSize()
  const router = useRouter()

  const toDashboard = () => router.push('dashboard')

  useEffect(() => {
    start()
  }, [start])

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      {
        (width < height) ?
          SlidesVertical(time)
          :
          SlidesHorizontal(time)
      }
      <div className='p-4 rounded-md bg-white z-10 sm:w-5/12 w-11/12'>
        <div className='p-2 flex flex-col items-center'>
          <h1 className='text-center'>College</h1>
          <Image src={'/college-1200.png'} alt={'college logo'} width={80} height={80} />
        </div>
        <div className='flex flex-col p-4'> {/* changue for tag form */}
          <label>Correo electronico</label>
          <input placeholder='ejemplo@correo.com' type='text' className='text-center w-full py-2 mb-4 bg-sky-200 rounded-md focus:outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700 text-sky-700' />
          <label>Contraseña</label>
          <input placeholder='******************' type='password' className='text-center w-full py-2 mb-4 bg-sky-200 rounded-md focus:outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700 text-sky-700' />
          <button
            onClick={toDashboard}
            className={'bg-sky-500 my-3 py-2 px-4 rounded-lg text-white uppercase text-l font-medium hover:bg-sky-600 active:bg-sky-700 focus:outline-none focus:ring focus:ring-sky-400'}
          >
            Ingresar
          </button>
        </div>        
      </div>
    </div>
  )
}

export default Home