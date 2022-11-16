import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fuego, FuegoProvider } from 'swr-firestore-v9'
import { firebaseConfig } from '../utils/firebase'

const fuego = new Fuego(firebaseConfig)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <FuegoProvider fuego={fuego}>
        <Head><title>Colegio</title></Head>
        <Component {...pageProps} />
      </FuegoProvider>
    </>
  )
}
export default MyApp
