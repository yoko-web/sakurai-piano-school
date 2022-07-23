import '../styles/globals.css'
import "swiper/css/bundle";
import "../styles/swiper-styles.css";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
