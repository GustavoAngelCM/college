import type { NextPage } from 'next'
import Image from 'next/image'
import { imagesHorizontal, imagesVertical } from './../data/design'
import { useTimer } from 'use-timer'
import { useEffect } from 'react';
import { useWindowSize } from '@react-hook/window-size';

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

  useEffect(() => {
    start()
  }, [start])

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div>
        {
          ( width < height ) ? 
            SlidesVertical(time)
            :
            SlidesHorizontal(time)
        }
      </div>
    </div>
  )
}

export default Home