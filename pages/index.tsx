import type { NextPage } from 'next'
import Image from 'next/image'
import { BUTTON_PURPLE, BUTTON_PY2_PX4_MY3, CARD_WHITE_P4, FLEX_COL, FLEX_ICENTERCOL, FLEX_JICENTER, imagesHorizontal, imagesVertical, INPUT_PURPLE, INPUT_PY2_MB4, I_SCREEN, SCREEN, TXT_UP_LG_M, WFULL, W_11_SM_5 } from './../data/design'
import { useTimer } from 'use-timer'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { useRouter } from 'next/router'
import { IimageToSlide } from '../interfaces/design'

const Slides = (time: number, imagesToSlide: IimageToSlide[]) => imagesToSlide.map((image, i) => (
  <Image
    key={image.id}
    src={image.src}
    className={`${(time % 7 === i) ? '!flex' : '!hidden'} ${I_SCREEN} animate-slide`}
    layout={"fill"}
    alt={image.alt}
  />
))

const Home: NextPage = () => {
  const [imagesToSlide, setImagesToSlide] = useState(imagesHorizontal)
  const { time, start } = useTimer({ interval: 3000 })
  const [width, height] = useWindowSize()
  const router = useRouter()

  const toDashboard = () => router.push('dashboard')

  useEffect(() => {
    if (width < height) {
      setImagesToSlide(imagesVertical)
    } else {
      setImagesToSlide(imagesHorizontal)
    }
  }, [width, height])

  useEffect(() => {
    start()
  }, [start])

  return (
    <div className={`${FLEX_JICENTER} ${SCREEN}`}>
      { Slides(time, imagesToSlide) }
      <div className={`${W_11_SM_5} ${CARD_WHITE_P4} z-10`}>
        <div className={`${FLEX_ICENTERCOL} p-2`}>
          <h1 className='text-center'>College</h1>
          <Image src={'/college-1200.png'} alt={'college logo'} width={80} height={80} />
        </div>
        <div className={`${FLEX_COL} p-4`}> {/* changue for tag form */}
          <label>Correo electronico</label>
          <input placeholder='ejemplo@correo.com' type='text' className={`${WFULL} ${INPUT_PY2_MB4} ${INPUT_PURPLE} text-center`} />
          <label>Contraseña</label>
          <input placeholder='******************' type='password' className={`${WFULL} ${INPUT_PY2_MB4} ${INPUT_PURPLE} text-center`} />
          <button
            onClick={toDashboard}
            className={`${BUTTON_PY2_PX4_MY3} ${BUTTON_PURPLE} ${TXT_UP_LG_M} text-white`}
          >
            Ingresar
          </button>
        </div>        
      </div>
    </div>
  )
}

export default Home